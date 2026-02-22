import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { 
  ArrowLeft,
  Globe,
  Database,
  Shield,
  Activity,
  ArrowRight,
  Wifi,
  WifiOff,
  AlertTriangle,
  Lock,
  Eye,
  FileText,
  Server,
  Cloud,
  HardDrive,
  CheckCircle,
  Brain
} from 'lucide-react';

function SeaScopeDataFlowContent() {
  const onlineSteps = [
    {
      id: 1,
      title: "Physician Input",
      description: "De-identified patient data, symptoms, and clinical question",
      icon: FileText,
      data: "Patient age, weight, symptoms, allergies, current medications (no PHI)"
    },
    {
      id: 2,
      title: "Safety Layer",
      description: "Seven guardrails validate input and apply constraints",
      icon: Shield,
      data: "Formulary constraints, allergy checks, drug interactions screening"
    },
    {
      id: 3,
      title: "SeaScope Engine + Claude API",
      description: "AI processing with maritime medicine expertise",
      icon: Brain,
      data: "Clinical reasoning, recommendation generation, confidence scoring"
    },
    {
      id: 4,
      title: "Post-Processing",
      description: "Maverick AI review and final safety validation",
      icon: Eye,
      data: "Independent review, error flagging, final safety clearance"
    },
    {
      id: 5,
      title: "Clinical Output + Audit Trail",
      description: "Final recommendation with complete documentation",
      icon: CheckCircle,
      data: "Recommendation, rationale, safety checks, audit log entry"
    }
  ];

  const offlineSteps = [
    {
      id: 1,
      title: "Physician Input",
      description: "Patient data processed entirely on local device",
      icon: FileText,
      data: "Local processing, no network transmission"
    },
    {
      id: 2,
      title: "Local Engine",
      description: "Onboard AI with pre-loaded medical knowledge",
      icon: HardDrive,
      data: "Local inference, cached medical protocols, offline safety checks"
    },
    {
      id: 3,
      title: "Local Output",
      description: "Recommendations generated without external connectivity",
      icon: CheckCircle,
      data: "Essential safety guardrails, basic recommendations, local audit log"
    }
  ];

  const auditTables = [
    { name: "session_logs", description: "User sessions, login/logout times, access patterns" },
    { name: "patient_encounters", description: "De-identified encounter metadata, timestamps, outcomes" },
    { name: "recommendations", description: "All generated recommendations with confidence scores" },
    { name: "safety_checks", description: "Results of all seven guardrail validations" },
    { name: "overrides", description: "Physician overrides with documented rationale" },
    { name: "errors", description: "System errors, warnings, and failure modes" },
    { name: "performance_metrics", description: "Response times, system performance indicators" },
    { name: "api_calls", description: "External API requests and responses (when online)" },
    { name: "maverick_reviews", description: "Independent AI peer review results" },
    { name: "user_feedback", description: "Physician feedback and satisfaction ratings" },
    { name: "system_config", description: "Configuration changes and system updates" },
    { name: "compliance_logs", description: "Regulatory compliance and audit trail data" },
    { name: "data_retention", description: "Data lifecycle management and purging logs" }
  ];

  return (
    <>
      <Helmet>
        <title>SeaScope CDS Data Flow Architecture - Privacy and Processing Design</title>
        <meta name="description" content="Complete data flow documentation for SeaScope CDS including online/offline modes, privacy protection, and comprehensive audit trail design." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Confidential Badge */}
      <div className="fixed top-4 right-4 z-40 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-red-500/50">
        CONFIDENTIAL — Shared under NDA
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
                <Activity className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Data Flow Architecture</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Data Flow & Privacy
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Comprehensive data processing architecture designed for privacy protection, 
                audit compliance, and multi-mode operation in maritime environments.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Data Flow Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Interactive Data Flow
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Three operational modes optimized for different connectivity and privacy requirements.
              </p>
            </ScrollReveal>
          </div>

          {/* Online Mode */}
          <div className="mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Online Mode</span>
                  <Wifi className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {onlineSteps.map((step, index) => (
                <ScrollReveal key={step.id} delay={index * 100}>
                  <div className="flex items-center">
                    {/* Step Card */}
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-teal-300 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-teal-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          </div>
                          <p className="text-slate-600 mb-3">{step.description}</p>
                          <div className="bg-white border border-slate-200 rounded-lg p-3">
                            <p className="text-sm text-slate-700 font-medium">Data Processing:</p>
                            <p className="text-sm text-slate-600">{step.data}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < onlineSteps.length - 1 && (
                      <div className="flex-shrink-0 mx-4">
                        <ArrowRight className="w-8 h-8 text-teal-600" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Offline Mode */}
          <div className="mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Offline Mode</span>
                  <WifiOff className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {offlineSteps.map((step, index) => (
                <ScrollReveal key={step.id} delay={index * 100}>
                  <div className="flex items-center">
                    {/* Step Card */}
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          </div>
                          <p className="text-slate-600 mb-3">{step.description}</p>
                          <div className="bg-white border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-slate-700 font-medium">Data Processing:</p>
                            <p className="text-sm text-slate-600">{step.data}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < offlineSteps.length - 1 && (
                      <div className="flex-shrink-0 mx-4">
                        <ArrowRight className="w-8 h-8 text-blue-600" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Degraded Mode */}
          <ScrollReveal>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Degraded Mode</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Limited Connectivity Operation</h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                  When connectivity is intermittent, SeaScope operates with cached protocols, 
                  emergency procedures, and essential safety checks using minimal bandwidth.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Emergency Protocols</h4>
                    <p className="text-sm text-slate-600">Pre-loaded emergency procedures and critical care guidelines</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Safety Essentials</h4>
                    <p className="text-sm text-slate-600">Core safety checks and formulary validation</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Low Bandwidth Sync</h4>
                    <p className="text-sm text-slate-600">Compressed data transmission when connection available</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Data Protection Architecture
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Multi-layered privacy protection designed to meet the highest healthcare data security standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">De-identified Input Design</h3>
                      <p className="text-slate-600 text-sm">System requires only clinical parameters, never PHI or identifiers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Cloud className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Anthropic Commercial API</h3>
                      <p className="text-slate-600 text-sm">7-day auto-delete policy, zero training on medical data</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">AWS Bedrock HIPAA Path</h3>
                      <p className="text-slate-600 text-sm">Future EHR integration with BAA and SOC 2 compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Encryption at Rest & Transit</h3>
                      <p className="text-slate-600 text-sm">AES-256 encryption, TLS 1.3 transport security</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Privacy by Design</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Data Minimization</h4>
                    <p className="text-green-800 text-sm">Only essential clinical data processed, no unnecessary collection</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Purpose Limitation</h4>
                    <p className="text-blue-800 text-sm">Data used solely for clinical decision support, never for training or analytics</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Storage Limitation</h4>
                    <p className="text-purple-800 text-sm">Automatic data purging based on retention policies and regulatory requirements</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Audit Trail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive Audit Trail
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                13-table database architecture ensuring complete traceability and regulatory compliance.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditTables.map((table, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2">{table.name}</h3>
                      <p className="text-slate-600 text-sm">{table.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Retention Policies</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-400 mb-2">Clinical Data</h4>
                    <p className="text-white/80 text-sm">7 days maximum, auto-purged with Anthropic API policy</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-400 mb-2">Audit Logs</h4>
                    <p className="text-white/80 text-sm">7 years retention for regulatory compliance and quality improvement</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-400 mb-2">System Metrics</h4>
                    <p className="text-white/80 text-sm">1 year retention for performance monitoring and optimization</p>
                  </div>
                </div>
              </div>
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

export default function SeaScopeDataFlow() {
  return (
      <SeaScopeDataFlowContent />
  );
}