import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

/**
 * /peme: PEME processing for fleet operators. Outcome copy only.
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
        <title>SeaScope PEME: Pre-employment exams, processed and on file.</title>
        <meta
          name="description"
          content="PEME processing for fleet operators. Clinics submit. A licensed reviewer signs off. Fitness decisions stay searchable. Priced per PEME."
        />
        <link rel="canonical" href="https://seascope.tech/peme" />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <div className="eyebrow mb-6">PEME: FOR FLEET OPERATORS</div>
              <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink-50 sm:text-6xl">
                Pre-employment exams, processed and on file<span className="accent-sea">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/80">
                Clinics submit. A licensed reviewer signs off. Fitness decisions stay searchable
                when the port-state inspector asks.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openDemo('peme/hero')} className="btn-primary">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/pricing" className="btn-secondary">
                  See pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 max-w-xl text-xs italic text-ink-50/50">
                A licensed reviewer signs every case.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-6 rounded-3xl bg-sea-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-ink-700/60 shadow-2xl shadow-ink-900/60 ring-1 ring-sea-500/20">
                <img
                  src="/images/product/screen-peme.png"
                  alt="SeaScope PEME workspace showing a fleet medical review list."
                  className="w-full object-cover"
                  loading="eager"
                  width="2720"
                  height="1622"
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
              Built for the questions you will be asked.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                title: 'Every PEME on file.',
                body: 'Expiry dates and fitness decisions in one place, ready for the inspector.',
              },
              {
                title: 'A licensed reviewer on every case.',
                body: 'A person signs off. Nothing is left as an unsigned stamp.',
              },
              {
                title: 'Ready for P&I and port state.',
                body: 'The fitness decision has a record attached, not only a certificate image.',
              },
              {
                title: 'Priced per PEME.',
                body: 'Packages follow the requirements for that client. The commercial unit is the exam.',
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-ink-700/60 bg-ink-800/30 p-6">
                <h3 className="font-display text-xl font-medium text-ink-50">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-50/70">{v.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink-50/60">
            Licensed reviewer on every case. Built for MLC and P&amp;I scrutiny.
          </p>
        </div>
      </section>

      <section className="bg-sea-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-normal leading-tight text-ink-900 sm:text-5xl">
            Put the fleet's PEMEs in one file.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-900/80">
            A 30-minute call covers fit for your operation, and pricing.
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
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
