import { test, expect } from '@playwright/test';

const LIVE_CAREER_API_BASE = 'https://cesa.completeselular.com/api';
const JOBS_ROUTE_PATTERN = new RegExp(`${LIVE_CAREER_API_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/jobs(?:\\?.*)?$`);

const mockJobsPageOne = {
  success: true,
  message: 'Daftar lowongan berhasil diambil.',
  data: [
    {
      title: 'Backend Developer',
      slug: 'backend-developer',
      location: 'Jakarta, Indonesia',
      thumbnail_url: '',
      closing_date: '2026-12-31T23:59:59.000000Z',
    }
  ],
  meta: {
    current_page: 1,
    per_page: 12,
    has_more_pages: true,
    filters: {
      search: null,
      location: null,
    }
  },
  links: {
    first: `${LIVE_CAREER_API_BASE}/jobs?page=1`,
    prev: null,
    next: `${LIVE_CAREER_API_BASE}/jobs?page=2`
  }
};

const mockJobsPageTwo = {
  success: true,
  message: 'Daftar lowongan berhasil diambil.',
  data: [
    {
      title: 'Frontend Developer',
      slug: 'frontend-developer',
      location: 'Cirebon, Indonesia',
      thumbnail_url: '',
      closing_date: '2026-11-30T23:59:59.000000Z',
    }
  ],
  meta: {
    current_page: 2,
    per_page: 12,
    has_more_pages: false,
    filters: {
      search: null,
      location: null,
    }
  },
  links: {
    first: `${LIVE_CAREER_API_BASE}/jobs?page=1`,
    prev: `${LIVE_CAREER_API_BASE}/jobs?page=1`,
    next: null
  }
};

const mockFilteredJobsData = {
  success: true,
  message: 'Daftar lowongan berhasil diambil.',
  data: [
    {
      title: 'Sales Jakarta',
      slug: 'sales-jakarta',
      location: 'Jakarta',
      thumbnail_url: '',
      closing_date: '2026-10-10T00:00:00.000000Z',
    }
  ],
  meta: {
    current_page: 1,
    per_page: 12,
    has_more_pages: false,
    filters: {
      search: 'sales',
      location: 'Jakarta',
    }
  },
  links: {
    first: `${LIVE_CAREER_API_BASE}/jobs?search=sales&location=Jakarta&page=1`,
    prev: null,
    next: null
  }
};

