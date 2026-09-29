const fs = require('fs');
let content = fs.readFileSync('tests/study-progress.spec.js', 'utf8');

const oldTest = 
 expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#db2777');
 expect(await row.locator('[data-progress-level=\"learning\"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#db2777');
 await slider.focus();await slider.press('Home');const box=await slider.boundingBox();await page.mouse.move(box.x+12,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+12+(box.width-24)*.6,box.y+box.height/2,{steps:12});await page.mouse.up();await expect(slider).toHaveValue('60');
 await row.locator('[data-progress-level=\"revision\"]').click();await expect(slider).toHaveValue('0');expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#ea580c');
;

const newTest = 
 expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#ea580c');
 expect(await row.locator('[data-progress-level=\"learning\"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#ea580c');
 const learning=row.locator('[data-progress-level=\"learning\"]'),revision=row.locator('[data-progress-level=\"revision\"]');
 await expect(learning).toHaveAttribute('aria-pressed','true');
 expect(await learning.evaluate(el=>getComputedStyle(el).borderTopStyle)).toBe('dashed');
 expect(await revision.evaluate(el=>getComputedStyle(el).borderTopColor)).toBe('rgba(0, 0, 0, 0)');
 expect(await revision.evaluate(el=>getComputedStyle(el).backgroundColor)).toBe('rgba(0, 0, 0, 0)');
 await slider.focus();await slider.press('Home');const box=await slider.boundingBox();await page.mouse.move(box.x+12,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+12+(box.width-24)*.6,box.y+box.height/2,{steps:12});await page.mouse.up();await expect(slider).toHaveValue('60');
 await revision.click();await expect(slider).toHaveValue('0');expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#0f766e');
 expect(await revision.evaluate(el=>getComputedStyle(el).borderTopStyle)).toBe('dashed');
 expect(await revision.evaluate(el=>getComputedStyle(el).backgroundColor)).toBe('rgba(0, 0, 0, 0)');
;

content = content.replace(oldTest.trim(), newTest.trim());
fs.writeFileSync('tests/study-progress.spec.js', content);
console.log('Patched tests/study-progress.spec.js!');
