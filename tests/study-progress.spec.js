const {test,expect}=require('@playwright/test');

test('compact colorful overview and progress across consolidated navigation',async({page})=>{
 await page.goto('http://127.0.0.1:8765/#/study/student-overview');await page.evaluate(()=>localStorage.clear());await page.reload();
 await expect(page.locator('.student-learning-dashboard')).toBeVisible();
 await expect(page.locator('.study-dashboard-metric')).toHaveCount(4);
 await expect(page.locator('.student-subject-row').first()).toBeVisible();
 await expect(page.locator('.student-subject-bars').first()).toHaveCount(1);
 await expect(page.locator('#sidebar [data-education-student-dashboard]')).toHaveAttribute('aria-current','page');
 await page.locator('#personaSwitcher').click();await page.locator('#personaMenu [data-persona="p4"]').click();
 await expect(page.locator('.student-subject-row')).toHaveCount(7);
 const math=page.locator('.education-class').last().locator('.education-subject').filter({has:page.locator('summary').filter({hasText:/^Mathematics/})});
 if(!await math.evaluate(node=>node.open))await math.locator('summary').click();
 await expect(math.locator('[data-education-page]')).toHaveCount(6);
 await math.locator('[data-education-page="study/overview"]').click();
 await expect(math.locator('[data-education-page="study/overview"]')).toHaveAttribute('aria-current','page');
 await expect(page.locator('.subject-progress-dashboard')).toBeVisible();
 await expect(page.locator('.subject-chart-row')).toHaveCount(3);
 await expect(page.locator('.chapter-summary-row')).toHaveCount(15);
 await expect(page.locator('.study-dashboard-metric')).toHaveCount(7);

 await math.locator('[data-education-page="study/curriculum"]').click();await expect(page.getByRole('slider')).toHaveCount(15);
 const row=page.locator('.progress-slider-row').first(),slider=row.getByRole('slider');
 expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#db2777');
 expect(await row.locator('[data-progress-level="learning"]').evaluate(el=>getComputedStyle(el).getPropertyValue('--level').trim())).toBe('#db2777');
 await slider.focus();await slider.press('Home');const box=await slider.boundingBox();await page.mouse.move(box.x+12,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+12+(box.width-24)*.6,box.y+box.height/2,{steps:12});await page.mouse.up();await expect(slider).toHaveValue('60');
 await row.locator('[data-progress-level="revision"]').click();await expect(slider).toHaveValue('0');expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#ea580c');
 await slider.focus();await slider.press('ArrowRight');await expect(slider).toHaveValue('10');await expect(slider).toBeFocused();
 await row.locator('[data-progress-level="expert"]').click();expect(await slider.evaluate(el=>getComputedStyle(el).getPropertyValue('--slider-color').trim())).toBe('#16a34a');
 await row.locator('[data-progress-level="learning"]').click();await expect(slider).toHaveValue('60');
 await math.locator('[data-education-page="learning"]').click();await expect(page.locator('.guide-hero')).toBeVisible();
 await expect(page.locator('.education-workspace-toolbar [data-study-section]')).toHaveCount(3);
 await expect(page.locator('.education-workspace-toolbar [data-route]')).toHaveCount(0);
 await page.locator('.education-workspace-toolbar [data-chapter-notes]').click();await expect(page.locator('#chapterNotesDrawer')).toBeVisible();await page.keyboard.press('Escape');
 await math.locator('[data-education-page="study/practice-hub"]').click();
 await expect(page.locator('.practice-assignment-tabs button')).toHaveCount(2);
 await page.locator('[data-practice-hub-tab="assignments"]').click();await expect(page.locator('#content .toolbar input[data-filter]')).toBeVisible();
 await expect(page.locator('.practice-assignment-tabs [aria-current="page"]')).toHaveText('Assignments');
});
