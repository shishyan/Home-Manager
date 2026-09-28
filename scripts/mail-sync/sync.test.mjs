import test from 'node:test';
import assert from 'node:assert/strict';
import { encrypt, decrypt, senderAllowed, analyzeMessage, extractEvents, mergeMessages, reconcileEvents } from './sync.mjs';
test('authenticated encryption protects content and rejects incorrect password and tampering', () => {
  const feed = { messages: [{ body: 'private appointment' }] }, password = 'a long unique test password';
  const encrypted = encrypt(feed, password);
  assert.deepEqual(decrypt(encrypted, password), feed);
  assert.equal(JSON.stringify(encrypted).includes('private appointment'), false);
  assert.throws(() => decrypt(encrypted, 'wrong password'));
  const bytes = Buffer.from(encrypted.ciphertext, 'base64'); bytes[0] ^= 1;
  assert.throws(() => decrypt({ ...encrypted, ciphertext: bytes.toString('base64') }, password));
});
test('actual sender-address exclusion handles display names and case', () => {
  assert.equal(senderAllowed('School <coordinator_m@PeepalProdigy.com>'), false);
  assert.equal(senderAllowed('Peepal discussion <teacher@other.example>'), true);
  assert.equal(senderAllowed('not an email'), false);
});
test('only explicit valid dates with operational event cues become suggestions', () => {
  const message = analyzeMessage({ id: 'one', sender: 'school@example.com', receivedAt: '2026-09-28T00:00:00Z', subject: 'Ishaan appointment', body: 'Meeting on 2026-10-02 at 9:30 am\nStatement date 2026-10-03\nExam 31/02/2026\nMeeting tomorrow\nMeeting 2026-10-02 at 9:30 am' });
  const events = extractEvents(message);
  assert.equal(events.length, 1); assert.equal(events[0].date, '2026-10-02'); assert.equal(events[0].time, '09:30'); assert.equal(events[0].memberHint, 'ishaan'); assert.equal(events[0].needsReview, true);
});
test('reruns are idempotent and marketing/OTP and excluded senders do not enter feed', () => {
  const raw = id => ({ id, internalDate: '1790553600000', payload: { mimeType: 'text/plain', headers: [{ name: 'From', value: 'teacher@example.com' }, { name: 'Subject', value: 'Meeting 2026-10-01' }], body: { data: Buffer.from('Meeting 2026-10-01').toString('base64url') } } });
  const first = mergeMessages({ messages: [], events: [], processedIds: [] }, [raw('a')]);
  const second = mergeMessages(first, [raw('a')]);
  assert.equal(second.messages.length, 1); assert.equal(second.events.length, 1);
  assert.equal(analyzeMessage({ id: 'otp', sender: 'service@example.com', subject: 'Your verification code', body: '123456' }), null);
});
test('explicit named-month year dates work without guessing dates without a year', () => {
  const message = analyzeMessage({ id: 'dates', sender: 'clinic@example.com', subject: 'Appointments', body: 'Appointment 2 October 2026 at 2:45 pm\nMeeting October 3, 2026\nExam October 4' });
  const events = extractEvents(message);
  assert.deepEqual(events.map(item => [item.date, item.time]), [['2026-10-02', '14:45'], ['2026-10-03', '']]);
});
test('rescheduled exam uses adjacent Date and Time labels across HTML-style blank lines', () => {
  const message = analyzeMessage({ id: 'exam', sender: 'exam@example.com', receivedAt: '2026-09-28T00:00:00Z', subject: 'Microsoft Certification Rescheduled Exam Appointment', body: 'View in browser https://example.com\n\nDear candidate\nExam: GH-300\nRegistration ID: REG-1234\nDate\n\nFriday, October 16, 2026\n\nTime\n\n10:00 PM India Standard Time\n\nThank you' });
  const events = extractEvents(message);
  assert.equal(events.length, 1); assert.equal(events[0].date, '2026-10-16'); assert.equal(events[0].time, '22:00'); assert.equal(events[0].timezone, 'Asia/Kolkata'); assert.equal(events[0].registrationId, 'REG-1234');
  assert.match(message.summary, /GH-300/); assert.doesNotMatch(message.summary, /https:|Dear candidate/);
});
test('upcoming automatic debit is an event but completed debit is not', () => {
  const input = { id: 'debit', sender: 'bank@example.com', subject: 'E-mandate', body: 'There is an upcoming E-mandate (Auto payment) of INR1950.\nAmount will be debited from your account on 30/09/2026.\nTransaction paid on 29/09/2026.' };
  assert.deepEqual(extractEvents(analyzeMessage(input)).map(event => event.date), ['2026-09-30']);
});
test('reschedule suppresses only older exact-registration events from same sender', () => {
  const make = (id, registration, subject, receivedAt) => analyzeMessage({ id, sender: 'exam@example.com', subject, receivedAt, body: `Registration ID: ${registration}\nExam 2026-10-16` });
  const messages = [make('old', 'REG-1234', 'Exam appointment', '2026-09-20T00:00:00Z'), make('new', 'REG-1234', 'Rescheduled exam appointment', '2026-09-28T00:00:00Z'), make('other', 'REG-9999', 'Exam appointment', '2026-09-20T00:00:00Z')];
  assert.deepEqual(reconcileEvents(messages, messages.flatMap(extractEvents)).map(event => event.gmailId), ['new', 'other']);
});
test('numeric entities and invisible direction marks do not break date extraction', () => {
  const message = analyzeMessage({ id: 'entities', sender: 'bill@example.com', subject: 'Bill due', body: 'Due date &#50;&#48; Sep &#50;&#48;&#50;&#54;\u200e' });
  assert.equal(extractEvents(message)[0].date, '2026-09-20');
});
