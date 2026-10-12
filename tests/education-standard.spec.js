const { test, expect } = require('@playwright/test');

test.describe('Education Standard & Persistent Topbar Verification', () => {
  test('Education navigation is simplified and student dashboard displays persistent topbar with live KPIs', async ({ page }) => {
    await page.goto('http://127.0.0.1:8765/#/study/student-overview', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    // 1. Verify Persistent Education Top Bar is visible
    const eduTopBar = page.locator('#educationTopBar');
    await expect(eduTopBar).toBeVisible();

    // 2. Verify Topbar has learner selector pills, KPIs, search, and subject pills
    const learnerPills = eduTopBar.locator('.topbar-student-pills .topbar-pill');
    await expect(learnerPills).toHaveCount(2);
    await expect(learnerPills.first()).toContainText('Sasha (12)');
    await expect(learnerPills.last()).toContainText('Ishaan (7)');

    // Verify KPI pills
    await expect(eduTopBar.locator('#eduKpiMastery')).toBeVisible();
    await expect(eduTopBar.locator('#eduKpiDue')).toBeVisible();
    await expect(eduTopBar.locator('#eduKpiAssessments')).toBeVisible();
    await expect(eduTopBar.locator('#eduKpiPractice')).toBeVisible();

    // Verify dual-sync search input
    const searchInput = eduTopBar.locator('#topbarEducationSearchInput');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search chapters & work...');

    // Verify Board Sprints shortcut in topbar for Class 12
    const sprintShortcut = eduTopBar.locator('.edu-sprint-shortcut');
    await expect(sprintShortcut).toBeVisible();
    await expect(sprintShortcut).toContainText('The Board Sprints');

    // 3. Verify Sidebar Navigation has elevated learner card and clean direct shortcuts
    const sidebarLearnerCard = page.locator('.edu-learner-card');
    await expect(sidebarLearnerCard).toBeVisible();
    const sidebarPills = sidebarLearnerCard.locator('.edu-learner-pill');
    await expect(sidebarPills).toHaveCount(2);

    const shortcuts = page.locator('.edu-nav-shortcuts');
    await expect(shortcuts).toBeVisible();
    await expect(shortcuts.locator('.education-student-dashboard')).toBeVisible();
    await expect(shortcuts.locator('[data-route="study/board-sprints"]')).toBeVisible();
    await expect(shortcuts.locator('[data-route="study/curriculum"]')).toBeVisible();
    await expect(shortcuts.locator('[data-route="study/planner"]')).toBeVisible();
    await expect(shortcuts.locator('[data-route="study/practice-hub"]')).toBeVisible();

    // 4. Verify Student Dashboard elevated cards
    const hero = page.locator('.student-dashboard-hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('h2')).toContainText("Sasha");

    const metricCards = page.locator('.student-dashboard-metrics .study-dashboard-metric');
    await expect(metricCards).toHaveCount(4);

    // 5. Test Learner Switch in Topbar
    await learnerPills.last().click(); // Click Ishaan (7)
    await page.waitForTimeout(600);

    // Check that dashboard updated to Ishaan
    await expect(page.locator('.student-dashboard-hero h2')).toContainText("Ishaan");
    await expect(page.locator('#personaName')).toContainText('Ishaan');

    // 6. Test Dual-Sync Search
    await searchInput.fill('Mathematics');
    await page.waitForTimeout(300);
    // Rows not matching mathematics should be hidden
    const mathRow = page.locator('.student-subject-row').filter({ hasText: 'Mathematics' });
    await expect(mathRow).toBeVisible();

    // 7. Switch back to Sasha to verify Class 12 sprint shortcut
    await learnerPills.first().click(); // Click Sasha (12)
    await page.waitForTimeout(600);
    await expect(page.locator('.student-dashboard-hero h2')).toContainText("Sasha");

    // 8. Verify Board Sprints route switches topbars
    const activeSprintShortcut = eduTopBar.locator('.edu-sprint-shortcut');
    await expect(activeSprintShortcut).toBeVisible();
    await activeSprintShortcut.click();
    await page.waitForTimeout(800);
    await expect(page).toHaveURL(/study\/board-sprints/);
    await expect(eduTopBar).toBeHidden();
    await expect(page.locator('#boardSprintsTopBar')).toBeVisible();

    await page.screenshot({ path: 'test-results/education-standard-verified.png' });
  });
});
