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

    // Verify Header
    const title = page.locator('.zen-title');
    await expect(title).toContainText('10-Year Master Question Bank');

    // Verify Question Cards count is >= 500 (507 total)
    const questionCards = page.locator('.board-question-card');
    const qCount = await questionCards.count();
    expect(qCount).toBeGreaterThanOrEqual(500);

    // Verify caution and topper boxes
    const cautionBoxes = page.locator('.zen-caution-box');
    const topperBoxes = page.locator('.zen-topper-box');
    expect(await cautionBoxes.count()).toBeGreaterThan(0);
    expect(await topperBoxes.count()).toBeGreaterThan(0);

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

    // Test Subject Filter Pill (e.g. Computer Science)
    const csPill = page.locator('.zen-books-navbar button:has-text("Computer Science")');
    if (await csPill.count() > 0) {
      await csPill.click();
      await page.waitForTimeout(500);
      const csQuestions = page.locator('.board-question-card');
      const csCount = await csQuestions.count();
      expect(csCount).toBeGreaterThan(0);
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

  test('Main app uses #fafafa content background and does not show Exam Sprints menu', async ({ page }) => {
    await page.goto('http://localhost:8765/#/global/overview', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Verify #content background color is #fafafa (rgb(250, 250, 250))
    const contentBg = await page.evaluate(() => getComputedStyle(document.getElementById('content')).backgroundColor);
    expect(contentBg).toBe('rgb(250, 250, 250)');

    // Verify main app topbar tabs do not have boardSprints or examSprint
    const sprintTab = page.locator('#personaTabs .group-tab[data-group="boardSprints"], #personaTabs .group-tab[data-group="examSprint"]');
    await expect(sprintTab).toHaveCount(0);

    // Verify mobile bottom nav does not have boardSprints or examSprint
    const sprintBottom = page.locator('#bottomNav button[data-group="boardSprints"], #bottomNav button[data-group="examSprint"]');
    await expect(sprintBottom).toHaveCount(0);
  });
});
