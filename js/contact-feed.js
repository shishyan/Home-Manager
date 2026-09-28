(function () {
  'use strict';
  const D = HM.data, e = D.esc;
  const accounts = ['nagaraj957@gmail.com', 'lotusnaga@gmail.com'];
  let notice = '', busy = false;
  const refresh = () => window.dispatchEvent(new Event('hashchange'));
  const clean = value => String(value || '').trim().toLowerCase();
  const phoneKey = value => {
    const digits = String(value || '').replace(/\D/g, '').replace(/^00/, '');
    return /^91\d{10}$/.test(digits) ? digits.slice(2) : /^0\d{10}$/.test(digits) ? digits.slice(1) : digits;
  };
  function merge(feed) {
    if (feed.schema !== 1 || !Array.isArray(feed.contacts) || feed.contacts.length > 20000) throw new Error('Unsupported contact feed.');
    D.state.contacts = D.state.contacts.filter(c => !(c.id === 'c1' && c.name === 'Dr. Meena' && c.phone === '98765 43210'));
    let added = 0, matched = 0;
    for (const item of feed.contacts) {
      if (!accounts.includes(item.sourceAccount) || !item.sourceRef || !item.name) continue;
      const phones = [...new Set((item.phones || [item.phone]).filter(Boolean).map(String))];
      const emails = [...new Set((item.emails || [item.email]).filter(Boolean).map(String))];
      const existing = D.state.contacts.find(c => c.sourceRef === item.sourceRef || c.sourceRefs?.includes(item.sourceRef) || emails.some(email => [c.email, ...(c.emails || [])].some(v => v && clean(v) === clean(email))) || phones.some(phone => [c.phone, ...(c.phones || [])].some(v => v && phoneKey(v) === phoneKey(phone))));
      if (existing) {
        existing.sourceRefs = [...new Set([...(existing.sourceRefs || []), existing.sourceRef, item.sourceRef].filter(Boolean))];
        existing.sourceAccounts = [...new Set([...(existing.sourceAccounts || []), existing.sourceAccount, item.sourceAccount].filter(Boolean))];
        existing.phones = [...new Set([existing.phone, ...(existing.phones || []), ...phones].filter(Boolean))];
        existing.emails = [...new Set([existing.email, ...(existing.emails || []), ...emails].filter(Boolean))];
        if (!existing.phone) existing.phone = phones[0] || '';
        if (!existing.email) existing.email = emails[0] || '';
        matched++;
      } else {
        D.state.contacts.push({id:D.uid('c'),scope:'home',name:String(item.name).slice(0,200),category:String(item.category || 'Google contact').slice(0,120),phone:phones[0] || '',email:emails[0] || '',phones,emails,address:String(item.address || '').slice(0,500),hours:'Imported from Google Contacts',source:'Google Contacts',sourceRef:item.sourceRef,sourceRefs:[item.sourceRef],sourceAccount:item.sourceAccount,sourceAccounts:[item.sourceAccount]});
        added++;
      }
      D.state.settings.contactImports ||= {};
      D.state.settings.contactImports[item.sourceAccount] = {syncedAt:feed.syncedAt,importedAt:new Date().toISOString()};
    }
    D.save(); return {added,matched};
  }
  function render() {
    const imported = D.state.settings.contactImports || {};
    return `<section class="panel mail-sync-card"><div class="section-head"><div><span class="section-kicker">FAMILY ADDRESS BOOKS</span><h2>Google Contacts</h2><p>Keep contacts from both accounts together, with their source account recorded.</p></div><button data-route="settings/app">Connect accounts for refresh</button></div><div class="grid-2">${accounts.map(account=>`<div><b>${e(account)}</b><p>${imported[account] ? `Imported ${e(imported[account].syncedAt)} · refresh requires Google authorization` : 'Awaiting account import'}</p><a href="https://contacts.google.com/?authuser=${encodeURIComponent(account)}" target="_blank" rel="noopener noreferrer">Open address book</a></div>`).join('')}</div><div class="mail-sync-controls"><label>Private feed passphrase<input type="password" data-contact-passphrase autocomplete="off" aria-label="Contacts feed passphrase"></label><button class="primary" data-contact-unlock ${busy ? 'disabled' : ''}>Unlock contact snapshot</button></div><p class="contact-feed-notice" role="status">${e(notice || 'Use your email feed passphrase. Contacts are encrypted on GitHub and saved privately in this browser after import. Existing contact names and categories are preserved.')}</p></section>`;
  }
  document.addEventListener('click', async event => {
    if (!event.target.closest('[data-contact-unlock]') || busy) return;
    const secret = document.querySelector('[data-contact-passphrase]')?.value;
    if (!secret) {notice='Enter the private feed passphrase.';refresh();return;}
    busy=true;notice='Unlocking contacts…';refresh();
    try {
      const response=await fetch(`data/contacts-sync.enc.json?t=${Date.now()}`,{cache:'no-store'});
      if (!response.ok) throw new Error('No encrypted contact snapshot is available.');
      const result=merge(await HM.mailFeed.decrypt(await response.json(),secret));
      notice=`${result.added} contacts added; ${result.matched} matching contacts merged. No contacts were deleted.`;
    } catch(error) {notice=error.name==='OperationError'?'Unable to unlock: check the passphrase.':error.message;}
    finally {busy=false;refresh();}
  });
  HM.contactFeed={render,merge};
})();
