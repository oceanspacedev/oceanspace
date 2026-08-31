window.initCareer = () => {
  if (window.__oceanSpaceCareerAbort) {
    window.__oceanSpaceCareerAbort.abort();
  }

  const abortController = new AbortController();
  window.__oceanSpaceCareerAbort = abortController;
  const { signal } = abortController;

  const jobsLoading = document.getElementById('jobs-loading');
  const jobsEmpty = document.getElementById('jobs-empty');
  const jobsError = document.getElementById('jobs-error');
  const jobsContainer = document.getElementById('jobs-container');
  const jobsRetry = document.getElementById('jobs-retry');
  const jobsErrorMessage = document.getElementById('jobs-error-message');
  const jobsFilters = document.getElementById('jobs-filters');
  const jobsSearchInput = document.getElementById('jobs-search');
  const jobsLocationInput = document.getElementById('jobs-location');
  const jobsResetButton = document.getElementById('jobs-reset');
  const jobsResultsMeta = document.getElementById('jobs-results-meta');
  const jobsLoadMoreWrap = document.getElementById('jobs-load-more-wrap');
  const jobsLoadMoreButton = document.getElementById('jobs-load-more');
  const jobsLoadMoreStatus = document.getElementById('jobs-load-more-status');

  const api = window.OceanSpaceCareerApi;
  const defaultPerPage = 6;
  const state = {
    jobs: [],
    filters: getInitialFilters(),
    meta: null,
    links: null,
    nextUrl: null,
    isLoading: false,
    isLoadingMore: false,
  };

  const notifyMotionRefresh = () => {
    window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
  };

  const setVisibility = (node, visible) => {
    if (!node) {
      return;
    }

    node.classList.toggle('hidden', !visible);
    node.setAttribute('aria-hidden', visible ? 'false' : 'true');
  };

  function getInitialFilters() {
    const params = new URLSearchParams(window.location.search);
    return {
      search: (params.get('search') || params.get('q') || '').trim(),
      location: (params.get('location') || '').trim(),
    };
  }

  const getLang = () => (document.documentElement.lang || localStorage.getItem('oceanspace_language') || 'id').startsWith('en') ? 'en' : 'id';

  const formatDate = (dateString) => {
    const isEn = getLang() === 'en';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(isEn ? 'en-US' : 'id-ID', options);
  };

  const escapeHtml = (unsafe) => {
    return (unsafe || '').toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const isUppercaseHeavyTitle = (value) => {
    const text = String(value || '').trim();
    if (!text) {
      return false;
    }

    const lettersOnly = text.replace(/[^A-Za-zÀ-ÿ]/g, '');
    if (!lettersOnly) {
      return false;
    }

    return lettersOnly === lettersOnly.toUpperCase();
  };

  const formatJobTitle = (value) => {
    const text = String(value || '').trim();
    if (!isUppercaseHeavyTitle(text)) {
      return text;
    }

    return text
      .toLowerCase()
      .replace(/(^|[^a-zà-ÿ])([a-zà-ÿ])/g, (_, boundary, letter) => boundary + letter.toUpperCase());
  };

  // Trailing slash hits physical dist/career-apply/ shell on LiteSpeed
  const getApplyUrl = (slug) => `/career-apply/?job=${encodeURIComponent(slug)}`;

  const syncFilterInputs = () => {
    if (jobsSearchInput) {
      jobsSearchInput.value = state.filters.search;
    }

    if (jobsLocationInput) {
      jobsLocationInput.value = state.filters.location;
    }
  };

  const syncBrowserUrl = () => {
    const url = new URL(window.location.href);

    if (state.filters.search) {
      url.searchParams.set('search', state.filters.search);
    } else {
      url.searchParams.delete('search');
      url.searchParams.delete('q');
    }

    if (state.filters.location) {
      url.searchParams.set('location', state.filters.location);
    } else {
      url.searchParams.delete('location');
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const setLoadMoreState = ({ visible, disabled, buttonLabel, statusMessage }) => {
    if (!jobsLoadMoreWrap || !jobsLoadMoreButton || !jobsLoadMoreStatus) {
      return;
    }

    jobsLoadMoreWrap.classList.toggle('hidden', !visible);
    jobsLoadMoreWrap.classList.toggle('flex', visible);
    jobsLoadMoreButton.disabled = Boolean(disabled);
    jobsLoadMoreButton.textContent = buttonLabel || (getLang() === 'en' ? 'Load more' : 'Muat lebih banyak');
    jobsLoadMoreStatus.textContent = statusMessage || '';
  };

  const updateResultsMeta = () => {
    if (!jobsResultsMeta) {
      return;
    }

    const isEn = getLang() === 'en';
    const parts = [];

    if (state.filters.search) {
      parts.push(isEn ? `keyword "${state.filters.search}"` : `kata kunci "${state.filters.search}"`);
    }

    if (state.filters.location) {
      parts.push(isEn ? `location "${state.filters.location}"` : `lokasi "${state.filters.location}"`);
    }

    if (!state.jobs.length) {
      jobsResultsMeta.textContent = parts.length
        ? (isEn ? `No open positions found matching ${parts.join(' and ')}.` : `Belum ada posisi yang cocok untuk ${parts.join(' dan ')}.`)
        : (isEn ? 'Showing latest open positions at Ocean Space.' : 'Menampilkan posisi terbaru dari Ocean Space.');
      return;
    }

    const paginationText = isEn
      ? `Showing ${state.jobs.length} open position${state.jobs.length > 1 ? 's' : ''}.`
      : `Menampilkan ${state.jobs.length} posisi.`;

    jobsResultsMeta.textContent = parts.length
      ? `${paginationText} Filter: ${parts.join(isEn ? ' and ' : ' dan ')}.`
      : paginationText;
  };

  const renderJobs = (jobs, options = {}) => {
    if (!options.append) {
      jobsContainer.innerHTML = '';
    }

    const isEn = getLang() === 'en';
    const closingLabel = isEn ? 'Closes' : 'Ditutup';
    const applyBtnLabel = isEn ? 'View details &amp; apply' : 'Lihat detail &amp; lamar';

    jobs.forEach((job) => {
      const card = document.createElement('article');
      card.className = 'comparison-card group motion-reveal motion-visible';
      card.setAttribute('data-motion-card', 'true');

      const thumbSrc = job.thumbnail_url || '/images/career-fallback.png';
      const thumb = `<div class="comparison-card__media"><img src="${escapeHtml(thumbSrc)}" alt="" loading="lazy" decoding="async"></div>`;

      card.innerHTML = `
        ${thumb}
        <div class="comparison-card__body">
          <div class="comparison-card__content">
            <h3 class="comparison-card__title">${escapeHtml(formatJobTitle(job.title))}</h3>
            <div class="comparison-card__meta">
              <span class="comparison-card__meta-row comparison-card__meta-row--location"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>${escapeHtml(job.location)}</span>
              <span class="comparison-card__meta-row comparison-card__meta-row--closing"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>${closingLabel} ${formatDate(job.closing_date)}</span>
            </div>
          </div>
          <div class="comparison-card__action">
            <a href="${getApplyUrl(job.slug)}" data-job-link="${escapeHtml(job.slug)}" data-motion-cta="true" class="button-primary">${applyBtnLabel}</a>
          </div>
        </div>
      `;

      jobsContainer.appendChild(card);
    });

    notifyMotionRefresh();
  };

  const updateLoadMoreControls = () => {
    const hasMorePages = Boolean(state.meta && state.meta.has_more_pages && state.nextUrl);

    if (!state.jobs.length || (!hasMorePages && !state.isLoadingMore)) {
      setLoadMoreState({
        visible: false,
        disabled: true,
        buttonLabel: 'Muat lebih banyak',
        statusMessage: '',
      });
      return;
    }

    if (state.isLoadingMore) {
      setLoadMoreState({
        visible: true,
        disabled: true,
        buttonLabel: 'Memuat...',
        statusMessage: '',
      });
      return;
    }

    setLoadMoreState({
      visible: true,
      disabled: false,
      buttonLabel: 'Muat lebih banyak',
      statusMessage: '',
    });
  };

  const applyPayloadState = (payload, options = {}) => {
    const jobs = Array.isArray(payload && payload.data) ? payload.data : [];

    state.jobs = options.append ? state.jobs.concat(jobs) : jobs.slice();
    state.meta = payload && payload.meta ? payload.meta : null;
    state.links = payload && payload.links ? payload.links : null;
    state.nextUrl = state.links && state.links.next ? state.links.next : null;
  };

  const renderCurrentState = () => {
    if (!state.jobs.length) {
      setVisibility(jobsContainer, false);
      setVisibility(jobsEmpty, true);
      setVisibility(jobsError, false);
      setVisibility(jobsLoading, false);
      updateResultsMeta();
      updateLoadMoreControls();
      notifyMotionRefresh();
      return;
    }

    setVisibility(jobsEmpty, false);
    setVisibility(jobsError, false);
    setVisibility(jobsContainer, true);
    renderJobs(state.jobs);
    updateResultsMeta();
    updateLoadMoreControls();
  };

  const fetchJobs = async (options = {}) => {
    const append = Boolean(options.append);
    const requestOptions = append
      ? { nextUrl: state.nextUrl }
      : {
          search: state.filters.search,
          location: state.filters.location,
          per_page: defaultPerPage,
          page: 1,
        };

    if (!api || typeof api.listJobs !== 'function') {
      if (jobsErrorMessage) {
        jobsErrorMessage.textContent = 'Daftar lowongan online sedang tidak tersedia. Silakan coba lagi atau hubungi tim kami untuk menyampaikan minat.';
      }
      setVisibility(jobsLoading, false);
      setVisibility(jobsEmpty, false);
      setVisibility(jobsContainer, false);
      setVisibility(jobsError, true);
      updateResultsMeta();
      notifyMotionRefresh();
      return;
    }

    try {
      if (append) {
        if (!state.nextUrl || state.isLoadingMore) {
          return;
        }

        state.isLoadingMore = true;
        updateLoadMoreControls();
      } else {
        if (state.isLoading) {
          return;
        }

        state.isLoading = true;
        setVisibility(jobsLoading, true);
        setVisibility(jobsError, false);
        setVisibility(jobsEmpty, false);
        setVisibility(jobsContainer, false);
        jobsContainer.innerHTML = '';
        setLoadMoreState({
          visible: false,
          disabled: true,
          buttonLabel: 'Muat lebih banyak',
          statusMessage: '',
        });
      }

      const payload = await api.listJobs(requestOptions);
      if (signal.aborted) {
        return;
      }

      applyPayloadState(payload, { append });

      if (!append) {
        syncBrowserUrl();
      }

      renderCurrentState();
    } catch (error) {
      if (signal.aborted) {
        return;
      }

      if (append) {
        setLoadMoreState({
          visible: true,
          disabled: false,
          buttonLabel: 'Coba lagi',
          statusMessage: 'Halaman berikutnya belum berhasil dimuat. Coba lagi.',
        });
        return;
      }

      if (jobsErrorMessage) {
        jobsErrorMessage.textContent = 'Daftar lowongan online sedang tidak tersedia. Silakan coba lagi atau hubungi tim kami untuk menyampaikan minat.';
      }
      setVisibility(jobsError, true);
      updateResultsMeta();
      notifyMotionRefresh();
    } finally {
      if (signal.aborted) {
        return;
      }

      if (append) {
        state.isLoadingMore = false;
      } else {
        state.isLoading = false;
        setVisibility(jobsLoading, false);
      }

      updateLoadMoreControls();
    }
  };

  if (jobsRetry) {
    jobsRetry.addEventListener('click', () => {
      fetchJobs();
    }, { signal });
  }

  if (jobsFilters) {
    jobsFilters.addEventListener('submit', (event) => {
      event.preventDefault();
      state.filters.search = (jobsSearchInput && jobsSearchInput.value ? jobsSearchInput.value : '').trim();
      state.filters.location = (jobsLocationInput && jobsLocationInput.value ? jobsLocationInput.value : '').trim();
      fetchJobs();
    }, { signal });
  }

  if (jobsResetButton) {
    jobsResetButton.addEventListener('click', () => {
      state.filters.search = '';
      state.filters.location = '';
      syncFilterInputs();
      fetchJobs();
    }, { signal });
  }

  if (jobsLoadMoreButton) {
    jobsLoadMoreButton.addEventListener('click', () => {
      fetchJobs({ append: true });
    }, { signal });
  }

  syncFilterInputs();
  updateResultsMeta();
  fetchJobs();

  window.addEventListener('oceanspace:languagechange', () => {
    if (state.jobs.length) {
      renderCurrentState();
    }
  }, { signal });
};
