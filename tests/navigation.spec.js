import { test, expect } from '@playwright/test';

test.describe('Navigation Flows', () => {

  test('Desktop navigation links should work', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop only test');

    await page.goto('/');
    
    // Click 'Tentang'
    const aboutLink = page.locator('nav[aria-label="Navigasi utama"] a:has-text("Tentang")');
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about$/);

    // Click 'Karier' button (secondary action header)
    const careerLink = page.locator('a[data-header-action="secondary"]:has-text("Karier")');
    await expect(careerLink).toBeVisible();
    await careerLink.click();
    await expect(page).toHaveURL(/\/career$/);
  });

  test('Mobile navigation toggle should work', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test');

    await page.goto('/');

    const toggleBtn = page.locator('[data-menu-toggle]');
    const mobileNav = page.locator('[data-mobile-nav]');

    // Nav initially hidden
    await expect(mobileNav).toBeHidden();

    // Click to open
    await toggleBtn.click();
    await expect(mobileNav).toBeVisible();

    // Click link inside mobile nav
    const careerLink = mobileNav.locator('a:has-text("Karier")');
    await expect(careerLink).toBeVisible();
    await careerLink.click();
    await expect(page).toHaveURL(/\/career$/);
    
    // After clicking, the menu should close (based on JS logic implemented)
    // Wait for a bit (sometimes CSS transitions hide it)
    await page.waitForTimeout(100);
    await expect(mobileNav).toBeHidden();
  });

});
