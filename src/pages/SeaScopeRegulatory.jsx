import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeaScopeNav } from '../components/SeaScopeNav';
import { 
  ArrowLeft,
  Scale,
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  Database,
  Lock,
  Eye,
  Users,
  Building,
  Gavel,
  ClipboardCheck
} from 'lucide-react';

function SeaScopeRegulatoryContent() {
  const curesActCriteria = [
    {
      criterion: "Information provided for independent physician review",
      compliance: "✓ Complete",
      description: "SeaScope presents all clinical reasoning, data sources, and recommendation basis for physician evaluation"
    },
    {
      criterion: "Physician retains primary decision-making authority", 
      compliance: "✓ Complete",
      description: "All recommendations require physician approval; system cannot implement without explicit physician action"
    },
    {
      criterion: "Does not replace clinical judgment",
      compliance: "✓ Complete", 
      description: "Positioned as decision support tool; explicitly states physician maintains clinical responsibility"
    },
    {
      criterion: "Transparent about limitations and assumptions",
      compliance: "✓ Complete",
      description: "Clear documentation of system constraints, knowledge cutoffs, and areas requiring human expertise"
    }
  ];

  const hipaaComponents = [
    {
      title: "De-identified Data Architecture",
      icon: Shield,
      description: "System designed to operate without Protected Health Information (PHI)",
      details: [
        "No patient names, MRNs, or identifiers required",
        "Clinical parameters only (age, weight, symptoms)",
        "Allergies and medications by generic name",
        "No demographic or location data"
      ]
    },
    {
      title: "Secure API Integration",
      icon: Lock,
      description: "HIPAA-aligned pathway through AWS Bedrock for future EHR integration",
      details: [
        "Business Associate Agreement (BAA) with AWS",
        "SOC 2 Type II compliance certification",
        "Encryption at rest and in transit",
        "Access logging and monitoring"
      ]
    },
    {
      title: "Data Minimization Principle",
      icon: Database,
      description: "Only essential clinical data processed, automatic purging policies",
      details: [
        "7-day maximum retention for clinical queries",
        "No training or analytics on patient data", 
        "Purpose limitation to clinical decision support",
        "Automated data lifecycle management"
      ]
    },
    {
      title: "Audit and Accountability",
      icon: Eye,
      description: "Complete traceability and access control for regulatory compliance",
      details: [
        "13-table audit database architecture",
        "User access logging and session tracking",
        "Data access and modification tracking",
        "Compliance reporting capabilities"
      ]
    }
  ];

  const governanceFramework = [
    {
      category: "Clinical Oversight",
      icon: Users,
      responsibilities: [
        "Chief Medical Officer approval for clinical protocols",
        "Physician advisory board for safety guidelines",
        "Regular clinical review of recommendations",
        "Incident reporting and investigation procedures"
      ]
    },
    {
      category: "Technical Governance", 
      icon: Building,
      responsibilities: [
        "Change management for system updates",
        "Security architecture review and approval",
        "Data governance and retention policies",
        "System performance monitoring and optimization"
      ]
    },
    {
      category: "Compliance Management",
      icon: Scale,
      responsibilities: [
        "Regulatory requirement tracking and implementation",
        "Policy documentation and version control", 
        "Training and competency management",
        "External audit coordination and response"
      ]
    },
    {
      category: "Quality Assurance",
      icon: ClipboardCheck,
      responsibilities: [
        "Continuous safety monitoring and improvement",
        "User feedback collection and analysis",
        "Clinical outcome tracking (when available)",
        "Risk assessment and mitigation planning"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SeaScope CDS Regulatory Framework - Compliance and Governance</title>
        <meta name="description" content="Comprehensive regulatory framework for SeaScope CDS including 21st Century Cures Act compliance, HIPAA architecture, and clinical governance structure." />
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
                <Scale className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Regulatory Framework</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Regulatory Framework
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Comprehensive regulatory compliance strategy designed to meet current healthcare AI 
                requirements and positioned for evolving regulatory landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 21st Century Cures Act */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                21st Century Cures Act §3060
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Clinical Decision Support (CDS) exemption criteria and SeaScope compliance framework.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  CDS Exemption Framework
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  SeaScope CDS is positioned to meet the Clinical Decision Support exemption criteria 
                  under the 21st Century Cures Act, which exempts certain software functions from 
                  medical device regulation when they meet specific requirements.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Gavel className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="text-blue-800 font-medium">Regulatory Position</p>
                      <p className="text-blue-700 text-sm mt-1">
                        SeaScope is designed to qualify for CDS exemption as software that provides 
                        healthcare professionals with patient-specific assessments and treatment recommendations 
                        while preserving the role of the healthcare professional in decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Compliance Matrix</h3>
                {curesActCriteria.map((item, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-slate-900 text-sm">{item.criterion}</h4>
                          <span className="text-green-600 text-xs font-medium bg-green-100 px-2 py-1 rounded">
                            {item.compliance}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Architecture */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                HIPAA-Aligned Architecture
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Privacy-by-design architecture supporting HIPAA-aligned deployments for current and future integrations.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hipaaComponents.map((component, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <component.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{component.title}</h3>
                      <p className="text-slate-600 text-sm">{component.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {component.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2" />
                        <p className="text-slate-600 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Future EHR Integration Path</h3>
                <p className="text-slate-600 max-w-3xl mx-auto mb-6">
                  Current standalone architecture is designed to seamlessly integrate with EHR systems 
                  through HIPAA-aligned AWS Bedrock pathway when ready for production deployment.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-teal-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Phase 1: Standalone</h4>
                    <p className="text-sm text-slate-600">Manual data entry, no PHI exposure</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-teal-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Phase 2: Read Integration</h4>
                    <p className="text-sm text-slate-600">EHR data access via HIPAA-aligned API</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-teal-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Phase 3: Full Integration</h4>
                    <p className="text-sm text-slate-600">Bidirectional EHR integration with BAA</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinical Governance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Clinical Governance Structure
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive governance framework ensuring clinical oversight, compliance, and continuous improvement.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {governanceFramework.map((category, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-slate-600 text-sm">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability and Documentation */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Complete Traceability
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Comprehensive audit trail and documentation framework supporting regulatory 
                  compliance and quality assurance objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Decision Documentation</h3>
                      <p className="text-slate-600 text-sm">Every recommendation includes complete rationale, data sources, and confidence metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Physician Override Logging</h3>
                      <p className="text-slate-600 text-sm">All physician overrides documented with rationale and timestamped records</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Safety Check Validation</h3>
                      <p className="text-slate-600 text-sm">All seven guardrails logged with pass/fail status and detailed results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ClipboardCheck className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Compliance Reporting</h3>
                      <p className="text-slate-600 text-sm">Automated generation of compliance reports for regulatory submission</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Audit Capabilities</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Real-time Monitoring</h4>
                    <p className="text-green-800 text-sm">Continuous monitoring of system performance and safety metrics</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Historical Analysis</h4>
                    <p className="text-blue-800 text-sm">Retrospective analysis capabilities for quality improvement</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Regulatory Readiness</h4>
                    <p className="text-purple-800 text-sm">Pre-formatted reports for FDA, state boards, and other regulatory bodies</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Important Legal Notice</h3>
                  <div className="space-y-3 text-slate-700">
                    <p className="font-semibold">Formal regulatory counsel engagement underway.</p>
                    <p>
                      This regulatory framework represents our current understanding and intended compliance approach. 
                      SeaScope CDS is designed to meet applicable regulatory requirements, but formal regulatory 
                      determinations have not yet been obtained.
                    </p>
                    <p>
                      All statements regarding regulatory compliance use "designed to" and "positioned as" language 
                      to reflect the preliminary nature of this analysis. Final regulatory strategy will be 
                      confirmed through formal legal counsel and regulatory consultation.
                    </p>
                    <p className="text-sm italic">
                      This document is not legal advice and should not be relied upon for regulatory decision-making 
                      without independent legal consultation.
                    </p>
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

export default function SeaScopeRegulatory() {
  return (
      <SeaScopeRegulatoryContent />
  );
}