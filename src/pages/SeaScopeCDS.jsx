import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play } from 'lucide-react';
import Testimonials from '../components/Testimonials';

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
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={STRIPE_CDS_CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start 14-Day Free Trial — No Credit Card
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://app.seascope.tech/seascope-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-sea-500/40 bg-transparent px-6 py-3 text-sm font-medium text-sea-200 transition-colors hover:border-sea-400 hover:bg-sea-500/10 hover:text-sea-100"
                >
                  Try free, no signup
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-xs text-ink-50/60">
                <a href="#walkthrough" className="text-sea-300 underline-offset-2 hover:underline">
                  Or watch the 60-second walkthrough ↓
                </a>
              </p>
              <p className="mt-6 text-xs text-ink-50/50">
                Built by ship physicians, for ship physicians. ABMM-aligned. GDPR-compliant. BAA available.
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
              { title: 'Agentic clinical reasoning', body: 'Multi-stage pipeline with deterministic critique gates. Not a single LLM call. Each step is auditable.' },
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

      {/* ─────────────── WALKTHROUGH VIDEO ─────────────── */}
      <section id="walkthrough" className="border-t border-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="eyebrow mb-4 flex items-center justify-center gap-2">
              <Play className="h-4 w-4 text-sea-400" strokeWidth={2.4} />
              <span>60-second walkthrough</span>
            </div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              See SeaScope CDS handle a real STEMI at sea<span className="accent-sea">.</span>
            </h2>
            <p className="mt-6 text-base text-ink-50/70 leading-relaxed">
              A 62-year-old male presents with crushing chest pain on a cruise ship near New Caledonia. Watch the engine triage, ask the right follow-up questions, propose a fibrinolysis decision tree, generate a port-diversion recommendation, and run the safety guardrails — all before the satellite link wavers.
            </p>
          </div>

          {/* Browser-chrome frame mirrors the original look */}
          <div className="device-frame relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-sea-500/20 bg-ink-900 shadow-2xl shadow-sea-500/10">
            <div className="flex items-center gap-3 border-b border-ink-700/60 bg-ink-800 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1">
                <div className="rounded-md bg-ink-700/60 px-3 py-1 text-center text-xs font-mono text-ink-50/60">
                  app.seascope.tech — Live Clinical Assessment
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/7209e8813f08437b8b162f3e705214ea?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="SeaScope CDS walkthrough — acute inferior STEMI case at sea"
              />
            </div>
          </div>

          {/* Three-up callout — what to look for in the video */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {[
              {
                t: '0:00 — Triage',
                b: 'Watch the engine recognize STEMI from chief complaint + vitals before any LLM call. Deterministic, sub-second.',
              },
              {
                t: '0:18 — Reasoning',
                b: 'Multi-step pipeline pulls live PubMed citations, checks the cruise-ship formulary, and sequences the management plan.',
              },
              {
                t: '0:42 — Safety',
                b: '13 guardrails fire post-LLM: allergy cross-check, dose ceilings, pregnancy safety, port-diversion logic. The plan is yours to override.',
              },
            ].map((step) => (
              <div key={step.t} className="editorial-card">
                <div className="font-mono text-xs font-bold tracking-wider text-sea-400">{step.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-50/75">{step.b}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-50/50">
            The video shows the cruise-ship environment — the same one your $29.99 subscription unlocks for your 14-day trial.
          </p>
        </div>
      </section>

      {/* ─────────────── WHY SEASCOPE IS DIFFERENT ─────────────── */}
      {/* Frames the comparison ourselves, before a doctor does it for us.
          Claims kept concrete + defensible — every bullet describes what
          SeaScope does, not what other tools fail to do. */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="eyebrow mb-4">POSITIONING</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Why SeaScope is different from general medical AI<span className="accent-sea">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              ChatGPT, Doximity GPT, OpenEvidence and similar tools are remarkable general-medical assistants. SeaScope CDS is built for a narrower job: physicians practicing in remote, resource-constrained environments where the next nearest hospital is hours or days away.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                t: 'Formulary-locked recommendations',
                b: 'Every recommendation is checked against what is actually onboard. The reasoning engine knows the cruise-ship medical chest at the drug-strength-and-form level, not just the molecule.',
              },
              {
                t: 'Maritime evacuation context',
                b: 'Plans factor in port capability, vessel position, helicopter range, and transfer constraints. The output considers whether MEDEVAC is realistic before recommending it.',
              },
              {
                t: 'Audit-ready reasoning',
                b: 'Every recommendation is structured for physician review and documentation: triage call, decision rationale, citations, safety checks, your overrides. Exports as a single PDF per encounter.',
              },
              {
                t: 'Physician-gated CDS',
                b: 'Designed under FDA §520(o)(1)(E) — the engine supports the clinician; your judgment remains the gate. We do not autonomously dose, prescribe, or override. The plan is yours.',
              },
              {
                t: 'Remote-care assumptions',
                b: 'Built for limited equipment, delayed escalation, and constrained environments. Offline-capable, citation-bearing, satellite-friendly. The opposite of "have the patient go to the ED."',
              },
              {
                t: 'Deterministic safety guardrails',
                b: '13 rule-based checks fire post-LLM: allergy cross-references, dose ceilings, formulary verification, renal dosing, pregnancy safety, drug interactions. Rules, not vibes.',
              },
            ].map((row) => (
              <div key={row.t} className="editorial-card">
                <h3 className="font-display text-lg font-medium text-ink-50">{row.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/75">{row.b}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-ink-50/50">
            This is a complement to general medical AI, not a replacement. If you want a polymath assistant, those tools are excellent. If you are the only physician between a patient and the open ocean, SeaScope is built for that hour.
          </p>
        </div>
      </section>

      {/* ─────────────── REAL-CASE PROOF POINT ─────────────── */}
      {/* The killer credibility moment. Same case lives in the brand guide
          and the founder pitch. Lands here so the abstract "different from
          general medical AI" pivots immediately into "and here's a real
          patient where it mattered." */}
      <section className="border-y border-ink-700/40 bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-4 text-center">
            Real case · Voyager of the Seas, near Brisbane
          </div>
          <p className="font-display text-2xl text-ink-50 leading-snug text-center sm:text-3xl">
            78-year-old male. Rising troponin. Failing kidneys. 1,000 nautical miles from a cardiologist.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-display text-4xl font-medium text-sea-300 sm:text-5xl">
                49<span className="text-2xl text-sea-300/70">s</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-ink-50/60">to treatment plan</div>
            </div>
            <div>
              <div className="font-display text-4xl font-medium text-sea-300 sm:text-5xl">7</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-ink-50/60">tools executed</div>
            </div>
            <div>
              <div className="font-display text-4xl font-medium text-sea-300 sm:text-5xl">3</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-ink-50/60">harmful medications stopped</div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-50/60">
            Patient transferred stable via boat-to-boat.
          </p>
        </div>
      </section>

      {/* ─────────────── FOUNDER CREDIBILITY BAND ─────────────── */}
      {/* Moved above pricing so trust signals (founder + peer voices) sit
          tightly before the price ask. */}
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

      {/* ─────────────── PEER TESTIMONIALS ─────────────── */}
      <Testimonials />

      {/* ─────────────── PRICING ─────────────── */}
      <section id="pricing" className="py-24 sm:py-32">
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
                'Cruise-ship environment, 50+ medications, full formulary lock',
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
            <a
              href="https://app.seascope.tech/seascope-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-sea-300 underline-offset-2 hover:text-sea-200 hover:underline"
            >
              Or try it free, no signup
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-50/60">
            Backed by a practicing ship physician. Built around the FDA §520(o)(1)(E) Clinical
            Decision Support exemption. Your clinical judgment is always the final call.
          </p>
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
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={STRIPE_CDS_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://app.seascope.tech/seascope-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900/40 px-8 py-4 text-base font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              Or try the demo first
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-900/70">
            Already have an account?{' '}
            <a href="https://app.seascope.tech" className="underline">Sign in →</a>
          </p>
        </div>
      </section>
    </>
  );
}
