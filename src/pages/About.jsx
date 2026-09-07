import { Helmet } from 'react-helmet-async';

/**
 * /about: Company + founder. Third-person institutional voice.
 * Outcome copy: who we are and who we serve. No internals.
 */
export default function About() {
  return (
    <>
      <Helmet>
        <title>About RemoteAid Medical Solutions</title>
        <meta name="description" content="RemoteAid Medical Solutions provides clinical services for fleets at sea. Delaware C-Corporation founded 2026, headquartered in Miami, FL." />
        <link rel="canonical" href="https://seascope.tech/about" />
      </Helmet>

      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">ABOUT REMOTEAID MEDICAL SOLUTIONS</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Clinical services for medicine practiced at sea<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            RemoteAid Medical Solutions is a Delaware C-Corporation providing telemedicine,
            PEME processing, and crew wellness for fleet operators, and clinical decision
            support for physicians practising where shore hospitals are hours away. SeaScope
            is the service brand.
          </p>
        </div>
      </section>

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

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="eyebrow mb-4">WHY WE BUILD</div>
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-50 sm:text-5xl">
            Built by physicians who practice where it is used.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-50/75">
            <p>
              Most clinical services assume a hospital is nearby. Fleet operators and ship
              physicians work hours or days from that assumption. We provide the clinical
              services that job actually needs: a physician for the ship, PEMEs on file, and
              health oversight between exams.
            </p>
            <p>
              The clinician always decides. SeaScope does not diagnose, prescribe, or replace
              professional judgment.
            </p>
          </div>
          <p className="mt-12 border-l-2 border-sea-500 pl-6 font-display text-2xl italic text-sea-300">
            Clinical care for places medicine wasn't built for.
          </p>
        </div>
      </section>

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
                  miles from the nearest hospital, with no on-call specialist backup.
                </p>
                <p>
                  In parallel with his clinical work, Dr. Rosas serves as Chair of the AI Committee
                  at the American Board of Maritime Medicine (ABMM). He is the author of <em>AI
                  Literacy for Clinicians</em> (2026).
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
