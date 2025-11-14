
import React from 'react';
import type { Page } from '../App';

interface SitesInstitucionaisProps {
  setCurrentPage?: (page: Page) => void;
}

const SitesInstitucionais: React.FC<SitesInstitucionaisProps> = ({ setCurrentPage }) => {
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
      title: 'Site Corporativo - Consultoria',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Site institucional para empresa de consultoria empresarial',
      features: ['Múltiplas páginas', 'Blog integrado', 'Área de contato']
    },
    {
      title: 'Site - Escritório de Advocacia',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      description: 'Presença digital profissional para serviços jurídicos',
      features: ['Áreas de atuação', 'Equipe', 'Casos de sucesso']
    },
    {
      title: 'Site - Clínica Médica',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      description: 'Site responsivo para clínica com agendamento online',
      features: ['Especialidades', 'Agendamento', 'Convênios']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <span className="text-blue-600 text-sm font-semibold">🏢 Sites Institucionais</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Sites Institucionais Profissionais
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              Presença digital completa para sua empresa. Site profissional com múltiplas páginas, otimizado para SEO e resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#exemplos" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Ver Exemplos
              </a>
              <button 
                onClick={handleViewPlans}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-500 transition-all"
              >
                Ver Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é um Site Institucional */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 text-center">
              O que é um Site Institucional?
            </h2>
            <p className="text-slate-600 mb-6 text-center">
              Um site institucional é a vitrine digital completa da sua empresa. Com múltiplas páginas, ele apresenta 
              seus serviços, história, equipe e valores de forma profissional e organizada.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-bold text-slate-900 mb-2">Múltiplas Páginas</h3>
                <p className="text-sm text-slate-600">Home, Sobre, Serviços, Portfólio, Blog, Contato e mais</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold text-slate-900 mb-2">Identidade Visual</h3>
                <p className="text-sm text-slate-600">Design personalizado que reflete a essência da sua marca</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-slate-900 mb-2">SEO Avançado</h3>
                <p className="text-sm text-slate-600">Otimização completa para ranquear bem no Google</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold text-slate-900 mb-2">Credibilidade</h3>
                <p className="text-sm text-slate-600">Transmite profissionalismo e confiança para seus clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Páginas Incluídas */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
              Páginas Incluídas
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🏠', title: 'Home', desc: 'Página inicial com visão geral' },
                { icon: '📖', title: 'Sobre Nós', desc: 'História e valores da empresa' },
                { icon: '⚙️', title: 'Serviços', desc: 'Detalhamento de cada serviço' },
                { icon: '💼', title: 'Portfólio', desc: 'Casos de sucesso e trabalhos' },
                { icon: '📝', title: 'Blog', desc: 'Conteúdo para SEO e autoridade' },
                { icon: '📞', title: 'Contato', desc: 'Formulário e informações' },
              ].map((page, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-4">
                  <div className="text-3xl">{page.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900">{page.title}</h3>
                    <p className="text-xs text-slate-600">{page.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
            Exemplos de Sites Institucionais
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
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para ter seu Site Institucional?
            </h2>
            <p className="text-blue-50 mb-8">
              Construa a presença digital profissional que sua empresa merece
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewPlans}
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                Ver Planos e Preços
              </button>
              <a 
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20criar%20um%20Site%20Institucional"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
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

export default SitesInstitucionais;
