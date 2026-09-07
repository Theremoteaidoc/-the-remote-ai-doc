# SeaScope — seascope.tech rebuild · Design System

## Product context
SeaScope (RemoteAid Medical Solutions, Corp.) provides clinical services software to fleet operators: **PEME processing** (pre-employment medical examinations checked against each client's requirement set, findings for the reviewing physician), **telemedicine with televideo** (officer on board → nurse/physician ashore, structured case, video consult, SOS voice line to the operator's own 24/7 desk), and **Crew Wellness** (seafarers log blood pressure and glucose from their phone; clinicians see trends and alerts). A fourth, secondary product is the individual **Clinical Decision Support subscription** for physicians.

**Primary audience:** fleet operators and their medical departments (COO, DPA, fleet medical director, PEME clinic managers, P&I club medical advisers). **Secondary:** individual ship physicians.

**Jobs to be done (buyer):** avoid a seafarer arriving unfit or with an unclear medical; cut human error and turnaround time in PEME review; give officers a clinician in minutes, not hours; show P&I clubs and flag states a documented duty of care; keep crew healthy across a contract.

**Positioning rule (founder, 7 Sep 2026):** the site says WHAT we deliver and for WHOM, never HOW. No architecture, engine, pipeline, model or vendor names, thresholds, data-flow or evaluation detail. No client or lead names, ever. Institutional plural voice ("our physicians", "fleet operators"), no single-case proof, no cost-of-goods, no em-dashes, no "pilot" language: the company operates.

## Key pages & architecture (five destinations)
1. **Home** — answers, in this order, above and just below the fold: What is this? What have we built? Which products? What problem do we solve and why? What is our posture (clinical governance, security, regulation)? Then one CTA (Book a demo) and one secondary (See pricing).
2. **PEME** — benefits, one product image, who it is for (clinics, operators, P&I), pricing link, one proof line.
3. **Telemedicine & Televideo** — benefits, one product image (televideo consult), audiences (operators, officers, physicians), pricing card, one proof line.
4. **Crew Wellness** — benefits, duty of care, the three user steps + QR to the app.
5. **Evidence & Security** — short posture blocks: MLC 2006 alignment, GDPR, HIPAA-aligned practices, EU/UK data residency, encryption in transit and at rest, audited access, tenant isolation, physician oversight; deeper material "available under NDA".
Company: About (physician-founder, institutional), Press, Pricing, Blog, Privacy, Terms.

## Visual direction — "clinical daylight"
Light, calm, precise. White page, warm off-white section bands, teal as the single accent, slate ink for text, one deep-navy used only for small emphasis (never as a page or hero background). Generous whitespace, wide margins, few but large images. Reads like a modern clinical institution's site, not a SaaS dashboard and not a dark tech landing page.

### Color tokens
- `--bg` #FFFFFF page · `--bg-alt` #F6F5F1 warm off-white section bands · `--surface` #FFFFFF cards on alt bands, 1px `--line` border
- `--ink` #0F172A headings · `--ink-2` #334155 body · `--ink-3` #64748B captions/labels · `--line` #E2E8F0 borders
- `--teal` #14B8A6 primary CTA, links, icons · `--teal-strong` #0F766E hover, AA text on white · `--teal-tint` #E6FAF7 soft highlight backgrounds, chips
- `--navy` #1E3A5F used sparingly: eyebrow labels, small numerals, footer text on white. Never a full background.
- Status (only where a product screenshot needs it): success #059669, warning #D97706, critical #DC2626.
- No gradients on backgrounds. No glassmorphism. No neon. No dark hero.

### Typography (ratified brand)
- Display / headings / taglines: **Noto Serif Display** (Georgia fallback). H1 56/64 desktop, 36/42 mobile, weight 500, `text-wrap: balance`. H2 36/44, H3 24/32.
- Body / labels / UI: **Noto Sans** (system-ui fallback). Body 18/30 desktop, 17/28 mobile, `--ink-2`. Labels 13/20 uppercase, letter-spacing .12em, `--ink-3` or `--navy`.
- Numerals: tabular. Line length ≤ 68 characters.

### Spacing, layout, radius, shadow
- 8-pt grid. Section padding 96px desktop / 64px mobile. Container 1200px, 12 columns, 24px gutters.
- Radius: 12px cards, 8px buttons/inputs, 999px chips.
- Shadow: one soft level only, `0 8px 24px rgba(15,23,42,.06)`, on product screenshots and hovered cards. Nothing else floats.
- Cards only where content is genuinely a set (three product tiles); everything else is typography and whitespace.

### Components
- **Nav:** white, 1px bottom line, wordmark left (logo mark + "SeaScope" in Noto Serif Display, "Sea" ink / "Scope" teal), five destinations, right: "Pricing" text link + "Book a demo" primary button.
- **Buttons:** primary teal fill, white text, 8px radius, 48px tall, no shadow; secondary white with `--line` border and `--ink` text; text link teal-strong underlined on hover.
- **Product tile:** surface card, eyebrow label (navy), serif title, two-line benefit, "Learn more" link, 4:3 product image on top.
- **Posture band:** off-white band, six short statements in two rows with a small teal check icon each, no numbers.
- **Proof line:** one sentence in serif italic, ink-2, attributed institutionally ("Chief Medical Officer, cruise operator").
- **Footer:** white, three columns (products, company, legal), wordmark, institutional address, no dark band.

### Imagery direction (to be generated by the imaging specialist)
Photographic, daylight, calm, real-looking people at work; never stock-smiling. Consistent grade: cool neutral with teal undertones, soft directional light, shallow depth. Subjects: a physician on a televideo consult with a ship's officer (two-screen composition), a PEME reviewer with a clean digital checklist beside a paper file (fewer errors, less time), a bridge/officer with a tablet at sea, a seafarer logging a reading on a phone, a fleet operations desk. Product screenshots framed in a thin white device frame with the soft shadow. No abstract 3D blobs, no glowing networks, no dark-mode UI shots, no maps of the world with dots.

### Motion
Minimal: 200ms ease-out fades on section reveal from a visible resting state (never opacity 0 parked), button hover color shift 150ms, no parallax, no auto-playing video (explainer opens on click behind a poster). Respect prefers-reduced-motion.

## Fidelity constraint (append to every prompt)
Use ONLY the fonts (Noto Serif Display, Noto Sans), colors (white, #F6F5F1, #0F172A, #334155, #64748B, #E2E8F0, #14B8A6, #0F766E, #E6FAF7, #1E3A5F), spacing and component styles defined here. Light theme only, no dark backgrounds, no gradients, no fonts or colors not listed.
