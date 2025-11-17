
import React from 'react';
import type { Page } from '../App';
import PricingSection from '../components/PricingSection';

interface PlanosPageProps {
  setCurrentPage?: (page: Page) => void;
}

const PlanosPage: React.FC<PlanosPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 bg-slate-950 overflow-hidden">
        {/* Background futurista com grid e orbs animados */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-red-500/50 rounded-full mb-6 sm:mb-8 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 animate-pulse">
              <span className="text-red-400 font-bold flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base">
                <span className="text-base sm:text-xl">🔥</span>
                <span className="hidden sm:inline">Black Friday: Até 35% OFF - Só até 30/11!</span>
                <span className="sm:hidden">Black Friday: 35% OFF</span>
                <span className="text-base sm:text-xl">🔥</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-white leading-tight px-4">
              Escolha o <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]">Plano Ideal</span> <span className="block sm:inline">para o Seu Negócio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Planos completos com <span className="text-emerald-400 font-semibold">tudo que você precisa</span> para ter uma presença digital profissional e começar a vender online.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <span className="text-emerald-400 text-sm font-semibold">✨ Diferenciais</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Por que Escolher a <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">JV Performance</span>?
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">Compromisso com qualidade, rapidez e resultados reais</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="relative group/card">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 hover:scale-105 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <div className="relative text-5xl mb-4 group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500">⚡</div>
                  <h3 className="relative text-lg font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Entrega Rápida</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">Seu site pronto em até 7 dias úteis</p>
                </div>
              </div>
              
              <div className="relative group/card">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 hover:scale-105 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <div className="relative text-5xl mb-4 group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500">🎨</div>
                  <h3 className="relative text-lg font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">4 Revisões</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">Ajuste tudo até ficar perfeito</p>
                </div>
              </div>
              
              <div className="relative group/card">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 hover:scale-105 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <div className="relative text-5xl mb-4 group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500">💳</div>
                  <h3 className="relative text-lg font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Pagamento Único</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">Sem mensalidades surpresa</p>
                </div>
              </div>
              
              <div className="relative group/card">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 hover:scale-105 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <div className="relative text-5xl mb-4 group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500">💬</div>
                  <h3 className="relative text-lg font-bold text-white mb-2 group-hover/card:text-emerald-400 transition-colors">Suporte Direto</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">Atendimento via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços (usando componente existente) */}
      <PricingSection />

      {/* Comparação Detalhada */}
      <section className="py-16 sm:py-20 bg-slate-800/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <span className="text-emerald-400 text-sm font-semibold">🎯 Guia de Escolha</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Qual <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Plano</span> é Melhor para Você?
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">Descubra o plano ideal para o momento do seu negócio</p>
            </div>
            
            <div className="space-y-6">
              <div className="group/compare bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/30 group-hover/compare:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Plano de Lançamento</h3>
                    <p className="text-slate-400 mb-3">
                      <strong>Ideal para:</strong> Validar ideias, testar mercado, criar presença digital inicial
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Empreendedores começando do zero
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Profissionais autônomos divulgando serviços
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Projetos com orçamento limitado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group/compare bg-gradient-to-br from-emerald-950/50 to-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border-2 border-emerald-500/70 relative hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/50 animate-pulse">
                  ⭐ MAIS POPULAR ⭐
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/50 group-hover/compare:scale-110 transition-transform duration-300">
                    ⭐
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Plano Profissional</h3>
                    <p className="text-slate-400 mb-3">
                      <strong>Ideal para:</strong> Empresas estabelecidas, negócios sérios, marca forte
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Empresas que querem domínio próprio (www.suaempresa.com.br)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Negócios que precisam aparecer no Google (SEO)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Site completo com múltiplas páginas e funcionalidades
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group/compare bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 opacity-75">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover/compare:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Plano Sob Medida</h3>
                    <p className="text-slate-400 mb-3">
                      <strong>Ideal para:</strong> Projetos complexos com necessidades específicas
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-slate-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        E-commerce com sistema de pagamentos
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Plataformas com área de membros e login
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Integrações avançadas e automações
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-slate-500 italic">Em breve disponível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ainda tem dúvidas sobre qual <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">plano escolher</span>?
            </h2>
            <p className="text-slate-300 mb-8">
              Entre em contato pelo WhatsApp e vamos te ajudar a escolher o melhor plano para o seu negócio!
            </p>
            <a 
              href="https://wa.me/5511952445898?text=Olá!%20Tenho%20dúvidas%20sobre%20os%20planos.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden text-lg"
            >
              <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
              </svg>
              Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanosPage;
