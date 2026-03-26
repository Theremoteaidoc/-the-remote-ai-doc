import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '../components/ScrollReveal';
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
  Layers,
  Map,
  Pill,
  Heart,
  Monitor,
  Wifi,
  WifiOff,
  ExternalLink,
  Crosshair,
  Play
} from 'lucide-react';

/* ── Animated counter hook ── */
function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) { setStarted(true); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return { count, ref };
}

/* ── Stat counter component ── */
function StatCounter({ value, suffix = '', label, icon: Icon }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-12 h-12 mx-auto mb-3 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-500">
        <Icon className="w-6 h-6 text-teal-400" />
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm text-teal-200/70 tracking-wide uppercase">{label}</div>
    </div>
  );
}

function SeaScopeContent() {
  return (
    <>
      <Helmet>
        <title>SeaScope CDS - Clinical Decision Support for Resource-Constrained Medicine</title>
        <meta name="description" content="AI-powered clinical decision support purpose-built for maritime and resource-constrained medicine environments." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <SeaScopeNav />

      {/* ── Inline keyframes for animations ── */}
      <style>{`
        @keyframes heroGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes scan-line {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.15); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.3); }
        }
        .hero-animated-bg {
          background: linear-gradient(-45deg, #0f172a, #134e4a, #0f172a, #1e3a5f);
          background-size: 400% 400%;
          animation: heroGradient 15s ease infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #5eead4 50%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .device-frame {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .feature-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-animated-bg relative pt-24 pb-24 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 text-teal-400 mb-6 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                <Ship className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Remote AiD Medical</span>
                <span className="w-2 h-2 bg-teal-400 rounded-full" style={{ animation: 'pulse-ring 2s ease-in-out infinite' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                <span className="shimmer-text">SeaScope</span> CDS
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-2xl lg:text-3xl text-teal-200 mb-4 font-light">
                Safety-First Clinical AI for Maritime and Remote Medicine
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                SeaScope CDS now combines rapid-intake workflow UX, severity-first decision surfaces,
                expanded protocol/guideline coverage, and auditable safety guardrails built for ships,
                remote clinics, and disconnected tactical settings.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.seascope.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-105"
                >
                  <span>Launch App</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={() => window.open('https://calendar.app.google/wp1bE9Q9yo3UKB1x7', '_blank')}
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Animated Stats Bar ── */}
      <section className="relative -mt-8 z-10 max-w-5xl mx-auto px-6">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={50} label="Clinical Protocols" icon={Layers} />
            <StatCounter value={15} suffix="+" label="Guideline Families" icon={FileCheck} />
            <StatCounter value={21} label="Clinical Calculators" icon={Heart} />
            <StatCounter value={7} label="Safety Guardrails" icon={Shield} />
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

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">The Solution</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Safer Than Unguarded ChatGPT
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-teal-100 max-w-3xl mx-auto">
                Your physicians are already using ChatGPT at 3 AM. SeaScope gives them a purpose-built
                alternative with safety guardrails, formulary awareness, and clinical audit trails.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reduces Cognitive Load</h3>
                <p className="text-white/70 leading-relaxed">
                  At 3 AM when a physician is alone with a complex case, SeaScope provides structured
                  clinical reasoning—drug selection, dosing, interactions—so they can focus on the patient.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prevents Medication Errors</h3>
                <p className="text-white/70 leading-relaxed">
                  Formulary verification ensures only onboard medications are recommended. Allergy
                  cross-checking, interaction screening, and dose validation catch errors before they reach the patient.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Auditable Decision Trails</h3>
                <p className="text-white/70 leading-relaxed">
                  Every recommendation, safety check, and physician action is logged in a comprehensive audit
                  database—creating complete medicolegal documentation for every encounter.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Standardizes Care Quality</h3>
                <p className="text-white/70 leading-relaxed">
                  Whether a physician has 2 years or 20 years of maritime experience, SeaScope ensures
                  consistent, evidence-based recommendations across every ship and every shift.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-teal-100 max-w-3xl mx-auto">
                <span className="font-semibold text-white">Every recommendation</span> undergoes multiple
                independent safety checks before presentation to clinicians. Safety is architectural, not probabilistic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRODUCT SHOWCASE — Animated Feature Displays
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 text-teal-400 mb-4 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                <Monitor className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wider uppercase">Product Showcase</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Built for Real Clinical Workflows
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Every feature designed by a practicing ship physician. See SeaScope CDS in action.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Live Walkthrough Video ── */}
          <ScrollReveal delay={300}>
            <div className="mb-20">
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Play className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">Live Walkthrough — Acute STEMI Case</span>
              </div>
              <div className="device-frame relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900 max-w-5xl mx-auto">
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                      app.seascope.tech — Live Clinical Assessment
                    </div>
                  </div>
                </div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.loom.com/embed/7209e8813f08437b8b162f3e705214ea?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="SeaScope CDS Live Walkthrough - Acute Inferior STEMI Case"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-slate-500 mt-4">
                62-year-old male with acute inferior STEMI on Voyager of the Seas near New Caledonia. Watch the full clinical decision support workflow including AI analysis, port diversion recommendation, and safety guardrail demonstration.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Feature 1: 3D Satellite Maps ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <Map className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wider uppercase">3D Satellite Maps</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Real-Time Maritime Situational Awareness
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Full 3D globe visualization with satellite imagery, terrain elevation,
                  and real-time vessel tracking. See nearest ports with medical levels, helicopter
                  range circles, and medevac routing overlays.
                </p>
                <div className="space-y-3">
                  {['GPS vessel position with AIS ship tracking', '3D terrain with ocean topography', 'Nearest ports with medical capability levels', 'Helicopter medevac feasibility overlay'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="device-frame relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900">
                {/* Browser chrome */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                      app.seascope.tech
                    </div>
                  </div>
                </div>
                <img
                  src="/images/seascope/seascope-maritime.png"
                  alt="SeaScope CDS maritime mode — Voyager of the Seas near New Caledonia with satellite telemetry, AIS ship tracking, sea conditions, and patient assessment panel"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* ── Feature 2: Renewed Decision Surface UX ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="device-frame relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900">
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                      app.seascope.tech — Workflow Decision Surface
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {/* Simulated workflow surfaces */}
                  {[
                    { name: 'Rapid Intake', score: 'Ready', severity: 'Urgent-first dataset captured', color: '#22C55E' },
                    { name: 'Severity Signals', score: 'NEWS 18', severity: 'High clinical risk surfaced early', color: '#EF4444' },
                    { name: 'Transfer Decision', score: 'Evacuate', severity: 'Unified recommendation module', color: '#F59E0B' },
                    { name: 'Monitoring Plan', score: 'Structured', severity: 'Target / alarm / action format', color: '#60A5FA' },
                    { name: 'Evidence Panel', score: 'Linked', severity: 'Guideline + source traceability', color: '#A78BFA' },
                  ].map((surface, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-white font-medium">{surface.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-mono text-slate-300">{surface.score}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${surface.color}20`, color: surface.color, border: `1px solid ${surface.color}40` }}>
                          {surface.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-500">Redesigned UI/UX mirrors real onboard decision workflow</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <Monitor className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wider uppercase">Renewed UX</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Decision Surfaces Built for Clinical Action
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  SeaScope's latest interface prioritizes what matters under pressure: rapid intake completion,
                  severity signals near key findings, unified transfer logic, structured monitoring, and evidence
                  visibility without forcing clinicians to hunt through long narrative output.
                </p>
                <div className="space-y-3">
                  {[
                    'Rapid intake shell with compact KPI readiness indicators',
                    'Severity calculators surfaced at the top of results for fast triage',
                    'Transfer decision merged into one coherent evacuation module',
                    'Monitoring cards structured by target, alarm threshold, and response action',
                    'Evidence and guideline citations kept visible for regulatory confidence',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Feature 3: Offline + Safety ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <WifiOff className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wider uppercase">Offline-First PWA</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Safety Never Depends on Connectivity
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Full formulary, clinical guidelines, and protocol engine cached locally via
                  Progressive Web App technology. When satellite goes down mid-ocean,
                  SeaScope keeps working.
                </p>
                <div className="space-y-3">
                  {['Complete offline functionality via PWA', 'Persistent local data storage', 'Full medication formulary cached locally', 'Automatic sync when connectivity returns'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="device-frame relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900">
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                      app.seascope.tech — Safety Pipeline
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Safety pipeline visualization */}
                  {[
                    { label: 'Allergy Cross-Check', icon: Shield, status: 'PASS', color: '#22C55E' },
                    { label: 'Drug Interactions', icon: AlertTriangle, status: 'PASS', color: '#22C55E' },
                    { label: 'Dose Ceiling Check', icon: Lock, status: 'PASS', color: '#22C55E' },
                    { label: 'Formulary Verification', icon: Database, status: 'PASS', color: '#22C55E' },
                    { label: 'Indication-Efficacy', icon: Target, status: 'PASS', color: '#22C55E' },
                    { label: 'Renal Dosing', icon: Activity, status: 'PASS', color: '#22C55E' },
                    { label: 'Pregnancy Safety', icon: Heart, status: 'PASS', color: '#22C55E' },
                  ].map((check, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <check.icon className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-slate-300">{check.label}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${check.color}15`, color: check.color, border: `1px solid ${check.color}30` }}>
                        {check.status}
                      </span>
                    </div>
                  ))}
                  <div className="text-center pt-1 text-[10px] text-green-400/70 font-mono">
                    ALL 7 GUARDRAILS PASSED — RECOMMENDATION CLEARED
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Feature 4: Tactical / Military Mode ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="device-frame relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900">
                <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                      app.seascope.tech — ROLE 1 BAS / TCCC
                    </div>
                  </div>
                </div>
                <img
                  src="/images/seascope/seascope-tactical.png"
                  alt="SeaScope CDS tactical military mode — TCCC casualty assessment with GSW case, tactical medical map near Darwin Australia, MEDEVAC status, and triage priority system"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <Crosshair className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wider uppercase">Tactical Medicine</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  From Cruise Ships to Forward Operating Bases
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  The same clinical decision engine adapts to austere military environments.
                  TCCC-aligned casualty assessment, tactical medical maps, MEDEVAC coordination,
                  and offline-first architecture for disconnected operations.
                </p>
                <div className="space-y-3">
                  {['TCCC casualty assessment with triage priority', 'Tactical medical map with FOB and Role 1-3 facilities', 'MEDEVAC status with helicopter feasibility', 'Full offline capability for disconnected operations'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Protocol + Guideline Expansion Proof ── */}
          <div className="mt-24 rounded-3xl border border-teal-500/20 bg-slate-900/70 backdrop-blur-sm p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 text-teal-400 mb-3 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                <FileCheck className="w-4 h-4" />
                <span className="text-xs font-medium tracking-wider uppercase">Clinical Coverage Expansion</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Protocol Library Expanded and Safety-Validated
              </h3>
              <p className="text-slate-400 max-w-3xl mx-auto">
                SeaScope CDS v2.0 expanded from 20 to 50 protocols with stronger guideline
                coverage and a clean safety record where it matters most in clinical deployment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Clinical Protocols', value: '50', note: 'Expanded from 20 (+150%)' },
                { label: 'Guideline Families', value: '15+', note: '2024-2026 evidence coverage' },
                { label: 'Drug Guidance Rules', value: '222', note: 'Validated recommendation knowledge' },
                { label: 'Safety Guardrails', value: '7', note: 'Layered checks before recommendation' },
                { label: 'Care Domains', value: '5+', note: 'Sepsis, cardiac, respiratory, neuro, endocrine' },
                { label: 'Critical Safety Failures', value: '0', note: 'Production-readiness milestone' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
                  <div className="text-3xl font-bold text-teal-300 mt-1">{item.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                <div className="font-semibold text-white mb-2">What Changed Recently</div>
                <ul className="space-y-1.5">
                  <li>• Protocol library scaled for broader maritime and remote scenarios</li>
                  <li>• Guideline mapping refreshed to current evidence windows</li>
                  <li>• Results UX rebuilt around high-signal decision surfaces</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                <div className="font-semibold text-white mb-2">Why It Matters Clinically</div>
                <ul className="space-y-1.5">
                  <li>• Faster triage decisions under time and bandwidth constraints</li>
                  <li>• Better recommendation traceability for safety and audit</li>
                  <li>• More consistent care quality across distributed clinicians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
              <Layers className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">Documentation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Detailed Documentation Available
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Comprehensive technical documentation covering clinical validation, safety architecture,
              regulatory compliance, and implementation details is available under NDA.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileCheck className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">Evidence & Validation</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">Safety & Regulatory</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">Technical Architecture</div>
                </div>
              </div>
              <a
                href="mailto:javier@theremoteaidoc.com?subject=SeaScope%20CDS%20Documentation%20Request"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold group"
              >
                <Mail className="w-5 h-5" />
                <span>Request Documentation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-teal-600 mb-2">
                  <Stethoscope className="w-6 h-6" />
                  <span className="text-sm font-medium tracking-wider uppercase">Built by a Practicing Ship Physician</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Dr. Javier Rosas
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  SeaScope CDS was created by a physician who lives this reality daily—not by
                  engineers guessing what clinicians need from a Silicon Valley office.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Senior Ship Physician, Royal Caribbean International</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Chair, AI Committee — American Board of Maritime Medicine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Author, "AI Literacy for Clinicians" (Amazon, March 2026)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">RLHF Trainer across 4 frontier AI companies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">10+ Years Emergency & Maritime Medicine</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Clinical Adoption Program</h3>
                  <p className="text-slate-600 mb-4">
                    SeaScope CDS is being rolled out with practicing maritime clinicians to strengthen
                    decision quality in high-pressure, resource-constrained settings.
                  </p>
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <div className="text-sm text-teal-800 font-medium">Deployment Focus</div>
                    <div className="text-sm font-semibold text-teal-900 mt-1">Safety, consistency, and operational speed across distributed clinical teams</div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Safety Commitment</h3>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Critical safety failures</span>
                      <span className="font-semibold text-slate-900">0 in milestone validation</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guardrails before recommendations</span>
                      <span className="font-semibold text-slate-900">7 layered safety checks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clinical protocol coverage</span>
                      <span className="font-semibold text-slate-900">50 protocols</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guideline families represented</span>
                      <span className="font-semibold text-slate-900">15+ major standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration & Roadmap */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
                <Globe className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Integration & Roadmap</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Designed to Complement, Not Replace
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                SeaScope integrates alongside current clinical workflows. Physicians make their normal
                clinical decisions while SeaScope provides parallel recommendations for comparison and validation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">50-Protocol Library</h3>
                <p className="text-sm text-slate-600">Expanded coverage for maritime and remote medicine pathways</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">15+ Guideline Families</h3>
                <p className="text-sm text-slate-600">Mapped to current evidence standards with citation traceability</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">222 Drug Guidance Rules</h3>
                <p className="text-sm text-slate-600">Validated dosing, interaction, contraindication, and safety logic</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Offline Protocols</h3>
                <p className="text-sm text-slate-600">Embedded protocol engine for satellite-down scenarios — safety never depends on connectivity</p>
              </div>
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
                onClick={() => window.open('https://calendar.app.google/wp1bE9Q9yo3UKB1x7', '_blank')}
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
            Last Updated: March 2026
          </p>
        </div>
      </section>
    </>
  );
}

export default function SeaScope() {
  return <SeaScopeContent />;
}