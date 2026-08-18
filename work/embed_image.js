const fs = require('fs');
const png = fs.readFileSync('outputs/assets/miku.png');
const b64 = png.toString('base64');
const uri = 'data:image/png;base64,' + b64;
let html = fs.readFileSync('outputs/index.html', 'utf8');
const before = html.length;
const count = html.split('src="assets/miku.png"').length - 1;
if (count < 3) { console.error('expected 3 image refs, found', count); process.exit(1); }
html = html.split('src="assets/miku.png"').join('src="' + uri + '"');
fs.writeFileSync('outputs/index.html', html);
console.log('replaced', count, 'image refs; html size', before, '->', html.length);
