import React from 'react';

const signals = [
  'Seu Instagram tem movimento, mas o cliente não encontra uma apresentação profissional.',
  'Você explica seu serviço várias vezes no WhatsApp porque não existe uma página clara.',
  'Seu link atual parece improvisado e não acompanha a qualidade do que você entrega.',
];

const ProblemsSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#eef3ec]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-900">Quando vale investir</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Credibilidade começa antes da primeira conversa.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Um bom site reduz ruído, antecipa dúvidas e faz o visitante chegar no contato com mais confiança sobre o seu trabalho.
            </p>
          </div>

          <div className="grid gap-4">
            {signals.map((signal) => (
              <div key={signal} className="rounded-xl border border-emerald-900/10 bg-white/80 p-5 shadow-sm">
                <p className="text-base font-semibold leading-7 text-slate-800">{signal}</p>
              </div>
            ))}
            <div className="rounded-xl bg-slate-950 p-6 text-white">
              <h3 className="text-xl font-bold">A proposta da JV</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Construir uma presença digital objetiva: mensagem bem escrita, design limpo, provas visuais e uma chamada de contato sem pressão artificial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
