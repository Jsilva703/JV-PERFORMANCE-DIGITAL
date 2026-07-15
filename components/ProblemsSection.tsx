import React from 'react';

const signals = [
  ['Sem presença clara', 'O cliente chega pelo Instagram, mas não encontra uma página profissional para entender sua proposta.'],
  ['WhatsApp sobrecarregado', 'Você precisa explicar tudo do zero porque o site ainda não antecipa as perguntas certas.'],
  ['Imagem abaixo do serviço', 'Seu trabalho é bom, mas o link atual não transmite o mesmo cuidado que você entrega.'],
];

const ProblemsSection: React.FC = () => {
  return (
    <section className="relative border-y border-white/10 bg-slate-900/70 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Por que isso importa</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Credibilidade começa antes da primeira mensagem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Um bom site organiza sua apresentação, reduz dúvida e faz o visitante chegar no contato mais seguro sobre contratar você.
            </p>
          </div>

          <div className="grid gap-4">
            {signals.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/10">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
