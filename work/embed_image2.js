const fs = require('fs');
const png = fs.readFileSync('outputs/assets/miku.png');
const b64 = png.toString('base64');
const uri = 'data:image/png;base64,' + b64;
let html = fs.readFileSync('outputs/index.html', 'utf8');

// 1) 确认还原完成
const refs = (html.match(/src="assets\/miku\.png"/g) || []).length;
if (refs !== 3) { console.error('expected 3 file refs, got', refs); process.exit(1); }

// 2) 在 LS_KEY 行后插入单份图片常量
const anchor = "const LS_KEY='starStudy_v3';";
const idx = html.indexOf(anchor);
if (idx < 0) { console.error('anchor not found'); process.exit(1); }
html = html.slice(0, idx + anchor.length) + "\nconst CHAR_IMG='" + uri + "';" + html.slice(idx + anchor.length);

// 3) 初始化时把图片赋给所有角色位
const initAnchor = "document.querySelectorAll('.char-acc').forEach(s=>{s.innerHTML=ACC_SVG;});";
const iidx = html.indexOf(initAnchor);
if (iidx < 0) { console.error('init anchor not found'); process.exit(1); }
html = html.slice(0, iidx + initAnchor.length) + "\ndocument.querySelectorAll('.char-img').forEach(i=>{i.src=CHAR_IMG;});" + html.slice(iidx + initAnchor.length);

fs.writeFileSync('outputs/index.html', html);
console.log('embedded once; html size', html.length);
