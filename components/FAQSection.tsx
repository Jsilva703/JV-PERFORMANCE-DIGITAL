import React, { useState } from 'react';
import { trackFAQInteraction } from '../utils/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quanto tempo leva para criar meu site?',
    answer: 'Projetos simples normalmente ficam prontos em até 7 dias após o briefing e o envio dos materiais. Se o escopo for maior, eu combino um prazo real antes de começar.',
  },
  {
    question: 'O que eu preciso enviar?',
    answer: 'Informações sobre seu negócio, serviços, contatos, logo se tiver, referências visuais e imagens. Se você ainda não tiver tudo pronto, eu ajudo a organizar a estrutura da página.',
  },
  {
    question: 'O site vai aparecer no Google?',
    answer: 'Eu preparo a base técnica: título, descrição, estrutura, performance e boas práticas. Isso ajuda o Google a entender o site, mas posicionamento depende de concorrência, conteúdo e tempo.',
  },
  {
    question: 'Posso pedir ajustes?',
    answer: 'Sim. Cada plano tem rodadas de ajuste combinadas. A ideia é revisar com calma antes da publicação, sem deixar o projeto virar algo sem escopo.',
  },
  {
    question: 'Depois de publicado, consigo pedir manutenção?',
    answer: 'Sim. Você pode pedir alterações pontuais ou contratar o suporte mensal para pequenas atualizações, links, textos e verificações básicas.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    trackFAQInteraction(faqData[index].question, isOpening ? 'open' : 'close');
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">Perguntas que evitam ruído no projeto.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Transparência também vende. Aqui ficam os pontos principais antes de começarmos.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                <button onClick={() => toggleFAQ(index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-bold text-slate-950">{faq.question}</span>
                  <span className="text-sm font-bold text-emerald-800">{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
