import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import BookDemoModal from '../components/BookDemoModal';

const STRIPE_CDS_CHECKOUT = 'https://buy.stripe.com/5kQ00i6YjgeH7Zt9lN2ZO00';

/**
 * /pricing: side-by-side. Asymmetric pricing display.
 * Copy from /root/marketing/copy/pricing-v1.md.
 * GATED per IA amendment 2: Cargo column never shows physician-seat / volume tiers / evaluation rate.
 */
export default function Pricing() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="pricing" />
      <Helmet>
        <title>Pricing: SeaScope CDS & SeaScope Cargo Solutions</title>
        <meta
          name="description"
          content="SeaScope CDS for individual physicians: $29.99/month. SeaScope Cargo Solutions for fleet operators: quoted per fleet on a 30-minute call. Two products, one engine, asymmetric pricing."
        />
        <link rel="canonical" href="https://seascope.tech/pricing" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="eyebrow mb-4">PRICING</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl">
            Two products. One engine. Pick what fits<span className="accent-sea">.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-ink-50/70">
            SeaScope CDS is sold direct to physicians as a personal subscription. SeaScope Cargo
            Solutions is sold to fleet operators with consultative pricing tuned to fleet size and
            integration scope.
          </p>
        </div>
      </section>

      {/* SIDE-BY-SIDE */}
      <section className="pb-24 pt-16 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          {/* SeaScope CDS: exact, public */}
          <div className="editorial-card border-sea-500/40">
            <div className="eyebrow mb-3">FOR PHYSICIANS</div>
            <h2 className="font-display text-3xl font-medium text-ink-50">SeaScope CDS</h2>
            <div className="mt-6 font-display text-5xl font-medium text-sea-300">$29.99</div>
            <div className="text-sm text-ink-50/60">per month · cancel anytime</div>
            <div className="mt-2 inline-block rounded-md bg-sea-500/10 px-2 py-0.5 text-xs text-sea-300">
              14-day free trial · credit card required · $0 charged for 14 days
            </div>

            <p className="mt-6 text-xs italic text-ink-50/50">
              Physician-gated clinical decision support. SeaScope drafts, structures, and documents recommendations for clinician review; it does not diagnose, prescribe, or replace professional judgment.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                'Full agentic clinical reasoning engine',
                'All 5 environments (cruise, expedition, FOB, 2× rural)',
                '13 deterministic safety guardrails',
                'Live evidence retrieval (PubMed, OpenFDA, RxNorm, ClinicalTrials.gov)',
                'Offline PWA: works satellite-down',
                'Audit trail retention configurable; default 7 years where customer agreement requires',
                'PDF export for every encounter',
                'Cancel anytime, no annual commitment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-50/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={STRIPE_CDS_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 w-full"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* SeaScope Cargo Solutions: gated, consultative */}
          <div className="editorial-card border-sea-500/40">
            <div className="eyebrow mb-3">FOR FLEET OPERATORS</div>
            <h2 className="font-display text-3xl font-medium text-ink-50">SeaScope Cargo Solutions</h2>
            <div className="mt-6 font-display text-5xl font-medium text-sea-300">
              Quoted per fleet
            </div>
            <div className="text-sm text-ink-50/60">consultative call · pricing shared on request</div>
            <div className="mt-2 inline-block rounded-md border border-sea-500/40 px-2 py-0.5 text-xs text-sea-300">
              Volume + seat pricing on call · 30-day evaluation available
            </div>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                'SeaScope Officer Mode, bridge-computer triage app',
                'SeaScope Hub, shore physician dashboard with case queue',
                'AI-drafted recommendations constrained to your vessel formularies',
                'MLC 2026 documentation, auto-generated structured PDF designed to support maritime medical recordkeeping and inspection workflows',
                'Fleet-wide map and analytics dashboard',
                'Per-tenant white-label theming',
                'Integration support, PEME data, chest inventory, evacuation handoff',
                '24/7 platform support · onboarding training · ongoing clinical updates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-50/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button type="button" onClick={() => setDemoOpen(true)} className="btn-secondary mt-10 w-full">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-t border-ink-700/40 bg-ink-800/20 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-normal text-ink-50 sm:text-4xl">
            How they compare
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink-700">
            <table className="w-full text-sm">
              <thead className="bg-ink-800">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-ink-50/60"> </th>
                  <th className="px-6 py-4 text-left font-medium text-ink-50">SeaScope CDS</th>
                  <th className="px-6 py-4 text-left font-medium text-ink-50">SeaScope Cargo Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-700/60">
                {[
                  ['Audience', 'Individual physicians', 'Fleet operators'],
                  ['Pricing', '$29.99 / month', 'Quoted per fleet · shared on call'],
                  ['Trial', '14-day free trial · credit card required · cancel anytime', '30-day evaluation · terms shared on call'],
                  ['Sales motion', 'Self-serve · sign up online', 'Consultative · book a demo'],
                  ['Onboarding', 'Instant, log into the app', '1–2 weeks per fleet'],
                  ['Sample use case', 'Ship physician at 2 AM with no specialist backup', 'Fleet operator with shore-based physicians'],
                ].map(([label, cds, cargo]) => (
                  <tr key={label} className="bg-ink-900/40">
                    <td className="px-6 py-4 text-ink-50/60">{label}</td>
                    <td className="px-6 py-4 text-ink-50/85">{cds}</td>
                    <td className="px-6 py-4 text-ink-50/85">{cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <div className="eyebrow mb-4">PRICING QUESTIONS</div>
            <h2 className="font-display text-3xl font-normal text-ink-50 sm:text-4xl">
              Honest answers to the questions every buyer asks.
            </h2>
          </div>
          <dl className="mt-12 space-y-6">
            {[
              {
                q: "Why isn't Cargo Solutions pricing fully public?",
                a: "Cargo deployments vary by fleet size, vessel type, and integration scope. We share the full pricing structure, including volume discounts and evaluation terms, in a 30-minute consultative call so we can match the commercial structure to your operation. We don't gate the conversation behind a sales cycle.",
              },
              {
                q: 'Can I cancel SeaScope CDS anytime?',
                a: 'Yes. Monthly subscription, no annual commitment, no cancellation fee. If you cancel mid-month, you keep access through the end of the billing period.',
              },
              {
                q: 'What currency are prices in?',
                a: 'USD. International billing supported.',
              },
              {
                q: 'Custom enterprise (Cargo Solutions, 700+ vessels)?',
                a: 'Yes. Fleets above 700 vessels move into a custom commercial structure with strategic-tier terms. Contact us at hello@seascope.tech to start the conversation.',
              },
              {
                q: 'Do you offer educational, non-profit, or humanitarian pricing?',
                a: 'Yes, for SeaScope CDS direct-to-MD, we offer free or reduced-cost access for clinicians working with humanitarian organizations (MSF, Red Cross, faith-based mission medicine). Email hello@seascope.tech with proof of affiliation.',
              },
            ].map((item) => (
              <div key={item.q} className="editorial-card">
                <dt className="font-display text-lg font-medium text-ink-50">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-50/75">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-sea-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-normal text-ink-900 sm:text-4xl">
            Pick the deployment that fits how you work.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/seascope-cds"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition hover:bg-ink-800"
            >
              Start Free, Solo physician
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-900/10"
            >
              Book a Demo, Fleet operator
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-6 text-sm text-ink-900/70">
            Not sure which fits? Email{' '}
            <a href="mailto:hello@seascope.tech" className="underline">hello@seascope.tech</a>, we'll route you in one reply.
          </p>
        </div>
      </section>
    </>
  );
}
