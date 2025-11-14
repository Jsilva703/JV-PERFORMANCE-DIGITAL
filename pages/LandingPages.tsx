
import React from 'react';
import type { Page } from '../App';

interface LandingPagesProps {
  setCurrentPage?: (page: Page) => void;
}

const LandingPages: React.FC<LandingPagesProps> = ({ setCurrentPage }) => {
  const handleViewPlans = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector('#planos');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-600 text-sm font-semibold">🚀 Landing Pages</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Landing Pages de Alta Conversão
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              Páginas estratégicas focadas em transformar visitantes em clientes. Design moderno, otimizado para resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#exemplos" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Ver Exemplos
              </a>
              <button 
                onClick={handleViewPlans}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-emerald-500 transition-all"
              >
                Ver Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é uma Landing Page */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 text-center">
              O que é uma Landing Page?
            </h2>
            <p className="text-slate-600 mb-6 text-center">
              Uma landing page é uma página web focada em um único objetivo: converter visitantes em leads ou clientes. 
              Diferente de um site completo, ela elimina distrações e direciona o usuário para uma ação específica.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-slate-900 mb-2">Objetivo Único</h3>
                <p className="text-sm text-slate-600">Focada em uma ação: capturar email, vender produto, agendar reunião</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">Alta Conversão</h3>
                <p className="text-sm text-slate-600">Design estratégico que guia o visitante até a ação desejada</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-slate-900 mb-2">Responsiva</h3>
                <p className="text-sm text-slate-600">Funciona perfeitamente em celular, tablet e desktop</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-slate-900 mb-2">Rápida</h3>
                <p className="text-sm text-slate-600">Carregamento otimizado para não perder nenhum visitante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
            Exemplos de Landing Pages
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{example.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{example.description}</p>
                  <ul className="space-y-2">
                    {example.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-600">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para criar sua Landing Page?
            </h2>
            <p className="text-emerald-50 mb-8">
              Desenvolva uma página profissional que converte visitantes em clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewPlans}
                className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                Ver Planos e Preços
              </button>
              <a 
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20criar%20uma%20Landing%20Page"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all"
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
