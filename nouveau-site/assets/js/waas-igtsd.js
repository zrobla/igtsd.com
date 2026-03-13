(function () {
  const isEnglish = (document.documentElement.lang || '').toLowerCase().startsWith('en');
  const uiLabels = isEnglish
    ? {
        openMenu: 'Open menu',
        closeMenu: 'Close menu'
      }
    : {
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu'
      };
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');
  const navDropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));
  const resourceDropdown = document.querySelector('.nav-dropdown-resources');
  const resourceToggle = resourceDropdown ? resourceDropdown.querySelector('.nav-dropdown-toggle') : null;
  const serviceDropdown = document.querySelector('.nav-dropdown-services');
  const serviceToggle = serviceDropdown ? serviceDropdown.querySelector('.nav-dropdown-toggle') : null;
  const serviceLink = serviceDropdown ? serviceDropdown.querySelector('.nav-dropdown-link') : null;
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navMain) {
    const isMobileNav = () => window.matchMedia('(max-width: 860px)').matches;
    const dropdownCloseTimers = new WeakMap();
    const setNavState = (open) => {
      navMain.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? uiLabels.closeMenu : uiLabels.openMenu);
      navToggle.textContent = open ? '✕' : '☰';
      document.body.classList.toggle('nav-open', open && isMobileNav());
      if (!open) {
        closeAllDropdowns();
      }
    };

    const clearDropdownCloseTimer = (dropdown) => {
      const timer = dropdownCloseTimers.get(dropdown);
      if (!timer) return;
      clearTimeout(timer);
      dropdownCloseTimers.delete(dropdown);
    };

    const closeDropdown = (dropdown) => {
      if (!dropdown) return;
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      clearDropdownCloseTimer(dropdown);
      dropdown.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    const closeAllDropdowns = (except = null) => {
      navDropdowns.forEach((dropdown) => {
        if (dropdown === except) return;
        closeDropdown(dropdown);
      });
    };

    const openDropdownDesktop = (dropdown) => {
      if (!dropdown || isMobileNav()) return;
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      clearDropdownCloseTimer(dropdown);
      closeAllDropdowns(dropdown);
      dropdown.classList.add('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const closeDropdownDesktopDelayed = (dropdown) => {
      if (!dropdown || isMobileNav()) return;
      clearDropdownCloseTimer(dropdown);
      const timer = setTimeout(() => {
        closeDropdown(dropdown);
      }, 220);
      dropdownCloseTimers.set(dropdown, timer);
    };

    setNavState(false);

    navToggle.addEventListener('click', () => {
      setNavState(!navMain.classList.contains('open'));
    });

    document.addEventListener('click', (event) => {
      if (!navMain.classList.contains('open')) return;
      const isInsideMenu = navMain.contains(event.target);
      const isToggle = navToggle.contains(event.target);
      if (!isInsideMenu && !isToggle) {
        setNavState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!navMain.classList.contains('open')) return;
      setNavState(false);
      navToggle.focus();
    });

    navDropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (!toggle) return;

      toggle.addEventListener('click', (event) => {
        if (!isMobileNav()) return;
        event.preventDefault();
        clearDropdownCloseTimer(dropdown);
        const opened = dropdown.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(opened));
        closeAllDropdowns(opened ? dropdown : null);
      });

      dropdown.addEventListener('mouseenter', () => openDropdownDesktop(dropdown));
      dropdown.addEventListener('mouseleave', () => closeDropdownDesktopDelayed(dropdown));
      dropdown.addEventListener('focusin', () => openDropdownDesktop(dropdown));
      dropdown.addEventListener('focusout', (event) => {
        if (dropdown.contains(event.relatedTarget)) return;
        closeDropdownDesktopDelayed(dropdown);
      });
    });

    navMain.querySelectorAll('.nav-dropdown-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        setNavState(false);
      });
    });

    window.addEventListener('resize', () => {
      if (!isMobileNav()) {
        setNavState(false);
      } else {
        document.body.classList.toggle('nav-open', navMain.classList.contains('open'));
        navDropdowns.forEach((dropdown) => {
          const toggle = dropdown.querySelector('.nav-dropdown-toggle');
          dropdown.classList.remove('open');
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const resourcePages = new Set([
    'blog.html',
    'realisations.html',
    'blog-supervision-sla.html',
    'blog-ftth-acceleration.html',
    'blog-noc-teletravail.html',
    'blog-delivery-partners.html',
    'defis-emplacement-strategiques.html'
  ]);
  const servicePages = new Set([
    'services.html',
    'acquisition-sites-telecoms.html',
    'deploiement-reseaux.html',
    'fibre-optique-reseaux.html',
    'ingenierie-reseaux-supervision.html',
    'maitrise-ouvrage-delegue-telecoms.html',
    'solutions-energetiques.html',
    'delocalisation-devoiement-reseaux.html',
    'cablage-informatique.html'
  ]);

  let resourceActive = resourcePages.has(currentPath);
  let serviceActive = servicePages.has(currentPath);

  document.querySelectorAll('.nav-main a').forEach((link) => {
    if (link.closest('.nav-lang-switch')) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const normalized = href.split('/').pop();
    if (normalized === currentPath) {
      link.classList.add('active');
      const parentDropdown = link.closest('.nav-dropdown');
      if (parentDropdown && parentDropdown.classList.contains('nav-dropdown-resources')) {
        resourceActive = true;
      }
      if (parentDropdown && parentDropdown.classList.contains('nav-dropdown-services')) {
        serviceActive = true;
      }
    }
  });

  if (resourceToggle && resourceActive) {
    resourceToggle.classList.add('active');
  }

  if (serviceDropdown && serviceActive) {
    serviceDropdown.classList.add('is-active');
  }

  if (serviceToggle && serviceActive) {
    serviceToggle.classList.add('active');
  }

  if (serviceLink && serviceActive) {
    serviceLink.classList.add('active');
  }

  const initHeroSlider = () => {
    const hero = document.querySelector('[data-hero-premium]');
    if (!hero) return;

    const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    if (!slides.length) return;

    const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
    const prevBtn = hero.querySelector('[data-hero-prev]');
    const nextBtn = hero.querySelector('[data-hero-next]');

    let current = slides.findIndex((slide) => slide.classList.contains('is-active'));
    if (current < 0) current = 0;

    const setSlide = (index) => {
      const safeIndex = (index + slides.length) % slides.length;
      current = safeIndex;

      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === safeIndex);
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === safeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });
    };

    const goNext = () => setSlide(current + 1);
    const goPrev = () => setSlide(current - 1);

    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => setSlide(index));
    });

    setSlide(current);

    let autoTimer = null;
    const startAuto = () => {
      if (slides.length < 2) return;
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(goNext, 6000);
    };

    const stopAuto = () => {
      if (!autoTimer) return;
      clearInterval(autoTimer);
      autoTimer = null;
    };

    hero.addEventListener('mouseenter', stopAuto);
    hero.addEventListener('mouseleave', startAuto);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAuto();
      } else {
        startAuto();
      }
    });

    startAuto();
  };

  const initWhyUsTabs = () => {
    const tabButtons = Array.from(document.querySelectorAll('.whyus-tabs [data-tab-target]'));
    if (!tabButtons.length) return;

    const panelMap = new Map();
    tabButtons.forEach((button) => {
      const target = button.getAttribute('data-tab-target');
      if (!target) return;
      const panel = document.getElementById(target);
      if (panel) panelMap.set(button, panel);
    });

    const activate = (button) => {
      tabButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
      });

      panelMap.forEach((panel, btn) => {
        panel.classList.toggle('is-active', btn === button);
      });
    };

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => activate(button));
    });

    activate(tabButtons[0]);
  };

  const initContactFormTabs = () => {
    const tabGroups = Array.from(document.querySelectorAll('[data-contact-form-tabs]'));
    if (!tabGroups.length) return;

    tabGroups.forEach((group) => {
      const tabs = Array.from(group.querySelectorAll('[data-contact-tab-target]'));
      if (!tabs.length) return;

      const panelMap = new Map();
      tabs.forEach((tab) => {
        const panelId = tab.getAttribute('data-contact-tab-target');
        if (!panelId) return;
        const panel = document.getElementById(panelId);
        if (panel) panelMap.set(tab, panel);
      });

      const activate = (activeTab) => {
        tabs.forEach((tab) => {
          const isActive = tab === activeTab;
          tab.classList.toggle('is-active', isActive);
          tab.setAttribute('aria-selected', String(isActive));
        });

        panelMap.forEach((panel, tab) => {
          const isActive = tab === activeTab;
          panel.classList.toggle('is-active', isActive);
          panel.setAttribute('aria-hidden', String(!isActive));
        });
      };

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => activate(tab));
      });

      const initial = tabs.find((tab) => tab.classList.contains('is-active')) || tabs[0];
      if (initial) activate(initial);
    });
  };



  const initBlogChips = () => {
    const chips = Array.from(document.querySelectorAll('.blog-filter-chips .chip'));
    if (!chips.length) return;

    const filterItems = Array.from(document.querySelectorAll('.blog-filter-item[data-blog-category]'));
    const emptyState = document.querySelector('.blog-filter-empty');
    const hasFilterableItems = filterItems.length > 0 && chips.some((chip) => chip.hasAttribute('data-blog-filter'));

    const applyFilter = (value) => {
      if (!hasFilterableItems) return;

      let visibleCount = 0;
      filterItems.forEach((item) => {
        const raw = item.getAttribute('data-blog-category') || '';
        const categories = raw.split(/\s+/).filter(Boolean);
        const visible = value === 'all' || categories.includes(value);
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((item) => {
          item.classList.remove('active');
          item.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');

        const filter = chip.getAttribute('data-blog-filter') || 'all';
        applyFilter(filter);
      });
    });

    const initial = chips.find((chip) => chip.classList.contains('active')) || chips[0];
    if (initial) {
      const filter = initial.getAttribute('data-blog-filter') || 'all';
      initial.setAttribute('aria-pressed', 'true');
      applyFilter(filter);
    }
  };
  const initCaseFilters = () => {
    const filterButtons = Array.from(document.querySelectorAll('.case-filter-btn[data-case-filter]'));
    const caseCards = Array.from(document.querySelectorAll('.case-study-card[data-category]'));

    if (!filterButtons.length || !caseCards.length) return;

    const applyFilter = (value) => {
      caseCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const show = value === 'all' || value === category;
        card.classList.toggle('is-hidden', !show);
      });

      filterButtons.forEach((button) => {
        const isActive = button.getAttribute('data-case-filter') === value;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-case-filter') || 'all';
        applyFilter(value);
      });
    });

    const initial = filterButtons.find((button) => button.classList.contains('active'));
    applyFilter(initial ? initial.getAttribute('data-case-filter') || 'all' : 'all');
  };

  const initPartnersCarousel = () => {
    const rails = Array.from(document.querySelectorAll('.partners-grid[data-partners-carousel]'));
    if (!rails.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    rails.forEach((rail) => {
      if (rail.dataset.carouselReady === 'true') return;

      const cards = Array.from(rail.children);
      if (cards.length < 2) return;

      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        rail.appendChild(clone);
      });

      rail.dataset.carouselReady = 'true';
      rail.scrollLeft = 0;

      let rafId = 0;
      let isPointerDown = false;
      let startX = 0;
      let startScrollLeft = 0;
      let lastTs = 0;
      let speedPxPerSecond = prefersReducedMotion.matches ? 22 : 66;

      const step = (ts) => {
        if (!lastTs) lastTs = ts;
        const dt = Math.min(64, ts - lastTs);
        lastTs = ts;

        if (!isPointerDown) {
          rail.scrollLeft += (speedPxPerSecond * dt) / 1000;
          if (rail.scrollLeft >= rail.scrollWidth / 2) {
            rail.scrollLeft = 0;
          }
        }

        rafId = window.requestAnimationFrame(step);
      };

      const start = () => {
        if (rafId) return;
        lastTs = 0;
        rafId = window.requestAnimationFrame(step);
      };

      const stop = () => {
        if (!rafId) return;
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      };

      const onPointerDown = (event) => {
        isPointerDown = true;
        startX = event.clientX;
        startScrollLeft = rail.scrollLeft;
        rail.classList.add('is-dragging');
        rail.setPointerCapture(event.pointerId);
      };

      const onPointerMove = (event) => {
        if (!isPointerDown) return;
        const delta = event.clientX - startX;
        rail.scrollLeft = startScrollLeft - delta;
      };

      const onPointerUp = (event) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        rail.classList.remove('is-dragging');
        if (rail.hasPointerCapture(event.pointerId)) {
          rail.releasePointerCapture(event.pointerId);
        }
      };

      rail.addEventListener('pointerdown', onPointerDown);
      rail.addEventListener('pointermove', onPointerMove);
      rail.addEventListener('pointerup', onPointerUp);
      rail.addEventListener('pointercancel', onPointerUp);
      rail.addEventListener('pointerleave', onPointerUp);

      start();

      const onMotionChange = (event) => {
        const nextSpeed = event.matches ? 22 : 66;
        // Keep carousel active; only adapt speed for reduced-motion preference.
        if (nextSpeed !== speedPxPerSecond) {
          speedPxPerSecond = nextSpeed;
          lastTs = 0;
        }
        start();
      };

      if (typeof prefersReducedMotion.addEventListener === 'function') {
        prefersReducedMotion.addEventListener('change', onMotionChange);
      } else if (typeof prefersReducedMotion.addListener === 'function') {
        prefersReducedMotion.addListener(onMotionChange);
      }
    });
  };

  const initScrollTopButton = () => {
    if (document.querySelector('[data-scroll-top-btn]')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'scroll-top-btn';
    button.setAttribute('data-scroll-top-btn', '');
    button.setAttribute('aria-label', 'Retour en haut');
    button.innerHTML = '<span aria-hidden="true">&#8593;</span>';

    const updateVisibility = () => {
      const shouldShow = window.scrollY > 280;
      button.classList.toggle('is-visible', shouldShow);
    };

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
  };
  initScrollTopButton();
  initHeroSlider();
  initWhyUsTabs();
  initContactFormTabs();
  initCaseFilters();
  initPartnersCarousel();
  initBlogChips();
})();
