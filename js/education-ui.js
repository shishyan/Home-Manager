(function(){
'use strict';
const D=HM.data,V=HM.views,e=D.esc,icon=name=>`<i data-lucide="${name}"></i>`;
const original=V.chapterWorkspace;
const labels={summary:'Study Guide',understand:'Genius Mind',resource:'Formulae / Key ideas',book:'Read Book',practice:'Practice & Tests',assignments:'Assignments'};
const context=()=>{const c=V.academicContext();return {c,lessons:V.curriculumLessons(c,+c.profile.grade===12&&D.state.settings.activeLearningTrack?.[c.activeId]==='jee')};};
function noteButton(id){return `<button type="button" class="chapter-notes-action" data-chapter-notes="${e(id)}">${icon('notebook-pen')}<span>My Notes</span></button>`;}
V.chapterWorkspace=function(id,section='summary'){
 const html=original(id,section),lesson=V.lessonById(id);if(!lesson)return html;
 const {c,lessons}=context(),template=document.createElement('template');template.innerHTML=html;
 const main=template.content.querySelector('.chapter-workspace-content');if(!main)return html;
 let body=main.innerHTML;
 if(section==='summary'){
  const sections=[...main.querySelector('.chapter-summary-layout')?.firstElementChild?.children||[]];
  const cards=sections.filter(node=>node.matches('section,header.chapter-summary-opening')).map((node,index)=>{const title=node.querySelector('h2')?.textContent||node.querySelector('h1')?.textContent||`Learning section ${index+1}`;const copy=node.cloneNode(true);copy.querySelector('h2')?.remove();copy.querySelectorAll('.chapter-lesson-number,.chapter-lesson-heading small').forEach(item=>item.remove());return `<details class="guide-card" ${index===0?'open':''}><summary><span class="guide-step">${String(index+1).padStart(2,'0')}</span>${icon(['lightbulb','languages','sparkles','workflow','network','sigma','pencil-ruler','route','shield-alert','badge-check','brain'][index%11])}<b>${e(title)}</b>${icon('chevron-down')}</summary><div class="guide-card-content">${copy.outerHTML}</div></details>`;}).join('');
  const notes=HM.genius.teacherNotes(lesson);
  body=`<div class="guide-layout"><aside class="guide-chapters"><h3>${icon('list-tree')} Chapters</h3>${lessons.map((item,index)=>`<div class="guide-chapter-row ${item.id===id?'selected':''}"><button type="button" data-chapter-switch="${e(item.id)}"><span>${index+1}</span><b>${e(item.title)}</b></button><button type="button" data-chapter-notes="${e(item.id)}" aria-label="My Notes for ${e(item.title)}">${icon('notebook-pen')}</button></div>`).join('')}</aside><section class="guide-reading"><header class="guide-hero"><span class="guide-hero-icon">${icon('graduation-cap')}</span><div><small>YOUR CHAPTER COMPANION</small><h1>${e(lesson.title)}</h1><p>${e(notes.bigIdea)}</p></div></header><div class="guide-roadmap"><span>${icon('compass')} Understand</span><span>${icon('pencil-ruler')} Apply</span><span>${icon('brain')} Recall</span></div>${cards||body}</section></div>`;
 }
 if(section==='book'){
  const frame=main.querySelector('iframe');if(frame){const src=frame.getAttribute('src').split('#')[0];body=`<iframe class="education-pdf" title="${e(lesson.title)} PDF reader" src="pdf-reader.html?file=${encodeURIComponent(src)}&page=${lesson.partPage||1}"></iframe>`;}
 }
 return `<div class="chapter-workspace-shell education-workspace"><header class="education-workspace-toolbar"><div class="chapter-selector"><label for="educationChapterSelect">${icon('book-open')} ${e(labels[section]||'Study')}</label><select id="educationChapterSelect" data-education-chapter-select>${lessons.map(item=>`<option value="${e(item.id)}" ${item.id===id?'selected':''}>${e(item.title)}</option>`).join('')}</select></div>${noteButton(id)}</header><main class="chapter-workspace-content chapter-section-${e(section)}">${body}</main></div>`;
};
const drawer=document.createElement('dialog');drawer.id='chapterNotesDrawer';drawer.className='education-notes-drawer';drawer.setAttribute('aria-labelledby','chapterNotesTitle');document.body.append(drawer);
let currentNote=null,returnFocus=null;
function openNotes(id){const lesson=V.lessonById(id);if(!lesson)return;returnFocus=document.activeElement;currentNote={id,student:D.state.settings.activeLearnerId};const text=D.state.settings.geniusNotes?.[currentNote.student]?.[id]||'',cards=D.state.settings.chapterSectionNotes?.[currentNote.student]?.[id]||[];
 drawer.innerHTML=`<header><span class="notes-icon">${icon('notebook-pen')}</span><div><small>MY NOTES</small><h2 id="chapterNotesTitle">${e(lesson.title)}</h2><p>${e(lesson.subject)} · Private to this student</p></div><button type="button" data-close-notes aria-label="Close My Notes">${icon('x')}</button></header><div class="notes-drawer-body"><label for="chapterNoteText">What do you want to remember?</label><textarea id="chapterNoteText" placeholder="An idea, a formula, a question, or a mistake to avoid…">${e(text)}</textarea><p class="notes-save-status" role="status">Changes save automatically on this device.</p>${cards.length?`<h3>Notes beside your lessons</h3>${cards.map(card=>`<article class="notes-section-card"><small>${e(card.sectionLabel||'Chapter note')}</small><p>${e(card.text)}</p></article>`).join('')}`:'<div class="notes-prompt"><span>'+icon('lightbulb')+'</span><p>Explain one idea in your own words. Your future self will thank you.</p></div>'}</div><footer><button type="button" class="primary" data-close-notes>${icon('check')} Done</button></footer>`;
 drawer.showModal();window.lucide?.createIcons({attrs:{'aria-hidden':'true'}});setTimeout(()=>drawer.querySelector('textarea').focus(),100);
}
drawer.addEventListener('input',event=>{if(event.target.id!=='chapterNoteText'||!currentNote)return;D.state.settings.geniusNotes ||= {};D.state.settings.geniusNotes[currentNote.student] ||= {};D.state.settings.geniusNotes[currentNote.student][currentNote.id]=event.target.value;D.save();drawer.querySelector('.notes-save-status').textContent='Saved';});
drawer.addEventListener('click',event=>{if(event.target.closest('[data-close-notes]')||event.target===drawer)drawer.close();});drawer.addEventListener('close',()=>{returnFocus?.isConnected&&returnFocus.focus();currentNote=null;});
document.addEventListener('click',event=>{const button=event.target.closest('[data-chapter-notes]');if(button){event.preventDefault();openNotes(button.dataset.chapterNotes);}});
document.addEventListener('change',event=>{if(!event.target.matches('[data-education-chapter-select]'))return;const button=document.createElement('button');button.dataset.chapterSwitch=event.target.value;document.body.append(button);button.click();button.remove();});
const media=matchMedia('(min-width:901px)');function movePersona(){const crumb=document.querySelector('.persona-crumb'),target=media.matches?document.querySelector('.header-actions'):document.querySelector('#sidebar');if(!crumb||!target)return;media.matches?target.append(crumb):target.insertBefore(crumb,document.querySelector('#workspaceMenuLabel'));}media.addEventListener('change',movePersona);movePersona();
HM.educationUI={openNotes};
})();

document.querySelector('#chapterNotesDrawer').addEventListener('keydown',event=>{if(event.key==='Escape')event.stopPropagation();});
