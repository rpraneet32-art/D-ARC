from PIL import Image

input_path = r"public\assets\logo-from-pdf.png"
output_path = r"public\assets\logo-from-pdf-processed.png"

try:
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    min_x, min_y = img.width, img.height
    max_x, max_y = 0, 0
    
    # We want to remove any dark fringe. The logo is yellow (high R, high G, low B) and white (high R, G, B).
    # If a pixel is dark (e.g. R < 150 AND G < 150 AND B < 150), or if it's explicitly a black/dark gray border.
    # A simple way to kill the dark fringe is checking if max(R,G,B) < 180.
    
    for y in range(img.height):
        for x in range(img.width):
            item = datas[y * img.width + x]
            
            # If the pixel is relatively dark (not bright white or yellow), make it transparent
            if item[0] < 120 and item[1] < 120:
                newData.append((0, 0, 0, 0))
            elif max(item[0], item[1], item[2]) < 180:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    img.putdata(newData)
    
    # Crop to the tightly found bounding box
    if max_x >= min_x and max_y >= min_y:
        pad = 2
        crop_box = (
            max(0, min_x - pad), 
            max(0, min_y - pad), 
            min(img.width, max_x + pad), 
            min(img.height, max_y + pad)
        )
        img = img.crop(crop_box)
        
    img.save(output_path, "PNG")
    print(f"Processed logo saved to {output_path} with bounds ({min_x}, {min_y}) to ({max_x}, {max_y})")

except Exception as e:
    print(f"Error processing image: {e}")
