import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { loadExternalScript } from '../lib/loadExternalScript';

const Career = () => {
  const { t, i18n } = useTranslation(['career', 'common']);

  useEffect(() => {
    let cancelled = false;

    const initScripts = async () => {
      try {
        const ts = Date.now();
        await loadExternalScript(`/js/career-api.js?v=${ts}`, () => Boolean(window.OceanSpaceCareerApi));
        await loadExternalScript(`/js/career.js?v=${ts}`, () => typeof window.initCareer === 'function');

        if (!cancelled && window.initCareer) {
          window.initCareer();
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          document.getElementById('jobs-loading')?.classList.add('hidden');
          document.getElementById('jobs-error')?.classList.remove('hidden');
        }
      }
    };

    initScripts();

    return () => {
      cancelled = true;
      window.__oceanSpaceCareerAbort?.abort();
    };
  }, [i18n.language]);

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        {/* 1. HERO SECTION */}
        <section className="lc-band border-b border-black/10 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-[#0a0d14]">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            <MotionReveal yOffset={25} className="max-w-[42rem]">
              <p className="lc-eyebrow">{t('hero.eyebrow', 'Karier Ocean Space')}</p>
              <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22] dark:text-white">
                {t('hero.heading', 'Bergabung dan bertumbuh dengan integritas.')}
              </h1>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070] dark:text-slate-300">
                {t('hero.desc', 'Temukan posisi lowongan kerja aktif di seluruh jaringan unit bisnis Ocean Space.')}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MotionButton>
                  <a href="#jobs-open" data-motion-cta="true" className="os-btn os-btn--primary">
                    {t('hero.ctaOpenPositions', 'Lihat posisi terbuka')}
                    <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </a>
                </MotionButton>
                <MotionButton>
                  <Link to="/about" data-motion-cta="true" className="os-btn os-btn--secondary">
                    {t('hero.ctaCulture', 'Pelajari budaya kerja')}
                  </Link>
                </MotionButton>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* 2. OPEN JOBS SECTION */}
        <section id="jobs-open" className="lc-band border-b border-[#d8e0ec] bg-[#f6f9fd] transition-colors duration-200 dark:border-slate-800 dark:bg-[#0b0f19]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            <div className="mb-8 max-w-[34rem]">
              <p className="lc-eyebrow">{t('openJobs.eyebrow', 'Lowongan Terbuka')}</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22] dark:text-white">
                {t('openJobs.heading', 'Cari peran yang sedang dibuka saat ini.')}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                {t('openJobs.desc', 'Posisi terbaru di Ocean Space.')}
              </p>
            </div>

            {/* Filters */}
            <form id="jobs-filters" className="jobs-filters">
              <div>
                <input
                  id="jobs-search"
                  name="search"
                  type="search"
                  maxLength="100"
                  placeholder={t('openJobs.searchPlaceholder', 'Cari lowongan')}
                  aria-label={t('openJobs.searchPlaceholder', 'Cari lowongan')}
                  className="apply-input"
                />
              </div>
              <div>
                <input
                  id="jobs-location"
                  name="location"
                  type="text"
                  maxLength="100"
                  placeholder={t('openJobs.locationPlaceholder', 'Filter lokasi')}
                  aria-label={t('openJobs.locationPlaceholder', 'Filter lokasi')}
                  className="apply-input"
                />
              </div>
              <div className="jobs-filters__actions">
                <button type="submit" data-motion-cta="true" className="os-btn os-btn--primary">
                  {t('openJobs.applyFilter', 'Terapkan')}
                </button>
                <button type="button" id="jobs-reset" data-motion-cta="true" className="button-secondary sm:w-auto">
                  {t('openJobs.reset', 'Atur ulang')}
                </button>
              </div>
            </form>

            {/* Skeleton Loading in Dark Mode */}
            <div id="jobs-loading" className="jobs-grid mt-10" aria-hidden="false">
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media dark:bg-[#131824]"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-3/4 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="h-4 w-2/3 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                </div>
              </div>
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media dark:bg-[#131824]"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-4/5 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="h-4 w-1/2 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                </div>
              </div>
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media dark:bg-[#131824]"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-2/3 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="h-4 w-3/5 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <div id="jobs-empty" data-motion-reveal="panel" className="mt-10 hidden rounded-2xl border border-[#d9e2ef] bg-white p-8 sm:p-10 dark:border-slate-800 dark:bg-[#0f131c]" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow">{t('openJobs.empty.eyebrow', 'Belum Ada Posisi Aktif')}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#171a22] dark:text-white">
                    {t('openJobs.empty.heading', 'Posisi baru belum tersedia saat ini.')}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-[#596171] dark:text-slate-300">
                    {t('openJobs.empty.desc', 'Cek lagi nanti, atau hubungi tim jika Anda ingin menyampaikan minat.')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" data-motion-cta="true" className="os-btn os-btn--primary sm:w-auto">
                    {t('openJobs.empty.cta', 'Hubungi tim korporat')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Error State */}
            <div id="jobs-error" data-motion-reveal="panel" className="mt-10 hidden rounded-2xl border border-red-100 bg-red-50 p-8 sm:p-10 dark:border-red-900/50 dark:bg-red-950/30" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow text-red-700 dark:text-red-400">{t('openJobs.error.eyebrow', 'Terjadi Kendala')}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-red-700 dark:text-red-300">
                    {t('openJobs.error.heading', 'Daftar lowongan online sedang tidak tersedia.')}
                  </h3>
                  <p id="jobs-error-message" className="mt-3 max-w-[34rem] text-[15px] leading-7 text-red-700 dark:text-red-300">
                    {t('openJobs.error.desc', 'Coba lagi, atau hubungi tim untuk menyampaikan minat.')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="button" id="jobs-retry" data-motion-cta="true" className="button-secondary sm:w-auto">
                    {t('openJobs.error.retry', 'Coba lagi')}
                  </button>
                  <Link to="/contact" data-motion-cta="true" className="button-primary sm:w-auto">
                    {t('openJobs.error.cta', 'Sampaikan minat')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Jobs Container */}
            <div id="jobs-container" className="jobs-grid mt-10"></div>
            <div id="jobs-results-meta" className="mt-8 text-center text-sm font-medium text-[#596171] dark:text-slate-400"></div>
            <div id="jobs-load-more-wrap" className="mt-10 hidden flex-col items-center justify-center gap-3">
              <button type="button" id="jobs-load-more" data-motion-cta="true" className="button-secondary min-w-[200px] cursor-pointer text-center">
                Muat lebih banyak
              </button>
              <div id="jobs-load-more-status" className="text-xs text-[#708198] dark:text-slate-400"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Career;
