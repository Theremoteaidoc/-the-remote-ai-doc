import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * /wellness: Crew Wellness for fleet operators and crew members.
 * Outcome copy. Crew join steps (open, create account, set password) stay.
 */

const BENEFITS = [
  {
    title: 'Earlier visibility of risk',
    body: 'The care team sees the trend before the next exam, not after a failed medical.',
  },
  {
    title: 'Crew kept fit and working',
    body: 'Conditions caught early are less likely to become a mid-voyage evacuation or a failed PEME.',
  },
  {
    title: 'Supports your duty of care under MLC',
    body: 'Documented health oversight between mandatory exams.',
  },
  {
    title: 'Fewer surprises at the next PEME',
    body: 'When exam day arrives, months of readings are already in the record.',
  },
];

export default function Wellness() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState('wellness/hero');
  const openDemo = (source = 'wellness/hero') => {
    setDemoSource(source);
    setDemoOpen(true);
  };

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source={demoSource} />

      <Helmet>
        <title>SeaScope Crew Wellness: Between-exam monitoring for seafarers</title>
        <meta
          name="description"
          content="Crew Wellness for fleet operators. Crew self-enrol from a poster and log blood pressure and glucose between PEMEs. Supports the duty-of-care record under MLC."
        />
        <link rel="canonical" href="https://seascope.tech/wellness" />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <div className="eyebrow mb-6">CREW WELLNESS: FOR FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                Health between exams, from a poster on the ship<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Crew self-enrol from a poster. They log blood pressure and glucose. Your care
                team sees the trend before the next PEME.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openDemo('wellness/hero')}
                  className="btn-primary"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/pricing" className="btn-secondary">
                  See pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative w-56 overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20 sm:w-64">
                <img
                  src="/images/product/crew-home.png"
                  alt="SeaScope Crew Wellness app home screen on a phone."
                  className="w-full object-cover"
                  loading="eager"
                  width="960"
                  height="1960"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">FOR YOUR FLEET</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              What this means for your fleet.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="editorial-card">
                <h3 className="font-display text-xl font-medium text-ink-50">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{benefit.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink-50/60">
            The programme is in service with fleet operators. Supports the duty-of-care record under MLC.
          </p>
        </div>
      </section>

      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Close the gap between exams.
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            30-minute call. Or see pricing.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => openDemo('wellness/buyer-cta')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link to="/pricing" className="text-sm text-ink-900 underline">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700/40 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full border border-sea-500/40 bg-sea-500/5 px-5 py-2 text-sm font-medium tracking-eyebrow text-sea-300 uppercase">
              For crew members
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Your health, between exams<span className="accent-sea">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Log a reading in seconds. See your own trends. Message a doctor from the app,
              private and available around the clock, in your own language.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-50/70">
              You choose whether your readings are shared with the ship's care team. The app
              does not diagnose, prescribe, or replace a medical exam.
            </p>
          </div>
        </div>
      </section>

      <section
        id="get-the-app"
        className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32"
        aria-labelledby="get-the-app-heading"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_auto] lg:gap-16">
            <div>
              <div className="eyebrow mb-4">GET THE APP</div>
              <h2
                id="get-the-app-heading"
                className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl"
              >
                Get the app.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-50/70">
                Crew self-enrol from a poster. Three steps:
              </p>
              <ol className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sea-500/15 font-mono text-sm font-bold text-sea-300 ring-1 ring-sea-500/30"
                    aria-hidden="true"
                  >
                    1
                  </span>
                  <span className="pt-0.5 text-base leading-relaxed text-ink-50/80">
                    Open the join page (scan the QR code).
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sea-500/15 font-mono text-sm font-bold text-sea-300 ring-1 ring-sea-500/30"
                    aria-hidden="true"
                  >
                    2
                  </span>
                  <span className="pt-0.5 text-base leading-relaxed text-ink-50/80">
                    Create an account.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sea-500/15 font-mono text-sm font-bold text-sea-300 ring-1 ring-sea-500/30"
                    aria-hidden="true"
                  >
                    3
                  </span>
                  <span className="pt-0.5 text-base leading-relaxed text-ink-50/80">
                    Set a password.
                  </span>
                </li>
              </ol>
              <p className="mt-8 text-sm leading-relaxed text-ink-50/60">
                You choose whether your readings are shared with the ship's care team. The
                app does not diagnose, prescribe, or replace a medical exam.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-ink-700/40">
                <img
                  src="/images/wellness/crew-app-qr.svg"
                  alt="QR code for the SeaScope Crew Wellness join page at app.seascope.tech/crew/join"
                  width="192"
                  height="192"
                  className="h-48 w-48"
                />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-eyebrow text-ink-50/50">
                Scan to open the app
              </p>
              <a
                href="https://app.seascope.tech/crew/join"
                className="mt-3 text-sm text-sea-300 underline"
              >
                Open the SeaScope Crew Wellness join page
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
