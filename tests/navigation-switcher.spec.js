const { test, expect } = require('@playwright/test');
test.setTimeout(120000);
test('parent dropdown and education member switching', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/');
  await page.evaluate(() => localStorage.clear()); await page.reload();
  await expect(page.locator('#nav .nav-parent')).toHaveCount(0);
  expect(await page.locator('#navigationGroup option').allTextContents()).toEqual(['Home', 'Education', 'Finance', 'Travel', 'Contacts']);
  await page.locator('#navigationGroup').selectOption('learning');
  await expect(page).toHaveURL(/study\/curriculum/);
  await expect(page.locator('#sectionNav')).toHaveAttribute('aria-label', 'Education pages');
  const members = await page.locator('#educationLearner option').evaluateAll(options => options.map(o => ({id:o.value,name:o.textContent})));
  const sasha = members.find(x => /sasha/i.test(x.name)); const ishaan = members.find(x => /ishaan/i.test(x.name));
  expect(sasha).toBeTruthy(); expect(ishaan).toBeTruthy();
  await page.locator('#personaSwitcher').click();await page.locator('#personaMenu [data-persona="p3"]').click();
  await page.locator('.learning-section-tabs [data-route="study/curriculum"]').click();
  await page.locator('#personaSwitcher').click();await page.locator('#personaMenu [data-persona="p4"]').click();
  await expect(page.locator('#personaName')).toContainText('Ishaan');
  expect(await page.evaluate(() => HM.data.state.settings.activeLearnerId)).toBe(ishaan.id);
  await page.locator('#personaSwitcher').click();await page.locator('#personaMenu [data-persona="p3"]').click();
  await expect(page.locator('#personaName')).toContainText('Sasha');
  expect(await page.evaluate(() => HM.data.state.settings.activeLearnerId)).toBe(sasha.id);
  await page.screenshot({path:'test-results/navigation-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.locator('#menu').click();await expect(page.locator('#sidebar #personaSwitcher')).toBeVisible();
  await page.locator('#personaSwitcher').click();await page.locator('#personaMenu [data-persona="p4"]').click();
  await expect(page.locator('#personaName')).toContainText('Ishaan');
  await page.screenshot({path:'test-results/navigation-mobile.png'});
});

test('family identities persist through legacy restore, save and reset', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/');
  const expected = [
    ['p1','Nagarajan Balasubramanian','Father'], ['p2','Thamarai Elangovan','Mother'],
    ['p3','Sasha Nagarajan','Elder Sister'], ['p4','Ishaan Nagarajan','Younger Male']
  ];
  await page.evaluate(() => {
    const old = HM.data.clone(HM.data.state);
    for (const [id,name] of [['p1','Father'],['p2','Mother'],['p3','Ananya'],['p4','Arjun']]) old.people.find(p => p.id === id).name = name;
    old.tasks.push({id:'legacy-owner',title:'Preserved task',assignee:'Ananya',status:'todo'});
    old.academicProfiles.find(p => p.personId === 'p3').name = 'Ananya';
    localStorage.setItem(HM.data.KEY, JSON.stringify(old));
  });
  await page.reload();
  expect(await page.evaluate(() => HM.data.state.people.map(p => [p.id,p.name,p.householdRole]))).toEqual(expected);
  expect(await page.evaluate(() => HM.data.state.tasks.find(t => t.id === 'legacy-owner').assignee)).toBe('Sasha Nagarajan');
  expect(await page.evaluate(() => HM.data.state.academicProfiles.find(p => p.personId === 'p3').name)).toBe('Sasha Nagarajan');
  await page.evaluate(() => { HM.data.state.people.find(p => p.id === 'p3').name = 'Ananya'; HM.data.save(); });
  await page.reload();
  expect(await page.evaluate(() => HM.data.state.people.map(p => [p.id,p.name,p.householdRole]))).toEqual(expected);
  await page.evaluate(() => HM.data.reset()); await page.reload();
  expect(await page.evaluate(() => HM.data.state.people.map(p => [p.id,p.name,p.householdRole]))).toEqual(expected);
});
