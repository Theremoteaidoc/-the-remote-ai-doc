import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { Shield, AlertTriangle, Lock, Zap, Target, Brain, Activity } from 'lucide-react';

export default function SeaScopeSafety() {
  return (
    <>
      <Helmet>
        <title>Safety Architecture | SeaScope CDS</title>
        <meta name="description" content="Seven code-enforced guardrails ensuring clinical safety in SeaScope CDS." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SeaScopeNav />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Safety Architecture</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Seven Code-Enforced Guardrails
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Every clinical recommendation passes through multiple safety layers before reaching the physician.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guardrails Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Allergy Gate", desc: "Cross-references patient allergies against all recommendations", target: ">99%" },
              { icon: Lock, title: "Formulary Lock", desc: "Restricts recommendations to available onboard medications", target: "100%" },
              { icon: Activity, title: "Lab Validator", desc: "Validates recommendations against current lab values", target: ">95%" },
              { icon: Shield, title: "BBW Enforcer", desc: "Enforces FDA black box warnings and contraindications", target: "100%" },
              { icon: Target, title: "Dosing Checker", desc: "Validates dosages against patient parameters", target: ">99%" },
              { icon: Brain, title: "Confabulation Detector", desc: "Identifies and prevents AI hallucinations in medical advice", target: ">90%" },
              { icon: Zap, title: "Interaction Screener", desc: "Screens for dangerous drug-drug interactions", target: ">99%" }
            ].map((guardrail, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <guardrail.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{guardrail.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{guardrail.desc}</p>
                  <div className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                    Target: {guardrail.target}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Safety is Architectural, Not Probabilistic
                </h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    Generic AI tools rely on probabilistic safety—hoping the AI "learns" to be safe. 
                    SeaScope CDS uses deterministic guardrails that mathematically guarantee safety checks.
                  </p>
                  <p>
                    Each guardrail operates independently, creating a defense-in-depth architecture 
                    where multiple systems must fail simultaneously for unsafe recommendations to reach physicians.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Safety Performance Targets</h3>
                <div className="space-y-4">
                  {[
                    { category: "Critical Safety Flags", target: ">99%", description: "Allergies, interactions, contraindications" },
                    { category: "Clinical Recommendations", target: ">90%", description: "Overall diagnostic and treatment accuracy" },
                    { category: "Confabulation Detection", target: ">90%", description: "Identifying AI-generated false information" },
                    { category: "Formulary Compliance", target: "100%", description: "Only recommending available medications" }
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-slate-900">{metric.category}</div>
                        <div className="text-sm text-slate-600">{metric.description}</div>
                      </div>
                      <div className="text-lg font-bold text-teal-600">{metric.target}</div>
                    </div>
                  ))}
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
            SeaScope CDS Safety Architecture • Remote AiD Medical, Corp. • February 2026
          </p>
        </div>
      </section>
    </>
  );
}