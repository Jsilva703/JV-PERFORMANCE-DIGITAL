
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import LandingPages from './pages/LandingPages';
import SitesInstitucionais from './pages/SitesInstitucionais';
import DesignResponsivo from './pages/DesignResponsivo';
import PlanosPage from './pages/PlanosPage';
import FAQPage from './pages/FAQPage';
import { trackPageView, trackTimeOnPage, trackScrollDepth } from './utils/analytics';

export type Page = 'home' | 'landing-pages' | 'sites-institucionais' | 'design-responsivo' | 'planos' | 'faq';

const pageMetadata: Record<Page, { title: string; path: string }> = {
  'home': { title: 'Home - JV Performance Digital', path: '/' },
  'landing-pages': { title: 'Landing Pages - JV Performance Digital', path: '/landing-pages' },
  'sites-institucionais': { title: 'Sites Institucionais - JV Performance Digital', path: '/sites-institucionais' },
  'design-responsivo': { title: 'Design Responsivo - JV Performance Digital', path: '/design-responsivo' },
  'planos': { title: 'Planos e Preços - JV Performance Digital', path: '/planos' },
  'faq': { title: 'FAQ - Perguntas Frequentes - JV Performance Digital', path: '/faq' },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageStartTime, setPageStartTime] = useState<number>(Date.now());
  const [scrollTracked, setScrollTracked] = useState<Set<number>>(new Set());

  // Rastrear mudança de página
  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    
    // Rastrear tempo na página anterior
    const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);
    if (timeSpent > 3) { // Só rastreia se passou mais de 3 segundos
      const previousPage = Object.keys(pageMetadata).find(
        key => pageMetadata[key as Page].path === window.location.pathname
      );
      if (previousPage) {
        trackTimeOnPage(previousPage, timeSpent);
      }
    }
    
    // Rastrear nova página
    trackPageView(currentPage, metadata.title);
    
    // Atualizar título da página
    document.title = metadata.title;
    
    // Resetar tempo de início
    setPageStartTime(Date.now());
    
    // Resetar scroll tracking
    setScrollTracked(new Set());
    
    // Scroll para o topo
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Rastrear scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / documentHeight) * 100);
      
      // Rastrear marcos importantes: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollTracked.has(milestone)) {
          trackScrollDepth(milestone, currentPage);
          setScrollTracked(prev => new Set(prev).add(milestone));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, scrollTracked]);

  // Rastrear tempo ao sair da página
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);
      if (timeSpent > 3) {
        trackTimeOnPage(currentPage, timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentPage, pageStartTime]);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing-pages':
        return <LandingPages setCurrentPage={setCurrentPage} />;
      case 'sites-institucionais':
        return <SitesInstitucionais setCurrentPage={setCurrentPage} />;
      case 'design-responsivo':
        return <DesignResponsivo setCurrentPage={setCurrentPage} />;
      case 'planos':
        return <PlanosPage setCurrentPage={setCurrentPage} />;
      case 'faq':
        return <FAQPage setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <main>
            <HeroSection setCurrentPage={setCurrentPage} />
            <AnimatedSection>
              <ProblemsSection setCurrentPage={setCurrentPage} />
            </AnimatedSection>
            <AnimatedSection>
              <ServicesSection />
            </AnimatedSection>
            <AnimatedSection>
              <PortfolioSection />
            </AnimatedSection>
            <AnimatedSection>
              <ContactSection />
            </AnimatedSection>
          </main>
        );
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 relative">
      <AnimatedBackground />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
      <Analytics />
    </div>
  );
};

export default App;
