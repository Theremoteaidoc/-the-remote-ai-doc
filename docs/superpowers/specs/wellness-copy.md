# SeaScope Crew Wellness — Landing Page Copy
## Status: DRAFT — Founder approval required before any public placement.

---

## Founder review flags (items needing adjudication before this ships)

**F1 — "fleet partners" vs named clients. [RESOLVED 2026-06-01]**
Founder ruling: softened "in active use with fleet partners today" → "being piloted with fleet partners" to match reality (wellness program is pre-launch — backend shipped, no crew users yet). Names kept vague as "fleet partners" (MHG/OneCare not publicly announced). Revisit naming before any public (non-hidden) launch.

**F2 — "periodic medical exams" as the framing anchor.**
PEME is the industry shorthand. The copy uses the spelled-out form "periodic medical exams" in the buyer section and "regular medical exams" in the crew section. If the audience is sophisticated enough that "PEME" is cleaner, swap it in — but confirm you want the acronym on an external page.

**F3 — MLC reference.**
`buyer.benefits` item 4 mentions MLC alignment. This is not a compliance claim — it is framed as "supports your documentation and duty-of-care obligations under MLC." If legal has a preferred formulation for what "supports" means here, substitute it. Do not upgrade this to "compliant with" without legal sign-off.

**F4 — "app" language for the crew section.**
The crew app UI is built as an approved concept but is pre-launch. The copy uses "coming soon" framing throughout the crew section and avoids app store references. If the timeline slips further, the whole crew section should be removed or collapsed into a waitlist-only block rather than sitting live on the page.

**F5 — No numbers used in this draft.**
The Voyager/49s/3-meds-stopped proof point belongs to the CDS engine, not to the wellness product. No wellness-specific outcome numbers exist yet that are verifiable. This draft intentionally uses no quantitative claims. If a number becomes defensible (e.g. from the MHG pilot), it can be inserted at `buyer.proof` as a new block.

---

## Meta

```
meta.title        SeaScope Crew Wellness — Between-Exam Monitoring for Seafarers
meta.description  SeaScope Crew Wellness gives shore-side care teams continuous visibility into crew health between periodic medical exams, helping catch the silent progression of hypertension, diabetes, and high cholesterol before they become fit-for-duty failures.
```

*(The page is noindex. The title and description are written for internal coherence and for the rare direct-link context, not for search.)*

---

## Part A — Buyer blocks

---

### `buyer.hero.headline`

```
The health risk that doesn't show up at the exam.
```

---

### `buyer.hero.subhead`

```
Chronic conditions — hypertension, type 2 diabetes, high cholesterol — develop silently between PEMEs. SeaScope Crew Wellness gives your care team visibility into that gap, so the problems that ground crews and trigger evacuations are caught months earlier.
```

---

### `buyer.problem`

**Heading:**
```
Most fit-for-duty failures were already developing two years ago.
```

**Body:**
```
A seafarer passes their exam, returns to sea, and spends the next 24 months with no systematic health monitoring. Blood pressure climbs. Glucose trends upward. Cholesterol drifts. None of it is visible until the next PEME — when the reading that was borderline is now disqualifying.

The result: unfit-for-duty findings, failed medicals, and medical evacuations that were avoidable. The underlying condition was real. The surprise was not.
```

---

### `buyer.what`

**Heading:**
```
Continuous monitoring between exams.
```

**Body:**
```
SeaScope Crew Wellness bridges the gap between periodic medical exams. Crew self-log blood pressure and glucose readings through a simple phone app. Those readings sync directly into the SeaScope clinical record, where your shore-side care team sees trends over time — not just a single snapshot at exam day.

When a reading trends in the wrong direction, the care team can act. When it stays stable, there is documented evidence of that too.
```

---

### `buyer.benefits`

**Heading:**
```
What this means for your fleet.
```

**Benefit items (title + one line each):**

```
Earlier visibility of risk
The care team sees the trend before it becomes a clinical event — not after the exam reveals a problem.

Crew kept fit and working
Conditions caught and managed early are less likely to cause a mid-voyage evacuation or a failed medical that sidelines a crew member.

Supports your duty of care under MLC
Continuous monitoring gives you documented evidence of your health-oversight programme between mandatory exams.

Fewer surprises at the next PEME
When exam day arrives, the clinical record already holds months of readings. There is no ambiguity about what changed and when.
```

---

### `buyer.fits`

**Heading:**
```
Built into the platform you may already be running.
```

**Body:**
```
SeaScope Crew Wellness is part of the broader SeaScope platform — the same clinical record, the same care team interface, the same audit trail. If your fleet is already using SeaScope, wellness monitoring is an extension, not a separate system. The programme is being piloted with fleet partners.
```

---

### `buyer.cta.label`

```
Request a demo
```

*(Secondary CTA option, if the frontend template supports one:)*
```
Talk to the clinical team
```

---

---

## Part B — Crew blocks

---

### `crew.section.headline`

```
Your health, between exams.
```

---

### `crew.what`

**Heading:**
```
Log in under a minute. See your own trends.
```

**Body:**
```
The SeaScope app lets you record a blood pressure or glucose reading in seconds — no forms, no paperwork. Your readings build a personal health baseline over time, so you can see how your numbers are moving. Simple health education sits alongside your data, explaining what your readings mean in plain language.

The app is for you. It puts your own health information in your own hands.
```

---

### `crew.privacy`

**Heading:**
```
Your data. Your choice.
```

**Body:**
```
You choose whether your readings are shared with the ship's care team. Nothing leaves your record without your knowledge. SeaScope Crew Wellness is a self-tracking and health-education tool — it does not diagnose conditions, prescribe treatment, or replace a medical exam or a doctor's assessment.
```

---

### `crew.install`

**Heading:**
```
Coming soon.
```

**Body:**
```
The app is in development. When it is ready for your fleet, your company will share a link to install it — no app store search required.
```

---

---

## Copy notes (for the frontend engineer dropping these blocks)

- The page is two-audience, top-to-bottom. Part A (buyer) sits above the fold for fleet managers arriving via direct link or a sales follow-up email. Part B (crew) sits below, separated by a clear visual break — a section label like "For crew members" is enough.
- `buyer.cta.label` should be a teal-filled button (teal-500 background, white label) linking to whatever the demo-request form or Calendly URL is. Do not link to the main app login.
- `crew.install` is intentionally minimal. Do not add fake app store badges. If a waitlist form is built, swap this block for a single-field email-capture form with the label "Get notified when the app launches."
- The "Sea." accent moment (the brand accent that appears in hero treatments elsewhere on seascope.tech) can be applied to either headline. Suggest: `buyer.hero.headline` rendered as "The health risk that doesn't show up at the exam." with "Sea" in the editorial serif — editorial discretion to the frontend engineer.
- No stock photography of ships or generic medical imagery. If hero imagery is needed, pull from `/home/theremoteaidoc/public/images/seascope/` or the showcase stills at `/home/seascope-cds/video/seascope-walkthrough/out/`. A screen recording of the Wellness Cockpit panel is a stronger visual than a stock photo.
- The page is hidden (noindex). It should not appear in the site nav. A direct URL or a password-protected link is the intended access method for early partner conversations.
