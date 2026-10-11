const { test, expect } = require('@playwright/test');

test('Weekly Page - Detailed Question Card with Model Answer Expanded', async ({ page }) => {
  await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Click on the first question card's accordion summary to expand model answer
  const firstAccordion = page.locator('.q-card-accordion summary').first();
  await firstAccordion.click();
  await page.waitForTimeout(300);

  // Scroll to first card
  const firstCard = page.locator('.board-question-card').first();
  await firstCard.scrollIntoViewIfNeeded();

  await page.screenshot({ path: 'week-1-question-card-expanded.png' });
});