const mockJobDetailData = {
  success: true,
  data: {
    title: 'Backend Developer',
    slug: 'backend-developer',
    location: 'Jakarta, Indonesia',
    description: 'Bekerja membangun API.',
    requirements: 'Paham Node.js dan Go.',
    closing_date: '2026-12-31T23:59:59.000000Z',
    application_form: [
      { name: 'full_name', label: 'Nama Lengkap', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
    ],
  },
};

const mockJobDetailDataWithFiles = {
  success: true,
  data: {
    ...mockJobDetailData.data,
    application_form: [
      ...mockJobDetailData.data.application_form,
      { name: 'photo', label: 'Foto Diri Terbaru', type: 'file', required: true },
      { name: 'resume', label: 'CV / Resume Terbaru', type: 'file', required: true },
    ],
  },
};

const mockApplySuccessData = {
  success: true,
  data: {
    job_slug: 'backend-developer',
    applicant_name: 'Test Playwright User',
    status: 'in_progress'
  }
};

const createJsonCorsResponse = (payload, status = 200) => ({
  status,
  contentType: 'application/json',
  headers: {
    'access-control-allow-origin': '*',
  },
  body: JSON.stringify(payload),
});

test.describe('Career Page Jobs Flow', () => {
  test('Should render first page, load more results, and open dedicated apply page correctly', async ({ page }) => {
    const requestedUrls = [];

    await page.route(JOBS_ROUTE_PATTERN, async (route) => {
      const requestUrl = new URL(route.request().url());
      requestedUrls.push(requestUrl.toString());

      if (requestUrl.searchParams.get('page') === '2') {
        await route.fulfill(createJsonCorsResponse(mockJobsPageTwo));
        return;
      }

      expect(requestUrl.searchParams.get('per_page')).toBe('6');
      await route.fulfill(createJsonCorsResponse(mockJobsPageOne));
    });

    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer`, async (route) => {
      await route.fulfill(createJsonCorsResponse(mockJobDetailDataWithFiles));
    });

    await page.goto('/career');
    await expect.poll(() => page.evaluate(() => window.OceanSpaceCareerApi?.baseUrl), { timeout: 15000 }).toBe(LIVE_CAREER_API_BASE);

    await expect(page.locator('h3:has-text("Backend Developer")')).toBeVisible();
    await expect(page.locator('h3:has-text("Frontend Developer")')).toHaveCount(0);
    await expect(page.locator('#jobs-load-more')).toBeVisible();

    await page.locator('#jobs-load-more').click();

    await expect(page.locator('h3:has-text("Frontend Developer")')).toBeVisible();
    await expect(page.locator('#jobs-load-more-wrap')).toBeHidden();
    expect(requestedUrls).toContain(`${LIVE_CAREER_API_BASE}/jobs?page=2`);

    const openBtn = page.locator('[data-job-link="backend-developer"]');
    await openBtn.click();
    await expect(page).toHaveURL(/career-apply\/?\?job=backend-developer/);

    await expect(page.locator('#apply-page-title')).toContainText('Backend Developer');
    await expect(page.locator('input[name="full_name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('text=PDF, DOC, DOCX · maks. 5 MB')).toBeVisible();
    await expect(page.locator('text=JPG, PNG, WEBP · maks. 5 MB')).toBeVisible();
  });

  test('Should submit search and location filters using the new query params', async ({ page }) => {
    await page.route(JOBS_ROUTE_PATTERN, async (route) => {
      const requestUrl = new URL(route.request().url());
      const search = requestUrl.searchParams.get('search');
      const location = requestUrl.searchParams.get('location');

      if (search === 'sales' && location === 'Jakarta') {
        expect(requestUrl.searchParams.get('per_page')).toBe('6');
        expect(requestUrl.searchParams.get('page')).toBe('1');
        await route.fulfill(createJsonCorsResponse(mockFilteredJobsData));
        return;
      }

      await route.fulfill(createJsonCorsResponse(mockJobsPageOne));
    });

    await page.goto('/career');
    await expect(page.locator('h3:has-text("Backend Developer")')).toBeVisible();
    await page.locator('#jobs-search').fill('sales');
    await page.locator('#jobs-location').fill('Jakarta');
    await page.locator('#jobs-filters button[type="submit"]').click();

    await expect(page.locator('h3:has-text("Sales Jakarta")')).toBeVisible();
    await expect(page).toHaveURL(/search=sales/);
    await expect(page).toHaveURL(/location=Jakarta/);
    await expect(page.locator('#jobs-container article')).toHaveCount(1);
    await expect(page.locator('#jobs-load-more-wrap')).toBeHidden();
  });

  test('Should submit the application form gracefully on dedicated page', async ({ page }) => {
    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer`, async (route) => {
      await route.fulfill(createJsonCorsResponse(mockJobDetailData));
    });

    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer/apply`, async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await route.fulfill(createJsonCorsResponse(mockApplySuccessData, 201));
    });

    await page.goto('/career-apply?job=backend-developer');

    const fullNameInput = page.locator('input[name="full_name"]');
    await expect(fullNameInput).toBeVisible();

    await fullNameInput.fill('Test Playwright User');
    await page.locator('input[name="email"]').fill('playwright@test.com');

    await page.locator('#btn-submit').click();

    await expect(page.locator('h3:has-text("Lamaran Berhasil Terkirim!")')).toBeVisible();
    await expect(page.locator('#apply-form a:has-text("Hubungi tim korporat")')).toBeVisible();
  });

  test('Should show 422 error gracefully on dedicated page', async ({ page }) => {
    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer`, async (route) => {
      await route.fulfill(createJsonCorsResponse(mockJobDetailData));
    });

    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer/apply`, async (route) => {
      await route.fulfill(createJsonCorsResponse({
        message: 'The email field is required.',
        errors: {
          email: ['The email field is required.']
        }
      }, 422));
    });

    await page.goto('/career-apply?job=backend-developer');

    await page.locator('input[name="full_name"]').fill('Test Error User');
    await page.locator('input[name="email"]').fill('error@test.com');
    await page.locator('#btn-submit').click();

    await expect(page.locator('#form-alerts')).toBeVisible();
    await expect(page.locator('#form-alerts')).toContainText('The email field is required.');
    await expect(page.locator('#error-email')).toBeVisible();
    await expect(page.locator('#error-email')).toHaveText('The email field is required.');
  });

  test('Should block oversize uploads on frontend before submit', async ({ page }) => {
    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer`, async (route) => {
      await route.fulfill(createJsonCorsResponse(mockJobDetailDataWithFiles));
    });

    let applyRequestCount = 0;
    await page.route(`${LIVE_CAREER_API_BASE}/jobs/backend-developer/apply`, async (route) => {
      applyRequestCount += 1;
      await route.fulfill(createJsonCorsResponse(mockApplySuccessData, 201));
    });

    await page.goto('/career-apply?job=backend-developer');

    await page.locator('input[name="full_name"]').fill('Test File Limit User');
    await page.locator('input[name="email"]').fill('file-limit@test.com');
    await page.locator('input[name="photo"]').setInputFiles({
      name: 'photo.jpg',
      mimeType: 'image/jpeg',
      buffer: Buffer.alloc((5 * 1024 * 1024) + 1, 0),
    });
    await page.locator('input[name="resume"]').setInputFiles({
      name: 'resume.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('%PDF-1.4\nresume'),
    });

    await page.locator('#btn-submit').click();

    await expect(page.locator('#form-alerts')).toContainText('Periksa kembali file yang diunggah.');
    await expect(page.locator('#error-photo')).toContainText('Ukuran photo diri terbaru maksimal 5 MB.');
    expect(applyRequestCount).toBe(0);
  });
});
