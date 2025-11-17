
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
    <div className="flex items-center gap-2 group cursor-pointer relative" aria-label="JV Performance Digital Home">
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <span className="relative text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">JV</span>
      <span className="relative text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-emerald-400 group-hover:to-emerald-500 transition-all duration-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-gradient bg-[length:200%_auto]">Performance</span>
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
      id: 'faq',
      label: 'FAQ',
      href: 'faq',
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl shadow-black/30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => setCurrentPage('home')}
              aria-label="JV Performance Digital Home"
              className="hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
            >
              <Logo />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-1 justify-center">
            {menuStructure.map((menu) => (
              <div key={menu.id} className="relative group/menu">
                {menu.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(menu.id)}
                      onMouseEnter={() => setOpenDropdown(menu.id)}
                      className="relative px-3 py-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 font-semibold text-sm lg:text-base flex items-center gap-1.5 group/btn rounded-lg hover:bg-slate-800/50"
                    >
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10">{menu.label}</span>
                      <svg 
                        className={`relative z-10 w-4 h-4 transition-transform duration-300 ${openDropdown === menu.id ? 'rotate-180' : ''}`} 
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
                      className={`absolute top-full left-0 mt-3 w-64 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-500/10 border border-slate-700/50 py-2 transition-all duration-300 ${
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
                          className="relative flex items-center gap-3 px-4 py-3 mx-2 my-1 text-slate-300 hover:text-emerald-400 transition-all duration-300 group/item rounded-xl hover:bg-slate-800/80 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative text-2xl transform group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                          <span className="relative text-sm font-semibold flex-1">{item.label}</span>
                          <svg className="relative w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
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
                    className="relative px-3 py-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 font-semibold text-sm lg:text-base rounded-lg hover:bg-slate-800/50 group/link"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{menu.label}</span>
                  </a>
                )}
              </div>
            ))}
            
            <a 
              href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
              target="_blank"
              rel="noopener noreferrer"
              className="group/whats relative px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 text-sm lg:text-base flex-shrink-0 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover/whats:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
              className="relative text-white hover:text-emerald-400 transition-all duration-300 text-2xl p-3 -mr-2 rounded-lg hover:bg-slate-800/50 group/burger"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/burger:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
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
      <div className={`md:hidden bg-slate-900/95 backdrop-blur-2xl fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 shadow-2xl shadow-black/50 border-l border-slate-700/50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-slate-800/50 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent">
          <Logo />
          <button 
            onClick={() => setIsMenuOpen(false)} 
            aria-label="Close menu"
            className="text-slate-300 hover:text-emerald-400 text-3xl transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
          >
            ✕
          </button>
        </div>
        
        <nav className="flex flex-col p-4">
          {/* Botão Início */}
          <div className="border-b border-slate-800">
            <button
              onClick={() => {
                setCurrentPage('home');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 py-4 px-2 text-slate-300 hover:text-emerald-500 transition-colors font-medium text-base"
            >
              <span className="text-lg">🏠</span>
              <span>Início</span>
            </button>
          </div>
          
          {menuStructure.map((menu) => (
            <div key={menu.id} className="border-b border-slate-800 last:border-b-0">
              {menu.hasDropdown ? (
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle(menu.id)}
                    className="w-full flex items-center justify-between py-4 px-2 text-slate-300 hover:text-emerald-500 transition-colors font-medium text-base"
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
                        className="flex items-center gap-3 py-3 pl-6 pr-2 text-slate-400 hover:text-emerald-500 hover:bg-slate-800 transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm flex-1">{item.label}</span>
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
                  className="block py-4 px-2 text-slate-300 hover:text-emerald-500 transition-colors font-medium text-base"
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
            className="group/whatsm relative mt-8 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl text-center transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover/whatsm:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
