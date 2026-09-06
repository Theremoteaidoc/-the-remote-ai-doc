import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * /evidence: safety, safety-case, regulatory, validation, eval-tracker,
 * data-flow, and security. Old /seascope/* and /security deep links land here.
 */
export default function Evidence() {
  return (
    <>
      <Helmet>
        <title>Evidence &amp; Security: SeaScope</title>
        <meta
          name="description"
          content="Safety architecture, safety case, regulatory position, validation method, evaluation tracker, data flow, and security practices for SeaScope CDS."
        />
        <link rel="canonical" href="https://seascope.tech/evidence" />
      </Helmet>

      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">EVIDENCE AND SECURITY</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Safety is architectural, not probabilistic<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            Every recommendation undergoes deterministic safety checks before reaching the
            clinician. Safety is enforced in code, not requested from a model.
          </p>
        </div>
      </section>

      <section id="safety" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SAFETY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Thirteen independent safety checks. None of them trust the model.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            SeaScope CDS runs every recommendation through a sequence of rule-based safety checks
            before the clinician sees the output. Each check is deterministic, pass or fail, not
            probabilistic judgment. If any check fails, the recommendation is modified or blocked,
            with an explanation to the clinician.
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
        </div>
      </section>

      <section id="safety-case" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SAFETY CASE</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            When a check fails, the path is documented.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            Each guardrail has a stated failure mode, a fallback, and a residual risk. A blocked
            recommendation cannot proceed without a clinician override that records who overrode it
            and why. Novel allergies, lag between a formulary change and the database, and
            incorrect weight entry are treated as residual risks, not as silent passes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Allergy and formulary gates',
                body: 'Unrecognized allergy terms and drugs not on the indexed chest block the recommendation. Override requires a documented rationale.',
              },
              {
                title: 'Lab and confabulation checks',
                body: 'Values the model invents, and lab results that were never submitted, are rejected by string match against the clinician input.',
              },
              {
                title: 'Dosing and boxed warnings',
                body: 'Doses outside the range for the recorded weight are flagged. FDA boxed warnings are applied from the warning database, not from model memory.',
              },
            ].map((card) => (
              <div key={card.title} className="editorial-card">
                <h3 className="font-display text-lg font-medium text-ink-50">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/75">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="regulatory" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">REGULATORY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Designed around the FDA §520(o)(1)(E) Clinical Decision Support exemption.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">FDA / SaMD</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                SeaScope CDS is architected as a Clinical Decision Support tool under the FDA
                §520(o)(1)(E) criterion. Every recommendation is reviewed and approved by the
                licensed clinician. Exploratory discussions with specialized FDA regulatory counsel
                have taken place. FDA counsel will be engaged before commercial claims that depend
                on that pathway.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">MLC 2006</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                Telemedicine cases produce audit-ready documentation aligned with Maritime Labour
                Convention 2006 requirements. Per-vessel, date-ranged exports are available on
                demand. Structured PDF designed to support maritime medical recordkeeping and
                inspection workflows.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">HIPAA-shaped</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                Patient data is handled per HIPAA security and privacy rule specifications even
                where HIPAA does not formally apply. Encrypted at rest, transmitted over TLS,
                never used to train external models, retained 7 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="validation" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">VALIDATION</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Structured evaluation runs. Not a clinical outcomes study.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            SeaScope CDS validation runs across a structured panel of clinical scenarios calibrated
            to maritime and remote-medicine practice. Each case is graded by independent clinical
            evaluators using a published rubric. Figures below are evaluation, demo, synthetic, and
            shadow-mode runs, not patient-outcome claims.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { figure: '3,500+', label: 'Evaluation runs' },
              { figure: '0', label: 'Detected critical failures (1,500+ automated safety tests)' },
              { figure: '5', label: 'Care environments' },
              { figure: '15+', label: 'Specialties in the panel' },
              { figure: '4', label: 'Languages' },
              { figure: '52', label: 'Protocols' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-medium text-sea-300">{stat.figure}</div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-50/60">
            No reported shadow-mode physician unsafe-recommendation overrides to date. Every
            guardrail logs every trigger.
          </p>
        </div>
      </section>

      <section id="eval-tracker" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">EVALUATION TRACKER</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Findings are tracked to a document, a status, and a residual risk.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            Evaluation notes from independent reviewers are logged against the safety architecture,
            the data-protection addendum, and the operational protocol. Each item is marked
            addressed, deferred with a stated phase, or closed with a residual risk. Halt criteria
            for a live evaluation (including a PHI finding) are written down before day one, not
            after the fact.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">What is scored</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                Confabulation types, guideline citation accuracy, dosing bounds, and whether a
                recommendation would have been unsafe on the recorded chest. Domain coverage is
                checked so one specialty cannot dominate the panel.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">What is not claimed</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                This tracker is not a clinical outcomes study, not a regulatory clearance, and not
                a substitute for the clinician of record. It is the internal record of how the
                engine was tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="data-flow" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">DATA FLOW</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            De-identified input. Safety layer. Clinician output. Audit trail.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            Online, the clinician submits de-identified parameters (age, weight, symptoms,
            allergies, current medications). Those inputs pass the safety layer, then the reasoning
            engine, then a post-check, then the clinician. Offline, the same path runs on the
            device against a cached engine when the satellite is down. No patient name, MRN, or
            location is required for the CDS path.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              'Clinician input (no PHI required)',
              'Deterministic safety layer',
              'Reasoning engine',
              'Post-check and clinician review',
              'Recommendation plus audit trail',
            ].map((step, i) => (
              <li key={step} className="rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
                <div className="font-mono text-xs text-sea-300">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-sm text-ink-50/85">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="security" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SECURITY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Security practices for SeaScope CDS and operator telemedicine.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/75">
            Effective 2026-05-05. Final policy in preparation. Contact{' '}
            <a href="mailto:contact@seascope.tech" className="text-sea-300 underline">
              contact@seascope.tech
            </a>{' '}
            for current data-handling and contractual terms before any deployment.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">In transit and at rest</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                TLS in transit. Encryption at rest. Access is logged. Customer data is not used to
                train external models.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-lg font-medium text-ink-50">Contracts</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/75">
                A Business Associate Agreement is available where the deployment requires one.
                Retention defaults to seven years where the customer agreement requires it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sea-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-normal text-ink-900 sm:text-4xl">
            Want the full technical brief?
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            Validation methodology, regulatory documentation, data-flow specification, and
            evaluation tracker, available to NDA partners in a single technical pack.
          </p>
          <a
            href="mailto:hello@seascope.tech?subject=Request%20-%20Technical%20Brief%20(NDA)"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
          >
            Request the Technical Brief (NDA)
          </a>
          <p className="mt-6">
            <Link to="/pricing" className="text-sm text-ink-900 underline">
              Or see pricing
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
