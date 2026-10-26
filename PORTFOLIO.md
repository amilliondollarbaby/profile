# Dioné: Full Portfolio Document

**Owner:** Danielle Sellado, known as **Dione**. Brand name **Dioné**. Based in Davao, Philippines; works remotely on U.S. hours.
**Site:** a single-page portfolio (Astro). Planned address `meetdione.vercel.app` (free; not live yet).
**Repo:** `amilliondollarbaby/profile`, branch `claude/vigilant-pascal-1u31k9`.
**Status:** design and structure done; waiting on Dione's real work, photos and contact details (see section 9).

---

## 1. What the site is for
Get CEOs, founders, coaches and small-brand owners (mostly U.S.) to **book a meeting** with Dione, an
Executive Assistant who is also a creative: *"the operations behind the business and the creative work in
front of it."* Each section answers one question a CEO has while deciding whether to hire her.

**Hero line (approved, word for word):** "Sharp enough to run the day. Creative enough to turn ideas into execution."
**Positioning:** Executive Assistant · Social Media Strategy · Creative Operations.

## 2. Verified facts (use only these; never invent)
| Role | Company | Dates |
|---|---|---|
| Social Media Manager | D2C Brand (U.S.) | Jan 2025 - Present |
| Director of Operations & Brand Specialist | Coast to Coast Property Partners (U.S. real estate) | Sep 2022 - Dec 2025 |
| Executive Assistant & CEO Coaching Admin | Livian (U.S.) | Jan 2021 - Sep 2024 |
| Freelance Executive Assistant | Self-employed | Jan 2020 - Dec 2023 |

- Also runs a small hiring business and trains VAs. English C1.
- **Headline numbers on the site:** 6+ years · Social Media Manager now · 4 years running business Facebook pages · 3 executive coaches supported.
- **Never headline** "70+ CEO coaching clients" or "8-10+ real estate agents": visitors read those as her own clients.
  Lead with the social media and creative background; real estate stays in the background.
- **Tools:** Ops: Google Workspace, Airtable, Calendly, Zapier, Boomerang, Follow Up Boss, Brivity, BoomTown, GoHighLevel, Mojo Sells, Realtor.com. Creative: Canva. AI: Claude, ChatGPT, AssemblyAI.
- **Education:** not published; her profiles disagree. Needs her confirmation.
- Her AI assistant is called **Babbi**. BabbiBot (a possible product) is not mentioned on the site.

## 3. The 8 sections (order on the page)
| # | Section | Question it answers | What is there now |
|---|---|---|---|
| 01 | **Cover** | Who is she, in 5 seconds? | Name in wide caps with "Dioné" in script across it, pills, hero line, one main photo slot, ghost name |
| 02 | **Executive partnership** | Can I trust her? | "At a glance" numbers, career list, the Friday-reset pull quote, 2 principle slots, 3 testimonial slots (to come) |
| 03 | **Statement** | (a pause) | Full-screen approved copy: "Creativity isn't the software. It's the way you see. And the way you see gets better the more you feed it." |
| 04 | **Socials & creative** | Can she make us look good? | Split-title showcase with a sliding strip of work cards, then 4.1 Graphics (6), 4.2 Designs (6), 4.3 AI motion (4), 4.4 Reels (5, phone-shaped) |
| 05 | **AI workflows** | Will she make us faster? | "More output. Used responsibly." The 5-step Babbi system and 2 proof slots |
| 06 | **Tools** | Will she fit our setup? | Credits-style list: Ops / Creative / AI |
| 07 | **Passion projects** | Does she build on her own? | ODD1S art-toy project (see section 7); 5 render slots |
| 08 | **Let's meet** | Do I like her? What's next? | "Let's work" marquee, invite, Book a call, colophon with contact and profile links |

Extras: three wavy cotton-candy ribbons with moving words (after 02, after 04, before 08), a loading intro (name + counter), nav with Reels and Passion projects links.

