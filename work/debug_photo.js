const pw = require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await pw.chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(1000);

  // 建任务并触发拍照
  await page.evaluate(() => {
    state.tasks[todayStr()].push({ id: 't1', emoji: '📐', name: '调试任务', min: 10, done: false, needPhoto: true });
    save();
    const v = { id: 'v1', taskId: 't1', taskEmoji: '📐', taskName: '调试任务', date: todayStr(), photoId: null, status: 'pending', bonus: 5, ts: Date.now() };
    state.verifications.push(v);
    save();
    openPhotoModal(v);
  });
  await page.waitForTimeout(300);
  await page.setInputFiles('#photoInput', 'work/test.png');
  await page.waitForTimeout(1500);

  const result = await page.evaluate(async () => {
    const v = state.verifications.find(x => x.id === 'v1');
    let db = null;
    try {
      const rq = indexedDB.open('starStudyDB', 1);
      db = await new Promise((res, rej) => { rq.onsuccess = () => res(rq.result); rq.onerror = () => rej(rq.error); });
    } catch (e) { return { err: String(e) }; }
    const photo = await new Promise((res) => {
      const r = db.transaction('photos').objectStore('photos').get(v.photoId);
      r.onsuccess = () => res(r.result);
    });
    return { photoId: v.photoId, photoFound: !!photo, photoKeys: photo ? Object.keys(photo) : [], dataUrlLen: photo && photo.dataUrl ? photo.dataUrl.length : 0, modalOpen: document.getElementById('photoModal').classList.contains('show') };
  });
  console.log(JSON.stringify(result, null, 2));

  // 再看家长页缩略图
  await page.evaluate(() => { parentUnlocked = true; });
  await page.locator('.nav button[data-tab="parent"]').click();
  await page.waitForTimeout(800);
  const thumb = await page.evaluate(async () => {
    const el = document.querySelector('#verifyList img.v-thumb');
    if (!el) return { missing: true };
    await new Promise(r => setTimeout(r, 500));
    return { src: el.src.slice(0, 40), attr: el.getAttribute('data-photo'), complete: el.complete };
  });
  console.log(JSON.stringify(thumb, null, 2));
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
