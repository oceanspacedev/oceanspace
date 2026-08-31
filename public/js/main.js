(function () {
  var root = document.documentElement;
  var reduceMotionQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  var prefersReducedMotion = reduceMotionQuery ? reduceMotionQuery.matches : false;

  root.classList.add('js-motion');
  if (prefersReducedMotion) {
    root.classList.add('motion-reduce');
  }

  function getMobileNavEls() {
    return {
      toggle: document.querySelector('[data-menu-toggle]'),
      mobileNav: document.querySelector('[data-mobile-nav]')
    };
  }

  function enhanceMobileNav(mobileNav) {
    if (!mobileNav || prefersReducedMotion) {
      return;
    }

    if (mobileNav.getAttribute('data-enhanced') === 'true') {
      return;
    }

    mobileNav.classList.remove('hidden');
    mobileNav.setAttribute('data-enhanced', 'true');
    mobileNav.setAttribute('data-open', 'false');
  }

  function setMobileNavState(isOpen) {
    var els = getMobileNavEls();
    var toggle = els.toggle;
    var mobileNav = els.mobileNav;

    if (!toggle || !mobileNav) {
      return;
    }

    enhanceMobileNav(mobileNav);

    if (mobileNav.getAttribute('data-enhanced') === 'true') {
      mobileNav.setAttribute('data-open', String(isOpen));
      mobileNav.classList.remove('hidden');
    } else {
      mobileNav.classList.toggle('hidden', !isOpen);
    }

    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-menu-toggle]');
    if (toggle) {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMobileNavState(!isOpen);
      return;
    }

    var mobileLink = event.target.closest('[data-mobile-nav] a');
    if (mobileLink) {
      setMobileNavState(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      setMobileNavState(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setMobileNavState(false);
    }
  });

  // React mounts after this script; enhance when header appears.
  function watchMobileNav() {
    var els = getMobileNavEls();
    if (els.toggle && els.mobileNav) {
      enhanceMobileNav(els.mobileNav);
      setMobileNavState(false);
      return true;
    }
    return false;
  }

  if (!watchMobileNav()) {
    var observer = new MutationObserver(function () {
      if (watchMobileNav()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.initSiteChrome = function () {
    watchMobileNav();
  };

  function normalizeRoute(pathname) {
    var segments = (pathname || '/').toLowerCase().split('/').filter(Boolean);
    var page = segments[segments.length - 1] || '';

    if (!page || page === 'index' || page === 'index.html') {
      return '/';
    }

    if (page === 'career-apply' || page === 'career-apply.html') {
      return '/career';
    }

    if (page.slice(-5) === '.html') {
      page = page.slice(0, -5);
    }

    return '/' + page;
  }

  function getCurrentPage() {
    return normalizeRoute(window.location.pathname);
  }

  function getLinkPage(link) {
    var href = link.getAttribute('href') || '';
    if (!href) {
      return '';
    }
    var absoluteUrl = new URL(href, window.location.href);
    return normalizeRoute(absoluteUrl.pathname);
  }

  function setHeaderActiveState() {
    var currentPage = getCurrentPage();

    document.querySelectorAll('[data-header-nav]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      link.classList.toggle('text-[#1d4ed8]', isActive);
      link.classList.toggle('font-semibold', isActive);
      link.classList.toggle('text-[#556070]', !isActive);
      link.classList.toggle('font-medium', !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    document.querySelectorAll('[data-header-action]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      var kind = link.getAttribute('data-header-action');
      if (kind === 'secondary') {
        link.classList.toggle('border-[#006AFF]', isActive);
        link.classList.toggle('text-[#006AFF]', isActive);
        link.classList.toggle('bg-[#eef4ff]', isActive);
        link.classList.toggle('border-[#d4dbe6]', !isActive);
        link.classList.toggle('text-[#243041]', !isActive);
        link.classList.toggle('bg-[#f7f9fc]', !isActive);
      }
      if (kind === 'primary') {
        link.classList.toggle('bg-[#006AFF]', isActive);
        link.classList.toggle('bg-[#2563eb]', !isActive);
      }
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    document.querySelectorAll('[data-mobile-link]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      link.classList.toggle('bg-[#eef4ff]', isActive);
      link.classList.toggle('text-[#1d4ed8]', isActive);
      link.classList.toggle('text-[#556070]', !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  setHeaderActiveState();

  document.querySelectorAll('[data-copy-text]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var copyText = trigger.getAttribute('data-copy-text') || '';
      var originalLabel = trigger.getAttribute('data-copy-label') || trigger.textContent.trim();

      if (!copyText || !navigator.clipboard || !navigator.clipboard.writeText) {
        return;
      }

      navigator.clipboard
        .writeText(copyText)
        .then(function () {
          trigger.setAttribute('data-copy-state', 'copied');
          trigger.textContent = 'Alamat Disalin';
          window.setTimeout(function () {
            trigger.removeAttribute('data-copy-state');
            trigger.textContent = originalLabel;
          }, 1800);
        })
        .catch(function (error) {
          console.error('Failed to copy text:', error);
        });
    });
  });

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  function uniqueElements(nodes) {
    return Array.from(new Set(nodes.filter(Boolean)));
  }

  function isActuallyVisible(node) {
    if (!node || !node.isConnected) {
      return false;
    }

    if (node.closest('[hidden]')) {
      return false;
    }

    var style = window.getComputedStyle(node);
    if (style.display === 'none' || style.visibility === 'hidden') {
      return false;
    }

    return Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  }

  function isInViewport(node) {
    var rect;

    if (!isActuallyVisible(node)) {
      return false;
    }

    rect = node.getBoundingClientRect();
    return rect.top < (window.innerHeight * 0.92) && rect.bottom > 0;
  }

  function setupHeaderScrollState() {
    var header = document.querySelector('header');
    var ticking = false;

    if (!header) {
      return;
    }

    function update() {
      header.setAttribute('data-scrolled', window.scrollY > 12 ? 'true' : 'false');
      ticking = false;
    }

    update();

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
  }

  function setupMotionSystem() {
    var entered = new WeakSet();
    var revealed = new WeakSet();
    var revealObserver = null;
    var refreshScheduled = false;
    var enterDelayMap = {
      eyebrow: 0,
      heading: 80,
      summary: 160,
      actions: 240,
      meta: 240,
      panel: 160,
      block: 120
    };
    var groupStepMap = {
      dense: 60,
      cards: 80,
      soft: 70
    };

    function setMotionMeta(node, style, delay, className) {
      if (style) {
        node.setAttribute('data-motion-style', style);
      }

      if (typeof delay === 'number') {
        node.style.setProperty('--motion-delay', delay + 'ms');
      }

      node.classList.add(className);
    }

    function markVisible(node) {
      if (!node) {
        return;
      }

      window.requestAnimationFrame(function () {
        node.classList.add('motion-visible');
      });
    }

    function getEnterStyle(node) {
      var type = node.getAttribute('data-motion-enter');

      if (type === 'heading') {
        return 'hero-copy';
      }

      if (type === 'panel') {
        return 'hero-panel';
      }

      return 'soft';
    }

    function getEnterDelay(node) {
      var type = node.getAttribute('data-motion-enter');
      return Object.prototype.hasOwnProperty.call(enterDelayMap, type)
        ? enterDelayMap[type]
        : 120;
    }

    function getRevealStyle(node) {
      var type = node.getAttribute('data-motion-reveal');

      if (type === 'card' || type === 'panel') {
        return 'panel';
      }

      if (type === 'fade') {
        return 'fade';
      }

      return 'soft';
    }

    function prepareEnter(node) {
      if (!node || entered.has(node) || !isActuallyVisible(node)) {
        return;
      }

      entered.add(node);
      setMotionMeta(node, getEnterStyle(node), getEnterDelay(node), 'motion-enter');
    }

    function prepareReveal(node, delayOverride) {
      if (!node || revealed.has(node) || !isActuallyVisible(node)) {
        return;
      }

      revealed.add(node);
      setMotionMeta(node, getRevealStyle(node), typeof delayOverride === 'number' ? delayOverride : 0, 'motion-reveal');

      if (prefersReducedMotion || !revealObserver || isInViewport(node)) {
        markVisible(node);
      } else {
        revealObserver.observe(node);
      }
    }

    function prepareHero() {
      var heroNodes = uniqueElements(Array.from(document.querySelectorAll('[data-motion-enter]')).filter(isActuallyVisible));

      if (!heroNodes.length) {
        return;
      }

      heroNodes.forEach(function (node) {
        prepareEnter(node);
      });

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          heroNodes.forEach(function (node) {
            markVisible(node);
          });
        });
      });
    }

    function prepareGroups(scope) {
      scope.querySelectorAll('[data-motion-group]').forEach(function (container) {
        var groupType = container.getAttribute('data-motion-group') || 'cards';
        var step = Object.prototype.hasOwnProperty.call(groupStepMap, groupType)
          ? groupStepMap[groupType]
          : 80;
        var children = Array.from(container.querySelectorAll('[data-motion-reveal]')).filter(function (node) {
          return node.closest('[data-motion-group]') === container;
        });

        children.forEach(function (node, index) {
          prepareReveal(node, index * step);
        });
      });
    }

    function prepareStandaloneReveals(scope) {
      scope.querySelectorAll('[data-motion-reveal]').forEach(function (node) {
        if (node.closest('[data-motion-group]')) {
          return;
        }

        prepareReveal(node, 0);
      });
    }

    function scan(scope) {
      prepareGroups(scope);
      prepareStandaloneReveals(scope);
    }

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      });
    }

    prepareHero();
    scan(document);

    window.addEventListener('oceanspace:motion-refresh', function () {
      scan(document);
    });

    if (!prefersReducedMotion && 'MutationObserver' in window) {
      new MutationObserver(function (mutations) {
        var hasRelevantChange = mutations.some(function (mutation) {
          if (mutation.type === 'attributes' && mutation.target.nodeType === 1) {
            return mutation.target.hasAttribute('data-motion-reveal') || mutation.target.hasAttribute('data-motion-enter') || mutation.target.hasAttribute('data-motion-group');
          }

          return Array.from(mutation.addedNodes).some(function (node) {
            return node.nodeType === 1 && (
              node.hasAttribute && (
                node.hasAttribute('data-motion-reveal') ||
                node.hasAttribute('data-motion-enter') ||
                node.hasAttribute('data-motion-group')
              ) ||
              (node.querySelector && node.querySelector('[data-motion-reveal], [data-motion-enter], [data-motion-group]'))
            );
          });
        });

        if (!hasRelevantChange || refreshScheduled) {
          return;
        }

        refreshScheduled = true;
        window.requestAnimationFrame(function () {
          refreshScheduled = false;
          scan(document);
        });
      }).observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }

  setupHeaderScrollState();
  setupMotionSystem();
})();
