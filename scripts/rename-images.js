const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');
const srcDir = path.join(projectDir, 'src');
const assetsDir = path.join(projectDir, 'public/assets/projects');

const replacements = [
  { 
    oldName: "WhatsApp Image 2026-06-26 at 15.18.47.jpeg", 
    newName: "luxury-interior-design-kannur.jpeg",
  },
  { 
    oldName: "WhatsApp Image 2026-06-26 at 15.18.49.jpeg", 
    newName: "modern-residential-architects-kannur.jpeg",
  },
  { 
    oldName: "WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg", 
    newName: "best-construction-company-kannur.jpeg",
  }
];

// Rename files
for (const rep of replacements) {
  const oldPath = path.join(assetsDir, rep.oldName);
  const newPath = path.join(assetsDir, rep.newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed file: ${rep.oldName} to ${rep.newName}`);
  } else {
    console.log(`File not found, skipping rename: ${rep.oldName}`);
  }
}

// Replace in code
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
      
      for (const rep of replacements) {
        // use split join to replace all occurrences globally without regex escaping issues
        content = content.split(rep.oldName).join(rep.newName);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated references in: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Image SEO update complete.');
