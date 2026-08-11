(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header: solid bg on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  const closeNav = () => { nav.dataset.open = 'false'; hamburger.setAttribute('aria-expanded', 'false'); };
  const toggleNav = () => {
    const open = nav.dataset.open === 'true';
    nav.dataset.open = String(!open);
    hamburger.setAttribute('aria-expanded', String(!open));
  };
  hamburger.addEventListener('click', toggleNav);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ---------- scrollspy ---------- */
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (sections.length) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id;
        const link = navLinks.find(a => a.getAttribute('href') === id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Tier 0 reveal-on-scroll ---------- */
  if (!reduce) {
    const io = new IntersectionObserver((es) => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- LGPD cookie banner ---------- */
  const bar = document.getElementById('cookie-bar');
  if (bar) {
    if (!localStorage.getItem('cookie-consent')) bar.hidden = false;
    const setConsent = v => { localStorage.setItem('cookie-consent', v); bar.hidden = true; };
    document.getElementById('cookie-accept').addEventListener('click', () => setConsent('accept'));
    document.getElementById('cookie-reject').addEventListener('click', () => setConsent('reject'));
  }

  /* ---------- year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
