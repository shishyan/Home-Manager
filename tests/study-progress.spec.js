const {test,expect}=require('@playwright/test');
test('daily chapter updates are saved once and detailed tracking stays in the panel',async({page})=>{
 await page.goto('http://127.0.0.1:8765/#/study/curriculum');await page.evaluate(()=>localStorage.clear());await page.reload();
 const math=page.locator('.education-class').last().locator('.education-subject').filter({has:page.locator('summary').filter({hasText:/^Mathematics/})});await math.locator('summary').click();await page.locator('#educationHeaderTabs [data-route="study/curriculum"]').click();
 const row=page.locator('.study-chapter-row').first();const id=await row.locator('[data-study-status]').getAttribute('data-study-status');
 await page.evaluate(id=>{HM.data.state.settings.chapterMastery ||= {};HM.data.state.settings.chapterMastery.p4 ||= {};HM.data.state.settings.chapterMastery.p4[id]=42;HM.data.save();},id);
 await row.locator('select').selectOption('learning');await row.locator('[data-study-today]').click();await row.locator('[data-study-today]').click();
 expect(await page.evaluate(id=>HM.data.state.settings.chapterDaily.p4[id].days.length,id)).toBe(1);
 await row.locator('.study-open').click();const panel=page.locator('.daily-progress-panel');await expect(panel).toBeVisible();
 await expect(page.locator('.chapter-concept-lessons [data-subchapter-progress]')).toHaveCount(0);
 await panel.locator('[data-subchapter-progress]').first().click();await expect(panel.locator('[data-subchapter-progress]').first()).toHaveAttribute('data-state','learning');
 await panel.locator('[name="minutes"]').fill('25');await panel.locator('[name="confidence"]').selectOption('help');await panel.locator('[name="nextStep"]').fill('Practise two word problems');await panel.locator('[type="submit"]').click();
 const saved=await page.evaluate(id=>HM.data.state.settings.chapterDaily.p4[id],id);expect(saved.status).toBe('learning');expect(saved.days).toHaveLength(1);expect(saved.days[0].minutes).toBe(25);expect(await page.evaluate(id=>HM.data.state.settings.chapterMastery.p4[id],id)).toBe(42);expect(await page.evaluate(()=>HM.data.state.settings.chapterDaily.p3 || {})).toEqual({});
 await page.screenshot({path:'test-results/daily-progress-desktop.png'});
 await page.setViewportSize({width:1200,height:800});await expect(panel).toBeVisible();await page.setViewportSize({width:390,height:844});await expect(panel).toBeVisible();await page.screenshot({path:'test-results/daily-progress-mobile.png'});
 await page.reload();await page.locator('#educationHeaderTabs [data-route="study/curriculum"]').click();await expect(page.locator('.study-chapter-row').first()).toContainText('Practise two word problems');
 await page.goto('http://127.0.0.1:8765/#/study/reports');await expect(page).toHaveURL(/study\/curriculum/);
});
