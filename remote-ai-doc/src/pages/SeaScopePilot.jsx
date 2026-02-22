import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { Users, Calendar, Target, CheckCircle, AlertTriangle, FileCheck, Clock } from 'lucide-react';

export default function SeaScopePilot() {
  return (
    <>
      <Helmet>
        <title>Pilot Program | SeaScope CDS</title>
        <meta name="description" content="30-day shadow study design for SeaScope CDS validation in maritime medical environments." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SeaScopeNav />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Users className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Pilot Program</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                30-Day Shadow Study
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Comprehensive pilot program designed to validate SeaScope CDS in real-world maritime medical environments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Study Parameters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Study Design
                </h2>
                <p className="text-lg text-slate-600">
                  Shadow mode evaluation eliminates operational risk while providing real-world validation data.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Study Parameters</h3>
                <div className="space-y-4">
                  {[
                    { label: "Duration", value: "30-day shadow deployment" },
                    { label: "Encounters", value: "50-100 patient encounters" },
                    { label: "Participants", value: "3-5 ship physicians" },
                    { label: "Endpoints", value: "Pre-defined safety and efficacy metrics" },
                    { label: "Ships", value: "1-2 vessels, Royal Caribbean fleet" },
                    { label: "Data Entry", value: "During shift, post-clinical decision" }
                  ].map((param, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900">{param.label}</div>
                        <div className="text-slate-600">{param.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Governance & Oversight */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Governance & Oversight
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Rigorous oversight structure ensures scientific integrity and participant safety.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Principal Investigator", role: "Dr. Javier Rosas", desc: "Overall study leadership and clinical oversight" },
              { title: "Advisory Board", role: "Dr. Thomas Gionis", desc: "Strategic guidance and clinical validation" },
              { title: "Ship Physicians", role: "3-5 Participants", desc: "Data collection and clinical assessment" },
              { title: "Fleet Sponsor", role: "To be assigned", desc: "Operational support and liaison" }
            ].map((role, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                  <h3 className="font-bold text-slate-900 mb-2">{role.title}</h3>
                  <div className="text-teal-600 font-medium text-sm mb-3">{role.role}</div>
                  <p className="text-slate-600 text-sm">{role.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Post-Pilot Decision Framework
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Clear success criteria defined before Day 1 to prevent retroactive goalpost adjustment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Fleet Deploy</h3>
                <div className="space-y-2 text-sm text-green-800">
                  <div>≥75% physician agreement</div>
                  <div>≥99% safety flag accuracy</div>
                  <div>0% confabulation rate</div>
                  <div>≥7 NPS score</div>
                  <div>0 halt criteria triggered</div>
                  <div>≥50 cases, ≥8 domains</div>
                </div>
                <div className="mt-4 text-xs text-green-600 font-semibold">ALL CRITERIA MUST BE MET</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-900 mb-4">Second Pilot</h3>
                <div className="space-y-2 text-sm text-yellow-800">
                  <div>60-74% physician agreement</div>
                  <div>OR other partial metrics</div>
                  <div>Addressable gaps identified</div>
                  <div>No critical safety issues</div>
                </div>
                <div className="mt-4 text-xs text-yellow-600 font-semibold">ANY TRIGGER QUALIFIES</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-4">Decline</h3>
                <div className="space-y-2 text-sm text-red-800">
                  <div>&lt;60% physician agreement</div>
                  <div>&lt;95% safety flag accuracy</div>
                  <div>Any confabulation detected</div>
                  <div>Critical halt triggered</div>
                  <div>NPS &lt;5</div>
                </div>
                <div className="mt-4 text-xs text-red-600 font-semibold">ANY TRIGGER QUALIFIES</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Halt Criteria */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Halt Criteria
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Six conditions that immediately pause the pilot for safety review.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Safety Flag Failure", desc: "Critical safety check fails >1% of cases" },
              { title: "Confabulation Detected", desc: "AI generates false medical information" },
              { title: "Physician Concerns", desc: "Any participant requests immediate halt" },
              { title: "System Malfunction", desc: "Technical failure compromises safety" },
              { title: "Regulatory Issue", desc: "Compliance violation discovered" },
              { title: "Data Privacy Breach", desc: "PHI found anywhere in system" }
            ].map((halt, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-red-500">
                  <h3 className="font-bold text-slate-900 mb-2">{halt.title}</h3>
                  <p className="text-slate-600 text-sm">{halt.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            SeaScope CDS Pilot Program • Remote AiD Medical, Corp. • February 2026
          </p>
        </div>
      </section>
    </>
  );
}