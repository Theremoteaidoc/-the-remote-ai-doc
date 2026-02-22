import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { PasswordGate } from '../components/PasswordGate';
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart, 
  FileCheck, 
  ArrowLeft,
  Clock,
  Activity,
  Database,
  Shield,
  CheckCircle,
  Stethoscope,
  Ship,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';

function SeaScopePilotContent() {
  return (
    <>
      <Helmet>
        <title>SeaScope CDS Pilot Program - 30-Day Shadow Study</title>
        <meta name="description" content="Comprehensive 30-day pilot program for SeaScope CDS validation in real-world maritime medical environments." />
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
                <Calendar className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Pilot Program</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                30-Day Shadow Study
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Comprehensive validation of SeaScope CDS in real-world maritime medical environments 
                through a structured shadow deployment with defined endpoints and success metrics.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Study Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Shadow Deployment Methodology
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The SeaScope CDS pilot operates as a "shadow system" alongside current clinical workflows. 
                  Physicians make their normal clinical decisions while SeaScope provides parallel recommendations 
                  for comparison and validation.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 mr-3" />
                    <p className="text-teal-800 font-medium">
                      No disruption to current workflows - SeaScope operates in observation mode only.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Study Parameters</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Duration</div>
                      <div className="text-slate-600">30 consecutive days</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Patient Encounters</div>
                      <div className="text-slate-600">50-100 cases</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Participants</div>
                      <div className="text-slate-600">3-5 ship physicians</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Ship className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Environment</div>
                      <div className="text-slate-600">Active cruise ship operations</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Primary Endpoints */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Target className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Primary Endpoints</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Success Metrics & Validation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Pre-defined measurable outcomes that will determine the safety, accuracy, and clinical utility of SeaScope CDS.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Safety Validation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Zero safety-critical errors in recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">100% allergy checking accuracy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Formulary compliance &gt;99%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Drug interaction detection accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                    <BarChart className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Clinical Accuracy</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Diagnostic accuracy vs physician decisions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Treatment recommendation concordance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Dosing accuracy assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">False positive/negative rates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Operational Performance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">System response time &lt;30 seconds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Uptime &gt;99.5% during operational hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Connectivity handling (online/offline modes)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">User interface usability scoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Physician Satisfaction</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Clinical utility assessment scores</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Workflow integration feedback</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Recommendation quality ratings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-slate-600">Likelihood of continued use</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Study Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Three-Phase Implementation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Structured rollout ensuring thorough evaluation and minimal disruption to clinical operations.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "System Setup & Training",
                duration: "Days 1-5",
                description: "Installation, configuration, and physician training on SeaScope CDS interface and workflows.",
                activities: [
                  "System installation and configuration",
                  "Physician training sessions (2 hours per participant)",
                  "Baseline workflow documentation",
                  "Initial system testing and validation"
                ]
              },
              {
                phase: "Phase 2", 
                title: "Shadow Deployment",
                duration: "Days 6-25",
                description: "Full shadow operation with parallel recommendations for all eligible patient encounters.",
                activities: [
                  "Real-time shadow recommendations",
                  "Daily system performance monitoring",
                  "Weekly physician feedback sessions",
                  "Continuous data collection and analysis"
                ]
              },
              {
                phase: "Phase 3",
                title: "Analysis & Reporting",
                duration: "Days 26-30",
                description: "Comprehensive data analysis, physician debriefing, and final study reporting.",
                activities: [
                  "Complete data analysis and validation",
                  "Individual physician interviews",
                  "System performance assessment",
                  "Final study report preparation"
                ]
              }
            ].map((phase, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="text-teal-600 font-medium text-sm mb-2">{phase.phase}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                      <div className="text-slate-600 font-medium">{phase.duration}</div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-4">
                <Database className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Data Collection</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Data Capture
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-teal-200 max-w-3xl mx-auto">
                Every interaction, recommendation, and outcome is captured for thorough analysis and validation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clinical Data",
                items: [
                  "Patient presentations and chief complaints",
                  "Physician assessments and diagnoses",
                  "Treatment decisions and medications prescribed",
                  "Patient outcomes and follow-up"
                ]
              },
              {
                title: "System Performance",
                items: [
                  "Response times and system availability",
                  "Recommendation accuracy and relevance",
                  "Safety guardrail activation rates",
                  "Error rates and system failures"
                ]
              },
              {
                title: "User Experience",
                items: [
                  "Interface usability and navigation",
                  "Workflow integration effectiveness",
                  "Physician satisfaction scores",
                  "Training adequacy assessment"
                ]
              }
            ].map((category, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Pilot Eligibility
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The SeaScope CDS pilot program is designed for maritime medical facilities with active clinical operations 
                  and experienced ship physicians.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Requirements</h3>
                  <ul className="space-y-3">
                    {[
                      "Active cruise ship or maritime medical facility",
                      "3-5 participating physicians with maritime medicine experience",
                      "Minimum 50 patient encounters expected during study period",
                      "Existing electronic medical record system",
                      "Reliable internet connectivity (primary) with offline capability",
                      "Commitment to complete data collection and feedback protocols"
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-teal-50 p-8 rounded-2xl border border-teal-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Benefits for Participants</h3>
                <ul className="space-y-4">
                  {[
                    "Free access to SeaScope CDS during pilot period",
                    "Dedicated technical support and training",
                    "Priority consideration for post-pilot licensing",
                    "Contribution to advancing maritime medical AI",
                    "Comprehensive study results and benchmarking",
                    "Continuing medical education credits available"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact for Pilot */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center space-x-2 text-teal-200 mb-6">
              <Stethoscope className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">Join the Pilot</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Participate in the SeaScope CDS Pilot
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Join us in validating the future of clinical AI for resource-constrained medicine. 
              Limited pilot slots available for qualified maritime medical facilities.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:javier@theremoteaidoc.com?subject=SeaScope CDS Pilot Program Interest"
                className="px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>Apply for Pilot Program</span>
              </a>
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                className="px-8 py-4 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Discussion</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function SeaScopePilot() {
  return (
    <PasswordGate correctPassword="seascope2026">
      <SeaScopePilotContent />
    </PasswordGate>
  );
}