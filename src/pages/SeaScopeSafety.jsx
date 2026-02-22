import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { PasswordGate } from '../components/PasswordGate';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Activity, 
  Target, 
  Brain, 
  Zap, 
  CheckCircle,
  ArrowLeft,
  Database,
  FileText,
  Users,
  BarChart
} from 'lucide-react';

function SeaScopeSafetyContent() {
  return (
    <>
      <Helmet>
        <title>SeaScope CDS Safety Architecture - Clinical Decision Support Safety Systems</title>
        <meta name="description" content="Comprehensive safety architecture for SeaScope CDS with seven code-enforced guardrails ensuring clinical safety in resource-constrained medicine." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 to-teal-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link 
              to="/seascope" 
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to SeaScope CDS</span>
            </Link>
          </ScrollReveal>
          
          <div className="max-w-4xl">
            <ScrollReveal delay={100}>
              <div className="flex items-center space-x-2 text-teal-400 mb-6">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Safety Architecture</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Seven Code-Enforced Guardrails
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Every clinical recommendation in SeaScope CDS passes through multiple independent safety layers, 
                each designed to catch different types of potential errors before they reach the physician.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Safety-First Architecture
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlike generic AI tools that provide raw outputs, SeaScope CDS implements a comprehensive safety 
                  validation pipeline. Each guardrail is independently tested and validated against known failure modes.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                    <p className="text-teal-800 font-medium">
                      100% of recommendations undergo all seven safety checks before presentation to clinicians.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Safety Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">100</div>
                    <div className="text-slate-600 text-sm">Validation Cases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">28</div>
                    <div className="text-slate-600 text-sm">Error Traps Tested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">7</div>
                    <div className="text-slate-600 text-sm">Independent Guardrails</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">0</div>
                    <div className="text-slate-600 text-sm">Safety Failures</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Guardrails */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Detailed Guardrail Analysis
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each safety guardrail addresses specific failure modes identified in clinical AI systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: AlertTriangle,
                title: "Allergy Gate",
                subtitle: "Patient Safety Priority One",
                description: "Cross-references all medication recommendations against documented patient allergies and known cross-reactivities.",
                features: [
                  "Multilingual allergy recognition (50+ languages)",
                  "Cross-reactivity database for related medications",
                  "Severity-based risk stratification",
                  "Alternative medication suggestions when allergies detected"
                ],
                testCases: "15 validation cases including rare allergies and cross-reactions"
              },
              {
                icon: Lock,
                title: "Formulary Lock",
                subtitle: "Maritime Medicine Constraint",
                description: "Ensures all recommendations use only medications available in the ship's limited formulary.",
                features: [
                  "Real-time formulary checking (173 onboard medications)",
                  "Automatic substitution recommendations",
                  "Dosage form availability validation",
                  "Supply level considerations"
                ],
                testCases: "20 validation cases testing formulary constraints and substitutions"
              },
              {
                icon: Activity,
                title: "Lab Validator",
                subtitle: "Evidence-Based Recommendations",
                description: "Validates recommendations against current laboratory values and physiological parameters.",
                features: [
                  "Renal function-based dosing adjustments",
                  "Hepatic impairment considerations",
                  "Electrolyte imbalance detection",
                  "Contraindication identification from lab values"
                ],
                testCases: "18 validation cases covering organ function and lab-based contraindications"
              },
              {
                icon: Shield,
                title: "Black Box Warning (BBW) Enforcer",
                subtitle: "FDA Safety Compliance",
                description: "Enforces all FDA black box warnings and major contraindications for recommended medications.",
                features: [
                  "Complete FDA black box warning database",
                  "Patient condition screening against contraindications",
                  "Age and gender-specific warnings",
                  "Pregnancy category validation"
                ],
                testCases: "12 validation cases testing BBW enforcement and contraindication detection"
              },
              {
                icon: Target,
                title: "Dosing Checker",
                subtitle: "Precision Medicine Safety",
                description: "Validates all dosage recommendations against patient-specific parameters and safety limits.",
                features: [
                  "Weight-based dosing calculations",
                  "Age-specific dosing guidelines",
                  "Maximum daily dose validation",
                  "Frequency and duration safety checks"
                ],
                testCases: "16 validation cases including pediatric, geriatric, and weight-based dosing"
              },
              {
                icon: Brain,
                title: "Confabulation Detector",
                subtitle: "AI Reliability Assurance",
                description: "Identifies and prevents AI hallucinations and fabricated medical information in recommendations.",
                features: [
                  "Medical fact verification against validated sources",
                  "Confidence scoring for all recommendations",
                  "Uncertainty identification and flagging",
                  "Source attribution for medical claims"
                ],
                testCases: "10 validation cases testing hallucination detection and fact verification"
              },
              {
                icon: Zap,
                title: "Interaction Screener",
                subtitle: "Polypharmacy Safety",
                description: "Comprehensive screening for drug-drug, drug-food, and drug-disease interactions.",
                features: [
                  "Complete interaction database (drug-drug, drug-food)",
                  "Severity-based interaction classification",
                  "Temporal interaction considerations",
                  "Alternative therapy recommendations"
                ],
                testCases: "9 validation cases covering major, moderate, and minor interactions"
              }
            ].map((guardrail, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                          <guardrail.icon className="w-8 h-8 text-teal-600" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{guardrail.title}</h3>
                          <div className="text-teal-600 font-medium text-sm">{guardrail.subtitle}</div>
                        </div>
                        
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {guardrail.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {guardrail.features.map((feature, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-600 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Validation Testing</h4>
                            <div className="bg-slate-50 p-4 rounded-lg">
                              <div className="flex items-start space-x-2">
                                <BarChart className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{guardrail.testCases}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Validation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Safety Validation Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our comprehensive validation methodology ensures each guardrail performs as intended in real-world scenarios.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Test Case Development",
                description: "Clinical scenarios designed to trigger specific safety concerns and edge cases."
              },
              {
                icon: Users,
                title: "Expert Review",
                description: "Board-certified physicians validate expected outcomes for each test scenario."
              },
              {
                icon: Database,
                title: "Automated Testing",
                description: "Systematic execution of all test cases against each guardrail system."
              },
              {
                icon: BarChart,
                title: "Performance Analysis",
                description: "Detailed analysis of guardrail performance with continuous improvement."
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Monitoring */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Continuous Safety Monitoring
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-teal-200 max-w-3xl mx-auto">
                Safety doesn't end at deployment. SeaScope CDS includes comprehensive monitoring and feedback systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-white/80 text-sm">
                  Continuous monitoring of all safety guardrails with immediate alerts for any failures or anomalies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Complete Audit Trail</h3>
                <p className="text-white/80 text-sm">
                  13-table database logging every recommendation, safety check, and user interaction for full traceability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Physician Feedback</h3>
                <p className="text-white/80 text-sm">
                  Structured feedback collection from clinicians to identify potential safety improvements and edge cases.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SeaScopeSafety() {
  return (
    <PasswordGate correctPassword="seascope2026">
      <SeaScopeSafetyContent />
    </PasswordGate>
  );
}