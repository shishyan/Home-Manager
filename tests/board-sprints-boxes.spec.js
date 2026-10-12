const { test, expect } = require('@playwright/test');

test('Weekly Page - Full Model Answer & Bestseller Boxes', async ({ page }) => {
  await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Force open all accordions on the page
  await page.evaluate(() => {
    document.querySelectorAll('.q-card-accordion').forEach(el => el.setAttribute('open', 'true'));
  });
  await page.waitForTimeout(400);

  // Scroll to insights list of first card
  const insightsList = page.locator('.q-insights-list').first();
  await insightsList.scrollIntoViewIfNeeded();

  await page.screenshot({ path: 'week-1-model-answer-boxes.png' });
});
