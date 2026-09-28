const {test,expect}=require('@playwright/test');
test('two address books merge identities, preserve edits and import privately',async({page})=>{
  const {encryptFeed}=await import('../scripts/mail-sync/sync.mjs');
  const password='synthetic-contacts-password-only';
  const feed={schema:1,syncedAt:'2026-09-28',contacts:[
    {sourceAccount:'nagaraj957@gmail.com',sourceRef:'nagaraj957@gmail.com:1',name:'School office',phones:['+919876543210'],emails:['office@example.com']},
    {sourceAccount:'lotusnaga@gmail.com',sourceRef:'lotusnaga@gmail.com:2',name:'School alternate name',phones:['+919876543210','+919876543211'],emails:['office@example.com','admin@example.com']}
  ]};
  await page.route('**/data/contacts-sync.enc.json*',r=>r.fulfill({json:encryptFeed(feed,password)}));
  await page.goto('http://127.0.0.1:8765/#/home/directory');
  await page.evaluate(()=>localStorage.clear());await page.reload();
  await expect(page.locator('#navigationGroup')).toHaveValue('contacts');
  await page.locator('[data-contact-passphrase]').fill(password);
  await page.locator('[data-contact-unlock]').click();
  await expect(page.locator('.contact-feed-notice')).toContainText('1 contacts added; 1 matching contacts merged');
  await expect(page.locator('.contact-directory .card')).toHaveCount(1);
  await expect(page.locator('.contact-directory')).toContainText('School office');
  await expect(page.locator('.contact-directory')).toContainText('admin@example.com');
  await expect(page.locator('.contact-directory')).toContainText('lotusnaga@gmail.com');
  await page.locator('[data-edit="contact"]').click();
  await page.locator('#entityForm [name="name"]').fill('Our school');
  await page.locator('#entityForm button[value="default"]').click();
  await page.locator('[data-contact-passphrase]').fill(password);
  await page.locator('[data-contact-unlock]').click();
  await expect(page.locator('.contact-feed-notice')).toContainText('0 contacts added');
  await expect(page.locator('.contact-directory')).toContainText('Our school');
  await page.reload();
  await expect(page.locator('[data-contact-passphrase]')).toHaveValue('');
  expect(await page.evaluate(()=>JSON.stringify(localStorage))).not.toContain(password);
  await page.setViewportSize({width:390,height:844});
  await expect.poll(async()=>Math.round((await page.locator('.app-shell').boundingBox()).x)).toBe(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'test-results/contacts-mobile.png'});
});

test('legacy menu selections and deep links choose the new parent',async({page})=>{
  await page.goto('http://127.0.0.1:8765/');
  await page.evaluate(()=>{HM.data.state.settings.activeGroup='care';HM.data.save();});
  await page.goto('http://127.0.0.1:8765/#/settings/app');await page.reload();
  await expect(page.locator('#navigationGroup')).toHaveValue('household');
  for(const [route,parent] of [['kitchen/recipes','household'],['home/life/health','household'],['community/directory','contacts'],['home/life/vehicles','leisure'],['home/money/budget','money']]){
    await page.goto(`http://127.0.0.1:8765/#/${route}`);
    await expect(page.locator('#navigationGroup')).toHaveValue(parent);
  }
});
