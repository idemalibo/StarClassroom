const fs = require('fs');
let html = fs.readFileSync('outputs/index.html', 'utf8');
const count = (html.match(/src="data:image\/png;base64,[^"]*"/g) || []).length;
html = html.replace(/src="data:image\/png;base64,[^"]*"/g, 'src="assets/miku.png"');
fs.writeFileSync('outputs/index.html', html);
console.log('reverted', count, 'refs; size', html.length);
