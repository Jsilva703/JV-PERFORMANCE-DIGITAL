
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen bg-slate-900 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 w-full h-full -z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '3.5rem 3.5rem',
          maskImage: 'radial-gradient(ellipse at center, white 0%, transparent 70%)'
        }}
      ></div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[50vw] h-[50vw] bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
            JV Performance
          </span>
          <span className="text-orange-500"> Digital</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300 font-light">
          Transforme Sua Ideia em Sucesso
        </p>
        <a 
          href="#projetos"
          className="mt-10 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-orange-500/30"
        >
          Veja Meus Projetos
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#jornada" aria-label="Scroll down to Journey section">
          <svg className="w-8 h-8 text-slate-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
