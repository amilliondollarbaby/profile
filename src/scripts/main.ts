import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const root = document.documentElement;
const motion = root.classList.contains('js-motion');

// ---------- Creative tabs (work without motion too) ----------
function initTabs() {
  const list = document.querySelector<HTMLElement>('[data-tabs]');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
    ScrollTrigger.refresh();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (step) select(tabs[(i + step + tabs.length) % tabs.length], true);
    });
  });
  select(tabs[0]);
}

// ---------- Nav gets a white backing once the page scrolls ----------
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  ScrollTrigger.create({
    start: 'top -10',
    onToggle: (self) => nav.classList.toggle('is-scrolled', self.isActive),
  });
}

// ---------- Motion ----------
function playLoader(onDone: () => void) {
  const loader = document.getElementById('loader');
  if (!loader || root.classList.contains('skip-loader')) { loader?.remove(); onDone(); return; }
  const pct = document.getElementById('loader-pct')!;
  const count = { v: 0 };
  gsap.timeline({
    onComplete: () => {
      try { sessionStorage.setItem('dione-loaded', '1'); } catch {}
      loader.remove();
    },
  })
    .to(loader.querySelector('path'), { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0)
    .to(count, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: () => { pct.textContent = String(Math.round(count.v)); } }, 0)
    .to(loader, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '+=0.25')
    .add(onDone, '-=0.45');
}

function heroIn() {
  gsap.from('[data-hero-line]', { yPercent: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' });
}

function initReveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out' }),
  });

  // Statement: each line lifts in as it is read; the heart draws itself.
  const lines = gsap.utils.toArray<HTMLElement>('[data-statement-line]');
  gsap.from(lines, {
    opacity: 0.12, y: 40, stagger: 0.25, ease: 'none',
    scrollTrigger: { trigger: '#statement', start: 'top 70%', end: 'center 45%', scrub: true },
  });
  const heart = document.querySelector('.statement__heart path');
  if (heart) {
    gsap.fromTo(heart, { strokeDasharray: 1, strokeDashoffset: 1 }, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '#statement', start: 'center 60%', end: 'bottom 70%', scrub: true },
    });
  }

  // Rails drift in sideways the first time they appear.
  gsap.utils.toArray<HTMLElement>('.rail').forEach((rail) => {
    gsap.from(rail.children, {
      x: 80, opacity: 0, duration: 1, stagger: 0.06, ease: 'expo.out',
      scrollTrigger: { trigger: rail, start: 'top 85%', once: true },
    });
  });
}

gsap.registerPlugin(ScrollTrigger);
initTabs();

if (motion) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = a.getAttribute('href')!;
      if (target.length < 2) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: 0 });
    });
  });
  initNav();
  initReveals();
  playLoader(heroIn);
} else {
  initNav();
}
