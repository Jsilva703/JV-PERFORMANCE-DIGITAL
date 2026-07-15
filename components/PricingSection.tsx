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
    <section id="planos" className="relative bg-slate-950 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Planos</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Preço claro, escopo claro.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Sem desconto fake e sem promessa milagrosa. Você entende a faixa inicial e eu confirmo o escopo antes de fechar.
          </p>
        </div>

        <div className="mt-10 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`flex h-full flex-col rounded-3xl border p-6 shadow-2xl shadow-black/20 ${plan.recommended ? 'border-emerald-400/50 bg-emerald-400/[0.08]' : 'border-white/10 bg-white/[0.05]'}`}>
              {plan.recommended && (
                <span className="mb-4 w-fit rounded-full bg-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-950">
                  Mais indicado
                </span>
              )}
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">{plan.description}</p>
              <div className="mt-6 border-y border-white/10 py-5">
                <div className="text-4xl font-black text-white">{plan.price}</div>
                <p className="mt-2 text-sm text-slate-400">{plan.priceDetails}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.supportPlan && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                  <div className="font-bold text-white">{plan.supportPlan.title} opcional</div>
                  <div className="mt-1 font-semibold text-emerald-300">{plan.supportPlan.price}</div>
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
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition ${plan.recommended ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'border border-white/15 bg-white/8 text-white hover:bg-white/12'}`}
              >
                {plan.buttonText}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.05] p-6">
          <button onClick={() => setShowDetails(!showDetails)} className="flex w-full items-center justify-between gap-4 text-left">
            <span>
              <span className="block text-lg font-bold text-white">Antes de começar, alinhamos o básico.</span>
              <span className="mt-1 block text-sm text-slate-400">Objetivo, público, materiais disponíveis, prazo e escopo real.</span>
            </span>
            <span className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200">{showDetails ? 'Ocultar' : 'Ver'}</span>
          </button>
          {showDetails && (
            <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-300 sm:grid-cols-3">
              <p><strong className="text-white">1. Diagnóstico:</strong> entendemos negócio, oferta e prioridade.</p>
              <p><strong className="text-white">2. Escopo:</strong> definimos se é landing, institucional ou sob medida.</p>
              <p><strong className="text-white">3. Execução:</strong> você acompanha e revisa antes da publicação.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
