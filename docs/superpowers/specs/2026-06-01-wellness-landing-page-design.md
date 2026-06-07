# Crew Wellness — Hidden Landing Page (seascope.tech/wellness) — Design Spec

**Date:** 2026-06-01
**Surface:** `seascope.tech` marketing site (Vercel), source repo `/home/theremoteaidoc/`
**Status:** Design approved by Javier (2026-06-01). Ready for implementation plan.

## Goal
A single **hidden** landing page at `/wellness` that explains the SeaScope Crew Wellness program to two audiences on one page — fleet buyers (top) and crew/seafarers (below) — and converts buyer interest via the existing "Request a demo" flow. Hidden = shareable-by-link but undiscoverable, while the program/app is pre-launch.

## Decisions (ratified)
- **Audience:** Both, one page — buyer pitch up top, crew section below.
- **Hidden level:** Unlisted + noindex (URL works if shared; not linked, not indexed, not in sitemap).
- **Primary CTA:** "Request a demo / pilot" reusing the existing `BookDemoModal`. Crew install = "coming soon" (PWA not built yet).

## Architecture / where it fits
- New single page component `src/pages/Wellness.jsx`, **structurally mirroring `src/pages/SeaScopeCDS.jsx`** (the canonical live, routed page).
- Route `/wellness` registered in `src/App.jsx` via the existing `wrap(Component)` helper. `wrap()` wraps the page in `SiteLayout`, which renders the site nav + footer itself — so `Wellness.jsx` renders ONLY page content (no nav/footer of its own).
- Reuse existing components: `SiteLayout` (applied by `wrap()`, default export) + `BookDemoModal` (default export) + lucide-react icons. **Do NOT use `SeaScopeNav` or `ScrollReveal`** — both belong to the orphaned, un-routed legacy `SeaScope*.jsx` pages; the live routed pages (`SeaScopeCDS.jsx`, `CargoSolutions.jsx`) use neither. Match THEIR pattern: plain `<section className="py-24 sm:py-32 ...">` bands with the existing `ink-*`/`sea-gradient` Tailwind tokens. No new infrastructure, no new dependencies.
- `BookDemoModal` wiring (same as `CargoSolutions.jsx`): local `useState(false)` for open state, a button calling `setDemoOpen(true)`, and `<BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="wellness" />`. The `source="wellness"` value attributes demo leads to this page.
- Tailwind + the existing brand visual system; match the look of current product pages.

## Theme / visual consistency (hard requirement)
- The page MUST inherit the exact core-site theme: same `tailwind.config.js` tokens, same fonts, same color palette, same `SiteLayout` chrome (nav/footer), same section rhythm and component styling as `SeaScopeCDS.jsx` / `CargoSolutions.jsx`. No bespoke fonts, colors, or layout primitives — reuse what's there so `/wellness` is visually indistinguishable in style from the rest of `seascope.tech`.
- Reuse existing patterns (hero band, plain section bands, card grids, CTA band) from `CargoSolutions.jsx`/`SeaScopeCDS.jsx` rather than inventing new ones.

