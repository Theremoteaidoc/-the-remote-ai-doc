import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, MessageCircle, Calendar, Star, TrendingUp, Clock, Users, CheckCircle, 
  ArrowRight, ExternalLink, Globe, FileText, Settings, Bell, BarChart3, 
  RefreshCw, Zap, Activity, User, Mail, ChevronRight 
} from 'lucide-react';

const languages = {
  en: {
    seo: {
      title: 'AutoMed Clinical Automation Demo | The Remote AI Doc',
      description: 'See AutoMed\'s clinical automation pipeline in action. Watch 7 automated steps that transform patient requests into confirmed appointments.',
    },
    nav: {
      language: 'Español'
    },
    hero: {
      badge: 'AutoMed Clinical Automation',
      subtitle: 'See how it works'
    },
    pipeline: {
      steps: [
        {
          title: 'Form Received',
          description: 'Patient data captured instantly',
          icon: FileText
        },
        {
          title: 'Processing Request',
          description: 'n8n workflow triggered',
          icon: Settings
        },
        {
          title: 'Calendar Updated',
          description: 'Appointment added to schedule',
          icon: Calendar
        },
        {
          title: 'WhatsApp Confirmation Sent',
          description: 'Patient receives instant confirmation',
          icon: MessageCircle
        },
        {
          title: 'Reminder Scheduled',
          description: '24h before: automatic reminder queued',
          icon: Clock
        },
        {
          title: 'Review Request Queued',
          description: '2h after consultation: review request ready',
          icon: Star
        },
        {
          title: 'Complete!',
          description: 'This took 0 seconds. Your staff did nothing.',
          icon: CheckCircle,
          isFinal: true
        }
      ],
      watchAgain: 'Watch Again'
    },
    tryYourself: {
      title: 'Try It Yourself',
      subtitle: 'Submit the form below and watch the same automation run with YOUR data',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        doctor: 'Select Doctor',
        date: 'Appointment Date',
        time: 'Preferred Time',
        submit: 'Start Automation',
        submitting: 'Processing...'
      },
      doctors: [
        'Dr. María García - General Medicine',
        'Dr. Carlos Pérez - Pediatrics',
        'Dra. Ana Rodríguez - Dermatology',
        'Dr. Luis Martínez - Internal Medicine'
      ],
      times: [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
      ]
    },
    whatsapp: {
      en: (name, doctor, date, time) => 
        `Hello ${name || 'María'} 👋 Your appointment with ${doctor || 'Dr. García'} (General Medicine) has been confirmed for ${date || 'Monday, February 24'} at ${time || '10:00 AM'}.\n\n📍 123 Medical Plaza, Healthcare District\n\nReply CONFIRM to accept or CHANGE to reschedule. — Medical Demo | AutoMed`,
      es: (name, doctor, date, time) => 
        `Hola ${name || 'María'} 👋 Tu cita con ${doctor || 'Dra. García'} (Medicina General) ha sido confirmada para el ${date || 'Lunes 24 de Febrero'} a las ${time || '10:00'}.\n\n📍 Calle 10 #43A-25, El Poblado\n\nResponde CONFIRMAR para aceptar o CAMBIAR para reprogramar. — Clínica Demo | AutoMed`
    },
    results: {
      title: 'Real Results',
      subtitle: 'Measurable impact from day one',
      stats: [
        { value: '94%', label: 'Confirmed Appointments' },
        { value: '+340%', label: 'Google Reviews' },
        { value: '8hrs', label: 'Hours Saved/Week' },
        { value: '+45%', label: 'New Patients' }
      ]
    },
    cta: {
      title: 'Ready to automate your practice?',
      subtitle: 'Join 200+ clinics that already trust AutoMed to optimize their medical practice.',
      bookCall: 'Schedule a free call',
      whatsapp: 'Message us on WhatsApp',
      footer: 'Dr. Javier Rosas • Medical AI Specialist'
    }
  },
  es: {
    seo: {
      title: 'Demo Automatización Clínica AutoMed | The Remote AI Doc',
      description: 'Observa la automatización clínica de AutoMed en acción. 7 pasos automatizados que transforman solicitudes en citas confirmadas.',
    },
    nav: {
      language: 'English'
    },
    hero: {
      badge: 'Automatización Clínica AutoMed',
      subtitle: 'Mira cómo funciona'
    },
    pipeline: {
      steps: [
        {
          title: 'Formulario Recibido',
          description: 'Datos del paciente capturados instantáneamente',
          icon: FileText
        },
        {
          title: 'Procesando Solicitud',
          description: 'Flujo de trabajo n8n activado',
          icon: Settings
        },
        {
          title: 'Calendario Actualizado',
          description: 'Cita añadida a la agenda',
          icon: Calendar
        },
        {
          title: 'Confirmación WhatsApp Enviada',
          description: 'Paciente recibe confirmación instantánea',
          icon: MessageCircle
        },
        {
          title: 'Recordatorio Programado',
          description: '24h antes: recordatorio automático programado',
          icon: Clock
        },
        {
          title: 'Solicitud Reseña Programada',
          description: '2h después consulta: solicitud reseña lista',
          icon: Star
        },
        {
          title: '¡Completo!',
          description: 'Esto tomó 0 segundos. Tu equipo no hizo nada.',
          icon: CheckCircle,
          isFinal: true
        }
      ],
      watchAgain: 'Ver Otra Vez'
    },
    tryYourself: {
      title: 'Pruébalo Tú Mismo',
      subtitle: 'Envía el formulario y observa la misma automatización ejecutarse con TUS datos',
      form: {
        name: 'Nombre Completo',
        phone: 'Número de Teléfono',
        email: 'Correo Electrónico',
        doctor: 'Seleccionar Médico',
        date: 'Fecha de Cita',
        time: 'Hora Preferida',
        submit: 'Iniciar Automatización',
        submitting: 'Procesando...'
      },
      doctors: [
        'Dra. María García - Medicina General',
        'Dr. Carlos Pérez - Pediatría',
        'Dra. Ana Rodríguez - Dermatología',
        'Dr. Luis Martínez - Medicina Interna'
      ],
      times: [
        '09:00', '10:00', '11:00', '12:00', 
        '14:00', '15:00', '16:00', '17:00'
      ]
    },
    whatsapp: {
      en: (name, doctor, date, time) => 
        `Hello ${name || 'María'} 👋 Your appointment with ${doctor || 'Dr. García'} (General Medicine) has been confirmed for ${date || 'Monday, February 24'} at ${time || '10:00 AM'}.\n\n📍 123 Medical Plaza, Healthcare District\n\nReply CONFIRM to accept or CHANGE to reschedule. — Medical Demo | AutoMed`,
      es: (name, doctor, date, time) => 
        `Hola ${name || 'María'} 👋 Tu cita con ${doctor || 'Dra. García'} (Medicina General) ha sido confirmada para el ${date || 'Lunes 24 de Febrero'} a las ${time || '10:00'}.\n\n📍 Calle 10 #43A-25, El Poblado\n\nResponde CONFIRMAR para aceptar o CAMBIAR para reprogramar. — Clínica Demo | AutoMed`
    },
    results: {
      title: 'Resultados Reales',
      subtitle: 'Impacto medible desde el primer día',
      stats: [
        { value: '94%', label: 'Citas Confirmadas' },
        { value: '+340%', label: 'Reseñas Google' },
        { value: '8hrs', label: 'Tiempo Ahorrado/Sem' },
        { value: '+45%', label: 'Pacientes Nuevos' }
      ]
    },
    cta: {
      title: '¿Listo para automatizar tu consultorio?',
      subtitle: 'Únete a más de 200+ clínicas que ya confían en AutoMed para optimizar su práctica médica.',
      bookCall: 'Agenda una llamada gratis',
      whatsapp: 'Escríbenos por WhatsApp',
      footer: 'Dr. Javier Rosas • Especialista en IA Médica'
    }
  }
};

