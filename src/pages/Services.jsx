import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Users, Brain, Shield, Globe, Phone, Mail, MessageSquare, BarChart, FileText, Zap, Star, Clock, HelpCircle, ChevronDown, Play, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

// Add custom CSS for animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.5s ease-out forwards;
  }
`;

// WhatsApp Demo Component
const WhatsAppDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState([]);

  const messages = [
    { type: 'patient', text: 'Hola, quiero agendar una cita para el Dr. García', delay: 1000 },
    { type: 'bot', text: '¡Hola! Con gusto te ayudo. ¿Qué día te queda mejor? 📅', delay: 2000 },
    { type: 'patient', text: 'El jueves a las 3pm', delay: 1500 },
    { type: 'bot', text: '✅ Perfecto. Tu cita con el Dr. García queda confirmada para el jueves a las 3:00 PM. Te enviaremos un recordatorio.', delay: 2500 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < messages.length) {
        const message = messages[currentStep];
        
        // Show typing indicator for bot messages
        if (message.type === 'bot') {
          setShowTyping(true);
          setTimeout(() => {
            setShowTyping(false);
            setVisibleMessages(prev => [...prev, { ...message, id: currentStep, timestamp: new Date() }]);
            setCurrentStep(prev => prev + 1);
          }, 1500);
        } else {
          setVisibleMessages(prev => [...prev, { ...message, id: currentStep, timestamp: new Date() }]);
          setCurrentStep(prev => prev + 1);
        }
      } else {
        // Reset after 8 seconds
        setTimeout(() => {
          setCurrentStep(0);
          setVisibleMessages([]);
          setShowTyping(false);
        }, 8000);
      }
    }, messages[currentStep]?.delay || 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <>
      <style>{styles}</style>
      <div className="relative max-w-sm mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl">
        <div className="bg-black rounded-2xl overflow-hidden">
          {/* WhatsApp Header */}
          <div className="bg-teal-600 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">DR</span>
            </div>
            <div className="flex-1">
              <div className="text-white font-medium text-sm">Dr. García</div>
              <div className="text-teal-100 text-xs">AutoMed Assistant</div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-gray-100 h-80 p-4 space-y-3 overflow-y-auto">
            {visibleMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'patient' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.type === 'patient'
                      ? 'bg-teal-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className={`text-xs mt-1 flex items-center justify-end space-x-1 ${
                    message.type === 'patient' ? 'text-teal-100' : 'text-gray-500'
                  }`}>
                    <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {message.type === 'patient' && (
                      <div className="flex space-x-0.5">
                        <div className="w-1 h-1 bg-teal-200 rounded-full"></div>
                        <div className="w-1 h-1 bg-teal-200 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {showTyping && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-gray-200 px-4 py-2 flex items-center space-x-3">
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <span className="text-gray-400 text-sm">Escribir mensaje...</span>
            </div>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">▶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Labels */}
      <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
        Automation en Vivo
      </div>
      <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse" style={{animationDelay: '1s'}}>
        24/7 Disponible
      </div>
    </div>
    </>
  );
};

// Bilingual content object
const content = {
  en: {
    seo: {
      title: 'AI-Powered Healthcare Automation Services | The Remote AI Doc',
      description: 'Automate your healthcare practice with AI. Patient reminders, clinical document processing, EHR integration. Built by a practicing physician.',
      canonicalUrl: 'https://theremoteaidoc.com/services'
    },
    nav: {
      language: 'Español',
      languageSwitch: 'Español'
    },
    hero: {
      badge: 'AI-Powered Healthcare Automation',
      title: 'AI-Powered Automation',
      titleHighlight: 'for Healthcare',
      subtitle: 'Bringing clinical AI expertise to automate healthcare workflows, reduce administrative burden, and improve patient outcomes, built by a doctor who practices what he automates.',
      cta: 'Schedule Discovery Call',
      demoButton: 'See Live Demo'
    },
    demoSection: {
      badge: 'Interactive Demo',
      title: 'See Automation in Action',
      subtitle: 'Experience how our AutoMed clinical automation transforms patient workflows',
      description: 'Try our interactive demo to see exactly how appointment scheduling, patient reminders, and review collection work in real medical practices.',
      tryDemo: 'Try Interactive Demo',
      viewResults: 'View Real Results'
    },
    tiers: {
      title: 'Choose Your Automation Level',
      subtitle: 'From basic workflow automation to enterprise AI solutions, all designed with clinical expertise',
      tier1: {
        name: 'Workflow Automation',
        price: '$497',
        period: 'one-time setup',
        maintenance: '+ $49.70/mo maintenance',
        badge: 'Most Popular',
        description: 'Perfect for small clinics and solo practitioners',
        features: [
          'Patient appointment reminders (WhatsApp/SMS/Email)',
          'Google Reviews auto-collection system',
          'Lead capture → automated response flows', 
          'Basic reporting dashboard',
          'Standard custom automation workflows',
          'Email & chat support'
        ],
        bestFor: 'Small clinics, solo practitioners',
        cta: 'Get Started',
        stripeLink: 'https://buy.stripe.com/test_bJe8wOeqL7Ib7ZtbtV2ZO03'
      },
      tier2: {
        name: 'Clinical Intelligence',
        price: '$997',
        period: 'one-time setup',
        maintenance: '+ $99.70/mo maintenance',
        badge: 'Best Value',
        description: 'Advanced AI for multi-provider practices',
        features: [
          'Everything in Workflow Automation',
          'Clinical document processing (intake forms, referrals)',
          'AI-powered patient triage pre-screening',
          'EHR data extraction & automated reporting',
          'Custom automation workflow development',
          'Priority support with 2-hour response'
        ],
        bestFor: 'Multi-provider practices, specialty clinics',
        cta: 'Start Now',
        stripeLink: 'https://buy.stripe.com/test_8x29AS3M71jNa7B69B2ZO04'
      },
      tier3: {
        name: 'Enterprise AI',
        price: '$2,497',
        period: 'one-time setup',
        maintenance: '+ $249.70/mo maintenance',
        badge: 'Enterprise',
        description: 'Complete AI transformation for health systems',
        features: [
          'Everything in Clinical Intelligence',
          'Custom AI agent development',
          'AI-powered clinical knowledge bases',
          'Multi-location workflow orchestration',
          'Dedicated support + monthly strategy calls',
          'HIPAA-aligned deployment consulting'
        ],
        bestFor: 'Hospital groups, health systems, maritime medical operations',
        cta: 'Get Started',
        stripeLink: 'https://buy.stripe.com/test_8x2eVcgyTe6z2F9gOf2ZO05'
      }
    },
    whyUs: {
      title: 'Why Choose The Remote AI Doc',
      subtitle: 'Built by a Doctor Who Automates His Own Practice',
      description: 'I don\'t just build AI systems, I use them every day in high-stakes clinical environments. This real-world experience ensures your automation actually works when it matters most.',
      values: [
        {
          title: 'Clinical Understanding',
          description: 'Real medical experience in high-pressure environments, 1,000 miles from shore with no backup.',
          icon: 'users'
        },
        {
          title: 'AI Expertise',
          description: 'Training AI systems for leading platforms while practicing evidence-based medicine.',
          icon: 'brain'
        },
        {
          title: 'Remote-First',
          description: 'Built for distributed teams and telehealth, tested in the most remote locations on Earth.',
          icon: 'globe'
        },
        {
          title: 'Security-Obsessed',
          description: 'SeaScope is designed to support HIPAA-aligned deployments where applicable.',
          icon: 'shield'
        }
      ]
    },
    process: {
      title: 'Our Proven Process',
      subtitle: 'From assessment to automation in 4 strategic steps',
      steps: [
        {
          number: '01',
          title: 'Discovery Call',
          description: 'Understand your workflows, pain points, and automation goals through detailed practice assessment.',
          duration: 'Tailored to your practice'
        },
        {
          number: '02',
          title: 'Audit & Strategy',
          description: 'Map inefficiencies and identify automation opportunities with clinical workflow analysis.',
          duration: 'Tailored to your practice'
        },
        {
          number: '03',
          title: 'Build & Integrate',
          description: 'Develop custom automation workflows, AI integrations, and connect with your existing systems.',
          duration: 'Tailored to your practice'
        },
        {
          number: '04',
          title: 'Optimize & Scale',
          description: 'Monitor performance, iterate based on results, and scale successful automations.',
          duration: 'Tailored to your practice'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about healthcare AI automation',
      questions: [
        {
          question: 'Is this HIPAA-aligned?',
          answer: 'SeaScope is designed to support HIPAA-aligned deployments where applicable. Data handling, retention, and BAA terms are governed by the applicable customer agreement.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Workflow Automation: 2-3 weeks. Clinical Intelligence: 3-6 weeks. Enterprise AI: 6-12 weeks. We start with quick wins and gradually implement more complex automations to ensure smooth adoption.'
        },
        {
          question: 'Will this integrate with our existing EHR?',
          answer: 'Yes. We have experience integrating with major EHR systems including Epic, Cerner, AllScripts, and others. Integration complexity varies, but we always find a way to connect your systems securely.'
        },
        {
          question: 'What if we need custom workflows?',
          answer: 'All our tiers include some level of customization. Clinical Intelligence and Enterprise tiers offer full custom workflow development using advanced automation tools tailored to your specific practice needs.'
        },
        {
          question: 'Do you provide training for our staff?',
          answer: 'Yes. We include comprehensive training for your team, plus ongoing support. Enterprise clients get monthly strategy calls to optimize workflows and explore new automation opportunities.'
        },
        {
          question: 'What makes you different from other automation companies?',
          answer: 'I\'m a practicing physician who uses these systems daily in high-stakes environments. This real-world clinical experience means your automation actually works when it matters most, not just in theory.'
        },
        {
          question: 'Can you work with international practices?',
          answer: 'Absolutely. Having worked in maritime medicine across international waters, I understand global healthcare requirements. We have experience with both US and Colombian healthcare systems.'
        },
        {
          question: 'What kind of ROI can we expect?',
          answer: 'Typical clients see 3-5x ROI within 6 months through reduced administrative costs, improved patient acquisition, and increased efficiency. We track metrics and provide monthly reports to demonstrate value.'
        }
      ]
    },
    cta: {
      title: 'Ready to Automate Your Practice?',
      subtitle: 'Book a free 30-minute discovery call to explore how AI can transform your healthcare workflows.',
      description: 'No sales pitch, just a strategic conversation about your practice\'s automation potential.',
      button: 'Book Discovery Call',
      calendlyUrl: 'https://calendly.com/theremoteaidoc/30min'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'AI-Powered Healthcare Automation Services',
      'provider': {
        '@type': 'Person',
        'name': 'Dr. Javier Rosas',
        'jobTitle': 'Ship Physician & AI Automation Expert'
      },
      'description': 'Professional healthcare automation services using AI to streamline clinical workflows, reduce administrative burden, and improve patient outcomes.',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Workflow Automation',
          'price': '497',
          'priceCurrency': 'USD',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '497',
            'priceCurrency': 'USD',
            'unitText': 'MONTH'
          }
        },
        {
          '@type': 'Offer',
          'name': 'Clinical Intelligence',
          'price': '997',
          'priceCurrency': 'USD',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '997',
            'priceCurrency': 'USD',
            'unitText': 'MONTH'
          }
        },
        {
          '@type': 'Offer',
          'name': 'Enterprise AI',
          'price': '2497',
          'priceCurrency': 'USD',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '2497',
            'priceCurrency': 'USD',
            'unitText': 'MONTH'
          }
        }
      ]
    }
  },
  es: {
    seo: {
      title: 'Servicios de Automatización Médica con IA | AutoMed Colombia',
      description: 'Automatiza tu consultorio médico con inteligencia artificial. Recordatorios, agenda, historias clínicas y más. Diseñado por médicos para médicos colombianos.',
      canonicalUrl: 'https://theremoteaidoc.com/servicios'
    },
    nav: {
      language: 'English',
      languageSwitch: 'English'
    },
    hero: {
      badge: 'Automatización Médica con IA',
      title: 'Automatización Inteligente',
      titleHighlight: 'para Consultorios',
      subtitle: 'Aplicando experiencia clínica en IA para automatizar procesos médicos, reducir carga administrativa y mejorar la atención al paciente, construido por un médico que usa lo que automatiza.',
      cta: 'Agenda tu Llamada Gratis',
      demoButton: 'Ver Demo en Vivo'
    },
    demoSection: {
      badge: 'Demo Interactivo',
      title: 'Ve la Automatización en Acción',
      subtitle: 'Experimenta cómo nuestra automatización clínica AutoMed transforma los flujos de trabajo de pacientes',
      description: 'Prueba nuestro demo interactivo para ver exactamente cómo funciona la programación de citas, recordatorios de pacientes y recolección de reseñas en consultorios médicos reales.',
      tryDemo: 'Probar Demo Interactivo',
      viewResults: 'Ver Resultados Reales'
    },
    tiers: {
      title: 'Elige Tu Nivel de Automatización',
      subtitle: 'Desde automatización básica hasta soluciones IA empresariales, todo diseñado con experiencia clínica',
      tier1: {
        name: 'Automatización de Procesos',
        price: '$2.100.000',
        period: ' COP/mes',
        badge: 'Más Popular',
        description: 'Perfecto para consultorios pequeños y médicos independientes',
        features: [
          'Recordatorios de citas (WhatsApp/SMS/Email)',
          'Sistema de recolección automática de reseñas Google',
          'Captura de pacientes → respuestas automatizadas',
          'Panel básico de reportes',
          'Flujos de trabajo personalizados estándar',
          'Soporte por email y chat'
        ],
        bestFor: 'Consultorios pequeños, médicos independientes',
        cta: 'Iniciar Automatización'
      },
      tier2: {
        name: 'Inteligencia Clínica',
        price: '$4.200.000',
        period: ' COP/mes',
        badge: 'Más Recomendado',
        description: 'IA avanzada para consultorios con varios especialistas',
        features: [
          'Todo en Automatización de Procesos',
          'Procesamiento de documentos clínicos (formularios, referencias)',
          'Pre-clasificación inteligente de pacientes',
          'Extracción de datos de historia clínica y reportes automatizados',
          'Desarrollo de flujos personalizados avanzados',
          'Soporte prioritario con respuesta en 2 horas'
        ],
        bestFor: 'Consultorios grupo médico, clínicas especializadas',
        cta: 'Mejorar a Inteligencia'
      },
      tier3: {
        name: 'IA Empresarial',
        price: '$10.500.000',
        period: ' COP/mes',
        badge: 'Empresarial',
        description: 'Transformación IA completa para sistemas de salud',
        features: [
          'Todo en Inteligencia Clínica',
          'Desarrollo de agentes IA personalizados',
          'Sistemas de conocimiento clínico con IA',
          'Coordinación de flujos multi-ubicación',
          'Soporte dedicado + llamadas estratégicas mensuales',
          'Consultoría y auditoría normativa colombiana de datos en salud'
        ],
        bestFor: 'Grupos hospitalarios, sistemas de salud, operaciones médicas remotas',
        cta: 'Transformar con IA'
      }
    },
    whyUs: {
      title: 'Por Qué Elegir The Remote AI Doc',
      subtitle: 'Construido por un Médico que Automatiza Su Propia Práctica',
      description: 'No solo construyo sistemas de IA, los uso todos los días en ambientes clínicos de alto riesgo. Esta experiencia del mundo real asegura que tu automatización realmente funcione cuando más importa.',
      values: [
        {
          title: 'Entendimiento Clínico',
          description: 'Experiencia médica real en ambientes de alta presión, 1,000 millas de la costa sin respaldo médico.',
          icon: 'users'
        },
        {
          title: 'Experiencia en IA',
          description: 'Entrenando sistemas IA para plataformas líderes mientras practico medicina basada en evidencia.',
          icon: 'brain'
        },
        {
          title: 'Medicina Remota',
          description: 'Construido para equipos distribuidos y telemedicina, probado en las ubicaciones más remotas de la Tierra.',
          icon: 'globe'
        },
        {
          title: 'Seguridad Total',
          description: 'El cumplimiento de la normativa colombiana de datos en salud está incorporado en cada proceso desde el día uno.',
          icon: 'shield'
        }
      ]
    },
    process: {
      title: 'Nuestro Proceso Comprobado',
      subtitle: 'De evaluación a automatización en 4 pasos estratégicos',
      steps: [
        {
          number: '01',
          title: 'Llamada Gratuita',
          description: 'Entendemos tus procesos clínicos, puntos de dolor y objetivos de automatización a través de evaluación detallada.',
          duration: 'Adaptado a tu consultorio'
        },
        {
          number: '02',
          title: 'Auditoría y Estrategia',
          description: 'Mapeamos ineficiencias e identificamos oportunidades de automatización con análisis de flujos clínicos.',
          duration: 'Adaptado a tu consultorio'
        },
        {
          number: '03',
          title: 'Construir e Integrar',
          description: 'Desarrollamos flujos personalizados, integraciones IA y conectamos con tus sistemas existentes.',
          duration: 'Adaptado a tu consultorio'
        },
        {
          number: '04',
          title: 'Optimizar y Crecer',
          description: 'Monitoreamos rendimiento, mejoramos basado en resultados y escalamos automatizaciones exitosas.',
          duration: 'Adaptado a tu consultorio'
        }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre automatización IA en medicina',
      questions: [
        {
          question: '¿Cumple con la normativa colombiana de datos en salud?',
          answer: 'Absolutamente. Todos los procesos están diseñados cumpliendo la Ley 1581 de Protección de Datos y Resolución 1995. Usamos comunicaciones encriptadas, manejo seguro de datos y registros de auditoría completos.'
        },
        {
          question: '¿Cuánto tiempo toma la implementación?',
          answer: 'Automatización de Procesos: 2-3 semanas. Inteligencia Clínica: 3-6 semanas. IA Empresarial: 6-12 semanas. Empezamos con mejoras rápidas e implementamos gradualmente automatizaciones más complejas.'
        },
        {
          question: '¿Se integra con nuestro sistema de historia clínica existente?',
          answer: 'Sí. Tenemos experiencia integrando con sistemas de historia clínica como Hosvital, Servinte, SAHI, Medifolios, y otros. La complejidad varía, pero siempre encontramos forma de conectar tus sistemas de forma segura.'
        },
        {
          question: '¿Qué pasa si necesitamos flujos personalizados?',
          answer: 'Todos nuestros planes incluyen algún nivel de personalización. Los planes Inteligencia Clínica y Empresarial ofrecen desarrollo completo de flujos personalizados usando herramientas avanzadas adaptadas a tu consulta.'
        },
        {
          question: '¿Proporcionan entrenamiento para nuestro equipo?',
          answer: 'Sí. Incluimos entrenamiento completo para tu equipo, más soporte continuo. Los clientes Empresariales obtienen llamadas estratégicas mensuales para optimizar procesos.'
        },
        {
          question: '¿Qué los hace diferentes de otras empresas de automatización?',
          answer: 'Soy un médico que practica y usa estos sistemas diariamente en ambientes de alto riesgo. Esta experiencia clínica del mundo real significa que tu automatización realmente funciona cuando más importa.'
        },
        {
          question: '¿Trabajan con consultorios en Colombia?',
          answer: 'Por supuesto. Entiendo perfectamente los requisitos del sistema de salud colombiano y tengo experiencia trabajando tanto con el sistema estadounidense como el colombiano.'
        },
        {
          question: '¿Qué tipo de retorno de inversión podemos esperar?',
          answer: 'Los clientes típicos ven retorno de 3-5x en 6 meses a través de reducción de costos administrativos, mejor captación de pacientes y mayor eficiencia. Hacemos seguimiento de métricas y proporcionamos reportes mensuales.'
        }
      ]
    },
    cta: {
      title: '¿Listo para Automatizar tu Consultorio?',
      subtitle: 'Agenda una llamada gratuita de 30 minutos para explorar cómo la IA puede transformar tus procesos médicos.',
      description: 'Sin presentación de ventas, solo una conversación estratégica sobre el potencial de automatización de tu consulta.',
      button: 'Agendar Llamada Gratis',
      calendlyUrl: 'https://calendly.com/theremoteaidoc/30min'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Servicios de Automatización Médica con IA',
      'provider': {
        '@type': 'Person',
        'name': 'Dr. Javier Rosas',
        'jobTitle': 'Médico de Barco y Experto en Automatización IA'
      },
      'description': 'Servicios profesionales de automatización médica usando IA para optimizar procesos clínicos, reducir carga administrativa y mejorar la atención al paciente.',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Automatización de Procesos',
          'price': '2100000',
          'priceCurrency': 'COP',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '2100000',
            'priceCurrency': 'COP',
            'unitText': 'MONTH'
          }
        },
        {
          '@type': 'Offer',
          'name': 'Inteligencia Clínica',
          'price': '4200000',
          'priceCurrency': 'COP',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '4200000',
            'priceCurrency': 'COP',
            'unitText': 'MONTH'
          }
        },
        {
          '@type': 'Offer',
          'name': 'IA Empresarial',
          'price': '10500000',
          'priceCurrency': 'COP',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '10500000',
            'priceCurrency': 'COP',
            'unitText': 'MONTH'
          }
        }
      ]
    }
  }
};

export default function Services({ currentLang = 'en' }) {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Always use Services-specific content object (has seo, tiers, faq, etc.)
  const t = content[currentLang] || content.en;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      brain: Brain,
      globe: Globe,
      shield: Shield
    };
    return icons[iconName] || Users;
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <link rel="canonical" href={t.seo.canonicalUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={t.seo.canonicalUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(t.structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-br from-white to-slate-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-6">
                <Star className="w-4 h-4 fill-teal-600" />
                <span className="text-sm font-medium">{t.hero.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-slate-900">
                {t.hero.title}<br />
                <span className="relative inline-block text-teal-600">
                  {t.hero.titleHighlight}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-200 rounded-full" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.Calendly?.initPopupWidget({ url: t.cta.calendlyUrl })}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-white text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{t.hero.demoButton}</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Demo Section - Prominent Integration */}
      <section className="relative py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">{t.demoSection.badge}</div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                  {t.demoSection.title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t.demoSection.subtitle}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.demoSection.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/demo"
                    className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <Play className="w-5 h-5" />
                    <span>{t.demoSection.tryDemo}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/demo#stats-section"
                    className="px-6 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-teal-200 transition-all duration-300 text-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <BarChart className="w-5 h-5" />
                    <span>{t.demoSection.viewResults}</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <WhatsAppDemo />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.tiers.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.tiers.subtitle}</p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-semibold">
                    {t.tiers.tier1.badge}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.tiers.tier1.name}</h3>
                    <p className="text-slate-600 mb-4">{t.tiers.tier1.description}</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      {t.tiers.tier1.price}
                      <span className="text-lg text-slate-500"><br />{t.tiers.tier1.period}</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {t.tiers.tier1.maintenance}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {t.tiers.tier1.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Best for:</strong> {t.tiers.tier1.bestFor}
                    </p>
                    <a 
                      href={t.tiers.tier1.stripeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300 text-center font-medium"
                    >
                      {t.tiers.tier1.cta}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tier 2 */}
            <ScrollReveal delay={100}>
              <div className="group relative p-8 bg-white border-2 border-teal-300 rounded-2xl hover:border-teal-400 hover:shadow-xl transition-all duration-500 scale-105">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full text-sm font-semibold">
                    {t.tiers.tier2.badge}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.tiers.tier2.name}</h3>
                    <p className="text-slate-600 mb-4">{t.tiers.tier2.description}</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      {t.tiers.tier2.price}
                      <span className="text-lg text-slate-500"><br />{t.tiers.tier2.period}</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {t.tiers.tier2.maintenance}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {t.tiers.tier2.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Best for:</strong> {t.tiers.tier2.bestFor}
                    </p>
                    <a 
                      href={t.tiers.tier2.stripeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold text-center"
                    >
                      {t.tiers.tier2.cta}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tier 3 */}
            <ScrollReveal delay={200}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold border border-slate-300">
                    {t.tiers.tier3.badge}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.tiers.tier3.name}</h3>
                    <p className="text-slate-600 mb-4">{t.tiers.tier3.description}</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      {t.tiers.tier3.price}
                      <span className="text-lg text-slate-500"><br />{t.tiers.tier3.period}</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {t.tiers.tier3.maintenance}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {t.tiers.tier3.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Best for:</strong> {t.tiers.tier3.bestFor}
                    </p>
                    <a 
                      href={t.tiers.tier3.stripeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300 text-center font-medium"
                    >
                      {t.tiers.tier3.cta}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.whyUs.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl text-teal-600 mb-6">{t.whyUs.subtitle}</h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.whyUs.description}</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.values.map((value, index) => {
              const IconComponent = getIcon(value.icon);
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-500">
                      <IconComponent className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.process.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < t.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-teal-300 to-transparent opacity-50 -translate-y-1/2" 
                         style={{ width: 'calc(100% - 2rem)' }} />
                  )}
                  
                  <div className="group text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center group-hover:border-teal-300 group-hover:shadow-lg transition-all duration-500">
                        <span className="text-2xl font-bold text-teal-600">{step.number}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 mb-3">{step.description}</p>
                      <div className="flex items-center justify-center space-x-1 text-teal-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">{t.faq.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600">{t.faq.subtitle}</p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-slate-900 pr-4">{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 font-medium"
              >
                <span>Learn more on our blog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-800 to-slate-900 p-12 lg:p-16 overflow-hidden text-center text-white">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {t.cta.title}
                </h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                  {t.cta.subtitle}
                </p>
                <p className="text-slate-300">
                  {t.cta.description}
                </p>
                
                <button
                  onClick={() => window.Calendly?.initPopupWidget({ url: t.cta.calendlyUrl })}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 text-lg font-semibold"
                >
                  <span>{t.cta.button}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}