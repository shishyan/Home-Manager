const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 950 } });
  const page = await context.newPage();

  console.log('Navigating to Board Sprints Week 1 Physics 1...');
  await page.goto('http://127.0.0.1:8765/#/study/board-sprints/week-1/physics-1');
  await page.waitForTimeout(1000);

  // Check header reference banner
  const banner = await page.$('.zen-book-references-bar');
  console.log('Header masterclass banner found:', !!banner);

  // Check question cards
  const cards = await page.$$('.zen-q-card');
  console.log(`Rendered ${cards.length} question cards in Week 1 Physics 1`);

  // Scroll to first question card
  await page.evaluate(() => {
    const card = document.querySelector('.zen-q-card');
    if (card) card.scrollIntoView();
  });
  await page.waitForTimeout(500);

  // Check past paper boxes and youtube masterclass boxes
  const crossRefBoxes = await page.$$('.q-crossref-container');
  const ytBoxes = await page.$$('.q-yt-container');
  console.log(`Found ${crossRefBoxes.length} 5-year past paper cross-reference boxes`);
  console.log(`Found ${ytBoxes.length} YouTube masterclass reference boxes`);

  // Screenshot initial view
  if (!fs.existsSync('test-results')) {
    fs.mkdirSync('test-results', { recursive: true });
  }
  await page.screenshot({ path: 'test-results/zen-board-sprint-overview.png', fullPage: false });
  console.log('Saved test-results/zen-board-sprint-overview.png');

  // Test toggling 5-Yr Repeats filter
  const pastPaperBtn = await page.$('[data-action="toggle-past-papers"]');
  if (pastPaperBtn) {
    console.log('Clicking 5-Yr Repeats filter button...');
    await pastPaperBtn.click();
    await page.waitForTimeout(500);
    const activeCards = await page.$$('.zen-q-card');
    console.log(`Questions after 5-Yr Repeats filter: ${activeCards.length}`);
    await page.screenshot({ path: 'test-results/zen-5yr-filter.png', fullPage: false });
    console.log('Saved test-results/zen-5yr-filter.png');
  }

  // Test expanding a question card answer
  const firstDetails = await page.$('.q-card-details');
  if (firstDetails) {
    console.log('Expanding model answer...');
    await firstDetails.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/zen-q-details.png', fullPage: false });
    console.log('Saved test-results/zen-q-details.png');
  }

  // Navigate to Chemistry 1
  console.log('Navigating to Chemistry 1...');
  await page.goto('http://127.0.0.1:8765/#/study/board-sprints/week-1/chemistry-1');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'test-results/zen-chemistry-yt.png', fullPage: false });
  console.log('Saved test-results/zen-chemistry-yt.png');

  await browser.close();
  console.log('Verification finished successfully.');
})();
