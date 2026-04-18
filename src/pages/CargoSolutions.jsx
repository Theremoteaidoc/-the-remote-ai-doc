import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';

/**
 * /cargo-solutions — operator product page.
 * Voice register: operations-credible. Copy from /root/marketing/copy/cargo-solutions-v1.md.
 * Hero photo: TODO — recommend reuse helicopter brand asset; placeholder gradient for now.
 * Pricing: GATED per IA amendment 2 — only "Starting from $75/vessel/month" is public.
 */
export default function CargoSolutions() {
  return (
    <>
      <Helmet>
        <title>SeaScope Cargo Solutions — Officer triage. Doctor decision. One audited case.</title>
        <meta
          name="description"
          content="Structured medical case workflow for cargo fleets. Officer triage onboard, AI-augmented physician hub on shore. MLC-grade documentation built in. Starting from $75/vessel/month."
        />
        <link rel="canonical" href="https://seascope.tech/cargo-solutions" />
      </Helmet>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">SEASCOPE CARGO SOLUTIONS — FOR FLEET OPERATORS</div>
            <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl lg:text-7xl">
              Officer triage. Doctor decision. One audited case<span className="accent-sea">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80 sm:text-xl">
              SeaScope Cargo Solutions structures every medical case from the moment your officer
              captures it onboard to the moment your shore physician approves the response.
              MLC-grade documentation built in.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:javier@theremoteaidoc.com" className="btn-secondary">
                Talk to Javier directly
              </a>
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
                <li><strong className="text-sea-300">Time to decision:</strong> 3–12 minutes.</li>
              </ul>
            </div>
          </div>
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
              { title: 'MLC 2026 documentation', body: 'Every case auto-meets MLC 2006 documentation requirements. Inspector-ready PDF on demand, per vessel, date-ranged. No after-the-fact reconstruction.' },
              { title: 'Faster decisions, fewer evacuations', body: 'Voice triage averages 25–45 minutes. Structured cases close in 3–12. Faster decisions mean fewer "evacuate to be safe" defaults — and the cases that genuinely need evacuation get there sooner.' },
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
            Starting from $75 / vessel / month<span className="accent-sea">.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-50/70">
            Volume pricing, physician-seat licensing, and pilot terms vary by fleet size, vessel
            type, and integration scope. We walk you through the full structure — including pilot
            conversion economics — in a 30-minute consultative call.
          </p>
          <a href="#demo" className="btn-primary mt-10">
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
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
              Powered by SeaScope CDS — the trademark engine.
            </h2>
            <p className="mt-6 text-base text-ink-50/70">
              SeaScope Cargo Solutions runs on SeaScope CDS, the clinical reasoning engine
              architected under the FDA §520(o)(1)(E) Clinical Decision Support exemption.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {[
              { figure: '52', label: 'Protocols' },
              { figure: '222', label: 'Drug rules' },
              { figure: '13', label: 'Guardrails' },
              { figure: '0', label: 'Critical failures' },
              { figure: '1,899+', label: 'Encounters' },
              { figure: '4', label: 'Languages' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-medium text-sea-300">{stat.figure}</div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
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
            multi-year deployment. Includes structured success metrics — shore-doctor adoption,
            officer triage quality, time-to-decision reduction, MLC documentation completeness —
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
            <a
              href="mailto:hello@seascope.tech?subject=Cargo%20Solutions%20Demo%20Request"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:javier@theremoteaidoc.com"
              className="text-sm text-ink-900 underline"
            >
              Or email Javier directly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
