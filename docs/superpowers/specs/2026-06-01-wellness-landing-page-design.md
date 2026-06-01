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
- New single page component `src/pages/Wellness.jsx`, following the site's one-file-per-page convention (mirrors `SeaScopeCDS.jsx`).
- Route `/wellness` registered in `src/App.jsx` via the existing `wrap(Component)` helper (gives it `SiteLayout` + `SeaScopeNav`).
- Reuse existing components: `SiteLayout`, `SeaScopeNav`, `ScrollReveal`, `BookDemoModal`. No new infrastructure, no new dependencies.
- Tailwind + the existing brand visual system; match the look of current product pages.

## Hidden mechanism (four layers, matching existing private pages e.g. `SeaScopePilot.jsx`)
1. `react-helmet-async` `<Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>` + page `<title>`.
2. NOT added to `SeaScopeNav` or the footer — no link anywhere on the site.
3. NOT added to `public/sitemap.xml`.
4. Add `Disallow: /wellness` to `public/robots.txt` (crawl block, belt-and-suspenders).

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
