
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center text-center px-6 py-20 relative overflow-hidden"
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
        <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
          <span className="text-emerald-600 text-sm font-semibold">✨ Black Friday - Até 35% OFF</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
          Seu Negócio Merece uma
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mt-2">
            Presença Digital Profissional
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sites modernos e landing pages que convertem visitantes em clientes. 
          <span className="text-slate-500 block mt-2">Desenvolvidos com tecnologia de ponta e foco em resultados.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#planos"
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            Ver Planos e Preços
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl text-lg border-2 border-slate-700 hover:border-emerald-500 transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
            <div className="text-sm text-slate-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">5 dias</div>
            <div className="text-sm text-slate-600">Prazo de Entrega</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">Design</div>
            <div className="text-sm text-slate-600">Responsivo</div>
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
