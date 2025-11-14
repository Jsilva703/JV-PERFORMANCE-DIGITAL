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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Seção de Problemas */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <span className="text-red-600 text-sm font-semibold">⚠️ Problemas Comuns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Seu Negócio Merece Mais Que Links Amadores
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Pare de perder clientes por falta de profissionalismo. Veja qual solução é ideal para você:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl group flex flex-col"
              >
                <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-2 text-center min-h-[3.5rem] flex items-center justify-center">
                  {item.problem}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-4"></div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 text-center min-h-[3.5rem] flex items-center justify-center">
                  ✅ {item.solution}
                </h4>
                <p className="text-slate-600 text-sm text-center mb-6 flex-grow">
                  {item.description}
                </p>
                <button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all text-sm mt-auto"
                >
                  Ver Solução
                </button>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
            >
              <span>💰</span>
              Ver Todos os Planos e Preços
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-slate-400 text-sm font-semibold">OU</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>

        {/* Seção de Ideias */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <span className="text-cyan-600 text-sm font-semibold">💡 Não Sabe o Que Precisa?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Veja Qual Solução é Ideal para Seu Objetivo
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Descubra qual tipo de site vai te ajudar a alcançar seus objetivos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-3 text-center">{idea.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  {idea.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 text-center min-h-[3rem]">
                  {idea.description}
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500 text-center mb-2">Melhor opção:</p>
                  <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-600 font-semibold text-sm text-center">
                      {idea.best}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ainda em Dúvida? Vamos Conversar! 💬
              </h3>
              <p className="text-slate-600 mb-6">
                Nossa equipe vai te ajudar a escolher a solução perfeita para o seu negócio.
                Atendimento rápido e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511952445898?text=Olá!%20Preciso%20de%20ajuda%20para%20escolher%20a%20melhor%20solução%20para%20meu%20negócio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all"
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
