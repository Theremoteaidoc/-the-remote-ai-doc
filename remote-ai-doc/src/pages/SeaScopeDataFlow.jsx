import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { Activity, Database, Shield, Lock, Cloud, Server } from 'lucide-react';

export default function SeaScopeDataFlow() {
  return (
    <>
      <Helmet>
        <title>Data Flow & Privacy | SeaScope CDS</title>
        <meta name="description" content="Complete data processing architecture, privacy protection, and audit trail design for SeaScope CDS." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SeaScopeNav />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Activity className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Data Flow & Privacy</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                No PHI by Design
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Privacy-first architecture ensures patient data protection through technical controls, not just policies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Privacy-First Architecture
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Technical architecture prevents PHI from ever entering the system.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-slate-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">De-identification</h3>
                <p className="text-slate-600">
                  HIPAA Safe Harbor compliant de-identification removes all 18 identifiers before processing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-slate-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Local Processing</h3>
                <p className="text-slate-600">
                  Clinical parameters processed locally on ship before any external transmission.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Audit Trail</h3>
                <p className="text-slate-600">
                  Complete logging of all system interactions for regulatory compliance and quality improvement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data Processing Phases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Data Processing Pipeline
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Input Sanitization", 
                desc: "Remove all identifiers, normalize clinical parameters",
                icon: Shield,
                color: "blue"
              },
              {
                phase: "Phase 2", 
                title: "Safety Screening",
                desc: "Run seven guardrails on de-identified data",
                icon: Lock,
                color: "green"
              },
              {
                phase: "Phase 3",
                title: "AI Processing", 
                desc: "Generate recommendations using Claude API",
                icon: Cloud,
                color: "purple"
              },
              {
                phase: "Phase 4",
                title: "Local Storage",
                desc: "Store audit trail and recommendations locally", 
                icon: Server,
                color: "orange"
              }
            ].map((phase, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                  <div className={`w-12 h-12 bg-${phase.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <phase.icon className={`w-6 h-6 text-${phase.color}-600`} />
                  </div>
                  <div className="text-sm font-medium text-slate-500 mb-1">{phase.phase}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-600">{phase.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Regulatory Compliance
                </h2>
                <p className="text-lg text-slate-600">
                  Multi-layered compliance framework addresses HIPAA, 21st Century Cures Act, 
                  and FDA guidance for clinical decision support.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {[
                  { 
                    standard: "HIPAA Safe Harbor",
                    status: "Compliant", 
                    details: "18-identifier de-identification standard"
                  },
                  {
                    standard: "21st Century Cures Act",
                    status: "Compliant",
                    details: "CDS exception for non-device software"
                  },
                  {
                    standard: "AWS Bedrock BAA", 
                    status: "Phase 2+",
                    details: "Business Associate Agreement for cloud processing"
                  },
                  {
                    standard: "FDA 21 CFR 880",
                    status: "Monitoring", 
                    details: "Software as Medical Device guidance"
                  }
                ].map((compliance, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-slate-900">{compliance.standard}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        compliance.status === 'Compliant' ? 'bg-green-100 text-green-800' :
                        compliance.status === 'Phase 2+' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {compliance.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{compliance.details}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            SeaScope CDS Data Flow & Privacy • Remote AiD Medical, Corp. • February 2026
          </p>
        </div>
      </section>
    </>
  );
}