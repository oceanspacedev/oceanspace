import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Privacy = () => {
  const { t } = useTranslation(['legal', 'common']);

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 overflow-x-clip">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <p data-motion-enter="eyebrow" className="lc-eyebrow">{t('privacy.eyebrow', 'Legal')}</p>
            <h1 data-motion-enter="heading" className="mt-4 max-w-[18ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
              {t('privacy.heading', 'Kebijakan Privasi Ocean Space')}
            </h1>
            <p data-motion-enter="summary" className="mt-5 max-w-[40rem] text-[1rem] leading-8 text-[#556070]">
              {t('privacy.summary', 'Kebijakan ini menjelaskan bagaimana Ocean Space mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi pengunjung situs, mitra, serta pelamar karier.')}
            </p>
            <p data-motion-enter="meta" className="mt-3 text-sm text-[#708198]">{t('privacy.lastUpdated', 'Terakhir diperbarui: 22 Juli 2026')}</p>
          </div>
        </section>

        <section className="lc-band bg-[#f7f9fc]">
          <div data-motion-group="soft" className="lc-shell space-y-10 py-14 sm:py-16">
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('privacy.dataCollected.title', 'Data yang kami kumpulkan')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('privacy.dataCollected.desc', 'Data dapat mencakup identitas dan kontak yang Anda kirim melalui formulir...')}
              </p>
            </article>
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('privacy.purpose.title', 'Tujuan penggunaan')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('privacy.purpose.desc', 'Kami menggunakan data untuk merespons pertanyaan, memproses rekrutmen...')}
              </p>
            </article>
            <article data-motion-reveal="card" className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">
                {t('privacy.subprocessors.title', 'Sub-pemroses / pemrosesan data (DPA)')}
              </h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('privacy.subprocessors.desc', 'Untuk operasional situs dan rekrutmen, Ocean Space dapat menggunakan penyedia layanan pihak ketiga (sub-processor)...')}{' '}
                <a
                  href="https://cesa.completeselular.com"
                  className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cesa.completeselular.com
                </a>
                .
              </p>
            </article>
            <article className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('privacy.rights.title', 'Hak Anda')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('privacy.rights.desc', 'Anda dapat meminta akses, koreksi, atau penghapusan data pribadi dengan menghubungi Head Office melalui halaman kontak.')}
              </p>
            </article>
            <article className="os-card max-w-[42rem] p-6">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">{t('privacy.contact.title', 'Kontak')}</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                {t('privacy.contact.desc', 'Head Office: Jl. Pantai Maju Bersama RGII No. 27–28, Pantai Indah Kapuk, Jakarta Utara, 14460. Untuk pertanyaan privasi, gunakan saluran di halaman')}{' '}
                <Link to="/contact" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4">
                  {t('privacy.contact.contactLink', 'Kontak')}
                </Link>
                .
              </p>
            </article>
          </div>
        </section>

        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16">
            <p className="lc-eyebrow">{t('privacy.nextStep.eyebrow', 'Langkah berikutnya')}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="os-btn os-btn--primary"
              >
                {t('privacy.nextStep.ctaCorporate', 'Hubungi tim korporat')}
              </Link>
              <Link to="/" className="button-secondary">
                {t('privacy.nextStep.ctaHome', 'Kembali ke beranda')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
