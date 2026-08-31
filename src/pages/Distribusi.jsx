import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  MapPinIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import React, { useState } from 'react';
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

const DEPO_DATA = [
  // Jabodetabek & Banten (4)
  {
    region: 'jabodetabek',
    name: 'Kantor Pusat Jakarta (PIK)',
    address: 'Rukan Golf Island Blok I (RGII) No. 27–28, Jl. Pantai Indah Kapuk, Jakarta Utara 14460 (Samping Nanami Delight)',
    up: 'Mas Risyatul Fadhly',
  },
  {
    region: 'jabodetabek',
    name: 'Depo Jakarta Prima Center',
    address: 'Prima Center 2 Blok B.6, Jl. Pool PPD Jl. Pesing Poglar No. 2, Kedaung Kali Angke, Cengkareng, Jakarta Barat 11710',
    up: 'Faisal',
  },
  {
    region: 'jabodetabek',
    name: 'Gudang Dadap Tangerang',
    address: 'Pergudangan Pantai Indah Dadap Blok HA No. 12, Kel. Dadap, Kec. Kosambi, Kab. Tangerang, Banten',
    up: 'Operasional Gudang',
  },
  {
    region: 'jabodetabek',
    name: 'Treanly Logistik Dadap',
    address: 'Jl. Raya Prancis, Pergudangan PID Blok HA No. 9/10, Kel. Dadap, Kec. Kosambi, Tangerang, Banten',
    up: 'Supri',
  },

  // Jawa (5)
  {
    region: 'jawa',
    name: 'Kantor Operasional Cirebon',
    address: 'Jl. Tuparev No. 109F, Kel. Kertawinangun, Kec. Kedawung, Cirebon, Jawa Barat 45153',
    up: 'Wili Juliana',
  },
  {
    region: 'jawa',
    name: 'Depo Cirebon Aksesoris',
    address: 'Jl. Tentara Pelajar No. 72B&C, Kejaksan, Kesambi, Kota Cirebon, Jawa Barat 45131',
    up: 'Toni Sulaiman',
  },
  {
    region: 'jawa',
    name: 'Depo Bandung',
    address: 'Jl. Mangga No. 33, Kel. Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat',
    up: 'Sindhu Bimantara',
  },
  {
    region: 'jawa',
    name: 'Depo Semarang',
    address: 'Jl. Taman Ketapang EA 3, Pedurungan Lor, Semarang, Jawa Tengah 50197',
    up: 'Anna',
  },
  {
    region: 'jawa',
    name: 'Depo Purwokerto (CV Top Selular)',
    address: 'Perumahan Bumi Arca Indah No. 5B Blok Raya, Purwokerto, Jawa Tengah',
    up: 'Ramadhan',
  },

  // Sumatera (5)
  {
    region: 'sumatera',
    name: 'Depo Palembang',
    address: 'Perumahan Yuka Residence Blok D No. 8, Kel. Suka Maju, Kec. Sako, Kota Palembang, Sumatera Selatan 30164',
    up: 'Cepra',
  },
  {
    region: 'sumatera',
    name: 'Depo Padang',
    address: 'Komplek Belanti Permai 1 Blok A No. 7, Kel. Lapai Nanggalo, Kec. Nanggalo, Kota Padang, Sumatera Barat 25142',
    up: 'Anugrah Awan',
  },
  {
    region: 'sumatera',
    name: 'Depo Pekanbaru',
    address: 'Jl. Tengku Bey 2, Perum Villa Anggrek Mas 3 Blok H 6, Kel. Air Dingin, Kec. Bukit Raya, Kota Pekanbaru, Riau',
    up: 'Bayu Mudinda',
  },
  {
    region: 'sumatera',
    name: 'Depo Jambi',
    address: 'Jl. Matahari I No. 05 RT.09, Kel. Selamat, Kec. Danau Sipin, Kota Jambi, Jambi',
    up: 'Denny',
  },
  {
    region: 'sumatera',
    name: 'Depo Bengkulu',
    address: 'Jl. Flamboyan Raya RT.4 RW.2, Kel. Kebun Kenanga, Kec. Ratu Agung, Kota Bengkulu (Ruko Vista Zone), Bengkulu',
    up: 'Reman',
  },

  // Sulawesi & Timur (3)
  {
    region: 'sulawesi',
    name: 'PT MSI Depo Makassar',
    address: 'Perumahan Royal Spring, Jl. Tun Abdul Razak Blok D7 No. 32, Kel. Samata, Kec. Somba Opu, Kab. Gowa, Makassar, Sulawesi Selatan',
    up: 'Madi',
  },
  {
    region: 'sulawesi',
    name: 'PT MSI Depo Palu',
    address: 'Perumahan Dewi Sartika Blok D1, Birobuli Selatan (Depan SMAN 3 Palu), Palu Selatan, Kota Palu, Sulawesi Tengah',
    up: 'Abyan',
  },
  {
    region: 'sulawesi',
    name: 'PT MSI Depo Manado',
    address: 'Cluster Eden Bridge Blok EB 05 No. 06, Perumahan Citraland, Desa Winangun Atas, Kec. Pineleng, Kab. Minahasa, Manado, Sulawesi Utara',
    up: 'Ramadhan',
  },
];

