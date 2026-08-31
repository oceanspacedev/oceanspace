import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('UI Audit based on Impeccable Style', () => {

  const pagesToTest = ['/', '/career', '/contact'];
  const maxEagerImagesByPage = {
    '/': 2,
    '/career': 1,
    '/contact': 1,
  };

  for (const pagePath of pagesToTest) {
    test(`Audit ${pagePath}`, async ({ page }, testInfo) => {
      await page.goto(pagePath);
    
    // Let the entrance transition (scale/fade, ~0.4s) settle before measuring
    await page.waitForTimeout(800);
      
      // 1. Accessibility
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      
      const violations = accessibilityScanResults.violations;
      let a11yIssues = violations.map(v => `${v.id}: ${v.description} (${v.nodes.length} nodes)`);

      // 2. Performance (Basic checks)
      const unoptimizedImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.filter(img => !img.hasAttribute('loading') || img.getAttribute('loading') !== 'lazy').length;
      });

      // 3. Responsive (Touch targets & Overflow)
      const smallTouchTargets = await page.evaluate(() => {
        const interactive = Array.from(document.querySelectorAll('a, button, input, select, textarea'));
        return interactive.filter(el => {
          const rect = el.getBoundingClientRect();
          return (rect.width > 0 && rect.height > 0) && (rect.width < 44 || rect.height < 44);
        }).length;
      });

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      // 4. Theming & Anti-Patterns (AI Slop tells)
      const cssClasses = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*');
        const classes = new Set();
        allElements.forEach(el => el.classList.forEach(c => classes.add(c)));
        return Array.from(classes);
      });

      const antiPatterns = {
        gradientText: cssClasses.filter(c => c.includes('text-transparent') && c.includes('bg-clip-text')).length > 0,
        glassmorphism: cssClasses.filter(c => c.includes('backdrop-blur')).length > 0,
        pureBlack: cssClasses.filter(c => c.includes('bg-black') || c.includes('text-black')).length > 0,
        pureWhite: cssClasses.filter(c => c.includes('bg-white') || c.includes('text-white')).length > 0,
      };

      expect(a11yIssues, `Accessibility violations on ${pagePath}:\n${a11yIssues.join('\n')}`).toEqual([]);
      expect(unoptimizedImages, `Unexpected eager images on ${pagePath}`).toBeLessThanOrEqual(maxEagerImagesByPage[pagePath] || 0);
      expect(smallTouchTargets, `Touch target regression on ${pagePath}`).toBe(0);
      expect(hasHorizontalScroll, `Horizontal overflow detected on ${pagePath}`).toBe(false);
      
      console.log(`\n=== AUDIT RESULTS FOR ${pagePath} ===`);
      console.log(`Accessibility Violations: ${a11yIssues.length}`);
      if (a11yIssues.length > 0) console.log(` - ${a11yIssues.join('\n - ')}`);
      console.log(`Images without loading="lazy": ${unoptimizedImages}`);
      console.log(`Small Touch Targets (<44px): ${smallTouchTargets}`);
      console.log(`Has Horizontal Scroll: ${hasHorizontalScroll}`);
      console.log(`Anti-Patterns detected:`);
      console.log(` - Gradient Text: ${antiPatterns.gradientText}`);
      console.log(` - Glassmorphism: ${antiPatterns.glassmorphism}`);
      console.log(` - Pure Black/White Used: ${antiPatterns.pureBlack || antiPatterns.pureWhite}`);
      console.log(`====================================\n`);

      // Screenshot for visual reference
      await page.screenshot({ path: `playwright-report/${pagePath.replace(/\//g, '_')}-audit.png`, fullPage: true });
    });
  }
});
