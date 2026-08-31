import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Indonesian namespaces
import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idAbout from './locales/id/about.json';
import idDistribusi from './locales/id/distribusi.json';
import idRetail from './locales/id/retail.json';
import idSubRetail from './locales/id/subretail.json';
import idLifestyle from './locales/id/lifestyle.json';
import idCareer from './locales/id/career.json';
import idContact from './locales/id/contact.json';
import idLegal from './locales/id/legal.json';

// English namespaces
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enDistribusi from './locales/en/distribusi.json';
import enRetail from './locales/en/retail.json';
import enSubRetail from './locales/en/subretail.json';
import enLifestyle from './locales/en/lifestyle.json';
import enCareer from './locales/en/career.json';
import enContact from './locales/en/contact.json';
import enLegal from './locales/en/legal.json';

export const resources = {
  id: {
    common: idCommon,
    home: idHome,
    about: idAbout,
    distribusi: idDistribusi,
    retail: idRetail,
    subretail: idSubRetail,
    lifestyle: idLifestyle,
    career: idCareer,
    contact: idContact,
    legal: idLegal,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    distribusi: enDistribusi,
    retail: enRetail,
    subretail: enSubRetail,
    lifestyle: enLifestyle,
    career: enCareer,
    contact: enContact,
    legal: enLegal,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    defaultNS: 'common',
    ns: [
      'common',
      'home',
      'about',
      'distribusi',
      'retail',
      'subretail',
      'lifestyle',
      'career',
      'contact',
      'legal',
    ],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'oceanspace_language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
