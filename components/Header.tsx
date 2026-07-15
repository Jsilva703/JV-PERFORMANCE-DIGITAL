import React, { useEffect, useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const goHome = (target?: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.setTimeout(() => {
        if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }

    if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            <button onClick={() => goHome()} className="flex items-center gap-3 text-left" aria-label="Voltar para o início">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20">JV</span>
              <span>
                <span className="block text-base font-bold leading-none text-white">JV Performance</span>
                <span className="mt-1 block text-xs font-medium text-slate-400">Digital Studio</span>
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    goHome(item.href);
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20um%20site%20profissional."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
            >
              Orçamento
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white"
              aria-label="Abrir menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 bg-slate-950/70 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)} />
      <aside className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-white/10 bg-slate-950 p-6 shadow-2xl transition-transform md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="font-bold text-white">JV Performance</div>
          <button onClick={() => setIsMenuOpen(false)} className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white" aria-label="Fechar menu">
            Fechar
          </button>
        </div>
        <nav className="mt-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                setIsMenuOpen(false);
                goHome(item.href);
              }}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/8"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20um%20site%20profissional."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-3 text-base font-bold text-slate-950"
        >
          Chamar no WhatsApp
        </a>
      </aside>
    </>
  );
};

export default Header;
