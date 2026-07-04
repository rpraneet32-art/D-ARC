const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convert() {
  const input = path.join(__dirname, 'public/assets/projects/best-construction-company-kannur.jpeg');
  const output = path.join(__dirname, 'public/assets/projects/architects-kannur-villa.webp');
  
  if (fs.existsSync(input)) {
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(output);
    console.log('Successfully converted image to WebP');
  } else {
    console.log('Input file not found', input);
  }
}
convert();
