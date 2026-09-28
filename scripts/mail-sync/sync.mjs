import { createCipheriv, createDecipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const ACCOUNT = 'nagaraj957@gmail.com';
const ITERATIONS = 310000;
export function encrypt(payload, password) {
  const salt = randomBytes(16), iv = randomBytes(12);
  const key = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(JSON.stringify(payload), 'utf8'), cipher.final(), cipher.getAuthTag()]);
  return { schema: 1, algorithm: 'AES-GCM', kdf: 'PBKDF2-SHA256', iterations: ITERATIONS, salt: salt.toString('base64'), iv: iv.toString('base64'), ciphertext: ciphertext.toString('base64') };
}
export const encryptFeed = encrypt;
export function decrypt(envelope, password) {
  if (envelope.schema !== 1 || envelope.algorithm !== 'AES-GCM' || envelope.kdf !== 'PBKDF2-SHA256' || envelope.iterations !== ITERATIONS) throw new Error('Unsupported encrypted feed');
  const data = Buffer.from(envelope.ciphertext, 'base64');
  const key = pbkdf2Sync(password, Buffer.from(envelope.salt, 'base64'), ITERATIONS, 32, 'sha256');
  const cipher = createDecipheriv('aes-256-gcm', key, Buffer.from(envelope.iv, 'base64'));
  cipher.setAuthTag(data.subarray(-16));
  return JSON.parse(Buffer.concat([cipher.update(data.subarray(0, -16)), cipher.final()]).toString('utf8'));
}
export function senderAllowed(sender) {
  const address = sender.match(/<([^<>]+)>/)?.[1] || sender.trim();
  return address.includes('@') && !address.toLowerCase().includes('peepal');
}
const decode = value => Buffer.from(value || '', 'base64url').toString('utf8');
function parts(payload, type) {
  return [...(payload.mimeType === type && payload.body?.data ? [decode(payload.body.data)] : []), ...(payload.parts || []).flatMap(part => parts(part, type))];
}
function dateValid(date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date)) && new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) === date;
}
export function cleanText(text) {
  return String(text).replace(/&#(x[0-9a-f]+|\d+);/gi, (_, value) => { const number = value[0].toLowerCase() === 'x' ? parseInt(value.slice(1), 16) : Number(value); return number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : ''; }).replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&apos;/gi, "'").replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/[\u200b-\u200f\u202a-\u202e\u2060-\u2069\ufeff]/g, '').replace(/\r/g, '');
}
function operationalSummary(body, subject) {
  const lines = body.split('\n').map(line => line.replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim()).filter(line => line.length > 3 && !/^(dear|hello|hi\b|regards|thank you|unsubscribe|privacy policy|view in browser|click here|copyright)/i.test(line));
  const priority = lines.flatMap((line, index) => /\b(appointment|exam|registration|rescheduled|due|deadline|amount|debited|e-mandate|delivery|booking|reservation|meeting)\b/i.test(line) || /^(date|time)\s*:?$/i.test(line) ? [line, ...(/^(date|time|registration)/i.test(line) ? lines.slice(index + 1, index + 2) : [])] : []);
  return [...new Set(priority.length ? priority : lines.slice(0, 3))].join(' · ').slice(0, 900) || subject;
}
export function extractEvents(message) {
  // Avoid speculative scheduling: only lines with an event/action cue and an explicit date including a year.
  const events = [], seen = new Set();
  const lines = cleanText(message.body).split('\n').map(line => line.trim()).filter(Boolean);
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const labelledDate = /^(date|exam date|appointment date)\s*:?$/i.test(lines[index - 1] || '') || /^(date|exam date|appointment date)\s*:/i.test(line);
    const context = labelledDate && /\b(exam|appointment|meeting|session|interview)\b/i.test(message.subject) ? `${message.subject} ${line}` : line;
    if (!/\b(meeting|appointment|exam|test|deadline|due|event|class|session|workshop|interview|conference|holiday|training|will be debited|upcoming.{0,40}(?:mandate|payment))\b/i.test(context)) continue;
    if (/\b(paid|payment received|transaction|statement date|invoice date)\b/i.test(line) && !/\b(due|deadline|appointment|meeting|will be debited)\b/i.test(line)) continue;
    const match = line.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/) || line.match(/\b(\d{1,2})[\/-](\d{1,2})[\/-](20\d{2})\b/);
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const named = line.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[,\s]+(20\d{2})\b/i);
    const namedReverse = line.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})(?:st|nd|rd|th)?[,\s]+(20\d{2})\b/i);
    if (!match && !named && !namedReverse) continue;
    const date = match ? (match[1].length === 4 ? `${match[1]}-${match[2]}-${match[3]}` : `${match[3]}-${match[2].padStart(2, '0')}-${match[1].padStart(2, '0')}`) : `${(named || namedReverse)[3]}-${String(monthNames.indexOf((named ? named[2] : namedReverse[1]).slice(0, 3).toLowerCase()) + 1).padStart(2, '0')}-${String(named ? named[1] : namedReverse[2]).padStart(2, '0')}`;
    if (!dateValid(date)) continue;
    const nextTime = /^time\s*:?$/i.test(lines[index + 1] || '') ? lines[index + 2] || '' : /^time\s*:/i.test(lines[index + 1] || '') ? lines[index + 1] : '';
    const timeContext = `${line} ${nextTime}`;
    const clock = timeContext.match(/\b([01]?\d|2[0-3]):([0-5]\d)\s*(am|pm)?\b/i);
    let time = '';
    if (clock) { let hour = Number(clock[1]); if (clock[3] && hour <= 12) hour = hour % 12 + (/pm/i.test(clock[3]) ? 12 : 0); time = `${String(hour).padStart(2, '0')}:${clock[2]}`; }
    const signature = `${date}-${time}`;
    if (seen.has(signature)) continue;
    seen.add(signature);
    events.push({ id: `gmail-event-${message.gmailId}-${signature}`, source: 'gmail', gmailId: message.gmailId, title: message.subject || 'Email event', date, time, description: `${line}${nextTime ? ` · ${nextTime}` : ''}`.slice(0, 1500), memberHint: message.memberHint, needsReview: true, ...(message.registrationId ? { registrationId: message.registrationId } : {}), ...(/India Standard Time|\bIST\b/i.test(timeContext) ? { timezone: 'Asia/Kolkata' } : {}) });
  }
  return events;
}
export function convertMessage(raw) {
  const headers = Object.fromEntries((raw.payload?.headers || []).map(h => [h.name.toLowerCase(), h.value]));
  if (!senderAllowed(headers.from || '')) return null;
  const plain = parts(raw.payload || {}, 'text/plain');
  const html = parts(raw.payload || {}, 'text/html').join('\n').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<(br|\/p|\/div|\/tr|\/td)\b[^>]*>/gi, '\n').replace(/<[^>]+>/g, ' ');
  const body = (plain.length ? plain.join('\n') : html || raw.snippet || '').slice(0, 30000);
  return analyzeMessage({ id: raw.id, subject: headers.subject || '(No subject)', sender: headers.from, receivedAt: new Date(Number(raw.internalDate)).toISOString(), body });
}
export function analyzeMessage(raw) {
  if (!senderAllowed(raw.sender || '')) return null;
  const body = cleanText(raw.body || raw.text || '').slice(0, 30000);
  const subject = raw.subject || '(No subject)';
  if (/\b(otp|one[- ]time password|verification code|sign[- ]in code|newsletter|unsubscribe|limited[- ]time offer|sale ends)\b/i.test(subject) && !/\b(appointment|exam|school|bill|invoice|booking|reservation|deadline)\b/i.test(subject)) return null;
  const content = `${subject}\n${body}`;
  const named = ['sasha', 'ishaan', 'nagarajan', 'thamarai'].filter(name => new RegExp(`\\b${name}\\b`, 'i').test(content));
  const gmailId = raw.gmailId || raw.id;
  const registrationValue = body.match(/\bregistration\s*(?:id|number|#)\s*:?\s*([a-z0-9][a-z0-9-]{3,})/i)?.[1];
  const registrationId = registrationValue && /\d/.test(registrationValue) ? registrationValue : undefined;
  return { id: `gmail-${gmailId}`, source: 'gmail', gmailId, subject, sender: raw.sender, receivedAt: raw.receivedAt, body, summary: operationalSummary(body, subject), memberHint: named.length === 1 ? named[0] : 'family', ...(registrationId ? { registrationId: registrationId.toUpperCase() } : {}) };
}
export function reconcileEvents(messages, events) {
  const latestReschedules = new Map();
  for (const message of messages) {
    if (!message.registrationId || !/\brescheduled\b/i.test(message.subject) || !events.some(event => event.gmailId === message.gmailId)) continue;
    const key = `${message.sender.toLowerCase()}|${message.registrationId}`;
    const existing = latestReschedules.get(key);
    if (!existing || Date.parse(message.receivedAt) > Date.parse(existing.receivedAt)) latestReschedules.set(key, message);
  }
  const byId = new Map(messages.map(message => [message.gmailId, message]));
  return events.filter(event => {
    const message = byId.get(event.gmailId);
    if (!message?.registrationId) return true;
    const newest = latestReschedules.get(`${message.sender.toLowerCase()}|${message.registrationId}`);
    return !newest || newest.gmailId === message.gmailId || Date.parse(message.receivedAt) >= Date.parse(newest.receivedAt);
  });
}
export function mergeMessages(feed, rawMessages) {
  const known = new Set(feed.processedIds || []), next = { ...feed, messages: [...(feed.messages || [])], events: [...(feed.events || [])] };
  for (const raw of rawMessages) {
    if (known.has(raw.id)) continue;
    const message = convertMessage(raw);
    if (message) { next.messages.push(message); next.events.push(...extractEvents(message)); }
    known.add(raw.id);
  }
  // Also remove previously imported excluded senders, if the policy changed.
  next.messages = next.messages.filter(message => senderAllowed(message.sender));
  const retained = new Set(next.messages.map(message => message.gmailId));
  next.events = next.events.filter(event => retained.has(event.gmailId));
  next.events = reconcileEvents(next.messages, next.events);
  return { ...next, schema: 1, account: ACCOUNT, syncedAt: new Date().toISOString(), processedIds: [...known] };
}
async function jsonFetch(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Remote request failed (${response.status}); check OAuth access and account`);
  return response.json();
}
export async function run() {
  const required = ['GMAIL_CLIENT_ID', 'GMAIL_CLIENT_SECRET', 'GMAIL_REFRESH_TOKEN', 'MAIL_FEED_PASSWORD'];
  for (const name of required) if (!process.env[name]) throw new Error(`Missing secret: ${name}`);
  if (process.env.MAIL_FEED_PASSWORD.length < 20) throw new Error('MAIL_FEED_PASSWORD must contain at least 20 characters');
  const token = await jsonFetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ client_id: process.env.GMAIL_CLIENT_ID, client_secret: process.env.GMAIL_CLIENT_SECRET, refresh_token: process.env.GMAIL_REFRESH_TOKEN, grant_type: 'refresh_token' }) });
  const headers = { authorization: `Bearer ${token.access_token}` };
  const profile = await jsonFetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', { headers });
  if (profile.emailAddress?.toLowerCase() !== ACCOUNT) throw new Error('OAuth token belongs to the wrong Gmail account');
  const output = 'data/mail-sync.enc.json';
  let feed = { schema: 1, account: ACCOUNT, messages: [], events: [], processedIds: [] };
  try { feed = decrypt(JSON.parse(await readFile(output, 'utf8')), process.env.MAIL_FEED_PASSWORD); } catch (error) { if (error.code !== 'ENOENT') throw new Error('Existing feed cannot be decrypted. Preserve its password or migrate it before continuing.'); }
  const excludedFolders = '-in:spam -in:trash -in:sent -in:drafts';
  const query = feed.syncedAt ? `${excludedFolders} after:${Math.max(0, Math.floor(Date.parse(feed.syncedAt) / 1000) - 172800)}` : `${excludedFolders} newer_than:30d`;
  const known = new Set(feed.processedIds), rawMessages = [];
  let pageToken = '';
  do {
    const params = new URLSearchParams({ q: query, maxResults: '100', ...(pageToken ? { pageToken } : {}) });
    const page = await jsonFetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?${params}`, { headers });
    for (const item of page.messages || []) if (!known.has(item.id)) rawMessages.push(await jsonFetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(item.id)}?format=full`, { headers }));
    pageToken = page.nextPageToken || '';
  } while (pageToken);
  const next = mergeMessages(feed, rawMessages);
  await mkdir('data', { recursive: true });
  await writeFile(output, `${JSON.stringify(encrypt(next, process.env.MAIL_FEED_PASSWORD), null, 2)}\n`, { mode: 0o600 });
  console.log(`Encrypted sync complete: ${next.messages.length} cumulative messages, ${next.events.length} calendar suggestions. No email content logged.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) run().catch(error => { console.error(error.message); process.exitCode = 1; });
