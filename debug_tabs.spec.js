const { test, expect } = require('@playwright/test');
test('debug tabs', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/#/global/overview');
  await page.evaluate(async () => {
    localStorage.clear();
  });
  await page.reload();
  await page.goto('http://127.0.0.1:8765/#/global/overview');
  await page.waitForTimeout(1000);
  const text = await page.locator('#sectionNav').evaluate(el => el.innerHTML);
  console.log('HTML:', text);
  const checked = await page.locator('#navigationGroup option:checked').evaluate(el => el.textContent);
  console.log('Checked:', checked);
});
