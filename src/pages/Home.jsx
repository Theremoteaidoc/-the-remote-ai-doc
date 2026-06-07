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
  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="home/fleet-operators-card" />
      <Helmet>
        <title>SeaScope — Clinical care for places medicine wasn't built for.</title>
        <meta
          name="description"
          content="The clinical reasoning engine for medicine practiced at the edge. SeaScope CDS for physicians ($29.99/mo). SeaScope Cargo Solutions for fleet operators."
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
              The clinical reasoning engine for medicine practiced at the edge.
              A personal tool for physicians. An operator platform for fleets.
            </p>
            <p className="mt-3 max-w-2xl text-xs italic text-ink-50/50">
              Physician-gated clinical decision support. SeaScope drafts, structures, and documents recommendations for clinician review; it does not diagnose, prescribe, or replace professional judgment.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/seascope-cds" className="btn-primary">
                For Physicians
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/cargo-solutions" className="btn-secondary">
                For Fleet Operators
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── ARCHITECTURE LINE ─────────────── */}
      <section className="border-y border-ink-700/40 bg-ink-800/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="font-display text-2xl italic text-ink-50/80 sm:text-3xl">
            One clinical reasoning engine. Two ways to deploy it.
          </p>
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
              onClick={() => setDemoOpen(true)}
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
            <div className="mt-8 inline-flex items-baseline gap-2 self-start rounded-lg bg-sea-300 px-4 py-2 font-medium text-ink-900">
              <span className="text-base">$29.99 / month</span>
              <span className="text-xs opacity-70">· Cancel anytime</span>
            </div>
            <div className="mt-6 flex-1" />
            <Link to="/seascope-cds" className="btn-primary mt-8 w-full">
              Try Free for 14 Days
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs text-ink-50/50">
              14 days free. Credit card required &mdash; $0 charged for 14 days. Cancel anytime.
            </p>
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
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-3 lg:grid-cols-6">
            {[
              { value: 52,   suffix: '+', label: 'Clinical protocols' },
              { value: 222,  suffix: '+', label: 'Clinical guidelines' },
              { value: 13,   suffix: '',  label: 'Safety guardrails' },
              { value: 0,    suffix: '',  label: 'Detected critical failures (across 229+ tests)' },
              { value: 1899, suffix: '+', label: 'Evaluation runs' },
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

      {/* ─────────────── FUTURE FAMILY ─────────────── */}
      <section className="border-t border-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">COMING</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              The SeaScope <span className="accent-sea">*</span> Solutions family is growing.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Each future release extends SeaScope into new operator contexts or adjacent medical workflows.
              Same engine. Same safety architecture. Different segment-specific workflows.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'SeaScope PEME Platform',
                description: 'Digital pre-employment medical exams — fit-to-sail assessments, document workflow, and expiry tracking that syncs directly into the case engine.',
                status: 'live',
              },
              {
                name: 'SeaScope Crew Wellness',
                description: 'Longitudinal crew health — preventive care, chronic condition management, and mental-health check-ins between ports.',
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
            Or just <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>
            {' '}— Javier reads everything.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/seascope-cds"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              I'm a physician
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/cargo-solutions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              I run a fleet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
