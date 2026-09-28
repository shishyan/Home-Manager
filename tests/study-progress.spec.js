const {test,expect}=require('@playwright/test');
test('subject pages dashboard and per chapter draggable proficiency',async({page})=>{
 await page.goto('http://127.0.0.1:8765/#/study/curriculum');await page.evaluate(()=>localStorage.clear());await page.reload();
 const math=page.locator('.education-class').last().locator('.education-subject').filter({has:page.locator('summary').filter({hasText:/^Mathematics/})});await math.locator('summary').click();
 await expect(page.locator('[data-education-chapter]')).toHaveCount(0);expect(await math.locator('[data-education-page]').allTextContents()).toEqual(['Overview','Progress','Planner','Study Guide','Genius Mind','Formulae / Key ideas','Read Book','My Notes','Practice & Tests','Assignments']);
 await expect(page.locator('.dashboard-tiles article')).toHaveCount(6);await expect(page.locator('.dashboard-chapter-bars')).toHaveCount(15);await expect(page.getByRole('slider')).toHaveCount(0);
 await math.locator('[data-education-page="study/curriculum"]').click();await expect(page.getByRole('slider')).toHaveCount(15);
 const row=page.locator('.progress-slider-row').first(),slider=row.getByRole('slider');await slider.focus();await slider.press('Home');const box=await slider.boundingBox();await page.mouse.move(box.x+12,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+12+(box.width-24)*.6,box.y+box.height/2,{steps:12});await page.mouse.up();await expect(slider).toHaveValue('60');
 await row.locator('[data-progress-level="revision"]').click();await expect(slider).toHaveValue('0');await slider.focus();await slider.press('ArrowRight');await expect(slider).toHaveValue('10');await expect(slider).toBeFocused();
 await row.locator('[data-progress-level="learning"]').click();await expect(slider).toHaveValue('60');await expect(page.locator('.progress-slider-row').nth(1).locator('[data-progress-level="learning"]')).toHaveAttribute('aria-pressed','true');
 await page.reload();await expect(slider).toHaveValue('60');await page.locator('#educationHeaderTabs [data-route="study/overview"]').click();await expect(page.locator('.dashboard-tiles article').first()).toContainText('3%');
 await math.locator('[data-education-page="summary"]').click();await expect(page.locator('#chapterWorkspace')).toBeVisible();await expect(page.locator('#personaName')).toContainText('Ishaan');
 await page.locator('#educationHeaderTabs [data-route="study/curriculum"]').click();await page.setViewportSize({width:390,height:844});await slider.scrollIntoViewIfNeeded();await expect(slider).toBeVisible();await page.screenshot({path:'test-results/chapter-proficiency-mobile.png'});
});

