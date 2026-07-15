import React from 'react';

const services = [
  {
    title: 'Landing pages e páginas de venda',
    description: 'Páginas focadas em apresentar uma oferta, capturar interessados e levar o visitante para uma ação clara.',
  },
  {
    title: 'Sites institucionais',
    description: 'Estrutura completa para explicar sua empresa, serviços, diferenciais, portfólio e formas de contato.',
  },
  {
    title: 'Design responsivo',
    description: 'Interface pensada para celular e desktop, com hierarquia visual e leitura confortável em qualquer tela.',
  },
  {
    title: 'Publicação e configuração',
    description: 'Apoio em domínio, hospedagem, WhatsApp, formulário, tags básicas e ajustes técnicos antes da entrega.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="relative py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">O que eu entrego</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Um site com estrutura, visual profissional e caminho claro para contato.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            O objetivo não é só deixar bonito. É organizar sua mensagem para o cliente entender rápido o que você faz, por que confiar e como falar com você.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
