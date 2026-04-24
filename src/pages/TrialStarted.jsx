/**
 * TrialStarted — post-Stripe-checkout success page.
 *
 * Route: /trial-started
 * Configured as the payment link's after_completion.redirect.url, so
 * Stripe sends customers here immediately after completing checkout.
 *
 * Goal: in the 30–120 seconds before the welcome email arrives, tell
 * the user exactly what's happening + what to do, without leaving
 * them on Stripe's generic "Thanks!" page wondering if anything
 * worked.
 *
 * Public route — no auth required (user is not yet logged in).
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  CheckCircle, Mail, Clock, ShieldCheck, ArrowRight, ExternalLink,
  Inbox, KeyRound,
} from 'lucide-react';

const APP_URL = 'https://app.seascope.tech';
const SUPPORT_EMAIL = 'hello@seascope.tech';

export default function TrialStarted() {
  return (
    <>
      <Helmet>
        <title>Your trial is active — SeaScope CDS</title>
        <meta name="description" content="Your SeaScope CDS 14-day free trial is active. Check your email for sign-in credentials." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* ── Top brand strip ── */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-slate-900 no-underline">
              <span className="text-xl font-bold tracking-tight">Remote AiD</span>
              <span className="text-xs font-medium text-slate-500">Medical</span>
            </Link>
            <Link
              to="/seascope"
              className="text-sm text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-1"
            >
              <span>About SeaScope CDS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-teal-100">
              <CheckCircle className="w-9 h-9 text-teal-600" strokeWidth={2} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Your trial is active.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Welcome to SeaScope CDS. You have <strong className="text-slate-900">14 days</strong> of full access — no charge until day 15, cancel any time.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Next step callout ── */}
        <section className="max-w-3xl mx-auto px-6 pb-8">
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center">
                    <Inbox className="w-5 h-5 text-teal-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      Check your email in the next 2 minutes
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      We've just sent your login link and a temporary password to the email you used at checkout. On first sign-in you'll be asked to set a new password.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        Usually arrives within 30 seconds
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="inline-flex items-center gap-1.5 text-slate-500">
                        <Mail className="w-3.5 h-3.5" />
                        Check spam if not in inbox
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 px-6 lg:px-8 py-4 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3 flex items-start gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Already have the email? Go straight to sign-in:
                  </span>
                </p>
                <a
                  href={`${APP_URL}/login`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                >
                  <span>Sign in to SeaScope CDS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── First 5 minutes ── */}
        <section className="max-w-3xl mx-auto px-6 pb-8">
          <ScrollReveal delay={400}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-8">
              <div className="text-xs font-bold tracking-[0.08em] uppercase text-teal-600 mb-5">
                Your first 5 minutes
              </div>
              <ol className="space-y-5">
                <Step n={1} title="Sign in & set your password">
                  Takes 30 seconds. The temp password from the email works once, then you pick something memorable.
                </Step>
                <Step n={2} title="Locate your ship or site">
                  Set lat/lon or pick a home port/clinic. This turns on nearest-hospital lookup, helicopter feasibility, sea state, and port-diversion logic.
                </Step>
                <Step n={3} title="Fill the patient intake form">
                  Age, sex, weight, vitals, chief complaint. Optimized for fast capture under pressure. Skip what you don't have — SeaScope flags what's missing.
                </Step>
                <Step n={4} title="Review the recommendation">
                  Severity, medications with formulary check, monitoring plan, escalation triggers. Every output is audited — drill into the reasoning any time.
                </Step>
              </ol>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Privacy band ── */}
        <section className="max-w-3xl mx-auto px-6 pb-8">
          <ScrollReveal delay={500}>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="text-xs font-bold tracking-[0.04em] uppercase text-red-800 mb-1.5">
                    Important · Privacy
                  </div>
                  <p className="text-sm text-red-900 leading-relaxed">
                    <strong>Never enter patient-identifying information</strong> — names, date of birth, passport or ID numbers, medical record numbers. SeaScope CDS is a clinical decision-support tool, not a patient record. Use de-identified clinical descriptions only.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Billing band ── */}
        <section className="max-w-3xl mx-auto px-6 pb-8">
          <ScrollReveal delay={600}>
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Cancel any time in the first 14 days and you won't be charged.</strong> After day 14, your card on file is billed <strong>$29.99/month</strong>. Manage your subscription from the billing page inside the app.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Support + footer ── */}
        <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <ScrollReveal delay={700}>
            <p className="text-sm text-slate-600 mb-2">
              Questions, bugs, or feature requests?
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Dr. Javier (founder) reads everything in the first week.
            </p>
          </ScrollReveal>
        </section>

        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-500">
            <p className="mb-1">
              <strong className="text-slate-700">SeaScope CDS</strong> — a product of Remote AiD Medical, Corp.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs">
              <a href="https://seascope.tech" className="text-teal-600 hover:text-teal-700">seascope.tech</a>
              <span className="text-slate-300">·</span>
              <Link to="/seascope" className="text-teal-600 hover:text-teal-700">About SeaScope CDS</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function Step({ n, title, children }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center font-mono">
        {n}
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="font-semibold text-slate-900 mb-1">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
