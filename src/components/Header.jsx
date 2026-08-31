import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();
  const { t } = useTranslation('common');
  const currentPath = (location.pathname || '/').replace(/\/+$/, '') || '/';

  const navItems = [
    { href: '/', label: t('nav.home', 'Beranda') },
    { href: '/about', label: t('nav.about', 'Tentang') },
    { href: '/distribusi', label: t('nav.distribution', 'HP Distribusi') },
    { href: '/retail', label: t('nav.retail', 'Retail') },
    { href: '/sub-retail', label: t('nav.subRetail', 'Sub Retail') },
    { href: '/lifestyle', label: t('nav.lifestyle', 'Lifestyle') },
  ];

  const isNavActive = (href) => {
    if (href === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  const isCareerActive = currentPath === '/career' || currentPath === '/career-apply';
  const isContactActive = currentPath === '/contact';

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white transition-colors duration-200 shadow-[0_1px_0_rgba(15,23,42,0.03)] dark:border-slate-800 dark:bg-[#0a0d14]">
      <div className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-3 sm:gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
        <Link to="/" className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center" aria-label={t('nav.logoAriaLabel', 'Beranda Ocean Space')}>
          <img
            key={isDark ? 'header-logo-dark' : 'header-logo-light'}
            src={isDark ? '/images/logo-dark-new.png' : '/images/logo-color.png'}
            alt="Logo Ocean Space"
            className={isDark ? 'h-11 w-auto sm:h-12' : 'h-7 w-auto sm:h-8'}
            style={isDark ? { mixBlendMode: 'screen' } : { mixBlendMode: 'multiply' }}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Mobile Actions: LanguageSwitcher + ThemeToggle + Menu Button */}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2 lg:hidden">
          <LanguageSwitcher compact={true} />
          <ThemeToggle compact={true} />
          <button
            type="button"
            data-menu-toggle
            aria-expanded="false"
            aria-controls="mobile-nav"
            className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] px-3 py-1.5 text-xs font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/30 hover:text-[#1d4ed8] dark:border-slate-700 dark:bg-[#131824] dark:text-slate-200 dark:hover:border-blue-500"
          >
            {t('nav.menu', 'Menu')}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="mx-auto hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-6" aria-label={t('nav.ariaLabel', 'Navigasi utama')}>
          {navItems.map((item) => {
            const isActive = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                data-header-nav
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] transition-colors hover:text-[#1d4ed8] dark:hover:text-[#60a5fa] ${
                  isActive
                    ? 'font-semibold text-[#1d4ed8] dark:text-[#60a5fa]'
                    : 'font-medium text-[#556070] dark:text-slate-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/career"
            data-header-action="secondary"
            aria-current={isCareerActive ? 'page' : undefined}
            className={`inline-flex min-h-[44px] items-center justify-center rounded-lg border px-4 text-[0.84rem] leading-[1.1] transition-colors ${
              isCareerActive
                ? 'border-[#2563eb]/35 bg-[#eef4ff] font-semibold text-[#1d4ed8] dark:border-blue-500/40 dark:bg-blue-950/50 dark:text-blue-400'
                : 'border-[#d4dbe6] bg-[#f7f9fc] font-medium text-[#243041] hover:border-[#2563eb]/35 hover:text-[#1d4ed8] dark:border-slate-700 dark:bg-[#131824] dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400'
            }`}
          >
            {t('actions.career', 'Karier')}
          </Link>
          <Link
            to="/contact"
            data-header-action="primary"
            aria-current={isContactActive ? 'page' : undefined}
            className={`inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 text-[0.84rem] font-medium leading-[1.1] text-white transition-colors ${
              isContactActive ? 'bg-[#1d4ed8] font-semibold' : 'bg-[#2563eb] hover:bg-[#1d4ed8]'
            }`}
          >
            {t('actions.contact', 'Kontak')}
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <nav
        id="mobile-nav"
        data-mobile-nav
        className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] transition-colors dark:border-slate-800 dark:bg-[#0a0d14] lg:hidden"
        aria-label={t('nav.mobileAriaLabel', 'Navigasi utama mobile')}
      >
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
          {navItems.map((item) => {
            const isActive = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                data-mobile-link
                aria-current={isActive ? 'page' : undefined}
                className={`block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#eef4ff] text-[#1d4ed8] dark:bg-blue-950/50 dark:text-blue-400'
                    : 'text-[#556070] hover:bg-[#eef4ff] hover:text-[#1d4ed8] dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/career"
            data-mobile-link
            aria-current={isCareerActive ? 'page' : undefined}
            className={`block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              isCareerActive
                ? 'bg-[#eef4ff] text-[#1d4ed8] dark:bg-blue-950/50 dark:text-blue-400'
                : 'text-[#556070] hover:bg-[#eef4ff] hover:text-[#1d4ed8] dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400'
            }`}
          >
            {t('actions.career', 'Karier')}
          </Link>
          <Link
            to="/contact"
            data-mobile-link
            aria-current={isContactActive ? 'page' : undefined}
            className={`block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              isContactActive
                ? 'bg-[#eef4ff] text-[#1d4ed8] dark:bg-blue-950/50 dark:text-blue-400'
                : 'text-[#556070] hover:bg-[#eef4ff] hover:text-[#1d4ed8] dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400'
            }`}
          >
            {t('actions.contact', 'Kontak')}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
