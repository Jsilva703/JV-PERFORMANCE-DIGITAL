import React, { useState } from 'react';
import type { Plan, SupportPlan } from '../types';
import { trackButtonClick, trackPlanInterest, trackWhatsAppClick } from '../utils/analytics';

const supportPlanData: SupportPlan = {
  title: 'Suporte contínuo',
  price: 'R$ 120/mês',
  features: [
    'Pequenas atualizações mensais',
    'Acompanhamento por WhatsApp',
    'Ajustes de conteúdo e links',
    'Verificação básica de funcionamento',
  ],
};

const plans: Plan[] = [
  {
    name: 'Landing page essencial',
    description: 'Para apresentar uma oferta, serviço ou campanha com uma página objetiva e pronta para contato.',
    price: 'R$ 400',
    priceDetails: 'Pagamento único ou 2x no cartão',
    features: [
      'Página única com até 4 seções',
      'Copy organizada com foco em clareza',
      'Design responsivo para celular e desktop',
      'Botão de WhatsApp e chamada principal',
      'Publicação em hospedagem gratuita',
      'Até 2 rodadas de ajustes',
    ],
    supportPlan: supportPlanData,
    buttonText: 'Conversar sobre este plano',
    whatsappMessage: 'Olá! Quero conversar sobre a Landing page essencial da JV Performance.',
  },
  {
    name: 'Site profissional',
    description: 'Para negócios que precisam de uma presença digital mais completa, confiável e bem organizada.',
    price: 'R$ 650',
    priceDetails: 'Projeto base + domínio quando necessário',
    features: [
      'Site com estrutura institucional',
      'Seções de serviços, processo, provas e contato',
      'Design responsivo e visual alinhado à marca',
      'Formulário ou direcionamento para WhatsApp',
      'SEO técnico básico e metadados principais',
      'Até 4 rodadas de ajustes durante o projeto',
    ],
    supportPlan: supportPlanData,
    buttonText: 'Solicitar diagnóstico',
    recommended: true,
    whatsappMessage: 'Olá! Quero conversar sobre o Site profissional da JV Performance.',
  },
  {
    name: 'Projeto sob medida',
    description: 'Para demandas com funcionalidades específicas, páginas extras, integrações ou evolução contínua.',
    price: 'Sob consulta',
    priceDetails: 'Escopo definido após conversa',
    features: [
      'Mapeamento do objetivo e requisitos',
      'Arquitetura de páginas personalizada',
      'Integrações e funcionalidades sob análise',
      'Cronograma proporcional ao escopo',
      'Proposta fechada antes do início',
    ],
    buttonText: 'Falar sobre meu projeto',
    whatsappMessage: 'Olá! Tenho um projeto sob medida e quero entender como a JV Performance pode ajudar.',
  },
];

const PricingSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="planos" className="relative py-16 sm:py-20 bg-[#f6f4ef]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Planos</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">Escolha um ponto de partida claro.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Os valores abaixo ajudam você a entender a faixa inicial. Antes de fechar, eu confirmo o escopo para garantir que o projeto faça sentido para o seu negócio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl">
          {plans.map((plan) => (
            <article key={plan.name} className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${plan.recommended ? 'border-emerald-700 ring-2 ring-emerald-700/10' : 'border-slate-200'}`}>
              {plan.recommended && (
                <span className="mb-4 w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                  Mais indicado
                </span>
              )}
              <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{plan.description}</p>
              <div className="mt-6 border-y border-slate-200 py-5">
                <div className="text-4xl font-bold text-slate-950">{plan.price}</div>
                <p className="mt-2 text-sm text-slate-500">{plan.priceDetails}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.supportPlan && (
                <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-bold text-slate-950">{plan.supportPlan.title} opcional</div>
                  <div className="mt-1 font-semibold text-emerald-800">{plan.supportPlan.price}</div>
                </div>
              )}
              <a
                href={`https://wa.me/5511952445898?text=${encodeURIComponent(plan.whatsappMessage || `Olá, tenho interesse no ${plan.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackPlanInterest(plan.name, plan.price, 'click_whatsapp');
                  trackWhatsAppClick(plan.name, plan.whatsappMessage || '');
                  trackButtonClick('WhatsApp Plano', plan.name, 'WhatsApp');
                }}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${plan.recommended ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'border border-slate-300 bg-white text-slate-950 hover:border-slate-400'}`}
              >
                {plan.buttonText}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 max-w-4xl">
          <button onClick={() => setShowDetails(!showDetails)} className="flex w-full items-center justify-between gap-4 text-left">
            <span>
              <span className="block text-lg font-bold text-slate-950">O que acontece antes de começar?</span>
              <span className="mt-1 block text-sm text-slate-600">Uma conversa rápida para entender negócio, objetivo, prazo e materiais disponíveis.</span>
            </span>
            <span className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800">{showDetails ? 'Ocultar' : 'Ver'}</span>
          </button>
          {showDetails && (
            <div className="mt-5 grid gap-4 sm:grid-cols-3 text-sm leading-6 text-slate-700">
              <p><strong className="text-slate-950">1. Diagnóstico:</strong> alinhamos objetivo, público e tom da comunicação.</p>
              <p><strong className="text-slate-950">2. Escopo:</strong> defino se é landing, site institucional ou algo sob medida.</p>
              <p><strong className="text-slate-950">3. Execução:</strong> você acompanha as etapas e revisa antes da publicação.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
