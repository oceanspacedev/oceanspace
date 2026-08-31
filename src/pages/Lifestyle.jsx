import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
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

const Lifestyle = () => {
  const { t } = useTranslation(['lifestyle', 'common']);

  const highlights = t('visionMission.highlights', { returnObjects: true }) || [];
  const missions = t('missions.items', { returnObjects: true }) || [];
  const pillars = t('coreVision.pillars', { returnObjects: true }) || [];

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              {/* Sisi Kiri: Content, Highlight Text, Brand Shelf */}
              <MotionReveal yOffset={25} className="lc-hero-copy max-w-[42rem]">
                <p className="lc-eyebrow">{t('hero.eyebrow', 'Unit Bisnis: Lifestyle')}</p>

                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.25rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22]">
                  {t('hero.headingPart1', 'Mengembangkan unit lifestyle dan ')}
                  <span className="relative text-[#1d4ed8]">
                    {t('hero.headingHighlight', 'layanan terpadu')}
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>
                  {t('hero.headingPart2', '.')}
                </h1>

                <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-relaxed text-[#556070]">
                  {t('hero.desc', 'Menjadi kelompok usaha lifestyle nasional yang dipercaya, memberikan pengalaman berkualitas, dan bertumbuh secara sehat melalui kejujuran serta kinerja unggul.')}
                </p>

                {/* Brand Shelf / Entitas Operasional */}
                <div className="mt-8 w-full" aria-label="Entitas unit Lifestyle">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                    {t('hero.entitiesLabel', 'Entitas operasional resmi')}
                  </p>
                  <div className="mt-3 flex items-center gap-2 transition-all duration-300">
                    <img
                      src="/images/unit-mari-sukses-gemilang.svg"
                      alt="Logo PT. Mari Sukses Gemilang"
                      className="h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-slate-500">PT. Mari Sukses Gemilang</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="lc-hero-actions mt-8 flex flex-wrap items-center gap-4">
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

              {/* Sisi Kanan: Premium Showcase Image */}
              <MotionReveal delay={0.15} yOffset={30} className="relative w-full max-w-[32rem] lg:max-w-none lg:pl-8">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg bg-slate-50 aspect-[4/3] w-full">
                  <img
                    src="/images/lifestyle_hero_cover.png"
                    alt={t('hero.heroAlt', 'Layanan Lifestyle Ocean Space')}
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </MotionReveal>
            </div>

          </div>
        </section>

        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              {/* Left Side: Title */}
              <MotionReveal className="max-w-[28rem] lg:sticky lg:top-24">
                <p className="lc-eyebrow">{t('visionMission.eyebrow', 'Visi & Misi')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  {t('visionMission.heading', 'Arah utama unit bisnis Lifestyle.')}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                  {t('visionMission.desc', 'Empat prinsip panduan utama yang mengarahkan pengembangan bisnis dan pelayanan kami.')}
                </p>
              </MotionReveal>

              {/* Right Side: Clean List without Cards/Diagram */}
              <MotionReveal delay={0.12} className="w-full">
                <div className="grid gap-8 sm:grid-cols-2">
                  {highlights.map((h, i) => (
                    <div key={i} className="border-t border-slate-200/80 pt-6">
                      <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">{h.id}</p>
                      <h3 className="mt-3 text-base font-semibold text-[#171a22]">{h.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                        {h.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="lc-band bg-white">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              {/* Left Side: Title */}
              <MotionReveal className="max-w-[28rem] lg:sticky lg:top-24">
                <p className="lc-eyebrow">{t('missions.eyebrow', 'Lima Misi')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  {t('missions.heading', 'Lima misi utama operasional.')}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                  {t('missions.desc', 'Komitmen dasar yang kami terapkan secara konsisten di setiap lini aktivitas lifestyle.')}
                </p>
              </MotionReveal>

              {/* Right Side: Clean List without Box Containers */}
              <MotionReveal delay={0.12} className="w-full">
                <div className="flex flex-col">
                  {missions.map((m) => (
                    <div key={m.id} className="group flex gap-6 border-b border-slate-100 py-6 first:pt-0 last:border-b-0">
                      <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">{m.id}</p>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <MotionReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-slate-200 pb-8">
              <div className="max-w-[42rem]">
                <p className="lc-eyebrow">{t('coreVision.eyebrow', 'Visi Utama')}</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  {t('coreVision.heading', 'Menjadi kelompok usaha lifestyle yang dipercaya.')}
                </h2>
              </div>
              <p className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">
                {t('coreVision.desc', 'Menghadirkan pelayanan jujur dan kinerja unggul untuk menjamin pertumbuhan yang sehat dan berkelanjutan.')}
              </p>
            </MotionReveal>

            <MotionStagger className="mt-12 grid gap-8 md:grid-cols-3">
              {pillars.map((p, i) => (
                <MotionStaggerItem key={i}>
                  <div className="border-l-2 border-blue-600/30 pl-6 transition-all duration-300 hover:border-blue-600">
                    <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">{p.tag}</p>
                    <h3 className="mt-3 text-[1.25rem] font-bold tracking-tight text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                      {p.desc}
                    </p>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </section>

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
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MotionButton>
                  <Link to="/contact" className="os-btn os-btn--primary">
                    {t('closingCta.ctaCorporate', 'Hubungi tim korporat')}
                  </Link>
                </MotionButton>
                <MotionButton>
                  <Link to="/career" className="button-secondary">
                    {t('closingCta.ctaCareers', 'Lihat peluang karier')}
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

export default Lifestyle;