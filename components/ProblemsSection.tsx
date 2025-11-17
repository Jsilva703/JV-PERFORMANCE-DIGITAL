import React from 'react';
import type { Page } from '../App';

interface ProblemsSectionProps {
  setCurrentPage?: (page: Page) => void;
}

const ProblemsSection: React.FC<ProblemsSectionProps> = ({ setCurrentPage }) => {
  const problems = [
    {
      icon: '😰',
      problem: 'Link feio na bio do Instagram?',
      solution: 'Landing Page Profissional',
      description: 'Tenha uma página bonita e que converte visitantes em clientes',
      page: 'landing-pages' as Page,
    },
    {
      icon: '📱',
      problem: 'Site não abre direito no celular?',
      solution: 'Design Responsivo',
      description: 'Seu site perfeito em qualquer dispositivo - celular, tablet ou desktop',
      page: 'design-responsivo' as Page,
    },
    {
      icon: '🏢',
      problem: 'Falta de credibilidade profissional?',
      solution: 'Site Institucional Completo',
      description: 'Domínio próprio, múltiplas páginas e presença digital de verdade',
      page: 'sites-institucionais' as Page,
    },
  ];

  const ideas = [
    {
      icon: '🎯',
      title: 'Capturar Leads',
      description: 'Landing page com formulário para coletar contatos interessados',
      best: 'Landing Page',
    },
    {
      icon: '🛍️',
      title: 'Vender Produtos/Serviços',
      description: 'Apresente seu catálogo de forma profissional e atrativa',
      best: 'Site Institucional',
    },
    {
      icon: '📢',
      title: 'Divulgar Eventos',
      description: 'Página focada para promover webinars, workshops ou lançamentos',
      best: 'Landing Page',
    },
    {
      icon: '💼',
      title: 'Fortalecer Marca',
      description: 'Site completo com sobre, portfólio, blog e área de contato',
      best: 'Site Institucional',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-800 relative overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Seção de Problemas */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/40 rounded-full mb-6 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 animate-pulse">
              <span className="text-red-400 text-sm font-bold">⚠️ Problemas Comuns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Seu Negócio Merece <span className="block sm:inline bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">Mais Que Links Amadores</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Pare de perder clientes por falta de profissionalismo. <span className="text-emerald-400 font-semibold">Veja qual solução</span> é ideal para você:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group/problem relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02] hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/problem:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl group-hover/problem:bg-red-500/20 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="text-6xl mb-6 text-center group-hover/problem:scale-110 group-hover/problem:rotate-6 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-4 text-center min-h-[3.5rem] flex items-center justify-center leading-tight">
                    {item.problem}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6 rounded-full group-hover/problem:w-32 transition-all duration-300"></div>
                  <h4 className="text-xl font-bold text-white mb-3 text-center min-h-[3.5rem] flex items-center justify-center leading-tight">
                    ✅ {item.solution}
                  </h4>
                  <p className="text-slate-300 text-sm text-center mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      if (setCurrentPage) {
                        setCurrentPage(item.page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="group/btn relative w-full px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all text-sm mt-auto shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative">Ver Solução Completa</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
                        <button
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('planos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group/cta relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                Ver Nossos Planos
                <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <span className="text-slate-500 text-sm font-semibold">OU</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          </div>
        </div>

        {/* Seção de Ideias */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/50 rounded-full mb-4">
              <span className="text-emerald-500 text-sm font-semibold">💡 Não Sabe o Que Precisa?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Veja Qual Solução é Ideal para Seu Objetivo
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Descubra qual tipo de site vai te ajudar a alcançar seus objetivos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-3 text-center">{idea.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">
                  {idea.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 text-center min-h-[3rem]">
                  {idea.description}
                </p>
                <div className="pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-500 text-center mb-2">Melhor opção:</p>
                  <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/50 rounded-lg">
                    <p className="text-emerald-500 font-semibold text-sm text-center">
                      {idea.best}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ainda em Dúvida? Vamos Conversar! 💬
              </h3>
              <p className="text-slate-400 mb-6">
                Nossa equipe vai te ajudar a escolher a solução perfeita para o seu negócio.
                Atendimento rápido e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511952445898?text=Olá!%20Preciso%20de%20ajuda%20para%20escolher%20a%20melhor%20solução%20para%20meu%20negócio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
                  </svg>
                  Falar com Especialista
                </a>
                <button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage('planos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-slate-700 hover:border-emerald-500 transition-all"
                >
                  <span>📋</span>
                  Ver Planos Detalhados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
