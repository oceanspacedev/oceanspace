import { test, expect } from '@playwright/test';

const pages = [
  { url: '/', title: 'Ocean Space' },
  { url: '/about', title: 'Tentang' },
  { url: '/distribusi', title: 'Distribusi' },
  { url: '/retail', title: 'Retail' },
  { url: '/sub-retail', title: 'Sub Retail' },
  { url: '/lifestyle', title: 'Lifestyle' },
  { url: '/career', title: 'Karier' },
  { url: '/career-apply', title: 'Lamaran' },
  { url: '/contact', title: 'Kontak' },
  { url: '/privacy', title: 'Privasi' },
];

test.describe('Pages Render Integrity', () => {
  for (const pageInfo of pages) {
    test(`Should load ${pageInfo.url} without errors`, async ({ page }) => {
      const response = await page.goto(pageInfo.url);
      expect(response.status()).toBe(200);

      // Verify the title contains the expected keyword
      const pageTitle = await page.title();
      expect(pageTitle.toLowerCase()).toContain(pageInfo.title.toLowerCase());

      // Ensure footer is visible (means page rendered completely)
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  }

  test('Career apply page should be non-indexable', async ({ page }) => {
    await page.goto('/career-apply');

    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex,\s*follow/i);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://oceanspace.co.id/career');
  });

  test('Home has SEO essentials in document head', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://oceanspace.co.id/');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og-image/);
    await expect(page.locator('main#main-content')).toBeVisible();
  });
});
