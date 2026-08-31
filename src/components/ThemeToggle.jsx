import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      className={`group relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-1 ${
        isDark
          ? 'border-slate-700 bg-[#131824] text-slate-300 hover:border-blue-500/40 hover:bg-slate-800 hover:text-blue-300 focus-visible:ring-offset-[#0a0d14]'
          : 'border-[#d4dbe6] bg-[#f7f9fc] text-slate-500 hover:border-[#2563eb]/40 hover:bg-[#eef4ff] hover:text-[#1d4ed8] focus-visible:ring-offset-white'
      } ${className}`}
    >
      {/* Subtle radial glow on hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]'
        }`}
      />

      {/* Active icon */}
      <span
        aria-hidden="true"
        className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ transform: isDark ? 'rotate(-15deg)' : 'rotate(0deg)' }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
