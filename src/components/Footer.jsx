import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-[#d8e0ec] bg-white text-[#121826] dark:border-slate-800 dark:bg-[#05070a] dark:text-slate-100">
      <div className="lc-shell py-14 sm:py-16">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="pb-10 lg:border-r lg:border-black/10 lg:pb-0 lg:pr-12 dark:lg:border-slate-800">
            <p className="lc-eyebrow">{t('footer.eyebrow', 'Terhubung dengan Ocean Space')}</p>
            <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868] dark:text-slate-400">
              {t('footer.tagline', 'Distribusi, retail, sub retail, dan lifestyle. Empat unit, satu standar operasi.')}
            </p>
            <div className="mt-8 border-t border-black/10 pt-5 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <a
                  href="https://www.linkedin.com/company/ocean-space-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8] dark:text-slate-300 dark:hover:text-blue-400"
                >
                  LinkedIn
                  <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb] dark:text-blue-400" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/oceanspace.career/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8] dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Instagram
                  <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb] dark:text-blue-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 lg:pl-12 lg:pt-0">
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
              <div>
                <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22] dark:text-white">
                  {t('footer.company', 'Perusahaan')}
                </h3>
                <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171] dark:text-slate-400">
                  <li><Link to="/" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.home', 'Beranda')}</Link></li>
                  <li><Link to="/about" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.about', 'Tentang')}</Link></li>
                  <li><Link to="/career" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.career', 'Karier')}</Link></li>
                  <li><Link to="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.contact', 'Kontak')}</Link></li>
                  <li><Link to="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.privacy', 'Kebijakan Privasi')}</Link></li>
                  <li><Link to="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.subprocessors', 'Sub-processor / DPA')}</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22] dark:text-white">
                  {t('footer.businessUnits', 'Unit Bisnis')}
                </h3>
                <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171] dark:text-slate-400">
                  <li><Link to="/distribusi" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.distribution', 'HP Distribusi')}</Link></li>
                  <li><Link to="/retail" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.retail', 'Retail')}</Link></li>
                  <li><Link to="/sub-retail" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.subRetail', 'Sub Retail')}</Link></li>
                  <li><Link to="/lifestyle" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.lifestyle', 'Lifestyle')}</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22] dark:text-white">
                  {t('footer.operations', 'Operasional')}
                </h3>
                <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171] dark:text-slate-400">
                  <li className="flex min-h-[44px] items-center">{t('footer.operationalPoints', '16 Titik Operasional')}</li>
                  <li className="flex min-h-[44px] items-center">{t('footer.activeDepos', '16 Depo Aktif')}</li>
                  <li className="flex min-h-[44px] items-center">{t('footer.regionClusters', '4 Klaster Wilayah')}</li>
                  <li><Link to="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('actions.viewLocationDetails', 'Lihat Detail Lokasi')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 dark:border-slate-800">
          <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright', 'Ocean Space | Tumbuh dengan Integritas, Melaju dengan Eksekusi.')}</p>
            <div className="flex flex-wrap items-center gap-6 sm:justify-end">
              <Link to="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.privacy', 'Kebijakan Privasi')}</Link>
              <Link to="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.subprocessors', 'Sub-processor / DPA')}</Link>
              <a href="/sitemap.xml" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400">{t('nav.sitemap', 'Jelajahi Sitemap')}</a>
              <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af] dark:hover:text-blue-400" target="_blank" rel="noopener noreferrer">{t('footer.developerCredit', 'Dibuat oleh Web App Developer')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
