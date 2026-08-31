import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const STATIC_UNITS_CONFIG = [
  {
    id: '01',
    href: '/distribusi',
    logos: [
      { src: '/images/unit-media-selular-indonesia.png', alt: 'Logo PT. Media Selular Indonesia', name: 'PT. Media Selular Indonesia' },
      { src: '/images/unit-satu-media-indonesia.png', alt: 'Logo PT. Satu Media Indonesia', name: 'PT. Satu Media Indonesia' },
      { src: '/images/unit-cv-top-selular.png', alt: 'Logo CV. Top Selular', name: 'CV. Top Selular' },
    ],
  },
  {
    id: '02',
    href: '/retail',
    logos: [
      { src: '/images/unit-retail-indonesia-selalu-maju.png', alt: 'Logo PT. Retail Indonesia Selalu Maju', name: 'PT. Retail Indonesia Selalu Maju' },
      { src: '/images/unit-complete-solusi-nusantara.png', alt: 'Logo PT. Complete Solusi Nusantara', name: 'PT. Complete Solusi Nusantara' },
    ],
  },
  {
    id: '03',
    href: '/sub-retail',
    logos: [
      { src: '/images/unit-complite-plus.png', alt: 'Logo Toko Complite+', name: 'Toko Complite+' },
      { src: '/images/unit-unboxing.png', alt: 'Logo Toko Unboxing', name: 'Toko Unboxing' },
      { src: '/images/unit-complete-selular.png', alt: 'Logo Complete Selular', name: 'Complete Selular' },
    ],
  },
  {
    id: '04',
    href: '/lifestyle',
    logos: [
      { src: '/images/unit-mari-sukses-gemilang.svg', alt: 'Logo PT. Mari Sukses Gemilang', name: 'PT. Mari Sukses Gemilang' },
    ],
  },
];