// Auto-Playing Pipeline Component
const AutoPlayingPipeline = ({ language = 'en' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showWatchAgain, setShowWatchAgain] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const t = languages[language];
  const steps = t.pipeline.steps;

  const startPipeline = () => {
    setCurrentStep(0);
    setCompletedSteps(new Set());
    setShowWatchAgain(false);
    setIsRunning(true);
  };

  useEffect(() => {
    // Auto-start on component mount
    const timer = setTimeout(startPipeline, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    // Variable duration per step — WhatsApp step (3) gets 30s, others 3.5s
    const stepDurations = [3500, 3500, 3500, 30000, 20000, 20000, 5000];
    const stepDuration = stepDurations[currentStep] || 3500;
    
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => new Set(prev).add(currentStep));
        
        if (currentStep + 1 < steps.length) {
          setCurrentStep(currentStep + 1);
        } else {
          // Pipeline complete
          setIsRunning(false);
          setShowWatchAgain(true);
          
          // Auto-restart after 5 seconds
          setTimeout(() => {
            startPipeline();
          }, 5000);
        }
      }, stepDuration);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isRunning, steps.length]);

  const renderStepContent = (stepIndex) => {
    if (currentStep !== stepIndex) return null;

    switch (stepIndex) {
      case 0: // Form Received
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg animate-fadeIn">
            <div className="space-y-3">
              <div className="text-sm text-slate-600">Patient Form Data</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Name:</span> María García</div>
                <div><span className="font-medium">Doctor:</span> Dra. García</div>
                <div><span className="font-medium">Date:</span> Feb 24</div>
                <div><span className="font-medium">Time:</span> 10:00 AM</div>
              </div>
            </div>
          </div>
        );

      case 1: // Processing Request
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg animate-fadeIn">
            <div className="space-y-4">
              <div className="text-sm text-slate-600 mb-4">n8n Workflow</div>
              <div className="flex items-center space-x-4">
                {['Webhook', 'Process Data', 'Send Messages'].map((node, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-16 h-8 rounded border-2 flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                      idx === 0 ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                      idx === 1 ? 'border-blue-500 bg-blue-50 text-blue-700' :
                      'border-purple-500 bg-purple-50 text-purple-700'
                    }`}>
                      {node}
                    </div>
                    {idx < 2 && (
                      <div className="w-8 h-0.5 bg-emerald-500 mx-2">
                        <div className="w-2 h-0.5 bg-emerald-600 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Calendar Updated
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg animate-fadeIn">
            <div className="text-sm text-slate-600 mb-4">February 2024</div>
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="p-1 font-medium text-slate-400">{day}</div>
              ))}
              {Array.from({length: 28}).map((_, i) => (
                <div key={i} className={`p-1 rounded ${
                  i === 23 ? 'bg-emerald-500 text-white font-bold animate-pulse' : 
                  'text-slate-700'
                }`}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="flex items-center text-xs text-emerald-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                Appointment scheduled
              </div>
            </div>
          </div>
        );

      case 3: // WhatsApp Confirmation - THE MONEY SHOT
        return (
          <div className="animate-fadeIn">
            <WhatsAppPhone 
              message={t.whatsapp[language]('María', 'Dra. García', 'Lunes 24 de Febrero', '10:00')}
              isActive={true}
            />
          </div>
        );

      case 4: // Reminder Scheduled
        return (
          <div className="animate-fadeIn space-y-3">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-slate-700">24h before → patient receives:</div>
            </div>
            <WhatsAppPhone 
              message={currentLang === 'es' 
                ? "Hola María 📋 Recordatorio: Mañana Martes 25 a las 10:00 AM con Dra. García (Medicina General). No olvides tu documento de identidad.\n\n📍 Calle 10 #43A-25, El Poblado, Medellín\n\n¿Necesitas reprogramar? Responde CAMBIAR.\n— Clínica Demo | AutoMed"
                : "Hello María 📋 Reminder: Tomorrow Tuesday 25th at 10:00 AM with Dr. García (General Medicine). Don't forget your ID.\n\n📍 123 Medical Plaza, Healthcare District\n\nNeed to reschedule? Reply CHANGE.\n— Medical Demo | AutoMed"
              }
              isActive={currentStep === 4} 
            />
          </div>
        );

      case 5: // Review Request Queued
        return (
          <div className="animate-fadeIn space-y-3">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="text-sm font-medium text-slate-700">2h after consultation → patient receives:</div>
            </div>
            <WhatsAppPhone 
              message={currentLang === 'es'
                ? "Hola María 😊 Gracias por tu visita con Dra. García en Clínica Demo. ¿Nos ayudas con una reseña? Solo 30 segundos:\n\n⭐ bit.ly/clinica-demo-review\n\nTu opinión nos ayuda a mejorar. ¡Gracias! 🙏\n— Clínica Demo | AutoMed"
                : "Hello María 😊 Thanks for your visit with Dr. García at Medical Demo. Would you help us with a review? Just 30 seconds:\n\n⭐ bit.ly/medical-demo-review\n\nYour feedback helps us improve. Thank you! 🙏\n— Medical Demo | AutoMed"
              }
              isActive={currentStep === 5} 
            />
          </div>
        );

      case 6: // Complete!
        return (
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 shadow-lg animate-fadeIn">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-bold text-emerald-800">
                This took 0 seconds.
              </div>
              <div className="text-lg font-semibold text-emerald-700">
                Your staff did nothing.
              </div>
              {showWatchAgain && (
                <button
                  onClick={startPipeline}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center space-x-2 mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t.pipeline.watchAgain}</span>
                </button>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Side - Pipeline Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === index && isRunning;
          const isCompleted = completedSteps.has(index);
          const isPending = currentStep < index || !isRunning;

          return (
            <div key={index} className="flex items-start space-x-4">
              {/* Step Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                isCompleted 
                  ? 'bg-emerald-500 border-emerald-500' 
                  : isActive 
                    ? 'bg-emerald-100 border-emerald-500 animate-pulse' 
                    : 'bg-slate-100 border-slate-300'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <Icon className={`w-6 h-6 ${
                    isActive ? 'text-emerald-600' : 'text-slate-400'
                  }`} />
                )}
              </div>

              {/* Step Content */}
              <div className={`flex-1 transition-all duration-500 ${
                isActive ? 'text-emerald-600' : 
                isCompleted ? 'text-slate-700' : 
                'text-slate-400'
              }`}>
                <h3 className={`font-semibold text-lg leading-tight ${
                  isActive ? 'text-emerald-700' : 
                  isCompleted ? 'text-slate-800' : 
                  'text-slate-500'
                }`}>
                  📋 {step.title}
                </h3>
                <p className="text-sm mt-1 opacity-75">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 mt-12 w-0.5 h-6 bg-slate-200"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Side - Content Area */}
      <div className="lg:pl-8">
        <div className="sticky top-8 space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              {renderStepContent(index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// WhatsApp Phone Component
const WhatsAppPhone = ({ message, isActive }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isActive || !message) return;

    setShowTyping(true);
    setDisplayedText('');
    setIsComplete(false);

    // Show typing for 1.5 seconds
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
      
      // Start typing effect - 100ms per character (slow, readable reveal)
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < message.length) {
          setDisplayedText(message.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
          setIsComplete(true);
        }
      }, 100);

      return () => clearInterval(typeTimer);
    }, 1500);

    return () => clearTimeout(typingTimer);
  }, [isActive, message]);

  if (!isActive) return null;

  return (
    <div className="max-w-xs mx-auto" style={{ perspective: '1200px' }}>
      {/* Premium 3D Phone Frame */}
      <div 
        className="relative"
        style={{ 
          transform: 'rotateY(-4deg) rotateX(2deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone shadow on surface */}
        <div className="absolute -bottom-6 left-4 right-4 h-8 bg-black/15 rounded-full blur-xl"></div>
        
        {/* Phone body */}
        <div className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-[3rem] p-[3px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
          {/* Side buttons */}
          <div className="absolute -left-[2px] top-28 w-[3px] h-8 bg-slate-700 rounded-l-sm"></div>
          <div className="absolute -left-[2px] top-40 w-[3px] h-12 bg-slate-700 rounded-l-sm"></div>
          <div className="absolute -left-[2px] top-56 w-[3px] h-12 bg-slate-700 rounded-l-sm"></div>
          <div className="absolute -right-[2px] top-36 w-[3px] h-16 bg-slate-700 rounded-r-sm"></div>
          
          {/* Inner bezel */}
          <div className="bg-black rounded-[2.75rem] p-[2px]">
            {/* Screen */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              {/* Dynamic Island / Status Bar */}
              <div className="bg-white pt-3 pb-1 px-8 flex items-center justify-between">
                <span className="text-xs font-semibold text-black">9:41</span>
                <div className="w-28 h-[26px] bg-black rounded-full mx-auto"></div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-[2px]">
                    <div className="w-[3px] h-[6px] bg-black rounded-sm"></div>
                    <div className="w-[3px] h-[8px] bg-black rounded-sm"></div>
                    <div className="w-[3px] h-[10px] bg-black rounded-sm"></div>
                    <div className="w-[3px] h-[12px] bg-black rounded-sm"></div>
                  </div>
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
                  <div className="w-6 h-3 border border-black rounded-sm relative">
                    <div className="absolute inset-[2px] right-[3px] bg-black rounded-[1px]"></div>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Header */}
              <div className="bg-emerald-600 px-4 py-3 flex items-center space-x-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center ring-2 ring-white/20">
                  <span className="text-emerald-700 text-xs font-bold">CD</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">Clínica Demo</div>
                  <div className="text-[11px] text-emerald-100">online</div>
                </div>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                <Phone className="w-5 h-5 text-white" />
              </div>
              
              {/* Chat Area */}
              <div className="bg-[#efeae2] min-h-[420px] p-4 relative">
            
            {showTyping ? (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-xs">
                  <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
                    {displayedText}
                    {!isComplete && <span className="animate-pulse">|</span>}
                  </p>
                  {isComplete && (
                    <div className="flex justify-end mt-1">
                      <div className="flex items-center space-x-1 text-xs text-slate-500">
                        <span>10:00</span>
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        <CheckCircle className="w-3 h-3 text-blue-500 -ml-2" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom input bar */}
          <div className="bg-[#f0f0f0] px-3 py-2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">+</span>
            </div>
            <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-slate-400">
              Type a message
            </div>
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/><path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="bg-white py-2 flex justify-center">
            <div className="w-32 h-1 bg-black rounded-full"></div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Try It Yourself Form
const TryYourselfForm = ({ language, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = languages[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onSubmit(formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      doctor: '',
      date: '',
      time: ''
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder={t.tryYourself.form.name}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder={t.tryYourself.form.phone}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder={t.tryYourself.form.email}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              required
            />
          </div>

          <div>
            <select
              value={formData.doctor}
              onChange={(e) => setFormData({...formData, doctor: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              required
            >
              <option value="">{t.tryYourself.form.doctor}</option>
              {t.tryYourself.doctors.map((doctor, index) => (
                <option key={index} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                required
              />
            </div>
            <div>
              <select
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                required
              >
                <option value="">{t.tryYourself.form.time}</option>
                {t.tryYourself.times.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Activity className="w-5 h-5" />
            <span>{isSubmitting ? t.tryYourself.form.submitting : t.tryYourself.form.submit}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// Animated Counter Hook
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

// Main Demo Component
export default function Demo() {
  const [currentLang, setCurrentLang] = useState('en');
  const [showUserPipeline, setShowUserPipeline] = useState(false);
  const [userFormData, setUserFormData] = useState(null);

  const t = languages[currentLang];

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'es' : 'en');
  };

  const handleUserFormSubmit = (formData) => {
    setUserFormData(formData);
    setShowUserPipeline(true);
    
    // Hide after completion
    setTimeout(() => {
      setShowUserPipeline(false);
    }, 30000); // 30 seconds total
  };

  // Animated counters
  const { count: confirmationRate, setIsVisible: setConfirmationVisible } = useCounter(94, 2000);
  const { count: reviewIncrease, setIsVisible: setReviewVisible } = useCounter(340, 2500);
  const { count: timeSaved, setIsVisible: setTimeVisible } = useCounter(8, 1500);
  const { count: newPatients, setIsVisible: setPatientsVisible } = useCounter(45, 2000);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'stats-section') {
          setConfirmationVisible(true);
          setReviewVisible(true);
          setTimeVisible(true);
          setPatientsVisible(true);
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
        <meta name="keywords" content="clinical automation demo, WhatsApp medical automation, healthcare AI demo, appointment booking automation, medical practice automation" />
        <link rel="canonical" href="https://theremoteaidoc.com/demo" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theremoteaidoc.com/demo" />
        <meta property="og:image" content="https://theremoteaidoc.com/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content="https://theremoteaidoc.com/profile.jpg" />
      </Helmet>

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{t.nav.language}</span>
        </button>
      </div>

      {/* Section 1: Hero + Auto-Playing Pipeline */}
      <section className="bg-white text-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              {t.hero.badge}
            </h1>
            <p className="text-xl text-slate-600">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Auto-Playing Pipeline */}
          <AutoPlayingPipeline language={currentLang} />
        </div>
      </section>

      {/* Section 2: Try It Yourself */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t.tryYourself.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.tryYourself.subtitle}
            </p>
          </div>

          <TryYourselfForm 
            language={currentLang} 
            onSubmit={handleUserFormSubmit}
          />

          {/* User's Custom Pipeline */}
          {showUserPipeline && userFormData && (
            <div className="mt-16 p-8 bg-white rounded-2xl border border-emerald-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                  Running automation with YOUR data...
                </h3>
                <p className="text-slate-600">Patient: {userFormData.name}</p>
              </div>
              <AutoPlayingPipeline language={currentLang} />
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Stats Section */}
      <section id="stats-section" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t.results.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.results.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-4xl lg:text-5xl text-emerald-600 mb-4 font-bold">
                {confirmationRate}%
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {t.results.stats[0].label}
              </div>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-4xl lg:text-5xl text-emerald-600 mb-4 font-bold">
                +{reviewIncrease}%
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {t.results.stats[1].label}
              </div>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-4xl lg:text-5xl text-emerald-600 mb-4 font-bold">
                {timeSaved}hrs
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {t.results.stats[2].label}
              </div>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-4xl lg:text-5xl text-emerald-600 mb-4 font-bold">
                +{newPatients}%
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {t.results.stats[3].label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-800 to-slate-900 p-12 lg:p-16 overflow-hidden text-white text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t.cta.title}
              </h2>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open('https://calendly.com/theremoteaidoc/30min', '_blank')}
                  className="px-8 py-4 bg-white text-emerald-700 rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold group"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.cta.bookCall}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center space-x-2 text-slate-300 text-sm">
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
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold">{t.cta.footer}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}