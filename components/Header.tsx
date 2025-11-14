
import React, { useState, useEffect } from 'react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
        setMobileOpenDropdown(null);
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
    <div className="flex items-center gap-2" aria-label="JV Performance Digital Home">
      <span className="text-xl sm:text-2xl font-bold text-slate-900">JV</span>
      <span className="text-xl sm:text-2xl font-bold text-emerald-600">Performance</span>
    </div>
  );

  const menuStructure = [
    {
      id: 'servicos',
      label: 'Serviços',
      hasDropdown: true,
      items: [
        { label: 'Landing Pages', href: 'landing-pages', icon: '🚀', isPage: true },
        { label: 'Sites Institucionais', href: 'sites-institucionais', icon: '🏢', isPage: true },
        { label: 'Design Responsivo', href: 'design-responsivo', icon: '📱', isPage: true },
      ]
    },
    {
      id: 'portfolio',
      label: 'Portfólio',
      hasDropdown: false,
      href: '#portfolio'
    },
    {
      id: 'planos',
      label: 'Planos',
      href: 'planos',
      isPage: true,
      hasDropdown: false
    },
    {
      id: 'contato',
      label: 'Contato',
      hasDropdown: false,
      href: '#contato'
    },
  ];

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleMobileDropdownToggle = (id: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === id ? null : id);
  };

  const handleLinkClick = (href?: string, isPage?: boolean) => {
    if (isPage && href) {
      setCurrentPage(href as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href && href.startsWith('#')) {
      // Se estiver em outra página, voltar para home primeiro
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            aria-label="JV Performance Digital Home"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Logo />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuStructure.map((menu) => (
              <div key={menu.id} className="relative group">
                {menu.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(menu.id)}
                      onMouseEnter={() => setOpenDropdown(menu.id)}
                      className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm lg:text-base flex items-center gap-1"
                    >
                      {menu.label}
                      <svg 
                        className={`w-4 h-4 transition-transform ${openDropdown === menu.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 transition-all duration-200 ${
                        openDropdown === menu.id 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {menu.items?.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.isPage ? '#' : item.href}
                          onClick={(e) => {
                            if (item.isPage) e.preventDefault();
                            handleLinkClick(item.href, item.isPage);
                          }}
                          className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors group/item"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-medium flex-1">{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] px-2 py-0.5 bg-emerald-500 text-white rounded-full font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={menu.isPage ? '#' : menu.href}
                    onClick={(e) => {
                      if (menu.isPage) {
                        e.preventDefault();
                        handleLinkClick(menu.href, menu.isPage);
                      } else if (currentPage !== 'home') {
                        e.preventDefault();
                        setCurrentPage('home');
                        setTimeout(() => {
                          const element = document.querySelector(menu.href!);
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm lg:text-base"
                  >
                    {menu.label}
                  </a>
                )}
              </div>
            ))}
            
            <a 
              href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all text-sm lg:text-base"
            >
              WhatsApp
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
              className="text-slate-900 hover:text-emerald-600 transition-colors text-2xl p-2 -mr-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden bg-white fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-end p-4 border-b border-slate-200">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            aria-label="Close menu"
            className="text-slate-600 hover:text-emerald-600 text-3xl"
          >
            ✕
          </button>
        </div>
        
        <nav className="flex flex-col p-4">
          {/* Botão Início */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => {
                setCurrentPage('home');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 py-4 px-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium text-base"
            >
              <span className="text-lg">🏠</span>
              <span>Início</span>
            </button>
          </div>
          
          {menuStructure.map((menu) => (
            <div key={menu.id} className="border-b border-slate-100 last:border-b-0">
              {menu.hasDropdown ? (
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle(menu.id)}
                    className="w-full flex items-center justify-between py-4 px-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium text-base"
                  >
                    {menu.label}
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileOpenDropdown === menu.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    mobileOpenDropdown === menu.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {menu.items?.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.isPage ? '#' : item.href}
                        onClick={(e) => {
                          if (item.isPage) e.preventDefault();
                          handleLinkClick(item.href, item.isPage);
                        }}
                        className="flex items-center gap-3 py-3 pl-6 pr-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] px-2 py-0.5 bg-emerald-500 text-white rounded-full font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={menu.isPage ? '#' : menu.href}
                  onClick={(e) => {
                    if (menu.isPage) {
                      e.preventDefault();
                      handleLinkClick(menu.href, menu.isPage);
                    } else if (currentPage !== 'home') {
                      e.preventDefault();
                      setCurrentPage('home');
                      setTimeout(() => {
                        const element = document.querySelector(menu.href!);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="block py-4 px-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium text-base"
                >
                  {menu.label}
                </a>
              )}
            </div>
          ))}
          
          <a 
            href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg text-center hover:shadow-lg"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
