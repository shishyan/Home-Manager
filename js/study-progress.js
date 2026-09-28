(function () {
  'use strict';
  const D=HM.data, e=D.esc;
  const phases=[['not-started','Not started'],['learning','Learning'],['revision','Revise'],['ready','Ready']];
  const dateKey=()=>{const now=new Date();return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;};
  let notice='';
  function record(studentId,lessonId) { return D.state.settings.chapterDaily?.[studentId]?.[lessonId] || {}; }
  function phase(context,lesson) {
    const saved=record(context.activeId,lesson.id);
    if (phases.some(([key])=>key===saved.status)) return saved.status;
    const tracking=HM.views.chapterTracking(context,lesson);
    return tracking.mastery>=80 ? 'ready' : tracking.complete || tracking.topics.learning || tracking.topics.mastered || tracking.mastery>0 ? 'learning' : 'not-started';
  }
  function options(value) {return phases.map(([key,label])=>`<option value="${key}" ${key===value?'selected':''}>${label}</option>`).join('');}
  function studied(saved) {return (saved.days || []).some(day=>day.date===dateKey() && day.studied);}
  function save(lessonId,values,todayValues) {
    const studentId=D.state.settings.activeLearnerId;
    if (!HM.views.lessonById(lessonId)) return;
    D.state.settings.chapterDaily ||= {};
    D.state.settings.chapterDaily[studentId] ||= {};
    const saved=D.state.settings.chapterDaily[studentId][lessonId] ||= {};
    Object.assign(saved,values,{updatedAt:new Date().toISOString()});
    if (todayValues) {
      saved.days ||= [];
      let entry=saved.days.find(day=>day.date===dateKey());
      if (!entry) {entry={date:dateKey()};saved.days.push(entry);}
      Object.assign(entry,todayValues);
    }
    D.save();notice='Saved for this student. You can update it again anytime.';
    window.dispatchEvent(new CustomEvent('hm-study-progress'));
  }
  const levels=[['learning','Learning'],['revision','Revision'],['expert','Expert']];
  function percentages(context,lesson) {
    const saved=record(context.activeId,lesson.id);
    const legacy=HM.views.chapterTracking(context,lesson).mastery || 0;
    return Object.fromEntries(levels.map(([key])=>[key, Math.max(0,Math.min(100,Math.round((saved.levels?.[key] ?? (key==='learning'?legacy:0))/10)*10))]));
  }
  function overview(context,lessons) {
    const rows=lessons.map(lesson=>{const values=percentages(context,lesson);const overall=Math.round(levels.reduce((total,[key])=>total+values[key],0)/3);return `<article class="chapter-overview-row"><b>${e(lesson.title)}</b><strong>${overall}% overall</strong>${levels.map(([key,label])=>`<span>${label}: ${values[key]}%<progress max="100" value="${values[key]}" aria-label="${e(lesson.title)} ${label}"></progress></span>`).join('')}</article>`;}).join('');
    return `<section class="panel chapter-progress-overview"><h2>Chapter progress</h2><p>Read-only summary. Update Learning, Revision and Expert in the Progress tab. Overall is the average of the three levels.</p>${rows}</section>`;
  }
  function curriculum(context,lessons,learner,report) {
    return `${learner}<section class="panel study-daily-heading"><h2>Progress</h2><p>Update each level in 10% steps. Learning: understand the ideas. Revision: recall and practise. Expert: explain and solve independently.</p><p role="status">${e(notice)}</p></section><section class="study-chapter-list" aria-label="Chapter progress tracking">${lessons.map(lesson=>{const values=percentages(context,lesson),tracking=HM.views.chapterTracking(context,lesson);return `<details class="panel progress-chapter"><summary><b>${e(lesson.title)}</b><span>${levels.map(([key,label])=>`${label} ${values[key]}%`).join(' · ')}</span></summary><div class="chapter-level-controls">${levels.map(([key,label])=>`<label>${label}<select data-study-level="${key}" data-lesson="${e(lesson.id)}" aria-label="${e(lesson.title)} ${label} progress">${Array.from({length:11},(_,index)=>index*10).map(value=>`<option value="${value}" ${values[key]===value?'selected':''}>${value}%</option>`).join('')}</select></label>`).join('')}</div>${panel(context,lesson,tracking,'')}</details>`;}).join('')}</section><details class="panel study-history"><summary>Assessments, attendance & earlier reports</summary>${report}</details>`;
  }
  function panel(context,lesson,tracking,legacy) {
    const saved=record(context.activeId,lesson.id),entry=(saved.days||[]).find(day=>day.date===dateKey())||{};
    return `<section class="daily-progress-panel" aria-label="Detailed chapter progress"><div class="daily-topic-list"><h3>Can I explain each topic?</h3>${tracking.topics.subchapters.map(topic=>{const state=tracking.topics.states[topic.id];return `<button type="button" data-subchapter-progress="${e(topic.id)}" data-lesson="${e(lesson.id)}" data-state="${e(state)}"><b>${e(topic.title)}</b><span>${state==='mastered'?'✓ Can explain':state==='learning'?'Learning':'Not started'}</span></button>`;}).join('')}<small>Tap a topic to cycle its status. Topic checks help you decide your Learning, Revision and Expert percentages.</small></div><fieldset class="daily-stage-checks"><legend>What have I worked through?</legend>${[['book','Read the chapter'],['understand','Understand the ideas'],['practice','Practise questions'],['assignments','Complete assigned work']].map(([key,label])=>`<label><input type="checkbox" data-study-stage="${key}" data-lesson="${e(lesson.id)}" ${tracking.status[key]?'checked':''}>${label}</label>`).join('')}</fieldset><form data-study-checkin="${e(lesson.id)}"><h3>Today’s check-in</h3><label>Minutes (optional)<input name="minutes" type="number" min="0" max="600" step="1" value="${e(entry.minutes??'')}"></label><label>How did it feel?<select name="confidence"><option value="">Choose if helpful</option>${[['help','I need help'],['learning','I am getting there'],['explain','I can explain it']].map(([key,label])=>`<option value="${key}" ${entry.confidence===key?'selected':''}>${label}</option>`).join('')}</select></label><label>My next step<input name="nextStep" maxlength="240" placeholder="e.g. Practise two word problems" value="${e(saved.nextStep || '')}"></label><button class="primary" type="submit">Save today’s update</button></form><p class="study-save-notice" role="status">${e(notice || 'Your changes save on this device. A daily check-in records one entry per chapter per day.')}</p></section>`;
  }
  document.addEventListener('change',event=>{
    const target=event.target;
    if (target.matches('[data-study-level]')) {
      const key=target.dataset.studyLevel,value=Number(target.value),id=target.dataset.lesson;
      if (levels.some(([level])=>level===key) && Number.isInteger(value) && value>=0 && value<=100 && value%10===0) {
        const saved=record(D.state.settings.activeLearnerId,id);
        save(id,{levels:{...saved.levels,[key]:value}});
      }
    }
    if (target.matches('[data-study-status]') && phases.some(([key])=>key===target.value)) save(target.dataset.studyStatus,{status:target.value});
    if (target.matches('[data-study-stage]')) {
      const id=D.state.settings.activeLearnerId,key=target.dataset.studyStage,lessonId=target.dataset.lesson;
      if (!['book','understand','practice','assignments'].includes(key) || !HM.views.lessonById(lessonId)) return;
      D.state.settings.chapterJourney ||= {};D.state.settings.chapterJourney[id] ||= {};D.state.settings.chapterJourney[id][lessonId] ||= {};
      D.state.settings.chapterJourney[id][lessonId][key]=target.checked;
      save(lessonId,{});
    }
  });
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-study-today]');
    if (button) save(button.dataset.studyToday,{}, {studied:true});
  });
  document.addEventListener('submit',event=>{
    const form=event.target.closest('[data-study-checkin]');if(!form)return;event.preventDefault();
    const fields=new FormData(form),raw=String(fields.get('minutes')||'');
    const minutes=raw===''?null:Number(raw);if(minutes!==null && (!Number.isInteger(minutes)||minutes<0||minutes>600))return;
    save(form.dataset.studyCheckin,{nextStep:String(fields.get('nextStep')||'').trim().slice(0,240)},{minutes,confidence:String(fields.get('confidence')||'')});
  });
  HM.studyProgress={curriculum,panel,record,dateKey,overview};
})();