## 4. Look and design system (Dione's latest calls win)
**Reference:** a Calvin Klein campaign layout.
- **Typography, 100% from that reference:** wide bold caps (**Archivo**, width 125, weight 800) with a **cursive script** (**Great Vibes**) woven through. Her nickname **Dioné is always in script**. Archivo also sets body and labels.
- **Labels are outlined pills**, e.g. "(02) // The executive partner".
- **Background:** clean light off-white `#EFEFED`, thin construction lines, a thin ring, a huge faint ghost name. **No pastel gradient, no grain.**
- **Cotton candy** (pink `#F5A3C7`, purple `#C7B2F0`, yellow `#F8DC72`, sky `#A6D0F3`): tiny marks everywhere (dots, small squares, dashes, registration marks, pink link underline) **plus** bolder design elements: wavy ribbons and colour blocks (circles, pills, half-circles, tilted bars). Text stays ink-black.
- **Buttons:** solid ink pills with a tiny colour dot, or outlined pills. (3D keyboard keys were tried and rejected.)
- **Layout:** 12-column grid, 80px outer margin, hairline rules, a running-head pill on every section, a different composition per section.
- **Photos:** one main cutout of Dione on the cover, no frames. She will shoot it in a light-gray studio, seated, in the spirit of a fashion editorial.
- **Rejected on purpose:** no logo or scribble heart, no LinkedIn carousels, no hand-drawn notes, no red/brown, no frame collages, no highlighter bars, no 3D keys.

## 5. Voice rules (all copy)
Direct, short sentences. Confident but never bragging. Not pretentious, not weak. Professional but warm, never corporate.
Concrete over abstract. Invites end with a question or warm invite, never a pushy command. Every line should make a CEO
think "capable and trustworthy". **Never invent** facts, clients, numbers or testimonials: use clearly marked "to come".
Draft copy on the site is marked **[Draft]** until she approves it.

## 6. Tech
- **Astro 5** + TypeScript, **GSAP** (ScrollTrigger) + **Lenis** smooth scroll, fonts via Fontsource (self-hosted).
- Motion respects `prefers-reduced-motion`. Mobile-first. Builds to a static site (`npm run build`).
- Files: `src/pages/index.astro`, `src/components/*` (one per section), `src/data/content.ts` (all facts and TODOs),
  `src/styles/global.css` (tokens), `src/scripts/main.ts` (loader, reveals, ribbons).
- Run: `npm install`, `npm run dev`. Hosting plan: Vercel free tier, address `meetdione.vercel.app`.

## 7. Passion project: ODD1S
> For the ones who never quite fit the box, so they made their own.

Her hand-painted canvases reimagined as collectible vinyl art-toy figures (blind-box style) in **her own art style**.
- **Little Cravings** (tiny world): Maki (sushi), Naru (ramen), Mandu, Panky (pancake), Ichigo (strawberry matcha).
- **Route 222** (adult surreal park): Joline, Valerie, Sally, Candy, named after songs.
- Pipeline: painting -> AI toy concepts -> image-to-3D -> **Blender** -> AI polish -> **a video per world**.
- Full story: `passion-projects/ODD1S.md`; local-Blender hand-off folder: `passion-projects/ODD1S-studio/`.

## 8. Decisions log (so nothing gets re-argued)
- Site name/address: `meetdione.vercel.app`; writes "meetdioné" in copy (free URLs can't hold the é).
- Real estate numbers removed from headline; creative first.
- Collection brand: **ODD1S**. Collections: **Little Cravings** and **Route 222**. No Tagalog names.
- Test first with one baby (Maki) and one adult (Joline) before the rest.
- GitHub push works (Claude app installed on `amilliondollarbaby`).

## 9. Still needed from Dione (the site shows "to come" slots until then)
1. **Main photo** (cutout, studio) for the cover; second photo optional.
2. **Work** for each block: 6 graphics, 6 designs, 4 AI motion, 5 reels (no LinkedIn posts).
3. **Testimonials** (1-3 real quotes), 2 more "how I think" principles, AI proof pieces, the AI Research-step line.
4. **Contact:** booking link (e.g. Calendly), email, Upwork and OnlineJobs.ph URLs, confirm LinkedIn URL.
5. **Closing copy** (a few personal touches), tool logos, education confirmation.
6. **ODD1S renders** for the Passion projects section; domain decision (free now, paid later optional).
7. Approve or rewrite the **[Draft]** headlines: "Trusted with the business, not just the inbox", "Built to be seen", "More output. Used responsibly", "Got a business that needs both sides running?"
