import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { PasswordGate } from '../components/PasswordGate';
import { SeaScopeNav } from '../components/SeaScopeNav';
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

      <SeaScopeNav />

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
                      <span>Limited to ~180 medications (vs 4,000+ in hospitals)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Intermittent satellite connectivity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Medevac: 8+ hours when available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Populations up to 6,000 with no hospital nearby</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Generic AI tools lack clinical safety validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Layers className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Documentation</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                SeaScope CDS Documentation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive documentation covering clinical validation, safety architecture, 
                regulatory compliance, and technical implementation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Link to="/seascope/evidence" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <FileCheck className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Evidence & Validation
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    100-case adversarial validation, temporal testing, and Maverick AI peer review results.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Evidence</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Link to="/seascope/safety-case" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Shield className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Safety Case
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Detailed failure mode analysis for all seven guardrails and residual risk assessment.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Safety Case</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link to="/seascope/data-flow" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Activity className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Data Flow & Privacy
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Complete data processing architecture, privacy protection, and audit trail design.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Data Flow</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link to="/seascope/regulatory" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Building className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Regulatory Framework
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    21st Century Cures Act compliance, HIPAA architecture, and clinical governance.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Framework</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Link to="/seascope/pilot" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Pilot Program
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    30-day shadow study design, participant requirements, and success metrics.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Pilot</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Link to="/seascope/safety" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Lock className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Safety Architecture
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Seven code-enforced guardrails with detailed validation testing and performance.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Safety</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Link to="/seascope/eval" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">
                    Evaluation Tracker
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Real-time validation dashboard with 64/70 cases complete and Tarling pre-pilot conditions.
                  </p>
                  <div className="flex items-center space-x-2 text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">View Tracker</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
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

      {/* Footer */}
      <section className="py-8 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-2">
          <p className="text-slate-400 text-sm font-medium">
            SeaScope CDS — A product of Remote AiD Medical, Corp.
          </p>
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Remote AiD Medical, Corp. All rights reserved. | Delaware C-Corp | Miami, FL
          </p>
          <p className="text-slate-600 text-xs">
            Last Updated: February 2026
          </p>
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