import {
  ArrowUpRightIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';

const Retail = () => {
  const { t } = useTranslation(['retail', 'common']);

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
                <p className="lc-eyebrow text-center">{t('hero.eyebrow', 'Unit Bisnis: Retail')}</p>

                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.25rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22] text-center">
                  {t('hero.headingPart1', 'Menjadi retail handphone dan aksesoris yang paling dipercaya ')}
                  <span className="relative text-[#1d4ed8]">
                    {t('hero.headingHighlight', 'pelanggan')}
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>
                  {t('hero.headingPart2', '.')}
                </h1>

                <p className="mt-5 max-w-[36rem] text-[1.05rem] leading-relaxed text-[#556070] text-center mx-auto">
                  {t('hero.desc', 'Kejujuran dan pelayanan unggul, dengan pertumbuhan yang berkelanjutan di seluruh jaringan gerai retail handphone dan teknologi.')}
                </p>

                {/* Brand Shelf / Entitas Operasional */}
                <div className="mt-8 w-full" aria-label="Entitas unit Retail">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 text-center">
                    {t('hero.entitiesLabel', 'Entitas operasional resmi')}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-retail-indonesia-selalu-maju.png"
                        alt="Logo PT. Retail Indonesia Selalu Maju"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Retail Indonesia Selalu Maju</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-complete-solusi-nusantara.png"
                        alt="Logo PT. Complete Solusi Nusantara"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Complete Solusi Nusantara</span>
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

              {/* Typographic Highlights */}
              <MotionReveal delay={0.15} yOffset={30} className="w-full mt-16 pt-12 border-t border-slate-100 max-w-[48rem]">
                <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">{t('hero.stats.guarantee', '100%')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.guaranteeLabel', 'Garansi & Produk Asli')}</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1d4ed8]">{t('hero.stats.direct', 'Direct')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.directLabel', 'Pelayanan Retail Langsung')}</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">{t('hero.stats.lines', '2 Lini')}</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">{t('hero.stats.linesLabel', 'Operasi Resmi Terpadu')}</p>
                  </div>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. GERAI & TATA KELOLA RETAIL */}
        {/* ========================================================================= */}
        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <MotionReveal className="mx-auto max-w-[38rem] text-center">
              <p className="lc-eyebrow">{t('governance.eyebrow', 'Jaringan & Layanan Gerai')}</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                {t('governance.heading', 'Standar pelayanan konsisten di setiap titik toko.')}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                {t('governance.desc', 'Menghadirkan pengalaman belanja handphone dan aksesori yang nyaman, terpercaya, dan transparan bagi pelanggan.')}
              </p>
            </MotionReveal>

            {/* 4-Column Summary Bar */}
            <MotionReveal delay={0.12} className="mt-10 max-w-[44rem] mx-auto grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-4 text-center">
              <div>
                <p className="os-data-label">{t('governance.bar.principle', 'Prinsip Belanja')}</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">{t('governance.bar.principleVal', 'JUJUR')}</p>
                <p className="mt-0.5 text-xs text-[#596171]">{t('governance.bar.principleSub', 'Harga transparan')}</p>
              </div>
              <div>
                <p className="os-data-label">{t('governance.bar.product', 'Jaminan Produk')}</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">{t('governance.bar.productVal', '100% Asli')}</p>
                <p className="mt-0.5 text-xs text-[#596171]">{t('governance.bar.productSub', 'Garansi resmi brand')}</p>
              </div>
              <div>
                <p className="os-data-label">{t('governance.bar.afterSales', 'Purna Jual')}</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#1d4ed8]">{t('governance.bar.afterSalesVal', 'Tuntas')}</p>
                <p className="mt-0.5 text-xs text-[#596171]">{t('governance.bar.afterSalesSub', 'Dukungan klaim garansi')}</p>
              </div>
              <div>
                <p className="os-data-label">{t('governance.bar.quality', 'Kualitas Layanan')}</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">{t('governance.bar.qualityVal', 'Unggul')}</p>
                <p className="mt-0.5 text-xs text-[#596171]">{t('governance.bar.qualitySub', 'Tim profesional')}</p>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LIMA MISI RETAIL */}
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
                  {t('missions.heading', 'Lima misi utama unit Retail.')}
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[26rem] text-[0.98rem] leading-7 text-[#596171]">
                {t('missions.subtitle', 'Komitmen kejujuran, garansi resmi, dan pelayanan pelanggan unggul di setiap gerai.')}
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
                  {t('pillars.heading', 'Empat pilar utama operasional retail.')}
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">
                {t('pillars.subtitle', 'Standar pelayanan, jaminan produk asli, dan purna jual yang mengutamakan kepuasan pelanggan.')}
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

export default Retail;