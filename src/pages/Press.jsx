import { Helmet } from 'react-helmet-async';

/**
 * /press: Media kit. Who we are and how to reach us. No internals.
 */
export default function Press() {
  return (
    <>
      <Helmet>
        <title>Press & Media: SeaScope / RemoteAid Medical Solutions</title>
        <meta name="description" content="Press contact for SeaScope and RemoteAid Medical Solutions. Clinical services for fleets: telemedicine, PEME processing, and crew wellness." />
        <link rel="canonical" href="https://seascope.tech/press" />
      </Helmet>

      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="eyebrow mb-4">PRESS & MEDIA</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl lg:text-7xl">
            Resources for journalists<span className="accent-sea">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-50/80">
            RemoteAid Medical Solutions provides clinical services for fleets at sea:
            telemedicine, PEME processing, and crew wellness. SeaScope is the service brand.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="eyebrow mb-4">THE FOUNDER PITCH (COPYABLE)</div>
          <blockquote className="rounded-2xl border border-ink-700 bg-ink-800/40 p-8 font-display text-xl italic leading-relaxed text-ink-50">
            "I'm a ship physician. We provide clinical services for fleets: a physician for
            the ship, PEMEs on file, and health oversight between exams. I would be glad to
            brief you under embargo."
          </blockquote>
          <p className="mt-4 text-sm text-ink-50/60">
            Dr. Javier Rosas, MD · Founder & CEO, RemoteAid Medical Solutions
          </p>
        </div>
      </section>

      <section className="border-t border-ink-700/40 bg-ink-800/20 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-4">CASE REVIEWS</div>
          <p className="text-lg leading-relaxed text-ink-50/85">
            De-identified case reviews are available to journalists under NDA after privacy
            review.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="eyebrow mb-4">FOUNDER</div>
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-ink-700 bg-ink-800">
              <img
                src="/profile.jpg"
                alt="Dr. Javier Rosas"
                className="h-full w-full object-cover"
                width="597"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-base leading-relaxed text-ink-50/75">
              <h3 className="mb-4 font-display text-2xl text-ink-50">Short bio (~50 words)</h3>
              <p>
                Dr. Javier Rosas is a maritime physician and founder of RemoteAid Medical Solutions.
                Institutional affiliations are listed for identification only; no employer or
                professional organization has endorsed SeaScope.
              </p>
            </div>
          </div>
        </div>
      </section>

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
