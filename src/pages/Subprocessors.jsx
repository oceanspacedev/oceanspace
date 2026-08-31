import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Subprocessors = () => {
  const { t } = useTranslation(['legal', 'common']);

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <p data-motion-enter="eyebrow" className="lc-eyebrow">{t('subprocessors.eyebrow', 'Legal')}</p>
            <h1 data-motion-enter="heading" className="mt-4 max-w-[20ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
              {t('subprocessors.heading', 'Sub-processor dan Data Processing Agreement (DPA)')}
            </h1>
            <p data-motion-enter="summary" className="mt-5 max-w-[40rem] text-[1rem] leading-8 text-[#556070]">
              {t('subprocessors.summary', 'Pengungkapan sub-processor / data-processing yang digunakan Ocean Space untuk hosting situs dan proses rekrutmen.')}
            </p>
            <p data-motion-enter="meta" className="mt-3 text-sm text-[#708198]">{t('subprocessors.lastUpdated', 'Terakhir diperbarui: 22 Juli 2026')}</p>
          </div>
        </section>

        <section className="lc-band bg-[#f7f9fc]">
          <div data-motion-group="soft" className="lc-shell space-y-10 py-14 sm:py-16">
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('subprocessors.hosting.title', 'Hosting situs')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('subprocessors.hosting.desc', 'Infrastruktur web yang menayangkan oceanspace.co.id, termasuk aset statis dan pengiriman halaman. Tujuan: ketersediaan dan keamanan situs bagi pengunjung, mitra, serta kandidat.')}
              </p>
            </article>
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('subprocessors.recruitmentApi.title', 'API rekrutmen (Complete Selular / CESA)')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('subprocessors.recruitmentApi.desc', 'Layanan di')}{' '}
                <a href="https://cesa.completeselular.com" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4" target="_blank" rel="noopener noreferrer">cesa.completeselular.com</a>{' '}
                {t('subprocessors.recruitmentApi.descSuffix', 'mendukung daftar lowongan dan pengiriman lamaran. Tujuan: memproses data pelamar untuk seleksi dan komunikasi rekrutmen.')}
              </p>
            </article>
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('subprocessors.socialPlatforms.title', 'Platform sosial')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('subprocessors.socialPlatforms.desc', 'LinkedIn dan Instagram digunakan untuk informasi perusahaan dan karier. Interaksi di platform tersebut mengikuti kebijakan privasi masing-masing penyedia.')}
              </p>
            </article>
            <article className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('subprocessors.dpa.title', 'Data Processing Agreement')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('subprocessors.dpa.desc', 'Untuk pertanyaan DPA atau permintaan terkait data pribadi, hubungi Head Office melalui halaman')}{' '}
                <Link to="/contact" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4">{t('subprocessors.dpa.contactLink', 'Kontak')}</Link>{' '}
                {t('subprocessors.dpa.descMid', 'dan rujuk')}{' '}
                <Link to="/privacy" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4">{t('subprocessors.dpa.privacyLink', 'Kebijakan Privasi')}</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16">
            <p className="lc-eyebrow">{t('subprocessors.nextStep.eyebrow', 'Langkah berikutnya')}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/privacy" className="os-btn os-btn--primary">{t('subprocessors.nextStep.ctaPrivacy', 'Baca kebijakan privasi')}</Link>
              <Link to="/contact" className="button-secondary">{t('subprocessors.nextStep.ctaCorporate', 'Hubungi tim korporat')}</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Subprocessors;
