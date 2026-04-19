import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';

const STRIPE_CDS_CHECKOUT = 'https://buy.stripe.com/5kQ00i6YjgeH7Zt9lN2ZO00';

/**
 * /seascope-cds — direct-to-MD product page.
 * Voice register: clinical-peer. Copy from /root/marketing/copy/seascope-cds-v1.md.
 * Hero photo: TODO — recommend porthole brand asset; placeholder gradient for now.
 */
export default function SeaScopeCDS() {
  return (
    <>
      <Helmet>
        <title>SeaScope CDS — Formulary-aware AI for the doctor on the bridge at 3 AM.</title>
        <meta
          name="description"
          content="The clinical reasoning engine you can carry in your scrubs pocket. Formulary-locked, evidence-cited, audit-trailed. $29.99/month, 14-day free trial."
        />
        <link rel="canonical" href="https://seascope.tech/seascope-cds" />
      </Helmet>

      {/* ─────────────── HERO (two-column: copy left, brand piece right) ─────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Left: copy */}
            <div>
              <div className="eyebrow mb-6">SEASCOPE CDS — FOR PHYSICIANS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                Formulary-aware AI for the doctor on the bridge at 3&nbsp;AM<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Evidence-based medicine, engineered for the edge. Grounded in the drugs
                you actually carry, backed by the clinical guideline behind every call,
                saved as a defensible record for every case.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={STRIPE_CDS_CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start 14-Day Free Trial — No Credit Card
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#walkthrough" className="self-center text-sm text-sea-300 underline">
                  See how it works ↓
                </a>
              </div>
              <p className="mt-6 text-xs text-ink-50/50">
                Built by ship physicians, for ship physicians. ABMM-aligned. HIPAA-shaped.
              </p>
            </div>

            {/* Right: brand piece (porthole composition with embedded "Where Medicine Meets the Sea." typography) */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/50 ring-1 ring-sea-500/20">
                <img
                  src="/cds-feature.jpg"
                  alt="A tablet displaying SeaScope CDS at a ship's desk beside a brass lamp and porthole. Where medicine meets the sea — AI clinical decision support designed for the constraints of maritime medicine."
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="1024"
                  height="1024"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PAIN ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHAT YOU FACE EVERY SHIFT</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Three problems no chatbot was built for.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: 'No cardiologist on speed-dial.',
                body: 'You\'re 1,000 miles from the nearest hospital. The patient has rising troponin and you\'ve got a chest of 40 drugs. SeaScope shows you the differential, the dosing, the contraindications, and the evacuation logic in one view — in under 60 seconds.',
              },
              {
                title: 'You can\'t prescribe what\'s not in the chest.',
                body: 'Generic AI tools don\'t know what\'s onboard. SeaScope only recommends drugs your formulary actually carries — and warns you when the right drug isn\'t onboard so you can plan around it.',
              },
              {
                title: 'Documentation that holds up under review.',
                body: 'Every case auto-documents. Audit-ready PDF for every encounter, with timestamps, citations, your decisions, and the safety checks that ran. When the case gets reviewed three months later, the record is already there.',
              },
            ].map((card) => (
              <div key={card.title} className="editorial-card">
                <h3 className="font-display text-xl font-medium text-ink-50">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-50/70">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── WHAT YOU GET ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">INSIDE THE APP</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Engineered around the constraints you actually work in.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Agentic clinical reasoning', body: 'Multi-step pipeline: triage → reason → critique → verify. Not a single LLM call. The reasoning shows its work.' },
              { title: '13 deterministic safety guardrails', body: 'Allergy cross-check, drug interactions, dose ceilings, formulary verification, indication-efficacy, renal dosing, pregnancy safety. All rule-based, none AI-trusted.' },
              { title: 'Formulary lock', body: 'Recommendations constrained to your environment\'s actual drug list. 5 environments built in (cruise ship, expedition, military FOB, 2× rural clinic).' },
              { title: 'Evidence retrieval', body: 'Live citations from PubMed, OpenFDA, RxNorm, DailyMed, ClinicalTrials.gov, FAERS — every recommendation has its receipts.' },
              { title: 'Offline PWA', body: 'Full formulary, protocols, and reasoning engine cached locally. When the satellite drops, SeaScope keeps working.' },
              { title: 'Audit trail with PDF export', body: 'Every encounter exports as a single PDF — case data, recommendations, safety checks, your overrides, citations. Inspector-ready, lawyer-ready.' },
            ].map((feat) => (
              <div key={feat.title} className="editorial-card">
                <h3 className="font-display text-lg font-medium text-ink-50">{feat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PRICING ─────────────── */}
      <section id="walkthrough" className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <div className="eyebrow mb-4">PRICING</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Priced for one practitioner, not a procurement department.
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-md rounded-3xl border-2 border-sea-500 bg-ink-800/60 p-10 text-center backdrop-blur">
            <div className="font-display text-2xl text-ink-50">SeaScope CDS</div>
            <div className="mt-6 font-display text-6xl font-medium text-sea-300">$29.99</div>
            <div className="text-sm text-ink-50/60">per month · cancel anytime</div>
            <ul className="mt-8 space-y-3 text-left">
              {[
                'Full clinical reasoning engine',
                'All 5 environments included',
                'Offline PWA for satellite-down work',
                'Unlimited cases, unlimited PDFs',
                'Audit trail kept for 7 years',
                'Cancel anytime, no penalty',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-50/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={STRIPE_CDS_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-ink-50/50">No credit card required. Cancel anytime.</p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-50/60">
            Backed by a practicing ship physician. Built around the FDA §520(o)(1)(E) Clinical
            Decision Support exemption. Your clinical judgment is always the final call.
          </p>
        </div>
      </section>

      {/* ─────────────── FOUNDER CREDIBILITY BAND ─────────────── */}
      <section className="border-y border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote className="font-display text-2xl italic text-sea-300 sm:text-3xl">
            "I built this because I needed it on my own ship. Now you can use it on yours."
          </blockquote>
          <p className="mt-6 text-sm text-ink-50/70">
            <span className="font-medium text-ink-50">Dr. Javier Rosas, MD</span> — Senior Ship
            Physician, Royal Caribbean International. Chair, AI Committee at the American Board of
            Maritime Medicine. Author of <em>AI Literacy for Clinicians</em> (2026).
          </p>
          <Link to="/about" className="mt-4 inline-block text-sm text-sea-300 underline">
            Read more about Javier →
          </Link>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Start practicing with the tool you wish existed.
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            14 days free. No credit card required. Cancel anytime.
          </p>
          <a
            href={STRIPE_CDS_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm text-ink-900/70">
            Already have an account?{' '}
            <a href="https://app.seascope.tech" className="underline">Sign in →</a>
          </p>
        </div>
      </section>
    </>
  );
}
