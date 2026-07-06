const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src');

const replacements = [
  { from: /"\/about-us-in-kannur/g, to: '"/about-us' },
  { from: /"\/contact-us-in-kannur/g, to: '"/contact-us' },
  { from: /"\/services-in-kannur/g, to: '"/services' },
  { from: /"\/expertise-in-kannur/g, to: '"/expertise' },
  { from: /"\/locations-in-kannur/g, to: '"/locations' },
  { from: /"\/portfolio-in-kannur/g, to: '"/portfolio' },
  { from: /== 'about-us-in-kannur'/g, to: "== 'about-us'" },
  { from: /=== 'about-us-in-kannur'/g, to: "=== 'about-us'" },
  { from: /== 'services-in-kannur'/g, to: "== 'services'" },
  { from: /=== 'services-in-kannur'/g, to: "=== 'services'" },
  { from: /== 'expertise-in-kannur'/g, to: "== 'expertise'" },
  { from: /=== 'expertise-in-kannur'/g, to: "=== 'expertise'" },
  { from: /== 'portfolio-in-kannur'/g, to: "== 'portfolio'" },
  { from: /=== 'portfolio-in-kannur'/g, to: "=== 'portfolio'" },
  { from: /startsWith\('\/services-in-kannur'\)/g, to: "startsWith('/services')" },
  { from: /startsWith\('\/expertise-in-kannur'\)/g, to: "startsWith('/expertise')" },
  { from: /startsWith\('\/portfolio-in-kannur'\)/g, to: "startsWith('/portfolio')" },
  
  // also catch any remaining "-in-kannur" inside slugs in TS/TSX files
  { from: /-in-kannur"/g, to: '"' },
  { from: /-in-kannur'/g, to: "'" }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const replacement of replacements) {
        content = content.replace(replacement.from, replacement.to);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Cleaned: ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Link cleaning complete.');
