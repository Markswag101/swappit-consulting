// ── Nav scroll effect ──────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile burger menu ─────────────────────────────
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ── Smooth scroll offset for fixed nav ────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Scroll reveal ──────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('revealed');
      revealObserver.unobserve(el.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.stat, .service-card, .project-card, .process__step, .about__left, .about__right'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Contact form ───────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent ✓';
    btn.style.background = '#1a7a1a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send message →';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}
