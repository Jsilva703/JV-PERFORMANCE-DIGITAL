import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="relative bg-slate-950 py-16 text-white sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.07] p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Próximo passo</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Vamos descobrir qual site faz sentido para o seu momento.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Me chama no WhatsApp, conta rapidamente sobre seu negócio e eu te digo qual estrutura faz mais sentido antes de falar em layout ou preço fechado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20para%20meu%20site%20ou%20presen%C3%A7a%20digital."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:jvs.devsilva@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/12"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <h3 className="text-xl font-bold">Contato direto</h3>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-slate-400">WhatsApp</dt>
                <dd className="mt-1"><a className="font-bold text-white hover:text-emerald-300" href="https://wa.me/5511952445898" target="_blank" rel="noopener noreferrer">(11) 95244-5898</a></dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-400">E-mail</dt>
                <dd className="mt-1"><a className="font-bold text-white hover:text-emerald-300" href="mailto:jvs.devsilva@gmail.com">jvs.devsilva@gmail.com</a></dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-400">Atendimento</dt>
                <dd className="mt-1 text-slate-200">Projetos digitais para pequenos negócios, profissionais autônomos e marcas em fase de estruturação.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
