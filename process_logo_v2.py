import fitz
import os
from PIL import Image
import numpy as np

target_pdf = r"C:\Users\rpran\OneDrive\Desktop\speed project\003.pdf"
out_path = r"public\assets\logo-from-pdf-processed.png"

def process_logo():
    if not os.path.exists(target_pdf):
        print("PDF not found")
        return
        
    # Render at 600 DPI
    doc = fitz.open(target_pdf)
    page = doc.load_page(0)
    pix = page.get_pixmap(alpha=True, dpi=600)
    
    img = Image.frombytes("RGBA", [pix.width, pix.height], pix.samples)
    arr = np.array(img)
    
    # 1. Make white background fully transparent
    white_mask = (arr[:, :, 0] > 240) & (arr[:, :, 1] > 240) & (arr[:, :, 2] > 240)
    arr[white_mask, 3] = 0
    
    # 2. Find overall bounding box of non-transparent pixels
    non_transparent = arr[:, :, 3] > 0
    rows = np.any(non_transparent, axis=1)
    cols = np.any(non_transparent, axis=0)
    
    if not np.any(rows):
        print("Image is entirely transparent.")
        return
        
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]
    
    # Extract just the rows that have content
    content_rows = rows[ymin:ymax+1]
    
    # Calculate row densities (how many pixels are non-transparent in each row)
    row_densities = np.sum(non_transparent[ymin:ymax+1, :], axis=1)
    
    # We want to find the gap that separates the main logo from the text below it.
    # The subtext is very thin compared to the main logo, and there's a clear gap.
    # Let's search the bottom 40% of the image for the widest continuous gap of 0 density.
    
    search_start = int(len(content_rows) * 0.6)
    
    best_gap_start = -1
    best_gap_end = -1
    max_gap_size = 0
    
    current_gap_start = -1
    
    for i in range(search_start, len(content_rows)):
        if row_densities[i] < 50:
            if current_gap_start == -1:
                current_gap_start = i
        else:
            if current_gap_start != -1:
                gap_size = i - current_gap_start
                if gap_size > max_gap_size:
                    max_gap_size = gap_size
                    best_gap_start = current_gap_start
                    best_gap_end = i
                current_gap_start = -1
                
    # If the gap extends to the very bottom
    if current_gap_start != -1:
        gap_size = len(content_rows) - current_gap_start
        if gap_size > max_gap_size:
            max_gap_size = gap_size
            best_gap_start = current_gap_start
            best_gap_end = len(content_rows)
            
    # If we found a significant gap, we cut at the start of that gap
    if max_gap_size > 10 and best_gap_start != -1:
        ymax = ymin + best_gap_start
        print(f"Found gap of {max_gap_size} pixels. Cropping text at bottom.")
    else:
        print("No significant gap found. Cropping by 15% from bottom to preserve logo.")
        ymax = ymin + int(len(content_rows) * 0.85)
        
    # Add a small padding (e.g., 5 pixels)
    pad = 5
    ymin = max(0, ymin - pad)
    ymax = min(img.height - 1, ymax + pad)
    xmin = max(0, xmin - pad)
    xmax = min(img.width - 1, xmax + pad)
    
    # Crop the image
    cropped_arr = arr[ymin:ymax+1, xmin:xmax+1]
    final_img = Image.fromarray(cropped_arr)
    
    # Resize and optimize
    max_width = 1200
    if final_img.width > max_width:
        ratio = max_width / final_img.width
        new_size = (max_width, int(final_img.height * ratio))
        final_img = final_img.resize(new_size, Image.Resampling.LANCZOS)
        
    final_img.save(out_path, "PNG", optimize=True)
    print(f"Processed logo saved to {out_path} with final size {final_img.size}")

if __name__ == "__main__":
    process_logo()
