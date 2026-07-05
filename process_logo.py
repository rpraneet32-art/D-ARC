from PIL import Image

input_path = r"public\assets\logo-from-pdf.png"
output_path = r"public\assets\logo-from-pdf-processed.png"

try:
    img = Image.open(input_path).convert("RGBA")
    # get_flattened_data is available in newer Pillow, but getdata() is still fine for now. We can just use getdata.
    datas = img.getdata()

    newData = []
    min_x, min_y = img.width, img.height
    max_x, max_y = 0, 0
    
    # The background is dark gray. The logo is white and yellow.
    # Yellow is roughly (255, 235, 0), White is (255, 255, 255)
    # We will remove anything where R, G, and B are all less than 150.
    
    threshold = 120
    
    for y in range(img.height):
        for x in range(img.width):
            item = datas[y * img.width + x]
            
            # If it's a dark color (gray/black background), make it transparent
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
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
