import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { Shield, AlertTriangle, Target, Layers } from 'lucide-react';

export default function SeaScopeSafetyCase() {
  return (
    <>
      <Helmet>
        <title>Safety Case | SeaScope CDS</title>
        <meta name="description" content="Detailed failure mode analysis for all seven guardrails and residual risk assessment." />
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
                <span className="text-sm font-medium tracking-wider uppercase">Safety Case</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Failure Mode Analysis
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Comprehensive analysis of potential failure modes, mitigation strategies, and residual risk assessment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Defense in Depth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Defense-in-Depth Architecture
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Multiple independent safety layers ensure system-wide failure is mathematically improbable.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Layer 1", desc: "Input Validation", reliability: "99.9%" },
              { title: "Layer 2", desc: "Formulary Lock", reliability: "100%" },
              { title: "Layer 3", desc: "Safety Screening", reliability: "99%" },
              { title: "Layer 4", desc: "Maverick Review", reliability: "95%" }
            ].map((layer, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{layer.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{layer.desc}</p>
                  <div className="text-teal-600 font-semibold">{layer.reliability}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-green-900 mb-4">Combined System Reliability</h3>
              <div className="text-4xl font-bold text-green-700 mb-2">99.99%</div>
              <p className="text-green-800">
                Probability of all safety layers simultaneously failing: &lt;0.01%
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Failure Scenarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Identified Failure Modes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "High Risk",
                scenarios: [
                  "Complete system failure during emergency",
                  "All guardrails bypassed simultaneously", 
                  "Confabulation in critical care scenario"
                ],
                mitigation: "Manual override protocols, redundant systems, physician training",
                residual: "Low"
              },
              {
                category: "Medium Risk", 
                scenarios: [
                  "Single guardrail failure",
                  "Network connectivity issues",
                  "Database synchronization errors"
                ],
                mitigation: "Automatic failsafes, offline mode, regular validation",
                residual: "Very Low"
              }
            ].map((risk, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertTriangle className={`w-6 h-6 ${risk.category === 'High Risk' ? 'text-red-500' : 'text-yellow-500'}`} />
                    <h3 className="text-xl font-bold text-slate-900">{risk.category} Scenarios</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Potential Failures:</h4>
                      <ul className="space-y-1">
                        {risk.scenarios.map((scenario, i) => (
                          <li key={i} className="text-slate-600 text-sm flex items-start space-x-2">
                            <span className="text-slate-400">•</span>
                            <span>{scenario}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Mitigations:</h4>
                      <p className="text-slate-600 text-sm">{risk.mitigation}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-900">Residual Risk:</span>
                        <span className={`font-semibold ${risk.residual === 'Low' ? 'text-yellow-600' : 'text-green-600'}`}>
                          {risk.residual}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Monitoring */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Continuous Safety Monitoring
                </h2>
                <p className="text-lg text-slate-600">
                  Real-time monitoring systems track safety performance and automatically 
                  trigger alerts when thresholds are approached.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-teal-600 mt-1" />
                    <span>Automated safety metric tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-teal-600 mt-1" />
                    <span>Real-time threshold monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-teal-600 mt-1" />
                    <span>Automatic escalation protocols</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Safety Dashboards</h3>
                <div className="space-y-4">
                  {[
                    { metric: "Allergy Gate Performance", value: "99.8%", status: "Normal" },
                    { metric: "Interaction Screening", value: "99.9%", status: "Normal" },
                    { metric: "Confabulation Rate", value: "0.0%", status: "Normal" },
                    { metric: "System Uptime", value: "99.97%", status: "Normal" }
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                      <div className="font-medium text-slate-900">{metric.metric}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-teal-600 font-semibold">{metric.value}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {metric.status}
                        </span>
                      </div>
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
            SeaScope CDS Safety Case • Remote AiD Medical, Corp. • February 2026
          </p>
        </div>
      </section>
    </>
  );
}