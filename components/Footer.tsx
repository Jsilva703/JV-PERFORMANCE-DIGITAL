
import React from 'react';
import type { Page } from '../App';

interface FooterProps {
  setCurrentPage?: (page: Page) => void;
}

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.474 1.059-1.103 4.029 4.138-1.082.946.465z" />
    </svg>
);

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const Logo: React.FC = () => (
    <div className="flex items-center justify-center gap-2.5" aria-label="JV Performance Digital Home">
      <svg className="h-8 w-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>JV Performance Digital Logo</title>
        <path
          d="M2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14L18 25L24 14"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold">
        <span className="text-slate-200">JV Performance </span>
        <span className="text-emerald-400">Digital</span>
      </span>
    </div>
  );

const navLinks = [
    { href: '#servicos', text: 'Serviços' },
    { href: '#projetos', text: 'Portfólio' },
    { href: '#planos', text: 'Planos' },
    { href: '#contato', text: 'Contato' },
];

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleLinkClick = (href: string) => {
    if (setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  return (
        <footer className="bg-slate-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">JV Performance</h3>
            <p className="text-slate-400 text-sm sm:text-base">Criando presenças digitais profissionais para o seu negócio.</p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#servicos" onClick={(e) => { e.preventDefault(); handleLinkClick('#servicos'); }} className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">Serviços</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleLinkClick('#portfolio'); }} className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">Portfólio</a></li>
              <li><button onClick={() => { if (setCurrentPage) setCurrentPage('planos'); }} className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">Planos</button></li>
              <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleLinkClick('#contato'); }} className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">Contato</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
                </svg>
                <a href="https://wa.me/5511952445898" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">(11) 95244-5898</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:jvs.devsilva@gmail.com" className="hover:text-emerald-400 transition-colors break-all">jvs.devsilva@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-slate-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} JV Performance Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
