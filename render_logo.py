import fitz
import os

target_pdf = r"C:\Users\rpran\OneDrive\Desktop\speed project\003.pdf"
out_dir = r"public\assets"

if os.path.exists(target_pdf):
    doc = fitz.open(target_pdf)
    page = doc.load_page(0)
    # Use a higher DPI to make it crisp, maybe trim whitespace
    pix = page.get_pixmap(alpha=True, dpi=600)
    out_path = os.path.join(out_dir, "logo-from-pdf.png")
    pix.save(out_path)
    print(f"Saved {out_path} from {target_pdf}")
else:
    print("No PDF found")
