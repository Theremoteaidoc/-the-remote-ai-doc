import { Helmet } from 'react-helmet-async';

/**
 * /privacy: Legal placeholder pending full policy.
 * Effective 2026-05-05. Final policy in preparation.
 */
export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy: SeaScope / RemoteAid Medical Solutions</title>
        <meta name="description" content="Privacy policy for SeaScope CDS and SeaScope Cargo Solutions. Effective 2026-05-05. Final policy in preparation." />
        <link rel="canonical" href="https://seascope.tech/privacy" />
      </Helmet>

      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="eyebrow mb-4">LEGAL</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base text-ink-50/70">
            How RemoteAid Medical Solutions handles data collected through SeaScope CDS and SeaScope Cargo Solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="editorial-card">
            <p className="text-sm text-ink-50/70 leading-relaxed">
              Effective 2026-05-05. Final policy in preparation. Contact{' '}
              <a href="mailto:contact@seascope.tech" className="text-sea-300 underline">
                contact@seascope.tech
              </a>{' '}
              for current data-handling and contractual terms before any deployment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
