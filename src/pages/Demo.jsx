import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Calendar, Star, TrendingUp, Clock, Users, CheckCircle, ArrowRight, ExternalLink, Play } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Demo() {
  const [citaForm, setCitaForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha_preferida: '',
    motivo_consulta: ''
  });
  
  const [contactoForm, setContactoForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    interes: ''
  });

  const [showCitaModal, setShowCitaModal] = useState(false);
  const [showContactoModal, setShowContactoModal] = useState(false);
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(false);
  const [showContactResponse, setShowContactResponse] = useState(false);
  const [isSubmittingCita, setIsSubmittingCita] = useState(false);
  const [isSubmittingContacto, setIsSubmittingContacto] = useState(false);

  // Animated counter hook
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev + increment >= target) {
            clearInterval(timer);
            return target;
          }
          return prev + increment;
        });
      }, 16);
      
      return () => clearInterval(timer);
    }, [target, duration, isVisible]);
    
    return { count: Math.round(count), setIsVisible };
  };

  const { count: confirmationRate, setIsVisible: setConfirmationVisible } = useCounter(94, 2000);
  const { count: reviewIncrease, setIsVisible: setReviewVisible } = useCounter(340, 2500);
  const { count: timeSaved, setIsVisible: setTimeVisible } = useCounter(8, 1500);
  const { count: newPatients, setIsVisible: setPatientsVisible } = useCounter(45, 2000);

  const handleCitaSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingCita(true);

    try {
      // Try to submit to n8n webhook
      const response = await fetch('http://167.88.43.119:5678/webhook/cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(citaForm)
      });

      // Show WhatsApp confirmation message regardless
      setShowWhatsAppMessage(true);
      
      // Reset form
      setCitaForm({
        nombre: '',
        telefono: '',
        email: '',
        fecha_preferida: '',
        motivo_consulta: ''
      });
      
    } catch (error) {
      console.log('Webhook error (showing fallback):', error);
      // Show fallback message
      setShowWhatsAppMessage(true);
    } finally {
      setIsSubmittingCita(false);
      setShowCitaModal(false);
    }
  };

  const handleContactoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContacto(true);

    try {
      // Try to submit to n8n webhook
      const response = await fetch('http://167.88.43.119:5678/webhook/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactoForm)
      });

      // Show contact response message regardless
      setShowContactResponse(true);
      
      // Reset form
      setContactoForm({
        nombre: '',
        telefono: '',
        email: '',
        interes: ''
      });
      
    } catch (error) {
      console.log('Webhook error (showing fallback):', error);
      // Show fallback message
      setShowContactResponse(true);
    } finally {
      setIsSubmittingContacto(false);
      setShowContactoModal(false);
    }
  };

  // Intersection Observer for animated counters
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'stats-section') {
            setConfirmationVisible(true);
            setReviewVisible(true);
            setTimeVisible(true);
            setPatientsVisible(true);
          }
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [setConfirmationVisible, setReviewVisible, setTimeVisible, setPatientsVisible]);

  return (
    <>
      <Helmet>
        <title>Clínica Demo — AutoMed Colombia | Automatización en Acción</title>
        <meta name="description" content="Experimenta cómo AutoMed Colombia transforma tu consultorio con automatización inteligente. Demostración interactiva para clínicas en Medellín." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-400 mb-6">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-sm tracking-wider uppercase">Demo Interactivo</span>
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl lg:text-7xl tracking-tight leading-[1.1]">
                <span className="text-teal-400">Clínica Demo</span><br />
                <span className="text-slate-400">Automatización en</span><br />
                <span className="relative inline-block italic">
                  Acción
                  <div className="absolute -inset-2 pointer-events-none bg-teal-500/20 blur-3xl opacity-70" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Experimenta cómo <span className="text-teal-400 font-semibold">AutoMed Colombia</span> transforma tu consultorio
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">
                Esta es una demostración interactiva. Prueba cada función y descubre el poder de la automatización médica.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Demo Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl text-white mb-4">Funciones Principales</h2>
              <p className="text-slate-400">Haz clic en "Probar" para interactuar con cada función</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1: Solicitar Cita */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                <div className="absolute -inset-0.5 pointer-events-none bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                      <Calendar className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">Solicitar Cita</h3>
                      <p className="text-slate-400">Automatización completa del proceso</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Los pacientes solicitan citas online y reciben confirmación automática por WhatsApp en segundos.
                  </p>
                  
                  <button
                    onClick={() => setShowCitaModal(true)}
                    className="w-full px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <span>Probar Ahora</span>
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Recordatorio Automático */}
            <ScrollReveal delay={100}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                <div className="absolute -inset-0.5 pointer-events-none bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                      <Clock className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">Recordatorio Automático</h3>
                      <p className="text-slate-400">24 horas antes de la cita</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Reduce las ausencias con recordatorios automáticos por WhatsApp que llegan justo a tiempo.
                  </p>

                  {/* Mock Phone Screen */}
                  <div className="relative">
                    <div className="max-w-sm mx-auto bg-slate-800 rounded-3xl p-4 border border-slate-700">
                      <div className="bg-slate-900 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-green-400 font-semibold text-sm">Clínica Demo</div>
                            <div className="text-slate-500 text-xs">Ayer 10:30 AM</div>
                          </div>
                        </div>
                        <div className="bg-green-600 rounded-2xl rounded-bl-sm p-3 ml-4">
                          <p className="text-white text-sm leading-relaxed">
                            Hola María 📋 Te recordamos tu cita mañana Martes 25 a las 10:00 AM. No olvides traer tu documento de identidad. ¿Necesitas reprogramar? Responde CAMBIAR. — Clínica Demo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-slate-400 text-sm">Así se ve el recordatorio que recibe tu paciente</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Reseñas Google Automáticas */}
            <ScrollReveal delay={200}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                <div className="absolute -inset-0.5 pointer-events-none bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                      <Star className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">Reseñas Google Automáticas</h3>
                      <p className="text-slate-400">2 horas post-consulta</p>
                    </div>
                  </div>
                  
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-teal-400 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">Estadística Comprobada</span>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      Clínicas con AutoMed aumentan sus reseñas Google <span className="text-teal-400">3x en 30 días</span>
                    </p>
                  </div>

                  {/* Mock Phone Screen */}
                  <div className="relative">
                    <div className="max-w-sm mx-auto bg-slate-800 rounded-3xl p-4 border border-slate-700">
                      <div className="bg-slate-900 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-green-400 font-semibold text-sm">Clínica Demo</div>
                            <div className="text-slate-500 text-xs">Hoy 3:15 PM</div>
                          </div>
                        </div>
                        <div className="bg-green-600 rounded-2xl rounded-bl-sm p-3 ml-4">
                          <p className="text-white text-sm leading-relaxed">
                            Hola María 😊 Gracias por tu visita a Clínica Demo. ¿Nos ayudas con una reseña? Solo toma 30 segundos: [link]. Tu opinión nos ayuda a mejorar. ¡Gracias! 🙏
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Captura de Leads */}
            <ScrollReveal delay={300}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500">
                <div className="absolute -inset-0.5 pointer-events-none bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                      <Users className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">Captura de Leads</h3>
                      <p className="text-slate-400">Respuesta instantánea</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Convierte visitantes en pacientes con respuestas automáticas y seguimiento inteligente.
                  </p>
                  
                  <button
                    onClick={() => setShowContactoModal(true)}
                    className="w-full px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <span>Probar Ahora</span>
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section id="stats-section" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl text-white mb-4">Resultados Reales</h2>
              <p className="text-slate-400">Impacto medible desde el primer día</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="group text-center p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 hover:scale-105">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400 mb-4">
                  {confirmationRate}%
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-400">Citas Confirmadas</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group text-center p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 hover:scale-105">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400 mb-4">
                  +{reviewIncrease}%
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-400">Reseñas Google</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group text-center p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 hover:scale-105">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400 mb-4">
                  {timeSaved} hrs
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-400">Tiempo Ahorrado/Sem</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group text-center p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 hover:scale-105">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400 mb-4">
                  +{newPatients}%
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-400">Pacientes Nuevos</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-500 p-12 lg:p-16 overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative space-y-8 text-center">
                <h2 className="text-3xl lg:text-4xl text-slate-900 font-bold">
                  ¿Listo para automatizar tu consultorio?
                </h2>
                <p className="text-lg text-slate-900/80 max-w-2xl mx-auto leading-relaxed">
                  Únete a más de 200+ clínicas que ya confían en AutoMed Colombia para optimizar su práctica médica.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => window.open('https://calendly.com/automedcolombia/demo-personalizado', '_blank')}
                    className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agenda una llamada gratis</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="flex items-center space-x-2 text-slate-900/70 text-sm">
                    <span>o</span>
                  </div>
                  
                  <a
                    href="https://wa.me/573001234567?text=Hola,%20me%20interesa%20AutoMed%20Colombia%20para%20mi%20clínica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Escríbenos por WhatsApp</span>
                  </a>
                </div>

                <div className="text-center">
                  <p className="text-slate-900/70 text-sm">
                    <span className="font-semibold">Dr. Javier Rosas</span> • Especialista en IA Médica
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal para Cita */}
      {showCitaModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
            <h3 className="text-2xl text-white mb-6">Solicitar Cita</h3>
            <form onSubmit={handleCitaSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={citaForm.nombre}
                onChange={(e) => setCitaForm({...citaForm, nombre: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono (+57...)"
                value={citaForm.telefono}
                onChange={(e) => setCitaForm({...citaForm, telefono: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={citaForm.email}
                onChange={(e) => setCitaForm({...citaForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <input
                type="date"
                value={citaForm.fecha_preferida}
                onChange={(e) => setCitaForm({...citaForm, fecha_preferida: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <select
                value={citaForm.motivo_consulta}
                onChange={(e) => setCitaForm({...citaForm, motivo_consulta: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              >
                <option value="">Selecciona el motivo</option>
                <option value="consulta_general">Consulta General</option>
                <option value="control_rutinario">Control Rutinario</option>
                <option value="especialista">Consulta Especialista</option>
                <option value="examenes">Revisión de Exámenes</option>
              </select>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCitaModal(false)}
                  className="flex-1 px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingCita}
                  className="flex-1 px-4 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingCita ? 'Enviando...' : 'Solicitar Cita'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal para Contacto */}
      {showContactoModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
            <h3 className="text-2xl text-white mb-6">Contactar Clínica</h3>
            <form onSubmit={handleContactoSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={contactoForm.nombre}
                onChange={(e) => setContactoForm({...contactoForm, nombre: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono (+57...)"
                value={contactoForm.telefono}
                onChange={(e) => setContactoForm({...contactoForm, telefono: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={contactoForm.email}
                onChange={(e) => setContactoForm({...contactoForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <select
                value={contactoForm.interes}
                onChange={(e) => setContactoForm({...contactoForm, interes: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              >
                <option value="">¿En qué te podemos ayudar?</option>
                <option value="informacion_general">Información General</option>
                <option value="agendar_cita">Agendar una Cita</option>
                <option value="consulta_especialista">Consulta con Especialista</option>
                <option value="segunda_opinion">Segunda Opinión</option>
                <option value="telemedicina">Telemedicina</option>
              </select>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactoModal(false)}
                  className="flex-1 px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingContacto}
                  className="flex-1 px-4 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingContacto ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Message Modal */}
      {showWhatsAppMessage && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl text-white mb-4">¡Cita Solicitada!</h3>
            <p className="text-slate-400 mb-6">Recibirás confirmación por WhatsApp:</p>
            
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">WhatsApp</span>
              </div>
              <div className="bg-green-600 rounded-xl p-3 text-left">
                <p className="text-white text-sm">
                  Hola María 👋 Tu cita en Clínica Demo ha sido confirmada para el Lunes 24 de Febrero a las 10:00 AM. Responde CONFIRMAR para aceptar o CAMBIAR para reprogramar. — Clínica Demo | AutoMed Colombia
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowWhatsAppMessage(false)}
              className="w-full px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors font-semibold"
            >
              Continuar Explorando
            </button>
          </div>
        </div>
      )}

      {/* Contact Response Modal */}
      {showContactResponse && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700 text-center">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-2xl text-white mb-4">¡Mensaje Enviado!</h3>
            <p className="text-slate-400 mb-6">Respuesta automática enviada:</p>
            
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">WhatsApp</span>
              </div>
              <div className="bg-green-600 rounded-xl p-3 text-left">
                <p className="text-white text-sm">
                  Hola María 👋 Gracias por contactar a Clínica Demo. Un asesor te contactará en las próximas 2 horas. Mientras tanto, conoce nuestros servicios: [link]. — Clínica Demo | AutoMed Colombia
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowContactResponse(false)}
              className="w-full px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors font-semibold"
            >
              Continuar Explorando
            </button>
          </div>
        </div>
      )}
    </>
  );
}