import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { 
  Shield, 
  Activity, 
  FileCheck, 
  BarChart3,
  TrendingUp,
  ArrowLeft,
  Database,
  Users,
  Target,
  CheckCircle,
  AlertTriangle,
  Clock,
  Brain,
  Zap,
  Eye
} from 'lucide-react';

function SeaScopeEvidenceContent() {
  const metrics = [
    { title: "Overall Safety Check Pass Rate", target: ">95%", icon: Shield },
    { title: "Guideline Adherence Rate", target: ">90%", icon: CheckCircle },
    { title: "Confabulation Rate", target: "0%", icon: Brain },
    { title: "Average Score Before Remediation", target: "TBD", icon: TrendingUp },
    { title: "Average Score After Remediation", target: "TBD", icon: Target },
    { title: "Critical Errors Caught", target: "TBD", icon: AlertTriangle }
  ];

  return (
    <>
      <Helmet>
        <title>SeaScope CDS Clinical Validation Evidence - 100-Case Adversarial Testing</title>
        <meta name="description" content="Comprehensive clinical validation evidence for SeaScope CDS including 100-case adversarial testing, temporal validation, and Maverick AI peer review methodology." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Confidential Badge */}
      <div className="fixed top-4 right-4 z-40 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-red-500/50">
        CONFIDENTIAL: Shared under NDA
      </div>

      <SeaScopeNav />

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
                <FileCheck className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Clinical Validation</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Clinical Validation Evidence
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Comprehensive validation framework demonstrating SeaScope CDS safety and efficacy 
                through systematic testing, peer review, and methodological rigor.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 100-Case Adversarial Validation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  100-Case Adversarial Validation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Systematic evaluation across 12 medical specialties with 28 embedded safety traps, 
                  designed to test SeaScope CDS performance under challenging clinical scenarios.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                    <div>
                      <p className="text-teal-800 font-medium">Adversarial Testing Methodology</p>
                      <p className="text-teal-700 text-sm mt-1">
                        Cases specifically designed to trigger potential AI failures and safety concerns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Testing Parameters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Medical Specialties</div>
                      <div className="text-slate-600">12 distinct specialties including emergency, cardiology, infectious disease</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Safety Traps</div>
                      <div className="text-slate-600">28 embedded scenarios designed to test guardrail effectiveness</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Independent Review</div>
                      <div className="text-slate-600">AI peer review system provides secondary validation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                    <div>
                      <div className="font-semibold text-slate-900">Validation Framework</div>
                      <div className="text-slate-600">FDA prescribing rubric with standardized scoring criteria</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Validation Results Dashboard
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Real-time monitoring of key performance indicators and safety metrics.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-teal-300 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-2">
                        {metric.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-slate-900">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                            <span className="text-orange-600 text-sm">Pipeline Running...</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Target: {metric.target}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-orange-600 mr-2" />
                <p className="text-orange-800 font-medium">
                  Validation pipeline currently running. Results will be updated as testing progresses.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Temporal Validation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Temporal Validation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Cohort analysis ensuring consistent performance over time with no regression.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Cohort Split Methodology
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Cases 1-50 (Early Cohort)</h4>
                    <p className="text-blue-800 text-sm">
                      Initial validation cases establishing baseline performance metrics and identifying 
                      potential areas for system improvement.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Cases 51-100 (Later Cohort)</h4>
                    <p className="text-green-800 text-sm">
                      Validation of system stability and performance consistency after initial 
                      calibration phase, ensuring no performance regression.
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  This temporal split ensures that SeaScope CDS maintains consistent performance 
                  throughout extended use and doesn't degrade over time or with increased complexity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">No Regression Protocol</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <div className="font-medium text-slate-900">Statistical Validation</div>
                      <div className="text-slate-600 text-sm">Performance metrics compared between cohorts using appropriate statistical tests</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <div className="font-medium text-slate-900">Safety Consistency</div>
                      <div className="text-slate-600 text-sm">All safety guardrails maintain effectiveness across time periods</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <div className="font-medium text-slate-900">Quality Assurance</div>
                      <div className="text-slate-600 text-sm">Continuous monitoring for performance degradation</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Maverick AI Peer Review */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Maverick AI Peer Review
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Independent AI peer review system providing secondary validation and error detection.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Bidirectional Remediation Loop
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-teal-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">CDS Recommends</h4>
                    <p className="text-slate-600 text-xs">SeaScope generates clinical recommendation</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-slate-300" />
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">Maverick Reviews</h4>
                    <p className="text-slate-600 text-xs">Independent AI system evaluates recommendation</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-slate-300" />
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">Errors Flagged</h4>
                    <p className="text-slate-600 text-xs">Issues identified with severity grading</p>
                  </div>
                </div>
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">Constraints Fed Back</h4>
                    <p className="text-slate-600 text-xs">System constraints updated based on findings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">Re-run</h4>
                    <p className="text-slate-600 text-xs">Recommendation regenerated with new constraints</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">Re-review</h4>
                    <p className="text-slate-600 text-xs">Final validation by Maverick system</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Validation Methodology
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Rigorous evaluation framework based on FDA prescribing standards and clinical best practices.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  20-Item FDA Prescribing Rubric
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive evaluation framework covering all aspects of safe prescribing practices, 
                  adapted for maritime medicine constraints and resource limitations.
                </p>
                <div className="space-y-3">
                  {[
                    "Patient identification and verification",
                    "Allergy and contraindication screening",
                    "Dosage appropriateness and calculations",
                    "Drug interaction assessment",
                    "Route of administration validation",
                    "Duration and frequency specification"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                  <div className="text-slate-500 text-sm mt-4">
                    + 14 additional criteria covering safety, efficacy, and documentation requirements
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Severity Grading System
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900">CRITICAL</h4>
                    <p className="text-red-800 text-sm">
                      Potentially life-threatening errors requiring immediate attention and system halt
                    </p>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-900">MAJOR</h4>
                    <p className="text-orange-800 text-sm">
                      Significant safety concerns requiring physician review before implementation
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-900">MINOR</h4>
                    <p className="text-yellow-800 text-sm">
                      Quality improvements or optimization opportunities with safety flag
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Scoring System</h4>
                  <p className="text-slate-600 text-sm">
                    Weighted scoring based on severity level and clinical impact. Critical errors result 
                    in automatic failure regardless of other scores.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full Report Note */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
              <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Complete Validation Documentation</h2>
              <p className="text-teal-200 mb-6 max-w-2xl mx-auto">
                Full validation report including detailed methodology, statistical analysis, 
                and comprehensive results available upon request for qualified stakeholders.
              </p>
              <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300">
                Request Full Report
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            Last updated: February 21, 2026
          </p>
        </div>
      </section>
    </>
  );
}

export default function SeaScopeEvidence() {
  return (
      <SeaScopeEvidenceContent />
  );
}