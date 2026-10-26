# CLAUDE.md: ODD1S Studio (Dione's art-toy passion project)

> Read this whole file before doing anything. It is the hand-off from the Claude session that has
> worked with Dione all day on her portfolio website. Everything here is real and came from her.
> Be good to her. She calls her assistant **"Babbi"**. 💜

## 0. How to work with Dione (most important)
- **She is a beginner with Blender, GitHub and 3D.** Explain every step in plain words. One step at a
  time, numbered, with exactly where to click. Never dump a wall of options.
- She gets confused by too many choices. Give a recommendation and at most 2-3 clear options.
- **Be honest about limits.** Earlier in the day Babbi over-promised (said cloud Blender could import her
  own 3D figures; it can't). Never claim something works until you've verified it.
- She is very particular about details and about her art style. When something looks off, ask which part,
  then change only that part.
- **Never invent** facts, names, clients or results. Mark unknowns as TODO and ask.
- Keep replies warm, direct and short. No corporate tone. Avoid pretentious copy.
- Show results often (screenshots / renders) and celebrate the wins with her. ✨

## 1. Who she is
- **Danielle Sellado**, nickname **Dione** / brand **Dioné**. Davao, Philippines; works remotely for U.S. clients.
- Executive Assistant + social media / creative operations by trade. This project is her **passion project**
  (a separate art-toy brand), shown in the "Passion projects" section of her portfolio website.
- Her portfolio site (Astro) is on GitHub: `amilliondollarbaby/profile`, branch `claude/vigilant-pascal-1u31k9`.
  Planned address: `meetdione.vercel.app` (not live yet). Don't touch the site unless she asks.

## 2. The project: ODD1S (written "ODD1S")
> For the ones who never quite fit the box, so they made their own.

Hand-painted canvases reimagined as **collectible designer art-toy figures** (blind-box, SkullPanda-style
vinyl toy look) but in **her own art style**, as original characters (not copies of anyone's IP).

Pipeline: painting -> Higgsfield toy concept renders -> Higgsfield image-to-3D (.glb) -> **Blender** (clean-up,
vinyl materials, base, lights, render) -> Higgsfield polish/upscale -> **one video per world**.

Full story, names and video ideas: **`ODD1S-story.md`** (same folder).

### Collection 1: Little Cravings (tiny / baby world, "the Food Series") - 5 figures
01 **Maki** (sushi), 02 **Naru** (ramen), 03 **Mandu** (mandu dumplings), 04 **Panky** (pancake),
05 **Ichigo** (**strawberry matcha** theme). Names 03-05 are suggestions; confirm with Dione.
Each girl sits in her own soft purple halo (from the paintings), with food in her hair and around her.

### Collection 2: Route 222 (adult, surreal park) - 4 figures, named after songs
**Joline** (*Jolene*, short bob hair), **Valerie** (*Valerie*, headphones), **Sally** (*Mustang Sally*),
**Candy** (*Candy*, Mandy Moore). Dione picked Sally and Candy herself. Park: brick bridge, clouds,
unicorn, UFO, the **222** sign, cat in hair curlers, dog in a beret, bunny in pearls, retro TV ("myxx"),
rotary phone, dice. Which painted girl is who (Babbi's best guess, **confirm with Dione**):
Joline = short-haired bob girl (canvas 1, right); Candy = long-haired girl lounging left (canvas 1);
Sally = long-haired girl with arms raised (canvas 2); Valerie = girl lying at the bottom with the cord by her ear (canvas 2).

### Final deliverables
1. A 3D figure per character (Blender + AI-polished render), baby and adult, blind-box presentation.
2. **A video of the tiny world** (Little Cravings) and **a video of the surreal park** (Route 222).
3. **Test first with ONE baby (Maki) and ONE adult (Joline)**, then do the rest.

## 3. Her art style (very important, she rejected renders that missed this)
- **Baby / Little Cravings:** doll-like chibi girls, big head, small body, huge glossy eyes with sparkle
  highlights and soft lower lashes, rosy blush, tiny nose, full glossy lips, bangs/bob hair, food as
  hair accessories, purple halo behind the head. Painted, slightly grainy, acrylic look.
- **Adult / Route 222:** **mature, long-legged, elegant** women, NOT chibi and NOT short or toy-proportioned.
  Dione said the first adult renders "are not my art style": adults are more mature with long legs.
  Aim for slim fashion-doll proportions (about 8-9 heads tall), almond dreamy eyes, soft brows, full lips,
  wistful half-lidded expression, lounging poses taken from her canvases.
- Materials for the toy look: smooth semi-matte vinyl skin, glossy eyes and lips, sculpted hair, painted details,
  small display base. Soft light-gray studio backdrop for presentation renders.

## 4. Where things stand (Oct 26 2026)
- Done: story, names, collection structure (`ODD1S-story.md`). Site "Passion projects" section has placeholder slots.
- Higgsfield (her account, Max plan, ~1,680 credits left): see `higgsfield/jobs.md`.
  4 toy-concept renders were made (about 11 credits). **The first adult renders were rejected as off-style.**
  A redo of Joline and Sally (long legs, mature) finished but **nobody has looked at them yet**.
  The previous session could NOT view Higgsfield images (network blocked), so no render has been quality-checked by Claude.
- Not done: image-to-3D (.glb) files, anything in Blender, the videos.

## 5. Blender plan (this is why she opened this folder locally)
- Dione has Blender installed on her computer and wants to **design in Blender first**.
- Connect with `/use-blender` (Higgsfield "use Blender" MCP; needs Node.js 24+ and Blender 4.2+). Verify with `bl_*` tools.
- Hosted "3D Jutsu" (cloud Blender) can build scenes from primitives and render, but **cannot import her own
  .glb figures** (catalog models only). So figures live in **her local Blender**.
- Suggested first session: (1) confirm the connection works; (2) import one figure .glb (once generated);
  (3) vinyl material: matte skin, glossy eyes/lips; (4) round base, soft studio lights, camera; (5) render a
  turntable and a still. Teach her each click as you go.
- Higgsfield image-to-3D candidates: `meshy_v7_image_to_3d` (textured GLB, optional rigging) and `tripo_h3_1_image_to_3d`.
  Check cost first (`get_cost`), tell her the price, then generate.

## 6. Other rules
- Don't use her LinkedIn carousels for this project. The paintings are in `references/paintings/` (JPGs).
- No Tagalog in names (she rejected that). Brand name: **ODD1S**. Collections: **Little Cravings**, **Route 222**.
- Credits are real money. Always preflight costs and tell her before spending.
