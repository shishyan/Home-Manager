(function () {
  'use strict';
  const D=HM.data, e=D.esc;
  let published=null, error='', notice='';
  function studentGrade(id) { return Number(D.state.academicProfiles.find(p=>p.personId===id)?.grade); }
  function applies(item,id) { return !id || (item.grades||[]).includes(studentGrade(id)); }
  function events(studentId='') {
    const privateFeed=D.state.settings.schoolCalendarPrivate;
    const records=[...(published?.events||[]), ...(privateFeed?.events||[])];
    const results=[];
    for(const item of records) {
      if(!applies(item,studentId))continue;
      let grades=(item.grades||[]).filter(grade=>!studentId || grade===studentGrade(studentId));
      if(!item.privateNotice) grades=grades.filter(grade=>!(privateFeed?.supersedes||[]).some(rule=>rule.grades.includes(grade) && item.date>=rule.start && item.date<=rule.end && (!rule.types || rule.types.includes(item.type))));
      if(!grades.length)continue;
      results.push({...item,grades,context:'study',startAt:item.date+(item.time?'T'+item.time:''),allDay:!item.time,venue:'Peepal Prodigy / CBSE'});
    }
    for(const item of D.state.schoolEvents||[]) {
      if(item.status==='cancelled' || (studentId && item.studentId!==studentId))continue;
      if(results.some(existing=>existing.id===item.id))continue;
      results.push({...item,grades:[studentGrade(item.studentId)],context:'study',startAt:item.date+(item.time?'T'+item.time:''),endDate:item.date,allDay:!item.time,source:'family',sourceLabel:'Family-entered school date',confirmation:'family',notes:item.notes||'',venue:item.location||'Peepal Prodigy'});
    }
    const filter=D.state.settings.schoolCalendarSource||'all';
    return results.filter(item=>filter==='all'||item.source===filter).sort((a,b)=>String(a.startAt).localeCompare(String(b.startAt)));
  }
  function panel() {
    return `<section class="panel school-calendar-sources"><div class="section-head"><div><h2>School & CBSE calendar</h2><p>Peepal 2026–27 · Classes 7 and 12 · September 2026–March 2027</p></div><label>Show school dates<select data-school-calendar-source aria-label="School calendar source">${[['all','All sources'],['peepal','Peepal'],['cbse','CBSE'],['family','Family-entered']].map(([key,label])=>`<option value="${key}" ${(D.state.settings.schoolCalendarSource||'all')===key?'selected':''}>${label}</option>`).join('')}</select></label></div><p>${published?`Official sources checked ${e(published.checkedAt)}. Published annual dates may change; newer school circulars take priority.`:e(error||'Loading published school dates…')}</p><p>CBSE 2027 subject-wise board and practical dates await official publication. Class 7 exams follow the school timetable.</p><div class="school-source-links"><a href="https://www.peepalprodigy.in/images/academic-year-2026-2027.pdf" target="_blank" rel="noopener noreferrer">Peepal annual calendar</a><a href="https://www.cbse.gov.in/cbsenew/examination_Circular.html" target="_blank" rel="noopener noreferrer">CBSE official notices</a></div><details><summary>Latest grade schedules from school email</summary><p>Unlock the private school circulars using your existing private-feed passphrase. This imports exam subjects, pickup times and revised holidays for this device. Email contents are encrypted on GitHub.</p><label>Private feed passphrase<input type="password" data-school-calendar-password autocomplete="off" aria-label="School schedule passphrase"></label><button type="button" class="primary" data-school-calendar-unlock>Unlock school schedules</button><label class="secondary file-button">Import school dates file<input type="file" accept=".json" data-school-calendar-file hidden></label><p role="status">${e(notice || (D.state.settings.schoolCalendarPrivate?'Latest private school schedules are imported on this device.':'Private school schedules have not been imported on this device.'))}</p></details></section>`;
  }
  function importFeed(feed) {
    if(feed.schema!==1 || feed.kind!=='school-calendar' || !Array.isArray(feed.events) || !Array.isArray(feed.supersedes))throw new Error('Unsupported school schedule file.');
    const validDate=value=>/^\d{4}-\d{2}-\d{2}$/.test(value||'') && !Number.isNaN(Date.parse(value+'T00:00:00Z')) && new Date(value+'T00:00:00Z').toISOString().slice(0,10)===value;
    const ids=new Set();
    for(const item of feed.events) {
      if(!validDate(item.date) || !validDate(item.endDate||item.date) || (item.endDate && item.endDate<item.date) || !item.id || ids.has(item.id) || !item.title || !Array.isArray(item.grades) || !item.grades.every(grade=>[7,12].includes(grade)) || (item.sourceUrl && !/^https:\/\//.test(item.sourceUrl)))throw new Error('Invalid school event.');
      ids.add(item.id);
    }
    for(const rule of feed.supersedes)if(!Array.isArray(rule.grades) || !rule.grades.every(grade=>[7,12].includes(grade)) || !validDate(rule.start) || !validDate(rule.end) || rule.start>rule.end || (rule.types && !Array.isArray(rule.types)))throw new Error('Invalid school schedule revision.');
    D.state.settings.schoolCalendarPrivate={...feed,events:feed.events.map(item=>({...item,privateNotice:true})),importedAt:new Date().toISOString()};D.save();
    notice=`Imported ${feed.events.length} school dates. Repeated imports do not create duplicates.`;
    window.dispatchEvent(new CustomEvent('hm-school-calendar'));
  }
  document.addEventListener('change',async event=>{if(event.target.matches('[data-school-calendar-file]') && event.target.files[0]){try{importFeed(JSON.parse(await event.target.files[0].text()));}catch(err){notice=err.message;window.dispatchEvent(new CustomEvent('hm-school-calendar'));}return;}if(event.target.matches('[data-school-calendar-source]')){D.state.settings.schoolCalendarSource=event.target.value;D.save();window.dispatchEvent(new CustomEvent('hm-school-calendar'));}});
  document.addEventListener('click',async event=>{
    const unlock=event.target.closest('[data-school-calendar-unlock]');
    if(unlock) {
      const secret=document.querySelector('[data-school-calendar-password]')?.value;
      if(!secret){notice='Enter the private-feed passphrase.';window.dispatchEvent(new CustomEvent('hm-school-calendar'));return;}
      unlock.disabled=true;
      try {const response=await fetch('data/school-calendar.enc.json',{cache:'no-store'});if(!response.ok)throw new Error('School schedule feed is unavailable.');importFeed(await HM.mailFeed.decrypt(await response.json(),secret));}
      catch(err){notice=err.name==='OperationError'?'Unable to unlock: check the passphrase.':err.message;window.dispatchEvent(new CustomEvent('hm-school-calendar'));}
      finally {unlock.disabled=false;}
    }
    const button=event.target.closest('[data-school-calendar-event]');
    if(button) {
      const item=events().find(item=>item.id===button.dataset.schoolCalendarEvent);if(!item)return;
      document.querySelector('#schoolCalendarDetails')?.remove();
      const dialog=document.createElement('dialog');dialog.id='schoolCalendarDetails';dialog.className='school-calendar-dialog';
      dialog.innerHTML=`<form method="dialog"><button class="icon-button" aria-label="Close school event">×</button></form><h2>${e(item.title)}</h2><p>Class ${e(item.grades.join(' & '))} · ${e(item.type)}</p><p>${e(D.date(item.startAt))}${item.endDate && item.endDate!==item.date?' – '+e(D.date(item.endDate)):''}${item.time?' · '+e(item.time)+(item.endTime?'–'+e(item.endTime):''):''}</p><p>${e(item.notes||'Check the school circular for final details.')}</p><p>${e(item.sourceLabel)} · ${item.privateNotice?'Latest school notice':'Published schedule'}</p>${item.sourceUrl?`<a href="${e(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">View source</a>`:''}`;
      document.body.append(dialog);dialog.showModal();
    }
  });
  HM.schoolCalendar={events,panel,importFeed};
  fetch('data/school-calendar.json',{cache:'no-cache'}).then(response=>{if(!response.ok)throw new Error('Published schedule is unavailable.');return response.json();}).then(data=>{if(data.schema!==1 || !Array.isArray(data.events))throw new Error('Invalid published schedule.');published=data;window.dispatchEvent(new CustomEvent('hm-school-calendar'));}).catch(err=>{error=err.message;window.dispatchEvent(new CustomEvent('hm-school-calendar'));});
})();
