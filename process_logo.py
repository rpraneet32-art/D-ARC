from PIL import Image

input_path = r"public\assets\logo-from-pdf.png"
output_path = r"public\assets\logo-from-pdf-processed.png"

try:
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    # Find the bounding box of non-black/near-black pixels
    # We will also convert near-black pixels to transparent
    newData = []
    min_x, min_y = img.width, img.height
    max_x, max_y = 0, 0
    
    threshold = 30 # RGB values below this are considered black
    
    for y in range(img.height):
        for x in range(img.width):
            item = datas[y * img.width + x]
            # Check if pixel is dark (black background)
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                newData.append((0, 0, 0, 0)) # Fully transparent
            else:
                newData.append(item)
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    img.putdata(newData)
    
    # Crop to the bounding box
    if max_x >= min_x and max_y >= min_y:
        # Add a small padding
        pad = 5
        crop_box = (
            max(0, min_x - pad), 
            max(0, min_y - pad), 
            min(img.width, max_x + pad), 
            min(img.height, max_y + pad)
        )
        img = img.crop(crop_box)
        
    img.save(output_path, "PNG")
    print(f"Processed logo saved to {output_path}")

except Exception as e:
    print(f"Error processing image: {e}")
