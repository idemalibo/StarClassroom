const pw = require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await pw.chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(800);
  await page.evaluate(() => { selectedDuration = 0.2; });
  await page.getByRole('button', { name: /自由专注/ }).click();
  await page.waitForTimeout(13000);
  const state = await page.evaluate(() => ({
    streak: state.streak,
    stars: Math.round(state.stars),
    sessions: state.totalSessions,
    badges: state.badges.slice(),
    errors: []
  }));
  state.errors = errors;
  console.log(JSON.stringify(state, null, 2));
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
