import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="relative py-16 sm:py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Próximo passo</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">Vamos entender se o seu site precisa ser uma landing, um institucional ou algo sob medida.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Me chama no WhatsApp, conta rapidamente sobre seu negócio e eu te digo qual estrutura faz mais sentido antes de falar em layout ou preço fechado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20para%20meu%20site%20ou%20presen%C3%A7a%20digital."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-500"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:jvs.devsilva@gmail.com"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3.5 text-base font-semibold text-white transition hover:border-slate-500"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-white/5 p-6">
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
