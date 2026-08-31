import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadExternalScript } from '../lib/loadExternalScript';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const CareerApply = () => {
  const [searchParams] = useSearchParams();
  const jobSlug = searchParams.get('job') || '';
  const { t, i18n } = useTranslation(['career', 'common']);

  useEffect(() => {
    let cancelled = false;

    const initScripts = async () => {
      try {
        const ts = Date.now();
        await loadExternalScript(`/js/career-api.js?v=${ts}`, () => Boolean(window.OceanSpaceCareerApi));
        await loadExternalScript(`/js/career-apply.js?v=${ts}`, () => typeof window.initCareerApply === 'function');

        if (!cancelled && window.initCareerApply) {
          window.initCareerApply();
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          document.getElementById('apply-page-loading')?.classList.add('hidden');
          document.getElementById('apply-page-error')?.classList.remove('hidden');
        }
      }
    };

    initScripts();

    return () => {
      cancelled = true;
      window.__oceanSpaceApplyRunId = (window.__oceanSpaceApplyRunId || 0) + 1;
    };
  }, [jobSlug, i18n.language]);

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        {/* 1. TOP HERO */}
        <section className="lc-band border-b border-black/10 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-[#0a0d14]">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            {/* Skeleton Loading State */}
            <div id="apply-page-loading" className="grid animate-pulse gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12" aria-hidden="false">
              <div className="max-w-[38rem] space-y-4">
                <div className="h-3 w-40 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                <div className="h-16 w-4/5 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                <div className="h-4 w-2/3 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-20 rounded-2xl border border-[#d9e2ef] bg-[#edf2fb] dark:border-slate-800 dark:bg-slate-800/40"></div>
                  <div className="h-20 rounded-2xl border border-[#d9e2ef] bg-[#edf2fb] dark:border-slate-800 dark:bg-slate-800/40"></div>
                </div>
                <div className="h-11 w-40 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 dark:border-slate-800 dark:bg-[#131824]">
                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0f131c]">
                  <div className="h-3 w-28 rounded bg-[#dfe7f5] dark:bg-slate-800"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-full rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                    <div className="h-4 w-5/6 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                    <div className="h-4 w-4/5 rounded bg-[#edf2fb] dark:bg-slate-800/60"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <div id="apply-page-empty" data-motion-reveal="panel" className="hidden rounded-2xl border border-[#d9e2ef] bg-white p-8 sm:p-10 dark:border-slate-800 dark:bg-[#0f131c]" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow">{t('apply.empty.eyebrow', 'Pilih Posisi Dulu')}</p>
                  <h1 className="mt-3 font-display text-2xl font-[500] tracking-[-0.04em] text-[#171a22] dark:text-white">
                    {t('apply.empty.heading', 'Halaman ini membutuhkan posisi yang dipilih.')}
                  </h1>
                  <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-[#596171] dark:text-slate-300">
                    {t('apply.empty.desc', 'Kembali ke karier, lalu buka lamaran dari posisi yang ingin Anda lihat.')}
                  </p>
                </div>
                <Link to="/career" data-motion-cta="true" className="button-primary sm:w-auto">
                  {t('apply.empty.cta', 'Lihat posisi terbuka')}
                </Link>
              </div>
            </div>

            {/* Error State */}
            <div id="apply-page-error" data-motion-reveal="panel" className="hidden rounded-2xl border border-red-100 bg-red-50 p-8 sm:p-10 dark:border-red-900/50 dark:bg-red-950/30" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow text-red-700 dark:text-red-400">{t('apply.error.eyebrow', 'Terjadi Kendala')}</p>
                  <h1 className="mt-3 font-display text-2xl font-[500] tracking-[-0.04em] text-red-700 dark:text-red-300">
                    {t('apply.error.heading', 'Detail posisi gagal dimuat.')}
                  </h1>
                  <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-red-700 dark:text-red-300">
                    {t('apply.error.desc', 'Posisi tidak tersedia atau tidak dapat diakses. Kembali ke karier untuk memilih posisi lain.')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/career" data-motion-cta="true" className="button-primary sm:w-auto">
                    {t('apply.error.backToCareers', 'Kembali ke Karier')}
                  </Link>
                  <Link to="/contact" data-motion-cta="true" className="button-secondary sm:w-auto">
                    {t('apply.error.contact', 'Hubungi kami')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div id="apply-page-content" className="hidden" aria-hidden="true">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12">
                <div className="max-w-[38rem]">
                  <p data-motion-enter="eyebrow" className="lc-eyebrow">{t('apply.hero.eyebrow', 'Karier / Lamaran')}</p>
                  <h1 id="apply-page-title" data-motion-enter="heading" className="mt-4 max-w-full sm:max-w-[16ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22] dark:text-white">
                    {t('apply.hero.loadingTitle', 'Memuat posisi yang dipilih.')}
                  </h1>
                  <p id="apply-page-summary" data-motion-enter="summary" className="mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070] dark:text-slate-300">
                    {t('apply.hero.summary', 'Baca konteks peran, lalu isi lamaran jika cocok.')}
                  </p>
                  <div id="apply-page-meta" className="mt-7 grid gap-3 sm:grid-cols-2"></div>
                  <div data-motion-enter="actions" className="mt-8 flex flex-wrap items-center gap-4">
                    <a href="#apply-form-card" data-motion-cta="true" className="os-btn os-btn--primary">
                      {t('apply.hero.ctaFillForm', 'Isi lamaran')}
                    </a>
                    <a href="#apply-page-details" data-motion-cta="true" className="button-secondary">
                      {t('apply.hero.ctaReadDetails', 'Baca detail posisi')}
                    </a>
                  </div>
                </div>

                <aside id="apply-page-prep-wrap" data-motion-enter="panel" className="relative hidden overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm dark:border-slate-800 dark:bg-[#131824]">
                  <div className="relative z-10 overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-[#0f131c]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                      <p className="font-bold tracking-tight text-slate-900 dark:text-white">{t('apply.hero.checklistTitle', 'Siapkan dulu')}</p>
                      <span className="os-data-label">{t('apply.hero.checklistTag', 'Checklist')}</span>
                    </div>
                    <ul id="apply-page-prep" className="mt-5 space-y-3 text-sm leading-7 text-[#556070] dark:text-slate-300"></ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* 2. JOB DETAILS & APPLICATION FORM */}
        <section id="apply-page-details" className="lc-band hidden border-b border-[#d8e0ec] bg-[#f6f9fd] transition-colors duration-200 dark:border-slate-800 dark:bg-[#0b0f19]" aria-hidden="true">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <div className="mb-8 max-w-[34rem]">
              <p className="lc-eyebrow">{t('apply.details.eyebrow', 'Detail posisi')}</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22] dark:text-white">
                {t('apply.details.heading', 'Deskripsi, kualifikasi, dan form lamaran.')}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                {t('apply.details.desc', 'Baca konteks peran, lalu isi data yang diminta di bawah.')}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 dark:border-slate-800 dark:bg-[#131824]">
              <div className="relative z-10 grid gap-3 sm:gap-4">
                {/* Description & Qualifications Card */}
                <article className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0f131c]">
                  <div className="border-b border-slate-100 px-5 py-4 sm:px-6 sm:py-5 dark:border-slate-800">
                    <p className="os-data-label">{t('apply.details.roleSummary', 'Ringkasan peran')}</p>
                  </div>
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="border-b border-slate-100 p-5 sm:p-6 lg:border-b-0 lg:border-r dark:border-slate-800">
                      <p className="os-data-label">{t('apply.details.jobDescription', 'Deskripsi pekerjaan')}</p>
                      <div id="apply-page-description" className="mt-3 text-[15px] leading-7 text-[#556070] dark:text-slate-300">{t('apply.details.waitingData', 'Menunggu data.')}</div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="os-data-label">{t('apply.details.qualifications', 'Kualifikasi')}</p>
                      <div id="apply-page-requirements" className="mt-3 space-y-3 text-[15px] leading-7 text-[#556070] dark:text-slate-300"></div>
                    </div>
                  </div>
                </article>

                {/* Form Card */}
                <article id="apply-form-card" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0f131c]">
                  <div className="border-b border-slate-100 px-5 py-5 sm:px-6 dark:border-slate-800">
                    <p className="lc-eyebrow">{t('apply.form.eyebrow', 'Form lamaran')}</p>
                    <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.2rem)] font-[500] tracking-[-0.04em] text-[#171a22] dark:text-white">
                      {t('apply.form.heading', 'Kirim lamaran')}
                    </h2>
                    <p className="mt-2 max-w-[40rem] text-sm leading-7 text-[#556070] dark:text-slate-300">
                      {t('apply.form.desc', 'Isi data yang diminta. Bidang bertanda * wajib diisi.')}
                    </p>
                  </div>
                  <div className="px-5 py-6 sm:px-6">
                    <div id="form-alerts"></div>
                    <form id="apply-form" className="space-y-5" encType="multipart/form-data"></form>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BOTTOM CTA */}
        <section className="border-b border-black/10 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-[#0a0d14]">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <div data-motion-reveal="intro" className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">{t('apply.nextStep.eyebrow', 'Langkah berikutnya')}</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22] dark:text-white">
                {t('apply.nextStep.heading', 'Siap melamar, atau masih melihat posisi lain?')}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070] dark:text-slate-300">
                {t('apply.nextStep.desc', 'Kembali ke daftar lowongan, atau hubungi tim jika Anda butuh klarifikasi.')}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/career" data-motion-cta="true" className="os-btn os-btn--primary">
                  {t('apply.nextStep.ctaOpenPositions', 'Lihat posisi terbuka')}
                </Link>
                <Link to="/contact" data-motion-cta="true" className="button-secondary">
                  {t('apply.nextStep.ctaCorporate', 'Hubungi tim korporat')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CareerApply;
