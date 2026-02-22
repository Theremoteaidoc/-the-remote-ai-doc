import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { FileCheck, Target, Brain, Shield, TrendingUp } from 'lucide-react';

export default function SeaScopeEvidence() {
  return (
    <>
      <Helmet>
        <title>Evidence & Validation | SeaScope CDS</title>
        <meta name="description" content="100-case adversarial validation, temporal testing, and Maverick AI peer review results for SeaScope CDS." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SeaScopeNav />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <FileCheck className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Evidence & Validation</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Clinical Validation Results
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Comprehensive testing with 100-case adversarial validation, temporal testing, and Maverick AI peer review.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Validation Pipeline Status */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                100-Case Validation Pipeline
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Currently processing comprehensive case library with adversarial prompts and safety trap scenarios.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cases Complete", value: "64", total: "70", desc: "Adversarial test scenarios" },
              { title: "Safety Traps", value: "28", total: "36", desc: "Deliberately problematic cases" },
              { title: "Clinical Domains", value: "16", total: "16", desc: "Medical specialties covered" },
              { title: "Validation Rate", value: "91%", total: "100%", desc: "Current accuracy score" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {stat.value}
                    {stat.total && <span className="text-lg text-slate-400">/{stat.total}</span>}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{stat.title}</h3>
                  <p className="text-sm text-slate-600">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Methods */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Validation Methodology
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Adversarial Testing</h3>
                <p className="text-slate-600 mb-4">
                  Deliberately challenging cases designed to expose AI failure modes and safety vulnerabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Edge case scenarios</li>
                  <li>• Conflicting patient data</li>
                  <li>• Rare drug interactions</li>
                  <li>• Confabulation traps</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Maverick AI Review</h3>
                <p className="text-slate-600 mb-4">
                  Independent AI system (Opus 4.6) provides secondary review with adversarial prompts.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cross-model validation</li>
                  <li>• Disagreement analysis</li>
                  <li>• Error detection</li>
                  <li>• Bias identification</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Temporal Validation</h3>
                <p className="text-slate-600 mb-4">
                  Testing across different time periods to ensure consistency and prevent model drift.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Historical case review</li>
                  <li>• Guideline evolution tracking</li>
                  <li>• Performance monitoring</li>
                  <li>• Drift detection</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pending Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Pending Results
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete validation report will include detailed performance metrics upon pipeline completion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">When Complete, Will Include:</h3>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600">•</span>
                    <span>3-5 flagship case vignettes showing actual outputs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600">•</span>
                    <span>Latency budget breakdown by processing stage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600">•</span>
                    <span>Maverick AI disagreement rate and resolution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600">•</span>
                    <span>Safety trap performance by category</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600">•</span>
                    <span>Confabulation detection accuracy</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-teal-900 mb-4">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-teal-800">Pipeline Progress:</span>
                    <span className="font-bold text-teal-900">64/70 cases</span>
                  </div>
                  <div className="w-full bg-teal-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                  <div className="text-sm text-teal-700 mt-4">
                    <strong>ETA for completion:</strong> Subject to case complexity and safety validation requirements.
                    Results will be published in comprehensive validation report.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            SeaScope CDS Evidence & Validation • Remote AiD Medical, Corp. • February 2026
          </p>
        </div>
      </section>
    </>
  );
}