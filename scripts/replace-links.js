const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src');

const replacements = [
  { from: /"\/company"/g, to: '"/about-us-in-kannur"' },
  { from: /"\/contact-us"/g, to: '"/contact-us-in-kannur"' },
  { from: /"\/services"/g, to: '"/services-in-kannur"' },
  { from: /"\/expertise"/g, to: '"/expertise-in-kannur"' },
  { from: /"\/locations"/g, to: '"/locations-in-kannur"' },
  { from: /"\/portfolio"/g, to: '"/portfolio-in-kannur"' },
  
  // also handle dynamic routes starting with the folder
  { from: /"\/company\//g, to: '"/about-us-in-kannur/' },
  { from: /"\/services\//g, to: '"/services-in-kannur/' },
  { from: /"\/expertise\//g, to: '"/expertise-in-kannur/' },
  { from: /"\/locations\//g, to: '"/locations-in-kannur/' },
  
  // active menu matching in Header.tsx (where it checks === 'company' etc)
  { from: /== 'company'/g, to: "== 'about-us-in-kannur'" },
  { from: /=== 'company'/g, to: "=== 'about-us-in-kannur'" },
  { from: /== 'services'/g, to: "== 'services-in-kannur'" },
  { from: /=== 'services'/g, to: "=== 'services-in-kannur'" },
  { from: /== 'expertise'/g, to: "== 'expertise-in-kannur'" },
  { from: /=== 'expertise'/g, to: "=== 'expertise-in-kannur'" },
  { from: /== 'portfolio'/g, to: "== 'portfolio-in-kannur'" },
  { from: /=== 'portfolio'/g, to: "=== 'portfolio-in-kannur'" },
  
  // also handle startsWith checks
  { from: /startsWith\('\/services'\)/g, to: "startsWith('/services-in-kannur')" },
  { from: /startsWith\('\/expertise'\)/g, to: "startsWith('/expertise-in-kannur')" },
  { from: /startsWith\('\/portfolio'\)/g, to: "startsWith('/portfolio-in-kannur')" },
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
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Link replacement complete.');
