import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Star, ArrowRight, Linkedin, Twitter, Youtube, Stethoscope, Brain, Ship, BookOpen, Globe, Menu, X } from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import Servicios from './pages/Servicios';
import Demo from './pages/Demo';

// Language context for global state management
const languages = {
  en: {
    nav: {
      about: 'About',
      expertise: 'Expertise', 
      services: 'Services',
      demo: 'Live Demo',
      connect: 'Connect',
      blog: 'Blog',
      bookCall: 'Book a Call',
      language: 'Español'
    },
    hero: {
      badge: 'Your Guide to Clinical AI from the Edge of Medicine',
      title: 'Redefining',
      subtitle: 'the Future of',
      highlight: 'Clinical',
      lastWord: 'AI',
      description: 'I practice medicine 1,000 miles from the nearest hospital — and I train the AI systems that will help the next generation of doctors do the same.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      joinText: 'Join 100+ healthcare professionals'
    },
    stats: {
      miles: 'Miles from Shore',
      patients: 'Patients Treated at Sea',
      experience: 'Years Clinical Exp',
      platforms: 'AI Training Platforms',
      cases: 'Clinical LLM Cases'
    },
    about: {
      badge: 'About',
      title: 'Not Your Typical',
      subtitle: 'AI Expert',
      para1: 'Most AI trainers work from coffee shops. I work from the middle of the ocean, practicing emergency medicine on cruise ships where the nearest hospital is days away by helicopter.',
      para2: 'This unique perspective—balancing high-stakes clinical decisions with cutting-edge AI development—gives me an insider\'s understanding of what healthcare AI actually needs to be: reliable, practical, and trustworthy when it matters most.',
      para3: 'I bridge the gap between the technical capabilities of AI and the real-world demands of medicine, training AI systems for leading platforms while staying on the front lines of patient care.'
    },
    quote: 'When you\'re the only doctor for thousands of people,',
    quoteHighlight: 'AI isn\'t a luxury — it\'s survival.',
    expertise: {
      badge: 'Expertise',
      title: 'What I Bring',
      clinical: {
        title: 'Clinical Practice',
        items: [
          'Ship Physician, Royal Caribbean',
          '10+ Years Emergency & Maritime Medicine', 
          'High-stakes decision making in isolation'
        ]
      },
      ai: {
        title: 'AI Training & Evaluation',
        items: [
          'Medical AI Trainer — Mercor AI, Micro1, Pareto, Alignerr',
          'RLHF & Prompt Engineering',
          'Clinical Peer Reviewer'
        ]
      },
      remote: {
        title: 'Remote Medicine',
        items: [
          'Practicing 1,000+ miles from hospitals',
          'Telemedicine & AI-assisted diagnosis',
          'Resource-limited healthcare solutions'
        ]
      },
      content: {
        title: 'Healthcare AI Content',
        items: [
          'Clinical AI tool reviews',
          'Practical implementation guides',
          'Future of medicine insights'
        ]
      }
    },
    connect: {
      badge: 'Connect',
      title: 'Let\'s Connect',
      description: 'Follow along as I navigate the intersection of remote medicine and artificial intelligence'
    },
    cta: {
      title: 'Ready to explore the future of clinical AI?',
      description: 'Join my weekly newsletter for practical insights on healthcare AI, remote medicine, and the tools shaping tomorrow\'s clinical practice.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe'
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact'
    }
  },
  es: {
    nav: {
      about: 'Acerca de',
      expertise: 'Experiencia',
      services: 'Servicios',
      demo: 'Demo en Vivo',
      connect: 'Contacto',
      blog: 'Blog',
      bookCall: 'Agendar Llamada',
      language: 'English'
    },
    hero: {
      badge: 'Tu Guía de IA Clínica desde el Borde de la Medicina',
      title: 'Redefiniendo',
      subtitle: 'el Futuro de la',
      highlight: 'IA',
      lastWord: 'Clínica',
      description: 'Practico medicina a 1,000 millas del hospital más cercano — y entreno los sistemas de IA que ayudarán a la próxima generación de médicos a hacer lo mismo.',
      emailPlaceholder: 'Ingresa tu email',
      subscribe: 'Suscribirse',
      joinText: 'Únete a 100+ profesionales de la salud'
    },
    stats: {
      miles: 'Millas de la Costa',
      patients: 'Pacientes Tratados en el Mar',
      experience: 'Años Experiencia Clínica',
      platforms: 'Plataformas de Entrenamiento IA',
      cases: 'Casos Clínicos LLM'
    },
    about: {
      badge: 'Acerca de',
      title: 'No Soy el Típico',
      subtitle: 'Experto en IA',
      para1: 'La mayoría de entrenadores de IA trabajan desde cafeterías. Yo trabajo desde el medio del océano, practicando medicina de emergencia en cruceros donde el hospital más cercano está a días de distancia en helicóptero.',
      para2: 'Esta perspectiva única—equilibrando decisiones clínicas de alto riesgo con desarrollo de IA de vanguardia—me da una comprensión interna de lo que la IA médica realmente necesita ser: confiable, práctica y digna de confianza cuando más importa.',
      para3: 'Construyo el puente entre las capacidades técnicas de la IA y las demandas del mundo real de la medicina, entrenando sistemas de IA para plataformas líderes mientras permanezco en primera línea del cuidado de pacientes.'
    },
    quote: 'Cuando eres el único médico para miles de personas,',
    quoteHighlight: 'la IA no es un lujo — es supervivencia.',
    expertise: {
      badge: 'Experiencia',
      title: 'Lo Que Aporto',
      clinical: {
        title: 'Práctica Clínica',
        items: [
          'Médico de Barco, Royal Caribbean',
          '10+ Años Medicina de Emergencia y Marítima',
          'Toma de decisiones de alto riesgo en aislamiento'
        ]
      },
      ai: {
        title: 'Entrenamiento y Evaluación de IA',
        items: [
          'Entrenador de IA Médica — Mercor AI, Micro1, Pareto, Alignerr',
          'RLHF e Ingeniería de Prompts',
          'Revisor Clínico de Pares'
        ]
      },
      remote: {
        title: 'Medicina Remota',
        items: [
          'Practicando a 1,000+ millas de hospitales',
          'Telemedicina y diagnóstico asistido por IA',
          'Soluciones de atención médica con recursos limitados'
        ]
      },
      content: {
        title: 'Contenido de IA Médica',
        items: [
          'Revisiones de herramientas de IA clínica',
          'Guías de implementación práctica',
          'Perspectivas del futuro de la medicina'
        ]
      }
    },
    connect: {
      badge: 'Contacto',
      title: 'Conectemos',
      description: 'Sígueme mientras navego la intersección de medicina remota e inteligencia artificial'
    },
    cta: {
      title: '¿Listo para explorar el futuro de la IA clínica?',
      description: 'Únete a mi boletín semanal para conocimientos prácticos sobre IA médica, medicina remota y las herramientas que moldean la práctica clínica del mañana.',
      emailPlaceholder: 'Ingresa tu email',
      subscribe: 'Suscribirse'
    },
    footer: {
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto'
    }
  }
};

