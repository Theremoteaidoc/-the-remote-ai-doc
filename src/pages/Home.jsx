import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';
import HeaderVideo from '../components/HeaderVideo';
import IntroVideo from '../components/IntroVideo';

const PRODUCTS = [
  {
    eyebrow: 'PEME',
    title: 'PEME Processing',
    body: "Complete, consistent medicals checked against each client's requirements before a seafarer travels.",
    to: '/peme',
    image: '/rebuild/images/peme-exam.webp',
    alt: 'A seafarer during a pre-employment medical examination.',
  },
  {
    eyebrow: 'Telemedicine',
    title: 'Telemedicine & Televideo',
    body: "Officers reach a nurse or physician in minutes, with video, and an SOS line to the operator's own 24/7 desk.",
    to: '/seascope-cds',
    image: '/rebuild/images/bridge-officer.webp',
    alt: "A ship's officer on the bridge with a tablet.",
  },
  {
    eyebrow: 'Crew Wellness',
    title: 'Crew Wellness',
    body: 'Seafarers log readings from their phone, clinicians see trends and alerts to maintain health across contracts.',
    to: '/wellness',
    image: '/rebuild/images/crew-reading.webp',
    alt: 'A seafarer logging a health reading on a phone.',
  },
];

const SECTORS = [
  {
    title: 'Commercial and cargo fleets',
    body: 'Container, bulk, tanker and general cargo operators with crews far from a clinic.',
  },
  {
    title: 'Cruise and passenger',
    body: 'Ships with a medical team on board that needs structured cases and shore support.',
  },
  {
    title: 'Offshore',
    body: 'Rigs, supply and service vessels where every evacuation is a project.',
  },
  {
    title: 'Crew managers and PEME clinics',
    body: 'Consistent pre-employment medicals for the seafarers you place.',
  },
];

