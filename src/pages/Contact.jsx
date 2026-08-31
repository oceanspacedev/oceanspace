import { BuildingOffice2Icon, XMarkIcon, ArrowsPointingOutIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { MotionReveal, MotionButton } from '../components/Motion.jsx';

const expoEase = [0.16, 1, 0.3, 1];
const springCard = { type: 'spring', stiffness: 350, damping: 24 };
const WHATSAPP_NUMBER = '6288222841728';

const Contact = () => {
  const { t, i18n } = useTranslation(['contact', 'common']);
  const currentLang = (i18n.language || 'id').startsWith('en') ? 'en' : 'id';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll & escape listener when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const greeting = currentLang === 'en' ? 'Hello Ocean Space,' : 'Halo Ocean Space,';
      const namePrefix = currentLang === 'en' ? 'Name' : 'Nama';
      const text = `${greeting}\n\n${namePrefix}: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white">
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1">
        {/* 1. HERO & CONTACT CHANNELS */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white py-14 sm:py-18 lg:py-24">
          <div
            className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_20%_50%,#000_20%,transparent_100%)] opacity-20"
            aria-hidden="true"
          ></div>

          <div className="lc-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
              {/* Kolom Kiri: Header & Informasi Head Office */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: expoEase }}
                className="lg:col-span-6"
              >
                <p className="lc-eyebrow">{t('hero.eyebrow', 'Kontak & Lokasi')}</p>
                <h1 className="mt-3 font-display text-[clamp(2.4rem,4.2vw,3.8rem)] font-[500] leading-[0.95] tracking-[-0.04em] text-[#171a22]">
                  {t('hero.heading', 'Hubungi Tim Ocean Space.')}
                </h1>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-[#556070] max-w-lg">
                  {t('hero.desc', 'Diskusikan kemitraan bisnis, ekspansi distribusi ritel, atau pertanyaan umum dengan tim manajemen korporat kami.')}
                </p>

                <div className="mt-8 space-y-4">
                  {/* Card Head Office Jakarta */}
                  <motion.div
                    whileHover={{ y: -3, transition: springCard }}
                    className="os-card group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1d4ed8]/40 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1d4ed8] border border-blue-100 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors duration-300">
                        <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#1d4ed8]">
                            {t('hero.jakartaOffice.tag', 'Head Office · Jakarta')}
                          </span>
                          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-[0.68rem] font-semibold text-blue-700">
                            {t('hero.jakartaOffice.badge', 'PIK Jakarta Utara')}
                          </span>
                        </div>
                        <h3 className="mt-1 text-[1.05rem] font-bold text-[#171a22]">
                          {t('hero.jakartaOffice.name', 'Pantai Indah Kapuk (PIK)')}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-[0.82rem] leading-relaxed text-[#556070]">
                          {t('hero.jakartaOffice.address', 'Rukan Golf Island Blok RGII No. 27–28...')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card Head Office Cirebon */}
                  <motion.div
                    whileHover={{ y: -3, transition: springCard }}
                    className="os-card group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1d4ed8]/40 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1d4ed8] border border-blue-100 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors duration-300">
                        <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#1d4ed8]">
                            {t('hero.cirebonOffice.tag', 'Head Office · Cirebon')}
                          </span>
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[0.68rem] font-semibold text-slate-700">
                            {t('hero.cirebonOffice.badge', 'Jawa Barat')}
                          </span>
                        </div>
                        <h3 className="mt-1 text-[1.05rem] font-bold text-[#171a22]">
                          {t('hero.cirebonOffice.name', 'Petratean, Pekalipan')}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-[0.82rem] leading-relaxed text-[#556070]">
                          {t('hero.cirebonOffice.address', 'Jl. Petratean No. 11B, Pekalipan, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45118')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Kolom Kanan: Form Kirim Pesan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: expoEase }}
                className="lg:col-span-6"
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171a22]">
                        {t('form.heading', 'Kirim Pesan Korporat')}
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-[#556070]">
                        {t('form.desc', 'Respon cepat melalui saluran resmi komunikasi kami.')}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {t('form.online', 'Online')}
                    </span>
                  </div>

                  {isSubmitted ? (
                    <div className="mt-6 rounded-2xl bg-blue-50/60 border border-blue-100 p-6 sm:p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1d4ed8] text-white mb-3 shadow-sm">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {t('form.successTitle', 'Membuka WhatsApp Korporat...')}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                        {t('form.successDesc', 'Pesan Anda siap dikirimkan...')}
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            `${currentLang === 'en' ? 'Hello Ocean Space,' : 'Halo Ocean Space,'}\n\n${currentLang === 'en' ? 'Name' : 'Nama'}: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="os-btn os-btn--primary text-xs py-2.5 px-5"
                        >
                          {t('form.openWaAgain', 'Buka WhatsApp Lagi')}
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ name: '', email: '', message: '' });
                            setIsSubmitted(false);
                          }}
                          className="os-btn os-btn--secondary text-xs py-2.5 px-5"
                        >
                          {t('form.writeNewMessage', 'Tulis Pesan Baru')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                          {t('form.nameLabel', 'Nama Lengkap')}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="min-h-[46px] w-full rounded-xl border border-[#d4dbe6] px-4 py-2.5 text-sm text-[#171a22] focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/15 transition-all placeholder:text-slate-400"
                          placeholder={t('form.namePlaceholder', 'Masukkan nama lengkap Anda')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                          {t('form.emailLabel', 'Email Bisnis / Pribadi')}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="min-h-[46px] w-full rounded-xl border border-[#d4dbe6] px-4 py-2.5 text-sm text-[#171a22] focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/15 transition-all placeholder:text-slate-400"
                          placeholder={t('form.emailPlaceholder', 'nama@perusahaan.com')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#344054] mb-1.5">
                          {t('form.messageLabel', 'Pesan / Keperluan')}
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="min-h-[100px] w-full rounded-xl border border-[#d4dbe6] px-4 py-2.5 text-sm text-[#171a22] focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/15 resize-none transition-all placeholder:text-slate-400"
                          placeholder={t('form.messagePlaceholder', 'Tuliskan pesan, tujuan kolaborasi, atau pertanyaan Anda...')}
                        ></textarea>
                      </div>
                      <motion.button
                        whileHover={isSubmitting ? {} : { y: -2, scale: 1.005 }}
                        whileTap={isSubmitting ? {} : { scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="os-btn os-btn--primary w-full mt-2 min-h-[48px] inline-flex items-center justify-center gap-2 disabled:opacity-75 shadow-xs"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>{t('form.submitting', 'Menyiapkan Pesan...')}</span>
                          </>
                        ) : (
                          <span>{t('form.submit', 'Kirim Pesan via WhatsApp')}</span>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. BENTO GRID ARSITEKTURAL */}
        <section className="relative overflow-hidden border-b border-black/10 bg-[#f8fbff] py-16 sm:py-20 lg:py-28">
          <div className="lc-shell relative z-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12 sm:mb-16">
              <MotionReveal className="max-w-[36rem]">
                <p className="lc-eyebrow">{t('facilities.eyebrow', 'Fasilitas & Lingkungan Kerja')}</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,3.2rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  {t('facilities.heading', 'Ruang Kerja & Kolaborasi Terpadu.')}
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[28rem] text-[0.98rem] leading-7 text-[#596171]">
                {t('facilities.desc', 'Fasilitas kantor representatif yang dirancang untuk mendukung operasional profesional, transparansi, dan sinergi seluruh unit grup Ocean Space.')}
              </MotionReveal>
            </div>

            {/* Architectural Bento Layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
              
              {/* 1. HERO BENTO CARD: LOBBY UTAMA */}
              <MotionReveal className="lg:col-span-5 h-full">
                <div
                  onClick={() =>
                    setSelectedImage({
                      title: t('facilities.cards.lobby.title', 'Lobi Utama & Lounge'),
                      src: '/images/office/office-lobby.jpg',
                      alt: 'Lobi Utama dan Receptionist Ocean Space',
                    })
                  }
                  className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#1d4ed8]/50 cursor-pointer min-h-[460px] sm:min-h-[520px] lg:min-h-full h-full"
                >
                  <img
                    src="/images/office/office-lobby.jpg"
                    alt="Lobi Utama Ocean Space"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85"></div>

                  <div className="relative z-10 flex items-center justify-end p-6 sm:p-7">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900">
                      <ArrowsPointingOutIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 mt-auto">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                      {t('facilities.cards.lobby.tag', 'Headquarters · Jakarta')}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {t('facilities.cards.lobby.title', 'Lobi Utama & Lounge')}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-200/90 max-w-md">
                      {t('facilities.cards.lobby.desc', 'Area penerimaan tamu dan lounge resmi Ocean Space.')}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-blue-200">
                      <span>{t('facilities.expandLabel', 'Klik untuk perbesar')}</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* RIGHT BENTO SUB-GRID */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* 2. TOP RIGHT CARD: FASAD & AKSES KANTOR */}
                <MotionReveal delay={0.06}>
                  <div
                    onClick={() =>
                      setSelectedImage({
                        title: t('facilities.cards.entrance.title', 'Akses Masuk & Fasad Gedung'),
                        src: '/images/office/office-entrance.jpg',
                        alt: 'Fasad dan Pintu Masuk Ocean Space',
                      })
                    }
                    className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#1d4ed8]/50 cursor-pointer min-h-[260px] sm:min-h-[300px]"
                  >
                    <img
                      src="/images/office/office-entrance.jpg"
                      alt="Fasad dan Pintu Masuk Gedung Ocean Space"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-80"></div>

                    <div className="relative z-10 flex items-center justify-end p-5 sm:p-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900">
                        <ArrowsPointingOutIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="relative z-10 p-5 sm:p-6 mt-auto">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                        {t('facilities.cards.entrance.tag', 'Exterior Building')}
                      </p>
                      <h3 className="mt-0.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {t('facilities.cards.entrance.title', 'Akses Masuk & Fasad Gedung')}
                      </h3>
                      <p className="mt-1 text-xs sm:text-[0.84rem] text-slate-200/90">
                        {t('facilities.cards.entrance.desc', 'Akses utama dan fasad gedung kantor operasional.')}
                      </p>
                    </div>
                  </div>
                </MotionReveal>

                {/* 3 & 4. BOTTOM DUAL CARDS */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  
                  {/* Card 3: Smart Meeting Room */}
                  <MotionReveal delay={0.12}>
                    <div
                      onClick={() =>
                        setSelectedImage({
                          title: t('facilities.cards.meeting.title', 'Smart Meeting Room'),
                          src: '/images/office/office-meeting-room.jpg',
                          alt: 'Smart Meeting Room Ocean Space',
                        })
                      }
                      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#1d4ed8]/50 cursor-pointer min-h-[300px] sm:min-h-[340px]"
                    >
                      <img
                        src="/images/office/office-meeting-room.jpg"
                        alt="Smart Meeting Room Ocean Space"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85"></div>

                      <div className="relative z-10 flex items-center justify-end p-5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform group-hover:scale-110">
                          <ArrowsPointingOutIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="relative z-10 p-5 mt-auto">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-blue-300">
                          {t('facilities.cards.meeting.tag', 'Boardroom')}
                        </p>
                        <h3 className="mt-0.5 text-lg font-bold text-white">
                          {t('facilities.cards.meeting.title', 'Smart Meeting Room')}
                        </h3>
                        <p className="mt-1 text-xs text-slate-200/90">
                          {t('facilities.cards.meeting.desc', 'Ruang rapat eksekutif dengan display interaktif.')}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>

                  {/* Card 4: Creative Discussion Room */}
                  <MotionReveal delay={0.16}>
                    <div
                      onClick={() =>
                        setSelectedImage({
                          title: t('facilities.cards.collab.title', 'Collaboration Room'),
                          src: '/images/office/office-discussion-room.jpg',
                          alt: 'Creative Discussion Room Ocean Space',
                        })
                      }
                      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#1d4ed8]/50 cursor-pointer min-h-[300px] sm:min-h-[340px]"
                    >
                      <img
                        src="/images/office/office-discussion-room.jpg"
                        alt="Creative Discussion Room Ocean Space"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85"></div>

                      <div className="relative z-10 flex items-center justify-end p-5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform group-hover:scale-110">
                          <ArrowsPointingOutIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="relative z-10 p-5 mt-auto">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-blue-300">
                          {t('facilities.cards.collab.tag', 'Discussion Hub')}
                        </p>
                        <h3 className="mt-0.5 text-lg font-bold text-white">
                          {t('facilities.cards.collab.title', 'Collaboration Room')}
                        </h3>
                        <p className="mt-1 text-xs text-slate-200/90">
                          {t('facilities.cards.collab.desc', 'Ruang diskusi dan brainstorming kreatif tim.')}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>

                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* 3. LIGHTBOX MODAL FULLSCREEN */}
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div
          onClick={() => setSelectedImage(null)}
          onTouchMove={(e) => e.preventDefault()}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(15, 23, 42, 0.68)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          className="h-[100dvh] w-screen overflow-hidden overscroll-none select-none flex items-center justify-center p-4 sm:p-8 cursor-pointer transition-opacity duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[1000000] flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-110 active:scale-95 shadow-2xl border border-white/20 cursor-pointer"
            aria-label={t('facilities.closeModal', 'Tutup preview gambar')}
          >
            <XMarkIcon className="h-7 w-7 text-white" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center cursor-default max-h-[86vh] sm:max-h-[90vh] max-w-[92vw]"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[86vh] sm:max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20 pointer-events-auto select-none"
              draggable={false}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Contact;
