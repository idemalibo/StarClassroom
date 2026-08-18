const fs = require('fs');
const html = fs.readFileSync('outputs/index.html', 'utf8');
const acc = fs.readFileSync('work/acc_svg.txt', 'utf8').trim();
const startMarker = 'const CHAR_SVG=`';
const endMarker = 'const ACC_HEADS=[';
const start = html.indexOf(startMarker);
const end = html.indexOf(endMarker);
if (start < 0 || end < 0) { console.error('markers not found', start, end); process.exit(1); }
const newHtml = html.slice(0, start) +
  "const ACC_SVG=`\n" + acc + "\n`;\n\n" +
  html.slice(end);
fs.writeFileSync('outputs/index.html', newHtml);
console.log('spliced. length:', newHtml.length);