## Visuals / screenshots
- **Source reality:** there are NO screenshots of the shipped wellness app (its UI isn't built — later step). The only wellness-app visual asset is the **approved concept mockup** `/home/seascope-cds/demos/concept_crew_wellness_app_demo.html` (served at `app.seascope.tech/app-demo`), which renders the 8 phone screens (enroll/login/home/bp/glucose/sync/edu/appts + shore panel).
- **Approach:** render that mockup with Playwright (available at `/home/seascope-cds/frontend/node_modules`) + `google-chrome`, and capture the key phone screens as images — at minimum: **Home (personal record), BP log, Glucose log, Trends/Sync**, plus one hero device composite. Model the capture on the existing `video/seascope-brand-kit/capture-screenshots.js` pattern.
- **Output:** export optimized PNG/WebP into `public/images/wellness/` in the website repo; reference them from `Wellness.jsx`.
- **Use on page:** a hero device shot in the crew section + a small 3–4 screen gallery. Captioned as the product/app UI.
- **Disclosure:** these depict the approved concept design; the shipped app UI is in build and may refine. Acceptable for a hidden pre-launch buyer page. (If the founder prefers, swap to a neutral placeholder until real-app shots exist — founder's call, defaulting to mockup shots.)

## Hidden mechanism (four layers)
1. **Primary:** `react-helmet-async` `<Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>` + page `<title>`. (Copy ONLY this `<Helmet>` snippet from `SeaScopePilot.jsx:28-32` — that page is otherwise legacy/un-routed; do not copy its structure or `SeaScopeNav` usage.)
2. NOT added to the `SiteLayout` nav or the hard-coded `SiteLayout` footer columns (Products/Company/Legal) — no link anywhere on the site.
3. NOT added to `public/sitemap.xml`.
4. **Secondary:** append `Disallow: /wellness` to the existing `User-agent: *` block in `public/robots.txt`. Note: the page-level `noindex` meta (layer 1) is the real guarantee; robots `Disallow` is belt-and-suspenders. (Minor trade-off: a `Disallow` can stop a crawler from fetching the page and thus from *seeing* the `noindex` meta — but since the page is also unlinked and absent from the sitemap, discovery is already prevented; keep both.)

## Page content outline
**Top — buyer pitch** (fleet managers / manning agents / P&I / COOs):
- Hero: the wellness program in one line.
- The problem: silent chronic disease (hypertension, diabetes, lipids) developing *between* PEMEs → unfit-for-duty, failed medicals, avoidable medevacs.
- What the program is: continuous wellness monitoring between exams — crew self-log vitals that sync into the clinical record, with a clinician-oversight cadence.
- Benefits: earlier detection, crew retention, PEME/fitness compliance (MLC), cost avoidance.
- How it fits: works alongside the existing SeaScope platform (OneCare / MHG pilots).
- CTA: **Request a demo** → `BookDemoModal`.

**Below — for crew** (seafarers):
- What the app does for *you*: log BP/glucose in seconds, see your own trends, your PEME baseline, health education.
- Your data, your control: privacy + consent; explicitly **not** a diagnostic/treatment tool — self-tracking, education, and signposting only.
- How to get it: "Coming soon — your fleet will share an install link" (no install path yet; PWA is a later build step).

## Content / claims discipline (hard constraints)
- No diagnostic or clinical-decision claims — the app is **not** a CDS; it does not diagnose or treat.
- No AI model / vendor / cost / COGS mentions anywhere (brand redaction rule).
- Enforce the `seascope-brand-voice` forbidden-phrases list + canonical taglines.
- Copy authored via the `marketing-writer` agent (loads `seascope-brand-voice`) so it is on-brand and compliant; this page is a draft surface the founder controls, not an external send.
- No pricing on this page (pricing lives in sales conversations / the demo).

## Deploy safeguard (MANDATORY — the website regression doctrine)
Per memory "NEVER trust git branch names to match Vercel production — always verify the commit SHA":
1. Build locally (`npm run build`) and visually verify in `dist` / local preview.
2. Before deploying: query Vercel live-prod for its actual git SHA + branch; confirm the branch matches local `main`. If diverged → STOP, do not deploy, investigate + reconcile.
3. Deploy ONLY via `cd /home/theremoteaidoc && vercel deploy --prod --yes` from a CLEAN working tree. Never deploy from a dirty tree; never rely on a `git push` to auto-deploy.
4. After deploy: verify `seascope.tech/wellness` renders, and `seascope.tech` home + nav are unchanged (no stale-site regression). Confirm `/wellness` is noindex (view-source the meta) and absent from nav/sitemap.
5. Rollback if regressed: `vercel promote <previous-prod-url> --yes`.

## Out of scope (explicitly)
- The crew install link / QR (depends on the PWA frontend, a later build step).
- Email capture / lead forms (CTA is the existing demo modal).
- Any change to existing pages, nav, pricing, or Stripe/commercial paths.
- Linking the page publicly (it stays hidden until the founder says otherwise).

## Testing / verification
- `npm run build` passes clean.
- Local preview: page renders, both sections present, demo modal opens, responsive on mobile width.
- Grep built `dist/` to confirm no model/vendor/cost strings leaked into the page.
- Confirm robots/sitemap/nav exclusions are in place (page truly hidden).
- Post-deploy live checks per the deploy safeguard above.

## The single decision needed before build
None outstanding — design is fully ratified. Proceed to implementation plan.
