const { test, expect } = require('@playwright/test');

test('encrypted mail import rejects wrong passwords, excludes Peepal and survives reload without duplicates', async ({ page }) => {
  const { encryptFeed } = await import('../scripts/mail-sync/sync.mjs');
  const password = 'synthetic-test-password-only';
  const feed = { schema: 1, account: 'nagaraj957@gmail.com', syncedAt: '2026-09-28T08:00:00Z', messages: [
    { gmailId: 'test-a', subject: 'Family appointment', sender: 'Office <office@example.com>', summary: 'Appointment confirmed', receivedAt: '2026-09-28T08:00:00Z' },
    { gmailId: 'test-b', subject: 'Excluded school message', sender: 'School <admin@peepal.example>', body: 'Excluded' }
  ], events: [
    { id: 'event-a', gmailId: 'test-a', title: 'Family appointment', date: '2026-10-16', time: '22:00' },
    { id: 'event-b', gmailId: 'test-b', title: 'Excluded event', date: '2026-10-17' }
  ] };
  await page.route('**/data/mail-sync.enc.json*', route => route.fulfill({ json: encryptFeed(feed, password) }));
  await page.goto('http://127.0.0.1:8765/#/home/sms');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('[data-mail-passphrase]').fill('wrong-password');
  await page.locator('[data-mail-check]').click();
  await expect(page.locator('.mail-feed-notice')).toContainText('Unable to unlock');
  await page.locator('[data-mail-passphrase]').fill(password);
  await page.locator('[data-mail-check]').click();
  await expect(page.locator('.mail-feed-notice')).toContainText('1 new messages and 1 calendar entries');
  await expect(page.locator('.mail-messages')).toContainText('Appointment confirmed');
  await expect(page.locator('.mail-messages')).not.toContainText('Excluded school');
  await page.locator('[data-mail-check]').click();
  await expect(page.locator('.mail-feed-notice')).toContainText('0 new messages and 0 calendar entries');
  await page.reload();
  await expect(page.locator('[data-mail-passphrase]')).toHaveValue('');
  expect(await page.evaluate(() => JSON.stringify(localStorage))).not.toContain(password);
  const events = await page.evaluate(() => HM.data.state.events.filter(e => e.source === 'gmail'));
  expect(events).toHaveLength(1);
  expect(events[0].startAt).toBe('2026-10-16T22:00');
  expect(events[0].needsReview).toBe(true);
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
