# Crew Wellness Hidden Landing Page — Implementation Plan

> **For agentic workers:** Execute with superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax. NOTE: this is a marketing/frontend page — "verification" means `npm run build` + grep-the-built-dist + visual/local checks, NOT pytest (there is no unit-test surface for a static React page).

**Goal:** Ship a hidden `/wellness` landing page on `seascope.tech` (buyer pitch + crew section, one page) that matches the core site theme, uses real screenshots rendered from the approved concept mockup, and converts via the existing demo modal.

**Architecture:** New `src/pages/Wellness.jsx` (mirrors `SeaScopeCDS.jsx`), routed in `App.jsx` via `wrap()` (gives it `SiteLayout` nav/footer). Hidden via Helmet `noindex` + no nav/footer link + sitemap omission + robots `Disallow`. Screenshots are PNGs captured from `concept_crew_wellness_app_demo.html` with Playwright, committed to `public/images/wellness/`. Copy authored via the `marketing-writer` agent (brand voice). Deploy via the verified-SHA Vercel CLI path.

**Tech Stack:** Vite + React + React Router + Tailwind + react-helmet-async (existing); Playwright + google-chrome (for screenshot capture, from `/home/seascope-cds/frontend/node_modules`).

**Spec:** `/home/theremoteaidoc/docs/superpowers/specs/2026-06-01-wellness-landing-page-design.md`

**Worktree/branch:** all work on `feature/wellness-landing` in `/home/theremoteaidoc/`. Commit locally; do NOT `git push` (push can trigger Vercel auto-deploy). Deploy only via the gated step in Chunk 4.

---

## File Structure

| File | Responsibility | New/Modify |
|---|---|---|
| `/home/seascope-cds/scripts/capture-wellness-screens.mjs` | One-off Playwright script: render the concept mockup, drive each screen, clip the phone frame → PNGs into the website repo | Create (lives in seascope-cds repo, where Playwright + the mockup are) |
| `/home/theremoteaidoc/public/images/wellness/*.png` | Captured screenshots (home, bp, glucose, trends) | Create (generated) |
| `/home/theremoteaidoc/docs/superpowers/specs/wellness-copy.md` | Approved buyer + crew copy (marketing-writer output), source of truth for page text | Create |
| `/home/theremoteaidoc/src/pages/Wellness.jsx` | The page component (buyer + crew sections, screenshots, demo CTA) | Create |
| `/home/theremoteaidoc/src/App.jsx` | Register `/wellness` route | Modify |
| `/home/theremoteaidoc/public/robots.txt` | Add `Disallow: /wellness` | Modify |

---

## Chunk 1: Screenshot assets

### Task 1: Capture wellness screens from the concept mockup

**Files:**
- Create: `/home/seascope-cds/scripts/capture-wellness-screens.mjs`
- Output: `/home/theremoteaidoc/public/images/wellness/{home,bp,glucose,trends}.png`

- [ ] **Step 1: Write the capture script**

```js
// /home/seascope-cds/scripts/capture-wellness-screens.mjs
// Renders the approved crew-wellness concept mockup and captures each phone
// screen as a PNG for the marketing landing page. Run from /home/seascope-cds/frontend
// (where playwright is installed). Output goes to the website repo's public dir.
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const MOCKUP = 'file:///home/seascope-cds/demos/concept_crew_wellness_app_demo.html';
const OUT = '/home/theremoteaidoc/public/images/wellness';
const SCREENS = ['home', 'bp', 'glucose', 'sync']; // sync == trends/upstream view

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1040, height: 900 } });
await page.goto(MOCKUP, { waitUntil: 'networkidle' });

// Identify the phone-frame element to clip. The mockup's device frame is the
// element sized with --device-w (375px). Discover its selector at runtime:
const frameSel = await page.evaluate(() => {
  // the screen container lives in #app-screen; its closest sized ancestor is the device frame
  const el = document.getElementById('app-screen');
  // walk up to the element whose computed width ~= 375px (the phone shell)
  let n = el;
  while (n && n.parentElement) {
    const w = parseFloat(getComputedStyle(n).width);
    if (w > 360 && w < 420) return '#' + (n.id || (n.id = 'wellness-device-frame'));
    n = n.parentElement;
  }
  return '#app-screen';
});

for (const id of SCREENS) {
  await page.evaluate((s) => window.showScreen && window.showScreen(s), id);
  await page.waitForTimeout(500); // let the screen settle (CSS transition ~320ms)
  const el = await page.$(frameSel);
  await el.screenshot({ path: `${OUT}/${id}.png` });
  console.log('captured', id);
}
await browser.close();
```

- [ ] **Step 2: Ensure output dir exists + run**

