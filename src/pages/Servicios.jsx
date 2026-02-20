import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Users, Brain, Shield, Globe, Phone, Mail, MessageSquare, BarChart, FileText, Zap, Star, Clock, HelpCircle, ChevronDown, Play, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

export default function Servicios() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Servicios de Automatización Médica con IA | AutoMed Colombia</title>
        <meta name="description" content="Automatiza tu consultorio médico con inteligencia artificial. Recordatorios, agenda, historias clínicas y más. Diseñado por médicos para médicos colombianos." />
        <link rel="canonical" href="https://theremoteaidoc.com/servicios" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Servicios de Automatización Médica con IA | AutoMed Colombia" />
        <meta property="og:description" content="Automatiza tu consultorio médico con inteligencia artificial. Recordatorios, agenda, historias clínicas y más. Diseñado por médicos para médicos colombianos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/servicios" />
      </Helmet>

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Link
          to="/services"
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 hover:text-teal-600 hover:border-teal-200 transition-all duration-300 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">English</span>
        </Link>
      </div>

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
                <span className="text-sm font-medium">Automatización Médica con IA</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-slate-900">
                Automatización Inteligente<br />
                <span className="relative inline-block text-teal-600">
                  para Consultorios
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-200 rounded-full" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
                Aplicando experiencia clínica en IA para automatizar procesos médicos, reducir carga administrativa y mejorar la atención al paciente — construido por un médico que usa lo que automatiza.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Agenda tu Llamada Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-white text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Ver Demo en Vivo</span>
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
                <div className="text-sm text-teal-600 tracking-wider uppercase font-semibold">Demo Interactivo</div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                  Ve la Automatización en Acción
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Experimenta cómo nuestra automatización clínica AutoMed transforma los flujos de trabajo de pacientes
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Prueba nuestro demo interactivo para ver exactamente cómo funciona la programación de citas, recordatorios de pacientes y recolección de reseñas en consultorios médicos reales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/demo"
                    className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <Play className="w-5 h-5" />
                    <span>Probar Demo Interactivo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/demo#stats-section"
                    className="px-6 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-teal-200 transition-all duration-300 text-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <BarChart className="w-5 h-5" />
                    <span>Ver Resultados Reales</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative">
                {/* Demo Preview Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  {/* Demo Browser Header */}
                  <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-slate-600">
                        theremoteaidoc.com/demo
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo Content Preview */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Automatización Clínica</h3>
                      <p className="text-slate-600">en Acción</p>
                    </div>
                    
                    {/* Feature Cards Preview */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg mb-2 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm">Solicitar Citas</h4>
                        <p className="text-xs text-slate-600 mt-1">Agenda automática</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg mb-2 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm">Recordatorios</h4>
                        <p className="text-xs text-slate-600 mt-1">WhatsApp automático</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg mb-2 flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm">Reseñas Google</h4>
                        <p className="text-xs text-slate-600 mt-1">Recolección automática</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg mb-2 flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm">Captura de Leads</h4>
                        <p className="text-xs text-slate-600 mt-1">Respuestas instantáneas</p>
                      </div>
                    </div>

                    {/* Demo CTA */}
                    <div className="text-center pt-2">
                      <div className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                        <Play className="w-4 h-4 mr-2" />
                        Demo Interactivo Disponible
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">Elige Tu Nivel de Automatización</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">Desde automatización básica hasta soluciones IA empresariales — todo diseñado con experiencia clínica</p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Automatización de Procesos</h3>
                    <p className="text-slate-600 mb-4">Perfecto para consultorios pequeños y médicos independientes</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      $2.100.000
                      <span className="text-lg text-slate-500"><br />COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Recordatorios de citas (WhatsApp/SMS/Email)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Sistema de recolección automática de reseñas Google</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Captura de pacientes → respuestas automatizadas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Panel básico de reportes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Flujos de trabajo personalizados estándar</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Soporte por email y chat</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Ideal para:</strong> Consultorios pequeños, médicos independientes
                    </p>
                    <button className="block w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300 text-center font-medium">
                      Iniciar Automatización
                    </button>
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
                    Más Recomendado
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Inteligencia Clínica</h3>
                    <p className="text-slate-600 mb-4">IA avanzada para consultorios con varios especialistas</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      $4.200.000
                      <span className="text-lg text-slate-500"><br />COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Todo en Automatización de Procesos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Procesamiento de documentos clínicos (formularios, referencias)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Pre-clasificación inteligente de pacientes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Extracción de datos de historia clínica y reportes automatizados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Desarrollo de flujos personalizados avanzados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Soporte prioritario con respuesta en 2 horas</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Ideal para:</strong> Consultorios grupo médico, clínicas especializadas
                    </p>
                    <button className="block w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold text-center">
                      Mejorar a Inteligencia
                    </button>
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
                    Empresarial
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">IA Empresarial</h3>
                    <p className="text-slate-600 mb-4">Transformación IA completa para sistemas de salud</p>
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      $10.500.000
                      <span className="text-lg text-slate-500"><br />COP/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Todo en Inteligencia Clínica</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Desarrollo de agentes IA personalizados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Sistemas de conocimiento clínico con IA</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Coordinación de flujos multi-ubicación</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Soporte dedicado + llamadas estratégicas mensuales</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Consultoría y auditoría normativa colombiana de datos en salud</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">
                      <strong>Ideal para:</strong> Grupos hospitalarios, sistemas de salud, operaciones médicas remotas
                    </p>
                    <button className="block w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300 text-center font-medium">
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
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">Por Qué Elegir The Remote AI Doc</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl text-teal-600 mb-6">Construido por un Médico que Automatiza Su Propia Práctica</h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">No solo construyo sistemas de IA — los uso todos los días en ambientes clínicos de alto riesgo. Esta experiencia del mundo real asegura que tu automatización realmente funcione cuando más importa.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-500">
                  <Users className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Entendimiento Clínico</h3>
                <p className="text-slate-600">Experiencia médica real en ambientes de alta presión — 1,000 millas de la costa sin respaldo médico.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-500">
                  <Brain className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Experiencia en IA</h3>
                <p className="text-slate-600">Entrenando sistemas IA para plataformas líderes mientras practico medicina basada en evidencia.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-500">
                  <Globe className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Medicina Remota</h3>
                <p className="text-slate-600">Construido para equipos distribuidos y telemedicina — probado en las ubicaciones más remotas de la Tierra.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-500">
                  <Shield className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Seguridad Total</h3>
                <p className="text-slate-600">El cumplimiento de la normativa colombiana de datos en salud está incorporado en cada proceso desde el día uno.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">Preguntas Frecuentes</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600">Todo lo que necesitas saber sobre automatización IA en medicina</p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {[
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
                question: '¿Qué tipo de retorno de inversión podemos esperar?',
                answer: 'Los clientes típicos ven retorno de 3-5x en 6 meses a través de reducción de costos administrativos, mejor captación de pacientes y mayor eficiencia. Hacemos seguimiento de métricas y proporcionamos reportes mensuales.'
              }
            ].map((item, index) => (
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-12 lg:p-16 overflow-hidden text-center text-white">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  ¿Listo para Automatizar tu Consultorio?
                </h2>
                <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                  Agenda una llamada gratuita de 30 minutos para explorar cómo la IA puede transformar tus procesos médicos.
                </p>
                <p className="text-teal-100">
                  Sin presentación de ventas — solo una conversación estratégica sobre el potencial de automatización de tu consulta.
                </p>
                
                <button
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'https://calendly.com/theremoteaidoc/30min' })}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 text-lg font-semibold"
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