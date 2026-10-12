(function () {
  'use strict';

  const D = HM.data;
  const V = HM.views;

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Learner Switcher Helper
  HM.switchLearner = function (studentId) {
    if (!studentId) return;
    D.state.settings.activeLearnerId = studentId;
    if (HM.persona && typeof HM.persona.set === 'function') {
      HM.persona.set(studentId);
    }
    D.save();
    const currentRoute = location.hash.replace(/^#\/?/, '');
    if (currentRoute === 'study/jee' && studentId === 'p4') {
      if (typeof HM.go === 'function') HM.go('study/curriculum');
      else location.hash = '#/study/curriculum';
    } else if (typeof HM.render === 'function') {
      HM.render();
    } else {
      location.reload();
    }
  };

  // Subject Filter Helper
  HM.setEducationSubject = function (subject) {
    const activeId = D.state.settings.activeLearnerId || 'p3';
    D.state.settings.activeLearningSubject ||= {};
    D.state.settings.activeLearningSubject[activeId] = subject;
    D.state.settings.educationExpandedSubject = { studentId: activeId, subject };
    D.save();
    if (typeof HM.render === 'function') {
      HM.render();
    } else if (typeof render === 'function') {
      render();
    } else {
      location.reload();
    }
  };

  // Education Dual-Sync Search Filter
  HM.handleEducationSearch = function (q) {
    const val = (q || '').trim().toLowerCase();
    const inPageSearch = document.querySelector('input[data-filter]');
    if (inPageSearch && inPageSearch.value !== (q || '')) {
      inPageSearch.value = q || '';
      inPageSearch.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Filter table rows if present
    document.querySelectorAll('[data-filter-row]').forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = (!val || text.includes(val)) ? '' : 'none';
    });

    // Filter book cards if present
    document.querySelectorAll('[data-book-card]').forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = (!val || text.includes(val)) ? '' : 'none';
    });

    // Filter student subject cards if present
    document.querySelectorAll('.student-subject-row').forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = (!val || text.includes(val)) ? '' : 'none';
    });
  };

  // Persistent Education Top Bar Renderer
  function updateEducationTopBar(routeParam) {
    const topBarSlot = document.getElementById('educationTopBar');
    if (!topBarSlot) return;

    const route = routeParam || (typeof location !== 'undefined' ? location.hash.replace(/^#\/?/, '') : '');
    const cleanRoute = (route || '').replace(/^#\/?/, '');

    // Activate only on Education routes (not Board Sprints or outside study)
    if (!cleanRoute.startsWith('study/') || cleanRoute.startsWith('study/board-sprints')) {
      topBarSlot.hidden = true;
      topBarSlot.innerHTML = '';
      return;
    }

    const c = V.academicContext();
    const activeId = c.activeId || 'p3';
    const profile = c.profile;
    const selectedSubject = c.selectedSubject || 'All subjects';

    // Calculate real-time Education KPIs
    const syllabus = (D.state.syllabusItems || []).filter(item => item.studentId === activeId);
    const overallMastery = syllabus.length ? Math.round(syllabus.reduce((sum, item) => sum + (+item.mastery || 0), 0) / syllabus.length) : 0;

    const deliverables = (D.state.academicDeliverables || []).filter(item => item.studentId === activeId && !['done', 'submitted'].includes(item.status));
    const dueCount = deliverables.length;

    const assessments = (D.state.academicAssessments || []).filter(item => item.studentId === activeId && item.status !== 'scheduled');
    const assessmentAvg = assessments.length
      ? Math.round(assessments.reduce((sum, item) => sum + (((+item.score || 0) + (+item.practicalScore || 0)) / Math.max(1, (+item.maxScore || 0) + (+item.practicalMax || 0)) * 100), 0) / assessments.length)
      : 0;

    const practice = (D.state.practiceLogs || []).filter(item => item.studentId === activeId);
    const attempts = practice.reduce((sum, item) => sum + (+item.attempted || 0), 0);
    const practiceAcc = attempts ? Math.round(practice.reduce((sum, item) => sum + (+item.correct || 0), 0) / attempts * 100) : 0;

    const activeEl = document.activeElement;
    const isSearchFocused = activeEl && activeEl.id === 'topbarEducationSearchInput';
    const cursorPos = isSearchFocused ? activeEl.selectionStart : null;

    topBarSlot.hidden = false;
    topBarSlot.innerHTML = `
      <div class="topbar-filter-group education-topbar-filters">
        <!-- Learner Switcher Pills -->
        <div class="topbar-subject-pills topbar-student-pills">
          <button type="button" class="topbar-pill ${activeId === 'p3' ? 'active' : ''}" onclick="HM.switchLearner('p3')" title="Switch to Sasha · Class 12">
            <i data-lucide="graduation-cap"></i>
            <span>Sasha (12)</span>
          </button>
          <button type="button" class="topbar-pill ${activeId === 'p4' ? 'active' : ''}" onclick="HM.switchLearner('p4')" title="Switch to Ishaan · Class 7">
            <i data-lucide="graduation-cap"></i>
            <span>Ishaan (7)</span>
          </button>
        </div>

        <!-- Live Academic KPIs -->
        <div class="topbar-kpis-wrap">
          <span class="topbar-kpi-pill kpi-score" id="eduKpiMastery" title="Overall Syllabus Mastery">
            <i data-lucide="gauge"></i>
            <span><strong>${overallMastery}%</strong> Mastery</span>
          </span>
          <span class="topbar-kpi-pill kpi-model" id="eduKpiDue" title="Assignments & Deliverables Due">
            <i data-lucide="clipboard-check"></i>
            <span><strong>${dueCount}</strong> Due</span>
          </span>
          <span class="topbar-kpi-pill kpi-pb2" id="eduKpiAssessments" title="Assessment Average Score">
            <i data-lucide="file-chart-column"></i>
            <span><strong>${assessments.length ? assessmentAvg + '%' : '—'}</strong> Avg</span>
          </span>
          <span class="topbar-kpi-pill kpi-green" id="eduKpiPractice" title="Practice Accuracy across ${attempts} Qs">
            <i data-lucide="brain-circuit"></i>
            <span><strong>${attempts ? practiceAcc + '%' : '—'}</strong> Acc</span>
          </span>
        </div>

        <!-- Dual-Sync Search -->
        <div class="topbar-search-wrap">
          <i data-lucide="search" class="topbar-search-icon"></i>
          <input type="text" id="topbarEducationSearchInput" class="topbar-search-input" placeholder="Search chapters & work..." oninput="HM.handleEducationSearch(this.value)">
        </div>

        <!-- Subject Filter Pills -->
        <div class="topbar-subject-pills edu-topbar-subjects">
          <button type="button" class="topbar-pill ${selectedSubject === 'All subjects' ? 'active' : ''}" onclick="HM.setEducationSubject('All subjects')">
            <span>All</span>
          </button>
          ${profile.subjects.map(s => {
            const short = s === 'Mathematics' ? 'Maths' : (s === 'Computer Science' ? 'CS' : (s === 'English Core' ? 'English' : (s === 'Social Science' ? 'Social' : s)));
            return `
              <button type="button" class="topbar-pill ${selectedSubject === s ? 'active' : ''}" onclick="HM.setEducationSubject('${escapeHtml(s)}')">
                <span>${escapeHtml(short)}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Sprints Quick Link (Class 12 / Sasha) -->
        ${(+profile.grade === 12 || activeId === 'p3') ? `
          <button type="button" class="topbar-pill topbar-shortcut edu-sprint-shortcut" onclick="location.hash='#/study/board-sprints'" title="Open 75-Day Exam Sprints">
            <i data-lucide="flame"></i>
            <span>The Board Sprints</span>
          </button>
        ` : ''}
      </div>
    `;

    if (isSearchFocused) {
      const newSearchInput = document.getElementById('topbarEducationSearchInput');
      if (newSearchInput) {
        newSearchInput.focus();
        newSearchInput.selectionStart = newSearchInput.selectionEnd = cursorPos;
      }
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  HM.updateEducationTopBar = updateEducationTopBar;

})();
