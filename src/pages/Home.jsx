import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * Homepage: what SeaScope is, three product tiles, one proof band, one CTA.
 */

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="home/hero" />
      <Helmet>
        <title>SeaScope: Clinical services for fleets at sea.</title>
        <meta
          name="description"
          content="SeaScope provides clinical services for fleets: telemedicine, PEME processing, and crew wellness. Book a demo."
        />
        <link rel="canonical" href="https://seascope.tech/" />
        <link rel="preload" as="image" href="/home-hero.jpg" fetchPriority="high" />
      </Helmet>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/home-hero.jpg"
            alt="Aerial view of a tanker at sea with distant vessels on the horizon at sunset."
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 60%' }}
            width="1200"
            height="564"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900/95" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">
              SEASCOPE: A REMOTEAID MEDICAL SOLUTIONS COMPANY
            </div>
            <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl lg:text-7xl">
              Clinical services for fleets at sea<span className="accent-sea">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80 sm:text-xl">
              Telemedicine, PEME processing, and crew wellness for operators who need
              physician-led care where shore hospitals are hours away.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">FOR FLEET OPERATORS</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Three services. One clinical provider.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {[
              {
                eyebrow: 'TELEMEDICINE',
                title: 'A physician for the ship, when the officer needs one.',
                body: 'Ship-to-shore clinical care for the fleet. An SOS voice line to your own 24/7 desk. A record for every case.',
                to: '/seascope-cds',
                cta: 'Telemedicine',
              },
              {
                eyebrow: 'PEME',
                title: 'Pre-employment exams, processed and on file.',
                body: 'Clinics submit. A licensed reviewer signs off. Fitness decisions stay searchable when the inspector asks.',
                to: '/peme',
                cta: 'PEME Platform',
              },
              {
                eyebrow: 'CREW WELLNESS',
                title: 'Health between exams, from a poster on the ship.',
                body: 'Crew self-enrol from a poster. They log blood pressure and glucose. Your care team sees the trend before the next PEME.',
                to: '/wellness',
                cta: 'Crew Wellness',
              },
            ].map((card) => (
              <div key={card.eyebrow} className="editorial-card flex flex-col">
                <div className="eyebrow mb-3">{card.eyebrow}</div>
                <h3 className="font-display text-2xl font-medium leading-snug text-ink-50">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-50/70">{card.body}</p>
                <Link
                  to={card.to}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sea-300 transition hover:text-sea-500"
                >
                  {card.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">POSTURE</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Built for the questions a fleet is asked.
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
            {[
              'Maritime Labour Convention 2006 aligned documentation',
              'GDPR',
              'HIPAA-aligned handling',
              'Data residency in the EU and the UK',
              'Encrypted in transit and at rest',
              'Physician oversight. Guideline-based. The clinician always decides.',
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-ink-700/60 bg-ink-800/30 px-4 py-3 text-sm text-ink-50/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-ink-50/60">
            <Link to="/evidence" className="text-sea-300 underline">
              Evidence and security
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            See it on your fleet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-900/80">
            A 30-minute call, or email{' '}
            <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
