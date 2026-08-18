const pw = require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await pw.chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

  await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'work/shot-1-home.png' });

  await page.getByRole('button', { name: /换装/ }).click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'work/shot-2-wardrobe.png' });

  await page.getByRole('button', { name: /成就/ }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'work/shot-3-badges.png' });

  await page.getByRole('button', { name: /周报/ }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'work/shot-4-report.png' });

  await page.getByRole('button', { name: /家长/ }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'work/shot-5-parent.png' });

  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: '2', exact: true }).click();
  await page.getByRole('button', { name: '3', exact: true }).click();
  await page.getByRole('button', { name: '4', exact: true }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'work/shot-6-parent-settings.png' });

  await page.getByRole('button', { name: /小屋/ }).click();
  await page.waitForTimeout(400);
  await page.evaluate(() => { selectedDuration = 0.05; });
  await page.getByRole('button', { name: /自由专注/ }).click();
  await page.waitForTimeout(900);
  await page.screenshot({ path: 'work/shot-7-focus.png' });

  await page.waitForTimeout(4200);
  await page.screenshot({ path: 'work/shot-8-celebrate.png' });

  await page.evaluate(() => closeCelebrate());
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: /小屋/ }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'work/shot-9-home-after.png' });

  console.log('ERRORS:', JSON.stringify(errors, null, 2));
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
