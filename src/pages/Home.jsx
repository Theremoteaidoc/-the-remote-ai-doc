import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * Homepage: three live products, one primary CTA, one secondary.
 */

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState('home/hero');
  const [videoStarted, setVideoStarted] = useState(false);
  const openDemo = (source) => {
    setDemoSource(source);
    setDemoOpen(true);
  };

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source={demoSource} />
      <Helmet>
        <title>SeaScope: Clinical care for places medicine wasn't built for.</title>
        <meta
          name="description"
          content="Physician-built clinical technology for maritime operators. Telemedicine CDS with officer-to-clinician workflow, PEME processing, and crew wellness. Book a demo."
        />
        <link rel="canonical" href="https://seascope.tech/" />
      </Helmet>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/home-hero.jpg"
            alt="Aerial view of a tanker at sea with distant vessels on the horizon at sunset, representing maritime medicine practiced where specialist backup is hours away."
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900/95" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">
              SEASCOPE: A REMOTEAID MEDICAL SOLUTIONS COMPANY
            </div>
            <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl lg:text-7xl">
              Clinical care for places medicine wasn't built for<span className="accent-sea">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80 sm:text-xl">
              Three live products for medicine at sea. Telemedicine CDS with an officer-to-clinician
              workflow and an SOS voice line to the operator's own 24/7 desk. PEME processing on
              client-specific requirement packages, priced per PEME. Crew Wellness with
              self-enrolment by passport and date of birth.
            </p>
            <p className="mt-3 max-w-2xl text-xs italic text-ink-50/50">
              Physician-gated clinical decision support. SeaScope drafts, structures, and documents recommendations for clinician review; it does not diagnose, prescribe, or replace professional judgment.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openDemo('home/hero')}
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
        </div>
      </section>

      {/* ─────────────── THREE PRODUCTS ─────────────── */}
      <section id="products" className="border-t border-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">LIVE PRODUCTS</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              One clinical engine. Three products in use.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {[
              {
                eyebrow: 'TELEMEDICINE',
                title: 'Officer to clinician, with an SOS line to your desk.',
                body: 'The officer captures the case onboard. Shore physicians review it with formulary-locked decision support and send back the plan. An SOS voice line connects the bridge to the operator\'s own 24/7 desk. Every case closes as a single audited record.',
                to: '/seascope-cds',
                cta: 'Telemedicine CDS',
              },
              {
                eyebrow: 'PEME',
                title: 'Client-specific packages, priced per PEME.',
                body: 'Clinics submit. The engine reads, structures, and flags against the requirement package for that client. A licensed reviewer signs off in one queue. Fitness decisions become a searchable record.',
                to: '/peme',
                cta: 'PEME Platform',
              },
              {
                eyebrow: 'CREW WELLNESS',
                title: 'Self-enrolment by passport and date of birth.',
                body: 'Crew enrol themselves and log blood pressure and glucose between ports. Clinicians see the trend before the next exam. Supports the duty-of-care record under MLC.',
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

      {/* ─────────────── SEE IT IN ACTION ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-900 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE IT IN ACTION</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              The platform, in under a minute<span className="accent-sea">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-50/70">
              The real product: fleet PEME review, ship-to-shore telemedicine, decision support with
              code-enforced guardrails, and the crew app. Demo data only.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20">
            {videoStarted ? (
              <video
                controls
                autoPlay
                playsInline
                poster="/videos/seascope-explainer-poster.jpg"
                className="block w-full"
              >
                <source src="/videos/seascope-explainer.mp4" type="video/mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setVideoStarted(true)}
                className="group relative block w-full text-left"
                aria-label="Play platform explainer video"
              >
                <img
                  src="/videos/seascope-explainer-poster.jpg"
                  alt="SeaScope platform explainer poster. Click to play the video."
                  className="block w-full"
                  width="1280"
                  height="720"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink-900/30 transition group-hover:bg-ink-900/20">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/80 px-5 py-3 text-sm font-medium text-ink-50 ring-1 ring-sea-500/40">
                    <Play className="h-4 w-4 text-sea-300" fill="currentColor" />
                    Play explainer
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────── PRODUCT SCREENS ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE THE ACTUAL PRODUCT</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Not slides. The real thing.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                src: '/images/product/screen-peme.png',
                width: 2720,
                height: 1622,
                alt: 'SeaScope PEME workspace showing a fleet medical review list with fitness-to-sail gating.',
                caption: "Review a whole fleet's medicals in one workspace, with safety gates the machine cannot override.",
              },
              {
                src: '/images/product/screen-telemed.png',
                width: 2720,
                height: 1466,
                alt: 'SeaScope telemedicine case view showing vitals, clinical decision, and prescription in a single record.',
                caption: 'One case, ship to shore: vitals, decision, and prescription, closed as a single audited record.',
              },
              {
                src: '/images/product/screen-clinical-cds.png',
                width: 2720,
                height: 1226,
                alt: 'SeaScope clinical decision support screen showing a ranked differential, a calculated risk score, and a safety guardrail.',
                caption: 'Decision support with a ranked differential, a calculated risk score, and a guardrail that blocks an unsafe order.',
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
        </div>
      </section>

      {/* ─────────────── EVIDENCE AND SECURITY ─────────────── */}
      <section className="border-t border-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">EVIDENCE AND SECURITY</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Safety is enforced in code, not requested from a model.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Thirteen deterministic safety checks run before a recommendation reaches the clinician.
              Validation is a structured panel of maritime scenarios, not a marketing claim. Data
              handling is documented. The full record lives on one page.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: '/evidence#safety', label: 'Safety architecture' },
              { to: '/evidence#safety-case', label: 'Safety case' },
              { to: '/evidence#regulatory', label: 'Regulatory' },
              { to: '/evidence#validation', label: 'Validation' },
              { to: '/evidence#eval-tracker', label: 'Evaluation tracker' },
              { to: '/evidence#data-flow', label: 'Data flow' },
              { to: '/evidence#security', label: 'Security' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl border border-ink-700/60 bg-ink-800/30 px-4 py-3 text-sm text-ink-50/85 transition hover:border-sea-500/40 hover:text-sea-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── WHY THIS ENGINE ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">WHY SEASCOPE</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Built by physicians who practice where it is used.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Deterministic safety, not a chatbot',
                body: 'Guardrails are enforced in code. The engine will not recommend a drug the ship does not carry, and those limits cannot be talked around.',
              },
              {
                title: 'Locked to the chest on that vessel',
                body: 'Every recommendation is constrained to the formulary and stock actually aboard. Built for thin connectivity and small crews, not a shore hospital.',
              },
              {
                title: 'One audited case, inspection-ready',
                body: 'Every encounter closes as a single timestamped record. Built for MLC and P&I scrutiny from the start.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-sea-500/30 bg-ink-800/30 p-6">
                <h3 className="font-display text-xl font-medium leading-snug text-ink-50">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{card.body}</p>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-10 max-w-3xl space-y-3">
            {[
              'Recommendations cite the guideline behind them',
              'Physicians remain the decision-makers on every case',
              'Works when the satellite drops: the PWA caches the engine locally',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-50/85">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            See it on your fleet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-900/80">
            A 30-minute call, or email{' '}
            <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openDemo('home/final')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
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
