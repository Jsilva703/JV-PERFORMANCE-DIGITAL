
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const Logo: React.FC = () => (
    <div className="flex items-center gap-2.5" aria-label="JV Performance Digital Home">
      <svg className="h-8 w-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>JV Performance Digital Logo</title>
        <path
          d="M2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34"
          stroke="#F97316"
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
      <span className="hidden sm:block text-xl font-bold">
        <span className="text-slate-200">JV Performance </span>
        <span className="text-orange-500">Digital</span>
      </span>
    </div>
  );

  const navLinks = [
    { href: '#jornada', text: 'Jornada' },
    { href: '#projetos', text: 'Projetos' },
    { href: '#planos', text: 'Planos' },
    { href: '#contato', text: 'Contato' },
  ];

  return (
    <>
      <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" aria-label="JV Performance Digital Home">
            <Logo />
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-orange-500 transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden bg-slate-900 fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav className="flex flex-col items-start space-y-6 p-6 mt-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-300 hover:text-orange-500 transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
