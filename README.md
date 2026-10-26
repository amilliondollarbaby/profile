# Dioné portfolio

Danielle "Dione" Sellado's portfolio site. Read `CLAUDE.md` before changing anything.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/, ready for Vercel
```

- `src/data/content.ts`: every fact, label and TODO on the site
- `src/components/`: one file per section (01–08)
- `src/scripts/main.ts`: loader, Lenis smooth scroll, GSAP reveals, tabs, deck viewer
- `assets/`: source carousels and brand files (images are optimized at build time)
