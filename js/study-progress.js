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
  const proficiencyColors={learning:'#db2777',revision:'#ea580c',expert:'#16a34a'};
  function save(lessonId,values,todayValues,refresh=true) {
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
    if(refresh) window.dispatchEvent(new CustomEvent('hm-study-progress'));
    else document.querySelector('.progress-save-status').textContent='Saved';
  }
  const levels=[['learning','Learning'],['revision','Revision'],['expert','Expert']];
  function summary(context,lessons) {
    const values=lessons.map(lesson=>percentages(context,lesson));
    const avg=key=>values.length?Math.round(values.reduce((sum,item)=>sum+item[key],0)/values.length):0;
    return {
      values,
      learning:avg('learning'),
      revision:avg('revision'),
      expert:avg('expert'),
      overall:Math.round((avg('learning')+avg('revision')+avg('expert'))/3),
      started:values.filter(item=>Object.values(item).some(value=>value>0)).length,
      expertComplete:values.filter(item=>item.expert===100).length,
      chapters:lessons.length
    };
  }
  function percentages(context,lesson) {
    const saved=record(context.activeId,lesson.id);
    const legacy=HM.views.chapterTracking(context,lesson).mastery || 0;
    return Object.fromEntries(levels.map(([key])=>[key, Math.max(0,Math.min(100,Math.round((saved.levels?.[key] ?? (key==='learning'?legacy:0))/10)*10))]));
  }
  function overview(context,lessons,trackControl='') {
    const stats=summary(context,lessons);
    const valueFor=key=>stats[key];
    const metrics=[['Overall proficiency',stats.overall,'sparkles','violet'],['Chapters started',`${stats.started}/${stats.chapters}`,'book-open-check','blue'],['Expert complete',stats.expertComplete,'badge-check','green']];
    return `<section class="subject-progress-dashboard">
      <header class="subject-dashboard-heading"><div><span class="section-kicker">SUBJECT DASHBOARD</span><h2>${e(context.selectedSubject)} at a glance</h2><p>Chapter progress across ${lessons.length} lessons. Update any chapter in Progress.</p></div><div class="study-dashboard-header-actions">${trackControl}<button type="button" class="study-dashboard-open" data-route="study/curriculum"><i data-lucide="route"></i> Update progress</button></div></header>
      <div class="subject-dashboard-layout">
        <section class="subject-dashboard-overview" aria-label="Subject proficiency summary">
          <div class="subject-dashboard-metrics">${metrics.map(([label,value,iconName,tone])=>`<article class="study-dashboard-metric tone-${tone}"><span class="study-dashboard-icon"><i data-lucide="${iconName}"></i></span><div><small>${label}</small><strong>${value}${label==='Overall proficiency'?'%':''}</strong><span>${label==='Chapters started'?`${stats.chapters-stats.started} not started`:label==='Expert complete'?'At 100% Expert':'Learning · Revision · Expert average'}</span></div></article>`).join('')}</div>
          <section class="subject-proficiency-chart"><div class="subject-chart-heading"><div><h3>Proficiency by level</h3><p>Average across all chapters</p></div><span>${stats.overall}%<small>overall</small></span></div>${levels.map(([key,label])=>`<div class="subject-chart-row level-${key}"><span>${label}</span><div class="subject-chart-track"><i style="width:${valueFor(key)}%"></i></div><b>${valueFor(key)}%</b></div>`).join('')}</section>
        </section>
        <section class="subject-chapter-summary"><header><div><h3>Chapter progress</h3><p>Learning, revision and expert confidence by chapter</p></div><span>${lessons.length} chapters</span></header>
          <div class="chapter-summary-legend"><span>Chapter</span><span>Learning</span><span>Revision</span><span>Expert</span><span aria-label="Notes"></span></div>
          <div class="chapter-summary-list">${lessons.map((lesson,index)=>`<article class="chapter-summary-row"><span class="chapter-summary-name"><i>${String(index+1).padStart(2,'0')}</i><b title="${e(lesson.title)}">${e(lesson.title)}</b></span>${levels.map(([key,label])=>`<span class="chapter-summary-level level-${key}" title="${label}: ${stats.values[index][key]}%"><i><b style="width:${stats.values[index][key]}%"></b></i><small>${stats.values[index][key]}%</small></span>`).join('')}<button type="button" class="dashboard-note-action" data-chapter-notes="${e(lesson.id)}" aria-label="My Notes for ${e(lesson.title)}"><i data-lucide="notebook-pen"></i></button></article>`).join('')}</div>
        </section>
      </div>
    </section>`;
  }
  function curriculum(context,lessons,learner,report,trackControl='') {
    return `${learner}<section class="progress-workbench"><header class="progress-workbench-heading"><div><span class="section-kicker">YOUR LEARNING JOURNEY</span><h2>Chapter progress</h2><p>Choose each chapter’s proficiency level, then drag its percentage in 10% steps.</p></div><div class="study-dashboard-header-actions">${trackControl}<span class="progress-save-status" role="status">Changes save automatically</span></div></header><section class="progress-slider-list" aria-label="Chapter progress tracking"><div class="progress-grid-heading" aria-hidden="true"><span>Chapter</span><span>Proficiency</span><span>Progress</span><span>My Notes</span></div>${lessons.map((lesson,index)=>{
      const requested=D.state.settings.chapterProgressLevel?.[context.activeId]?.[lesson.id],selected=levels.some(([key])=>key===requested)?requested:'learning',values=percentages(context,lesson),value=values[selected],label=levels.find(([key])=>key===selected)[1],tracking=HM.views.chapterTracking(context,lesson);
      return `<article class="progress-slider-row"><div class="progress-slider-title"><span>${String(index+1).padStart(2,'0')}</span><b>${e(lesson.title)}</b></div><div class="chapter-level-picker" role="group" aria-label="${e(lesson.title)} proficiency">${levels.map(([key,name])=>`<button type="button" data-progress-level="${key}" data-level-lesson="${e(lesson.id)}" aria-pressed="${key===selected}" class="${key===selected?'selected':''}">${name}</button>`).join('')}</div><div class="progress-slider-main"><div class="progress-range-wrap"><input type="range" min="0" max="100" step="10" value="${value}" data-study-level="${selected}" data-lesson="${e(lesson.id)}" aria-label="${e(lesson.title)} ${label} progress" aria-valuetext="${value}%" style="--progress:${value}%;--slider-color:${proficiencyColors[selected]}"></div><output class="progress-range-value">${value}<small>%</small></output></div><button type="button" class="chapter-notes-action" data-chapter-notes="${e(lesson.id)}" aria-label="My Notes for ${e(lesson.title)}"><i data-lucide="notebook-pen"></i><span>My Notes</span></button></article>`;
    }).join('')}</section></section><details class="panel study-history"><summary>Assessments, attendance & earlier reports</summary>${report}</details>`;
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
        save(id,{levels:{...saved.levels,[key]:value}},undefined,false);
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
    const level=event.target.closest('[data-progress-level]');
    if(level && levels.some(([key])=>key===level.dataset.progressLevel)) {
      const id=level.dataset.levelLesson,student=D.state.settings.activeLearnerId;
      D.state.settings.chapterProgressLevel ||= {};D.state.settings.chapterProgressLevel[student] ||= {};
      D.state.settings.chapterProgressLevel[student][id]=level.dataset.progressLevel;
      D.save();window.dispatchEvent(new CustomEvent('hm-study-progress'));
      document.querySelector(`[data-level-lesson="${id}"][data-progress-level="${level.dataset.progressLevel}"]`)?.focus();return;
    }
    const button=event.target.closest('[data-study-today]');
    if (button) save(button.dataset.studyToday,{}, {studied:true});
  });
  document.addEventListener('input',event=>{
    const slider=event.target;
    if(!slider.matches('input[type="range"][data-study-level]'))return;
    slider.style.setProperty('--progress',slider.value+'%');
    slider.setAttribute('aria-valuetext',slider.value+'%');
    slider.closest('.progress-slider-main').querySelector('output').innerHTML=`${Number(slider.value)}<small>%</small>`;
    document.querySelector('.progress-save-status').textContent='Release to save';
  });
  document.addEventListener('submit',event=>{
    const form=event.target.closest('[data-study-checkin]');if(!form)return;event.preventDefault();
    const fields=new FormData(form),raw=String(fields.get('minutes')||'');
    const minutes=raw===''?null:Number(raw);if(minutes!==null && (!Number.isInteger(minutes)||minutes<0||minutes>600))return;
    save(form.dataset.studyCheckin,{nextStep:String(fields.get('nextStep')||'').trim().slice(0,240)},{minutes,confidence:String(fields.get('confidence')||'')});
  });
  HM.studyProgress={curriculum,panel,record,dateKey,overview,summary};
})();
