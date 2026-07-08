const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'assets', 'expertise');

const mapping = {
  '1.png': 'residential-architecture-1.png',
  '2.png': 'residential-architecture-2.png',
  '3.png': 'residential-architecture-3.png',
  '4.png': 'commercial-architecture-1.png',
  '5.png': 'commercial-architecture-2.png',
  '6.png': 'commercial-architecture-3.png',
  '7.png': 'luxury-villas-1.png',
  '8.png': 'luxury-villas-2.png',
  '9.png': 'luxury-villas-3.png',
  '10.png': 'modern-homes-1.png',
  '11.png': 'modern-homes-2.png',
  '12.png': 'modern-homes-3.png',
  '13.png': 'space-planning-1.png',
  '14.png': 'space-planning-2.png',
  '15.png': 'space-planning-3.png',
  '16.png': 'structural-design-1.png',
  '17.png': 'structural-design-2.png',
  '18.png': 'structural-design-3.png',
  '19.png': 'project-consultation-1.png',
  '20.png': 'project-consultation-2.png',
  '21.png': 'project-consultation-3.png',
};

Object.keys(mapping).forEach(file => {
  const oldPath = path.join(dir, file);
  const newPath = path.join(dir, mapping[file]);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${file} to ${mapping[file]}`);
  }
});
