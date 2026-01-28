
import { useState, useEffect } from 'react';
import { Star, ArrowRight, Linkedin, Twitter, Youtube, Stethoscope, Brain, Ship, BookOpen, Sparkles } from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [email, setEmail] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
   
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubscribe = (e, emailValue) => {
    e.preventDefault();
    console.log('Subscribe:', emailValue);
    // Mock subscription
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary Aurora Glow */}
        <div
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, rgba(34, 211, 238, 0.2) 30%, transparent 70%)',
            animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
       
        {/* Secondary Parallax Glow */}
        <div
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 60%)',
            transform: `translateY(${scrollY * 0.3}px)`,
            animation: 'float 10s ease-in-out infinite',
          }}
        />
       
        {/* Tertiary Moving Glow */}
        <div
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 50%)',
            animation: 'float 12s ease-in-out infinite reverse',
          }}
        />

        {/* Mouse Follow Glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.4) 0%, transparent 70%)',
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        />

        {/* Subtle Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
       
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(25px); }
        }
       
        @keyframes border-flow {
          0%, 100% { border-color: rgba(100, 116, 139, 0.3); }
          50% { border-color: rgba(45, 212, 191, 0.5); }
        }
       
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl tracking-tight">
                <span className="text-teal-400">Remote</span>
                <span className="text-white">AIDoc</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#expertise" className="text-slate-400 hover:text-white transition-colors duration-300">Expertise</a>
              <a href="#connect" className="text-slate-400 hover:text-white transition-colors duration-300">Connect</a>
              <button className="relative px-6 py-2.5 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-teal-500/50 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="relative">Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <ScrollReveal>
                <div className="flex items-center space-x-2 text-teal-400">
                  <Star className="w-4 h-4 fill-teal-400" />
                  <span className="text-sm">Your Guide to Clinical AI from the Edge of Medicine</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-5xl lg:text-7xl tracking-tight leading-[1.1] relative">
                  Redefining<br />
                  <span className="text-slate-400">the Future of</span><br />
                  <span className="relative inline-block italic text-teal-400">
                    Clinical
                    <span className="absolute -inset-1 bg-teal-500/20 blur-2xl opacity-50" />
                  </span> AI
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  I practice medicine 1,000 miles from the nearest hospital — and I train the AI systems that will help the next generation of doctors do the same.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <form onSubmit={(e) => handleSubscribe(e, email)} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Right Column - Photo */}
            <ScrollReveal delay={200} className="relative">
              <div className="relative">
                {/* Glow Behind Photo */}
                <div className="absolute inset-0 bg-teal-500/30 blur-3xl rounded-2xl translate-y-4" />
               
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-[3/4] lg:aspect-[4/5]">
                  {/* Actual Photo */}
                  <img
                    src="/profile.jpg"
                    alt="Dr. Javier Rosas"
                    className="w-full h-full object-cover"
                  />
                 
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
                      </div>
                      <div>
                        <p className="text-white">Dr. Javier Rosas</p>
                        <p className="text-sm text-slate-400">Ship Physician & AI Trainer</p>
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
      <section className="relative border-y border-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400">
                  10+
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-500">Years Clinical Experience</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400">
                  5,000+
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-500">Patients Served at Sea</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400">
                  1,000
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-500">Miles from Shore</div>
              </div>
              <div className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative inline-block text-4xl lg:text-5xl text-teal-400">
                  4+
                  <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm text-slate-500">AI Platforms Trained</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-sm text-teal-400 tracking-wider uppercase">About</div>
                <h2 className="text-4xl lg:text-5xl tracking-tight leading-tight">
                  Not Your Typical<br />
                  <span className="text-slate-500">AI Expert</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Most AI trainers work from coffee shops. I work from the middle of the ocean, practicing emergency medicine on cruise ships where the nearest hospital is days away by helicopter.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-400 leading-relaxed">
                  This unique perspective—balancing high-stakes clinical decisions with cutting-edge AI development—gives me an insider's understanding of what healthcare AI actually needs to be: reliable, practical, and trustworthy when it matters most.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg text-slate-400 leading-relaxed">
                  I bridge the gap between the technical capabilities of AI and the real-world demands of medicine, training AI systems for leading platforms while staying on the front lines of patient care.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <ScrollReveal>
              <div className="text-sm text-teal-400 tracking-wider uppercase">Expertise</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl tracking-tight">What I Bring</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 - Clinical Practice */}
            <ScrollReveal delay={0}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 space-y-4">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
               
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                    <Stethoscope className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl text-white mt-4">Clinical Practice</h3>
                  <ul className="space-y-3 text-slate-400 mt-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Ship Physician, Royal Caribbean
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      10+ Years Emergency & Maritime Medicine
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      High-stakes decision making in isolation
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 - AI Training */}
            <ScrollReveal delay={100}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 space-y-4">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
               
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                    <Brain className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl text-white mt-4">AI Training & Evaluation</h3>
                  <ul className="space-y-3 text-slate-400 mt-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Medical AI Trainer — Mercor AI, Micro1, Pareto, Alignerr
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      RLHF & Prompt Engineering
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Clinical Peer Reviewer
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 - Remote Medicine */}
            <ScrollReveal delay={200}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 space-y-4">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
               
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                    <Ship className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl text-white mt-4">Remote Medicine</h3>
                  <ul className="space-y-3 text-slate-400 mt-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Practicing 1,000+ miles from hospitals
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Telemedicine & AI-assisted diagnosis
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Resource-limited healthcare solutions
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4 - Healthcare AI Content */}
            <ScrollReveal delay={300}>
              <div className="group relative p-8 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 space-y-4">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
               
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-500">
                    <BookOpen className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl text-white mt-4">Healthcare AI Content</h3>
                  <ul className="space-y-3 text-slate-400 mt-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Clinical AI tool reviews
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Practical implementation guides
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Future of medicine insights
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <ScrollReveal>
              <div className="text-sm text-teal-400 tracking-wider uppercase">Connect</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl lg:text-5xl tracking-tight">Let's Connect</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Follow along as I navigate the intersection of remote medicine and artificial intelligence
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/javier-rosas-670267b0/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 border border-slate-800/50 rounded-xl hover:border-teal-500/50 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Linkedin className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white">LinkedIn</span>
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 border border-slate-800/50 rounded-xl hover:border-teal-500/50 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Twitter className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white">Twitter / X</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/40 border border-slate-800/50 rounded-xl hover:border-teal-500/50 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Youtube className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white">YouTube</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-500 p-12 lg:p-16 overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
             
              <div className="relative space-y-8 text-center">
                <h2 className="text-3xl lg:text-4xl text-slate-900">
                  Ready to explore the future of clinical AI?
                </h2>
                <p className="text-lg text-slate-900/80 max-w-xl mx-auto">
                  Join my weekly newsletter for practical insights on healthcare AI, remote medicine, and the tools shaping tomorrow's clinical practice.
                </p>

                <form onSubmit={(e) => handleSubscribe(e, ctaEmail)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl">
                <span className="text-teal-400">Remote</span>
                <span className="text-white">AIDoc</span>
              </span>
              <span className="text-slate-500">© 2026</span>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <a href="#privacy" className="text-slate-500 hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#terms" className="text-slate-500 hover:text-white transition-colors duration-300">Terms</a>
              <a href="#contact" className="text-slate-500 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
