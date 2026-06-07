import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * /evidence — Validation, safety, regulatory.
 * Replaces 7 prior /seascope/* sub-pages.
 * Copy from /root/marketing/copy/evidence-v1.md.
 * Build week: port content from existing SeaScopeSafety/SafetyCase/Regulatory/etc files into the anchor sections below.
 */
export default function Evidence() {
  return (
    <>
      <Helmet>
        <title>Evidence & Validation — SeaScope CDS</title>
        <meta name="description" content="13 deterministic safety guardrails. 3,500+ evaluation, demo, synthetic, and shadow-pilot runs. 0 detected critical failures across 1,500+ automated safety tests. Not a clinical outcomes study. FDA §520(o)(1)(E) Clinical Decision Support architected. MLC 2006 aligned." />
        <link rel="canonical" href="https://seascope.tech/evidence" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">EVIDENCE & VALIDATION</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Safety is architectural, not probabilistic<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            Every recommendation undergoes 13 deterministic safety checks before reaching the
            clinician. Safety is enforced in code, not requested from a model.
          </p>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SAFETY ARCHITECTURE</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Thirteen independent safety checks. None of them trust the model.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            SeaScope CDS runs every recommendation through a sequence of rule-based safety checks
            before the clinician sees the output. Each check is deterministic — pass/fail logic,
            not probabilistic judgment. If any check fails, the recommendation is either modified
            or blocked entirely with a clear explanation to the clinician.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Allergy cross-check',
              'Drug-drug interaction screen',
              'Dose ceiling check',
              'Formulary verification',
              'Indication-efficacy match',
              'Renal dose adjustment',
              'Pregnancy safety category',
              'Contraindication screen',
              'Hallucinated-value detector',
              'Threshold whitelist',
              'Negative-context drug detection',
              'Confidence calibration',
              'Citation density floor',
            ].map((g, i) => (
              <div key={g} className="flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
                <span className="font-mono text-xs text-sea-300">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-ink-50/85">{g}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border-2 border-sea-500 bg-sea-500/5 p-6 text-center">
            <p className="font-display text-2xl text-sea-300">0 detected critical failures</p>
            <p className="mt-2 text-sm text-ink-50/70">across 1,500+ automated safety tests and 3,500+ evaluation, demo, synthetic, and shadow-pilot runs. No reported shadow-pilot physician unsafe-recommendation overrides to date. Not a clinical outcomes study. Every guardrail logs every trigger.</p>
          </div>
        </div>
      </section>

      {/* REGULATORY */}
      <section id="regulatory" className="border-t border-ink-700/40 bg-ink-800/20 py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">REGULATORY ARCHITECTURE</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Designed around the FDA §520(o)(1)(E) Clinical Decision Support exemption.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">FDA / SaMD</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                SeaScope CDS is architected as a Clinical Decision Support tool under the FDA
                §520(o)(1)(E) Criterion exemption. Every recommendation is reviewed and approved
                by the licensed clinician. SeaScope has had exploratory discussions with specialized FDA regulatory counsel and intends to engage FDA counsel before commercial deployment.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">MLC 2006</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                SeaScope Cargo Solutions produces audit-ready documentation aligned with Maritime
                Labour Convention 2006 requirements. Per-vessel, date-ranged exports available on
                demand. Structured PDF designed to support maritime medical recordkeeping and inspection workflows.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">HIPAA-shaped</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                Patient data handled per HIPAA security and privacy rule specifications even
                where HIPAA doesn't formally apply. Encrypted at rest, transmitted over TLS,
                never used to train external models, retained 7 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="validation" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">VALIDATION METHODOLOGY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            3,500+ evaluation, demo, synthetic, and shadow-pilot runs. 0 detected critical failures across 1,500+ automated safety tests. Not a clinical outcomes study.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            SeaScope CDS validation runs across a structured panel of clinical scenarios calibrated
            to the conditions actually encountered in maritime and remote-medicine practice. Each
            validation case is graded by independent clinical evaluators using a published rubric.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { figure: '3,500+', label: 'Evaluation runs' },
              { figure: '0', label: 'Critical failures' },
              { figure: '5', label: 'Environments' },
              { figure: '15+', label: 'Specialties' },
              { figure: '4', label: 'Languages' },
              { figure: '52', label: 'Protocols' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-medium text-sea-300">{stat.figure}</div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sea-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-normal text-ink-900 sm:text-4xl">
            Want the full technical brief?
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            Validation methodology, regulatory documentation, data-flow specification, and
            evaluation tracker — all available to NDA partners in a single technical pack.
          </p>
          <a
            href="mailto:hello@seascope.tech?subject=Request%20-%20Technical%20Brief%20(NDA)"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
          >
            Request the Technical Brief (NDA) →
          </a>
          <p className="mt-6">
            <Link to="/cargo-solutions" className="text-sm text-ink-900 underline">
              Or learn how SeaScope Cargo Solutions deploys this for fleets →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
