const fs = require('fs');
const items = [
  'Residential Architecture', 'Commercial Architecture', 'Luxury Villas', 
  'Modern Homes', 'Space Planning', 'Structural Design', 'Project Consultation'
];

function generateContent(title) {
  let p1 = 'Our ' + title + ' services in Kannur and Kerala are designed to exceed your expectations. ';
  let lorem = 'Focusing on ' + title + ', we prioritize architectural integrity, modern aesthetics, and unparalleled functionality. D-Arc Architectural Interiors is proud to lead the industry in ' + title + ' across Northern Kerala, bringing innovative design solutions to every project. Whether you are looking for contemporary minimalism or classic luxury, our approach to ' + title + ' ensures a timeless appeal. We deeply analyze the spatial dynamics and environmental context of Kannur to deliver ' + title + ' that stands the test of time. Our dedicated architects and engineers collaborate seamlessly to integrate the latest technological advancements in ' + title + '. Furthermore, our robust project management strategies guarantee that every phase of ' + title + ' is executed with precision, transparency, and unparalleled craftsmanship. We believe that ' + title + ' is not just about building structures, but about curating environments that inspire and elevate the human experience. ';
  
  p1 += lorem.repeat(8);
  let p2 = 'When exploring ' + title + ' options, it is critical to consider the long-term impact on the environment and the local landscape of Kerala. Our team ensures that all ' + title + ' endeavors adhere to the highest standards of sustainability and eco-friendliness. ' + lorem.repeat(8);
  let p3 = 'Ultimately, our commitment to excellence in ' + title + ' distinguishes us from other firms. We invite you to experience the difference with our dedicated team of professionals who are passionate about redefining ' + title + '. ' + lorem.repeat(8);
  return { p1, p2, p3 };
}

let result = 'export const expertise = [\n';
items.forEach(item => {
  let slug = item.toLowerCase().replace(/\s+/g, '-');
  let c = generateContent(item);
  result += '  {\n';
  result += '    title: "' + item + '",\n';
  result += '    slug: "' + slug + '",\n';
  result += '    shortDescription: "Premium ' + item + ' services by D-Arc Architectural Interiors in Kannur, Kerala.",\n';
  result += '    image1: "/assets/expertise/' + slug + '-1.png",\n';
  result += '    image2: "/assets/expertise/' + slug + '-2.png",\n';
  result += '    image3: "/assets/expertise/' + slug + '-3.png",\n';
  result += '    contentPart1: ' + JSON.stringify(c.p1) + ',\n';
  result += '    contentPart2: ' + JSON.stringify(c.p2) + ',\n';
  result += '    contentPart3: ' + JSON.stringify(c.p3) + '\n';
  result += '  },\n';
});
result += '];\n';

fs.writeFileSync('./src/data/expertise.ts', result);
console.log('Expertise generated successfully!');
