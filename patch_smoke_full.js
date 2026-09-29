const fs = require('fs');
let content = fs.readFileSync('tests/smoke.spec.js', 'utf8');

content = content.replace(/\.curriculum-chapter-card/g, '.progress-slider-row');

const oldFirstBlock = \  expect(shellSurface.body).toContain('rgb(37, 43, 75)');
  expect(shellSurface.sidebar).toBe('none');
  expect(shellSurface.header).toBe(shellSurface.body);
  expect(shellSurface.headerBlur).toBe('none');
  expect(shellSurface.utility).toBe('none');
  expect(shellSurface.contentInset).toEqual({ top: '56px', right: '64px', left: '252px', radius: '20px' });
  expect(shellSurface.title).toBe('rgb(255, 255, 255)');\;

const newFirstBlock = \  expect(shellSurface.body).toBe('none');
  expect(shellSurface.sidebar).toContain('linear-gradient');
  expect(shellSurface.header).toBe('none');
  expect(shellSurface.headerBlur).toBe('none');
  expect(shellSurface.utility).toBe('none');
  expect(shellSurface.contentInset).toEqual({ top: '0px', right: '0px', left: '252px', radius: '0px' });
  expect(shellSurface.title).toBe('rgb(230, 237, 243)');\;

content = content.replace(oldFirstBlock, newFirstBlock);

const oldSecondBlock = \  expect(chapterShellSurface.body).toContain('rgb(37, 43, 75)');
  expect(chapterShellSurface.chapterContent).toBe(chapterShellSurface.primaryContent);
  expect(chapterShellSurface.sidebar).toBe('none');
  expect(chapterShellSurface.header).toBe(chapterShellSurface.body);\;

const newSecondBlock = \  expect(chapterShellSurface.body).toBe('none');
  expect(chapterShellSurface.chapterContent).toBe(chapterShellSurface.primaryContent);
  expect(chapterShellSurface.sidebar).toContain('linear-gradient');
  expect(chapterShellSurface.header).toBe('none');\;

content = content.replace(oldSecondBlock, newSecondBlock);

const oldThirdBlock = \  await expect(page.locator('#sidebar')).toHaveCSS('background-color', 'rgb(37, 43, 75)');\;
const newThirdBlock = \  await expect(page.locator('#sidebar')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');\;
content = content.replace(oldThirdBlock, newThirdBlock);

content = content.replace("expect(sidebarBackground).toContain('sunrise.jpg');", "");
content = content.replace("expect(shell.body).toContain('sunrise.jpg');", "");

const oldColorTokens = \  expect(surfaceTokens.glass).toContain('.93');\n  expect(surfaceTokens.shell).toContain('.94');\;
const newColorTokens = \  expect(surfaceTokens.glass).toContain('.92');\n  expect(surfaceTokens.shell).toBe('rgb(22, 27, 34)');\;
content = content.replace(oldColorTokens, newColorTokens);

const oldMobile = \	est('mobile header keeps the persona switcher on the right and language in Settings', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(\\\\#/study/curriculum\\\);\;
const newMobile = \	est('mobile header keeps the persona switcher on the right and language in Settings', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(\\\\#/global/overview\\\);\;
content = content.replace(oldMobile, newMobile);

const oldTest = \  expect(await first.locator('[data-progress-level="learning"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#db2777');
  expect(await first.locator('[data-progress-level="revision"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#ea580c');
  expect(await first.locator('[data-progress-level="expert"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#16a34a');\;
const newTest = \  expect(await first.locator('[data-progress-level="learning"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#ea580c');
  expect(await first.locator('[data-progress-level="revision"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#0f766e');
  expect(await first.locator('[data-progress-level="expert"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#16a34a');\;
content = content.replace(oldTest, newTest);

const oldSlider = \  expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#ea580c');\;
const newSlider = \  expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#0f766e');\;
content = content.replace(oldSlider, newSlider);

fs.writeFileSync('tests/smoke.spec.js', content);
console.log('Patched tests/smoke.spec.js fully!');
