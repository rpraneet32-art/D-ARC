const fs = require('fs');
const items = [
  'Architecture', 'Interior Design', 'Construction', 
  'Turnkey Projects', 'Landscape Design', 'Modular Kitchen', 
  'Home Renovation', 'Structural Engineering'
];

function generateContent(title) {
  let p1 = `At D-Arc Architectural Interiors, our ${title} division is dedicated to transforming ambitious visions into tangible realities across Kannur and Kerala. `;
  let lorem = `Focusing intensely on ${title}, we marry cutting-edge technology with timeless design principles. Our expertise in ${title} allows us to navigate complex structural and aesthetic challenges with ease, ensuring every project is delivered to perfection. Whether you are developing a commercial hub or a private sanctuary, our bespoke approach to ${title} sets the industry benchmark. Our team meticulously oversees every detail of ${title}, from conceptual sketches to the final finishing touches. By integrating localized climate considerations and cultural nuances into our ${title}, we guarantee spaces that are both beautiful and enduring. We believe that masterful ${title} is not just an expense, but a lifelong investment in quality, comfort, and sustainable living. `;
  
  p1 += lorem.repeat(8);
  let p2 = `When evaluating ${title}, one must consider the profound impact of spatial psychology and environmental harmony. Our strategic integration of sustainable practices within our ${title} services ensures an eco-friendly footprint without compromising on luxury. ` + lorem.repeat(8);
  let p3 = `Ultimately, the hallmark of exceptional ${title} lies in the seamless collaboration between architect and client. We invite you to explore the boundless possibilities of ${title} with our seasoned team of professionals. ` + lorem.repeat(8);
  return { p1, p2, p3 };
}

let result = 'export const services = [\n';
items.forEach(item => {
  let slug = item.toLowerCase().replace(/\s+/g, '-');
  let c = generateContent(item);
  result += '  {\n';
  result += '    title: "' + item + '",\n';
  result += '    slug: "' + slug + '",\n';
  result += '    shortDescription: "Premium ' + item + ' services by D-Arc Architectural Interiors in Kannur, Kerala.",\n';
  result += '    image1: "/assets/services/' + slug + '-1.png",\n';
  result += '    image2: "/assets/services/' + slug + '-2.png",\n';
  result += '    image3: "/assets/services/' + slug + '-3.png",\n';
  result += '    contentPart1: ' + JSON.stringify(c.p1) + ',\n';
  result += '    contentPart2: ' + JSON.stringify(c.p2) + ',\n';
  result += '    contentPart3: ' + JSON.stringify(c.p3) + '\n';
  result += '  },\n';
});
result += '];\n';

fs.writeFileSync('./src/data/services.ts', result);
console.log('Services generated successfully!');
