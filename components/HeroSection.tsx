import React from 'react';
import type { Page } from '../App';
import { trackButtonClick, trackWhatsAppClick } from '../utils/analytics';

interface HeroSectionProps {
  setCurrentPage?: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              Sites, landing pages e presença digital
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Seu negócio com cara de empresa séria na internet.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Eu crio sites profissionais para apresentar seu serviço com clareza, fortalecer sua marca e transformar visitantes em contatos reais pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('Hero Section', 'Solicitar diagnóstico');
                  trackButtonClick('WhatsApp - Diagnóstico', 'Hero Section', 'WhatsApp');
                }}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Solicitar diagnóstico pelo WhatsApp
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/12"
              >
                Ver projetos publicados
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
              {[
                ['7 dias', 'prazo médio para projetos simples'],
                ['4 etapas', 'processo claro do briefing à publicação'],
                ['Direto', 'contato sem intermediário'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="text-xl font-black text-white sm:text-2xl">{title}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-slate-500">jvperformance.com.br/projeto</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Estrutura do site</p>
                  <h2 className="mt-3 text-2xl font-black text-white">Mensagem clara antes do layout bonito.</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Primeiro organizo o que seu cliente precisa entender. Depois entro em design, responsivo, publicação e ajustes.
                  </p>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ['01', 'Diagnóstico do negócio'],
                    ['02', 'Arquitetura da página'],
                    ['03', 'Design responsivo'],
                    ['04', 'Publicação e revisão'],
                  ].map(([step, title]) => (
                    <div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-sm font-black text-slate-950">{step}</span>
                      <span className="font-semibold text-slate-100">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
