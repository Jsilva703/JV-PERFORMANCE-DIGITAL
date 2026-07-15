import React from 'react';
import type { Page } from '../App';
import { trackButtonClick, trackWhatsAppClick } from '../utils/analytics';

interface HeroSectionProps {
  setCurrentPage?: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
          <div>
            <p className="inline-flex items-center rounded-full border border-emerald-700/20 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              JV Performance Digital
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.04]">
              Sites profissionais para negócios que precisam transmitir confiança.
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-slate-700">
              Eu crio páginas claras, rápidas e bem estruturadas para apresentar seu serviço, fortalecer sua marca e transformar visitas em conversas reais pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('Hero Section', 'Solicitar diagnóstico');
                  trackButtonClick('WhatsApp - Diagnóstico', 'Hero Section', 'WhatsApp');
                }}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Solicitar diagnóstico pelo WhatsApp
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Ver projetos entregues
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                ['Briefing antes do layout', 'Entendimento do negócio antes de desenhar a página.'],
                ['Entrega com escopo claro', 'Você sabe o que será feito, revisado e publicado.'],
                ['Contato direto', 'Acompanhamento simples pelo WhatsApp durante o projeto.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white/70 p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl shadow-slate-900/10">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Processo JV</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">Do primeiro contato ao site no ar</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">Organizado</span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ['01', 'Diagnóstico', 'Entendo seu serviço, público, diferenciais e objetivo principal do site.'],
                  ['02', 'Estrutura', 'Monto a ordem das seções, chamadas, provas e caminhos de contato.'],
                  ['03', 'Design e desenvolvimento', 'Crio uma interface responsiva, limpa e compatível com sua marca.'],
                  ['04', 'Publicação', 'Ajusto domínio, hospedagem, WhatsApp, SEO técnico básico e revisão final.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="grid grid-cols-[48px_1fr] gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">{step}</div>
                    <div>
                      <h3 className="font-bold text-slate-950">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
