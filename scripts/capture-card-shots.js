const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 950 } });
  const page = await context.newPage();

  console.log('Navigating to Board Sprints Week 1 Physics 1...');
  await page.goto('http://127.0.0.1:8765/#/study/board-sprints/week-1/physics-1');
  await page.waitForTimeout(1000);

  // Screenshot top overview showing streamlined header and teal-green-violet sidebar
  await page.screenshot({ path: 'test-results/zen-streamlined-top.png' });
  console.log('Saved test-results/zen-streamlined-top.png');

  // Scroll to question card and capture
  await page.evaluate(() => {
    const card = document.querySelector('.board-question-card');
    if (card) {
      card.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'test-results/zen-streamlined-card.png' });
  console.log('Saved test-results/zen-streamlined-card.png');

  await browser.close();
  console.log('Done!');
})();
