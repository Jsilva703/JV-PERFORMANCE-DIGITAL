
import React from 'react';
import type { Page } from '../App';

interface HeroSectionProps {
  setCurrentPage?: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4 sm:mb-6">
          <span className="text-emerald-600 text-xs sm:text-sm font-semibold">✨ Black Friday - Até 35% OFF</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900 px-4">
          Seu Negócio Merece uma
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mt-1 sm:mt-2">
            Presença Digital Profissional
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
          Sites modernos e landing pages que convertem visitantes em clientes. 
          <span className="text-slate-500 block mt-1 sm:mt-2">Desenvolvidos com tecnologia de ponta e foco em resultados.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full sm:w-auto">
          <button 
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage('planos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl text-sm sm:text-base hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
          >
            Ver Planos e Preços
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <a 
            href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl text-sm sm:text-base border-2 border-slate-700 hover:border-emerald-500 transition-all duration-300 text-center"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">5 dias</div>
            <div className="text-[10px] sm:text-xs text-slate-600">Prazo de Entrega</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">Design</div>
            <div className="text-[10px] sm:text-xs text-slate-600">Responsivo</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#servicos" aria-label="Scroll para serviços">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
