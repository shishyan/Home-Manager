const { test, expect } = require('@playwright/test');

test.describe('Board Sprints - Master Overview, Dedicated RAG Audit & Master Question Bank', () => {
  test('Master Overview displays 75-day architecture, weekly allocation rationale, and RAG gateway', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify Master Hero
    const heroTitle = page.locator('.master-title');
    await expect(heroTitle).toContainText('Exam Sprint Master Plan');

    // Verify Countdowns & Stats Shelf
    const statCards = page.locator('.master-stat-card');
    await expect(statCards).toHaveCount(4);

    // Verify Concept Section & Bestseller System
    const conceptHeader = page.locator('.concept-header h2');
    await expect(conceptHeader).toContainText('Sprint Architecture');

    const bestsellerHeader = page.locator('.bestseller-system-section .system-header h2');
    await expect(bestsellerHeader).toContainText('The Amazon #1 Bestseller Prep System');

    // Verify 4-Level 75-Day Framework
    const levelCards = page.locator('.level-card');
    await expect(levelCards).toHaveCount(4);

    // Verify R-A-G Audit Gateway Hero Card & Buttons
    const ragGateway = page.locator('#ragGatewayCard');
    await expect(ragGateway).toBeVisible();

    const openRagBtn = page.locator('.btn-gateway-rag');
    await expect(openRagBtn).toBeVisible();
    await expect(openRagBtn).toContainText('Open High-Density R-A-G Audit Tracker');

    // Verify 75-Day Pedagogical Rationale Section
    const rationaleSec = page.locator('#sprintRationale');
    await expect(rationaleSec).toBeVisible();
    const rationaleCards = page.locator('.rationale-card');
    await expect(rationaleCards).toHaveCount(4);

    // Verify Subject Weightage Matrix
    const subjectCards = page.locator('.subject-card');
    await expect(subjectCards).toHaveCount(5);

    // Verify 75-Day 11-Week Roadmap
    const roadmapCards = page.locator('.roadmap-card');
    await expect(roadmapCards).toHaveCount(11);

    // Take screenshot of master dashboard
    await page.screenshot({ path: 'master-board-sprint-overview.png' });
  });

  test('Dedicated R-A-G Chapter Audit Tracker displays 47 chapters in high-density list with real-time toggles', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/rag', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify Title
    const title = page.locator('.zen-title');
    await expect(title).toContainText('R-A-G Chapter Audit Tracker');

    // Verify KPI shelf
    const redCount = page.locator('#ragRedCount');
    const amberCount = page.locator('#ragAmberCount');
    const greenCount = page.locator('#ragGreenCount');
    await expect(redCount).toBeVisible();
    await expect(amberCount).toBeVisible();
    await expect(greenCount).toBeVisible();

    // Verify High-Density Rows (all 47 chapters)
    const ragRows = page.locator('.rag-chapter-card');
    await expect(ragRows).toHaveCount(47);

    // Test real-time interactive toggle
    const firstRed = page.locator('.rag-chapter-card[data-current-rag="red"]').first();
    if (await firstRed.count() > 0) {
      const chName = await firstRed.getAttribute('data-rag-chapter');
      await firstRed.locator('.rag-t-green').click();
      await page.waitForTimeout(300);
      const updated = page.locator(`.rag-chapter-card[data-rag-chapter="${chName}"]`);
      await expect(updated).toHaveAttribute('data-current-rag', 'green');
    }

    // Test subject filter pill
    const physFilter = page.locator('#ragSubjFilter button[data-val="Physics"]');
    await physFilter.click();
    await page.waitForTimeout(200);
    const visibleCards = page.locator('.rag-chapter-card:visible');
    await expect(visibleCards).toHaveCount(12);

    // Reset to all
    const allFilter = page.locator('#ragSubjFilter button[data-val="all"]');
    await allFilter.click();
    await page.waitForTimeout(200);
    await expect(page.locator('.rag-chapter-card:visible')).toHaveCount(47);

    // Take screenshot of dedicated RAG page
    await page.screenshot({ path: 'rag-audit-tracker-list.png' });
  });

  test('Master 10-Year Question Bank displays 500+ questions with interactive 1M MCQs and student tracking', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/questions', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify 2-Row Header
    const header = page.locator('.qb-2row-header');
    await expect(header).toBeVisible();

    const title = page.locator('.qb-compact-title');
    await expect(title).toContainText('Question Bank');

    // Verify Question Stem has distinct attention shade (#f1f5f9)
    const stemBg = await page.evaluate(() => {
      const stem = document.querySelector('.q-card-stem');
      return stem ? window.getComputedStyle(stem).backgroundColor : null;
    });
    expect(stemBg).toBe('rgb(241, 245, 249)');

    // Verify Answer has green/teal shade with 2px dashed border
    const answerStyle = await page.evaluate(() => {
      const ans = document.querySelector('.q-answer-green-shade');
      if (!ans) return null;
      const cs = window.getComputedStyle(ans);
      return { bg: cs.backgroundColor, borderStyle: cs.borderTopStyle, borderWidth: cs.borderTopWidth };
    });
    expect(answerStyle.bg).toBe('rgb(240, 253, 250)');
    expect(answerStyle.borderStyle).toBe('dashed');
    expect(parseFloat(answerStyle.borderWidth)).toBeGreaterThanOrEqual(1.8);
    expect(parseFloat(answerStyle.borderWidth)).toBeLessThanOrEqual(2.2);

    // Verify repeated title "CBSE Model Answer & Marking Scheme" is removed to save space
    const repeatedSummary = page.locator('.q-accordion-summary');
    await expect(repeatedSummary).toHaveCount(0);

    // Verify Model Answer prose is SHADELESS (transparent / rgba(0, 0, 0, 0))
    const modelAnswerBg = await page.evaluate(() => {
      const prose = document.querySelector('.model-answer-prose');
      return prose ? window.getComputedStyle(prose).backgroundColor : null;
    });
    expect(modelAnswerBg).toBe('rgba(0, 0, 0, 0)');

    // Verify Tips, step marking, links, and appeared on are placed below answer and shadeless
    const contentBg = await page.evaluate(() => {
      const cont = document.querySelector('.q-accordion-content');
      return cont ? window.getComputedStyle(cont).backgroundColor : null;
    });
    expect(contentBg).toBe('rgb(255, 255, 255)');

    // Verify Appeared on and Links are rendered in shadeless footer meta below answer
    const footerMeta = page.locator('.shadeless-footer-meta');
    await expect(footerMeta.first()).toBeVisible();
    await expect(footerMeta.first()).toContainText('Appeared on:');

    // Verify Question Cards count is >= 500 (501 total)
    const questionCards = page.locator('.board-question-card');
    const qCount = await questionCards.count();
    expect(qCount).toBeGreaterThanOrEqual(500);

    // Verify hints, tips, and step marking are grouped into bullet points with bold header
    const insightsList = page.locator('.q-insights-list');
    await expect(insightsList.first()).toBeVisible();
    const insightItems = insightsList.first().locator('li');
    expect(await insightItems.count()).toBeGreaterThan(0);
    await expect(insightItems.first().locator('strong')).toBeVisible();

    // Test 1M (MCQ / A-R) Marks Filter
    const mcqPill = page.locator('.zen-mark-btn[data-marks-filter="1"]').first();
    await expect(mcqPill).toBeVisible();
    await mcqPill.click();
    await page.waitForTimeout(500);

    // Verify MCQ containers are rendered inside the question shade (.q-card-stem) as a simple list
    const mcqContainers = page.locator('.q-card-stem .q-mcq-container');
    const mcqCount = await mcqContainers.count();
    expect(mcqCount).toBeGreaterThan(100);

    const firstMcq = mcqContainers.first();
    const optionsList = firstMcq.locator('ul.mcq-options-list');
    await expect(optionsList).toBeVisible();

    // Test interactive option selection on first MCQ
    const firstOpt = firstMcq.locator('.mcq-option-btn').first();
    const optBoxShadow = await firstOpt.evaluate(el => window.getComputedStyle(el).boxShadow);
    expect(optBoxShadow).toBe('none');

    await firstOpt.click();
    await page.waitForTimeout(300);

    // Verify option is selected and feedback banner is shown
    await expect(firstOpt).toHaveClass(/is-selected/);
    const feedbackBanner = firstMcq.locator('.mcq-feedback-banner');
    await expect(feedbackBanner).toBeVisible();

    // Verify answer saved in localStorage
    const savedAnswers = await page.evaluate(() => localStorage.getItem('hm_board_sprints_mcq_answers'));
    expect(savedAnswers).not.toBeNull();

    // Test Subject Filter Pill (e.g. Physics)
    const physPill = page.locator('.zen-books-navbar button:has-text("Physics")');
    if (await physPill.count() > 0) {
      await physPill.click();
      await page.waitForTimeout(500);
      const physQuestions = page.locator('.board-question-card');
      const physCount = await physQuestions.count();
      expect(physCount).toBeGreaterThan(0);
    }

    // Take screenshot of Master Question Bank
    await page.screenshot({ path: 'master-question-bank.png' });
  });

  test('Weekly Page (Week 1) has All Subjects pill and focused question deck', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify strategy dashboard banner is NOT rendered on weekly page
    const strategyDashboards = page.locator('.zen-strategy-dashboard');
    await expect(strategyDashboards).toHaveCount(0);

    // Verify All Subjects pill is present and active
    const allSubjectsPill = page.locator('.zen-book-pill:has-text("All Subjects")');
    await expect(allSubjectsPill).toBeVisible();

    // Verify questions are rendered across week 1
    const questionCards = page.locator('.board-question-card');
    const qCount = await questionCards.count();
    expect(qCount).toBeGreaterThan(15);

    // Take screenshot of clean weekly deck
    await page.screenshot({ path: 'week-1-all-subjects.png' });
  });

  test('Main app uses #fafafa background across body and content, shows The Board Sprints menu, and hides obsolete Exam Sprints', async ({ page }) => {
    await page.goto('http://localhost:8765/#/global/overview', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify body, app-shell, and #content background color are #fafafa (rgb(250, 250, 250))
    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyBg).toBe('rgb(250, 250, 250)');

    const contentBg = await page.evaluate(() => getComputedStyle(document.getElementById('content')).backgroundColor);
    expect(contentBg).toBe('rgb(250, 250, 250)');

    // Verify main app topbar tabs have boardSprints ("The Board Sprints")
    const boardSprintTab = page.locator('#personaTabs .group-tab[data-group="boardSprints"]');
    await expect(boardSprintTab).toBeVisible();
    await expect(boardSprintTab).toContainText('The Board Sprints');

    // Verify obsolete examSprint is NOT present anywhere
    const examSprintTab = page.locator('#personaTabs .group-tab[data-group="examSprint"]');
    await expect(examSprintTab).toHaveCount(0);

    // Verify clicking The Board Sprints tab navigates to study/board-sprints
    await boardSprintTab.click();
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#/study/board-sprints');

    // Verify returning to Home works smoothly
    const homeTab = page.locator('#personaTabs .group-tab[data-group="household"]');
    await homeTab.click();
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#/global/overview');
  });

  test('Board Sprints is the default landing page until March 2027 and has 10% wider sidebar (278px)', async ({ page }) => {
    // 1. Visit bare root URL without hash
    await page.goto('http://localhost:8765/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify default landing page is study/board-sprints
    expect(page.url()).toContain('#/study/board-sprints');

    // Verify sidebar width under board sprints is 278px (+10% from 252px)
    const sprintSidebarWidth = await page.evaluate(() => {
      const sb = document.querySelector('#sidebar');
      return window.getComputedStyle(sb).width;
    });
    expect(sprintSidebarWidth).toBe('278px');

    // Verify Brand is "Divine Nest" and height matches topbar exactly at 62px (+10%)
    const headerAlignment = await page.evaluate(() => {
      const brand = document.querySelector('#sidebar .brand');
      const header = document.querySelector('.app-header');
      const bRect = brand.getBoundingClientRect();
      const hRect = header.getBoundingClientRect();
      return {
        brandText: brand.querySelector('b') ? brand.querySelector('b').textContent : null,
        brandHeight: Math.round(bRect.height),
        headerHeight: Math.round(hRect.height),
        brandBottom: Math.round(bRect.bottom),
        headerBottom: Math.round(hRect.bottom),
        headerRight: Math.round(hRect.right),
        windowWidth: window.innerWidth,
        hasShadow: window.getComputedStyle(header).boxShadow.includes('rgba(15, 23, 42, 0.08)')
      };
    });
    expect(headerAlignment.brandText).toBe('Divine Nest');
    expect(headerAlignment.brandHeight).toBe(62);
    expect(headerAlignment.headerHeight).toBe(62);
    expect(headerAlignment.brandBottom).toBe(62);
    expect(headerAlignment.headerBottom).toBe(62);
    expect(headerAlignment.headerRight).toBe(headerAlignment.windowWidth);
    expect(headerAlignment.hasShadow).toBe(true);

    // 2. Navigate to Home
    const homeTab = page.locator('#personaTabs .group-tab[data-group="household"]');
    await homeTab.click();
    await page.waitForTimeout(500);
    expect(page.url()).toContain('#/global/overview');

    // Verify sidebar width returns to default 252px under Home
    const homeSidebarWidth = await page.evaluate(() => {
      const sb = document.querySelector('#sidebar');
      return window.getComputedStyle(sb).width;
    });
    expect(homeSidebarWidth).toBe('252px');
  });

  test('Audio feature reads out questions manually and supports auto-read on scroll mode', async ({ page }) => {
    test.setTimeout(60000);
    // 1. Visit Question Bank
    await page.goto('http://localhost:8765/#/study/board-sprints/questions', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify Auto-Read toggle button is present in the toolbar
    const autoReadBtn = page.locator('#btnAutoReadToggle');
    await expect(autoReadBtn).toBeVisible();
    await expect(autoReadBtn).toContainText('Auto-Read:');

    // Verify Speed toggle button is present with 70% default
    const speedBtn = page.locator('#btnSpeedToggle');
    await expect(speedBtn).toBeVisible();
    await expect(speedBtn).toContainText('Speed: 70%');

    // Test cycling speed button: 70% -> 85% -> 100% -> 70%
    await speedBtn.click();
    await expect(speedBtn).toContainText('Speed: 85%');
    await speedBtn.click();
    await expect(speedBtn).toContainText('Speed: 100%');
    await speedBtn.click();
    await expect(speedBtn).toContainText('Speed: 70%');

    // Verify Listen buttons exist on all question cards
    const readBtns = page.locator('.btn-read-question');
    const readBtnCount = await readBtns.count();
    expect(readBtnCount).toBeGreaterThan(0);

    const firstCard = page.locator('.board-question-card').first();
    const firstReadBtn = firstCard.locator('.btn-read-question');
    await expect(firstReadBtn).toContainText('Listen');

    // 2. Click manual "Listen" button
    await firstReadBtn.click();
    await page.waitForTimeout(200);

    // Verify card gets is-audio-active and button gets is-reading / Stop text
    await expect(firstCard).toHaveClass(/is-audio-active/);
    await expect(firstReadBtn).toHaveClass(/is-reading/);
    await expect(firstReadBtn).toContainText('Stop');

    // Click again to stop
    await firstReadBtn.click();
    await page.waitForTimeout(200);

    // Verify card is no longer audio-active and button returns to Listen
    await expect(firstCard).not.toHaveClass(/is-audio-active/);
    await expect(firstReadBtn).not.toHaveClass(/is-reading/);
    await expect(firstReadBtn).toContainText('Listen');

    // 3. Test Auto-Read toggle button interaction
    const initialText = await autoReadBtn.textContent();
    const isInitiallyOn = initialText.includes('ON');

    // Toggle Auto-Read state
    await autoReadBtn.click();
    await page.waitForTimeout(200);

    const toggledText = await autoReadBtn.textContent();
    expect(toggledText).toContain(isInitiallyOn ? 'OFF' : 'ON');

    // Verify state in localStorage
    const storedState = await page.evaluate(() => localStorage.getItem('hm_board_sprints_autoread'));
    expect(storedState).toBe(isInitiallyOn ? 'false' : 'true');

    // 4. Verify Weekly Sprint also has Auto-Read toggle and Listen buttons
    await page.goto('http://localhost:8765/#/study/board-sprints/week-1/all', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const sprintAutoReadBtn = page.locator('#btnAutoReadToggleSprint');
    await expect(sprintAutoReadBtn).toBeVisible();

    const sprintReadBtns = page.locator('.btn-read-question');
    expect(await sprintReadBtns.count()).toBeGreaterThan(0);
  });

  test('Voice model prefers US Female, defaults to US Male, and skips duplicate answer text', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/questions?chapter=Solutions', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // 1. Verify Audio voice preference algorithm
    const voiceTestResult = await page.evaluate(() => {
      const mockVoices = [
        { name: 'Microsoft David Desktop - English (United States)', lang: 'en-US' },
        { name: 'Microsoft Zira Desktop - English (United States)', lang: 'en-US' },
        { name: 'Microsoft George - English (United Kingdom)', lang: 'en-GB' }
      ];

      // Test with Zira (US Female) present
      const origSynth = window.HM.AudioReader.synth;
      window.HM.AudioReader.synth = { getVoices: () => mockVoices };
      const chosen1 = window.HM.AudioReader.getPreferredVoice();

      // Test with only US Male present
      window.HM.AudioReader.synth = {
        getVoices: () => [
          { name: 'Microsoft David Desktop - English (United States)', lang: 'en-US' },
          { name: 'Microsoft George - English (United Kingdom)', lang: 'en-GB' }
        ]
      };
      const chosen2 = window.HM.AudioReader.getPreferredVoice();

      // Restore
      window.HM.AudioReader.synth = origSynth;

      return {
        prefersUsFemale: chosen1 ? chosen1.name.includes('Zira') : false,
        defaultsToUsMale: chosen2 ? chosen2.name.includes('David') : false
      };
    });

    expect(voiceTestResult.prefersUsFemale).toBe(true);
    expect(voiceTestResult.defaultsToUsMale).toBe(true);

    // 2. Verify answer deduplication on the van 't Hoff question (from user's screenshot)
    const card = page.locator('.board-question-card:has-text("van \'t Hoff factor")').first();
    await expect(card).toBeVisible();

    // Verify shaded answer box is present and contains the answer
    const shadedAns = card.locator('.q-answer-green-shade .ans-text');
    await expect(shadedAns).toBeVisible();
    await expect(shadedAns).toContainText('256 g');

    // Verify duplicate model-answer-prose was skipped so it is NOT repeated twice
    const dupModelAns = card.locator('.model-answer-prose');
    await expect(dupModelAns).toHaveCount(0);

    // Verify insights (Step Marking & Examiner Tip) remain intact below
    const insightsList = card.locator('.q-insights-list');
    await expect(insightsList).toBeVisible();
    await expect(insightsList).toContainText('Step Marking:');
  });

  test('Top filters and search bar in the persistent topbar remain visible during scroll and filter questions', async ({ page }) => {
    test.setTimeout(60000);
    // 1. Visit Question Bank
    await page.goto('http://localhost:8765/#/study/board-sprints/questions', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify topbar slot exists and is visible
    const topBar = page.locator('#boardSprintsTopBar');
    await expect(topBar).toBeVisible();

    const topbarSearch = topBar.locator('#topbarSprintSearchInput');
    await expect(topbarSearch).toBeVisible();

    // Verify marks buttons in topbar
    const topbar1M = topBar.locator('.zen-mark-btn', { hasText: '1M' });
    await expect(topbar1M).toBeVisible();

    // Scroll down 1000px
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(300);

    // Check that topBar is still at top of screen (<62px from top)
    const topBarBox = await topBar.boundingBox();
    expect(topBarBox).not.toBeNull();
    expect(topBarBox.y).toBeLessThan(62);
    expect(topBarBox.y).toBeGreaterThanOrEqual(0);

    // Filter using topbar: Click 1M in topbar while scrolled down
    await topbar1M.click();
    await page.waitForTimeout(400);

    // Verify all visible question cards are 1M
    const cards = page.locator('.board-question-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    const marksBadges = page.locator('.board-question-card .q-meta-marks');
    const firstBadgeText = await marksBadges.first().textContent();
    expect(firstBadgeText).toContain('1 Marks');

    // Type into topbar search while scrolled down
    await topbarSearch.fill('Gauss');
    await page.waitForTimeout(400);

    const filteredCards = page.locator('.board-question-card');
    const gaussCount = await filteredCards.count();
    expect(gaussCount).toBeGreaterThan(0);

    // Check sync with in-page search input
    const inPageSearchVal = await page.locator('#sprintSearchInput').inputValue();
    expect(inPageSearchVal).toBe('Gauss');

    // Clear search using topbar clear button
    const clearBtn = page.locator('#topbarSprintSearchClear');
    await clearBtn.click();
    await page.waitForTimeout(300);

    // 2. Visit Weekly Page (Week 1)
    await page.goto('http://localhost:8765/#/study/board-sprints/week-1/all', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify topbar slot exists and is visible on weekly page
    await expect(topBar).toBeVisible();
    const weeklyAllSubjectsPill = topBar.locator('.topbar-pill', { hasText: 'All Subjects' });
    await expect(weeklyAllSubjectsPill).toBeVisible();

    // Scroll down 800px on weekly page
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(300);

    const weeklyTopBarBox = await topBar.boundingBox();
    expect(weeklyTopBarBox).not.toBeNull();
    expect(weeklyTopBarBox.y).toBeLessThan(62);

    // 3. Visit Master Plan (Overview) and verify topbar shows Master Plan KPIs
    await page.goto('http://localhost:8765/#/study/board-sprints', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    await expect(topBar).toBeVisible();
    await expect(page.locator('.master-topbar-filters')).toBeVisible();

    // 4. Visit outside page (e.g. global/overview) and verify topbar is hidden
    await page.goto('http://localhost:8765/#/global/overview', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    await expect(topBar).toBeHidden();
  });

  test('Sidebar collapse toggles to 68px showing icons only with clean padding and brand displays Divine Nest', async ({ page }) => {
    // Set legacy Lotus Naga Home in localStorage before loading to verify migration
    await page.addInitScript(() => {
      try {
        const existing = localStorage.getItem('hm_settings');
        let data = existing ? JSON.parse(existing) : {};
        data.householdName = 'Lotus Naga Home';
        localStorage.setItem('hm_settings', JSON.stringify(data));
      } catch(e){}
    });

    await page.goto('http://localhost:8765/#/study/board-sprints/questions', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // 1. Verify brand name migrated to Divine Nest
    const brandName = await page.locator('#brandName').textContent();
    expect(brandName).toBe('Divine Nest');

    // 2. Measure expanded sidebar width (278px)
    const expandedSidebarBox = await page.locator('#sidebar').boundingBox();
    expect(Math.round(expandedSidebarBox.width)).toBe(278);

    // 3. Click collapse button
    const collapseBtn = page.locator('#collapse');
    await collapseBtn.click();
    await page.waitForTimeout(400);

    // 4. Verify collapsed state
    const isCollapsed = await page.evaluate(() => document.body.classList.contains('collapsed'));
    expect(isCollapsed).toBe(true);

    const collapsedSidebarBox = await page.locator('#sidebar').boundingBox();
    expect(Math.round(collapsedSidebarBox.width)).toBe(68);

    const appHeaderBox = await page.locator('.app-header').boundingBox();
    expect(Math.round(appHeaderBox.x)).toBe(68);

    // Verify text labels are hidden and icons are visible
    const brandCopyVisible = await page.locator('.brand div').isVisible();
    expect(brandCopyVisible).toBe(false);

    const workspaceLabelVisible = await page.locator('.workspace-menu-label').isVisible();
    expect(workspaceLabelVisible).toBe(false);

    const navTextVisible = await page.evaluate(() => {
      const span = document.querySelector('#sidebar #nav .nav-parent span:not(.nav-icon)');
      return span ? window.getComputedStyle(span).display !== 'none' : false;
    });
    expect(navTextVisible).toBe(false);

    const iconVisible = await page.locator('#sidebar #nav .nav-icon').first().isVisible();
    expect(iconVisible).toBe(true);

    // 5. Click collapse button again to expand
    await collapseBtn.click();
    await page.waitForTimeout(400);

    const reExpandedSidebarBox = await page.locator('#sidebar').boundingBox();
    expect(Math.round(reExpandedSidebarBox.width)).toBe(278);
  });

  test('RAG Chapter KPIs and Master Plan countdown persistently fill topbar on scroll and Home tab is compact icon-only', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/rag', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // 1. Verify Home tab has house icon and is compact
    const homeTab = page.locator('#personaTabs .group-tab[data-group="household"]');
    await expect(homeTab).toBeVisible();
    await expect(homeTab).toHaveAttribute('title', 'Home');
    const homeIcon = homeTab.locator('svg, i');
    await expect(homeIcon).toBeVisible();
    // Verify visible text is empty (only sr-only for accessibility)
    const homeText = await homeTab.locator('span:not(.sr-only)').count();
    expect(homeText).toBe(0);
    const homeBox = await homeTab.boundingBox();
    expect(homeBox.width).toBeLessThan(55); // compact icon-only tab

    // 2. Verify RAG persistent topbar is visible and populated with KPIs
    const topBar = page.locator('#boardSprintsTopBar');
    await expect(topBar).toBeVisible();

    const topGreen = page.locator('#topbarRagGreen');
    const topAmber = page.locator('#topbarRagAmber');
    const topRed = page.locator('#topbarRagRed');
    const topScore = page.locator('#topbarRagScore');
    await expect(topGreen).toBeVisible();
    await expect(topAmber).toBeVisible();
    await expect(topRed).toBeVisible();
    await expect(topScore).toBeVisible();

    const initialGreenText = await topGreen.textContent();
    expect(initialGreenText).toContain('Green');

    // 3. Scroll down 800px and verify topbar and KPIs remain persistently visible at top: 0
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(300);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(500);

    const topBarBox = await topBar.boundingBox();
    expect(topBarBox.y).toBeLessThan(65); // inside the 62px header at top
    await expect(topGreen).toBeVisible();
    await expect(topRed).toBeVisible();

    // 4. Test RAG dual-sync search from topbar
    const topSearch = page.locator('#topbarRagSearchInput');
    await expect(topSearch).toBeVisible();
    await topSearch.fill('Electrostatic');
    await page.waitForTimeout(300);

    // In-page search input should sync
    const inPageSearchVal = await page.locator('#ragSearchInput').inputValue();
    expect(inPageSearchVal).toBe('Electrostatic');

    // Only Electrostatic row should be visible
    const visibleRows = page.locator('.rag-chapter-card:visible');
    const rowCount = await visibleRows.count();
    expect(rowCount).toBe(1);

    // Clear search
    await topSearch.fill('');
    await page.waitForTimeout(300);

    // 5. Test real-time update of Top Bar RAG KPI when status is changed
    const greenBtn = page.locator('.rag-chapter-card .btn-rag-toggle.rag-t-green').first();
    await greenBtn.click();
    await page.waitForTimeout(300);
    const updatedGreenText = await topGreen.textContent();
    expect(updatedGreenText).toContain('Green');

    // 6. Navigate to 75-Day Master Plan Overview (#/study/board-sprints)
    await page.goto('http://localhost:8765/#/study/board-sprints', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Topbar should have master plan KPIs
    await expect(topBar).toBeVisible();
    const pb2Kpi = page.locator('.master-topbar-filters .kpi-pb2');
    const modelKpi = page.locator('.master-topbar-filters .kpi-model');
    const qbKpi = page.locator('.master-topbar-filters .kpi-qb');
    await expect(pb2Kpi).toBeVisible();
    await expect(modelKpi).toBeVisible();
    await expect(qbKpi).toBeVisible();

    // Scroll down 800px on Master Plan and verify topbar stays persistently visible
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(300);
    const masterTopBarBox = await topBar.boundingBox();
    expect(masterTopBarBox.y).toBeLessThan(65);
    await expect(pb2Kpi).toBeVisible();
  });
});