const POSTURE = [
  'Physician oversight on every clinical output',
  'The clinician always decides',
  'MLC 2006 aligned',
  'GDPR, HIPAA-aligned practices',
  'Data held in the EU/UK',
  'Encrypted in transit and at rest with audited access and tenant isolation',
];

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="home/hero" />
      <Helmet>
        <title>SeaScope | Clinical services for fleet operators</title>
        <meta
          name="description"
          content="Medical decisions at sea, made with physicians ashore. Telemedicine, PEME processing, and crew wellness for fleet operators."
        />
        <link rel="canonical" href="https://seascope.tech/" />
        <link rel="preload" as="image" href="/rebuild/images/ship-aerial.webp" fetchPriority="high" />
      </Helmet>

      <header className="relative min-h-[640px] overflow-hidden py-24 lg:py-32">
        <HeaderVideo />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.93) 42%, rgba(255,255,255,.40) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
        <div className="container-wide relative">
          <div className="max-w-[580px] reveal">
            <span className="label-caps mb-6 block">Clinical services for fleets</span>
            <h1 className="mb-8 text-[36px] font-medium leading-[42px] lg:text-[56px] lg:leading-[64px]">
              Medical decisions at sea, made with physicians ashore
            </h1>
            <p className="mb-10 max-w-[500px] text-[17px] leading-7 text-ink-2 lg:text-[18px] lg:leading-[30px]">
              Our platform provides fleet operators with structured clinical governance,
              connecting vessels to verified medical expertise in minutes.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button type="button" onClick={() => setDemoOpen(true)} className="btn-primary">
                Book a demo
              </button>
              <a href="#products" className="btn-secondary">
                Our services
              </a>
              <a href="#introduction" className="inline-flex items-center font-medium text-teal-strong hover:underline">
                Watch the introduction (30 s)
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white pb-16 pt-0 lg:pb-24">
        <div className="container-wide border-t border-line pt-16 lg:pt-24">
          <h2 className="reveal mx-auto max-w-[900px] text-center text-[28px] font-medium leading-9 lg:text-[36px] lg:leading-[44px]">
            One platform for the three medical moments of a seafarer's contract: the pre-employment medical, the case at sea, the health between.
          </h2>
        </div>
      </section>

      <section id="products" className="bg-bg-alt py-16 lg:py-24">
        <div className="container-wide">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {PRODUCTS.map((card) => (
              <article
                key={card.eyebrow}
                className="group overflow-hidden rounded-card border border-line bg-white transition-shadow duration-150 ease-out hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-teal-tint">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="p-8">
                  <span className="label-caps mb-3 block text-[11px]">{card.eyebrow}</span>
                  <h3 className="mb-4 text-2xl font-medium">{card.title}</h3>
                  <p className="mb-6 text-[17px] leading-[26px] text-ink-2">{card.body}</p>
                  <Link to={card.to} className="text-link font-medium">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-[15px] text-ink-2">
            Also available:{' '}
            <Link to="/seascope-cds" className="text-link">
              Clinical Decision Support for individual physicians
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="sectors" className="bg-white py-16 lg:py-24">
        <div className="container-wide">
          <p className="label-caps mb-3">Sectors we serve</p>
          <h2 className="mb-10 text-[28px] font-medium leading-9 lg:text-[36px] lg:leading-[44px]">
            Built for the fleets that carry the world
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {SECTORS.map((sector) => (
              <div key={sector.title}>
                <h3 className="mb-2 text-[20px] font-medium">{sector.title}</h3>
                <p className="text-ink-2">{sector.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-24">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-[28px] font-medium leading-9 lg:text-[36px] lg:leading-[44px]">
              Fewer errors, less time, a documented duty of care
            </h2>
            <img
              src="/rebuild/images/peme-review.webp"
              alt="A physician reviewing a pre-employment medical file."
              className="mt-8 w-full rounded-card object-cover shadow-soft"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </div>
          <div className="space-y-8 text-[17px] leading-7 text-ink-2 lg:text-[18px] lg:leading-[30px]">
            <p>
              Traditional medical review processes often lead to missed certificates and unclear
              medical conditions at the gangway. Our systems ensure every requirement is met
              before deployment.
            </p>
            <p>
              In urgent situations, it can take hours to reach a doctor from a ship. We reduce
              this to minutes, providing officers with immediate clinical support via televideo
              consults.
            </p>
            <p>
              Current maritime health practices often overlook wellness between medicals. We
              provide the tools for seafarers to log health data, giving fleet operators
              visibility into the health of their crew.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt py-16 lg:py-24">
        <div className="container-wide grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {POSTURE.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
              <p className="text-[17px] font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-wide text-center">
          <blockquote className="mx-auto max-w-[800px]">
            <p className="mb-8 font-display text-[24px] italic leading-relaxed text-ink-2 lg:text-[32px]">
              "The team's care pathways read like a good colleague in the room."
            </p>
            <cite className="not-italic">
              <span className="label-caps mb-1 block">Chief Medical Officer</span>
              <span className="text-[15px] text-ink-3">Cruise operator</span>
            </cite>
          </blockquote>
        </div>
      </section>

      <section id="introduction" className="bg-bg-alt py-16 lg:py-24">
        <div className="container-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-caps mb-3">Introduction</p>
            <h2 className="mb-4 text-[28px] font-medium leading-9 lg:text-[36px] lg:leading-[44px]">
              Thirty seconds on what we do
            </h2>
            <p className="mb-6 text-ink-2">
              A ship's officer, a physician ashore, and the crew between medicals.
            </p>
            <p className="text-ink-2">
              Prefer to talk?{' '}
              <a href="mailto:hello@seascope.tech" className="text-link underline">
                hello@seascope.tech
              </a>
              , weekdays 08:00 to 18:00 UTC.
            </p>
          </div>
          <IntroVideo />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-wide">
          <div className="rounded-card bg-bg-alt px-6 py-12 text-center lg:p-16">
            <h2 className="mb-10 text-[28px] font-medium lg:text-[36px]">See it on your own vessels</h2>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <button type="button" onClick={() => setDemoOpen(true)} className="btn-primary">
                Book a demo
              </button>
              <a href="mailto:hello@seascope.tech" className="text-link font-medium">
                Talk to our physicians
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
