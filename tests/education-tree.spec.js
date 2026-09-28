const {test,expect}=require('@playwright/test');
test('subject menu switches learners and offers ten pages',async({page})=>{
 await page.goto('http://127.0.0.1:8765/#/study/curriculum');await page.evaluate(()=>localStorage.clear());await page.reload();await expect(page.locator('.education-class')).toHaveCount(2);
 const subjects=page.locator('.education-class').first().locator('.education-subject');await subjects.first().locator('summary').click();await expect(page.locator('#educationLearner')).toHaveValue('p3');await expect(subjects.first().locator('[data-education-page]')).toHaveCount(10);await subjects.first().locator('[data-education-page="study/planner"]').click();await expect(page).toHaveURL(/study\/planner/);
 await page.locator('.education-class').last().locator('.education-subject').first().locator('summary').click();await expect(page.locator('#educationLearner')).toHaveValue('p4');await expect(page).toHaveURL(/study\/overview/);await expect(page.locator('#sidebar #personaSwitcher')).toBeVisible();await expect(page.locator('#nav [data-education-chapter]')).toHaveCount(0);
});
