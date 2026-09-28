const {test,expect}=require('@playwright/test');
test('school calendar projects dates, filters grades, expands ranges and keeps imports idempotent',async({page})=>{
 await page.goto('http://127.0.0.1:8765/#/home/calendar');await page.evaluate(()=>localStorage.clear());await page.reload();
 await expect(page.locator('.school-calendar-sources')).toContainText('Official sources checked');
 const baseline=await page.evaluate(()=>HM.schoolCalendar.events().length);expect(baseline).toBeGreaterThan(100);
 await page.evaluate(()=>{HM.views.shiftCalendar((2026-new Date().getFullYear())*12+9-new Date().getMonth());window.dispatchEvent(new CustomEvent('hm-school-calendar'));});
 await expect(page.locator('.calendar-agenda')).toContainText('normal-fee challan generation deadline');
 await page.locator('[data-school-calendar-source]').selectOption('cbse');expect(await page.evaluate(()=>HM.schoolCalendar.events().every(item=>item.source==='cbse'))).toBe(true);
 await page.locator('[data-school-calendar-event]').first().click();await expect(page.locator('#schoolCalendarDetails')).toContainText('CBSE official circular');await page.getByRole('button',{name:'Close school event'}).click();
 await page.locator('[data-school-calendar-source]').selectOption('all');
 const feed={schema:1,kind:'school-calendar',events:[{id:'fixture-holiday',date:'2026-10-10',endDate:'2026-10-21',title:'Updated Class 7 Pooja holidays',grades:[7],type:'Holiday',source:'peepal',sourceLabel:'Updated school circular',sourceUrl:'https://crm.peepalprodigy.cloud/'},{id:'fixture-exam',date:'2026-10-05',endDate:'2026-10-05',time:'09:15',title:'Class 7 Social Science exam',grades:[7],type:'Exam',source:'peepal',sourceLabel:'Updated school circular'}],supersedes:[{grades:[7],start:'2026-10-10',end:'2026-10-21',types:['Holiday']}]};
 await page.evaluate(feed=>HM.schoolCalendar.importFeed(feed),feed);const count=await page.evaluate(()=>HM.schoolCalendar.events().length);await page.evaluate(feed=>HM.schoolCalendar.importFeed(feed),feed);expect(await page.evaluate(()=>HM.schoolCalendar.events().length)).toBe(count);
 await expect(page.locator('.calendar .event').filter({hasText:'Updated Class 7 Pooja holidays'})).toHaveCount(12);
 expect(await page.evaluate(()=>HM.schoolCalendar.events('p3').every(item=>item.grades.includes(12)))).toBe(true);expect(await page.evaluate(()=>HM.schoolCalendar.events('p4').some(item=>item.source==='cbse'))).toBe(false);
 await page.goto('http://127.0.0.1:8765/#/study/planner');await page.locator('#educationLearner').selectOption('p4');await expect(page.locator('.calendar-agenda')).toContainText('Class 7 Social Science exam');await expect(page.locator('.calendar-agenda')).not.toContainText('CBSE LOC');
 await page.screenshot({path:'test-results/school-calendar-desktop.png'});await page.setViewportSize({width:390,height:844});await expect.poll(async()=>Math.round((await page.locator('.app-shell').boundingBox()).x)).toBe(0);await page.locator('.calendar-agenda').scrollIntoViewIfNeeded();await page.screenshot({path:'test-results/school-calendar-mobile.png'});await page.reload();await expect(page.locator('.school-calendar-sources')).toContainText('Official sources checked');expect(await page.evaluate(()=>HM.schoolCalendar.events('p4').filter(item=>item.id==='fixture-exam').length)).toBe(1);
});
