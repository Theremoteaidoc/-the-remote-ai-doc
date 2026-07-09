import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, FileSearch, ShieldCheck, Eye, History, ShieldAlert, HeartPulse } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * /peme — SeaScope PEME Platform pillar page.
 * Voice register: operations-credible (matches Cargo Solutions).
 * Copy approved by founder 2026-06-07 (calibration: keep all 3 stats,
 *   leave comorbidity-detection claim in, do NOT show internal disposition
 *   strings like AUTO_PASS/NEEDS_REVIEW/AUTO_REJECT).
 * Brand visuals: /images/peme/hero-brand.png (right column of hero),
 *   /images/peme/workflow-diagram.png (between PROBLEM and HOW IT WORKS).
 *   Both generated 2026-06-07 via gemini-2.5-flash-image under the
 *   brand-voice "schematic explainer" exemption.
 */
export default function Peme() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState('peme/hero');
  const openDemo = (source = 'peme/hero') => {
    setDemoSource(source);
    setDemoOpen(true);
  };

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source={demoSource} />
      <Helmet>
        <title>SeaScope PEME Platform — Pre-employment exams, structured and documented.</title>
        <meta
          name="description"
          content="SeaScope PEME Platform turns scattered clinic PDFs into a structured, auditable record. Clinics submit, the engine reads and flags, your reviewer signs off in one queue."
        />
        <link rel="canonical" href="https://seascope.tech/peme" />
      </Helmet>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* Left: copy */}
            <div>
              <div className="eyebrow mb-6">SEASCOPE PEME PLATFORM — FOR FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                Pre-employment exams, structured and documented<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Clinics submit. The engine reads, structures, and flags. Your reviewer signs off
                in one queue. Every fitness decision becomes a structured record — searchable,
                comparable, ready when the port-state inspector asks.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openDemo('peme/hero')} className="btn-primary">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="mailto:hello@seascope.tech?subject=PEME%20Platform%20Enquiry"
                  className="btn-secondary"
                >
                  Talk to the clinical team
                </a>
              </div>
              <p className="mt-4 max-w-xl text-xs italic text-ink-50/50">
                Physician-gated decision support. SeaScope proposes a fitness disposition for the reviewer's confirmation; a licensed reviewer signs every case.
              </p>
            </div>

            {/* Right: brand piece (schematic illustration, abstract — brand-voice exemption) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-6 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20">
                <img
                  src="/images/peme/hero-brand.png"
                  alt="Abstract concept illustration: a stack of structured medical-exam documents with checkmark indicators and a teal scan-glow ring, suggesting OCR capture and fitness-disposition signaling."
                  className="w-full max-w-md object-cover"
                  loading="eager"
                  width="1024"
                  height="1024"
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
            <div className="eyebrow mb-4">THE GAP IN TODAY'S PEME WORKFLOW</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Most fleets can't tell you, in one query, who has an expired PEME.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-base leading-relaxed text-ink-50/70">
              Pre-employment medical exams happen at dozens of partner clinics, in PDF reports
              that arrive by email, in no consistent format. Manning teams track expiry dates in
              spreadsheets. Medical directors review edge cases by reading the PDF. Outlier
              clinics, missing tests, comorbidities flagged on one exam but not the next — none
              of it surfaces until someone notices, usually too late.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-50/70">
              The result: crew assigned to ship with PEMEs that don't meet flag-state
              requirements, port-state inspection findings, P&amp;I disputes over fitness
              decisions, and re-evaluation that has no prior context to reference.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS (with workflow illustration) ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              From PDF in, to structured record out.
            </h2>
          </div>

          {/* Workflow illustration */}
          <div className="mx-auto mt-12 max-w-3xl">
            <img
              src="/images/peme/workflow-diagram.png"
              alt="Abstract four-stage data-flow diagram: a clinic icon on the left, a PDF document, a hexagonal engine node in the center, and a stack of queue records on the right, connected by teal arrows."
              className="mx-auto w-full max-w-xl rounded-2xl border border-ink-700/40"
              loading="lazy"
              width="1024"
              height="1024"
            />
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Clinics submit through one channel.',
                body: 'Accredited clinics upload PDFs to a tenant-scoped portal. Each clinic sees only their own queue. No more inbound email triage for your manning team.',
              },
              {
                step: '02',
                title: 'The engine reads, structures, and flags.',
                body: 'Bench-validated OCR extracts demographics, history, exam findings, labs, imaging, vaccinations, and certificates. A rules engine checks completeness against flag-state requirements, flags missing tests, surfaces comorbidities, and proposes a fitness disposition for the reviewer to confirm or override.',
              },
              {
                step: '03',
                title: 'Reviewer signs off in one queue.',
                body: "Your medical director sees the disposition, the reasoning, and the source PDF side-by-side. One click to confirm, override, or send back. Every decision is timestamped, attributed, and immutable.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-sea-500/30 bg-ink-800/40 p-6">
                <div className="font-display text-3xl font-medium text-sea-300 tabular-nums">{s.step}</div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink-50">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SEE THE ACTUAL PRODUCT ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">SEE THE ACTUAL PRODUCT</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              The reviewer queue, and the safety gate underneath it.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-50/70">
              Real product screens, demo data only. The disposition buttons your reviewer
              sees are Fit, Conditional, and Review, never an automatic permanent-unfit.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
            {[
              {
                src: '/images/product/screen-peme.png',
                width: 2720,
                height: 1622,
                alt: 'SeaScope PEME reviewer queue showing seafarers awaiting a fitness decision, with flags for elevated blood pressure, a positive IGRA test, and low-confidence audiometry, and a safety-gate notice confirming the system never issues a permanent-unfit or auto-rejects an IGRA-positive result.',
                caption: 'Every flagged exam routes to a person, not a machine. A positive IGRA is never auto-rejected. There is no code path to a permanent-unfit disposition.',
              },
              {
                src: '/images/product/screen-peme-detail.png',
                width: 2720,
                height: 1390,
                alt: 'SeaScope PEME detail view showing extracted exam results including blood pressure, vision, audiometry, BMI, IGRA, HbA1c, and ECG, next to a gating-field notice, a physician-decision-required notice, and a certificate expiry radar for the fleet.',
                caption: 'Extracted results side by side with the flag that triggered review, the disposition options, and how many fleet certificates expire in the next 30 days.',
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

      {/* ─────────────── FOR YOUR FLEET (value props) ─────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">FOR YOUR FLEET</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Built for the questions you'll be asked.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Port-state-inspection ready.',
                body: 'Every PEME on file. Every expiry date queryable. Every reviewer signoff timestamped. When the inspector arrives, the record arrives with them.',
              },
              {
                icon: FileSearch,
                title: 'P&I-aligned.',
                body: 'Enhanced-protocol compatible. Fitness decisions documented for underwriter review. The fitness disposition has reasoning attached, not just a stamp.',
              },
              {
                icon: Eye,
                title: 'Outlier-clinic visibility.',
                body: "When one clinic's pass rate diverges from peers, you see it before the inspector does. Cross-clinic comparisons live in one queue.",
              },
              {
                icon: History,
                title: 'Historical record from day one.',
                body: 'Re-evaluation has the full prior context, what was caught, what was missed, what was overridden, and by whom. No more reconstructing a paper trail months later.',
              },
              {
                icon: ShieldAlert,
                title: 'Fleet-wide expiry radar.',
                body: 'One view of every certificate expiring across the fleet in the next 30 days, so a crew change never turns into a compliance gap.',
              },
              {
                icon: HeartPulse,
                title: 'Feeds SeaScope Crew Wellness.',
                body: "A signed-off medical enrolls the seafarer into between-exam monitoring automatically, so the next PEME isn't the first time anyone looked at that trend.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-ink-700/60 bg-ink-800/30 p-6">
                <v.icon className="h-6 w-6 text-sea-300" />
                <h3 className="mt-4 font-display text-xl font-medium text-ink-50">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{v.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-center text-sm text-ink-50/60">
            Curious how the medical record and the between-exam monitoring connect?{' '}
            <Link to="/wellness" className="text-sea-300 underline">
              See SeaScope Crew Wellness
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─────────────── THE NUMBERS ─────────────── */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">THE NUMBERS</div>
            <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
              Already running, already auditable.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { figure: '554+', label: 'PEMEs processed' },
              { figure: '95%+', label: 'Bench-validated OCR accuracy' },
              { figure: '< 25s', label: 'Average extraction latency' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-medium text-sea-300 tabular-nums sm:text-5xl">
                  {s.figure}
                </div>
                <div className="mt-2 text-xs uppercase tracking-eyebrow text-ink-50/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs italic text-ink-50/40">
            Bench-validated against PEME documents. Not a clinical outcomes study.
          </p>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Stop reconciling PDF folders. Start running a PEME queue.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-900/80">
            A 30-minute call covers the workflow, the integration, and pricing. We'll walk you
            through a PEME going through the engine with redacted, demo-only data.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openDemo('peme/final')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:hello@seascope.tech?subject=PEME%20Platform%20Enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              hello@seascope.tech
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
