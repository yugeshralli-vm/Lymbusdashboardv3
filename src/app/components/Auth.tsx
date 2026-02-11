import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ChevronLeft, 
  Activity, 
  ShieldCheck, 
  Stethoscope,
  Heart,
  Eye,
  EyeOff
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type AuthMode = 'login' | 'signup' | 'forgot-password';

interface AuthProps {
  onLogin: () => void;
}

const VALUE_PROPS = [
  {
    title: "Advancing Healthcare with AI Insights.",
    description: "Empower your clinical decision-making with real-time benchmarking and predictive analysis.",
    image: "https://images.unsplash.com/photo-1578496479763-c21c718af028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NzA3MDIzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "AI Insights."
  },
  {
    title: "Seamless Clinical Integration.",
    description: "Connect your existing medical data sources for a unified view of patient outcomes and metrics.",
    image: "https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMHRhYmxldCUyMGNsaW5pYyUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MDcyMzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "Clinical Integration."
  },
  {
    title: "HIPAA-Compliant Security & Privacy.",
    description: "Built on enterprise-grade infrastructure to ensure patient data remains private and secure at all times.",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZGlnaXRhbCUyMGhlYWx0aCUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNzAyNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "Security & Privacy."
  }
];

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VALUE_PROPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMode = (newMode: AuthMode) => {
    setMode(newMode);
    setShowPassword(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (mode === 'login' || mode === 'signup') {
        onLogin();
      } else {
        setMode('login');
      }
    }, 1500);
  };

  const formVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-[1100px] w-full bg-card rounded-[24px] shadow-2xl border border-brand-border overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Side: Value Proposition Carousel */}
        <div className="w-full md:w-1/2 relative bg-brand-dark flex flex-col justify-between p-12 overflow-hidden border-b md:border-b-0 md:border-r border-brand-border">
          {/* Background Images with Crossfade */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.25, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 grayscale mix-blend-overlay"
              >
                <ImageWithFallback 
                  src={VALUE_PROPS[currentSlide].image} 
                  alt="Clinical Environment"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-dark/60 to-transparent z-1" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/30">
                <Activity size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight leading-none">Lymbus AI</h1>
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Medical Intelligence</span>
              </div>
            </div>

            <div className="mt-16 h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold text-white leading-[1.1] max-w-[340px]">
                    {VALUE_PROPS[currentSlide].title.includes(VALUE_PROPS[currentSlide].highlight) ? (
                      <>
                        {VALUE_PROPS[currentSlide].title.split(VALUE_PROPS[currentSlide].highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="text-brand-blue">{VALUE_PROPS[currentSlide].highlight}</span>
                            )}
                          </span>
                        ))}
                      </>
                    ) : (
                      VALUE_PROPS[currentSlide].title
                    )}
                  </h2>
                  <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-[380px]">
                    {VALUE_PROPS[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex gap-2 mt-8">
              {VALUE_PROPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-brand-blue' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 mt-auto">
            {[
              { icon: ShieldCheck, label: 'HIPAA Compliant' },
              { icon: Stethoscope, label: 'Clinical Accuracy' },
              { icon: Heart, label: 'Patient Centric' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full shadow-sm">
                <feature.icon size={16} className="text-brand-blue" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wide">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Forms */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative">
          <AnimatePresence mode="wait">
            {mode === 'login' && (
              <motion.div
                key="login"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-[400px] mx-auto"
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-brand-dark mb-3">Welcome Back</h3>
                  <p className="text-brand-gray font-medium">Please enter your credentials to access the clinical dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Work Email</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-full h-14 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-2xl text-brand-dark font-medium placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        placeholder="doctor@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Password</label>
                      <button 
                        type="button"
                        onClick={() => toggleMode('forgot-password')}
                        className="text-xs font-bold text-brand-blue hover:underline underline-offset-4"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        className="w-full h-14 pl-12 pr-12 bg-brand-bg border border-brand-border rounded-2xl text-brand-dark font-medium placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        placeholder="••••••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-blue transition-colors focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl font-bold shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-brand-border text-center">
                  <p className="text-sm text-brand-gray font-medium">
                    New to Lymbus AI? {' '}
                    <button 
                      onClick={() => toggleMode('signup')}
                      className="text-brand-blue font-bold hover:underline underline-offset-4"
                    >
                      Request access
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === 'signup' && (
              <motion.div
                key="signup"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-[400px] mx-auto"
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-brand-dark mb-3">Create Account</h3>
                  <p className="text-brand-gray font-medium">Join our network of healthcare professionals for data-driven excellence.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">First Name</label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                          <User size={16} />
                        </div>
                        <input 
                          type="text" 
                          required
                          className="w-full h-12 pl-10 pr-4 bg-brand-bg border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full h-12 px-4 bg-brand-bg border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Work Email</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-full h-12 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Password</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        className="w-full h-12 pl-12 pr-12 bg-brand-bg border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-blue transition-colors focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" required className="mt-1 accent-brand-blue" id="terms" />
                    <label htmlFor="terms" className="text-[11px] text-brand-gray font-medium leading-relaxed">
                      I agree to the <button type="button" className="text-brand-blue font-bold">Terms of Service</button> and <button type="button" className="text-brand-blue font-bold">Data Privacy Protocol</button> (HIPAA compliant).
                    </label>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl font-bold shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 group transition-all disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Create Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-brand-border text-center">
                  <p className="text-sm text-brand-gray font-medium">
                    Already have an account? {' '}
                    <button 
                      onClick={() => toggleMode('login')}
                      className="text-brand-blue font-bold hover:underline underline-offset-4"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === 'forgot-password' && (
              <motion.div
                key="forgot"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-[400px] mx-auto"
              >
                <button 
                  onClick={() => toggleMode('login')}
                  className="flex items-center gap-2 text-brand-gray font-bold text-xs uppercase tracking-widest mb-8 hover:text-brand-blue transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Login
                </button>

                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-brand-dark mb-3">Reset Password</h3>
                  <p className="text-brand-gray font-medium">Enter your email and we'll send you instructions to reset your clinical account access.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest block ml-1">Work Email</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-full h-14 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-2xl text-brand-dark font-medium focus:outline-none focus:border-brand-blue transition-all"
                        placeholder="doctor@hospital.com"
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl font-bold shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 group transition-all disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Reset Link <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-12 p-6 bg-brand-bg/50 border border-brand-border rounded-2xl">
                  <p className="text-xs text-brand-gray font-medium text-center leading-relaxed">
                    Note: For security reasons, if an account exists with this email, you will receive reset instructions within 2-5 minutes.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Branding */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-8 pointer-events-none">
            <p className="text-[10px] font-bold text-brand-gray/40 uppercase tracking-[0.2em]">
              Lymbus AI © 2026 • Secure Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
