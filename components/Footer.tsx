import React from 'react';
import type { Page } from '../App';

interface FooterProps {
  setCurrentPage?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const goHome = (target?: string) => {
    if (setCurrentPage) setCurrentPage('home');
    window.setTimeout(() => {
      if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-sm font-black text-slate-950">JV</span>
              <div>
                <div className="font-bold text-white">JV Performance Digital</div>
                <div className="text-sm text-slate-400">Sites profissionais para pequenos negócios</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Criação de sites, landing pages e presença digital com foco em clareza, confiança e contato direto.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><button onClick={() => goHome('#servicos')} className="hover:text-emerald-300">Serviços</button></li>
              <li><button onClick={() => goHome('#portfolio')} className="hover:text-emerald-300">Portfólio</button></li>
              <li><button onClick={() => goHome('#planos')} className="hover:text-emerald-300">Planos</button></li>
              <li><button onClick={() => goHome('#contato')} className="hover:text-emerald-300">Contato</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="https://wa.me/5511952445898" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">(11) 95244-5898</a></li>
              <li><a href="mailto:jvs.devsilva@gmail.com" className="break-all hover:text-emerald-300">jvs.devsilva@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} JV Performance Digital. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
