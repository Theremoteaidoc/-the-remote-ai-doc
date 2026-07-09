import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import CountUp from '../components/CountUp';
import BookDemoModal from '../components/BookDemoModal';

/**
 * SeaScope family home — replaces the prior Javier personal landing.
 * Copy locked in /root/marketing/copy/home-v3.md (Apr 19 2026).
 * Hero image: /home-hero.jpg (Unsplash 1496347326319-2935d381b307).
 */

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState('home/fleet-operators-card');
  const openDemo = (source) => {
    setDemoSource(source);
    setDemoOpen(true);
  };
  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source={demoSource} />
      <Helmet>
        <title>SeaScope — Clinical care for places medicine wasn't built for.</title>
        <meta
          name="description"
          content="Physician-built clinical technology for maritime operators, P&I clubs, cruise and expedition lines, and medical providers. Decision support, PEME, telemedicine, and crew health, with deterministic safety built in."
        />
        <link rel="canonical" href="https://seascope.tech/" />
      </Helmet>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/home-hero.jpg"
            alt="Aerial view of a tanker at sea with distant vessels on the horizon at sunset — representing maritime medicine practiced where specialist backup is hours away."
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 60%' }}
          />
          {/* Dark overlay for typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900/95" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">
              SEASCOPE — A REMOTEAID MEDICAL SOLUTIONS COMPANY
            </div>
            <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl lg:text-7xl">
              Clinical care for places medicine wasn't built for<span className="accent-sea">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80 sm:text-xl">
              The clinical technology layer for medicine at sea. Decision support, pre-employment
              medicals, ship-to-shore telemedicine, and crew health, on one engine with safety
              enforced in code. Built by physicians who practice where it is used.
            </p>
            <p className="mt-3 max-w-2xl text-xs italic text-ink-50/50">
              Physician-gated clinical decision support. SeaScope drafts, structures, and documents recommendations for clinician review; it does not diagnose, prescribe, or replace professional judgment.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openDemo('home/hero')}
                className="btn-primary"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#different" className="btn-secondary">
                See how we are different
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-50/30 px-6 py-3 text-sm font-medium text-ink-50/90 transition hover:border-ink-50/60 hover:text-ink-50"
              >
                See the full platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <Link
              to="/seascope-cds"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-50/50 transition hover:text-ink-50/80"
            >
              Individual physician? Explore SeaScope CDS
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── ARCHITECTURE LINE ─────────────── */}
      <section className="border-y border-ink-700/40 bg-ink-800/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="font-display text-2xl italic text-ink-50/80 sm:text-3xl">
            One clinical reasoning engine. A platform of solutions built on it.
          </p>
        </div>
      </section>

      {/* ─────────────── WHY SEASCOPE, NOT ANOTHER MEDICAL SAAS ─────────────── */}
      <section id="different" className="scroll-mt-16 border-b border-ink-700/40 bg-ink-900 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHY SEASCOPE, NOT ANOTHER MEDICAL SAAS</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              The difference is in what happens when it matters.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Built by practicing maritime physicians',
                body: 'Not a health-tech vendor adapting a clinic product. Designed by doctors who work where it is used: one clinician, no specialist, hours from shore.',
              },
              {
                title: 'Deterministic safety, not a chatbot',
                body: 'The guardrails are enforced in code, not hoped for from a model. It will not recommend a drug your ship does not carry, and its safety limits cannot be talked around.',
              },
              {
                title: 'Chest-aware and maritime-native',
                body: 'Every recommendation is locked to the formulary and stock actually aboard that specific vessel. Built for thin connectivity and small crews, not a shore hospital.',
              },
              {
                title: 'One audited case, inspection-ready',
                body: 'Every encounter closes as a single timestamped, defensible record. Built for MLC and P&I scrutiny from the start, not bolted on.',
              },
              {
                title: 'It augments your team, it never replaces it',
                body: 'SeaScope sits alongside your existing doctors and TMAS, and makes the people you already trust faster and safer.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-sea-500/30 bg-ink-800/30 p-6"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-ink-50">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SEE IT IN ACTION (product explainer) ─────────────── */}
      {/* Self-hosted product-motion explainer built from real UI (crisp, no
          AI distortion). Poster + native controls; replaces the prior Loom. */}
      <section className="border-b border-ink-700/40 bg-ink-900 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE IT IN ACTION</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              The platform, in under a minute<span className="accent-sea">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-50/70">
              The real product: fleet PEME review, ship-to-shore telemedicine, decision support with
              code-enforced guardrails, and the crew app. Demo data only.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20">
            <video
              controls
              preload="metadata"
              poster="/videos/seascope-explainer-poster.jpg"
              className="block w-full"
            >
              <source src="/videos/seascope-explainer.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─────────────── SEE THE ACTUAL PRODUCT ─────────────── */}
      <section className="border-b border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE THE ACTUAL PRODUCT</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Not slides. The real thing.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                src: '/images/product/screen-peme.png',
                width: 2720,
                height: 1622,
                alt: 'SeaScope PEME workspace showing a fleet medical review list with fitness-to-sail gating.',
                caption: "Review a whole fleet's medicals in one workspace, with safety gates the machine cannot override.",
              },
              {
                src: '/images/product/screen-telemed.png',
                width: 2720,
                height: 1466,
                alt: 'SeaScope telemedicine case view showing vitals, clinical decision, and prescription in a single record.',
                caption: 'One case, ship to shore: vitals, decision, and prescription, closed as a single audited record.',
              },
              {
                src: '/images/product/screen-clinical-cds.png',
                width: 2720,
                height: 1226,
                alt: 'SeaScope clinical decision support screen showing a ranked differential, a calculated risk score, and a safety guardrail.',
                caption: 'Decision support with a ranked differential, a calculated risk score, and a guardrail that blocks an unsafe order.',
              },
            ].map((shot) => (
              <figure key={shot.src} className="flex flex-col">
                <div className="overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full"
                    loading="lazy"
                    width={shot.width}
                    height={shot.height}
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-ink-50/70">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PRODUCT CARDS (Variant B: Cargo first) ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          {/* Card 1 — Cargo Solutions */}
          <div className="editorial-card flex flex-col">
            <div className="eyebrow mb-3">FOR FLEET OPERATORS</div>
            <h3 className="font-display text-3xl font-medium leading-tight text-ink-50 sm:text-4xl">
              <em className="not-italic">Every crew emergency — handled by a doctor, logged for inspection.</em>
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-50/70">
              When a crew member gets sick or hurt at sea, SeaScope turns the call into a structured
              medical case. Your officer captures it onboard. A shore doctor reviews it with AI
              support and sends back the treatment plan. You get a structured PDF designed to support maritime medical recordkeeping and inspection workflows — no more paper logs or phone-tag gaps.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Officer onboard uses a guided app — no more free-text radio notes',
                'Shore doctor reviews with AI support and approves the plan in minutes',
                'Every case becomes a PDF ready for port-state inspections',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-50/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex-1" />
            <button
              type="button"
              onClick={() => openDemo('home/fleet-operators-card')}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-sea-500 px-6 py-3 text-sm font-medium text-sea-300 transition hover:bg-sea-500/10"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs text-ink-50/50">
              For shipping, cruise, and offshore operators. Pricing and pilot terms in a 30-minute call.
            </p>
          </div>

          {/* Card 2 — SeaScope CDS */}
          <div className="editorial-card flex flex-col">
            <div className="eyebrow mb-3">FOR PHYSICIANS</div>
            <h3 className="font-display text-3xl font-medium leading-tight text-ink-50 sm:text-4xl">
              <em className="not-italic">An AI second opinion that knows what's in your medicine chest.</em>
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-50/70">
              Evidence-based medicine, engineered for the edge. Every recommendation is
              grounded in the drugs and equipment you actually have onboard, traceable to
              the clinical guideline it came from, and saved as a defensible case record.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Only suggests drugs you actually carry — grounded in your ship's formulary",
                'Every recommendation cites the guideline behind it — AHA, ACEP, IDSA, WHO, and more',
                '13 safety checks — interactions, contraindications, dosing — before you see the answer',
                'One-click defensible PDF for every case — structured for medical recordkeeping and review',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-50/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex-1" />
            <Link to="/seascope-cds" className="btn-secondary mt-8 w-full">
              Explore SeaScope CDS
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs text-ink-50/50">
              A personal subscription for individual physicians. Details and pricing on the SeaScope CDS page.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── ALSO ON THE PLATFORM ─────────────── */}
      {/* Compact strip surfacing the two other live modules (PEME + Crew
          Wellness) below the primary For-Physicians / For-Fleet-Operators
          cards. Surfaces platform depth without forcing a third card into
          the binary CTA above. */}
      <section className="border-t border-ink-700/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="eyebrow mb-8 text-center">ALSO ON THE PLATFORM</div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* PEME Platform */}
            <div className="rounded-2xl border border-ink-700/60 bg-ink-800/30 p-6">
              <div className="mb-2 inline-block rounded-md border border-emerald-500/50 bg-emerald-500/15 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-emerald-300">
                Live
              </div>
              <h3 className="font-display text-xl font-medium text-ink-50">SeaScope PEME Platform</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-50/70">
                Pre-employment medical exams, structured and documented. OCR ingestion,
                rules-based fitness logic, and a PDF record that travels with the seafarer —
                not the paper file.
              </p>
              <button
                type="button"
                onClick={() => openDemo('home/peme-strip')}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sea-300 transition hover:text-sea-500"
              >
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            {/* Crew Wellness — with real app-screenshot thumbnail (founder pref:
                use real product UI, not AI-generated, where we have it) */}
            <div className="rounded-2xl border border-ink-700/60 bg-ink-800/30 p-6">
              <div className="flex gap-5">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 inline-block rounded-md border border-emerald-500/50 bg-emerald-500/15 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-emerald-300">
                    Live
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink-50">SeaScope Crew Wellness</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-50/70">
                    Crew self-log BP and glucose between ports. Clinicians see the trend before
                    the next exam. Supports your duty-of-care record under MLC.
                  </p>
                  <Link
                    to="/wellness"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sea-300 transition hover:text-sea-500"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                {/* Phone screenshot — real product UI */}
                <div className="relative hidden flex-shrink-0 sm:block">
                  <div className="absolute -inset-2 rounded-2xl bg-sea-500/10 blur-xl" aria-hidden="true" />
                  <div className="relative w-20 overflow-hidden rounded-xl border border-ink-700/60 ring-1 ring-sea-500/20 sm:w-24">
                    <img
                      src="/images/product/crew-home.png"
                      alt="SeaScope Crew Wellness app home screen: mood check-in, talk to a doctor, and private health logging."
                      className="w-full object-cover"
                      loading="lazy"
                      width="960"
                      height="1960"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── THREE PILLARS — EBM POSITIONING ─────────────── */}
      <section className="border-t border-ink-700/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">HOW WE THINK</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Evidence-based medicine, engineered for the edge.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Every SeaScope recommendation stands on three pillars — so when a port-state
              inspector, a medico-legal review, or a peer physician asks <em>why</em>, the
              answer is already on the page.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                eyebrow: 'GROUNDED',
                title: 'Only recommends what you actually carry.',
                body: 'The engine reads your ship\'s medicine chest before it thinks. No recommendation ever lists a drug you don\'t have — no workaround, no "if only."',
              },
              {
                eyebrow: 'GUIDELINE-BACKED',
                title: 'Every answer cites the guideline behind it.',
                body: 'AHA, ACEP, IDSA, WHO, SSC, GINA, AGS Beers, and more. Inline citations on every medication, dose, and decision — traceable to the authority.',
              },
              {
                eyebrow: 'DEFENSIBLE',
                title: 'Built for the record, not just the moment.',
                body: 'Full audit trail per case. One-click PDF with reasoning, sources, and timestamps. Structured for medical recordkeeping, peer review, and medico-legal review.',
              },
            ].map((pillar) => (
              <div
                key={pillar.eyebrow}
                className="rounded-2xl border border-sea-500/30 bg-ink-800/30 p-6"
              >
                <div className="eyebrow mb-3 text-sea-300">{pillar.eyebrow}</div>
                <h3 className="font-display text-xl font-medium leading-snug text-ink-50">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── ENGINE CREDIBILITY ─────────────── */}
      <section className="relative overflow-hidden border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        {/* iOS-style aurora: three blurred orbs, slow opacity drift.
            Respects prefers-reduced-motion via motion-reduce:animate-none. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-sea-500/25 blur-3xl motion-reduce:animate-none animate-pulse [animation-duration:9s]" />
          <div className="absolute right-[6%] top-[8%] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl motion-reduce:animate-none animate-pulse [animation-duration:13s] [animation-delay:2s]" />
          <div className="absolute bottom-[12%] left-[35%] h-[460px] w-[460px] rounded-full bg-amber-500/10 blur-3xl motion-reduce:animate-none animate-pulse [animation-duration:11s] [animation-delay:4s]" />
          <div className="absolute -bottom-[10%] right-[20%] h-[380px] w-[380px] rounded-full bg-sea-300/15 blur-3xl motion-reduce:animate-none animate-pulse [animation-duration:15s] [animation-delay:1s]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">THE ENGINE</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Built where medicine is hardest. Deployed where it's needed.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-3 lg:grid-cols-7">
            {[
              { value: 52,   suffix: '+', label: 'Clinical protocols' },
              { value: 222,  suffix: '+', label: 'Clinical guidelines' },
              { value: 13,   suffix: '',  label: 'Safety guardrails' },
              { value: 0,    suffix: '',  label: 'Detected critical failures (across 1,500+ tests)' },
              { value: 3500, suffix: '+', label: 'Evaluation runs' },
              { value: 5,    suffix: '',  label: 'Care environments' },
              { value: 4,    suffix: '+', label: 'Languages' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-medium text-sea-300 sm:text-5xl tabular-nums">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs uppercase tracking-eyebrow text-ink-50/50">
            Expanding every release — 2026 Q2 snapshot, numbers grow monthly
          </p>
        </div>
      </section>

      {/* ─────────────── KILLER CASE ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-6 text-center">REAL CASE — ANONYMIZED</div>
          <blockquote className="text-center font-display text-2xl font-light italic leading-relaxed text-ink-50 sm:text-3xl">
            "A 78-year-old male presented with rising troponin and acute kidney injury. SeaScope
            produced a structured treatment plan in 49 seconds, executing 7 retrieval and verification
            tools against the ship's actual formulary. The recommendation stopped three medications
            that would have interacted dangerously, and triggered a structured medical evacuation
            handoff. The patient was transferred stable."
          </blockquote>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: 49, suffix: 's', label: 'Time to treatment plan' },
              { value: 7,  suffix: '',  label: 'Tools executed' },
              { value: 3,  suffix: '',  label: 'Meds stopped (would have caused harm)' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-medium text-sea-300 tabular-nums">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-50/40">
            Anonymized case from physician validation testing. Vessel, location, and identifiers redacted. Named testimonials with full attribution coming soon.
          </p>
        </div>
      </section>

      {/* ─────────────── THE PLATFORM ─────────────── */}
      {/* Anchored from the hero "See the full platform" CTA. Was "FUTURE
          FAMILY / COMING" — relabeled because four of the six cards below
          now carry the LIVE badge. The family IS the platform, today.
          Backdrop image generated 2026-06-07 via gemini-2.5-flash-image
          under the brand-voice "abstract / schematic" exemption — purely
          textural, no foreground composition, sits behind text overlay. */}
      <section
        id="platform"
        className="relative isolate scroll-mt-16 overflow-hidden border-t border-ink-700/40 py-24 sm:py-32"
      >
        {/* Subtle textural backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/images/home/platform-backdrop.png"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">THE PLATFORM</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              SeaScope ships as a suite, not a single tool<span className="accent-sea">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Each solution runs on the same clinical reasoning engine with the same safety architecture.
              Different workflows, same standard of care.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'SeaScope CDS',
                description: 'Physician-side emergency assessment tool. Cites every guideline, knows your ship\'s formulary, and produces a defensible case record on every recommendation.',
                status: 'live',
              },
              {
                name: 'SeaScope Cargo Solutions',
                description: 'Two-way officer-to-shore case workflow. Officer captures the case onboard. Shore doctor reviews with AI support and approves. Every case becomes an auditable PDF record.',
                status: 'live',
              },
              {
                name: 'SeaScope PEME Platform',
                description: 'Digital pre-employment medical exams — fit-to-sail assessments, document workflow, and expiry tracking that syncs directly into the case engine.',
                status: 'live',
              },
              {
                name: 'SeaScope Crew Wellness',
                description: 'Crew-facing app for self-logging BP and glucose between ports. Clinicians see the trend before the next exam. Supports duty-of-care under MLC.',
                status: 'live',
              },
              {
                name: 'SeaScope Expedition Solutions',
                description: 'For polar, scientific, and adventure expedition vessels operating in the most isolated waters.',
                status: 'in_development',
              },
              {
                name: 'SeaScope Military Solutions',
                description: 'For Role 1 BAS, FOBs, and tactical medical operations in disconnected austere environments.',
                status: 'in_development',
              },
              {
                name: 'SeaScope Rural Solutions',
                description: 'For remote clinics, mining sites, and humanitarian operations far from referral networks.',
                status: 'in_development',
              },
              {
                name: 'SeaScope Smart Inventory',
                description: 'Medicine-chest intelligence — stock tracking, expiry alerts, and restock recommendations tied to your fleet\'s case history.',
                status: 'in_development',
              },
            ].map((sibling) => {
              const isLive = sibling.status === 'live';
              return (
                <div
                  key={sibling.name}
                  className={
                    isLive
                      ? 'rounded-2xl border border-emerald-500/40 bg-ink-800/40 p-6'
                      : 'rounded-2xl border border-ink-700/60 bg-ink-800/30 p-6 opacity-70'
                  }
                >
                  <div
                    className={
                      isLive
                        ? 'mb-3 inline-block rounded-md border border-emerald-500/50 bg-emerald-500/15 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-emerald-300'
                        : 'mb-3 inline-block rounded-md border border-sea-500/40 bg-sea-500/10 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-sea-300'
                    }
                  >
                    {isLive ? 'Live' : 'In Development'}
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink-50">{sibling.name}</h3>
                  <p className="mt-2 text-sm text-ink-50/60">{sibling.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Tell us where you practice.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-900/80">
            Or just <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>. Javier reads everything.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/cargo-solutions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              I run a fleet
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@seascope.tech?subject=PEME%20or%20Crew%20Wellness%20Inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              I need PEME or crew health
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/seascope-cds"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-ink-900/70 underline-offset-4 transition hover:text-ink-900 hover:underline"
            >
              I'm a physician
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
