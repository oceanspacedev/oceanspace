import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function LanguageSwitcher({ className = '', compact = false }) {
  const { i18n, t } = useTranslation('common');
  const currentLang = (i18n.language || 'id').startsWith('en') ? 'en' : 'id';

  const changeLanguage = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('oceanspace:languagechange', { detail: { lang } }));
      }
    }
  };

  return (
    <div
      role="group"
      aria-label={t('language.switchLanguage', 'Ganti bahasa')}
      className={`relative inline-flex items-center rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] p-0.5 text-xs font-semibold text-slate-600 transition-colors duration-200 dark:border-slate-700 dark:bg-[#131824] dark:text-slate-300 ${className}`}
    >
      {/* Button ID */}
      <button
        type="button"
        onClick={() => changeLanguage('id')}
        aria-pressed={currentLang === 'id'}
        aria-label="Bahasa Indonesia"
        className={`relative z-10 inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[0.75rem] font-bold tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] ${
          currentLang === 'id'
            ? 'text-[#1d4ed8] dark:text-blue-400'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
      >
        {currentLang === 'id' && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 z-[-1] rounded-md bg-white shadow-xs dark:bg-slate-800"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        ID
      </button>

      {/* Button EN */}
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-pressed={currentLang === 'en'}
        aria-label="English"
        className={`relative z-10 inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[0.75rem] font-bold tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] ${
          currentLang === 'en'
            ? 'text-[#1d4ed8] dark:text-blue-400'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
      >
        {currentLang === 'en' && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 z-[-1] rounded-md bg-white shadow-xs dark:bg-slate-800"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        EN
      </button>
    </div>
  );
}