```bash
mkdir -p /home/theremoteaidoc/public/images/wellness
cd /home/seascope-cds/frontend && node /home/seascope-cds/scripts/capture-wellness-screens.mjs
```
Expected: prints `captured home/bp/glucose/sync`, four PNGs written.

- [ ] **Step 3: Verify the images are real (non-empty, phone-shaped)**

```bash
cd /home/theremoteaidoc/public/images/wellness && ls -la *.png && file *.png
```
Expected: 4 PNGs, each > 10KB, dimensions roughly portrait phone (≈750×1334 at 2x). If `showScreen` isn't on `window`, the script falls back; if a screen is blank, open the mockup, confirm the screen id, and adjust SCREENS.

- [ ] **Step 4: Optimize (keep the repo light)**

```bash
cd /home/theremoteaidoc/public/images/wellness
# if pngquant/optipng present, compress; else skip (acceptable)
command -v pngquant >/dev/null && pngquant --force --ext .png --quality 70-90 *.png || echo "pngquant absent — leaving as-is"
```

- [ ] **Step 5: Commit (capture script in seascope-cds, images in theremoteaidoc — two repos)**

```bash
cd /home/seascope-cds && git add scripts/capture-wellness-screens.mjs && git commit -m "tooling: capture crew-wellness concept-mockup screens for marketing"
cd /home/theremoteaidoc && git add public/images/wellness/*.png && git commit -m "assets: crew-wellness app screenshots (rendered from approved concept mockup)"
```
(Note: the seascope-cds commit lands on whatever branch is checked out there — `main`. That's fine, it's a tooling script, not deployed.)

---

## Chunk 2: Copy

### Task 2: Author the buyer + crew copy (brand voice)

**Files:**
- Create: `/home/theremoteaidoc/docs/superpowers/specs/wellness-copy.md`

This task is authored by the **marketing-writer agent** (it auto-loads `seascope-brand-voice`). The implementer dispatches marketing-writer with the content outline from the spec and the hard claims-discipline constraints.

- [ ] **Step 1: Dispatch marketing-writer** to produce final copy for every block:
  - **Buyer:** hero headline + subhead; "the problem" (silent chronic disease between PEMEs); "what the program is"; benefits (earlier detection, retention, MLC/PEME compliance, cost avoidance); "how it fits" (works alongside SeaScope/OneCare/MHG); CTA button label.
  - **Crew:** section headline; "what the app does for you" (log BP/glucose in seconds, see your trends, your PEME baseline, education); "your data, your control" (privacy + consent; explicitly NOT a diagnostic/treatment tool); "coming soon" install note.
  - **Constraints (enforce):** no diagnostic/clinical claims; no AI model/vendor/cost mentions; brand forbidden-phrases list; no pricing. Output plain marked-up copy keyed by block id.

- [ ] **Step 2: Save** the approved copy to `docs/superpowers/specs/wellness-copy.md`.

- [ ] **Step 3: Founder review gate** — surface the copy to Javier for approval BEFORE it goes into the page (copy is external-facing brand content; per AGENT_DOCTRINE the owner approves external copy). Adjust per feedback.

- [ ] **Step 4: Commit**

```bash
cd /home/theremoteaidoc && git add docs/superpowers/specs/wellness-copy.md && git commit -m "content: crew-wellness landing copy (buyer + crew, brand-voice)"
```

---

## Chunk 3: The page

### Task 3: Build `Wellness.jsx` + route + hide it

**Files:**
- Create: `/home/theremoteaidoc/src/pages/Wellness.jsx`
- Modify: `/home/theremoteaidoc/src/App.jsx` (add route)
- Modify: `/home/theremoteaidoc/public/robots.txt`

This task is for the **frontend-engineer agent**. It must FIRST read `src/pages/SeaScopeCDS.jsx` and `src/pages/CargoSolutions.jsx` to copy the exact structural + styling patterns (hero band, `ScrollReveal` sections, card grids, CTA band, `BookDemoModal` wiring), and `src/components/SiteLayout.jsx` to confirm the nav/footer come from the wrapper (do NOT render `SeaScopeNav`).

- [ ] **Step 1: Create `Wellness.jsx`** — a single page component that:
  - Opens with `<Helmet><title>...</title><meta name="robots" content="noindex, nofollow" /></Helmet>` (copy ONLY this snippet pattern from `SeaScopePilot.jsx:28-32`).
  - Renders buyer section then crew section, using the approved copy from `docs/superpowers/specs/wellness-copy.md`.
  - Embeds the four screenshots from `/images/wellness/{home,bp,glucose,sync}.png` — a hero device shot + a 3–4 image gallery in the crew section, each with `loading="lazy"` and descriptive `alt`.
  - Wires the CTA: local `const [demoOpen, setDemoOpen] = useState(false)`, a button → `setDemoOpen(true)`, and `<BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="wellness" />` (mirror `CargoSolutions.jsx`).
  - Uses ONLY existing Tailwind tokens/fonts/components — visually indistinguishable in style from `SeaScopeCDS.jsx`. No new fonts/colors.

