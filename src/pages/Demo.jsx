import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Calendar, Star, TrendingUp, Clock, Users, CheckCircle, ArrowRight, ExternalLink, Play, Globe } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const languages = {
  en: {
    seo: {
      title: 'Live Demo — AutoMed Clinical Automation | The Remote AI Doc',
      description: 'Experience how AutoMed transforms healthcare workflows with intelligent automation. Interactive demo for medical practices worldwide.',
    },
    nav: {
      language: 'Español'
    },
    hero: {
      badge: 'Interactive Demo',
      title: 'Clinical Automation',
      titleHighlight: 'in Action',
      subtitle: 'Experience how AutoMed transforms your medical practice with intelligent automation',
      description: 'This is an interactive demonstration. Test each feature and discover the power of medical automation.'
    },
    features: {
      title: 'Core Features',
      subtitle: 'Click "Try Now" to interact with each feature',
      appointment: {
        title: 'Request Appointment',
        subtitle: 'Complete process automation',
        description: 'Patients request appointments online and receive automatic confirmation via WhatsApp in seconds.',
        cta: 'Try Now'
      },
      reminder: {
        title: 'Automatic Reminder',
        subtitle: '24 hours before appointment',
        description: 'Reduce no-shows with automatic WhatsApp reminders delivered at the perfect time.',
        viewText: 'This is how your patient sees the reminder'
      },
      reviews: {
        title: 'Automated Google Reviews',
        subtitle: '2 hours post-consultation',
        description: 'Clinics using AutoMed increase their Google reviews 3x in 30 days',
        stat: 'Proven Statistic'
      },
      leads: {
        title: 'Lead Capture',
        subtitle: 'Instant response',
        description: 'Convert visitors into patients with automated responses and intelligent follow-up.',
        cta: 'Try Now'
      }
    },
    results: {
      title: 'Real Results',
      subtitle: 'Measurable impact from day one',
      confirmed: 'Confirmed Appointments',
      reviews: 'Google Reviews',
      timeSaved: 'Hours Saved/Week',
      newPatients: 'New Patients'
    },
    cta: {
      title: 'Ready to automate your practice?',
      subtitle: 'Join 200+ clinics that already trust AutoMed to optimize their medical practice.',
      bookCall: 'Schedule a free call',
      whatsapp: 'Message us on WhatsApp',
      footer: 'Dr. Javier Rosas • Medical AI Specialist'
    },
    modal: {
      appointment: {
        title: 'Schedule Medical Appointment',
        personal: 'Personal Information',
        fullName: 'Full name',
        phone: 'Phone (+1 555 123 4567)',
        email: 'Email address',
        selectDoctor: 'Select Doctor',
        selectDoctorPlaceholder: 'Choose a doctor...',
        dateTime: 'Date and Time',
        availableSlots: 'Available slots:',
        cancel: 'Cancel',
        confirm: 'Confirm Appointment'
      },
      contact: {
        title: 'Contact Clinic',
        fullName: 'Full name',
        phone: 'Phone (+1...)',
        email: 'Email address',
        help: 'How can we help you?',
        helpOptions: {
          placeholder: 'How can we help you?',
          general: 'General Information',
          appointment: 'Schedule Appointment',
          specialist: 'Specialist Consultation',
          second_opinion: 'Second Opinion',
          telemedicine: 'Telemedicine'
        },
        cancel: 'Cancel',
        send: 'Send Message'
      },
      success: {
        appointmentTitle: 'Appointment Requested!',
        contactTitle: 'Message Sent!',
        whatsappMessage: 'You will receive confirmation via WhatsApp:',
        autoResponse: 'Automatic response sent:',
        continue: 'Continue Exploring'
      }
    },
    whatsappMessages: {
      appointment: (name, doctor, specialty, date, time) => 
        `Hello ${name || 'María'} 👋 Your appointment with ${doctor || 'Dr. María García'} (${specialty || 'General Medicine'}) has been confirmed for ${date || 'Monday, February 24'} at ${time || '10:00 AM'}.\n\nAddress: 123 Medical Plaza, Healthcare District\n\nReply CONFIRM to accept or CHANGE to reschedule. — Medical Demo | AutoMed`,
      contact: (name) =>
        `Hello ${name || 'María'} 😊 Thank you for contacting Medical Demo. An advisor will contact you within the next 2 hours. Meanwhile, learn about our services: medicaldemo.com/services. — Medical Demo | AutoMed`
    }
  },
  es: {
    seo: {
      title: 'Demo en Vivo — Automatización Clínica AutoMed | The Remote AI Doc', 
      description: 'Experimenta cómo AutoMed transforma los flujos de trabajo médicos con automatización inteligente. Demo interactivo para consultorios médicos.',
    },
    nav: {
      language: 'English'
    },
    hero: {
      badge: 'Demo Interactivo',
      title: 'Automatización Clínica',
      titleHighlight: 'en Acción',
      subtitle: 'Experimenta cómo AutoMed transforma tu consultorio médico con automatización inteligente',
      description: 'Esta es una demostración interactiva. Prueba cada función y descubre el poder de la automatización médica.'
    },
    features: {
      title: 'Funciones Principales',
      subtitle: 'Haz clic en "Probar" para interactuar con cada función',
      appointment: {
        title: 'Solicitar Cita',
        subtitle: 'Automatización completa del proceso',
        description: 'Los pacientes solicitan citas online y reciben confirmación automática por WhatsApp en segundos.',
        cta: 'Probar Ahora'
      },
      reminder: {
        title: 'Recordatorio Automático',
        subtitle: '24 horas antes de la cita',
        description: 'Reduce las ausencias con recordatorios automáticos por WhatsApp que llegan justo a tiempo.',
        viewText: 'Así se ve el recordatorio que recibe tu paciente'
      },
      reviews: {
        title: 'Reseñas Google Automáticas',
        subtitle: '2 horas post-consulta',
        description: 'Clínicas con AutoMed aumentan sus reseñas Google 3x en 30 días',
        stat: 'Estadística Comprobada'
      },
      leads: {
        title: 'Captura de Leads',
        subtitle: 'Respuesta instantánea',
        description: 'Convierte visitantes en pacientes con respuestas automáticas y seguimiento inteligente.',
        cta: 'Probar Ahora'
      }
    },
    results: {
      title: 'Resultados Reales',
      subtitle: 'Impacto medible desde el primer día',
      confirmed: 'Citas Confirmadas',
      reviews: 'Reseñas Google',
      timeSaved: 'Tiempo Ahorrado/Sem',
      newPatients: 'Pacientes Nuevos'
    },
    cta: {
      title: '¿Listo para automatizar tu consultorio?',
      subtitle: 'Únete a más de 200+ clínicas que ya confían en AutoMed para optimizar su práctica médica.',
      bookCall: 'Agenda una llamada gratis',
      whatsapp: 'Escríbenos por WhatsApp',
      footer: 'Dr. Javier Rosas • Especialista en IA Médica'
    },
    modal: {
      appointment: {
        title: 'Agendar Cita Médica',
        personal: 'Información Personal',
        fullName: 'Nombre completo',
        phone: 'Teléfono (+57 300 123 4567)',
        email: 'Correo electrónico',
        selectDoctor: 'Seleccionar Médico',
        selectDoctorPlaceholder: 'Selecciona un médico...',
        dateTime: 'Fecha y Hora',
        availableSlots: 'Horarios disponibles:',
        cancel: 'Cancelar',
        confirm: 'Confirmar Cita'
      },
      contact: {
        title: 'Contactar Clínica',
        fullName: 'Nombre completo',
        phone: 'Teléfono (+57...)',
        email: 'Correo electrónico',
        help: '¿En qué te podemos ayudar?',
        helpOptions: {
          placeholder: '¿En qué te podemos ayudar?',
          general: 'Información General',
          appointment: 'Agendar una Cita',
          specialist: 'Consulta con Especialista',
          second_opinion: 'Segunda Opinión',
          telemedicine: 'Telemedicina'
        },
        cancel: 'Cancelar',
        send: 'Enviar Mensaje'
      },
      success: {
        appointmentTitle: '¡Cita Solicitada!',
        contactTitle: '¡Mensaje Enviado!',
        whatsappMessage: 'Recibirás confirmación por WhatsApp:',
        autoResponse: 'Respuesta automática enviada:',
        continue: 'Continuar Explorando'
      }
    },
    whatsappMessages: {
      appointment: (name, doctor, specialty, date, time) => 
        `Hola ${name || 'María'} 👋 Tu cita con ${doctor || 'Dra. María García'} (${specialty || 'Medicina General'}) ha sido confirmada para el ${date || 'Lunes 24 de Febrero'} a las ${time || '10:00'}.

📍 Dirección: Calle 10 #43A-25, El Poblado, Medellín

Responde CONFIRMAR para aceptar o CAMBIAR para reprogramar. — Clínica Demo | AutoMed`,
      contact: (name) =>
        `Hola ${name || 'María'} 😊 Gracias por contactar a Clínica Demo. Un asesor te contactará en las próximas 2 horas. Mientras tanto, conoce nuestros servicios: clinicademo.com/servicios. — Clínica Demo | AutoMed`
    }
  }
};

