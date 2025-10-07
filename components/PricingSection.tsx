import React from "react";
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
    price: "R$ 550",
    priceDetails: "Pagamento único",
    features: [
      "Landing Page profissional de até 4 seções",
      "Design responsivo",
      "Integração com WhatsApp",
      "Hospedagem gratuita (GitHub Pages ou Vercel)",
    ],
    supportPlan: supportPlanData,
    buttonText: "Começar Meu Lançamento",
  },
  {
    name: "Plano Profissional",
    description:
      "Para negócios que buscam credibilidade, marca própria e a melhor performance digital.",
    price: "R$ 110/mês",
    priceDetails: "+ R$ 800 taxa de desenvolvimento",
    features: [
      "Site profissional com design moderno",
      "Design responsivo para celular e desktop",
      "Domínio Próprio (www.suamarca.com.br)",
      "Hospedagem profissional de alta performance",
      "Formulário de contato profissional",
      "Otimização técnica para ranquear no Google (SEO)",
      "Plano de Suporte e Evolução Incluso",
    ],
    buttonText: "Quero Me Tornar Profissional",
    recommended: true,
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
    className="h-5 w-5 text-green-500 flex-shrink-0"
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
    className="h-5 w-5 text-orange-500 flex-shrink-0"
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
    ? "bg-slate-800 border-2 border-orange-500 transform lg:scale-105 shadow-2xl shadow-orange-500/20"
    : plan.comingSoon
      ? "bg-slate-800 opacity-75"
      : "bg-slate-800";

  const buttonClasses = plan.recommended
    ? "bg-orange-500 hover:bg-orange-600"
    : plan.comingSoon
      ? "bg-slate-700 cursor-not-allowed"
      : "bg-gray-600 hover:bg-gray-700";

  const linkProps = plan.comingSoon
    ? {
        "aria-disabled": true,
        onClick: (e: React.MouseEvent) => e.preventDefault(),
        role: "button",
      }
    : {
        href: `https://wa.me/5511952445898?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20${plan.name}.`,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  return (
    <div
      className={`p-8 rounded-lg shadow-xl relative flex flex-col h-full ${cardClasses}`}
    >
      {plan.recommended && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Recomendado
        </div>
      )}
      <div className="flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
        <p className="text-slate-400 text-center mb-6 min-h-[6rem]">
          {plan.description}
        </p>
        <div className="text-center mb-6">
          <span className="text-4xl font-extrabold">{plan.price}</span>
          {plan.priceDetails && (
            <p className="text-slate-400">{plan.priceDetails}</p>
          )}
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="ml-3 text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.supportPlan && (
          <div className="border-t border-slate-700 pt-6 mt-auto">
            <div className="flex items-center justify-center text-center mb-4">
              <PlusIcon />
              <h4 className="text-lg font-bold text-orange-500 ml-2">
                {plan.supportPlan.title}
              </h4>
            </div>
            <p className="text-2xl font-bold text-center mb-4">
              {plan.supportPlan.price}
            </p>
            <ul className="space-y-2 text-sm">
              {plan.supportPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <a
        {...linkProps}
        className={`w-full mt-8 text-center text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${buttonClasses}`}
      >
        {plan.buttonText}
      </a>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Escolha o Plano para Dar a{" "}
          <span className="text-orange-500">Largada</span> no Seu Projeto
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
