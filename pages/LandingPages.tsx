
import React from 'react';
import type { Page } from '../App';

interface LandingPagesProps {
  setCurrentPage?: (page: Page) => void;
}

const LandingPages: React.FC<LandingPagesProps> = ({ setCurrentPage }) => {
  const handleViewPlans = () => {
    if (setCurrentPage) {
      setCurrentPage('planos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const examples = [
    {
      title: 'Landing Page - Lançamento de Produto',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Landing page focada em conversão com formulário de captura',
      features: ['Design moderno', 'Call-to-action estratégico', 'Formulário otimizado']
    },
    {
      title: 'Landing Page - Evento',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'Página promocional para eventos e webinars',
      features: ['Countdown timer', 'Inscrições integradas', 'Design impactante']
    },
    {
      title: 'Landing Page - Serviços',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      description: 'Apresentação profissional de serviços B2B',
      features: ['SEO otimizado', 'Integração WhatsApp', 'Depoimentos']
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background futurista global */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 bg-transparent relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-8 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-top duration-700">
              <span className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">🚀</span>
                Landing Pages
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Landing Pages de <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Alta Conversão</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Páginas estratégicas focadas em transformar visitantes em clientes. Design moderno, otimizado para resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <a 
                href="#exemplos" 
                className="group/cta relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative">Ver Exemplos</span>
              </a>
              <button 
                onClick={handleViewPlans}
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
              >
                Ver Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é uma Landing Page */}
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
              O que é uma <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Landing Page</span>?
            </h2>
            <p className="text-slate-400 mb-6 text-center">
              Uma landing page é uma página web focada em um único objetivo: converter visitantes em leads ou clientes. 
              Diferente de um site completo, ela elimina distrações e direciona o usuário para uma ação específica.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Objetivo Único</h3>
                <p className="text-sm text-slate-400">Focada em uma ação: capturar email, vender produto, agendar reunião</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Alta Conversão</h3>
                <p className="text-sm text-slate-400">Design estratégico que guia o visitante até a ação desejada</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">📱</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Responsiva</h3>
                <p className="text-sm text-slate-400">Funciona perfeitamente em celular, tablet e desktop</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Rápida</h3>
                <p className="text-sm text-slate-400">Carregamento otimizado para não perder nenhum visitante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
            Exemplos de Landing Pages
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-700">
                <div className="h-48 bg-slate-900 relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{example.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{example.description}</p>
                  <ul className="space-y-2">
                    {example.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-400">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-8 sm:p-12 text-center border border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Pronto para criar sua Landing Page?
            </h2>
            <p className="text-slate-400 mb-8">
              Desenvolva uma página profissional que converte visitantes em clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewPlans}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all"
              >
                Ver Planos e Preços
              </button>
              <a 
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20criar%20uma%20Landing%20Page"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-slate-700 hover:border-emerald-500 text-white font-semibold rounded-xl transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPages;