export default function Demo() {
  const [currentLang, setCurrentLang] = useState('en');
  const [citaForm, setCitaForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    provider_id: ''
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

  const t = languages[currentLang];

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'es' : 'en');
  };

  // Medical providers data
  const providers = [
    { id: 'garcia', name: currentLang === 'en' ? 'Dr. Maria Garcia' : 'Dra. María García', specialty: currentLang === 'en' ? 'General Medicine' : 'Medicina General' },
    { id: 'perez', name: currentLang === 'en' ? 'Dr. Carlos Perez' : 'Dr. Carlos Pérez', specialty: currentLang === 'en' ? 'Pediatrics' : 'Pediatría' },
    { id: 'rodriguez', name: currentLang === 'en' ? 'Dr. Ana Rodriguez' : 'Dra. Ana Rodríguez', specialty: currentLang === 'en' ? 'Dermatology' : 'Dermatología' },
    { id: 'martinez', name: currentLang === 'en' ? 'Dr. Luis Martinez' : 'Dr. Luis Martínez', specialty: currentLang === 'en' ? 'Internal Medicine' : 'Medicina Interna' },
    { id: 'lopez', name: currentLang === 'en' ? 'Dr. Sofia Lopez' : 'Dra. Sofía López', specialty: currentLang === 'en' ? 'Gynecology' : 'Ginecología' }
  ];

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 7; hour <= 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < 17) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Mock availability
  const isSlotAvailable = (providerId, date, time) => {
    if (!providerId || !date || !time) return true;
    const hash = (providerId + date + time).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return Math.abs(hash % 100) > 30;
  };

  const getAvailableSlots = (providerId, date) => {
    if (!providerId || !date) return [];
    return timeSlots.map(time => ({
      time,
      available: isSlotAvailable(providerId, date, time)
    }));
  };

  const selectedProvider = providers.find(p => p.id === citaForm.provider_id);
  const availableSlots = getAvailableSlots(citaForm.provider_id, citaForm.fecha);

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
      // Show WhatsApp confirmation message
      setShowWhatsAppMessage(true);
      setCitaForm({
        nombre: '',
        telefono: '',
        email: '',
        fecha: '',
        hora: '',
        provider_id: ''
      });
    } catch (error) {
      console.log('Demo mode:', error);
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
      setShowContactResponse(true);
      setContactoForm({
        nombre: '',
        telefono: '',
        email: '',
        interes: ''
      });
    } catch (error) {
      console.log('Demo mode:', error);
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
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
      </Helmet>

      {/* Global language toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 hover:text-teal-600 hover:border-teal-200 transition-all duration-300 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{t.nav.language}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-2 text-teal-600 mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm tracking-wider uppercase font-semibold">{t.hero.badge}</span>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                <span className="text-teal-600">{t.hero.title}</span><br />
                <span className="text-slate-600">Automatización</span><br />
                <span className="relative inline-block">
                  {t.hero.titleHighlight}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-200 rounded-full" />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">
                {t.hero.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Demo Cards */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
              <p className="text-slate-600">{t.features.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1: Solicitar Cita */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-500">
                      <Calendar className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{t.features.appointment.title}</h3>
                      <p className="text-slate-600">{t.features.appointment.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {t.features.appointment.description}
                  </p>
                  
                  <button
                    onClick={() => setShowCitaModal(true)}
                    className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <span>{t.features.appointment.cta}</span>
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Recordatorio Automático */}
            <ScrollReveal delay={100}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-500">
                      <Clock className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{t.features.reminder.title}</h3>
                      <p className="text-slate-600">{t.features.reminder.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {t.features.reminder.description}
                  </p>

                  {/* Mock Phone Screen */}
                  <div className="relative">
                    <div className="max-w-sm mx-auto bg-white rounded-3xl p-4 border-2 border-slate-300 shadow-xl">
                      <div className="bg-slate-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-green-600 font-semibold text-sm">+1 555 123 4567</div>
                            <div className="text-slate-500 text-xs">Yesterday 10:30 AM</div>
                          </div>
                        </div>
                        <div className="bg-green-500 rounded-2xl rounded-bl-sm p-3 ml-4">
                          <p className="text-white text-sm leading-relaxed">
                            Hello María 📋 Reminder: Tomorrow Tuesday 25th at 10:00 AM with Dr. García (General Medicine). Don't forget your ID. 📍 123 Medical Plaza, Healthcare District. Need to reschedule? Reply CHANGE. — Medical Demo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-500 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-slate-500 text-sm">
                      {t.features.reminder.viewText}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Reseñas Google Automáticas */}
            <ScrollReveal delay={200}>
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-500">
                      <Star className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{t.features.reviews.title}</h3>
                      <p className="text-slate-600">{t.features.reviews.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-teal-600 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">{t.features.reviews.stat}</span>
                    </div>
                    <p className="text-slate-900 text-lg font-semibold">
                      {t.features.reviews.description}
                    </p>
                  </div>

                  {/* Mock Phone Screen */}
                  <div className="relative">
                    <div className="max-w-sm mx-auto bg-white rounded-3xl p-4 border-2 border-slate-300 shadow-xl">
                      <div className="bg-slate-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-green-600 font-semibold text-sm">+1 555 123 4567</div>
                            <div className="text-slate-500 text-xs">Today 3:15 PM</div>
                          </div>
                        </div>
                        <div className="bg-green-500 rounded-2xl rounded-bl-sm p-3 ml-4">
                          <p className="text-white text-sm leading-relaxed">
                            Hello María 😊 Thanks for your visit with Dr. García at Medical Demo. Would you help us with a review? Just 30 seconds: bit.ly/medical-demo-review. Your feedback helps us improve. Thanks! 🙏
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
              <div className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-500">
                      <Users className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{t.features.leads.title}</h3>
                      <p className="text-slate-600">{t.features.leads.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {t.features.leads.description}
                  </p>
                  
                  <button
                    onClick={() => setShowContactoModal(true)}
                    className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <span>{t.features.leads.cta}</span>
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section id="stats-section" className="relative py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.results.title}</h2>
              <p className="text-slate-600">{t.results.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="group text-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 hover:scale-105">
                <div className="text-4xl lg:text-5xl text-teal-600 mb-4 font-bold">
                  {confirmationRate}%
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.results.confirmed}</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group text-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 hover:scale-105">
                <div className="text-4xl lg:text-5xl text-teal-600 mb-4 font-bold">
                  +{reviewIncrease}%
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.results.reviews}</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group text-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 hover:scale-105">
                <div className="text-4xl lg:text-5xl text-teal-600 mb-4 font-bold">
                  {timeSaved} hrs
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.results.timeSaved}</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group text-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-500 hover:scale-105">
                <div className="text-4xl lg:text-5xl text-teal-600 mb-4 font-bold">
                  +{newPatients}%
                </div>
                <div className="text-sm text-slate-600 font-medium">{t.results.newPatients}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-12 lg:p-16 overflow-hidden text-white text-center">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {t.cta.title}
                </h2>
                <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
                  {t.cta.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => window.open('https://calendly.com/theremoteaidoc/30min', '_blank')}
                    className="px-8 py-4 bg-white text-teal-700 rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>{t.cta.bookCall}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="flex items-center space-x-2 text-teal-100 text-sm">
                    <span>or</span>
                  </div>
                  
                  <a
                    href="https://wa.me/573001234567?text=Hello,%20I'm%20interested%20in%20AutoMed%20for%20my%20medical%20practice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t.cta.whatsapp}</span>
                  </a>
                </div>

                <div className="text-center">
                  <p className="text-teal-100 text-sm">
                    <span className="font-semibold">{t.cta.footer}</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal para Cita */}
      {showCitaModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full border border-slate-200 my-4 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.modal.appointment.title}</h3>
            <form onSubmit={handleCitaSubmit} className="space-y-5">
              
              {/* Personal Info */}
              <div className="space-y-4">
                <h4 className="text-lg text-teal-600 border-b border-slate-200 pb-2 font-semibold">{t.modal.appointment.personal}</h4>
                <input
                  type="text"
                  placeholder={t.modal.appointment.fullName}
                  value={citaForm.nombre}
                  onChange={(e) => setCitaForm({...citaForm, nombre: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  required
                />
                <input
                  type="tel"
                  placeholder={t.modal.appointment.phone}
                  value={citaForm.telefono}
                  onChange={(e) => setCitaForm({...citaForm, telefono: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  required
                />
                <input
                  type="email"
                  placeholder={t.modal.appointment.email}
                  value={citaForm.email}
                  onChange={(e) => setCitaForm({...citaForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  required
                />
              </div>

              {/* Provider Selection */}
              <div className="space-y-4">
                <h4 className="text-lg text-teal-600 border-b border-slate-200 pb-2 font-semibold">{t.modal.appointment.selectDoctor}</h4>
                <select
                  value={citaForm.provider_id}
                  onChange={(e) => setCitaForm({...citaForm, provider_id: e.target.value, hora: ''})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  required
                >
                  <option value="">{t.modal.appointment.selectDoctorPlaceholder}</option>
                  {providers.map(provider => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name} — {provider.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Selection */}
              <div className="space-y-4">
                <h4 className="text-lg text-teal-600 border-b border-slate-200 pb-2 font-semibold">{t.modal.appointment.dateTime}</h4>
                <input
                  type="date"
                  value={citaForm.fecha}
                  onChange={(e) => setCitaForm({...citaForm, fecha: e.target.value, hora: ''})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  required
                />

                {/* Time Slots Grid */}
                {citaForm.provider_id && citaForm.fecha && (
                  <div>
                    <label className="block text-sm text-slate-600 mb-3 font-medium">{t.modal.appointment.availableSlots}</label>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {availableSlots.map(slot => (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setCitaForm({...citaForm, hora: slot.time})}
                          className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                            citaForm.hora === slot.time
                              ? 'bg-teal-600 text-white font-semibold'
                              : slot.available
                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 hover:border-teal-300'
                              : 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-200'
                          }`}
                        >
                          {slot.available ? slot.time : `${slot.time}\nBusy`}
                        </button>
                      ))}
                    </div>
                    {selectedProvider && (
                      <p className="text-xs text-slate-500 mt-2">
                        Clinic: {selectedProvider.name} — {selectedProvider.specialty}
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCitaModal(false);
                    setCitaForm({nombre: '', telefono: '', email: '', fecha: '', hora: '', provider_id: ''});
                  }}
                  className="flex-1 px-4 py-3 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {t.modal.appointment.cancel}
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingCita || !citaForm.hora}
                  className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isSubmittingCita ? 'Scheduling...' : t.modal.appointment.confirm}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal para Contacto */}
      {showContactoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.modal.contact.title}</h3>
            <form onSubmit={handleContactoSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t.modal.contact.fullName}
                value={contactoForm.nombre}
                onChange={(e) => setContactoForm({...contactoForm, nombre: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                required
              />
              <input
                type="tel"
                placeholder={t.modal.contact.phone}
                value={contactoForm.telefono}
                onChange={(e) => setContactoForm({...contactoForm, telefono: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                required
              />
              <input
                type="email"
                placeholder={t.modal.contact.email}
                value={contactoForm.email}
                onChange={(e) => setContactoForm({...contactoForm, email: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              />
              <select
                value={contactoForm.interes}
                onChange={(e) => setContactoForm({...contactoForm, interes: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                required
              >
                <option value="">{t.modal.contact.helpOptions.placeholder}</option>
                <option value="informacion_general">{t.modal.contact.helpOptions.general}</option>
                <option value="agendar_cita">{t.modal.contact.helpOptions.appointment}</option>
                <option value="consulta_especialista">{t.modal.contact.helpOptions.specialist}</option>
                <option value="segunda_opinion">{t.modal.contact.helpOptions.second_opinion}</option>
                <option value="telemedicina">{t.modal.contact.helpOptions.telemedicine}</option>
              </select>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactoModal(false)}
                  className="flex-1 px-4 py-3 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {t.modal.contact.cancel}
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingContacto}
                  className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isSubmittingContacto ? 'Sending...' : t.modal.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Message Modal */}
      {showWhatsAppMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-slate-200 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.modal.success.appointmentTitle}</h3>
            <p className="text-slate-600 mb-6">{t.modal.success.whatsappMessage}</p>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-semibold">+1 555 123 4567</span>
                <span className="text-slate-500 text-xs">Now</span>
              </div>
              <div className="bg-green-500 rounded-xl rounded-bl-sm p-3 text-left">
                <p className="text-white text-sm leading-relaxed">
                  {t.whatsappMessages.appointment(citaForm.nombre, selectedProvider?.name, selectedProvider?.specialty, citaForm.fecha ? new Date(citaForm.fecha + 'T00:00:00').toLocaleDateString() : '', citaForm.hora)}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowWhatsAppMessage(false)}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              {t.modal.success.continue}
            </button>
          </div>
        </div>
      )}

      {/* Contact Response Modal */}
      {showContactResponse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-slate-200 shadow-xl text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.modal.success.contactTitle}</h3>
            <p className="text-slate-600 mb-6">{t.modal.success.autoResponse}</p>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-semibold">+1 555 123 4567</span>
                <span className="text-slate-500 text-xs">Now</span>
              </div>
              <div className="bg-green-500 rounded-xl rounded-bl-sm p-3 text-left">
                <p className="text-white text-sm leading-relaxed">
                  {t.whatsappMessages.contact(contactoForm.nombre)}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowContactResponse(false)}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              {t.modal.success.continue}
            </button>
          </div>
        </div>
      )}
    </>
  );
}