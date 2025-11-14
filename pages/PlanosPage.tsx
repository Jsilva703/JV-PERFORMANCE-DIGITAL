
import React from 'react';
import type { Page } from '../App';
import PricingSection from '../components/PricingSection';

interface PlanosPageProps {
  setCurrentPage?: (page: Page) => void;
}

const PlanosPage: React.FC<PlanosPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-600 text-sm font-semibold">💎 Planos e Preços</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Escolha o Plano Ideal para o Seu Negócio
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Planos completos com tudo que você precisa para ter uma presença digital profissional. 
              <span className="font-semibold text-emerald-600 block mt-2">✨ Black Friday: Até 35% OFF!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
              Por que Escolher Nossos Planos?
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">Entrega Rápida</h3>
                <p className="text-sm text-slate-600">Seu site pronto em até 7 dias úteis</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold text-slate-900 mb-2">4 Revisões</h3>
                <p className="text-sm text-slate-600">Ajuste tudo até ficar perfeito</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg text-center">
                <div className="text-4xl mb-3">💳</div>
                <h3 className="font-bold text-slate-900 mb-2">Pagamento Único</h3>
                <p className="text-sm text-slate-600">Sem mensalidades surpresa</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-slate-900 mb-2">Suporte Direto</h3>
                <p className="text-sm text-slate-600">Atendimento via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços (usando componente existente) */}
      <PricingSection />

      {/* Comparação Detalhada */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 text-center">
              Qual Plano é Melhor para Você?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plano de Lançamento</h3>
                    <p className="text-slate-700 mb-3">
                      <strong>Ideal para:</strong> Validar ideias, testar mercado, criar presença digital inicial
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-cyan-500 relative">
                <div className="absolute -top-3 right-4 bg-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  MAIS POPULAR ⭐
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ⭐
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plano Profissional</h3>
                    <p className="text-slate-700 mb-3">
                      <strong>Ideal para:</strong> Empresas estabelecidas, negócios sérios, marca forte
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    🚀
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plano Sob Medida</h3>
                    <p className="text-slate-700 mb-3">
                      <strong>Ideal para:</strong> Projetos complexos com necessidades específicas
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <p className="mt-4 text-sm text-slate-600 italic">Em breve disponível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ainda tem dúvidas sobre qual plano escolher?
            </h2>
            <p className="text-slate-300 mb-8">
              Entre em contato pelo WhatsApp e vamos te ajudar a escolher o melhor plano para o seu negócio!
            </p>
            <a 
              href="https://wa.me/5511952445898?text=Olá!%20Tenho%20dúvidas%20sobre%20os%20planos.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all text-lg"
            >
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
