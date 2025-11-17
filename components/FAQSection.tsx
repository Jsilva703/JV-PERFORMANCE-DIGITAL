import React, { useState } from 'react';
import { trackFAQInteraction, trackWhatsAppClick, trackButtonClick } from '../utils/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quanto tempo leva para criar meu site?",
    answer: "Entregamos seu site completo em até 7 dias corridos após aprovação do briefing. Isso inclui design, desenvolvimento e 4 revisões gratuitas para garantir que fique exatamente como você imaginou."
  },
  {
    question: "O que está incluído no valor do site?",
    answer: "No plano completo você recebe: Site totalmente responsivo (mobile + desktop), SEO básico otimizado, integração com WhatsApp, formulário de contato, hospedagem por 1 ano, domínio próprio (.com.br ou .com) e 4 revisões incluídas."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você pode pagar à vista com desconto ou parcelar em até 2x no cartão (via Mercado Pago). Pagamento 100% seguro. Não cobramos mensalidades - apenas uma taxa opcional de R$120/mês para suporte e manutenção contínua."
  },
  {
    question: "E se eu não gostar do resultado?",
    answer: "Oferecemos 4 revisões completas totalmente gratuitas. Trabalhamos junto com você em cada etapa para garantir que o site atenda suas expectativas. Nosso compromisso é sua satisfação total."
  },
  {
    question: "O site vai aparecer no Google?",
    answer: "Sim! Todos os nossos sites incluem SEO básico otimizado: meta tags, sitemap, URL amigáveis, velocidade otimizada e estrutura correta para mecanismos de busca. Isso garante que seu site seja encontrado pelos seus clientes."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não! Fazemos tudo por você. Cuidamos de hospedagem, domínio, design, desenvolvimento e configurações técnicas. Você só precisa nos passar as informações do seu negócio e aprovar as etapas."
  },
  {
    question: "Posso fazer alterações depois que o site estiver pronto?",
    answer: "Sim! Durante o projeto você tem 4 revisões gratuitas. Após a entrega, alterações pontuais podem ser feitas sob consulta. Para manutenção contínua, oferecemos um plano de suporte por R$120/mês."
  },
  {
    question: "O desconto de Black Friday é real?",
    answer: "Sim! Estamos oferecendo até 35% de desconto apenas para novembro. Plano Lançamento de R$550 por R$400 (economia de R$150) e Plano Profissional de R$950 por R$650 (economia de R$300). Vagas limitadas!"
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    const question = faqData[index].question;
    
    trackFAQInteraction(question, isOpening ? 'open' : 'close');
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-full mb-4">
            <span className="text-emerald-400 font-bold text-sm">❓ Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Tudo Que Você Precisa Saber
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Reunimos as perguntas mais comuns para você ter todas as informações antes de decidir
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg pr-3 sm:pr-4 leading-snug">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/30 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após FAQ */}
        <div className="text-center mt-10 sm:mt-12 animate-in fade-in duration-700 delay-500 px-4">
          <p className="text-slate-400 mb-4 text-sm sm:text-base">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5511952445898?text=Oi!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20planos.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-800/50 border-2 border-emerald-500/50 text-emerald-400 font-semibold text-sm sm:text-base rounded-xl hover:bg-emerald-500/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
            </svg>
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