const About = () => {
  const { t } = useTranslation(['about', 'common']);

  const jujurPrinciples = t('principles.items', { returnObjects: true }) || [];
  const localizedUnits = t('ecosystem.units', { returnObjects: true }) || [];

  const mergedUnits = STATIC_UNITS_CONFIG.map((cfg, idx) => {
    const loc = localizedUnits[idx] || {};
    return {
      ...cfg,
      tag: loc.tag || '',
      title: loc.title || '',
      desc: loc.desc || '',
      highlights: loc.highlights || [],
    };
  });

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-black/10 dark:border-slate-800 bg-white dark:bg-[#0a0d14]">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_20%_50%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>

          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-28">
            <MotionReveal yOffset={20}>
              <p className="lc-eyebrow">{t('hero.eyebrow', 'Tentang Ocean Space')}</p>
              <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.65rem,4.7vw,4.5rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22] dark:text-white">
                {t('hero.title', 'Tumbuh lewat integritas dan disiplin eksekusi.')}
              </h1>
            </MotionReveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <MotionReveal delay={0.08}>
                <p className="text-[1.05rem] leading-8 text-[#556070] dark:text-slate-300">
                  {t('hero.p1', 'Ocean Space adalah grup usaha yang menaungi empat unit bisnis...')}
                </p>
              </MotionReveal>

              <MotionReveal delay={0.14}>
                <p className="text-[1.05rem] leading-8 text-[#556070] dark:text-slate-300">
                  {t('hero.p2', 'Dari jaringan distribusi nasional hingga gerai ritel...')}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <MotionButton>
                    <Link to="/contact" className="os-btn os-btn--primary w-full sm:w-auto">
                      {t('hero.ctaCorporate', 'Hubungi tim korporat')}
                      <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </Link>
                  </MotionButton>
                  <MotionButton>
                    <Link to="/career" className="os-btn os-btn--secondary w-full sm:w-auto">
                      {t('hero.ctaCareers', 'Lihat peluang karier')}
                    </Link>
                  </MotionButton>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* 2. LIMA PRINSIP JUJUR */}
        <section className="relative overflow-hidden border-b border-black/10 dark:border-slate-800 bg-[#f6f9fd] dark:bg-[#0b0f19]">
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-10">
              {/* Kiri — stats */}
              <MotionReveal className="flex flex-wrap gap-8 lg:gap-10">
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#171a22] dark:text-white">
                    {t('principles.principlesCount', '5')}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171] dark:text-slate-300">
                    {t('principles.principlesLabel', 'Prinsip kerja')}
                  </p>
                </div>
                <div className="h-12 w-px bg-black/10 self-center hidden sm:block" aria-hidden="true"></div>
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#171a22] dark:text-white">
                    {t('principles.unitsCount', '4')}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171] dark:text-slate-300">
                    {t('principles.unitsLabel', 'Unit bisnis')}
                  </p>
                </div>
                <div className="h-12 w-px bg-black/10 self-center hidden sm:block" aria-hidden="true"></div>
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#1d4ed8]">
                    {t('principles.cultureName', 'JUJUR')}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171] dark:text-slate-300">
                    {t('principles.cultureLabel', 'Fondasi budaya')}
                  </p>
                </div>
              </MotionReveal>

              {/* Kanan — teks */}
              <MotionReveal delay={0.1}>
                <p className="lc-eyebrow">{t('principles.eyebrow', 'Cara Grup Ini Bekerja')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22] dark:text-white">
                  {t('principles.heading', 'Lima prinsip yang menggerakkan setiap keputusan.')}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                  {t('principles.subtitle', 'Nilai JUJUR diterjemahkan menjadi perilaku kerja nyata di setiap unit bisnis.')}
                </p>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-5">
              {jujurPrinciples.map((p, i) => (
                <MotionStaggerItem key={p.id} className="h-full">
                  <MotionCard className={`relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 transition-colors hover:bg-[#0062FF] group ${
                    i < 4 ? 'sm:border-r border-black/10' : ''
                  }`}>
                    <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">{p.id}</span>
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">{p.label}</p>
                      <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] dark:text-white group-hover:text-white transition-colors duration-300">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#596171] dark:text-slate-300 group-hover:text-white/70 transition-colors duration-300">{p.description}</p>
                    </div>
                    <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">{p.detail}</p>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* 3. PETA EKOSISTEM — 4 UNIT */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_80%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">{t('ecosystem.eyebrow', 'Peta Ekosistem')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22] dark:text-white">
                  {t('ecosystem.heading', 'Empat unit bisnis, satu bahasa operasional.')}
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                {t('ecosystem.subtitle', 'Tiap unit menaungi badan usaha atau brand di bawah standar operasi yang sama.')}
              </MotionReveal>
            </div>

            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {mergedUnits.map((unit, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <MotionReveal key={unit.id}>
                    <div className={`grid gap-0 lg:grid-cols-2 ${isEven ? 'bg-[#f8fbff]' : 'bg-white'}`}>

                      {/* Panel identitas */}
                      <div className={`py-10 px-4 sm:px-6 lg:py-16 lg:px-14 ${isEven ? 'lg:order-2 lg:border-l border-black/10' : 'lg:order-1 lg:border-r border-black/10'}`}>
                        <div className="flex items-center gap-3 mb-5">
                          <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">
                            {t('ecosystem.unitPrefix', 'Unit')} {unit.id}
                          </span>
                          <span className="h-px flex-1 bg-black/10" aria-hidden="true"></span>
                          <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-slate-400">{unit.tag}</span>
                        </div>
                        <h3 className="text-[clamp(1.8rem,2.8vw,2.4rem)] font-bold tracking-[-0.04em] text-[#171a22] dark:text-white leading-tight">{unit.title}</h3>
                        <p className="mt-4 text-[0.95rem] leading-8 text-[#596171] dark:text-slate-300 max-w-[32rem]">{unit.desc}</p>
                        <Link
                          to={unit.href}
                          className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
                        >
                          <span>{t('ecosystem.viewUnit', { name: unit.title, defaultValue: `Lihat ${unit.title}` })}</span>
                          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>

                      {/* Panel konten */}
                      <div className={`border-t border-black/10 dark:border-slate-800 py-10 px-4 sm:px-6 lg:border-t-0 lg:py-16 lg:px-14 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-400 mb-5">
                          {t('ecosystem.commitments', 'Komitmen utama')}
                        </p>
                        <ul className="space-y-4">
                          {unit.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1d4ed8] dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                          <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-400 mb-4">
                            {t('ecosystem.entities', 'Entitas / Brand')}
                          </p>
                          <div className="flex flex-col gap-2">
                            {unit.logos.map((logo) => (
                              <div key={logo.src} className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#131824] px-3 py-2.5 transition-colors hover:border-[#1d4ed8]/30 dark:hover:border-blue-500/40 hover:bg-[#f8fbff] dark:hover:bg-slate-800">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1">
                                  <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
                                </div>
                                <p className="text-[0.75rem] font-semibold leading-tight text-slate-700 dark:text-slate-200">{logo.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. CTA */}
        <section className="bg-[#f6f9fd]">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">{t('cta.eyebrow', 'Bergabung dengan Ocean Space')}</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22] dark:text-white">
                {t('cta.heading', 'Bangun karier di ekosistem yang tumbuh dengan integritas.')}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070] dark:text-slate-300">
                {t('cta.desc', 'Lihat posisi yang tersedia atau hubungi tim korporat untuk peluang kemitraan.')}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <MotionButton>
                  <Link to="/career" className="os-btn os-btn--primary w-full sm:w-auto">
                    {t('cta.ctaCareers', 'Lihat peluang karier')}
                  </Link>
                </MotionButton>
                <MotionButton>
                  <Link to="/contact" className="os-btn os-btn--secondary w-full sm:w-auto">
                    {t('cta.ctaCorporate', 'Hubungi tim korporat')}
                  </Link>
                </MotionButton>
              </div>
            </MotionReveal>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;
