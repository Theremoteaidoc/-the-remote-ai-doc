import { Helmet } from 'react-helmet-async';
import CountUp from '../components/CountUp';

/**
 * /press — Media kit page.
 * Copy from /root/marketing/copy/press-v1.md.
 * Pulls verified canonical founder pitch + 78yo killer case from brand-voice skill.
 */
export default function Press() {
  return (
    <>
      <Helmet>
        <title>Press & Media — SeaScope / RemoteAid Medical Solutions</title>
        <meta name="description" content="Resources for journalists writing about SeaScope CDS, SeaScope Cargo Solutions, and RemoteAid Medical Solutions. Founder pitch, real-patient case study, brand assets." />
        <link rel="canonical" href="https://seascope.tech/press" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">PRESS & MEDIA</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Resources for journalists<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            Everything you need to write about RemoteAid Medical Solutions, SeaScope CDS, and
            SeaScope Cargo Solutions — a copyable founder pitch, a real-patient case study, and
            downloadable brand assets.
          </p>
        </div>
      </section>

      {/* FOUNDER PITCH */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="eyebrow mb-4">THE FOUNDER PITCH (COPYABLE)</div>
          <blockquote className="rounded-2xl border border-ink-700 bg-ink-800/40 p-8 font-display text-xl italic leading-relaxed text-ink-50">
            "I'm a ship physician who practices medicine 1,000 miles from shore — no specialists,
            no imaging, no backup. Two weeks ago I used a clinical AI tool I built on a real
            patient at sea: 78-year-old, climbing troponin, failing kidneys. It stopped three
            medications that would have caused harm and recommended evacuation. The tool is
            pre-seed, live, and I think it's a different story than the clinical AI you usually
            cover — would you want it as an exclusive before I go wider?"
          </blockquote>
          <p className="mt-4 text-sm text-ink-50/60">
            — Dr. Javier Rosas, MD · Founder & CEO, RemoteAid Medical Solutions
          </p>
        </div>
      </section>

      {/* PROOF POINT */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-4">REAL CASE — ANONYMIZED</div>
          <p className="text-lg leading-relaxed text-ink-50/85">
            A 78-year-old male presented with rising troponin and acute kidney injury aboard a
            cruise vessel in international waters. SeaScope CDS produced a structured treatment
            plan in <strong className="text-sea-300">49 seconds</strong> at a query cost of{' '}
            <strong className="text-sea-300">$0.06</strong>, executing{' '}
            <strong className="text-sea-300">7 retrieval and verification tools</strong> against the
            ship's actual formulary. The recommendation{' '}
            <strong className="text-sea-300">stopped three medications</strong> that would have
            interacted dangerously with the patient's renal status, and triggered a structured
            medical evacuation handoff. The patient was transferred stable via boat-to-boat transfer.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: 49, suffix: 's', label: 'Time to treatment plan' },
              { value: 7,  suffix: '',  label: 'Tools executed' },
              { value: 3,  suffix: '',  label: 'Medications stopped' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-medium text-sea-300 tabular-nums">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs text-ink-50/60">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-50/40">
            Case details published with patient consent. Available for press use with attribution
            to Dr. Javier Rosas, RemoteAid Medical Solutions.
          </p>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-4">FOUNDER</div>
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-ink-700 bg-ink-800">
              <img src="/profile.jpg" alt="Dr. Javier Rosas" className="h-full w-full object-cover" />
            </div>
            <div className="text-base leading-relaxed text-ink-50/75">
              <h3 className="mb-4 font-display text-2xl text-ink-50">Short bio (~50 words)</h3>
              <p>
                Dr. Javier Rosas, MD is a Senior Ship Physician at Royal Caribbean International,
                Founder & CEO of RemoteAid Medical Solutions, Chair of the AI Committee at the
                American Board of Maritime Medicine, and author of <em>AI Literacy for Clinicians</em> (2026).
                He practices emergency medicine 1,000+ miles from the nearest hospital and trains
                AI systems for four leading AI companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-ink-700/40 bg-sea-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-normal text-ink-900 sm:text-4xl">
            Press contact
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:hello@seascope.tech?subject=Press%20Inquiry"
              className="rounded-2xl bg-ink-900 p-6 text-left text-ink-50 transition hover:bg-ink-800"
            >
              <div className="text-xs uppercase tracking-eyebrow opacity-60">All press</div>
              <div className="mt-1 font-display text-lg">hello@seascope.tech</div>
              <p className="mt-2 text-xs opacity-70">Response within 24 hours.</p>
            </a>
            <a
              href="mailto:javier@theremoteaidoc.com?subject=Press%20-%20Direct"
              className="rounded-2xl border-2 border-ink-900 p-6 text-left text-ink-900 transition hover:bg-ink-900/10"
            >
              <div className="text-xs uppercase tracking-eyebrow opacity-60">Founder direct</div>
              <div className="mt-1 font-display text-lg">javier@theremoteaidoc.com</div>
              <p className="mt-2 text-xs opacity-70">Direct to Javier. Signal/WhatsApp on request.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
