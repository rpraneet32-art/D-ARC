import fitz
import os
from PIL import Image
import numpy as np

target_pdf = r"C:\Users\rpran\OneDrive\Desktop\speed project\003.pdf"
out_path = r"public\assets\logo-from-pdf-processed.png"

def process_logo():
    # 1. Render PDF to image at high DPI
    if not os.path.exists(target_pdf):
        print("PDF not found")
        return
        
    doc = fitz.open(target_pdf)
    page = doc.load_page(0)
    # 600 DPI is a good balance for high quality and manageable size
    pix = page.get_pixmap(alpha=True, dpi=600)
    
    # 2. Convert to PIL Image and make transparent
    img = Image.frombytes("RGBA", [pix.width, pix.height], pix.samples)
    
    # Convert to numpy array for fast processing
    arr = np.array(img)
    
    # The logo might have a white background. Let's make anything close to white transparent.
    # A pixel is considered white background if R, G, B are all > 240
    white_mask = (arr[:, :, 0] > 240) & (arr[:, :, 1] > 240) & (arr[:, :, 2] > 240)
    arr[white_mask, 3] = 0  # Set alpha to 0 for white pixels
    
    # We might also want to make dark fringe/borders transparent if requested, but usually 
    # making white transparent is what's meant by "make it fully transparent".
    
    # 3. Find the bounding box of non-transparent pixels
    # Find rows and columns where alpha > 0
    non_transparent = arr[:, :, 3] > 0
    rows = np.any(non_transparent, axis=1)
    cols = np.any(non_transparent, axis=0)
    
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]
    
    # 4. Remove the "Architectural Interior" line
    # Usually there is a horizontal gap between the main logo and the subtext.
    # We can look at the row sums of alpha values to find this gap in the bottom half.
    
    # Extract just the bounding box rows
    content_rows = rows[ymin:ymax+1]
    
    # We look for a gap (a sequence of False or very low True density) in the bottom 40%
    search_start = int(len(content_rows) * 0.6)
    
    gap_y = ymax
    # Iterate backwards from bottom to find the first significant gap
    in_text = True
    gap_found = False
    
    for i in range(len(content_rows)-1, search_start, -1):
        if content_rows[i]:
            if not in_text and gap_found:
                # We found the main logo above the gap
                gap_y = ymin + i
                break
        else:
            in_text = False
            gap_found = True
            
    # If a gap was found, update ymax
    if gap_found and gap_y < ymax:
        ymax = gap_y
        
    # Add a small padding (e.g. 5 pixels)
    pad = 5
    ymin = max(0, ymin - pad)
    ymax = min(img.height - 1, ymax + pad)
    xmin = max(0, xmin - pad)
    xmax = min(img.width - 1, xmax + pad)
    
    # 5. Crop the image
    cropped_arr = arr[ymin:ymax+1, xmin:xmax+1]
    final_img = Image.fromarray(cropped_arr)
    
    # 6. Optimize and save
    # Resize down if it's too large for web (e.g., width > 1200)
    max_width = 1200
    if final_img.width > max_width:
        ratio = max_width / final_img.width
        new_size = (max_width, int(final_img.height * ratio))
        final_img = final_img.resize(new_size, Image.Resampling.LANCZOS)
        
    final_img.save(out_path, "PNG", optimize=True)
    print(f"Processed logo saved to {out_path} with final size {final_img.size}")

if __name__ == "__main__":
    process_logo()
