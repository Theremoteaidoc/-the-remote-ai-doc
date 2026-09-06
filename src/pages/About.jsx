import { Helmet } from 'react-helmet-async';

/**
 * /about: Company + founder. Third-person institutional voice.
 * Copy from /root/marketing/copy/about-v1.md.
 * EIN removed per IA amendment 3.
 */
export default function About() {
  return (
    <>
      <Helmet>
        <title>About RemoteAid Medical Solutions</title>
        <meta name="description" content="RemoteAid Medical Solutions builds clinical reasoning infrastructure for medicine practiced at the edge. Delaware C-Corporation founded 2026, headquartered in Miami, FL." />
        <link rel="canonical" href="https://seascope.tech/about" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">ABOUT REMOTEAID MEDICAL SOLUTIONS</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Building clinical infrastructure for medicine practiced at the edge<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            RemoteAid Medical Solutions is a Delaware C-Corporation building clinical reasoning
            infrastructure for the places medicine wasn't built for, ships, expeditions, military
            forward bases, and remote clinics. Our flagship product, SeaScope CDS, is the trademark
            engine that powers our growing family of operator solutions.
          </p>
        </div>
      </section>

      {/* COMPANY FACTS */}
      <section className="border-y border-ink-700/40 bg-ink-800/20 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3 lg:px-8">
          {[
            { label: 'Founded', value: '2026' },
            { label: 'Structure', value: 'Delaware C-Corp' },
            { label: 'Headquarters', value: 'Miami, FL' },
          ].map((fact) => (
            <div key={fact.label}>
              <div className="eyebrow mb-2">{fact.label}</div>
              <div className="font-display text-2xl text-ink-50">{fact.value}</div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-md px-6 text-center text-xs text-ink-50/40">
          EIN available on request via <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="eyebrow mb-4">WHY WE BUILD</div>
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
            Most clinical AI assumes hospital-grade resources.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-50/75">
            <p>
              RemoteAid Medical Solutions inverts that assumption. We treat limited formularies,
              absent specialists, and degraded connectivity as first-class design constraints
              rather than edge cases to be patched later. The result is clinical AI that works where it
              matters most: at 2 AM, miles from any hospital, with the chest you have and the
              connectivity you can rely on.
            </p>
            <p>
              Our approach is bifurcated by design. Deterministic safety guardrails, formulary
              verification, allergy cross-checks, dose ceilings, drug-interaction screens, run as
              rule-based code, never as AI judgment. The agentic reasoning layer drafts the
              recommendation; the deterministic layer ensures it's safe to surface. Together they
              meet the clinical bar that the FDA §520(o)(1)(E) Clinical Decision Support exemption
              was designed to enable.
            </p>
            <p>
              We build for the doctors and crews who have been waiting a long time for technology
              that understands their reality.
            </p>
          </div>
          <p className="mt-12 border-l-2 border-sea-500 pl-6 font-display text-2xl italic text-sea-300">
            Clinical care for places medicine wasn't built for.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">FOUNDER & CEO</div>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-ink-700 bg-ink-800">
              <img
                src="/profile.jpg"
                alt="Dr. Javier Rosas, MD"
                className="h-full w-full object-cover"
                width="597"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-normal text-ink-50">Dr. Javier Rosas, MD</h2>
              <p className="mt-2 italic text-ink-50/60">Founder & CEO, RemoteAid Medical Solutions</p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-50/75">
                <p>
                  Dr. Javier Rosas is a Senior Ship Physician with a major cruise line, practising
                  at sea, where he practices emergency medicine on ships managing populations of up
                  to 6,000 passengers and crew. His clinical practice routinely takes place 1,000+
                  miles from the nearest hospital, with formularies of fewer than 200 medications
                  and no on-call specialist backup.
                </p>
                <p>
                  In parallel with his clinical work, Dr. Rosas serves as Chair of the AI Committee
                  at the American Board of Maritime Medicine (ABMM), the field's first governance
                  body for clinical AI in maritime contexts. He is the author of <em>AI Literacy
                  for Clinicians</em> (2026), a practical guide for physicians evaluating AI tools
                  for clinical use, drawn from his original head-to-head evaluation of six clinical
                  and general AI platforms using FDA prescribing rubrics.
                </p>
                <p>
                  Dr. Rosas trains and evaluates AI systems for four leading AI companies, work
                  that gives RemoteAid Medical Solutions an unusually direct line into the
                  strengths and failure modes of frontier AI as it applies to clinical
                  decision-making.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-sea-500 pl-6 font-display text-xl italic text-sea-300">
                "The question isn't whether AI will change medicine. It's whether we'll know when it's wrong."
              </blockquote>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a href="https://theremoteaidoc.com" className="text-sea-300 underline">
                  theremoteaidoc.com
                </a>
                <span className="text-ink-50/30">·</span>
                <a
                  href="https://www.linkedin.com/in/javier-rosas-remote-ai-doc/"
                  className="text-sea-300 underline"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-6 text-xs italic text-ink-50/40">
                Institutional affiliations are listed for identification only; no employer or professional organization has endorsed SeaScope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="eyebrow mb-4">GET IN TOUCH</div>
          <h2 className="font-display text-3xl font-normal text-ink-50 sm:text-4xl">
            One inbox. One founder reads it.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="editorial-card">
              <div className="eyebrow mb-2">General</div>
              <a href="mailto:hello@seascope.tech" className="font-display text-lg text-sea-300 underline">
                hello@seascope.tech
              </a>
              <p className="mt-2 text-xs text-ink-50/60">Questions, partnerships, press, investors.</p>
            </div>
            <div className="editorial-card">
              <div className="eyebrow mb-2">Founder direct</div>
              <a href="mailto:javier@theremoteaidoc.com" className="font-display text-lg text-sea-300 underline">
                javier@theremoteaidoc.com
              </a>
              <p className="mt-2 text-xs text-ink-50/60">Javier reads everything addressed to him personally.</p>
            </div>
          </div>
          <p className="mt-12 text-xs uppercase tracking-eyebrow text-ink-50/40">
            RemoteAid Medical Solutions, Corp. · Delaware C-Corporation · Miami, Florida, USA
          </p>
        </div>
      </section>
    </>
  );
}
