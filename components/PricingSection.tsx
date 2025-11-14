import React, { useState } from "react";
import type { Plan, SupportPlan } from "../types";

const supportPlanData: SupportPlan = {
  title: "Plano de Suporte e Evolução",
  price: "R$ 120/mês",
  features: [
    "Monitoramento e segurança do site",
    "Pequenas atualizações (até 2h/mês)",
    "Suporte Prioritário via WhatsApp",
    "Relatório de Desempenho (Opcional)",
  ],
};

const plans: Plan[] = [
  {
    name: "Plano de Lançamento",
    description:
      "Para validar uma ideia, criar o primeiro site ou para projetos com orçamento inicial limitado.",
    price: "R$ 400",
    originalPrice: "R$ 550",
    priceDetails: "Pagamento único ou 2x no cartão",
    features: [
      "Landing Page profissional de até 4 seções",
      "Design otimizado para Desktop",
      "Integração com WhatsApp",
      "Hospedagem gratuita (GitHub Pages ou Vercel)",
      "Até 4 revisões durante o desenvolvimento",
    ],
    supportPlan: supportPlanData,
    buttonText: "Contratar Agora",
    whatsappMessage: `Olá! 👋

Quero contratar o *Plano de Lançamento* 🚀

💰 *Valor Black Friday:* R$ 400 (de R$ 550)
✅ *Economia:* R$ 150

Estou pronto para começar meu projeto!`,
  },
  {
    name: "Plano Profissional",
    description:
      "Para negócios que buscam credibilidade, marca própria e a melhor performance digital.",
    price: "R$ 650",
    originalPrice: "R$ 950",
    priceDetails: "Até 2x no cartão + valor do domínio",
    features: [
      "Site profissional com design moderno",
      "Design responsivo para celular e desktop",
      "Domínio Próprio (www.suamarca.com.br)",
      "Hospedagem profissional de alta performance",
      "Formulário de contato profissional",
      "Otimização técnica para ranquear no Google (SEO)",
      "Até 4 revisões durante o desenvolvimento",
    ],
    supportPlan: supportPlanData,
    buttonText: "Contratar Agora",
    recommended: true,
    whatsappMessage: `Olá! 👋

Quero contratar o *Plano Profissional* ⭐ (MAIS POPULAR)

💰 *Valor Black Friday:* R$ 650 (de R$ 950) + valor do domínio
✅ *Economia:* R$ 300

Quero levar meu negócio para o próximo nível!`,
  },
  {
    name: "Plano Sob Medida",
    description:
      "Precisa de e-commerce, área de membros, ou sistemas complexos? Em breve esta solução completa estará disponível para o seu negócio.",
    price: "Em Breve",
    features: [
      "Sistemas com Login e Senha",
      "Área de Membros e Conteúdo Restrito",
      "Integração com Banco de Dados",
      "E-commerce e Pagamentos Online",
      "Automações e integrações com APIs",
    ],
    buttonText: "Disponível em Breve",
    comingSoon: true,
  },
];

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-600 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PlusIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-600 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardClasses = plan.recommended
    ? "bg-white border-2 border-emerald-500 transform lg:scale-105 shadow-2xl shadow-emerald-500/20"
    : plan.comingSoon
      ? "bg-white opacity-75"
      : "bg-white";

  const buttonClasses = plan.recommended
    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
    : plan.comingSoon
      ? "bg-slate-700 cursor-not-allowed"
      : "bg-slate-800 hover:bg-slate-700 border-2 border-slate-700";

  // Calcula a economia
  const calculateSavings = () => {
    if (!plan.originalPrice || !plan.price) return null;
    const original = parseInt(plan.originalPrice.replace(/\D/g, ''));
    const current = parseInt(plan.price.replace(/\D/g, ''));
    const savings = original - current;
    const percentage = Math.round((savings / original) * 100);
    return { savings, percentage };
  };

  const savings = calculateSavings();

  const linkProps = plan.comingSoon
    ? {
        "aria-disabled": true,
        onClick: (e: React.MouseEvent) => e.preventDefault(),
        role: "button",
      }
    : {
        href: `https://wa.me/5511952445898?text=${encodeURIComponent(plan.whatsappMessage || `Olá, tenho interesse no ${plan.name}.`)}`,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  return (
    <div
      className={`p-6 rounded-2xl shadow-xl relative flex flex-col h-full ${cardClasses} transition-all duration-300`}
    >
      {plan.recommended && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
          ⭐ Mais Popular
        </div>
      )}
      
      {/* Badge de desconto */}
      {savings && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          -{savings.percentage}%
        </div>
      )}

      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-center mb-2 text-slate-900">{plan.name}</h3>
        <p className="text-slate-600 text-center mb-4 text-sm min-h-[4rem]">
          {plan.description}
        </p>
        <div className="text-center mb-4">
          {plan.originalPrice && (
            <div className="mb-1">
              <span className="text-xl text-slate-500 line-through">{plan.originalPrice}</span>
            </div>
          )}
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{plan.price}</span>
          {plan.priceDetails && (
            <p className="text-slate-600 mt-1">{plan.priceDetails}</p>
          )}
          {savings && (
            <div className="mt-2 inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="text-emerald-600 text-sm font-semibold">
                💰 Economize R$ {savings.savings}
              </span>
            </div>
          )}
        </div>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="ml-2 text-slate-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.supportPlan && (
          <div className="border-t border-slate-200 pt-4 mt-auto">
            <div className="flex items-center justify-center text-center mb-3">
              <PlusIcon />
              <h4 className="text-lg font-bold text-emerald-600 ml-2">
                {plan.supportPlan.title}
              </h4>
            </div>
            <p className="text-xl font-bold text-center mb-3 text-slate-900">
              {plan.supportPlan.price}
            </p>
            <ul className="space-y-1 text-xs">
              {plan.supportPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-2 mt-6">
        {!plan.comingSoon && (
          <a
            href="https://link.mercadopago.com.br/devpages"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 text-sm"
          >
            💳 Pagar Agora
          </a>
        )}
        <a
          {...linkProps}
          className={`w-full block text-center text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${buttonClasses}`}
        >
          {!plan.comingSoon && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
            </svg>
          )}
          {plan.comingSoon ? plan.buttonText : 'Tirar Dúvidas'}
        </a>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="planos" className="py-12 sm:py-16 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-600 text-sm font-semibold">🔥 Black Friday - Só até o final do mês!</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Planos e Preços
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Escolha o plano ideal para o seu negócio. Pagamento único, sem mensalidades.
          </p>
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            {showComparison ? 'Ocultar' : 'Ver'} Comparação de Planos
          </button>
        </div>

        {/* Tabela de Comparação */}
        {showComparison && (
          <div className="mb-8 sm:mb-10 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-lg min-w-[600px] sm:min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-slate-900">Comparação Rápida</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-2 sm:px-3 text-slate-700 font-semibold text-xs sm:text-sm">Recurso</th>
                    <th className="text-center py-2 px-2 sm:px-3 text-emerald-600 font-semibold text-xs sm:text-sm">Lançamento</th>
                    <th className="text-center py-2 px-2 sm:px-3 text-emerald-600 font-semibold text-xs sm:text-sm">Profissional ⭐</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] sm:text-xs">
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">Design Responsivo</td>
                    <td className="text-center py-2 px-2 sm:px-3 text-slate-500">Desktop</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅ Full</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">Integração WhatsApp</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">Domínio Próprio</td>
                    <td className="text-center py-2 px-2 sm:px-3">❌</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">SEO Otimizado</td>
                    <td className="text-center py-2 px-2 sm:px-3">❌</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">Hospedagem Premium</td>
                    <td className="text-center py-2 px-2 sm:px-3">❌</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-2 sm:px-3 text-slate-700">Formulário de Contato</td>
                    <td className="text-center py-2 px-2 sm:px-3">❌</td>
                    <td className="text-center py-2 px-2 sm:px-3">✅</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="py-2 px-2 sm:px-3 text-slate-900 font-bold">Preço Black Friday</td>
                    <td className="text-center py-2 px-2 sm:px-3 text-emerald-600 font-bold">R$ 400</td>
                    <td className="text-center py-2 px-2 sm:px-3 text-emerald-600 font-bold">R$ 650</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Garantias e Benefícios */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
            <div className="text-xl sm:text-2xl mb-1">✅</div>
            <h4 className="font-bold mb-1 text-slate-900 text-xs sm:text-sm">Pagamento Único</h4>
            <p className="text-[10px] sm:text-xs text-slate-600">Sem mensalidades</p>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
            <div className="text-xl sm:text-2xl mb-1">⚡</div>
            <h4 className="font-bold mb-1 text-slate-900 text-xs sm:text-sm">Entrega Rápida</h4>
            <p className="text-[10px] sm:text-xs text-slate-600">Até 5 dias</p>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
            <div className="text-xl sm:text-2xl mb-1">💬</div>
            <h4 className="font-bold mb-1 text-slate-900 text-xs sm:text-sm">Suporte Direto</h4>
            <p className="text-[10px] sm:text-xs text-slate-600">WhatsApp</p>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 text-slate-900">Dúvidas Frequentes</h3>
          <div className="space-y-3">
            <details className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-lg cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex items-center justify-between text-sm sm:text-base">
                Como funciona o pagamento?
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm">Pagamento via Mercado Pago: PIX à vista, até 2x no cartão sem juros, ou boleto. Você escolhe a forma que preferir! Sem mensalidades.</p>
            </details>
            
            <details className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-lg cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex items-center justify-between text-sm sm:text-base">
                Quanto tempo leva para ficar pronto?
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm">Até 5 dias após a confirmação do pagamento e envio dos materiais (textos, imagens, logo). Durante esse período você tem direito a até 4 revisões.</p>
            </details>
            
            <details className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-lg cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex items-center justify-between text-sm sm:text-base">
                Posso fazer alterações durante o desenvolvimento?
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm">Sim! Você tem direito a até 4 revisões durante o desenvolvimento. Após a entrega final, pode contratar o Plano de Suporte (R$ 120/mês) para atualizações contínuas.</p>
            </details>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Ainda tem dúvidas? Vamos conversar!</p>
          <a 
            href="https://wa.me/5511952445898?text=Ol%C3%A1!%20%F0%9F%91%8B%0A%0ATenho%20algumas%20d%C3%BAvidas%20sobre%20os%20planos.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
            </svg>
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
