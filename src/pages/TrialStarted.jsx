/**
 * TrialStarted: post-Stripe-checkout success page at /trial-started.
 *
 * Configured as the payment link's after_completion.redirect.url, so
 * Stripe sends customers here immediately after completing checkout.
 * The live welcome email arrives within ~30s; this page tells the user
 * what's happening in that gap and what to do when the email lands.
 *
 * Follows the same brand tokens as Pricing.jsx / SeaScopeCDS.jsx , 
 * ink-* / sea-* palette, editorial-card, btn-primary, eyebrow.
 */

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle, Inbox, KeyRound, Clock, Mail, ShieldCheck,
  ArrowRight, ExternalLink,
} from 'lucide-react';

const APP_URL = 'https://app.seascope.tech';
const SUPPORT_EMAIL = 'hello@seascope.tech';

export default function TrialStarted() {
  return (
    <>
      <Helmet>
        <title>Your trial is active: SeaScope CDS</title>
        <meta name="description" content="Your SeaScope CDS 14-day free trial is active. Check your email for sign-in credentials." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://seascope.tech/trial-started" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 pt-32 pb-12 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sea-500/15 ring-1 ring-sea-500/40">
            <CheckCircle className="h-8 w-8 text-sea-300" strokeWidth={2} />
          </div>
          <div className="eyebrow mb-3">Trial · 14 days</div>
          <h1 className="font-display text-5xl font-normal leading-tight text-ink-50 sm:text-6xl">
            Your trial is active<span className="accent-sea">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink-50/70">
            Welcome to SeaScope CDS. You have <strong className="text-ink-50">14 days</strong> of full access: no charge until day 15, cancel any time.
          </p>
        </div>
      </section>

      {/* INBOX CALLOUT */}
      <section className="pb-10 pt-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="editorial-card border-sea-500/40">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sea-500/15">
                <Inbox className="h-5 w-5 text-sea-300" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-2xl font-medium text-ink-50">
                  Check your email in the next 2 minutes
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-50/70">
                  We've just sent your login link and a temporary password to the email you used at checkout. On first sign-in you'll be asked to set a new password.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-ink-50/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    Usually arrives within 30 seconds
                  </span>
                  <span className="text-ink-50/20">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" />
                    Check spam if not in inbox
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-ink-50/10 pt-5">
              <p className="mb-3 flex items-start gap-2 text-sm text-ink-50/70">
                <KeyRound className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-50/40" />
                <span>Already have the email? Go straight to sign-in:</span>
              </p>
              <a href={`${APP_URL}/login`} className="btn-primary inline-flex items-center gap-2">
                <span>Sign in to SeaScope CDS</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST 5 MINUTES */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="editorial-card">
            <div className="eyebrow mb-5">Your first 5 minutes</div>
            <ol className="space-y-5">
              <Step n={1} title="Sign in & set your password">
                Takes 30 seconds. The temp password from the email works once, then you pick something memorable.
              </Step>
              <Step n={2} title="Locate your ship or site">
                Set lat/lon or pick a home port/clinic. This turns on nearest-hospital lookup, helicopter feasibility, sea state, and port-diversion logic.
              </Step>
              <Step n={3} title="Fill the patient intake form">
                Age, sex, weight, vitals, chief complaint. Optimized for fast capture under pressure. Skip what you don't have. SeaScope flags what's missing.
              </Step>
              <Step n={4} title="Review the recommendation">
                Severity, medications with formulary check, monitoring plan, escalation triggers. Every output is audited. Drill into the reasoning any time.
              </Step>
            </ol>
          </div>
        </div>
      </section>

      {/* PRIVACY: strong visual priority */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border-l-4 border-red-500 bg-red-500/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" strokeWidth={2} />
              <div>
                <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-red-300">
                  Important · Privacy
                </div>
                <p className="text-sm leading-relaxed text-red-100">
                  <strong className="text-red-50">Never enter patient-identifying information</strong>: names, date of birth, passport or ID numbers, medical record numbers. SeaScope CDS is a clinical decision-support tool, not a patient record. Use de-identified clinical descriptions only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILLING */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-500/10 p-5">
            <p className="text-sm leading-relaxed text-amber-100">
              <strong className="text-amber-50">Cancel any time in the first 14 days and you won't be charged.</strong> After day 14, your card on file is billed <strong>$29.99/month</strong>. Manage your subscription from the billing page inside the app.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-2 text-sm text-ink-50/60">
            Questions, bugs, or feature requests?
          </p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-sea-300 hover:text-sea-200">
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-2 text-xs text-ink-50/40">
            Dr. Javier (founder) reads everything in the first week.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs text-ink-50/40">
            <Link to="/seascope-cds" className="hover:text-sea-300">About SeaScope CDS</Link>
            <span className="text-ink-50/20">·</span>
            <Link to="/pricing" className="hover:text-sea-300">Pricing</Link>
            <span className="text-ink-50/20">·</span>
            <Link to="/" className="hover:text-sea-300">Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, title, children }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sea-500/15 font-mono text-sm font-bold text-sea-300 ring-1 ring-sea-500/30">
        {n}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="mb-1 font-medium text-ink-50">{title}</div>
        <div className="text-sm leading-relaxed text-ink-50/70">{children}</div>
      </div>
    </li>
  );
}
