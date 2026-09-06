import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * /evidence: buyer-facing posture. Old /seascope/* and /security deep links
 * land on the same anchor ids, now one short block each.
 */
export default function Evidence() {
  return (
    <>
      <Helmet>
        <title>Evidence &amp; Security: SeaScope</title>
        <meta
          name="description"
          content="Regulatory posture, security practices, and clinical governance for SeaScope. MLC, GDPR, HIPAA-aligned, data residency in the EU and the UK."
        />
        <link rel="canonical" href="https://seascope.tech/evidence" />
      </Helmet>

      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">EVIDENCE AND SECURITY</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            What a buyer can hold us to<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            Regulatory posture, security practices, and clinical governance.
            Evaluation materials are available under NDA.
          </p>
        </div>
      </section>

      <section id="safety" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SAFETY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Physician oversight on every case.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-50/75">
            Guideline-based clinical services under physician oversight. The clinician
            always decides. SeaScope does not diagnose, prescribe, or replace professional
            judgment.
          </p>
        </div>
      </section>

      <section id="safety-case" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SAFETY CASE</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            A licensed clinician signs the record.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-50/75">
            When a plan is accepted or changed, the file keeps who decided and why.
            Inspection-ready documentation is part of the service.
          </p>
        </div>
      </section>

      <section id="regulatory" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">REGULATORY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Posture a fleet operator can cite.
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              'Maritime Labour Convention 2006 aligned documentation',
              'GDPR',
              'HIPAA-aligned handling',
              'Data residency in the EU and the UK',
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-ink-700/60 bg-ink-800/30 px-4 py-3 text-sm text-ink-50/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="validation" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">VALIDATION</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Clinical content is reviewed by physicians.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-50/75">
            Recommendations are guideline-based. Evaluation materials are available under NDA.
          </p>
        </div>
      </section>

      <section id="eval-tracker" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">EVALUATION TRACKER</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Available under NDA.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-50/75">
            Evaluation tracker: available under NDA.
          </p>
        </div>
      </section>

      <section id="data-flow" className="scroll-mt-20 border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">DATA FLOW</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Available under NDA.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-50/75">
            Data-flow documentation: available under NDA.
          </p>
        </div>
      </section>

      <section id="security" className="scroll-mt-20 border-t border-ink-700/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">SECURITY</div>
          <h2 className="font-display text-4xl font-normal text-ink-50 sm:text-5xl">
            Practices a buyer needs, not a specification.
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              'Encrypted in transit and at rest',
              'Audited access',
              'Tenant isolation',
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-ink-700/60 bg-ink-800/30 px-4 py-3 text-sm text-ink-50/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-50/70">
            A Business Associate Agreement is available where the deployment requires one.
            Contact{' '}
            <a href="mailto:contact@seascope.tech" className="text-sea-300 underline">
              contact@seascope.tech
            </a>{' '}
            for contractual terms.
          </p>
        </div>
      </section>

      <section className="bg-sea-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-normal text-ink-900 sm:text-4xl">
            Request materials under NDA
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            Evaluation and security materials are available to qualified buyers under NDA.
          </p>
          <a
            href="mailto:hello@seascope.tech?subject=Request%20-%20NDA%20materials"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
          >
            Email hello@seascope.tech
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
