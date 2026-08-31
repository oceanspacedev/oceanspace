import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  DEFAULT_OG_IMAGE_ALT,
  OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  buildJsonLd,
  getPageSeo,
} from '../seo/pages.js';

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value != null) el.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(blocks) {
  document.head
    .querySelectorAll('script[data-seo-jsonld="true"]')
    .forEach((node) => node.remove());

  blocks.forEach((block) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  });
}

/** Keeps document head in sync with the active route and active language. */
export default function PageSeo() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'id').startsWith('en') ? 'en' : 'id';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang;
    }

    const page = getPageSeo(pathname, currentLang);
    const canonical = absoluteUrl(page.canonicalPath || page.path);

    document.title = page.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: page.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: page.noindex ? 'noindex, follow' : 'index, follow',
    });
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: currentLang === 'en' ? 'en_US' : 'id_ID',
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: page.title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: page.description,
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: DEFAULT_OG_IMAGE_ALT,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: page.title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: page.description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE });

    upsertJsonLd(buildJsonLd(page));
  }, [pathname, currentLang]);

  return null;
}
