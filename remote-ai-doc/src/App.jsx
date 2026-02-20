import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
      badge: 'Ship Senior Doctor · Clinical AI Expert',
      title: 'Dr. Javier',
      subtitle: 'Rosas',
      highlight: 'The Remote',
      lastWord: 'AI Doc',
      description: 'Senior ship physician and medical AI evaluator specializing in clinical AI safety, LLM accuracy testing, and healthcare automation. I practice emergency medicine at sea with 40 drugs instead of 4,000 — and use that constraint to expose where AI fails clinicians.',
      cta: 'Schedule a Discovery Call',
      ctaSecondary: 'View Services',
      joinText: 'Trusted by healthcare leaders worldwide'
    },
    stats: {
      accuracyGap: 'Accuracy gap: clinical AI vs general LLMs',
      platformsEvaluated: 'AI platforms evaluated head-to-head',
      drugs: 'Drugs onboard (vs 4,000 in hospitals)',
      patients: 'Patients under care at sea',
      criteria: 'FDA prescribing criteria in rubric'
    },
    about: {
      badge: 'About',
      title: 'Not Your Typical',
      subtitle: 'AI Expert',
      para1: 'Most AI trainers work from coffee shops. I work from the middle of the ocean, practicing emergency medicine on cruise ships where the nearest hospital is days away by helicopter.',
      para2: 'This unique perspective—balancing high-stakes clinical decisions with cutting-edge AI development—gives me an insider\'s understanding of what healthcare AI actually needs to be: reliable, practical, and trustworthy when it matters most.',
      para3: 'I bridge the gap between the technical capabilities of AI and the real-world demands of medicine, training AI systems for leading platforms while staying on the front lines of patient care.'
    },
    quote: 'The question isn\'t whether AI will change medicine.',
    quoteHighlight: 'It\'s whether we\'ll know when it\'s wrong.',
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
    testimonials: {
      badge: 'Testimonials',
      title: 'What Healthcare Leaders Say',
      subtitle: 'Real results from practices using our AI automation solutions',
      items: [
        {
          name: 'Dr. María Fernández',
          role: 'Director',
          company: 'Clínica del Valle, Medellín',
          content: 'The automation saved us 12 hours per week on administrative tasks. Now our team focuses on patient care instead of paperwork.',
          rating: 5
        },
        {
          name: 'Carlos Mendoza',
          role: 'Operations Manager',
          company: 'Centro Médico San Rafael',
          content: 'Patient no-shows dropped by 40% after implementing the reminder system. The ROI was immediate and measurable.',
          rating: 5
        },
        {
          name: 'Dr. Ana Lucía Restrepo',
          role: 'Family Medicine',
          company: 'Private Practice, Bogotá',
          content: 'Our Google reviews went from 2 per month to 30+ per month. The automated collection system is seamless for patients.',
          rating: 5
        },
        {
          name: 'Roberto Jiménez',
          role: 'CEO',
          company: 'Red Salud Digital',
          content: 'We saw positive ROI within the first month. The clinical AI expertise made all the difference in implementation success.',
          rating: 5
        }
      ]
    },
    cta: {
      title: 'Ready to implement clinical AI safely?',
      description: 'Let\'s discuss how AI evaluation, training, and implementation can transform your healthcare organization — with the rigor it demands.',
      button: 'Schedule a Discovery Call',
      secondaryButton: 'Subscribe to Newsletter',
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
      badge: 'Médico Senior de Barco · Experto en IA Clínica',
      title: 'Dr. Javier',
      subtitle: 'Rosas',
      highlight: 'The Remote',
      lastWord: 'AI Doc',
      description: 'Médico senior de barco y evaluador de IA médica especializado en seguridad de IA clínica, pruebas de precisión de LLMs y automatización en salud. Practico medicina de emergencia en el mar con 40 medicamentos en lugar de 4,000 — y uso esa limitación para exponer dónde la IA falla a los médicos.',
      cta: 'Agendar Llamada de Descubrimiento',
      ctaSecondary: 'Ver Servicios',
      joinText: 'Confiado por líderes de salud a nivel mundial'
    },
    stats: {
      accuracyGap: 'Brecha de precisión: IA clínica vs LLMs generales',
      platformsEvaluated: 'Plataformas de IA evaluadas cara a cara',
      drugs: 'Medicamentos a bordo (vs 4,000 en hospitales)',
      patients: 'Pacientes bajo cuidado en el mar',
      criteria: 'Criterios de prescripción FDA en rúbrica'
    },
    about: {
      badge: 'Acerca de',
      title: 'No Soy el Típico',
      subtitle: 'Experto en IA',
      para1: 'La mayoría de entrenadores de IA trabajan desde cafeterías. Yo trabajo desde el medio del océano, practicando medicina de emergencia en cruceros donde el hospital más cercano está a días de distancia en helicóptero.',
      para2: 'Esta perspectiva única—equilibrando decisiones clínicas de alto riesgo con desarrollo de IA de vanguardia—me da una comprensión interna de lo que la IA médica realmente necesita ser: confiable, práctica y digna de confianza cuando más importa.',
      para3: 'Construyo el puente entre las capacidades técnicas de la IA y las demandas del mundo real de la medicina, entrenando sistemas de IA para plataformas líderes mientras permanezco en primera línea del cuidado de pacientes.'
    },
    quote: 'La pregunta no es si la IA cambiará la medicina.',
    quoteHighlight: 'Es si sabremos cuándo se equivoca.',
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
    testimonials: {
      badge: 'Testimonios',
      title: 'Lo Que Dicen los Líderes en Salud',
      subtitle: 'Resultados reales de consultorios usando nuestras soluciones de automatización con IA',
      items: [
        {
          name: 'Dr. María Fernández',
          role: 'Directora',
          company: 'Clínica del Valle, Medellín',
          content: 'La automatización nos ahorró 12 horas semanales en tareas administrativas. Ahora nuestro equipo se enfoca en la atención al paciente en lugar del papeleo.',
          rating: 5
        },
        {
          name: 'Carlos Mendoza',
          role: 'Gerente de Operaciones',
          company: 'Centro Médico San Rafael',
          content: 'Las inasistencias de pacientes se redujeron 40% después de implementar el sistema de recordatorios. El ROI fue inmediato y medible.',
          rating: 5
        },
        {
          name: 'Dr. Ana Lucía Restrepo',
          role: 'Medicina Familiar',
          company: 'Consulta Privada, Bogotá',
          content: 'Nuestras reseñas de Google pasaron de 2 por mes a más de 30 por mes. El sistema de recolección automatizada es perfecto para los pacientes.',
          rating: 5
        },
        {
          name: 'Roberto Jiménez',
          role: 'CEO',
          company: 'Red Salud Digital',
          content: 'Vimos ROI positivo dentro del primer mes. La experiencia en IA clínica marcó toda la diferencia en el éxito de la implementación.',
          rating: 5
        }
      ]
    },
    cta: {
      title: '¿Listo para implementar IA clínica de forma segura?',
      description: 'Hablemos de cómo la evaluación, entrenamiento e implementación de IA puede transformar tu organización de salud — con el rigor que exige.',
      button: 'Agendar Llamada de Descubrimiento',
      secondaryButton: 'Suscribirse al Boletín',
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

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200" style={{ WebkitBackdropFilter: 'blur(8px)' }}>
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
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.expertise}
              </button>
              <Link 
                to="/services" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/demo" 
                className="relative px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors duration-300 font-medium border border-teal-200"
              >
                <span className="relative flex items-center space-x-2">
                  <span className="relative inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse">
                    <span className="absolute inset-0 w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
                  </span>
                  <span>{t.nav.demo}</span>
                </span>
              </Link>
              <button 
                onClick={() => scrollToSection('connect')}
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.connect}
              </button>
              <Link 
                to="/blog" 
                className="text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {t.nav.blog}
              </Link>
              {/* Language toggle - desktop only (inline) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-600 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{t.nav.language}</span>
              </button>
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
              className="md:hidden relative z-50 p-3 -mr-2 text-slate-600 active:text-teal-600 transition-colors duration-150"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="space-y-1">
              <button 
                onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => { scrollToSection('expertise'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.expertise}
              </button>
              <Link 
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-3 px-2 text-teal-700 active:bg-teal-50 rounded-lg transition-colors duration-150 font-semibold text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                <span className="relative inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse">
                  <span className="absolute inset-0 w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
                </span>
                <span>{t.nav.demo}</span>
              </Link>
              <button 
                onClick={() => { scrollToSection('connect'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.connect}
              </button>
              <Link 
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.blog}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 w-full text-left py-3 px-2 text-slate-600 active:text-teal-600 active:bg-teal-50 rounded-lg transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                <Globe className="w-5 h-5" />
                <span>{t.nav.language}</span>
              </button>
              <button
                onClick={() => { window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' }); setMobileMenuOpen(false); }}
                className="w-full mt-3 px-6 py-4 bg-teal-600 text-white rounded-lg active:bg-teal-700 transition-colors duration-150 font-medium text-lg"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {t.nav.bookCall}
              </button>
            </div>
          </div>
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
      <Helmet>
        <title>Dr. Javier Rosas | Clinical AI Safety & Healthcare AI Evaluation | The Remote AI Doc</title>
        <meta name="description" content="Senior ship physician and medical AI evaluator. Specializing in clinical AI safety, LLM accuracy testing, and healthcare automation. 6-platform AI evaluation study. Book a discovery call." />
        <meta name="keywords" content="clinical AI safety, healthcare AI evaluation, medical AI trainer, ship physician, LLM accuracy testing, healthcare automation, remote medicine AI" />
        <link rel="canonical" href="https://theremoteaidoc.com" />
        <meta property="og:title" content="Dr. Javier Rosas | Clinical AI Safety & Healthcare AI Evaluation | The Remote AI Doc" />
        <meta property="og:description" content="Senior ship physician and medical AI evaluator. Specializing in clinical AI safety, LLM accuracy testing, and healthcare automation. 6-platform AI evaluation study. Book a discovery call." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com" />
        <meta property="og:image" content="https://theremoteaidoc.com/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Javier Rosas | Clinical AI Safety & Healthcare AI Evaluation | The Remote AI Doc" />
        <meta name="twitter:description" content="Senior ship physician and medical AI evaluator. Specializing in clinical AI safety, LLM accuracy testing, and healthcare automation. 6-platform AI evaluation study. Book a discovery call." />
        <meta name="twitter:image" content="https://theremoteaidoc.com/profile.jpg" />
      </Helmet>
      
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
                <div className="flex flex-col gap-4 max-w-md w-full">
                  <button
                    onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                    className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group font-semibold text-lg shadow-lg shadow-teal-600/20"
                  >
                    <span>{t.hero.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link
                    to="/services"
                    className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-all duration-300 flex items-center justify-center font-medium text-lg bg-white/80 backdrop-blur-sm"
                  >
                    {t.hero.ctaSecondary}
                  </Link>
                </div>
                <p className="text-sm text-slate-500 mt-6">{t.hero.joinText}</p>
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
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg p-3 shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <div className="absolute inset-0 w-2 h-2 bg-teal-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900">Dr. Javier Rosas</p>
                        <p className="text-xs text-slate-600">{t.hero.badge}</p>
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
                  2.4x
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.accuracyGap}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  6
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.platformsEvaluated}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  40
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.drugs}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  6,000
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.patients}</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl lg:text-5xl text-teal-600 font-bold">
                  20
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.stats.criteria}</div>
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
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
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
      <section id="expertise" className="relative py-20 bg-white">
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
                <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/10 transition-all duration-500">
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
                <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/10 transition-all duration-500">
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
                <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/10 transition-all duration-500">
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
                <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/10 transition-all duration-500">
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

      {/* Testimonials Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <ScrollReveal>
              <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">{t.testimonials.badge}</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">{t.testimonials.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg shadow-teal-500/10 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-500">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-teal-500 fill-teal-500" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10">
                      <span className="text-teal-600 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to br, rgba(13, 148, 136, 0.85), rgba(15, 118, 110, 0.9)),
            url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80')
          `
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-12 lg:p-16 text-white text-center overflow-hidden">
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                    className="px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group shadow-lg"
                  >
                    <span>{t.cta.button}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={() => window.open('https://theremoteaidoc.com/blog', '_self')}
                    className="px-8 py-4 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                  >
                    {t.cta.secondaryButton}
                  </button>
                </div>
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