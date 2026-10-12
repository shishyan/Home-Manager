const { test, expect } = require('@playwright/test');

test('Weekly Page - Detailed Question Card with Model Answer Expanded', async ({ page }) => {
  await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Verify steps flow is directly displayed (space-saving without repeated title)
  const stepsFlow = page.locator('.q-card-steps-flow').first();
  await expect(stepsFlow).toBeVisible();

  // Scroll to first card
  const firstCard = page.locator('.board-question-card').first();
  await firstCard.scrollIntoViewIfNeeded();

  await page.screenshot({ path: 'week-1-question-card-expanded.png' });
});
