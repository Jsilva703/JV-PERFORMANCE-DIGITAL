
import React from 'react';
import type { Page } from '../App';

interface SitesInstitucionaisProps {
  setCurrentPage?: (page: Page) => void;
}

const SitesInstitucionais: React.FC<SitesInstitucionaisProps> = ({ setCurrentPage }) => {
  const handleViewPlans = () => {
    if (setCurrentPage) {
      setCurrentPage('planos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-slate-950 overflow-hidden">
        {/* Background futurista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
              <span className="text-emerald-500 text-sm font-semibold">🏢 Sites Institucionais</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Sites Institucionais</span> Profissionais
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-8">
              Presença digital completa para sua empresa. Site profissional com múltiplas páginas, otimizado para SEO e resultados.
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

      {/* O que é um Site Institucional */}
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
              O que é um <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Site Institucional</span>?
            </h2>
            <p className="text-slate-400 mb-6 text-center">
              Um site institucional é a vitrine digital completa da sua empresa. Com múltiplas páginas, ele apresenta 
              seus serviços, história, equipe e valores de forma profissional e organizada.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">📄</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Múltiplas Páginas</h3>
                <p className="text-sm text-slate-400">Home, Sobre, Serviços, Portfólio, Blog, Contato e mais</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🎨</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Identidade Visual</h3>
                <p className="text-sm text-slate-400">Design personalizado que reflete a essência da sua marca</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">🔍</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">SEO Avançado</h3>
                <p className="text-sm text-slate-400">Otimização completa para ranquear bem no Google</p>
              </div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group/card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="relative text-3xl mb-3 group-hover/card:scale-110 transition-transform duration-300">💼</div>
                <h3 className="relative font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Credibilidade</h3>
                <p className="text-sm text-slate-400">Transmite profissionalismo e confiança para seus clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Páginas Incluídas */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Páginas</span> Incluídas
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
                <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-4">
                  <div className="text-3xl">{page.icon}</div>
                  <div>
                    <h3 className="font-bold text-white">{page.title}</h3>
                    <p className="text-xs text-slate-400">{page.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Exemplos</span> de Sites Institucionais
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-700">
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
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-8 sm:p-12 text-center border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Pronto para ter seu <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Site Institucional</span>?
            </h2>
            <p className="text-slate-400 mb-8">
              Construa a presença digital profissional que sua empresa merece
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
                href="https://wa.me/5511952445898?text=Olá!%20Quero%20criar%20um%20Site%20Institucional"
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

export default SitesInstitucionais;
