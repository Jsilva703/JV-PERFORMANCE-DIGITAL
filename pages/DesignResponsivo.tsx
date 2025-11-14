
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
              <span className="text-purple-600 text-sm font-semibold">📱 Design Responsivo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Design que se Adapta a Qualquer Tela
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              Seu site funcionando perfeitamente em celulares, tablets e desktops. Uma experiência impecável em todos os dispositivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#exemplos" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Ver Exemplos
              </a>
              <button 
                onClick={handleViewPlans}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-purple-500 transition-all"
              >
                Ver Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é Design Responsivo */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 text-center">
              O que é Design Responsivo?
            </h2>
            <p className="text-slate-600 mb-6 text-center">
              Design responsivo é a técnica que faz seu site se adaptar automaticamente ao tamanho da tela do usuário. 
              Seja no celular, tablet ou computador, seu conteúdo sempre fica organizado e fácil de usar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-slate-900 mb-2">+60% Mobile</h3>
                <p className="text-sm text-slate-600">Mais de 60% dos acessos vêm de smartphones. Seu site está preparado?</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-slate-900 mb-2">Melhor Experiência</h3>
                <p className="text-sm text-slate-600">Usuários ficam mais tempo e convertem mais em sites responsivos</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-slate-900 mb-2">SEO Google</h3>
                <p className="text-sm text-slate-600">Google prioriza sites mobile-friendly nos resultados de busca</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-slate-900 mb-2">Economia</h3>
                <p className="text-sm text-slate-600">Um único site para todos os dispositivos ao invés de versões separadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispositivos Suportados */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
              Funciona em Todos os Dispositivos
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {devices.map((device, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg text-center">
                  <div className="text-5xl mb-4">{device.icon}</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{device.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{device.description}</p>
                  <ul className="space-y-2">
                    {device.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-xs text-slate-600">
                        <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
              Como o Design Responsivo Funciona?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Layout Fluido</h3>
                  <p className="text-slate-600 text-sm">Os elementos se reorganizam automaticamente conforme o tamanho da tela, garantindo que tudo fique legível e acessível.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Imagens Adaptáveis</h3>
                  <p className="text-slate-600 text-sm">Fotos e gráficos se ajustam ao espaço disponível, carregando na resolução ideal para cada dispositivo.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Navegação Inteligente</h3>
                  <p className="text-slate-600 text-sm">Menus e botões se adaptam para facilitar o uso em telas touch e com mouse, garantindo a melhor experiência.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Performance Otimizada</h3>
                  <p className="text-slate-600 text-sm">Carregamento rápido em conexões móveis, economizando dados e melhorando a experiência do usuário.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
            Exemplos de Design Responsivo
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
                        <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para ter um Site Responsivo?
            </h2>
            <p className="text-purple-50 mb-8">
              Garanta que seus clientes tenham a melhor experiência em qualquer dispositivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewPlans}
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                Ver Planos e Preços
              </button>
              <a 
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20um%20site%20com%20Design%20Responsivo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all"
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
