import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
import { PasswordGate } from '../components/PasswordGate';
import { 
  Shield, 
  Activity, 
  Globe, 
  Database, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Mail,
  Building,
  Stethoscope,
  Brain,
  Ship,
  Lock,
  Zap,
  Target,
  ArrowRight,
  Calendar,
  FileCheck,
  Layers
} from 'lucide-react';

function SeaScopeContent() {
  return (
    <>
      <Helmet>
        <title>SeaScope CDS - Clinical Decision Support for Resource-Constrained Medicine</title>
        <meta name="description" content="AI-powered clinical decision support purpose-built for maritime and resource-constrained medicine environments." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 to-teal-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-teal-900/90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Ship className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Remote AiD Medical</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                SeaScope CDS
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-2xl lg:text-3xl text-teal-200 mb-8 font-light">
                Clinical Decision Support for Resource-Constrained Medicine
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                AI-powered clinical decision support purpose-built for maritime and resource-constrained medicine environments where traditional healthcare infrastructure is unavailable.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  The Problem
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    It's 3 AM in the middle of the Pacific Ocean. A ship physician faces a complex medical case with no specialist backup, limited formulary, and unreliable connectivity.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Today, many resort to consumer AI tools like ChatGPT—tools never designed for clinical use, lacking safety guardrails, and potentially dangerous in high-stakes medical decisions.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
                    <p className="text-red-800 font-medium">
                      Generic AI tools lack medical knowledge validation, formulary awareness, and critical safety checks required for clinical decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">Current Reality</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>No specialist backup available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Limited to ~40 medications (vs 4,000 in hospitals)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Intermittent connectivity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Medevac: 8+ hours when available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Generic AI tools lack clinical validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What is SeaScope CDS?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                SeaScope CDS is the first AI-powered clinical decision support system specifically engineered for resource-constrained medical environments.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">AI-Powered Decisions</h3>
                <p className="text-slate-600">
                  Advanced clinical AI with maritime medicine expertise, trained on resource-limited scenarios and validated safety protocols.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Safety-First Architecture</h3>
                <p className="text-slate-600">
                  Seven code-enforced guardrails ensure clinical safety, from allergy screening to drug interaction checking.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Ship className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Built for Isolation</h3>
                <p className="text-slate-600">
                  Designed specifically for maritime and remote environments where traditional medical infrastructure is unavailable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Safety Architecture</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Seven Code-Enforced Guardrails
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every clinical recommendation passes through multiple safety layers before reaching the physician.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Allergy Gate", desc: "Cross-references patient allergies against all recommendations" },
              { icon: Lock, title: "Formulary Lock", desc: "Restricts recommendations to available onboard medications" },
              { icon: Activity, title: "Lab Validator", desc: "Validates recommendations against current lab values" },
              { icon: Shield, title: "BBW Enforcer", desc: "Enforces FDA black box warnings and contraindications" },
              { icon: Target, title: "Dosing Checker", desc: "Validates dosages against patient parameters" },
              { icon: Brain, title: "Confabulation Detector", desc: "Identifies and prevents AI hallucinations in medical advice" },
              { icon: Zap, title: "Interaction Screener", desc: "Screens for dangerous drug-drug interactions" }
            ].map((guardrail, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <guardrail.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{guardrail.title}</h3>
                  <p className="text-sm text-slate-600">{guardrail.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                How It Works
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-teal-200 max-w-3xl mx-auto">
                Three operational modes designed to work in any connectivity scenario.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Online Mode</h3>
                <p className="text-white/80 mb-4">
                  Full functionality with Claude API integration. Real-time medical knowledge updates and comprehensive clinical reasoning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Latest medical knowledge</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Advanced reasoning capabilities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Full safety guardrail suite</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Offline Mode</h3>
                <p className="text-white/80 mb-4">
                  Fully local AI processing with pre-loaded medical knowledge base. Complete functionality without internet connectivity.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Zero connectivity required</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Local medical knowledge base</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Essential safety checks</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Degraded Mode</h3>
                <p className="text-white/80 mb-4">
                  Limited connectivity operation. Core safety functions with cached medical protocols and emergency procedures.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Emergency protocols</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Critical safety guardrails</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Low bandwidth operation</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Key Differentiators
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Built specifically for resource-constrained medicine with unique capabilities not found in generic AI tools.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Formulary Awareness",
                value: "173 medications",
                description: "Complete awareness of maritime formularies with substitution recommendations when preferred drugs aren't available."
              },
              {
                title: "Multilingual Allergy Gate",
                value: "50+ languages",
                description: "Patient allergy screening in multiple languages for international crews and passengers."
              },
              {
                title: "Validated Safety Pipeline",
                value: "100 cases / 28 traps",
                description: "Extensively tested safety pipeline with documented performance on edge cases and potential failure modes."
              },
              {
                title: "Complete Audit Trail",
                value: "13-table database",
                description: "Comprehensive logging and audit capabilities for regulatory compliance and quality improvement."
              },
              {
                title: "Maverick AI Peer Review",
                value: "Independent validation",
                description: "Secondary AI system provides independent review of primary recommendations to catch errors."
              }
            ].map((differentiator, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-bold text-teal-600 text-center leading-tight px-1">
                          {differentiator.value.split('/')[0].trim()}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{differentiator.title}</h3>
                      <div className="text-teal-600 font-medium text-sm mb-2">{differentiator.value}</div>
                      <p className="text-slate-600">{differentiator.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EHR Integration Roadmap */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Layers className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Integration Roadmap</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                EHR Integration Pathway
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Four-phase integration approach with SeaCare and Tritan EHR systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Standalone Operation",
                description: "Independent CDS system with manual data entry and recommendations export.",
                status: "Current Focus"
              },
              {
                phase: "Phase 2", 
                title: "Read-Only Integration",
                description: "Direct EHR data access for patient history, allergies, and current medications.",
                status: "Development"
              },
              {
                phase: "Phase 3",
                title: "Bidirectional Integration",
                description: "Full read/write capabilities with recommendation implementation in EHR.",
                status: "Planned"
              },
              {
                phase: "Phase 4",
                title: "Embedded SeaCare/Tritan",
                description: "Native integration within existing EHR workflows and interfaces.",
                status: "Future"
              }
            ].map((phase, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                    </div>
                    <div className="text-teal-600 font-medium text-sm mb-2">{phase.phase}</div>
                    <h3 className="font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{phase.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'Current Focus' ? 'bg-teal-100 text-teal-800' :
                      phase.status === 'Development' ? 'bg-blue-100 text-blue-800' :
                      phase.status === 'Planned' ? 'bg-orange-100 text-orange-800' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proposed Pilot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-teal-600 mb-4">
                  <Calendar className="w-6 h-6" />
                  <span className="text-sm font-medium tracking-wider uppercase">Proposed Pilot</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  30-Day Shadow Study
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Comprehensive pilot program designed to validate SeaScope CDS in real-world maritime medical environments.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Study Parameters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Duration</div>
                      <div className="text-slate-600">30-day shadow deployment</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Encounters</div>
                      <div className="text-slate-600">50-100 patient encounters</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Participants</div>
                      <div className="text-slate-600">3-5 ship physicians</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Endpoints</div>
                      <div className="text-slate-600">Pre-defined safety and efficacy metrics</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Users className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Team</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Leadership Team
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-12 h-12 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Javier Rosas</h3>
                  <div className="text-teal-600 font-medium mb-4">Founder & Chief Medical Officer</div>
                  <p className="text-slate-600 leading-relaxed">
                    Senior ship physician with 10+ years in emergency and maritime medicine. Clinical AI evaluator and trainer 
                    for leading platforms including Mercor AI, Micro1, and Pareto. Specializes in AI safety validation and 
                    resource-constrained medical decision-making.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Thomas Gionis</h3>
                  <div className="text-teal-600 font-medium mb-4">Advisory Board</div>
                  <p className="text-slate-600 leading-relaxed">
                    Providing strategic guidance on clinical AI implementation, regulatory compliance, and healthcare 
                    technology integration. Extensive experience in medical technology development and clinical validation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center space-x-2 text-teal-600 mb-6">
              <Building className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">Company</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Remote AiD Medical, Corp.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="font-semibold text-slate-900">Entity Type</div>
                    <div className="text-slate-600">Delaware C-Corporation</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Headquarters</div>
                    <div className="text-slate-600">Miami, Florida</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="font-semibold text-slate-900 mb-2">Mission</div>
                  <p className="text-slate-600 text-left">
                    Advancing clinical AI safety and effectiveness in resource-constrained medical environments 
                    through purpose-built decision support systems.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center space-x-2 text-teal-200 mb-6">
              <Mail className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">Contact</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Discuss SeaScope CDS?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Connect with our team to learn more about SeaScope CDS implementation, pilot programs, or partnership opportunities.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:javier@theremoteaidoc.com"
                className="px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>javier@theremoteaidoc.com</span>
              </a>
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                className="px-8 py-4 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function SeaScope() {
  return (
    <PasswordGate correctPassword="seascope2026">
      <SeaScopeContent />
    </PasswordGate>
  );
}