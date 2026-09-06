import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * /cargo-solutions: operator product page.
 * Voice register: operations-credible. Copy from /root/marketing/copy/cargo-solutions-v1.md.
 * Hero photo: TODO: recommend reuse helicopter brand asset; placeholder gradient for now.
 * Pricing: FULLY GATED: no public number. Quote shared on the 30-minute call.
 */
export default function CargoSolutions() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState('cargo/hero');
  const openDemo = (source = 'cargo/hero') => {
    setDemoSource(source);
    setDemoOpen(true);
  };
  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source={demoSource} />
      <Helmet>
        <title>SeaScope Cargo Solutions: Officer triage. Doctor decision. One audited case.</title>
        <meta
          name="description"
          content="Structured medical case workflow for cargo fleets. Officer triage onboard, AI-augmented physician hub on shore. MLC-grade documentation built in."
        />
        <link rel="canonical" href="https://seascope.tech/cargo-solutions" />
      </Helmet>

      {/* ─────────────── HERO (two-column: copy left, brand piece right) ─────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Left: copy */}
            <div>
              <div className="eyebrow mb-6">SEASCOPE CARGO SOLUTIONS: FOR FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                Officer triage. Doctor decision. One audited case<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                SeaScope Cargo Solutions structures every medical case from the moment your officer
                captures it onboard to the moment your shore physician approves the response.
                MLC-grade documentation built in.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openDemo('cargo/hero')} className="btn-primary">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="mailto:hello@seascope.tech?subject=Cargo%20Solutions%20Sales%20Inquiry"
                  className="btn-secondary"
                >
                  Contact Sales
                </a>
              </div>
              <p className="mt-4 max-w-xl text-xs italic text-ink-50/50">
                Physician-gated clinical decision support. SeaScope drafts, structures, and documents recommendations for clinician review; it does not diagnose, prescribe, or replace professional judgment.
              </p>
            </div>

            {/* Right: brand piece (helicopter composition with embedded "When the Nearest Hospital Is 8 Hours Away." typography) */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/50 ring-1 ring-sea-500/20">
                <img
                  src="https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cargo ship at sea, when the nearest hospital is 8 hours away, every clinical decision carries weight no algorithm alone can shoulder."
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="880"
                  height="880"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FRAGMENTATION PROBLEM ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHAT BREAKS TODAY</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Voice triage loses clinical signal at every handoff.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-600/40 bg-red-600/5 p-8">
              <div className="mb-4 inline-block rounded-md bg-red-600/20 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-red-300">
                TODAY
              </div>
              <h3 className="font-display text-xl font-medium text-ink-50">Voice-only telemedicine</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-50/75">
                <li>Officer phones the shore line. Physician hears symptoms verbally. No structured data.</li>
                <li>Vitals read aloud, often partially. Physician writes them in their own format afterward.</li>
                <li>Drug-interaction checks happen in the physician's head, often without the actual onboard formulary.</li>
                <li>Documentation reconstructed from memory after the call. MLC inspectors find gaps.</li>
                <li><strong className="text-ink-50">Time to decision:</strong> 25–45 minutes.</li>
              </ul>
            </div>
            <div className="editorial-card border-sea-500/40">
              <div className="mb-4 inline-block rounded-md bg-sea-500/20 px-2 py-0.5 text-xs uppercase tracking-eyebrow text-sea-300">
                WITH SEASCOPE
              </div>
              <h3 className="font-display text-xl font-medium text-ink-50">Structured case + AI-augmented physician</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-50/85">
                <li>Officer captures vitals, complaint, history, photos in a guided form on the bridge computer.</li>
                <li>Structured packet transmits to shore in under 30 seconds.</li>
                <li>Physician opens the case with full context, an AI-drafted recommendation tied to the actual onboard formulary.</li>
                <li>Doctor reviews, modifies, approves. Response transmits back. Everything auto-documents.</li>
                <li>Sits alongside your existing TMAS provider and ship's doctors. It augments the team you already trust, it does not replace them.</li>
                <li><strong className="text-sea-300">Time to decision:</strong> 3–12 minutes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SEE THE ACTUAL PRODUCT ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE THE ACTUAL PRODUCT</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              One case, ship to shore. Closed as a single audited record.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Real product screens, demo data only. The officer's case and the doctor's
              fleet-wide worklist, both built on the same case record.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
            {[
              {
                src: '/images/product/screen-telemed.png',
                width: 2720,
                height: 1466,
                alt: 'SeaScope case view showing an officer-logged chest pain case with vitals, the shoreside physician\'s decision, a prescription drawn from the ship\'s medicine chest, and a timestamped audit trail.',
                caption: 'Vitals, decision, and prescription in one record, timestamped and signed off in minutes, not the 25 to 45 minutes voice-only triage takes.',
              },
              {
                src: '/images/product/screen-telemed-worklist.png',
                width: 2720,
                height: 1430,
                alt: 'SeaScope Hub fleet worklist showing open cases across multiple vessels with median response time, triage level, and diagnosis coding.',
                caption: 'One physician queue covering the fleet: urgent cases surface first, every case gets coded, nothing sits unclaimed.',
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
          <p className="mt-10 text-center text-xs italic text-ink-50/50">
            Physician-gated clinical decision support. The shoreside physician reviews and signs every case; SeaScope drafts and structures, it does not diagnose or prescribe on its own.
          </p>
        </div>
      </section>

      {/* ─────────────── OUTCOMES ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">OUTCOMES YOUR FINANCE TEAM CARES ABOUT</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Four measurable improvements over voice-only triage.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              { title: 'MLC 2026 documentation', body: 'Every case produces a structured PDF designed to support MLC 2006 documentation requirements. Available on demand, per vessel, date-ranged. No after-the-fact reconstruction.' },
              { title: 'Faster decisions, fewer evacuations', body: 'Voice triage averages 25–45 minutes. Structured cases close in 3–12. Faster decisions mean fewer "evacuate to be safe" defaults, and the cases that genuinely need evacuation get there sooner.' },
              { title: 'Lower P&I exposure', body: 'Documented clinical decision trail, citation-backed, physician-signed. The kind of record that reduces malpractice risk and the premium that comes with it.' },
              { title: 'Fleet-wide visibility', body: 'One physician seat can manage 100+ vessels with confidence. The Hub queue surfaces the urgent cases first, the routine ones get the time they deserve, and the medical director sees fleet-wide trends in real time.' },
            ].map((outcome) => (
              <div key={outcome.title} className="editorial-card">
                <h3 className="font-display text-xl font-medium text-ink-50">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/75">{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PRICING (GATED) ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="eyebrow mb-4">PRICING</div>
          <h2 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl">
            Priced per fleet<span className="accent-sea">.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-50/70">
            Volume pricing, physician-seat licensing, and pilot terms vary by fleet size, vessel
            type, and integration scope. We walk you through the full structure, including pilot
            conversion economics, in a 30-minute consultative call.
          </p>
          <button type="button" onClick={() => openDemo('cargo/pricing')} className="btn-primary mt-10">
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-6 text-xs text-ink-50/50">
            Pilot programs available for fleets evaluating SeaScope before a multi-year deployment.
            100% of pilot fees credit against Year 1 on conversion.
          </p>
        </div>
      </section>

      {/* ─────────────── ENGINE CREDIBILITY ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHAT'S UNDERNEATH</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Powered by SeaScope CDS: the trademark engine.
            </h2>
            <p className="mt-6 text-base text-ink-50/70">
              SeaScope Cargo Solutions runs on SeaScope CDS: evidence-based medicine
              engineered for the edge. Every recommendation is grounded in the vessel's
              actual formulary, traceable to the clinical guideline behind it, and saved
              as a defensible case record. Architected under the FDA §520(o)(1)(E)
              Clinical Decision Support exemption.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {[
              { figure: '52+', label: 'Protocols' },
              { figure: '222+', label: 'Clinical guidelines' },
              { figure: '13', label: 'Guardrails' },
              { figure: '0', label: 'Critical failures' },
              { figure: '3,500+', label: 'Evaluation runs' },
              { figure: '4+', label: 'Languages' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-medium text-sea-300">{stat.figure}</div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs uppercase tracking-eyebrow text-ink-50/50">
            Expanding every release, 2026 Q2 snapshot, numbers grow monthly
          </p>
          <div className="mt-6 text-center">
            <Link to="/evidence" className="text-sm text-sea-300 underline">
              See the full evidence and validation record →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── PILOT PROGRAM ─────────────── */}
      <section id="pilot" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="eyebrow mb-4">PILOT PROGRAM</div>
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
            30 days. 10 vessels. One shore physician.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/70">
            A focused pilot designed to validate workflow fit and clinical value before a
            multi-year deployment. Includes structured success metrics, shore-doctor adoption,
            officer triage quality, time-to-decision reduction, MLC documentation completeness , 
            and a structured conversion review at day 30.
          </p>
          <div className="mt-8 inline-block rounded-xl border-2 border-sea-500 bg-sea-500/5 px-6 py-4 font-medium text-sea-300">
            100% of pilot fees credit against Year 1 commercial pricing on conversion.
          </div>
          <div className="mt-10">
            <a href="#demo" className="btn-primary">
              Apply for the Pilot Program
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section id="demo" className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Bring structured clinical intelligence to your fleet.
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            30-minute consultative call. We'll walk you through the workflow, the architecture,
            and the pilot economics tuned to your fleet size.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => openDemo('cargo/final')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:hello@seascope.tech?subject=Cargo%20Solutions%20Sales%20Inquiry"
              className="text-sm text-ink-900 underline"
            >
              Or contact sales directly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
