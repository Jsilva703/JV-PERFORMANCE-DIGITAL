
import React from 'react';
import type { Page } from '../App';
import { trackButtonClick, trackWhatsAppClick, trackNavigation } from '../utils/analytics';

interface HeroSectionProps {
  setCurrentPage?: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 pt-20 pb-12 relative overflow-hidden">
      {/* Background futurista com grid e gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}} />
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/40 rounded-full mb-6 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-top duration-700 animate-pulse">
            <span className="text-red-400 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg">🔥</span>
              <span className="hidden sm:inline">Black Friday: Até 35% OFF - Últimas Vagas de Novembro!</span>
              <span className="sm:hidden">Black Friday: 35% OFF</span>
              <span className="text-base sm:text-lg">🔥</span>
            </span>
          </div>                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <span className="block sm:inline">Transforme Sua Presença</span>{" "}
            <span className="block sm:inline">Digital com</span>{" "}
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] relative">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-400/40 via-emerald-500/40 to-emerald-600/40 bg-clip-text text-transparent">Sites que Convertem</span>
              <span className="relative">Sites que Convertem</span>
            </span>
          </h1>
        
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Crie um <span className="text-white font-bold">site profissional que gera vendas</span> sem gastar uma fortuna.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 text-emerald-400 font-semibold text-sm sm:text-base animate-in fade-in duration-700 delay-250">
            <span className="flex items-center gap-1.5">✅ Entrega em 7 dias</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">✅ 4 revisões grátis</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">✅ Pagamento único</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8 text-slate-400 text-xs sm:text-sm animate-in fade-in duration-700 delay-300">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">JS</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">MC</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-400 border-2 border-slate-900 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">LF</div>
            </div>
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm">+15 clientes este mês</span>
          </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full sm:w-auto max-w-lg sm:max-w-none mx-auto">
          <button 
            onClick={() => {
              trackButtonClick('Ver Planos - Hero CTA', 'Hero Section', 'planos');
              trackNavigation('home', 'planos', 'button');
              if (setCurrentPage) {
                setCurrentPage('planos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group/cta relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-2xl text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 text-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="hidden sm:inline">Quero Meu Site Agora - 35% OFF</span>
              <span className="sm:hidden">Garantir 35% OFF</span>
            </span>
          </button>
          <a 
            href="https://wa.me/5511952445898?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20os%20planos.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick('Hero Section', 'Dúvidas sobre planos');
              trackButtonClick('WhatsApp - Tirar Dúvidas', 'Hero Section', 'WhatsApp');
            }}
            className="group/whats relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-800/70 backdrop-blur-sm text-white font-semibold rounded-xl text-sm sm:text-base border-2 border-slate-600/50 hover:border-emerald-500/70 hover:bg-slate-800/90 transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="hidden sm:inline">Tirar Dúvidas (Resposta Rápida)</span>
              <span className="sm:hidden">Tirar Dúvidas</span>
            </span>
          </a>
        </div>
        <p className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-sm text-center animate-in fade-in duration-700 delay-400">
          <span className="inline-flex items-center gap-1.5">🔒 Sem compromisso</span>
          <span className="mx-2 hidden sm:inline">•</span>
          <span className="hidden sm:inline">⚡ Atendimento em minutos</span>
        </p>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="group/trust bg-slate-800/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-1">4.9⭐</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-semibold">Avaliação Média</div>
            </div>
          </div>
          <div className="group/trust bg-slate-800/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-1">&lt; 7 dias</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-semibold">Entrega Garantida</div>
            </div>
          </div>
          <div className="group/trust bg-slate-800/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-1">4x</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-semibold">Revisões Grátis</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#servicos" aria-label="Scroll para serviços">
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
