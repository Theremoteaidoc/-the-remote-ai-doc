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
  Layers,
  Eye,
  Users
} from 'lucide-react';

function SeaScopeSafetyCaseContent() {
  const guardrails = [
    {
      id: 1,
      icon: AlertTriangle,
      title: "Allergy Gate",
      what: "Multilingual allergy/cross-reactivity check",
      failureMode: "Unrecognized allergy term, novel drug not in database",
      fallback: "Blocks recommendation, requires physician manual override with documented rationale",
      residualRisk: "Extremely rare novel allergies with no database entry",
      severity: "CRITICAL"
    },
    {
      id: 2,
      icon: Lock,
      title: "Formulary Lock", 
      what: "Database lookup against 173 indexed medications",
      failureMode: "Formulary database not updated, new drug added to ship but not in system",
      fallback: "Physician can override with documentation",
      residualRisk: "Window between physical formulary change and database update",
      severity: "MAJOR"
    },
    {
      id: 3,
      icon: Activity,
      title: "Lab Validator",
      what: "Rejects AI-fabricated lab values not in patient input",
      failureMode: "AI references plausible but unsubmitted lab value",
      fallback: "Hard rejection of any lab value not in input data",
      residualRisk: "Near zero — deterministic string matching",
      severity: "CRITICAL"
    },
    {
      id: 4,
      icon: Shield,
      title: "BBW Enforcer",
      what: "Flags FDA black box warnings",
      failureMode: "New BBW issued but database not updated",
      fallback: "Regular database updates, physician clinical judgment",
      residualRisk: "Lag between FDA announcement and database update",
      severity: "CRITICAL"
    },
    {
      id: 5,
      icon: Target,
      title: "Dosing Checker",
      what: "Weight-based dosing validation including pediatric",
      failureMode: "Incorrect weight entry, edge-case dosing scenario",
      fallback: "Flags any dose outside standard range for manual review",
      residualRisk: "Garbage-in from incorrect weight input",
      severity: "MAJOR"
    },
    {
      id: 6,
      icon: Brain,
      title: "Confabulation Detector",
      what: "Catches AI-generated data not present in patient input",
      failureMode: "Sophisticated confabulation that mirrors input patterns",
      fallback: "Deterministic input matching + Maverick peer review as second layer",
      residualRisk: "Low — dual-layer detection system",
      severity: "CRITICAL"
    },
    {
      id: 7,
      icon: Zap,
      title: "Interaction Screener",
      what: "Drug-drug interaction checking with severity tiers",
      failureMode: "Novel interaction not in database, severity misclassification",
      fallback: "HARD STOP for known contraindications, WARNING for significant, INFO for minor",
      residualRisk: "Newly discovered interactions pre-database update",
      severity: "MAJOR"
    }
  ];

  const residualRisks = [
    {
      category: "Database Currency",
      risk: "Lag between medical knowledge updates and system database",
      mitigation: "Regular automated updates, manual urgent updates for critical changes",
      residual: "Low — typically <24 hours for critical updates"
    },
    {
      category: "Novel Drug Interactions",
      risk: "Newly discovered drug interactions not yet in database",
      mitigation: "Conservative interaction screening, physician clinical judgment",
      residual: "Low-Medium — relies on clinical expertise for novel interactions"
    },
    {
      category: "Input Data Quality",
      risk: "Incorrect patient data entry affecting all downstream decisions",
      mitigation: "Data validation checks, physician verification prompts",
      residual: "Medium — garbage-in-garbage-out principle applies"
    },
    {
      category: "Rare Medical Scenarios",
      risk: "Edge cases not covered in training or validation data",
      mitigation: "Conservative approach, mandatory physician review for low-confidence cases",
      residual: "Low-Medium — system designed to fail safe"
    },
    {
      category: "Technical Infrastructure",
      risk: "System failures, connectivity issues, hardware problems",
      mitigation: "Offline mode, degraded mode operation, manual fallback procedures",
      residual: "Low — multiple backup systems and manual procedures"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'MAJOR':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'MINOR':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <>
      <Helmet>
        <title>SeaScope CDS Safety Case - Comprehensive Failure Mode Analysis</title>
        <meta name="description" content="Complete safety case documentation for SeaScope CDS including detailed failure mode analysis for all seven guardrails and residual risk assessment." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Confidential Badge */}
      <div className="fixed top-4 right-4 z-40 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-red-500/50">
        CONFIDENTIAL — Shared under NDA
      </div>

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
                <FileText className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Safety Case Document</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Safety Case — Failure Mode Analysis
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-xl text-teal-200 leading-relaxed">
                Comprehensive analysis of potential failure modes, mitigation strategies, and residual risks 
                for all safety-critical components of SeaScope CDS.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Guardrail Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Detailed Guardrail Analysis
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each safety guardrail analyzed for potential failure modes, fallback mechanisms, and residual risk.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {guardrails.map((guardrail, index) => (
              <ScrollReveal key={guardrail.id} delay={index * 100}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                          <guardrail.icon className="w-8 h-8 text-teal-600" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-slate-900">{guardrail.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(guardrail.severity)}`}>
                            {guardrail.severity}
                          </span>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                                <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                                Function
                              </h4>
                              <p className="text-slate-600 text-sm pl-6">{guardrail.what}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                                <AlertTriangle className="w-4 h-4 text-orange-600 mr-2" />
                                Failure Mode
                              </h4>
                              <p className="text-slate-600 text-sm pl-6">{guardrail.failureMode}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                                <Shield className="w-4 h-4 text-blue-600 mr-2" />
                                Fallback Mechanism
                              </h4>
                              <p className="text-slate-600 text-sm pl-6">{guardrail.fallback}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                                <Eye className="w-4 h-4 text-purple-600 mr-2" />
                                Residual Risk
                              </h4>
                              <p className="text-slate-600 text-sm pl-6">{guardrail.residualRisk}</p>
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

      {/* Defense in Depth */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Defense in Depth
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  SeaScope CDS implements multiple independent layers of protection, ensuring that no single 
                  point of failure can compromise patient safety.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Layers className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Layered Architecture</h3>
                      <p className="text-slate-600 text-sm">Seven independent guardrails operating in parallel, each capable of stopping unsafe recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Code-Enforced Safety</h3>
                      <p className="text-slate-600 text-sm">Safety rules implemented in code, not just prompts — cannot be bypassed or ignored</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Model-Agnostic Design</h3>
                      <p className="text-slate-600 text-sm">Safety architecture independent of underlying AI model — works with any LLM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Independent Verification</h3>
                      <p className="text-slate-600 text-sm">Maverick AI peer review provides secondary validation of all recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Safety Principles</h3>
                <div className="space-y-4">
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-900">Fail-Safe Design</h4>
                    <p className="text-teal-800 text-sm">When in doubt, system errs on side of safety rather than convenience</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Redundant Protection</h4>
                    <p className="text-blue-800 text-sm">Multiple guardrails can catch the same error — no single point of failure</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Human Oversight</h4>
                    <p className="text-purple-800 text-sm">Physician remains in control with override capabilities and documentation requirements</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Residual Risk Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Residual Risk Summary
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Honest assessment of risks that remain after all mitigation strategies are implemented.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="bg-slate-50 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Risk Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Potential Risk</th>
                      <th className="px-6 py-4 text-left font-semibold">Mitigation Strategy</th>
                      <th className="px-6 py-4 text-left font-semibold">Residual Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {residualRisks.map((risk, index) => (
                      <tr key={index} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-900">{risk.category}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-600 text-sm">{risk.risk}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-600 text-sm">{risk.mitigation}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-600 text-sm font-medium">{risk.residual}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Risk Acceptance Statement</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    These residual risks are considered acceptable given the maritime medicine context, 
                    where the alternative is often no clinical decision support at all. All residual risks 
                    require ongoing physician judgment and cannot be eliminated through technological means alone.
                  </p>
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

export default function SeaScopeSafetyCase() {
  return (
    <PasswordGate correctPassword="seascope2026">
      <SeaScopeSafetyCaseContent />
    </PasswordGate>
  );
}