const Distribusi = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('all');
  const { t } = useTranslation(['distribusi', 'common']);

  const tabs = [
    { id: 'all', label: t('directory.tabs.all', 'Semua'), count: 17 },
    { id: 'jabodetabek', label: t('directory.tabs.jabodetabek', 'Jabodetabek'), count: 4 },
    { id: 'jawa', label: t('directory.tabs.jawa', 'Jawa'), count: 5 },
    { id: 'sumatera', label: t('directory.tabs.sumatera', 'Sumatera'), count: 5 },
    { id: 'sulawesi', label: t('directory.tabs.sulawesi', 'Sulawesi & Timur'), count: 3 },
  ];

  const visibleDepos = activeTab === 'all'
    ? DEPO_DATA
    : DEPO_DATA.filter((d) => d.region === activeTab);

  const missions = t('missions.items', { returnObjects: true }) || [];
  const pillars = t('pillars.items', { returnObjects: true }) || [];

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden border-b border-black/10 bg-white sm:min-h-[88vh]">
          <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 pt-28 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col items-center text-center max-w-[54rem] mx-auto">
              
              <MotionReveal yOffset={25} className="flex flex-col items-center">
                <p className="lc-eyebrow text-center">{t('hero.eyebrow', 'Unit Bisnis: HP Distribusi')}</p>

                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.25rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22] text-center">
                  {t('hero.headingPart1', 'Menjadi perusahaan distribusi terpercaya dengan satu standar ')}
                  <span className="relative text-[#1d4ed8]">
                    {t('hero.headingHighlight', 'eksekusi')}
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>
                  {t('hero.headingPart2', '.')}
                </h1>

                <p className="mt-5 max-w-[36rem] text-[1.05rem] leading-relaxed text-[#556070] text-center mx-auto">
                  {t('hero.desc', 'Penyalur resmi handphone dan perangkat teknologi skala nasional.')}
                </p>

                {/* Brand Shelf */}
                <div className="mt-8 w-full" aria-label="Entitas unit HP Distribusi">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 text-center">
                    {t('hero.entitiesLabel', 'Entitas operasional resmi')}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-media-selular-indonesia.png"
                        alt="Logo PT. Media Selular Indonesia"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Media Selular Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-satu-media-indonesia.png"
                        alt="Logo PT. Satu Media Indonesia"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Satu Media Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-cv-top-selular.png"
                        alt="Logo CV. Top Selular"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">CV. Top Selular</span>
                    </div>
                  </div>
                </div>

                {/* Hero Action Buttons */}
                <div className="lc-hero-actions mt-8 flex flex-wrap items-center justify-center gap-4">
                  <MotionButton>
                    <Link to="/contact" className="os-btn os-btn--primary">
                      <span>{t('hero.ctaCorporate', 'Hubungi tim korporat')}</span>
                      <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </Link>
                  </MotionButton>
                  <MotionButton>
                    <Link to="/career" className="button-secondary">
                      {t('hero.ctaCareers', 'Lihat peluang karier')}
                    </Link>
                  </MotionButton>
                </div>
              </MotionReveal>

              {/* Highlights */}
              <MotionReveal delay={0.15} yOffset={30} className="w-full mt-16 pt-12 border-t border-slate-100 max-w-[48rem]">
                <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">{t('hero.stats.dealers', '5000+')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.dealersLabel', 'Mitra Dealer Aktif')}</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1d4ed8]">{t('hero.stats.sla', '99.4%')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.slaLabel', 'SLA Transaksi Penyaluran')}</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">{t('hero.stats.entities', '3 Lini')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.entitiesLabel', 'Entitas Resmi Terdaftar')}</p>
                  </div>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. JARINGAN & DIREKTORI DEPO */}
        {/* ========================================================================= */}
        <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
              
              {/* Kolom Kiri: Ringkasan & Peta */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{t('directory.eyebrow', 'Jaringan Distribusi')}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#171a22] sm:text-3xl">
                  {t('directory.heading', '17 Titik Kantor & Depo Wilayah')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t('directory.desc', 'Melayani pasokan toko dan mitra ritel melalui jaringan kantor pusat, gudang, dan depo regional...')}
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-[#131824]">
                  <img
                    key={isDark ? 'dist-map-dark' : 'dist-map-light'}
                    src={isDark ? '/images/titik-aktif-dark.png' : '/images/indonesia-map.png'}
                    alt={t('directory.mapAlt', 'Peta Jaringan Distribusi Ocean Space')}
                    className="h-auto w-full object-contain transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                    width="1694"
                    height="929"
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <span className="block text-lg font-bold text-[#171a22]">{t('directory.regionsSummary.jabodetabek', '4 Titik')}</span>
                    <span className="text-xs text-slate-500">{t('directory.regionsSummary.jabodetabekLabel', 'Jabodetabek')}</span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <span className="block text-lg font-bold text-[#171a22]">{t('directory.regionsSummary.jawa', '5 Depo')}</span>
                    <span className="text-xs text-slate-500">{t('directory.regionsSummary.jawaLabel', 'Jawa')}</span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <span className="block text-lg font-bold text-[#171a22]">{t('directory.regionsSummary.sumatera', '5 Hub')}</span>
                    <span className="text-xs text-slate-500">{t('directory.regionsSummary.sumateraLabel', 'Sumatera')}</span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <span className="block text-lg font-bold text-[#171a22]">{t('directory.regionsSummary.sulawesi', '3 Hub')}</span>
                    <span className="text-xs text-slate-500">{t('directory.regionsSummary.sulawesiLabel', 'Sulawesi')}</span>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Tab & Daftar Alamat Langsung */}
              <div>
                {/* Tab Filter */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        activeTab === tab.id
                          ? 'bg-[#1d4ed8] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                      }`}
                    >
                      {tab.label} <span className="opacity-80">({tab.count})</span>
                    </button>
                  ))}
                </div>

                {/* List of items */}
                <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                  {visibleDepos.map((depo, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:border-slate-300"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-bold text-[#171a22] leading-snug">
                          {depo.name}
                        </h3>
                        {depo.up && (
                          <span className="text-[0.72rem] text-slate-500 font-medium shrink-0 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                            {t('directory.pic', { name: depo.up, defaultValue: `PIC: ${depo.up}` })}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {depo.address}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LIMA MISI / PRINSIP OPERASIONAL */}
        {/* ========================================================================= */}
        <section className="lc-band bg-white">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">{t('missions.eyebrow', 'Prinsip Operasional')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  {t('missions.heading', 'Lima misi utama HP Distribusi.')}
                </h2>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {missions.map((misi, idx) => {
                const isLast = idx === 4;
                return (
                  <MotionStaggerItem key={misi.id} className={`h-full ${isLast ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                    <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                          <span className="os-data-label text-[#1d4ed8]">{t('missions.missionPrefix', 'Misi')} {misi.id}</span>
                          <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">{misi.id}</span>
                        </div>
                        <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                          {misi.title}
                        </h3>
                        <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                          {misi.desc}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{misi.badge}</span>
                      </div>
                    </MotionCard>
                  </MotionStaggerItem>
                );
              })}
            </MotionStagger>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PILAR KAPABILITAS BISNIS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_80%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">{t('pillars.eyebrow', 'Kapabilitas Bisnis')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  {t('pillars.heading', 'Empat pilar utama operasional distribusi.')}
                </h2>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pilar, idx) => (
                <MotionStaggerItem key={pilar.id} className="h-full">
                  <MotionCard className={`relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 ${idx < 3 ? 'sm:border-r' : ''} transition-colors hover:bg-[#1d4ed8] group`}>
                    <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">{pilar.id}</span>
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">{pilar.tag}</p>
                      <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">{pilar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                        {pilar.desc}
                      </p>
                    </div>
                    <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">{pilar.detail}</p>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CLOSING CTA SECTION */}
        {/* ========================================================================= */}
        <section className="bg-white">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">{t('closingCta.eyebrow', 'Langkah berikutnya')}</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22]">
                {t('closingCta.heading', 'Hubungi tim Ocean Space.')}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">
                {t('closingCta.desc', 'Buka halaman kontak atau lihat lowongan yang sedang dibuka.')}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MotionButton>
                  <Link to="/contact" className="os-btn os-btn--primary">
                    <span>{t('closingCta.ctaCorporate', 'Hubungi tim korporat')}</span>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </Link>
                </MotionButton>
                <MotionButton>
                  <Link to="/career" className="os-btn os-btn--secondary">
                    <span>{t('closingCta.ctaCareers', 'Lihat peluang karier')}</span>
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

export default Distribusi;