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
    <section id="faq" className="relative border-y border-white/10 bg-slate-900/80 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Transparência sem enrolação.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Respostas diretas para você saber o que está contratando e o que esperar do processo.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                <button onClick={() => toggleFAQ(index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-bold text-white">{faq.question}</span>
                  <span className="text-lg font-black text-emerald-300">{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-300">
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
