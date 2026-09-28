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
  function curriculum(context,lessons,learner,report) {
    const states=lessons.map(lesson=>phase(context,lesson));
    const ready=states.filter(value=>value==='ready').length;
    const todayCount=lessons.filter(lesson=>studied(record(context.activeId,lesson.id))).length;
    return `${learner}<section class="panel study-daily-heading"><div><span class="section-kicker">${e(context.profile.name)} · Class ${e(context.profile.grade)} · ${e(context.selectedSubject)}</span><h2>Curriculum & progress</h2><p>Choose your chapter status. Tap “Studied today” after a session. Open a chapter for topic checks and your next step.</p></div><div class="study-daily-counts"><span><b>${ready}/${lessons.length}</b> ready</span><span><b>${todayCount}</b> studied today</span><span><b>${states.filter(value=>value==='revision').length}</b> to revise</span></div><p role="status">${e(notice)}</p></section><section class="study-chapter-list" aria-label="Chapter curriculum and progress">${lessons.map((lesson,index)=>{
      const saved=record(context.activeId,lesson.id),status=phase(context,lesson);
      return `<article class="study-chapter-row" data-filter-row><div class="study-chapter-title"><span>${String(index+1).padStart(2,'0')}</span><button type="button" data-chapter-workspace="${e(lesson.id)}" data-chapter-section="summary"><b>${e(lesson.title)}</b><small>${e(saved.nextStep || 'Open chapter to learn and check topics')}</small></button></div><label>Status<select data-study-status="${e(lesson.id)}" aria-label="${e(lesson.title)} chapter status">${options(status)}</select></label><button type="button" data-study-today="${e(lesson.id)}" class="${studied(saved)?'is-studied':''}" aria-pressed="${studied(saved)}">${studied(saved)?'✓ Studied today':'Studied today'}</button><button type="button" data-chapter-workspace="${e(lesson.id)}" data-chapter-section="summary" class="study-open">Details →</button></article>`;
    }).join('') || '<p class="empty">Select a subject to see its chapters.</p>'}</section><details class="panel study-history"><summary>Assessments, attendance & earlier reports</summary>${report}</details>`;
  }
  function panel(context,lesson,tracking,legacy) {
    const saved=record(context.activeId,lesson.id),entry=(saved.days||[]).find(day=>day.date===dateKey())||{};
    return `<section class="daily-progress-panel" aria-label="Detailed chapter progress"><header><span class="section-kicker">MY PROGRESS</span><h2>${e(lesson.title)}</h2><p>Small updates after each study session.</p></header><label>Chapter status<select data-study-status="${e(lesson.id)}" aria-label="Detailed chapter status">${options(phase(context,lesson))}</select></label><div class="daily-topic-list"><h3>Can I explain each topic?</h3>${tracking.topics.subchapters.map(topic=>{const state=tracking.topics.states[topic.id];return `<button type="button" data-subchapter-progress="${e(topic.id)}" data-lesson="${e(lesson.id)}" data-state="${e(state)}"><b>${e(topic.title)}</b><span>${state==='mastered'?'✓ Can explain':state==='learning'?'Learning':'Not started'}</span></button>`;}).join('')}<small>Tap a topic to cycle its status. These checks stay separate from your chapter status.</small></div><fieldset class="daily-stage-checks"><legend>What have I worked through?</legend>${[['book','Read the chapter'],['understand','Understand the ideas'],['practice','Practise questions'],['assignments','Complete assigned work']].map(([key,label])=>`<label><input type="checkbox" data-study-stage="${key}" data-lesson="${e(lesson.id)}" ${tracking.status[key]?'checked':''}>${label}</label>`).join('')}</fieldset><form data-study-checkin="${e(lesson.id)}"><h3>Today’s check-in</h3><label><input type="checkbox" name="studied" ${entry.studied?'checked':''}>I studied this chapter today</label><label>Minutes (optional)<input name="minutes" type="number" min="0" max="600" step="1" value="${e(entry.minutes??'')}"></label><label>How did it feel?<select name="confidence"><option value="">Choose if helpful</option>${[['help','I need help'],['learning','I am getting there'],['explain','I can explain it']].map(([key,label])=>`<option value="${key}" ${entry.confidence===key?'selected':''}>${label}</option>`).join('')}</select></label><label>My next step<input name="nextStep" maxlength="240" placeholder="e.g. Practise two word problems" value="${e(saved.nextStep || '')}"></label><button class="primary" type="submit">Save today’s update</button></form><p class="study-save-notice" role="status">${e(notice || 'Your changes save on this device. A daily check-in records one entry per chapter per day.')}</p><details class="study-legacy"><summary>Earlier mastery & learning records</summary>${legacy}</details></section>`;
  }
  document.addEventListener('change',event=>{
    const target=event.target;
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
    save(form.dataset.studyCheckin,{nextStep:String(fields.get('nextStep')||'').trim().slice(0,240)},{studied:fields.has('studied'),minutes,confidence:String(fields.get('confidence')||'')});
  });
  HM.studyProgress={curriculum,panel,record,dateKey};
})();
