/* =========================================================================
   NUZMOL ISLAM KHAN — PORTFOLIO BEHAVIOR
   data.js (SITE_DATA) pore sob section render kore ar interaction chalay.
   Content bodlate chaile data.js edit koro, ei file lagbe na.
   ========================================================================= */

(() => {
  const d = SITE_DATA;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------- ICONS ---------------------------------- */
  const ICONS = {
    folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l1.5 2h9.5A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"/>',
    dashboard: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="4" rx="1.2"/><rect x="13.5" y="10.5" width="7" height="10" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/>',
    database: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
    tools: '<path d="M14.5 6.5a4 4 0 0 0-5.2 5.2L3.5 17.5a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.2-.6-.6-2.2Z"/>',
    cap: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z"/><path d="M6.5 11.8V16c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.2"/><path d="M21.5 9.5V15"/>',
    team: '<circle cx="8.5" cy="8" r="3"/><circle cx="16" cy="9" r="2.4"/><path d="M3 19c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5"/><path d="M14.5 14.3c2.1.2 3.9 1.7 4.5 4.7"/>',
    powerbi: '<path d="M6 11h2.6v9H6z"/><path d="M11 7h2.6v13H11z"/><path d="M16 4h2.6v16H16z"/>',
    excel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 15h18M9 4v16M15 4v16"/>',
    sql: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/>',
    python: '<path d="M12 3.5c-3 0-3.6 1-3.6 2.2v1.9h3.7v.6H6.9C5.4 8.2 4.5 9.6 4.5 12s.9 3.8 2.4 3.8h1.4v-2c0-1.9 1.2-3 3.6-3h3.4c1.6 0 2.7-1 2.7-2.7V6c0-1.6-1.4-2.5-3.4-2.5H12Z"/><path d="M12 20.5c3 0 3.6-1 3.6-2.2v-1.9h-3.7v-.6h5.2c1.5 0 2.4-1.4 2.4-3.8s-.9-3.8-2.4-3.8h-1.4v2c0 1.9-1.2 3-3.6 3H8.7c-1.6 0-2.7 1-2.7 2.7V18c0 1.6 1.4 2.5 3.4 2.5H12Z"/>',
    dax: '<path d="M4 19V5l6 8 6-8v14"/><path d="M18 5h2v14h-2"/>',
    query: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/><path d="M7.5 10.5h6M10.5 7.5v6"/>',
    clean: '<path d="M4 20l5.5-5.5"/><path d="M9 9l6 6"/><path d="M13.5 4.5l6 6-4.5 4.5-6-6Z"/>',
    analyze: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 16V11M11 16V8M15 16v-5M19 16V6"/>',
    model: '<rect x="3.5" y="3.5" width="7" height="6" rx="1.3"/><rect x="13.5" y="3.5" width="7" height="6" rx="1.3"/><rect x="8.5" y="14.5" width="7" height="6" rx="1.3"/><path d="M7 9.5v2.5h10V9.5M12 12v2.5"/>',
    kpi: '<path d="M4 17l5-5 4 3 7-8"/><path d="M15 7h5v5"/>',
    story: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"/><path d="M8 8.5h8M8 12h5"/>',
    visualize: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5A8.5 8.5 0 0 1 20.5 12H12Z"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.8 7 21l5-2.6 5 2.6-1.5-7.2"/><path d="M12 6.4l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3Z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
    phone: '<path d="M6.5 3.5c1 0 1.9.7 2.2 1.7l.7 2.2c.2.8 0 1.6-.6 2.1l-1.3 1.2a12.3 12.3 0 0 0 5.4 5.4l1.2-1.3c.5-.6 1.3-.8 2.1-.6l2.2.7a2.3 2.3 0 0 1 1.7 2.2v1.7c0 1.4-1.2 2.4-2.5 2.2C10 20 4 14 3.7 6.5c0-1.3 1.1-2.5 2.4-2.5Z"/>',
    whatsapp: '<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z"/><path d="M9 8.8c.2-.4.4-.4.6-.4h.4c.2 0 .3 0 .4.3.2.4.5 1.3.6 1.4.1.1.1.3 0 .4l-.3.4c-.1.2-.2.3-.1.5.2.3.7 1.1 1.5 1.7 1 .8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.4-.1l1.2.6c.2.1.3.2.3.3 0 .2 0 .8-.3 1.1-.3.4-1.1.7-1.5.7-.4 0-1.4-.2-2.9-1.2-1.8-1.2-2.9-2.9-3-3.1-.1-.1-.7-1-.7-1.9 0-.9.5-1.3.7-1.6Z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>',
    linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5v6M8 7.8v.1M12 16.5v-3.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.6"/>',
    github: '<path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1.1-2.9-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-1.9-.2-4-1-4-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8 8 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.2-2 4-3.9 4.2.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z"/>',
    arrow: '<path d="M6 18L18 6"/><path d="M9 6h9v9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  };
  const svg = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  const $ = (id) => document.getElementById(id);
  const setText = (id, v) => { const el = $(id); if (el) el.textContent = v; };
  const setAttr = (id, a, v) => { const el = $(id); if (el) el.setAttribute(a, v); };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ----------------------------- PROFILE / NAV / HERO ------------------- */
  const p = d.profile;
  document.title = `${p.name} — ${p.role}`;
  setText('brandName', p.name);
  setText('brandInitials', p.initials);
  setText('brandRole', p.role);
  setText('heroStatus', p.availability);
  setText('heroBio', p.bio);
  setText('photoTag', p.photoTag);
  setText('footerName', p.name);
  setAttr('heroPhoto', 'src', p.photo);
  setAttr('heroPhoto', 'alt', `${p.name} — profile photo`);
  setAttr('cvLink', 'href', p.resume);
  setAttr('cvLink', 'download', 'Nuzmol_Islam_Khan_CV.pdf');
  setAttr('emailBtn', 'href', `mailto:${p.email}`);
  setAttr('linkedinBtn', 'href', p.linkedin);
  const h1 = $('heroName');
  if (h1) h1.innerHTML = `${esc(p.firstName)} <span>${esc(p.lastName)}</span>`;
  const tags = $('heroTags');
  if (tags) tags.innerHTML = p.roleTags.map((t) => `<span class="role-chip">${esc(t)}</span>`).join('');

  const socialsHTML = [
    ['GitHub', p.github, 'github'],
    ['LinkedIn', p.linkedin, 'linkedin'],
    ['WhatsApp', p.whatsapp, 'whatsapp'],
    ['Email', `mailto:${p.email}`, 'email'],
  ].map(([label, href, icon]) => {
    const ext = href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${esc(href)}"${ext} aria-label="${label}" title="${label}">${svg(icon)}</a>`;
  }).join('');
  ['heroSocials', 'footerSocials'].forEach((id) => { const el = $(id); if (el) el.innerHTML = socialsHTML; });

  const contact = $('contactCards');
  if (contact) {
    contact.innerHTML = `
      <a class="contact-card" href="mailto:${esc(p.email)}">${svg('email')}<div><div class="k">Email</div><div class="v">${esc(p.email)}</div></div></a>
      <a class="contact-card" href="tel:${esc(p.phone.replace(/[^+\d]/g, ''))}">${svg('phone')}<div><div class="k">Phone</div><div class="v">${esc(p.phone)}</div></div></a>
      <a class="contact-card" href="${esc(p.whatsapp)}" target="_blank" rel="noopener">${svg('whatsapp')}<div><div class="k">WhatsApp</div><div class="v">Chat directly</div></div></a>
      <div class="contact-card">${svg('pin')}<div><div class="k">Location</div><div class="v">${esc(p.location)}</div></div></div>
      <a class="contact-card" href="${esc(p.linkedin)}" target="_blank" rel="noopener">${svg('linkedin')}<div><div class="k">LinkedIn</div><div class="v">linkedin.com/in/mdnuzmol</div></div></a>
      <a class="contact-card" href="${esc(p.github)}" target="_blank" rel="noopener">${svg('github')}<div><div class="k">GitHub</div><div class="v">github.com/Nuzmolkhan</div></div></a>`;
  }

  /* ----------------------------- TICKER --------------------------------- */
  const ticker = $('tickerTrack');
  if (ticker) {
    const items = d.ticker.map((t) => `<span class="ticker-item">${esc(t)}</span>`).join('');
    ticker.innerHTML = items + items; /* duplicate => seamless loop */
  }

  /* ----------------------------- STATS ---------------------------------- */
  const stats = $('statsGrid');
  if (stats) {
    /* projects / dashboards / tools data.js theke auto count hoy */
    const autoValue = {
      projects:   d.projects.filter((x) => x.countInStats !== false).length,
      dashboards: d.projects.filter((x) => x.dashboard === true).length,
      tools:      d.skills.filter((x) => x.tool === true).length,
    };
    stats.innerHTML = d.quickStats.map((s) => {
      const dec = s.decimals || 0;
      const value = s.auto ? (autoValue[s.auto] || 0) : s.value;
      return `
      <div class="stat-card">
        <div class="stat-icon">${svg(s.icon)}</div>
        <div>
          <div class="stat-num" data-count="${value}" data-suffix="${esc(s.suffix)}" data-dec="${dec}">${(0).toFixed(dec)}${esc(s.suffix)}</div>
          <div class="stat-lbl">${esc(s.label)}</div>
        </div>
      </div>`;
    }).join('');
  }

  /* ----------------------------- SKILLS --------------------------------- */
  const skills = $('skillsGrid');
  if (skills) {
    skills.innerHTML = d.skills.map((s, i) => `
      <div class="skill-card reveal glow" style="transition-delay:${(i % 4) * 70}ms">
        <div class="skill-icon">${svg(s.icon)}</div>
        <div class="skill-name">${esc(s.name)}</div>
        ${s.sub ? `<div class="skill-sub">${esc(s.sub)}</div>` : ''}
      </div>`).join('');
  }

  /* ----------------------------- PROJECTS ------------------------------- */
  const track = $('projectsGrid');
  if (track) {
    track.innerHTML = d.projects.map((pr) => `
      <article class="project-card">
        <div class="project-thumb"><img src="${esc(pr.image)}" alt="${esc(pr.title)} preview" loading="lazy"></div>
        <div class="project-body">
          <span class="project-tag">${esc(pr.tag)}</span>
          <h3 class="project-title">${esc(pr.title)}</h3>
          <p class="project-desc">${esc(pr.description)}</p>
          <div class="project-stat">${esc(pr.stat)}</div>
          <div class="project-links">
            ${pr.links.map((l) => `<a class="project-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${svg('arrow')}</a>`).join('')}
          </div>
        </div>
      </article>`).join('');
  }

  /* ----------------------------- WHAT I DO ------------------------------ */
  const flow = $('flowGrid');
  if (flow) {
    flow.innerHTML = d.whatIDo.map((f, i) => `
      <div class="flow-item reveal" style="transition-delay:${i * 80}ms">
        <div class="flow-num">${svg(f.icon)}</div>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.text)}</p>
      </div>`).join('');
  }

  /* ----------------------------- ABOUT ---------------------------------- */
  setText('aboutHeading', d.about.heading);
  setText('aboutP1', d.about.paragraph1);
  setText('aboutP2', d.about.paragraph2);
  const facts = $('factList');
  if (facts) facts.innerHTML = d.about.facts.map((f) => `<div class="fact"><div class="k">${esc(f.label)}</div><div class="v">${esc(f.value)}</div></div>`).join('');

  /* ----------------------------- EDUCATION ------------------------------ */
  const edu = $('educationTimeline');
  if (edu) {
    edu.innerHTML = d.education.map((e, i) => `
      <div class="timeline-item reveal" style="transition-delay:${i * 90}ms">
        <div class="date">${esc(e.date)}</div>
        <h3>${esc(e.degree)}</h3>
        <div class="place">${esc(e.place)}</div>
        <span class="detail">${esc(e.detail)}</span>
        ${e.extra ? `<div class="extra">${esc(e.extra)}</div>` : ''}
      </div>`).join('');
  }

  /* ----------------------------- CERTIFICATIONS ------------------------- */
  const certs = $('certList');
  if (certs) certs.innerHTML = d.certifications.map((c, i) => `<div class="cert-item reveal" style="transition-delay:${i * 80}ms"><span class="cert-check">${svg('check')}</span><span>${esc(c)}</span></div>`).join('');
  const ai = $('awardIcon'); if (ai) ai.innerHTML = svg('award');
  setText('awardTitle', d.achievement.title);
  setText('awardText', d.achievement.text);

  setText('footerYear', new Date().getFullYear());

  /* =====================================================================
     INTERACTIONS
     ===================================================================== */

  /* -- Theme toggle (dark / light) -- */
  const root = document.documentElement;
  const themeBtn = $('themeToggle');
  const paintThemeIcon = () => {
    if (!themeBtn) return;
    const dark = root.getAttribute('data-theme') !== 'light';
    themeBtn.innerHTML = svg(dark ? 'sun' : 'moon');
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  };
  paintThemeIcon();
  if (themeBtn) themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintThemeIcon();
  });

  /* -- Mobile nav -- */
  const navToggle = $('navToggle');
  const navTabs = $('navTabs');
  if (navToggle && navTabs) {
    navToggle.addEventListener('click', () => {
      const open = navTabs.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navTabs.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      navTabs.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* -- Scroll-spy -- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-tabs a');
  const setActive = (id) => navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => spy.observe(s));
    const contactEl = $('contact');
    if (contactEl) spy.observe(contactEl);
  }

  /* -- Reveal on scroll -- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); ro.unobserve(en.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* -- Count-up numbers -- */
  const fmt = (n, dec) => dec ? n.toFixed(dec) : Math.round(n).toLocaleString('en-US');
  const statNums = document.querySelectorAll('.stat-num');
  const finalText = (el) => `${fmt(Number(el.dataset.count), Number(el.dataset.dec))}${el.dataset.suffix || ''}`;
  if ('IntersectionObserver' in window && statNums.length) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        co.unobserve(el);
        if (reduced) { el.textContent = finalText(el); return; }
        const target = Number(el.dataset.count), dec = Number(el.dataset.dec), suffix = el.dataset.suffix || '';
        const t0 = performance.now(), dur = 1400;
        const tick = (now) => {
          const k = Math.min((now - t0) / dur, 1);
          el.textContent = fmt(target * (1 - Math.pow(1 - k, 3)), dec) + suffix;
          if (k < 1) requestAnimationFrame(tick); else el.textContent = finalText(el);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    statNums.forEach((el) => co.observe(el));
  } else {
    statNums.forEach((el) => { el.textContent = finalText(el); });
  }

  /* -- Cursor glow on skill cards -- */
  document.querySelectorAll('.glow').forEach((c) => {
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* -- Scroll progress + back-to-top -- */
  const bar = $('progress');
  const toTop = $('toTop');
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('is-visible', h.scrollTop > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  /* =====================================================================
     PROJECT SLIDER — auto left-to-right + manual arrows
     ===================================================================== */
  const prev = $('projectsPrev');
  const next = $('projectsNext');
  const dotsWrap = $('sliderDots');
  if (track && prev && next) {
    const cards = Array.from(track.querySelectorAll('.project-card'));
    const AUTO_MS = 3800;
    let timer = null;
    let hovering = false;

    const step = () => {
      if (cards.length < 2) return cards[0] ? cards[0].offsetWidth : 0;
      return cards[1].offsetLeft - cards[0].offsetLeft; /* card width + gap */
    };
    const maxScroll = () => track.scrollWidth - track.clientWidth;
    const overflowing = () => maxScroll() > 8;

    const currentIndex = () => Math.min(cards.length - 1, Math.round(track.scrollLeft / (step() || 1)));

    if (dotsWrap) dotsWrap.innerHTML = cards.map(() => '<i></i>').join('');
    const paintDots = () => {
      if (!dotsWrap) return;
      const nearEnd = track.scrollLeft >= maxScroll() - 8;
      const idx = nearEnd ? cards.length - 1 : currentIndex();
      dotsWrap.querySelectorAll('i').forEach((el, i) => el.classList.toggle('is-on', i === idx));
      dotsWrap.style.display = overflowing() ? 'flex' : 'none';
    };

    const go = (dir) => {
      if (!overflowing()) return;
      const left = track.scrollLeft;
      let target = left + dir * step();
      if (dir > 0 && left >= maxScroll() - 8) target = 0;           /* end -> wrap to start */
      else if (dir < 0 && left <= 8) target = maxScroll();           /* start -> wrap to end */
      track.scrollTo({ left: target, behavior: reduced ? 'auto' : 'smooth' });
    };

    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (reduced || hovering || document.hidden) return;
      timer = setInterval(() => go(1), AUTO_MS);
    };

    prev.addEventListener('click', () => { go(-1); start(); });
    next.addEventListener('click', () => { go(1); start(); });

    /* pause while the person is interacting, resume after */
    const pause = () => { hovering = true; stop(); };
    const resume = () => { hovering = false; start(); };
    [track, prev, next].forEach((el) => {
      el.addEventListener('mouseenter', pause);
      el.addEventListener('mouseleave', resume);
      el.addEventListener('focusin', pause);
      el.addEventListener('focusout', resume);
    });
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', () => setTimeout(resume, 2500), { passive: true });
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

    track.addEventListener('scroll', paintDots, { passive: true });
    window.addEventListener('resize', paintDots);
    paintDots();

    /* only autoplay while the projects section is on screen */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => { en.isIntersecting ? start() : stop(); });
      }, { threshold: 0.25 }).observe(track);
    } else {
      start();
    }
  }
})();