function Layout({ children }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const t = languages[currentLang];

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'es' : 'en');
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Global language toggle - fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 hover:text-teal-600 hover:border-teal-200 transition-all duration-300 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{t.nav.language}</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-teal-600">Remote</span>
                <span className="text-slate-800">AIDoc</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/#about" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/#expertise" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.expertise}
              </Link>
              <Link 
                to="/services" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/demo" 
                className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors duration-300 font-medium border border-teal-200"
              >
                {t.nav.demo}
              </Link>
              <Link 
                to="/#connect" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.connect}
              </Link>
              <Link 
                to="/blog" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.blog}
              </Link>
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 font-medium shadow-sm"
              >
                {t.nav.bookCall}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4 space-y-4">
              <Link 
                to="/#about" 
                className="block py-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/#expertise" 
                className="block py-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.expertise}
              </Link>
              <Link 
                to="/services" 
                className="block py-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/demo" 
                className="block py-2 text-teal-700 font-semibold"
              >
                {t.nav.demo}
              </Link>
              <Link 
                to="/#connect" 
                className="block py-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.connect}
              </Link>
              <Link 
                to="/blog" 
                className="block py-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.blog}
              </Link>
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                className="w-full mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
              >
                {t.nav.bookCall}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative">
        {typeof children === 'object' && children !== null
          ? React.Children.map(children, child =>
              React.isValidElement(child)
                ? React.cloneElement(child, { currentLang, t })
                : child
            )
          : children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                <span className="text-teal-600">Remote</span>
                <span className="text-slate-800">AIDoc</span>
              </span>
              <span className="text-slate-500">© 2026</span>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <a href="#privacy" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">{t.footer.privacy}</a>
              <a href="#terms" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">{t.footer.terms}</a>
              <a href="#contact" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">{t.footer.contact}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home({ currentLang, t }) {
  const [email, setEmail] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');

  const handleSubscribe = (e, emailValue) => {
    e.preventDefault();
    console.log('Subscribe:', emailValue);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-br from-white to-slate-50">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <ScrollReveal>
                <div className="flex items-center space-x-2 text-teal-600">
                  <Star className="w-4 h-4 fill-teal-600" />
                  <span className="text-sm font-medium">{t.hero.badge}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                  {t.hero.title}<br />
                  <span className="text-slate-600">{t.hero.subtitle}</span><br />
                  <span className="relative inline-block text-teal-600">
                    {t.hero.highlight}
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-200 rounded-full" />
                  </span> {t.hero.lastWord}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <form onSubmit={(e) => handleSubscribe(e, email)} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.hero.emailPlaceholder}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium"
                  >
                    <span>{t.hero.subscribe}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
                <p className="text-sm text-slate-500 mt-3">{t.hero.joinText}</p>
              </ScrollReveal>
            </div>

            {/* Right Column - Photo */}
            <ScrollReveal delay={200} className="relative">
              <div className="relative">
                {/* Subtle glow behind photo */}
                <div className="absolute inset-0 bg-teal-100 blur-3xl rounded-2xl opacity-30 translate-y-4" />

                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl aspect-[3/4] lg:aspect-[4/5] border border-slate-200">
                  {/* Actual Photo */}
                  <img
                    src="/profile.jpg"
                    alt="Dr. Javier Rosas"
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                  {/* Professional badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-teal-500 rounded-full" />
                        <div className="absolute inset-0 w-3 h-3 bg-teal-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-900">Dr. Javier Rosas</p>
                        <p className="text-sm text-slate-600">Ship Physician & AI Trainer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative border-y border-slate-200 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  1,000+
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.miles}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  5,000+
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.patients}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  10+
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.experience}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  5
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.platforms}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  100+
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.cases}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">{t.about.badge}</div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                  {t.about.title}<br />
                  <span className="text-slate-600">{t.about.subtitle}</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.about.para1}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.about.para2}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.about.para3}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 bg-white">
        <ScrollReveal>
          <p className="text-2xl md:text-3xl text-slate-700 font-light italic leading-relaxed">
            "{t.quote}
            <span className="text-teal-600 font-medium"> {t.quoteHighlight}</span>"
          </p>
        </ScrollReveal>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <ScrollReveal>
              <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">{t.expertise.badge}</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">{t.expertise.title}</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Clinical Practice Card */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-500">
                  <Stethoscope className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.expertise.clinical.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {t.expertise.clinical.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* AI Training Card */}
            <ScrollReveal delay={100}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-500">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.expertise.ai.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {t.expertise.ai.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Remote Medicine Card */}
            <ScrollReveal delay={200}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-500">
                  <Ship className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.expertise.remote.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {t.expertise.remote.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Healthcare AI Content Card */}
            <ScrollReveal delay={300}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-500">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.expertise.content.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {t.expertise.content.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="relative py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <ScrollReveal>
              <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">{t.connect.badge}</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">{t.connect.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t.connect.description}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/javier-rosas-670267b0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Linkedin className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-700 font-medium">LinkedIn</span>
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Twitter className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-700 font-medium">Twitter / X</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Youtube className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-700 font-medium">YouTube</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-12 lg:p-16 text-white text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {t.cta.title}
                </h2>
                <p className="text-lg text-teal-100 max-w-xl mx-auto">
                  {t.cta.description}
                </p>

                <form onSubmit={(e) => handleSubscribe(e, ctaEmail)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    placeholder={t.cta.emailPlaceholder}
                    className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-300 font-medium"
                  >
                    {t.cta.subscribe}
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <Services />
          </Layout>
        } />
        <Route path="/servicios" element={
          <Layout>
            <Servicios />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout>
            <Blog />
          </Layout>
        } />
        <Route path="/blog/:slug" element={
          <Layout>
            <BlogPost />
          </Layout>
        } />
        <Route path="/demo" element={
          <Layout>
            <Demo />
          </Layout>
        } />
      </Routes>
    </HelmetProvider>
  );
}