import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const root = document.documentElement;
const motion = root.classList.contains('js-motion');

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
  const bar = document.getElementById('loader-bar')!;
  const count = { v: 0 };
  // The counter runs, then the loader fades into the page.
  gsap.timeline({
    onComplete: () => {
      try { sessionStorage.setItem('dione-loaded', '1'); } catch {}
      loader.remove();
    },
  })
    .to(count, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => { pct.textContent = String(Math.round(count.v)); bar.style.width = `${count.v}%`; } })
    .to(loader, { opacity: 0, duration: 0.9, ease: 'power2.inOut' }, '+=0.2')
    .add(onDone, '-=0.6');
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

  // Statement: each line lifts in as it is read.
  const lines = gsap.utils.toArray<HTMLElement>('[data-statement-line]');
  gsap.from(lines, {
    opacity: 0.12, y: 40, stagger: 0.25, ease: 'none',
    scrollTrigger: { trigger: '#statement', start: 'top 70%', end: 'center 45%', scrub: true },
  });
}

// Ribbons: the words drift along the wavy path, one repeat at a time, forever.
function initRibbons() {
  document.querySelectorAll<SVGTextPathElement>('[data-ribbon]').forEach((tp) => {
    const text = tp.parentNode as SVGTextElement;
    const seg = text.getComputedTextLength() / 6;
    gsap.to(tp, { attr: { startOffset: -seg }, duration: seg / 45, ease: 'none', repeat: -1 });
  });
}

gsap.registerPlugin(ScrollTrigger);

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
  document.fonts.ready.then(initRibbons);
  playLoader(heroIn);
} else {
  initNav();
}
