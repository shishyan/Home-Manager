const { test, expect } = require('@playwright/test');

test.describe('Top bar tabs and left sidebar navigation responsiveness', () => {
  test('all top bar tabs switch active group and left menu items respond correctly', async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.goto('http://127.0.0.1:8765/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // 1. Verify all 6 group tabs are rendered on the top bar
    const tabs = page.locator('#personaTabs .group-tab');
    await expect(tabs).toHaveCount(6);

    const expectedGroups = [
      { key: 'household', label: 'Home', defaultRoute: 'global/overview' },
      { key: 'care', label: 'Health', defaultRoute: 'home/care' },
      { key: 'money', label: 'Money', defaultRoute: 'home/finance' },
      { key: 'learning', label: 'Education', defaultRoute: 'study/curriculum' },
      { key: 'leisure', label: 'Leisure', defaultRoute: 'home/travel' },
      { key: 'community', label: 'Community', defaultRoute: 'community/overview' }
    ];

    for (const grp of expectedGroups) {
      console.log(`Testing tab: ${grp.label} (${grp.key})`);
      
      // Click the top bar tab
      const tabButton = page.locator(`#personaTabs .group-tab[data-group="${grp.key}"]`);
      await expect(tabButton).toBeVisible();
      await tabButton.click();

      // Check tab is marked active
      await expect(tabButton).toHaveClass(/active/);
      await expect(page.locator('body')).toHaveClass(new RegExp(`group-${grp.key}`));

      // Verify the URL hash matches or starts with the group default
      expect(page.url()).toContain(`#/${grp.defaultRoute}`);

      // Now test the left sidebar items for this group
      if (grp.key === 'learning') {
        // Education sidebar has tree with student dashboard and class/subject details
        const studentDashboard = page.locator('#sidebar [data-education-student-dashboard]');
        await expect(studentDashboard).toBeVisible();
        await studentDashboard.click();
        expect(page.url()).toContain('#/study/student-overview');

        // Test education pages under expanded subject
        const eduPages = page.locator('#sidebar [data-education-page]');
        const count = await eduPages.count();
        expect(count).toBeGreaterThan(0);
        console.log(`Found ${count} education pages in sidebar`);

        // Click the first few education pages
        for (let i = 0; i < Math.min(count, 4); i++) {
          const eduBtn = eduPages.nth(i);
          const pageTarget = await eduBtn.getAttribute('data-education-page');
          await eduBtn.click();
          if (pageTarget.startsWith('study/')) {
            expect(page.url()).toContain(`#/${pageTarget}`);
          }
          await expect(eduBtn).toHaveClass(/active/);
        }
      } else {
        // For non-education groups, check sidebar nav items
        const menuItems = page.locator('#sidebar #nav .nav-sub-item > .nav-parent');
        const itemCount = await menuItems.count();
        expect(itemCount).toBeGreaterThan(0);
        console.log(`Found ${itemCount} nav items for ${grp.label}`);

        for (let i = 0; i < itemCount; i++) {
          const item = menuItems.nth(i);
          const targetRoute = await item.getAttribute('data-route');
          console.log(`  Clicking sidebar item: ${targetRoute}`);
          await item.click();

          // Wait a tick for render
          await page.waitForTimeout(100);

          // Verify URL route
          expect(page.url()).toContain(`#/${targetRoute}`);

          // Verify active group did NOT change away from this tab
          const currentGroup = await page.evaluate(() => HM.data.state.settings.activeGroup);
          expect(currentGroup).toBe(grp.key);

          // Verify item is active
          await expect(item).toHaveClass(/active/);

          // If this item has nested sub-items (like Household and Family under Home), test clicking each sub-item
          const subItems = page.locator('#sidebar #nav .section-subnav .section-subitem');
          const subCount = await subItems.count();
          if (subCount > 0) {
            console.log(`    Found ${subCount} nested sub-items under ${targetRoute}`);
            for (let j = 0; j < subCount; j++) {
              const subItem = subItems.nth(j);
              const subRoute = await subItem.getAttribute('data-route');
              console.log(`    Clicking sub-item: ${subRoute}`);
              await subItem.click();
              await page.waitForTimeout(100);

              expect(page.url()).toContain(`#/${subRoute}`);
              await expect(subItem).toHaveClass(/active/);

              // Verify parent remains active
              await expect(item).toHaveClass(/active/);
              // Verify active group remains current group
              const activeGrpAfterSub = await page.evaluate(() => HM.data.state.settings.activeGroup);
              expect(activeGrpAfterSub).toBe(grp.key);
            }
          }
        }
      }
    }

    expect(pageErrors).toEqual([]);
  });
});
