const { test, expect } = require('@playwright/test');

test('Weekly Page - Full Model Answer & Bestseller Boxes', async ({ page }) => {
  await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Force open all accordions on the page
  await page.evaluate(() => {
    document.querySelectorAll('.q-card-accordion').forEach(el => el.setAttribute('open', 'true'));
  });
  await page.waitForTimeout(400);

  // Scroll to step-marking and caution box of first card
  const cautionBox = page.locator('.zen-caution-box').first();
  await cautionBox.scrollIntoViewIfNeeded();

  await page.screenshot({ path: 'week-1-model-answer-boxes.png' });
});
