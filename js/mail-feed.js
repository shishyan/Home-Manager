(function () {
  'use strict';
  const D = HM.data, e = D.esc;
  const ACCOUNT = 'nagaraj957@gmail.com';
  const FEED = 'data/mail-sync.enc.json';
  let passphrase = '', busy = false, notice = '';
  const text = (v, n = 600) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, n);
  const senderAddress = sender => (String(sender || '').match(/<([^<>]+)>/)?.[1] || String(sender || '')).trim().toLowerCase();
  const excluded = sender => senderAddress(sender).includes('peepal');
  const refresh = () => window.dispatchEvent(new Event('hashchange'));
  const b64 = value => Uint8Array.from(atob(value), char => char.charCodeAt(0));
  function category(message) {
    const value = `${message.subject || ''} ${message.body || ''}`.toLowerCase();
    return /school|class|exam|education|homework/.test(value) ? 'school' : /doctor|hospital|medical|appointment|health/.test(value) ? 'health' : /flight|train|travel|hotel|booking/.test(value) ? 'travel' : /bill|payment|invoice|bank|fee|transaction/.test(value) ? 'bills' : /delivery|shipment|parcel|dispatch/.test(value) ? 'deliveries' : /passport|government|tax|aadhaar/.test(value) ? 'government' : 'home';
  }
  function personId(hint) {
    const value = String(hint || '').toLowerCase();
    return (D.state.people || []).find(person => value === person.id || (value && String(person.name).toLowerCase().includes(value)))?.id || '';
  }
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
    const date = new Date(`${value}T00:00:00Z`);
    return !isNaN(date) && date.toISOString().slice(0, 10) === value;
  }
  function mergeFeed(feed) {
    if (feed.schema !== 1 || feed.account !== ACCOUNT || !Array.isArray(feed.messages) || !Array.isArray(feed.events) || feed.messages.length > 10000 || feed.events.length > 10000) throw new Error('This feed does not match the configured Gmail account.');
    D.state.syncSuggestions ||= []; D.state.events ||= [];
    let messages = 0, events = 0;
    const allowedIds = new Set(feed.messages.filter(item => item && item.gmailId && !excluded(item.sender)).map(item => String(item.gmailId)));
    for (const item of feed.messages) {
      if (!item?.gmailId || excluded(item.sender)) continue;
      const sourceRef = `${ACCOUNT}:${item.gmailId}`;
      if (D.state.syncSuggestions.some(existing => existing.source === 'gmail' && existing.sourceRef === sourceRef)) continue;
      D.state.syncSuggestions.push({ id: D.uid('mail'), source: 'gmail', sourceRef, sourceAccount: ACCOUNT, title: text(item.subject, 160) || 'Email update', summary: text(item.summary || item.body), sender: text(item.sender, 100), receivedAt: text(item.receivedAt, 40), processedAt: feed.syncedAt, category: category(item), status: 'pending', urgency: 'normal', decision: 'Review email', personId: personId(item.memberHint), trusted: false });
      messages++;
    }
    for (const item of feed.events) {
      if (!item?.gmailId || !allowedIds.has(String(item.gmailId)) || !validDate(item.date) || (item.time && !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(item.time))) continue;
      const sourceRef = `${ACCOUNT}:${item.gmailId}:${item.id || `${item.date}:${item.time || ''}:${item.title}`}`;
      if (D.state.events.some(existing => existing.source === 'gmail' && existing.sourceRef === sourceRef)) continue;
      const message = feed.messages.find(message => String(message.gmailId) === String(item.gmailId));
      D.state.events.push({ id: D.uid('email-event'), context: 'home', title: text(item.title, 160) || 'Email event', category: 'Email', startAt: `${item.date}${item.time ? `T${item.time}` : ''}`, allDay: !item.time, venue: text(item.venue, 160) || 'See source email', description: text(item.description), source: 'gmail', sourceRef, sourceAccount: ACCOUNT, gmailId: String(item.gmailId), sender: text(message?.sender, 100), personId: personId(item.memberHint), needsReview: true });
      events++;
    }
    D.state.settings.mailFeed = { account: ACCOUNT, syncedAt: text(feed.syncedAt, 40), importedAt: new Date().toISOString(), messageCount: feed.messages.filter(item => item && !excluded(item.sender)).length };
    D.save();
    return { messages, events };
  }
  async function decrypt(envelope, secret) {
    if (!crypto.subtle) throw new Error('Open Home Manager over HTTPS to unlock the feed.');
    if (envelope.schema !== 1 || envelope.algorithm !== 'AES-GCM' || envelope.kdf !== 'PBKDF2-SHA256' || !Number.isInteger(envelope.iterations) || envelope.iterations < 100000 || envelope.iterations > 1000000) throw new Error('Unsupported encrypted feed format.');
    const salt = b64(envelope.salt), iv = b64(envelope.iv), ciphertext = b64(envelope.ciphertext);
    if (salt.length < 16 || iv.length !== 12 || ciphertext.length < 16) throw new Error('Incomplete encrypted feed.');
    const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: envelope.iterations, hash: 'SHA-256' }, material, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
    return JSON.parse(new TextDecoder().decode(plain));
  }
  async function check(file) {
    if (busy) return;
    const input = document.querySelector('[data-mail-passphrase]');
    const secret = input?.value || passphrase;
    if (!secret) { notice = 'Enter the private feed passphrase to unlock updates.'; refresh(); return; }
    busy = true; notice = 'Checking encrypted email updates…'; refresh();
    try {
      let envelope;
      if (file) envelope = JSON.parse(await file.text());
      else {
        const response = await fetch(`${FEED}?t=${Date.now()}`, { cache: 'no-store' });
        if (response.status === 404) throw new Error('No daily feed is published yet. Configure the GitHub Actions Gmail secrets, or import an encrypted feed file.');
        if (!response.ok) throw new Error('Unable to fetch email updates. Try again later.');
        envelope = await response.json();
      }
      const result = mergeFeed(await decrypt(envelope, secret));
      passphrase = secret;
      notice = `${result.messages} new messages and ${result.events} calendar entries saved. Existing entries were preserved. Review dates against the original email.`;
    } catch (error) {
      notice = error.name === 'OperationError' ? 'Unable to unlock: check the passphrase and try again.' : error.message || 'Unable to import this feed.';
    } finally { busy = false; refresh(); }
  }
  function renderCard() {
    const last = D.state.settings.mailFeed;
    return `<section class="panel mail-sync-card"><div class="section-head"><div><span class="section-kicker">DAILY EMAIL BRIEF</span><h2>Gmail updates</h2><p>${e(ACCOUNT)} · Peepal sender addresses excluded</p></div><span class="badge">${last ? 'Feed imported' : 'Awaiting first import'}</span></div><p>${last ? `Last successful feed: ${e(last.syncedAt || 'Not recorded')}` : 'The daily GitHub Actions job requires Gmail credentials and an encryption passphrase in repository secrets.'}</p><div class="mail-sync-controls"><label>Private feed passphrase<input type="password" data-mail-passphrase autocomplete="off" placeholder="${passphrase ? 'Unlocked for this session' : 'Enter passphrase'}" aria-label="Private feed passphrase"></label><button class="primary" data-mail-check ${busy ? 'disabled' : ''}>${passphrase ? 'Check updates' : 'Unlock and import'}</button><label class="secondary file-button">Import encrypted file<input type="file" accept=".json" data-mail-file hidden></label>${passphrase ? '<button data-mail-lock>Lock feed</button>' : ''}</div><p class="mail-feed-notice" role="status">${e(notice || 'Only encrypted data is published. Imported summaries and calendar entries are saved in this browser; the passphrase stays in memory until lock or reload.')}</p><details><summary>Daily sync setup</summary><p>Run the Daily Gmail sync workflow after its secrets are configured. Unlock here to import its latest result. This page does not send emails or create events in Google Calendar.</p><a href="https://github.com/shishyan/Home-Manager/actions" target="_blank" rel="noopener noreferrer">Open GitHub Actions</a></details></section>`;
  }
  function renderMessages() {
    const rows = (HM.persona?.scope(D.state.syncSuggestions || []) || D.state.syncSuggestions || []).filter(item => item.source === 'gmail' && !excluded(item.sender)).sort((a, b) => String(b.receivedAt).localeCompare(String(a.receivedAt)));
    return `<section class="panel mail-messages"><div class="section-head"><div><span class="section-kicker">EMAIL MESSAGES</span><h2>Messages to review</h2><p>${rows.length} saved summaries · grouped by household topic</p></div><button data-route="global/intelligence">Review actions</button></div>${rows.length ? rows.map(item => `<article class="mail-message"><div><span class="badge">${e(item.category || 'home')}</span><span class="badge">${e(item.status === 'applied' ? 'Added to app' : item.status === 'dismissed' ? 'Dismissed' : 'Needs review')}</span></div><h3>${e(item.title)}</h3><p>${e(item.summary)}</p><small>${e(item.sender)} · ${e(D.date(item.receivedAt))} · ${e(item.sourceAccount || ACCOUNT)}</small>${item.sourceRef?.startsWith(`${ACCOUNT}:`) ? `<a href="https://mail.google.com/mail/u/?authuser=${encodeURIComponent(ACCOUNT)}#all/${encodeURIComponent(item.sourceRef.split(':')[1])}" target="_blank" rel="noopener noreferrer">Open original email</a>` : ''}</article>`).join('') : '<p class="empty">No email summaries imported. Unlock the daily feed above to add messages and dated calendar entries.</p>'}</section>`;
  }
  function renderCalendar() {
    const rows = (HM.persona?.scope(D.state.events || []) || D.state.events || []).filter(item => item.source === 'gmail').sort((a, b) => String(a.startAt).localeCompare(String(b.startAt)));
    return `<section class="panel mail-calendar"><div class="section-head"><div><h2>Dates from email</h2><p>Saved to the family calendar. Verify extracted dates and details before acting.</p></div><button data-route="home/sms">Email updates</button></div>${rows.length ? rows.map(item => `<article class="mail-message"><h3>${e(item.title)}</h3><p>${e(D.date(item.startAt, { day: 'numeric', month: 'short', year: 'numeric' }))}${item.allDay ? ' · All day' : ` · ${e(String(item.startAt).slice(11, 16))}`} · ${e(item.description)}</p><small>${e(item.sender || 'Gmail')} · ${e(item.sourceAccount || ACCOUNT)}</small></article>`).join('') : '<p class="empty">Dated email updates will appear here after feed import.</p>'}</section>`;
  }
  document.addEventListener('click', event => {
    if (event.target.closest('[data-mail-check]')) check();
    if (event.target.closest('[data-mail-lock]')) { passphrase = ''; notice = 'Feed locked. Previously imported entries remain saved.'; refresh(); }
  });
  document.addEventListener('change', event => { if (event.target.matches('[data-mail-file]') && event.target.files[0]) check(event.target.files[0]); });
  HM.mailFeed = { renderCard, renderMessages, renderCalendar, mergeFeed, decrypt };
})();
