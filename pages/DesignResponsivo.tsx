
import React from 'react';
import type { Page } from '../App';

interface DesignResponsivoProps {
  setCurrentPage?: (page: Page) => void;
}

const DesignResponsivo: React.FC<DesignResponsivoProps> = ({ setCurrentPage }) => {
  const handleViewPlans = () => {
    if (setCurrentPage) {
      setCurrentPage('planos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const devices = [
    {
      name: 'Mobile',
      icon: '📱',
      description: 'Smartphones de todos os tamanhos',
      features: ['Menu otimizado', 'Touch-friendly', 'Carregamento rápido']
    },
    {
      name: 'Tablet',
      icon: '📲',
      description: 'iPad e tablets Android',
      features: ['Layout adaptável', 'Orientação portrait/landscape', 'Interface intuitiva']
    },
    {
      name: 'Desktop',
      icon: '💻',
      description: 'Computadores e notebooks',
      features: ['Experiência completa', 'Navegação avançada', 'Recursos expandidos']
    },
  ];

  const examples = [
    {
      title: 'E-commerce Responsivo',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Loja online que funciona perfeitamente em qualquer dispositivo',
      features: ['Checkout mobile', 'Navegação por categorias', 'Busca otimizada']
    },
    {
      title: 'Dashboard Adaptável',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Painel administrativo que se adapta a todas as telas',
      features: ['Menu lateral responsivo', 'Gráficos adaptativos', 'Tabelas scrolláveis']
    },
    {
      title: 'Blog Multi-dispositivo',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      description: 'Blog com leitura confortável em qualquer tamanho de tela',
      features: ['Tipografia fluida', 'Imagens responsivas', 'Navegação intuitiva']
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-slate-950 overflow-hidden">
        {/* Background futurista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
              <span className="text-emerald-500 text-sm font-semibold">📱 Design Responsivo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Design</span> que se Adapta a Qualquer Tela
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Seu site funcionando perfeitamente em celulares, tablets e desktops. Uma experiência impecável em todos os dispositivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#exemplos" 
                className="group/cta relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Ver Exemplos</span>
              </a>
              <button 
                onClick={handleViewPlans}
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700/50 hover:border-emerald-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Ver Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é Design Responsivo */}
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
              O que é <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Design Responsivo</span>?
            </h2>
            <p className="text-slate-400 mb-6 text-center">
              Design responsivo é a técnica que faz seu site se adaptar automaticamente ao tamanho da tela do usuário. 
              Seja no celular, tablet ou computador, seu conteúdo sempre fica organizado e fácil de usar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">📊</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">+60% Mobile</h3>
                <p className="text-sm text-slate-400">Mais de 60% dos acessos vêm de smartphones. Seu site está preparado?</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Melhor Experiência</h3>
                <p className="text-sm text-slate-400">Usuários ficam mais tempo e convertem mais em sites responsivos</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🔍</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">SEO Google</h3>
                <p className="text-sm text-slate-400">Google prioriza sites mobile-friendly nos resultados de busca</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">💰</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Economia</h3>
                <p className="text-sm text-slate-400">Um único site para todos os dispositivos ao invés de versões separadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispositivos Suportados */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
              Funciona em <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Todos os Dispositivos</span>
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {devices.map((device, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg text-center">
                  <div className="text-5xl mb-4">{device.icon}</div>
                  <h3 className="font-bold text-lg text-white mb-2">{device.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{device.description}</p>
                  <ul className="space-y-2">
                    {device.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-xs text-slate-400">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
              Como o <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Design Responsivo</span> Funciona?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2">Layout Fluido</h3>
                  <p className="text-slate-400 text-sm">Os elementos se reorganizam automaticamente conforme o tamanho da tela, garantindo que tudo fique legível e acessível.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2">Imagens Adaptáveis</h3>
                  <p className="text-slate-400 text-sm">Fotos e gráficos se ajustam ao espaço disponível, carregando na resolução ideal para cada dispositivo.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2">Navegação Inteligente</h3>
                  <p className="text-slate-400 text-sm">Menus e botões se adaptam para facilitar o uso em telas touch e com mouse, garantindo a melhor experiência.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2">Performance Otimizada</h3>
                  <p className="text-slate-400 text-sm">Carregamento rápido em conexões móveis, economizando dados e melhorando a experiência do usuário.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Exemplos</span> de Design Responsivo
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-700">
                <div className="h-48 bg-slate-950 relative overflow-hidden">
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
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-8 sm:p-12 text-center border border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Pronto para ter um <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Site Responsivo</span>?
            </h2>
            <p className="text-slate-400 mb-8">
              Garanta que seus clientes tenham a melhor experiência em qualquer dispositivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewPlans}
                className="group/cta relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Ver Planos e Preços</span>
              </button>
              <a 
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20um%20site%20com%20Design%20Responsivo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700/50 hover:border-emerald-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
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

export default DesignResponsivo;
