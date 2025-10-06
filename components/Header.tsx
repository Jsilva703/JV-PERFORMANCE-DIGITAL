
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#jornada', text: 'Jornada' },
    { href: '#projetos', text: 'Projetos' },
    { href: '#planos', text: 'Planos' },
    { href: '#contato', text: 'Contato' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-orange-500">
          JV Performance Digital
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-orange-500 transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-orange-500 transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
