const fs = require('fs');
const html = fs.readFileSync('outputs/index.html', 'utf8');
const raw = fs.readFileSync('work/char_svg_new.js', 'utf8').trim();
const marker = 'const CHAR_SVG=`';
const endMarker = '`;\n\nconst HAIR_STYLES';
const start = html.indexOf(marker);
const end = html.indexOf(endMarker);
if (start < 0 || end < 0) { console.error('markers not found', start, end); process.exit(1); }
const newHtml = html.slice(0, start) + marker + '\n' + raw + '\n' + html.slice(end);
fs.writeFileSync('outputs/index.html', newHtml);
console.log('spliced. length:', newHtml.length);
