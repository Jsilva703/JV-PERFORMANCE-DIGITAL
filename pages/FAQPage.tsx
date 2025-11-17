import React from 'react';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import AnimatedSection from '../components/AnimatedSection';

interface FAQPageProps {
  setCurrentPage: (page: 'home' | 'landing-pages' | 'sites-institucionais' | 'design-responsivo' | 'planos' | 'faq') => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ setCurrentPage }) => {
  return (
    <main className="min-h-screen">
      {/* Hero FAQ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-slate-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-top duration-700">
              <span className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">❓</span>
                Perguntas Frequentes
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Tire Suas Dúvidas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Reunimos as principais perguntas sobre nossos serviços, prazos, pagamentos e processos.
              <br />
              <span className="text-emerald-400 font-semibold">Tudo que você precisa saber antes de começar seu projeto.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-700 delay-300">
              <button
                onClick={() => {
                  setCurrentPage('planos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group/cta relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  Ver Planos e Preços
                  <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <a
                href="https://wa.me/5511952445898?text=Oi!%20Estou%20na%20p%C3%A1gina%20de%20FAQ%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
                target="_blank"
                rel="noopener noreferrer"
                className="group/whats px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <div className="bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1">24/7</div>
                <div className="text-xs text-slate-400">Suporte</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-xs text-slate-400">Transparente</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1">7 dias</div>
                <div className="text-xs text-slate-400">Entrega</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
};

export default FAQPage;