- [ ] **Step 2: Register the route in `App.jsx`** — add `import Wellness from './pages/Wellness';` with the other page imports, and `<Route path="/wellness" element={wrap(Wellness)} />` with the other routes. Do NOT add it to nav or footer.

- [ ] **Step 3: Add `Disallow: /wellness`** to `public/robots.txt` under the existing `User-agent: *` block (keep `Allow: /` and the `Sitemap:` line). Do NOT add `/wellness` to `public/sitemap.xml`.

- [ ] **Step 4: Build + verify**

```bash
cd /home/theremoteaidoc && npm run build 2>&1 | tail -5
```
Expected: build succeeds, no errors.

- [ ] **Step 5: Verify hidden + clean (grep the built dist)**

```bash
cd /home/theremoteaidoc
grep -ri "noindex" dist/ | head            # page carries noindex
grep -ri "/wellness" public/sitemap.xml || echo "OK: /wellness absent from sitemap"
grep -c "wellness" public/robots.txt        # Disallow present
# leak check — no model/vendor/cost terms in the built bundle's wellness content
grep -rIoE "gemini|deepseek|claude|gpt-|model_used|cost_usd|COGS" dist/assets/*.js | head || echo "OK: no model/cost leak"
```
Expected: noindex present; sitemap clean; robots has the rule; no leaked terms.

- [ ] **Step 6: Local visual check** — run `npm run preview` (or `npx vite preview`), open `/wellness`, confirm: both sections render, screenshots show, theme matches the rest of the site, demo modal opens, mobile width looks right. Capture a screenshot of the rendered page for the founder.

- [ ] **Step 7: Commit**

```bash
cd /home/theremoteaidoc && git add src/pages/Wellness.jsx src/App.jsx public/robots.txt && git commit -m "feat: hidden /wellness landing page (buyer + crew, noindex, demo CTA)"
```

---

## Chunk 4: Deploy (orchestrator-run, gated)

### Task 4: Verified-SHA Vercel deploy

**This task is NOT delegated to a subagent — the orchestrator runs it, carefully, per the website regression doctrine.**

- [ ] **Step 1: Founder approval of the rendered page** (screenshot from Chunk 3 Step 6) before any deploy.

- [ ] **Step 2: Merge the feature branch to `main` locally** (so `main` = what we deploy, keeping main = prod source-of-truth):

```bash
cd /home/theremoteaidoc && git checkout main && git merge --no-ff feature/wellness-landing -m "merge: hidden /wellness landing page"
```

- [ ] **Step 3: VERIFY VERCEL PROD SHA (mandatory regression guard)** — query Vercel's live prod for the actual git SHA + branch it was built from. If that branch is not what local `main` is, **STOP** — branches diverged; do not deploy; investigate `git log --all --oneline | head` and reconcile first. (See memory: "NEVER trust git branch names to match Vercel production — always verify the commit SHA.")

- [ ] **Step 4: Confirm clean working tree**, then deploy:

```bash
cd /home/theremoteaidoc && git status --short   # must be clean
vercel deploy --prod --yes
```

- [ ] **Step 5: Post-deploy live verification:**
  - `https://seascope.tech/wellness` renders (both sections, screenshots).
  - `https://seascope.tech/` home page + nav are UNCHANGED (no stale-site regression — the thing that bit us twice in April).
  - View-source `/wellness` → `noindex` meta present.
  - `/wellness` NOT linked from home/nav/footer.

- [ ] **Step 6: Rollback if anything regressed:** `vercel promote <previous-prod-url> --yes` (restores last good deploy; works on free tier).

---

## Highest-risk steps

1. **Chunk 4 Step 3 (Vercel SHA verify)** — skipping it is exactly what caused the two April 2026 stale-site regressions. Non-negotiable gate before deploy.
2. **Chunk 1 screenshot capture** — if the mockup's `showScreen`/frame selector differs at runtime, screens come out blank. Verify each PNG visually (Step 3) before using them; a blank product shot on a buyer page is worse than none.
3. **Chunk 3 theme drift** — the page must be visually indistinguishable in style from the rest of the site. Reuse existing components/tokens; do not introduce new fonts/colors. A landing page that looks "off-brand" undercuts the buyer pitch.
4. **Claims discipline (Chunk 2 + 3)** — no clinical/diagnostic claims, no model/vendor/cost. The grep leak-check (Chunk 3 Step 5) + marketing-writer brand-voice pass are the guards.
