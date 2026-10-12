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

    // Verify MCQ containers are rendered
    const mcqContainers = page.locator('.q-mcq-container');
    const mcqCount = await mcqContainers.count();
    expect(mcqCount).toBeGreaterThan(100);

    // Test interactive option selection on first MCQ
    const firstMcq = mcqContainers.first();
    const firstOpt = firstMcq.locator('.mcq-option-btn').first();
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
});
