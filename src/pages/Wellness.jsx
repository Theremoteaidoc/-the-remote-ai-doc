import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingDown, Users, FileCheck, Clock } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * /wellness — Hidden crew-wellness landing page.
 * noindex, nofollow — not in sitemap, not in nav.
 * Audience: fleet operators (Part A) + crew members (Part B).
 * Copy source: docs/superpowers/specs/wellness-copy.md (founder-approved 2026-06-01).
 */

const BENEFITS = [
  {
    icon: TrendingDown,
    title: 'Earlier visibility of risk',
    body: 'The care team sees the trend before it becomes a clinical event — not after the exam reveals a problem.',
  },
  {
    icon: Users,
    title: 'Crew kept fit and working',
    body: 'Conditions caught and managed early are less likely to cause a mid-voyage evacuation or a failed medical that sidelines a crew member.',
  },
  {
    icon: FileCheck,
    title: 'Supports your duty of care under MLC',
    body: 'Continuous monitoring gives you documented evidence of your health-oversight programme between mandatory exams.',
  },
  {
    icon: Clock,
    title: 'Fewer surprises at the next PEME',
    body: 'When exam day arrives, the clinical record already holds months of readings. There is no ambiguity about what changed and when.',
  },
];

export default function Wellness() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="wellness" />

      <Helmet>
        <title>SeaScope Crew Wellness — Between-Exam Monitoring for Seafarers</title>
        <meta
          name="description"
          content="SeaScope Crew Wellness gives shore-side care teams continuous visibility into crew health between periodic medical exams, helping catch the silent progression of hypertension, diabetes, and high cholesterol before they become fit-for-duty failures."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* Left: copy */}
            <div>
              <div className="eyebrow mb-6">SEASCOPE CREW WELLNESS — FOR FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                The health risk that doesn't show up at the exam<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Chronic conditions — hypertension, type 2 diabetes, high cholesterol — develop
                silently between PEMEs. SeaScope Crew Wellness gives your care team visibility
                into that gap, so the problems that ground crews and trigger evacuations are
                caught months earlier.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="btn-primary"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="mailto:hello@seascope.tech?subject=Crew%20Wellness%20Enquiry"
                  className="btn-secondary"
                >
                  Talk to the clinical team
                </a>
              </div>
            </div>

            {/* Right: phone screenshot */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative w-56 overflow-hidden rounded-[2rem] border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20 sm:w-64">
                <img
                  src="/images/wellness/home.png"
                  alt="SeaScope Crew Wellness app home screen showing a seafarer's health dashboard with blood pressure and glucose trend summary."
                  className="w-full object-cover"
                  loading="eager"
                  width="752"
                  height="1524"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROBLEM ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">THE GAP BETWEEN EXAMS</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Most fit-for-duty failures were already developing two years ago.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-ink-50/70">
              A seafarer passes their exam, returns to sea, and spends the next 24 months with no
              systematic health monitoring. Blood pressure climbs. Glucose trends upward.
              Cholesterol drifts. None of it is visible until the next PEME — when the reading
              that was borderline is now disqualifying.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-50/70">
              The result: unfit-for-duty findings, failed medicals, and medical evacuations that
              were avoidable. The underlying condition was real. The surprise was not.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHAT IT DOES ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Continuous monitoring between exams.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-ink-50/70">
              SeaScope Crew Wellness bridges the gap between periodic medical exams. Crew
              self-log blood pressure and glucose readings through a simple phone app. Those
              readings sync directly into the SeaScope clinical record, where your shore-side
              care team sees trends over time — not just a single snapshot at exam day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-50/70">
              When a reading trends in the wrong direction, the care team can act. When it
              stays stable, there is documented evidence of that too.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── BENEFITS ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">FOR YOUR FLEET</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              What this means for your fleet.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="editorial-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sea-500/10 ring-1 ring-sea-500/20">
                    <Icon className="h-5 w-5 text-sea-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink-50">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{benefit.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── FITS YOUR PLATFORM ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">ALREADY ON SEASCOPE</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Built into the platform you may already be running.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink-50/70">
              SeaScope Crew Wellness is part of the broader SeaScope platform — the same clinical
              record, the same care team interface, the same audit trail. If your fleet is already
              using SeaScope, wellness monitoring is an extension, not a separate system. The
              programme is being piloted with fleet partners.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── BUYER CTA BAND ─────────────── */}
      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Close the gap between exams.
          </h2>
          <p className="mt-6 text-base text-ink-900/80">
            30-minute consultative call. We will walk you through the monitoring workflow,
            the care team interface, and how it fits alongside your existing SeaScope deployment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-8 py-4 text-base font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:hello@seascope.tech?subject=Crew%20Wellness%20Enquiry"
              className="text-sm text-ink-900 underline"
            >
              Or contact the clinical team directly →
            </a>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* PART B — FOR CREW MEMBERS                                       */}
      {/* ═════════════════════════════════════════════════════════════════ */}

      {/* ─────────────── CREW DIVIDER ─────────────── */}
      <section className="border-t border-ink-700/40 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full border border-sea-500/40 bg-sea-500/5 px-5 py-2 text-sm font-medium tracking-eyebrow text-sea-300 uppercase">
              For crew members
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CREW HEADLINE + APP SCREENSHOT GALLERY ─────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Your health, between exams<span className="accent-sea">.</span>
            </h2>
          </div>

          {/* App screenshots */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                src: '/images/wellness/bp.png',
                alt: 'SeaScope Crew Wellness screen for logging a blood pressure reading, showing input fields for systolic and diastolic values.',
              },
              {
                src: '/images/wellness/glucose.png',
                alt: 'SeaScope Crew Wellness glucose logging screen showing a simple form for entering a blood glucose reading with date and time.',
              },
              {
                src: '/images/wellness/sync.png',
                alt: 'SeaScope Crew Wellness data-sync screen confirming that readings have been sent to the crew member\'s clinical record.',
              },
            ].map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-[1.5rem] border border-ink-700/60 shadow-xl shadow-ink-900/40 ring-1 ring-sea-500/10"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full object-cover"
                  loading="lazy"
                  width="752"
                  height="1524"
                />
              </div>
            ))}
          </div>

          {/* Caption row */}
          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
            {['Log BP', 'Log glucose', 'See trends'].map((label) => (
              <p key={label} className="text-center text-xs uppercase tracking-eyebrow text-ink-50/50">
                {label}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CREW WHAT ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <div className="eyebrow mb-4">FOR YOU, ON YOUR PHONE</div>
              <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
                Log in under a minute. See your own trends.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-50/70">
                The SeaScope app lets you record a blood pressure or glucose reading in seconds —
                no forms, no paperwork. Your readings build a personal health baseline over time,
                so you can see how your numbers are moving. Simple health education sits alongside
                your data, explaining what your readings mean in plain language.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-50/70">
                The app is for you. It puts your own health information in your own hands.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-sea-500/8 blur-2xl" aria-hidden="true" />
              <div className="relative w-52 overflow-hidden rounded-[2rem] border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20 sm:w-60">
                <img
                  src="/images/wellness/home.png"
                  alt="SeaScope Crew Wellness app home screen showing personal health readings and trend graphs for a crew member."
                  className="w-full object-cover"
                  loading="lazy"
                  width="752"
                  height="1524"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CREW PRIVACY ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">YOUR DATA</div>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
              Your data. Your choice.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink-50/70">
              You choose whether your readings are shared with the ship's care team. Nothing
              leaves your record without your knowledge. SeaScope Crew Wellness is a
              self-tracking and health-education tool — it does not diagnose conditions,
              prescribe treatment, or replace a medical exam or a doctor's assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── CREW INSTALL / COMING SOON ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="inline-block rounded-md bg-sea-500/10 px-3 py-1 text-xs font-medium uppercase tracking-eyebrow text-sea-300 ring-1 ring-sea-500/20">
            Coming soon
          </div>
          <h2 className="mt-6 font-display text-3xl font-normal leading-tight text-ink-50 sm:text-4xl">
            Coming soon.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-50/70">
            The app is in development. When it is ready for your fleet, your company will
            share a link to install it — no app store search required.
          </p>
        </div>
      </section>
    </>
  );
}
