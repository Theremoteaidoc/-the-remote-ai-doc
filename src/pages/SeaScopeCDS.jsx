import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';

const STRIPE_CDS_CHECKOUT = 'https://buy.stripe.com/5kQ00i6YjgeH7Zt9lN2ZO00';

/**
 * /seascope-cds: telemedicine for physicians and fleet operators.
 * Outcome copy only: what the customer gets and who it is for.
 */
export default function SeaScopeCDS() {
  return (
    <>
      <Helmet>
        <title>SeaScope Telemedicine: A physician for the ship when the officer needs one.</title>
        <meta
          name="description"
          content="Ship-to-shore telemedicine for fleet operators and ship physicians. A record for every case. $29.99/month for individual physicians, or quoted per fleet."
        />
        <link rel="canonical" href="https://seascope.tech/seascope-cds" />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <div className="eyebrow mb-6">TELEMEDICINE: FOR PHYSICIANS AND FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                A physician for the ship, when the officer needs one<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Ship-to-shore clinical care for fleets, and a personal subscription for
                physicians practising at sea. The clinician always decides.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={STRIPE_CDS_CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/pricing" className="btn-secondary">
                  See pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/50 ring-1 ring-sea-500/20">
                <img
                  src="/cds-feature.jpg"
                  alt="A tablet at a ship's desk beside a brass lamp and porthole, representing SeaScope telemedicine at sea."
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

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHAT YOU GET</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Clinical care the ship can use tonight.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                title: 'A plan when shore is hours away.',
                body: 'The officer on the bridge gets a physician-ready response, not a waiting room.',
              },
              {
                title: 'An SOS line to your own desk.',
                body: 'Fleet operators keep a voice line from the ship to their 24/7 medical desk.',
              },
              {
                title: 'A record that holds up under review.',
                body: 'Every case closes as documentation the operator can produce for inspection.',
              },
              {
                title: 'The clinician remains in charge.',
                body: 'SeaScope supports the physician. It does not diagnose, prescribe, or replace judgment.',
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

      <section className="border-y border-ink-700/40 bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4 text-center">WHO IT IS FOR</div>
          <h2 className="text-center font-display text-3xl font-normal text-ink-50 sm:text-4xl">
            Physicians at sea, and the operators who back them.
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="editorial-card">
              <h3 className="font-display text-xl font-medium text-ink-50">Individual physicians</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/70">
                A personal subscription for physicians practising at sea and in other
                resource-limited settings.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-xl font-medium text-ink-50">Fleet operators</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/70">
                Ship-to-shore telemedicine for the fleet, with an SOS voice line to the
                operator's own 24/7 desk.
              </p>
            </div>
            <div className="editorial-card">
              <h3 className="font-display text-xl font-medium text-ink-50">Cargo fleets without a physician aboard</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-50/70">
                The officer on the bridge reaches a physician. The case closes as one record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <div className="eyebrow mb-4">PRICING</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Priced for one practitioner, or quoted per fleet.
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-md rounded-3xl border-2 border-sea-500 bg-ink-800/60 p-10 text-center backdrop-blur">
            <div className="font-display text-2xl text-ink-50">SeaScope CDS</div>
            <div className="mt-6 font-display text-6xl font-medium text-sea-300">$29.99</div>
            <div className="text-sm text-ink-50/60">per month · cancel anytime</div>
            <ul className="mt-8 space-y-3 text-left">
              {[
                'Clinical decision support for physicians at sea',
                'Documentation for every encounter',
                '14-day free trial',
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
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-ink-50/50">No credit card required. Cancel anytime.</p>
            <Link
              to="/pricing"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-sea-300 underline-offset-2 hover:text-sea-200 hover:underline"
            >
              Full pricing, including fleet telemedicine
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-ink-50/70">
            "A tool I would genuinely trust in remote and maritime settings." Dr. Cameron,
            Maritime Physician.
          </p>
        </div>
      </section>

      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Start with a trial, or book a fleet demo.
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            14 days free for individual physicians. Fleet operators: a 30-minute call.
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
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900/40 px-8 py-4 text-base font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              See pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
