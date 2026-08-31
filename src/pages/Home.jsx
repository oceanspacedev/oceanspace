import {
  ArrowUpRightIcon,
  BuildingStorefrontIcon,
  ShareIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';

const DistribusiVector = ({ isDark = false }) => (
  <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-contain">
    <rect width="200" height="110" rx="8" fill={isDark ? '#131824' : '#F8FAFC'} />
    <path d="M0 27.5H200M0 55H200M0 82.5H200" stroke={isDark ? '#1e293b' : '#E2E8F0'} strokeWidth="1" strokeDasharray="4 4" />
    <path d="M50 0V110M100 0V110M150 0V110" stroke={isDark ? '#1e293b' : '#E2E8F0'} strokeWidth="1" strokeDasharray="4 4" />
    <rect x="75" y="35" width="50" height="40" rx="6" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" />
    <rect x="85" y="45" width="30" height="20" rx="3" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#60A5FA" strokeWidth="1.5" />
    <path d="M40 55H65M60 50L65 55L60 60" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M135 55H160M155 50L160 55L155 60" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="55" r="5" fill="#3B82F6" />
    <circle cx="170" cy="55" r="5" fill="#3B82F6" />
  </svg>
);

const RetailVector = ({ isDark = false }) => (
  <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-contain">
    <rect width="200" height="110" rx="8" fill={isDark ? '#131824' : '#F8FAFC'} />
    <path d="M45 80V45L100 25L155 45V80H45Z" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
    <path d="M40 45H160L155 55H45L40 45Z" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="85" y="55" width="30" height="25" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#3B82F6" strokeWidth="1.5" />
    <line x1="100" y1="55" x2="100" y2="80" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="55" y="55" width="20" height="18" rx="2" fill={isDark ? '#1e293b' : '#F1F5F9'} stroke={isDark ? '#475569' : '#94A3B8'} strokeWidth="1" />
    <rect x="125" y="55" width="20" height="18" rx="2" fill={isDark ? '#1e293b' : '#F1F5F9'} stroke={isDark ? '#475569' : '#94A3B8'} strokeWidth="1" />
  </svg>
);

const SubRetailVector = ({ isDark = false }) => (
  <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-contain">
    <rect width="200" height="110" rx="8" fill={isDark ? '#131824' : '#F8FAFC'} />
    <path d="M55 55L100 30L145 55L100 80L55 55Z" stroke={isDark ? '#334155' : '#E2E8F0'} strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="100" cy="30" r="16" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" />
    <circle cx="55" cy="55" r="16" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" />
    <circle cx="145" cy="55" r="16" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" />
    <circle cx="100" cy="30" r="6" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#60A5FA" strokeWidth="1.5" />
    <circle cx="55" cy="55" r="6" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#60A5FA" strokeWidth="1.5" />
    <circle cx="145" cy="55" r="6" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#60A5FA" strokeWidth="1.5" />
    <path d="M100 46V64M71 55H129" stroke="#3B82F6" strokeWidth="1.5" />
  </svg>
);

const LifestyleVector = ({ isDark = false }) => (
  <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-contain">
    <rect width="200" height="110" rx="8" fill={isDark ? '#131824' : '#F8FAFC'} />
    <rect x="65" y="30" width="70" height="50" rx="8" fill={isDark ? '#1c2438' : '#FFFFFF'} stroke="#3B82F6" strokeWidth="2" />
    <rect x="73" y="38" width="54" height="34" rx="4" fill={isDark ? '#172554' : '#EEF4FF'} stroke="#60A5FA" strokeWidth="1" />
    <path d="M150 25L153 32L160 35L153 38L150 45L147 38L140 35L147 32L150 25Z" fill="#3B82F6" />
    <path d="M45 65L47 70L52 72L47 74L45 79L43 74L38 72L43 70L45 65Z" fill="#60A5FA" />
  </svg>
);

const CultureSystemBackdrop = () => (
  <svg viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full" aria-hidden="true">
    <defs>
      <radialGradient id="cultureGlow" cx="0" cy="0" r="1" gradientTransform="translate(1050 270) rotate(90) scale(400)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" stopOpacity="0.13" />
        <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1440" height="720" fill="url(#cultureGlow)" />
    <circle cx="1050" cy="270" r="208" stroke="#2563EB" strokeOpacity="0.13" />
    <circle cx="1050" cy="270" r="132" stroke="#2563EB" strokeOpacity="0.16" strokeDasharray="5 14" />
    <path d="M700 485C795 375 862 235 1050 270C1215 300 1245 455 1390 430" stroke="#2563EB" strokeOpacity="0.16" strokeWidth="1.5" />
    <path d="M760 145C865 225 927 285 1050 270C1165 256 1228 174 1370 205" stroke="#2563EB" strokeOpacity="0.16" strokeWidth="1.5" />
    <g fill="#2563EB" fillOpacity="0.35">
      <circle cx="850" cy="168" r="7" />
      <circle cx="920" cy="428" r="7" />
      <circle cx="1080" cy="76" r="7" />
      <circle cx="1240" cy="370" r="7" />
      <circle cx="1325" cy="165" r="7" />
    </g>
    <circle cx="1050" cy="270" r="22" fill="#2563EB" fillOpacity="0.16" />
    <circle cx="1050" cy="270" r="7" fill="#2563EB" fillOpacity="0.55" />
  </svg>
);

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { t } = useTranslation(['home', 'common']);

  const jujurPrinciples = t('culture.principlesList', { returnObjects: true }) || [
    { id: '01', title: 'Jujur & Integritas' },
    { id: '02', title: 'Unggul Berkinerja' },
    { id: '03', title: 'Jaga Pelanggan' },
    { id: '04', title: 'Ulet & Bertumbuh' },
    { id: '05', title: 'Rampung' },
  ];

  const workMotivations = t('culture.motivationsList', { returnObjects: true }) || [
    { id: '01', title: 'Fear' },
    { id: '02', title: 'Desire' },
    { id: '03', title: 'Duty' },
    { id: '04', title: 'Love' },
  ];

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        {/* 1. HERO SECTION */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden border-b border-black/10 bg-white sm:min-h-[90vh] dark:bg-[#0a0d14] dark:border-slate-800">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              key={isDark ? 'hero-dark' : 'hero-light'}
              src={isDark ? '/images/hero-dark.png' : '/images/hero-section.png'}
              alt={t('hero.mapAlt', 'Peta Jaringan Distribusi Indonesia Ocean Space')}
              title="Peta Jaringan Distribusi Indonesia Ocean Space"
              className={`h-full w-full object-cover object-right-bottom transition-opacity duration-300 ${
                isDark ? 'opacity-80' : 'opacity-95'
              }`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1376"
              height="768"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0a0d14] dark:via-[#0a0d14]/85 dark:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0a0d14] dark:via-transparent dark:to-transparent"></div>
          </div>

          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_20%_50%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>

          <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 pt-32 pb-16 sm:px-5 sm:py-20 lg:px-6 lg:py-24">
            <div className="lc-hero-copy relative max-w-[40rem]">
              <MotionReveal yOffset={25}>
                <h1 className="mt-5 max-w-full font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22] dark:text-white sm:max-w-[13ch]">
                  {t('hero.titlePart1', 'Empat unit bisnis. Satu standar ')}
                  <span className="relative text-[#1d4ed8] dark:text-[#60a5fa]">
                    {t('hero.titleHighlight', 'eksekusi')}
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2 w-full bg-[#2563eb]/15 dark:bg-[#3b82f6]/25"></span>
                  </span>
                  {t('hero.titlePart2', '.')}
                </h1>
                <p className="mt-4 max-w-[33rem] text-[1.05rem] leading-relaxed text-[#556070] dark:text-slate-300">
                  {t('hero.subtitle', 'Menyatukan kemitraan, ekspansi, dan operasi harian.')}
                </p>

                <div className="lc-hero-actions mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <MotionButton>
                    <Link to="/contact" className="os-btn os-btn--primary">
                      {t('hero.cta', 'Hubungi kami')}
                      <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </Link>
                  </MotionButton>
                  <span className="lc-eyebrow">
                    <span>{t('hero.badge', '4 unit · 16 titik aktif')}</span>
                  </span>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* 2. LOGO MARQUEE BANNER */}
        <section className="lc-band bg-[#f6f9fd] dark:bg-[#0b0f19] dark:border-slate-800">
          <div className="lc-shell px-0 md:pl-5 md:pr-0 lg:pl-6 lg:pr-0">
            <div className="relative grid gap-0 md:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)]">
              <div className="flex items-center justify-center border-b border-black/10 dark:border-slate-800 py-6 px-6 text-center md:border-b-0 md:px-4">
                <span className="font-sans text-[0.8rem] font-semibold uppercase leading-[1.9] tracking-[0.16em] text-[#2d3a4a] dark:text-slate-300">
                  {t('marquee.heading', 'Powering ideas for disciplined growth')}
                </span>
              </div>
              <div className="relative overflow-hidden border-x border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex w-max animate-home-marquee [will-change:transform] motion-reduce:animate-none hover:[animation-play-state:paused]">
                  {/* Set 1 */}
                  <div className="flex">
                    <div className="lc-logo-marquee-card"><img src="/images/unit-media-selular-indonesia.png" alt="Logo PT. Media Selular Indonesia" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-satu-media-indonesia.png" alt="Logo PT. Satu Media Indonesia" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-cv-top-selular.png" alt="Logo CV. Top Selular" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-retail-indonesia-selalu-maju.png" alt="Logo PT. Retail Indonesia Selalu Maju" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complete-solusi-nusantara.png" alt="Logo PT. Complete Solusi Nusantara" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complite-plus.png" alt="Logo Toko Complite+" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-unboxing.png" alt="Logo Toko Unboxing" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complete-selular.png" alt="Logo Complete Selular" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-mari-sukses-gemilang.svg" alt="Logo PT. Mari Sukses Gemilang" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                  </div>

                  {/* Set 2 (Seamless Infinite Loop) */}
                  <div className="flex" aria-hidden="true">
                    <div className="lc-logo-marquee-card"><img src="/images/unit-media-selular-indonesia.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-satu-media-indonesia.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-cv-top-selular.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-retail-indonesia-selalu-maju.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complete-solusi-nusantara.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complite-plus.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-unboxing.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-complete-selular.png" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                    <div className="lc-logo-marquee-card"><img src="/images/unit-mari-sukses-gemilang.svg" alt="" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. KERANGKA KERJA TERINTEGRASI */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white dark:bg-[#0a0d14] dark:border-slate-800">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_20%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <span className="lc-node left-0 top-0" aria-hidden="true"></span>
            
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
              <MotionReveal className="max-w-2xl">
                <p className="lc-eyebrow">{t('framework.eyebrow', 'Cara Kami Bekerja')}</p>
                <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2.1rem,3.8vw,3.25rem)] font-[500] leading-[1.05] tracking-[-0.035em] text-[#171a22] dark:text-white">
                  {t('framework.heading', 'Satu standar untuk empat unit.')}
                </h2>
              </MotionReveal>
            </div>

            {/* Clean Monochromatic 4-Card Matrix Grid */}
            <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Unit 01 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-4">
                      <span className="os-data-label">Unit 01</span>
                      <span className="text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400">{t('framework.unit1.tag', 'Distribusi')}</span>
                    </div>

                    <div className="h-28 w-full rounded-xl bg-slate-50/80 dark:bg-[#131824] border border-slate-100 dark:border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-800/60 transition-colors">
                      <DistribusiVector isDark={isDark} />
                    </div>

                    <h3 className="font-display text-[1.25rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">
                      {t('framework.unit1.name', 'HP Distribusi')}
                    </h3>

                    <p className="mt-2 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                      {t('framework.unit1.desc', 'Distribusi handphone dan gadget berskala nasional.')}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">
                      {t('framework.unit1.companies', 'PT Media Selular Indonesia, PT Satu Media Indonesia & CV Top Selular')}
                    </p>
                    <Link to="/distribusi" className="lc-unit-link mt-4 inline-flex min-h-[48px] py-2 items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] dark:text-blue-400 transition-all group-hover:gap-2.5 hover:text-[#2563eb] dark:hover:text-blue-300">
                      <span>{t('framework.unit1.link', 'Lihat Distribusi')}</span>
                      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Unit 02 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-4">
                      <span className="os-data-label">Unit 02</span>
                      <span className="text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400">{t('framework.unit2.tag', 'Retail Direct')}</span>
                    </div>

                    <div className="h-28 w-full rounded-xl bg-slate-50/80 dark:bg-[#131824] border border-slate-100 dark:border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-800/60 transition-colors">
                      <RetailVector isDark={isDark} />
                    </div>

                    <h3 className="font-display text-[1.25rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">
                      {t('framework.unit2.name', 'Retail')}
                    </h3>

                    <p className="mt-2 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                      {t('framework.unit2.desc', 'Gerai handphone dan aksesori dengan layanan konsisten.')}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">
                      {t('framework.unit2.companies', 'PT RISM & PT CSN')}
                    </p>
                    <Link to="/retail" className="lc-unit-link mt-4 inline-flex min-h-[48px] py-2 items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] dark:text-blue-400 transition-all group-hover:gap-2.5 hover:text-[#2563eb] dark:hover:text-blue-300">
                      <span>{t('framework.unit2.link', 'Lihat Retail')}</span>
                      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Unit 03 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-4">
                      <span className="os-data-label">Unit 03</span>
                      <span className="text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400">{t('framework.unit3.tag', 'Sub Retail')}</span>
                    </div>

                    <div className="h-28 w-full rounded-xl bg-slate-50/80 dark:bg-[#131824] border border-slate-100 dark:border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-800/60 transition-colors">
                      <SubRetailVector isDark={isDark} />
                    </div>

                    <h3 className="font-display text-[1.25rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">
                      {t('framework.unit3.name', 'Sub Retail')}
                    </h3>

                    <p className="mt-2 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                      {t('framework.unit3.desc', 'Produk teknologi rumah tangga melalui jaringan ritel.')}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">
                      {t('framework.unit3.companies', 'Complite+, Unboxing & Complete Selular')}
                    </p>
                    <Link to="/sub-retail" className="lc-unit-link mt-4 inline-flex min-h-[48px] py-2 items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] dark:text-blue-400 transition-all group-hover:gap-2.5 hover:text-[#2563eb] dark:hover:text-blue-300">
                      <span>{t('framework.unit3.link', 'Lihat Sub Retail')}</span>
                      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Unit 04 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-4">
                      <span className="os-data-label">Unit 04</span>
                      <span className="text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400">{t('framework.unit4.tag', 'Lifestyle')}</span>
                    </div>

                    <div className="h-28 w-full rounded-xl bg-slate-50/80 dark:bg-[#131824] border border-slate-100 dark:border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-800/60 transition-colors">
                      <LifestyleVector isDark={isDark} />
                    </div>

                    <h3 className="font-display text-[1.25rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">
                      {t('framework.unit4.name', 'Lifestyle')}
                    </h3>

                    <p className="mt-2 text-[0.98rem] leading-7 text-[#596171] dark:text-slate-300">
                      {t('framework.unit4.desc', 'Layanan lifestyle untuk kebutuhan sehari-hari.')}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">
                      {t('framework.unit4.companies', 'PT Mari Sukses Gemilang')}
                    </p>
                    <Link to="/lifestyle" className="lc-unit-link mt-4 inline-flex min-h-[48px] py-2 items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] dark:text-blue-400 transition-all group-hover:gap-2.5 hover:text-[#2563eb] dark:hover:text-blue-300">
                      <span>{t('framework.unit4.link', 'Lihat Lifestyle')}</span>
                      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </MotionCard>
              </MotionStaggerItem>
            </MotionStagger>

            {/* Bottom Summary Bar */}
            <MotionReveal delay={0.2} className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 sm:p-8 sm:mt-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 divide-y divide-slate-100 dark:divide-slate-800 sm:divide-y-0 sm:divide-x divide-slate-100 dark:sm:divide-slate-800">
                <div className="flex flex-col sm:pr-6">
                  <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-400">{t('framework.summary.coreValue', 'Nilai Utama')}</span>
                  <p className="mt-2 font-display text-[1.4rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">JUJUR</p>
                  <p className="mt-1 text-xs text-[#596171] dark:text-slate-300">{t('framework.summary.coreValueSub', '5 prinsip kerja grup')}</p>
                </div>

                <div className="flex flex-col pt-6 sm:pt-0 sm:px-6">
                  <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-400">{t('framework.summary.operations', 'Operasi')}</span>
                  <p className="mt-2 font-display text-[1.4rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">{t('framework.summary.operationsTitle', '4 Unit Bisnis')}</p>
                  <p className="mt-1 text-xs text-[#596171] dark:text-slate-300">{t('framework.summary.operationsSub', 'Satu standar kerja')}</p>
                </div>

                <div className="flex flex-col pt-6 sm:pt-0 sm:pl-6">
                  <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-400">{t('framework.summary.network', 'Jaringan')}</span>
                  <p className="mt-2 font-display text-[1.4rem] font-[500] tracking-[-0.03em] text-[#171a22] dark:text-white">{t('framework.summary.networkTitle', '16 Titik Operasional')}</p>
                  <p className="mt-1 text-xs text-[#596171] dark:text-slate-300">{t('framework.summary.networkSub', 'Jawa, Sulawesi, Sumatera')}</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* 4. OPERASI SKALA NASIONAL / 16 TITIK */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white dark:bg-[#0a0d14] dark:border-slate-800">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_80%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          
          <div className="lc-shell relative z-10 py-14 sm:py-16 lg:py-20">
            <span className="lc-node right-0 top-0" aria-hidden="true"></span>
            
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
              <MotionReveal>
                <p className="lc-eyebrow">{t('operations.eyebrow', 'Operasi Skala Nasional')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22] dark:text-white">
                  {t('operations.heading', '16 Titik tersebar di pulau Jawa, Sulawesi, dan Sumatera.')}
                </h2>

                {/* Quick Stats Summary */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  <div>
                    <p className="os-data-label">{t('operations.totalNetwork', 'Total Jaringan')}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#171a22] dark:text-white">{t('operations.totalNetworkCount', '16 Titik')}</p>
                    <p className="text-xs text-[#596171] dark:text-slate-300">{t('operations.totalNetworkSub', 'Aktif beroperasi')}</p>
                  </div>
                  <div>
                    <p className="os-data-label">{t('operations.coverage', 'Cakupan Wilayah')}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#171a22] dark:text-white">{t('operations.coverageCount', '3 Pulau Utama')}</p>
                    <p className="text-xs text-[#596171] dark:text-slate-300">{t('operations.coverageSub', 'Jawa, Sulawesi, Sumatera')}</p>
                  </div>
                </div>
              </MotionReveal>

              {/* Right Column: Indonesia Vector Network Map Card */}
              <MotionReveal delay={0.12} className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                  <div>
                    <p className="os-data-label">{t('operations.mapLabel', 'Peta Jaringan Nasional')}</p>
                    <h3 className="mt-0.5 font-display text-[1.2rem] font-[500] tracking-[-0.02em] text-[#171a22] dark:text-white">{t('operations.mapTitle', 'Titik Operasional Indonesia')}</h3>
                  </div>
                  <span className="os-pill os-pill--active">
                    <span className="os-pill__dot" aria-hidden="true"></span>
                    <span className="font-sans text-xs">{t('operations.mapBadge', '16 / 16 titik aktif')}</span>
                  </span>
                </div>

                {/* Indonesia operational coverage map */}
                <div className="overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0a0d14] p-2 sm:p-3">
                  <img
                    key={isDark ? 'home-map-dark' : 'home-map-light'}
                    src={isDark ? '/images/titik-aktif-dark.png' : '/images/indonesia-map.png'}
                    alt={t('operations.mapAlt', 'Peta Indonesia dengan 16 titik operasional')}
                    className="h-auto w-full object-contain transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                    width="1694"
                    height="929"
                  />
                </div>

                {/* Coverage Breakdown Grid */}
                <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50/80 dark:bg-[#131824] p-3 border border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">{t('operations.regions.jawa', 'Jawa')}</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22] dark:text-white">{t('operations.regions.jawaCount', '7 Titik')}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 dark:bg-[#131824] p-3 border border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">{t('operations.regions.jabodetabek', 'Jabodetabek')}</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22] dark:text-white">{t('operations.regions.jabodetabekCount', '3 Titik')}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 dark:bg-[#131824] p-3 border border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">{t('operations.regions.sumatera', 'Sumatera')}</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22] dark:text-white">{t('operations.regions.sumateraCount', '5 Titik')}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 dark:bg-[#131824] p-3 border border-slate-100 dark:border-slate-800/80">
                    <p className="os-data-label">{t('operations.regions.sulawesi', 'Sulawesi')}</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22] dark:text-white">{t('operations.regions.sulawesiCount', '1 Titik')}</p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* 5. BUDAYA KERJA */}
        <section className="relative overflow-hidden border-b border-[#dbe5f5] dark:border-slate-800 bg-[#f6f9fd] dark:bg-[#0b0f19]">
          <CultureSystemBackdrop />
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16 lg:items-start">

              {/* LEFT */}
              <div className="lg:pt-2 lg:sticky lg:top-8">
                <MotionReveal>
                  <p className="lc-eyebrow">{t('culture.eyebrow', 'Budaya kerja')}</p>
                  <h2 className="mt-3 max-w-[13ch] font-display text-[clamp(2.2rem,4vw,3.5rem)] font-[500] leading-[0.96] tracking-[-0.035em] text-[#171a22] dark:text-white">
                    {t('culture.heading', 'Budaya yang menggerakkan kerja.')}
                  </h2>
                  <p className="mt-4 max-w-[28rem] text-[1rem] leading-7 text-[#596171] dark:text-slate-300">
                    {t('culture.desc', 'Lima prinsip dan empat motivasi yang memberi arah dalam keputusan sehari-hari.')}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <MotionButton>
                      <Link to="/career" className="os-btn os-btn--primary w-full sm:w-auto">
                        {t('culture.ctaCareer', 'Buka halaman karier')}
                      </Link>
                    </MotionButton>
                    <MotionButton>
                      <Link to="/about" className="os-btn os-btn--secondary w-full sm:w-auto">
                        {t('culture.ctaCulture', 'Pelajari budaya JUJUR')}
                      </Link>
                    </MotionButton>
                  </div>
                </MotionReveal>
              </div>

              {/* RIGHT */}
              <MotionReveal delay={0.1} className="min-w-0 flex flex-col gap-4 sm:gap-6">

                {/* Label row 1 */}
                <div className="flex items-center gap-3 px-1">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#0062FF] dark:text-blue-400">{t('culture.principlesLabel', 'Lima Prinsip JUJUR')}</span>
                  <span className="flex-1 h-px bg-[#d8e4f5] dark:bg-slate-800" aria-hidden="true" />
                  <span className="text-[0.68rem] font-medium text-slate-400 dark:text-slate-500">{t('culture.principlesSub', 'Core Values')}</span>
                </div>

                {/* Row 1 — Prinsip JUJUR */}
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                  <div className="flex w-max animate-culture-marquee [will-change:transform] motion-reduce:[animation:none]" style={{ animation: 'culture-marquee 28s linear infinite' }}>
                    <div className="flex">
                      {jujurPrinciples.map((item) => (
                        <div key={`pa-${item.id}`} className="group relative flex flex-col justify-between w-[180px] sm:w-[220px] min-h-[140px] sm:min-h-[160px] p-5 sm:p-8 border-r border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] hover:bg-[#0062FF] dark:hover:bg-[#0062FF] transition-colors duration-300 cursor-default">
                          <span aria-hidden="true" className="absolute right-4 top-4 font-sans text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.06em] text-slate-200 dark:text-slate-700 group-hover:text-white/20 transition-colors duration-300">{item.id}</span>
                          <p className="text-[0.65rem] sm:text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400 group-hover:text-white/70 transition-colors duration-300">{t('culture.principlesPrefix', 'Prinsip')}</p>
                          <h3 className="mt-4 sm:mt-6 text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] dark:text-white group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        </div>
                      ))}
                    </div>
                    <div className="flex" aria-hidden="true">
                      {jujurPrinciples.map((item) => (
                        <div key={`pb-${item.id}`} className="group relative flex flex-col justify-between w-[180px] sm:w-[220px] min-h-[140px] sm:min-h-[160px] p-5 sm:p-8 border-r border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] hover:bg-[#0062FF] dark:hover:bg-[#0062FF] transition-colors duration-300 cursor-default">
                          <span aria-hidden="true" className="absolute right-4 top-4 font-sans text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.06em] text-slate-200 dark:text-slate-700 group-hover:text-white/20 transition-colors duration-300">{item.id}</span>
                          <p className="text-[0.65rem] sm:text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400 group-hover:text-white/70 transition-colors duration-300">{t('culture.principlesPrefix', 'Prinsip')}</p>
                          <h3 className="mt-4 sm:mt-6 text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] dark:text-white group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Label row 2 */}
                <div className="flex items-center gap-3 px-1">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#0062FF] dark:text-blue-400">{t('culture.motivationsLabel', 'Empat Motivasi Kerja')}</span>
                  <span className="flex-1 h-px bg-[#d8e4f5] dark:bg-slate-800" aria-hidden="true" />
                  <span className="text-[0.68rem] font-medium text-slate-400 dark:text-slate-500">{t('culture.motivationsSub', 'Driver Model')}</span>
                </div>

                {/* Row 2 — Motivasi — reverse */}
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                  <div className="flex w-max animate-culture-marquee-reverse [will-change:transform] motion-reduce:[animation:none]" style={{ animation: 'culture-marquee-reverse 22s linear infinite' }}>
                    <div className="flex">
                      {workMotivations.map((item) => (
                        <div key={`ma-${item.id}`} className="group relative flex flex-col justify-between w-[180px] sm:w-[220px] min-h-[140px] sm:min-h-[160px] p-5 sm:p-8 border-r border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] hover:bg-[#0062FF] dark:hover:bg-[#0062FF] transition-colors duration-300 cursor-default">
                          <span aria-hidden="true" className="absolute right-4 top-4 font-sans text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.06em] text-slate-200 dark:text-slate-700 group-hover:text-white/20 transition-colors duration-300">{item.id}</span>
                          <p className="text-[0.65rem] sm:text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400 group-hover:text-white/70 transition-colors duration-300">{t('culture.motivationsPrefix', 'Motivasi')}</p>
                          <h3 className="mt-4 sm:mt-6 text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] dark:text-white group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        </div>
                      ))}
                    </div>
                    <div className="flex" aria-hidden="true">
                      {workMotivations.map((item) => (
                        <div key={`mb-${item.id}`} className="group relative flex flex-col justify-between w-[180px] sm:w-[220px] min-h-[140px] sm:min-h-[160px] p-5 sm:p-8 border-r border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] hover:bg-[#0062FF] dark:hover:bg-[#0062FF] transition-colors duration-300 cursor-default">
                          <span aria-hidden="true" className="absolute right-4 top-4 font-sans text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.06em] text-slate-200 dark:text-slate-700 group-hover:text-white/20 transition-colors duration-300">{item.id}</span>
                          <p className="text-[0.65rem] sm:text-[0.7rem] font-bold text-[#1d4ed8] dark:text-blue-400 group-hover:text-white/70 transition-colors duration-300">{t('culture.motivationsPrefix', 'Motivasi')}</p>
                          <h3 className="mt-4 sm:mt-6 text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] dark:text-white group-hover:text-white transition-colors duration-300">{item.title}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </MotionReveal>

            </div>
          </div>
        </section>

        {/* 6. AUDIENCE VALUE PROPOSITION */}
        <section className="lc-band bg-white dark:bg-[#0a0d14] dark:border-slate-800">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <MotionStagger className="mt-4 grid gap-0 border-y border-black/10 dark:border-slate-800 lg:grid-cols-3">
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative border-b border-black/10 dark:border-slate-800 bg-white dark:bg-[#0f131c] p-6 sm:p-8 lg:border-b-0 lg:border-r dark:lg:border-r-slate-800 h-full flex flex-col justify-between transition-colors hover:bg-slate-50/50 dark:hover:bg-[#131824]">
                  <div>
                    <span aria-hidden="true" className="absolute right-6 top-6 font-sans text-[2.2rem] font-bold tracking-[-0.06em] text-slate-300 dark:text-slate-700">01</span>
                    <p className="os-data-label text-[#1d4ed8] dark:text-blue-400 font-bold">{t('audiences.card1.label', 'Partner')}</p>
                    <h3 className="mt-8 text-balance text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22] dark:text-white">{t('audiences.card1.title', 'Struktur kolaborasi yang cepat terbaca')}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#556070] dark:text-slate-300">{t('audiences.card1.desc', 'Anda melihat peran unit dan jalur kerja sama tanpa membuka banyak halaman.')}</p>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              <MotionStaggerItem className="h-full">
                <MotionCard className="relative border-b border-black/10 dark:border-slate-800 bg-[#f8fbff] dark:bg-[#131824] p-6 sm:p-8 lg:border-b-0 lg:border-r dark:lg:border-r-slate-800 h-full flex flex-col justify-between transition-colors hover:bg-[#f3f7fe] dark:hover:bg-[#182030]">
                  <div>
                    <span aria-hidden="true" className="absolute right-6 top-6 font-sans text-[2.2rem] font-bold tracking-[-0.06em] text-blue-200 dark:text-blue-900/60">02</span>
                    <p className="os-data-label text-[#1d4ed8] dark:text-blue-400 font-bold">{t('audiences.card2.label', 'Calon Karyawan')}</p>
                    <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22] dark:text-white">{t('audiences.card2.title', 'Budaya kerja yang konkret')}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#556070] dark:text-slate-300">{t('audiences.card2.desc', 'Tim menerjemahkan JUJUR dan empat motivasi menjadi perilaku kerja nyata.')}</p>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              <MotionStaggerItem className="h-full">
                <MotionCard className="relative bg-white dark:bg-[#0f131c] p-6 sm:p-8 h-full flex flex-col justify-between transition-colors hover:bg-slate-50/50 dark:hover:bg-[#131824]">
                  <div>
                    <span aria-hidden="true" className="absolute right-6 top-6 font-sans text-[2.2rem] font-bold tracking-[-0.06em] text-slate-300 dark:text-slate-700">03</span>
                    <p className="os-data-label text-[#1d4ed8] dark:text-blue-400 font-bold">{t('audiences.card3.label', 'Publik Umum')}</p>
                    <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22] dark:text-white">{t('audiences.card3.title', 'Organisasi yang tertib')}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#556070] dark:text-slate-300">{t('audiences.card3.desc', 'Struktur informasi dan bahasa visual menunjukkan perusahaan yang rapi.')}</p>
                  </div>
                </MotionCard>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section className="bg-[#f6f9fd] dark:bg-[#0b0f19] dark:border-t dark:border-slate-800">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">{t('contactCta.eyebrow', 'Hubungi Ocean Space')}</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22] dark:text-white">
                {t('contactCta.heading', 'Bicarakan kemitraan, ekspansi, atau rekrutmen dengan tim kami.')}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070] dark:text-slate-300">
                {t('contactCta.desc', 'Kirim kebutuhan korporat atau peluang kerja sama lewat jalur kontak yang sama.')}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MotionButton>
                  <Link to="/contact" className="os-btn os-btn--primary">{t('contactCta.ctaCorporate', 'Hubungi tim korporat')}</Link>
                </MotionButton>
                <MotionButton>
                  <Link to="/career" className="os-btn os-btn--secondary">{t('contactCta.ctaCareers', 'Lihat peluang karier')}</Link>
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

export default Home;
