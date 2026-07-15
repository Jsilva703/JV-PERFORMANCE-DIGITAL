import React from 'react';
import type { Page } from '../App';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

interface PlanosPageProps {
  setCurrentPage?: (page: Page) => void;
}

const PlanosPage: React.FC<PlanosPageProps> = () => {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Planos</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl">Valores claros para começar com segurança.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Cada projeto começa com uma conversa rápida para confirmar o escopo ideal. Assim você não paga por excesso e também não recebe menos do que precisa.
            </p>
          </div>
        </div>
      </section>
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default PlanosPage;
