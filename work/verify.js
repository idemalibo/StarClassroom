const pw = require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');

(async () => {
  const browser = await pw.chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  const URL = 'http://127.0.0.1:8123/index.html';

  await page.goto(URL, { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(1500);

  const out = { errors: [] };

  out.home = await page.evaluate(() => ({
    overflowX: document.documentElement.scrollWidth > window.innerWidth,
    badgeCount: BADGES.length,
    img: (() => { const i = document.querySelector('#mainChar .char-img'); return { naturalWidth: i.naturalWidth, naturalHeight: i.naturalHeight }; })(),
    allTasksNeedPhoto: Object.values(state.tasks).flat().every(t => t.needPhoto === true)
  }));
  await page.screenshot({ path: 'work/v-home.png' });

  // 手账
  await page.locator('.nav button[data-tab="journal"]').click();
  await page.waitForTimeout(250);
  await page.getByRole('button', { name: /超棒/ }).click();
  await page.locator('#journalText').fill('今天学会了二次函数，有点难但我没有放弃！');
  await page.locator('#journalGoal').fill('明天把错题重新做一遍');
  await page.locator('#saveJournalBtn').click();
  await page.waitForTimeout(400);
  out.journalItems = await page.locator('#journalList .journal-item').count();

  // 任务行：无手动勾选按钮，只有 开始/删除
  await page.locator('.nav button[data-tab="home"]').click();
  await page.waitForTimeout(250);
  out.taskRowButtons = await page.evaluate(() => Array.from(document.querySelectorAll('.task-row')).map(r => r.querySelectorAll('button').length));
  await page.locator('#taskName').fill('拍照验证测试');
  await page.locator('#taskMin').fill('10');
  await page.locator('.task-add .btn').click();
  await page.waitForTimeout(300);
  out.newTaskNeedPhoto = await page.evaluate(() => state.tasks[todayStr()].find(x => x.name === '拍照验证测试').needPhoto);

  // 专注：切后台自动暂停 + 10分钟验证（25分钟会话）
  await page.evaluate(() => { selectedDuration = 25; });
  await page.getByRole('button', { name: /自由专注/ }).click();
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    try {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    } catch (e) {}
  });
  await page.waitForTimeout(400);
  out.autoPaused = await page.evaluate(() => timer.paused);
  await page.evaluate(() => {
    try {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
      document.dispatchEvent(new Event('visibilitychange'));
    } catch (e) {}
  });
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /继续/ }).click();
  await page.waitForTimeout(300);
  await page.evaluate(() => { timer.checkInAt = Date.now() - 1000; });
  await page.waitForTimeout(700);
  out.checkInShown = await page.locator('#checkInOverlay.show').count();
  await page.screenshot({ path: 'work/v-checkin.png' });
  await page.getByRole('button', { name: /我在呢/ }).click();
  await page.waitForTimeout(300);
  out.checkInGone = await page.locator('#checkInOverlay.show').count();
  await page.getByRole('button', { name: /结束专注/ }).click();
  await page.waitForTimeout(300);
  await page.locator('#confirmYes').click();
  await page.waitForTimeout(300);
  out.focusClosed = await page.locator('#focusOverlay.show').count();

  // 专注完成带验证任务 → 拍照 → 家长审核
  await page.evaluate(() => { selectedDuration = 0.2; });
  await page.locator('.task-row:has-text("拍照验证测试") .t-btn.start').click();
  await page.waitForTimeout(12500);
  out.celebrate = await page.locator('#celebrate.show').count();
  out.celebrateMsg = await page.locator('#celebrateMsg').textContent();
  await page.locator('#celebrate .btn').click();
  await page.waitForTimeout(500);
  out.photoModalOpenedAfterCelebrate = await page.locator('#photoModal.show').count();
  await page.setInputFiles('#photoInput', 'work/test.png');
  await page.waitForTimeout(1200);
  out.photoModalClosed = await page.locator('#photoModal.show').count();
  out.verificationWithPhoto = await page.evaluate(() => state.verifications.length === 1 && !!state.verifications[0].photoId && state.verifications[0].status === 'pending');
  out.taskNotDoneYet = await page.evaluate(() => !state.tasks[todayStr()].find(x => x.name === '拍照验证测试').done);

  await page.locator('.nav button[data-tab="parent"]').click();
  await page.waitForTimeout(250);
  for (const d of ['1', '2', '3', '4']) await page.getByRole('button', { name: d, exact: true }).click();
  await page.waitForTimeout(400);
  out.verifyListShown = await page.locator('#verifyList .red-item').count();
  out.thumbLoaded = await page.evaluate(async () => {
    const el = document.querySelector('#verifyList img.v-thumb');
    if (!el) return false;
    const t0 = Date.now();
    while (Date.now() - t0 < 2500 && !el.src.startsWith('data:image/jpeg')) {
      await new Promise(r => setTimeout(r, 100));
    }
    return el.src.startsWith('data:image/jpeg');
  });
  await page.screenshot({ path: 'work/v-parent-settings.png' });
  await page.getByRole('button', { name: /通过/ }).click();
  await page.waitForTimeout(400);
  out.taskDoneAfterApprove = await page.evaluate(() => state.tasks[todayStr()].find(x => x.name === '拍照验证测试').done);
  out.verifiedTasks = await page.evaluate(() => state.verifiedTasks);

  // 未来来信
  await page.locator('.nav button[data-tab="home"]').click();
  await page.waitForTimeout(250);
  await page.getByRole('button', { name: /未来来信/ }).click();
  await page.waitForTimeout(500);
  out.letterModal = await page.locator('#letterModal.show').count();
  out.letterTitle = await page.locator('#letterBox .lp-title').textContent();
  await page.locator('#letterModal .close').click();

  out.stateAfter = await page.evaluate(() => ({
    journal: state.journal.length,
    letters: state.letters.length,
    verifications: state.verifications.length,
    badges: state.badges.slice(),
    streak: state.streak,
    sessions: state.totalSessions,
    tasksDone: state.tasks[todayStr()].filter(t => t.done).length,
    totalBadges: BADGES.length
  }));
  out.errors = errors;

  fs.writeFileSync('work/verify.json', JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
