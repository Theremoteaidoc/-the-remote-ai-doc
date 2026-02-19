import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Users, Brain, Shield, Globe, Phone, Mail, MessageSquare, BarChart, FileText, Zap, Star, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Servicios() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Automatización Médica con IA para Consultorios en Colombia | AutoMed Colombia</title>
        <meta name="description" content="Automatiza tu consultorio médico con inteligencia artificial. Citas, recordatorios, historia clínica electrónica y más. Diseñado por médicos colombianos, para médicos colombianos." />
        <html lang="es" />
        <link rel="canonical" href="https://theremoteaidoc.com/servicios" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Automatización Médica con IA para Consultorios en Colombia | AutoMed Colombia" />
        <meta property="og:description" content="Automatiza tu consultorio médico con inteligencia artificial. Citas, recordatorios, historia clínica electrónica y más. Diseñado por médicos colombianos, para médicos colombianos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/servicios" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image" content="https://theremoteaidoc.com/og-image-es.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatización Médica con IA para Consultorios en Colombia" />
        <meta name="twitter:description" content="Automatiza tu consultorio médico con inteligencia artificial. Diseñado por médicos para médicos colombianos." />
        <meta name="twitter:image" content="https://theremoteaidoc.com/og-image-es.jpg" />
        
        {/* Hreflang tags */}
        <link rel="alternate" hreflang="es" href="https://theremoteaidoc.com/servicios" />
        <link rel="alternate" hreflang="en" href="https://theremoteaidoc.com/services" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': 'AutoMed Colombia - Automatización Médica por Médicos',
            'description': 'Servicios profesionales de automatización médica usando IA para optimizar procesos clínicos, reducir carga administrativa y mejorar la atención al paciente.',
            'provider': {
              '@type': 'Person',
              'name': 'Dr. Javier Rosas',
              'jobTitle': 'Chair de IA, American Maritime Medicine Board | Google Cloud AI/ML | Médico de Cruceros',
              'nationality': 'Colombian'
            },
            'areaServed': {
              '@type': 'Country',
              'name': 'Colombia',
              'alternateName': 'CO'
            },
            'priceRange': '$$',
            'inLanguage': 'es',
            'serviceType': 'Automatización Médica con IA',
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
                },
                'description': 'Automatización básica para consultorios pequeños y médicos independientes'
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
                },
                'description': 'IA avanzada para consultorios con varios especialistas'
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
                },
                'description': 'Transformación IA completa para sistemas de salud'
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <Star className="w-4 h-4 fill-teal-400" />
                <span className="text-sm">AutoMed Colombia — Automatización Médica por Médicos</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] mb-8">
                Automatización Inteligente<br />
                <span className="relative inline-block text-teal-400">
                  para Consultorios
                  <span className="absolute -inset-1 bg-teal-500/20 blur-2xl opacity-50" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
                Aplicando experiencia clínica en IA para automatizar procesos médicos, reducir carga administrativa y mejorar la atención al paciente — construido por un médico colombiano que usa lo que automatiza.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                className="relative px-6 md:px-8 py-3 md:py-4 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-all duration-300 hover:scale-105 group overflow-hidden text-base md:text-lg font-semibold w-full sm:w-auto min-h-[44px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-teal-500/50 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Agenda tu Llamada Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4">Elige Tu Nivel de Automatización</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto">Desde automatización básica hasta soluciones IA empresariales — todo diseñado con experiencia clínica colombiana</p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Tier 1 */}
            <ScrollReveal delay={0}>
              <div className="group relative p-6 md:p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-teal-500 text-slate-950 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="text-center pt-4">
                    <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">Automatización de Procesos</h3>
                    <p className="text-slate-400 mb-4 text-sm md:text-base">Perfecto para consultorios pequeños y médicos independientes</p>
                    <div className="text-2xl md:text-3xl lg:text-4xl text-teal-400 font-bold mb-1">
                      $2.100.000
                      <span className="text-sm md:text-base lg:text-lg text-slate-500"> COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'Recordatorios de citas (WhatsApp/SMS/Email)',
                      'Sistema de recolección automática de reseñas Google',
                      'Captura de pacientes → respuestas automatizadas',
                      'Panel básico de reportes',
                      'Flujos de trabajo personalizados estándar',
                      'Soporte por email y chat'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-sm text-slate-400 mb-4">
                      <strong>Ideal para:</strong> Consultorios pequeños, médicos independientes
                    </p>
                    <button className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 min-h-[44px]">
                      Iniciar Automatización
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tier 2 */}
            <ScrollReveal delay={100}>
              <div className="group relative p-6 md:p-8 bg-slate-900/40 border border-teal-500/50 rounded-2xl hover:border-teal-500 transition-all duration-500 lg:scale-105">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 rounded-full text-sm font-semibold">
                    Más Recomendado
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="text-center pt-4">
                    <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">Inteligencia Clínica</h3>
                    <p className="text-slate-400 mb-4 text-sm md:text-base">IA avanzada para consultorios con varios especialistas</p>
                    <div className="text-2xl md:text-3xl lg:text-4xl text-teal-400 font-bold mb-1">
                      $4.200.000
                      <span className="text-sm md:text-base lg:text-lg text-slate-500"> COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'Todo en Automatización de Procesos',
                      'Procesamiento de documentos clínicos (formularios, referencias)',
                      'Pre-clasificación inteligente de pacientes con IA',
                      'Extracción de datos de Historia Clínica Electrónica y reportes automatizados',
                      'Desarrollo de flujos personalizados avanzados',
                      'Soporte prioritario con respuesta en 2 horas'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-sm text-slate-400 mb-4">
                      <strong>Ideal para:</strong> Consultorios grupo médico, clínicas especializadas
                    </p>
                    <button className="w-full px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors duration-300 font-semibold min-h-[44px]">
                      Mejorar a Inteligencia
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tier 3 */}
            <ScrollReveal delay={200}>
              <div className="group relative p-6 md:p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-semibold border border-slate-700">
                    Empresarial
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="text-center pt-4">
                    <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">IA Empresarial</h3>
                    <p className="text-slate-400 mb-4 text-sm md:text-base">Transformación IA completa para sistemas de salud</p>
                    <div className="text-2xl md:text-3xl lg:text-4xl text-teal-400 font-bold mb-1">
                      $10.500.000
                      <span className="text-sm md:text-base lg:text-lg text-slate-500"> COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'Todo en Inteligencia Clínica',
                      'Desarrollo de agentes IA personalizados',
                      'Sistemas de conocimiento clínico con IA',
                      'Coordinación de flujos multi-ubicación',
                      'Soporte dedicado + llamadas estratégicas mensuales',
                      'Consultoría y auditoría normativa colombiana de datos en salud (Ley 1581, Resolución 1995)'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-sm text-slate-400 mb-4">
                      <strong>Ideal para:</strong> Grupos hospitalarios, sistemas de salud, operaciones médicas remotas
                    </p>
                    <button className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 min-h-[44px]">
                      Transformar con IA
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4">Por Qué Elegir AutoMed Colombia</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-xl md:text-2xl text-teal-400 mb-6">Construido por un Médico que Automatiza Su Propia Práctica</h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto">No solo construyo sistemas de IA — los uso todos los días en ambientes clínicos de alto riesgo. Esta experiencia del mundo real asegura que tu automatización realmente funcione cuando más importa.</p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Entendimiento Clínico',
                description: 'Experiencia médica real en ambientes de alta presión — 1,000 millas de la costa sin respaldo médico.',
                icon: Users
              },
              {
                title: 'Experiencia en IA',
                description: 'Chair de IA, American Maritime Medicine Board | Google Cloud AI/ML | Médico de Cruceros',
                icon: Brain
              },
              {
                title: 'Medicina Remota',
                description: 'Construido para equipos distribuidos y telemedicina — probado en las ubicaciones más remotas de la Tierra.',
                icon: Globe
              },
              {
                title: 'Cumplimiento Total',
                description: 'El cumplimiento de la Ley 1581 y Resolución 1995 está incorporado en cada proceso desde el día uno.',
                icon: Shield
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group relative p-6 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 text-center">
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors duration-500">
                        <IconComponent className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl text-white mb-3">{value.title}</h3>
                      <p className="text-slate-400 text-sm md:text-base">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4">Nuestro Proceso Comprobado</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">De evaluación a automatización en 4 pasos estratégicos</p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: '01',
                title: 'Llamada Gratuita',
                description: 'Entendemos tus procesos clínicos, puntos de dolor y objetivos de automatización a través de evaluación detallada.',
                duration: '1 semana'
              },
              {
                number: '02',
                title: 'Auditoría y Estrategia',
                description: 'Mapeamos ineficiencias e identificamos oportunidades de automatización con análisis de flujos clínicos.',
                duration: '1-2 semanas'
              },
              {
                number: '03',
                title: 'Construir e Integrar',
                description: 'Desarrollamos flujos personalizados, integraciones IA y conectamos con tus sistemas existentes.',
                duration: '2-4 semanas'
              },
              {
                number: '04',
                title: 'Optimizar y Crecer',
                description: 'Monitoreamos rendimiento, mejoramos basado en resultados y escalamos automatizaciones exitosas.',
                duration: 'Continuo'
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  {/* Connector Line - Hidden on mobile and small screens */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-teal-500 to-transparent opacity-30 -translate-y-1/2" 
                         style={{ width: 'calc(100% - 2rem)' }} />
                  )}
                  
                  <div className="group text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="w-20 md:w-24 h-20 md:h-24 bg-slate-900/40 border border-slate-800/50 rounded-2xl flex items-center justify-center group-hover:border-teal-500/50 transition-all duration-500">
                        <span className="text-xl md:text-2xl font-bold text-teal-400">{step.number}</span>
                      </div>
                      <div className="absolute -inset-1 bg-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 mb-3 text-sm md:text-base">{step.description}</p>
                      <div className="flex items-center justify-center space-x-1 text-teal-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{step.duration}</span>
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
      <section className="relative py-16 md:py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4">Preguntas Frecuentes</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg text-slate-400">Todo lo que necesitas saber sobre automatización IA en medicina</p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {[
              {
                question: '¿Cumple con la normativa colombiana de datos en salud?',
                answer: 'Absolutamente. Todos los procesos están diseñados cumpliendo la Ley 1581 de Protección de Datos y Resolución 1995 del MinSalud. Usamos comunicaciones encriptadas, manejo seguro de datos y registros de auditoría completos. Nuestro plan Empresarial incluye consultoría dedicada para cumplimiento normativo.'
              },
              {
                question: '¿Cuánto tiempo toma la implementación?',
                answer: 'Automatización de Procesos: 2-3 semanas. Inteligencia Clínica: 3-6 semanas. IA Empresarial: 6-12 semanas. Empezamos con mejoras rápidas e implementamos gradualmente automatizaciones más complejas para asegurar adopción sin problemas.'
              },
              {
                question: '¿Se integra con nuestro sistema de Historia Clínica Electrónica existente?',
                answer: 'Sí. Tenemos experiencia integrando con sistemas colombianos como Hosvital, Servinte, SAHI, Medifolios, y otros sistemas populares. La complejidad de integración varía, pero siempre encontramos forma de conectar tus sistemas de forma segura.'
              },
              {
                question: '¿Qué pasa si necesitamos flujos personalizados?',
                answer: 'Todos nuestros planes incluyen algún nivel de personalización. Los planes Inteligencia Clínica y Empresarial ofrecen desarrollo completo de flujos personalizados usando herramientas avanzadas de automatización adaptadas específicamente a las necesidades de tu consulta.'
              },
              {
                question: '¿Proporcionan entrenamiento para nuestro equipo?',
                answer: 'Sí. Incluimos entrenamiento completo para tu equipo, más soporte continuo. Los clientes Empresariales obtienen llamadas estratégicas mensuales para optimizar procesos y explorar nuevas oportunidades de automatización.'
              },
              {
                question: '¿Qué los hace diferentes de otras empresas de automatización?',
                answer: 'Soy un médico colombiano que practica y usa estos sistemas diariamente en ambientes de alto riesgo. Esta experiencia clínica del mundo real significa que tu automatización realmente funciona cuando más importa — no solo en teoría, sino en la práctica médica real.'
              },
              {
                question: '¿Trabajan específicamente con consultorios en Colombia?',
                answer: 'Por supuesto. Como médico colombiano, entiendo perfectamente los requisitos únicos del sistema de salud colombiano, las regulaciones locales, y las necesidades específicas de nuestros colegas médicos. Tengo experiencia trabajando tanto con sistemas internacionales como colombianos.'
              },
              {
                question: '¿Qué tipo de retorno de inversión podemos esperar?',
                answer: 'Los consultorios típicos ven retorno de inversión de 3-5x en 6 meses a través de reducción de costos administrativos, mejor captación de pacientes, y mayor eficiencia operacional. Hacemos seguimiento de métricas específicas y proporcionamos reportes mensuales para demostrar el valor real.'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl overflow-hidden hover:border-slate-700/50 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 md:px-6 py-4 md:py-6 text-left flex items-center justify-between hover:bg-slate-900/60 transition-colors duration-300 min-h-[44px]"
                  >
                    <span className="text-base md:text-lg text-white pr-4">{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-500 p-8 md:p-12 lg:p-16 overflow-hidden text-center">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-bold">
                  ¿Listo para Automatizar tu Consultorio?
                </h2>
                <p className="text-lg md:text-xl text-slate-900/80 max-w-2xl mx-auto">
                  Agenda una llamada gratuita de 30 minutos para explorar cómo la IA puede transformar tus procesos médicos.
                </p>
                <p className="text-slate-900/70 text-sm md:text-base">
                  Sin presentación de ventas — solo una conversación estratégica sobre el potencial de automatización de tu consulta.
                </p>
                
                <button
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                  className="inline-flex items-center justify-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 text-base md:text-lg font-semibold w-full sm:w-auto min-h-[44px]"
                >
                  <span>Agendar Llamada Gratis</span>
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