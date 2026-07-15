import React from 'react';

const services = [
  ['Landing pages', 'Páginas focadas em apresentar uma oferta, capturar interessados e levar o visitante para uma ação clara.'],
  ['Sites institucionais', 'Estrutura completa para explicar sua empresa, serviços, diferenciais, projetos e formas de contato.'],
  ['Design responsivo', 'Interface pensada para celular e desktop, com hierarquia visual e leitura confortável.'],
  ['Publicação e ajustes', 'Apoio em domínio, hospedagem, WhatsApp, formulário, metadados e revisão final.'],
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="relative bg-slate-950 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">O que eu entrego</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Visual profissional com estratégia de mensagem.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Não é só uma tela bonita. É uma página com ordem, intenção e caminhos claros para contato.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-emerald-400/35 hover:bg-white/[0.07]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-slate-950">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
