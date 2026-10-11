const { test, expect } = require('@playwright/test');

test.describe('Board Sprints - Master Overview & Weekly Question Decks', () => {
  test('Master Overview displays full 70-day sprint concept and roadmap', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Verify Master Hero
    const heroTitle = page.locator('.master-title');
    await expect(heroTitle).toHaveText('70-Day Board Sprint Master Plan');

    // Verify Countdowns & Stats Shelf
    const statCards = page.locator('.master-stat-card');
    await expect(statCards).toHaveCount(4);

    // Verify Concept Section & Bestseller System
    const conceptHeader = page.locator('.concept-header h2');
    await expect(conceptHeader).toContainText('The 70-Day Sprint Architecture');

    const bestsellerHeader = page.locator('.system-header h2');
    await expect(bestsellerHeader).toContainText('The Amazon #1 Bestseller Prep System');

    // Verify Subject Weightage Matrix
    const subjectCards = page.locator('.subject-card');
    await expect(subjectCards).toHaveCount(5);

    // Verify 10-Week Roadmap
    const roadmapCards = page.locator('.roadmap-card');
    await expect(roadmapCards).toHaveCount(10);

    // Take screenshot of master dashboard
    await page.screenshot({ path: 'master-board-sprint-overview.png' });
  });

  test('Weekly Page (Week 1) is a clean, focused question deck WITHOUT repeated dashboard banner', async ({ page }) => {
    await page.goto('http://localhost:8765/#/study/board-sprints/week-1', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Verify strategy dashboard is NOT rendered on weekly page
    const strategyDashboards = page.locator('.zen-strategy-dashboard');
    await expect(strategyDashboards).toHaveCount(0);

    // Verify question cards exist
    const questionCards = page.locator('.board-question-card');
    const qCount = await questionCards.count();
    expect(qCount).toBeGreaterThan(0);

    // Verify bestselling Oswaal/Educart elements
    const cautionBoxes = page.locator('.zen-caution-box');
    const topperBoxes = page.locator('.zen-topper-box');
    expect(await cautionBoxes.count()).toBeGreaterThan(0);
    expect(await topperBoxes.count()).toBeGreaterThan(0);

    // Take screenshot of clean weekly deck
    await page.screenshot({ path: 'week-1-question-deck.png' });
  });
});
