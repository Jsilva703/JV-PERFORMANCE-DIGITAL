import React, { useEffect, useState } from 'react';
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
import LandingPages from './pages/LandingPages';
import SitesInstitucionais from './pages/SitesInstitucionais';
import DesignResponsivo from './pages/DesignResponsivo';
import PlanosPage from './pages/PlanosPage';
import FAQPage from './pages/FAQPage';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from './utils/analytics';

export type Page = 'home' | 'landing-pages' | 'sites-institucionais' | 'design-responsivo' | 'planos' | 'faq';

const pageMetadata: Record<Page, { title: string; path: string }> = {
  home: { title: 'JV Performance Digital - Sites profissionais para pequenos negócios', path: '/' },
  'landing-pages': { title: 'Landing Pages - JV Performance Digital', path: '/landing-pages' },
  'sites-institucionais': { title: 'Sites Institucionais - JV Performance Digital', path: '/sites-institucionais' },
  'design-responsivo': { title: 'Design Responsivo - JV Performance Digital', path: '/design-responsivo' },
  planos: { title: 'Planos - JV Performance Digital', path: '/planos' },
  faq: { title: 'FAQ - JV Performance Digital', path: '/faq' },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageStartTime, setPageStartTime] = useState<number>(Date.now());
  const [scrollTracked, setScrollTracked] = useState<Set<number>>(new Set());

  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);

    if (timeSpent > 3) {
      trackTimeOnPage(currentPage, timeSpent);
    }

    trackPageView(currentPage, metadata.title);
    document.title = metadata.title;
    setPageStartTime(Date.now());
    setScrollTracked(new Set());
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight <= 0) return;

      const scrollPercentage = Math.round((window.scrollY / documentHeight) * 100);
      [25, 50, 75, 90].forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollTracked.has(milestone)) {
          trackScrollDepth(milestone, currentPage);
          setScrollTracked((prev) => new Set(prev).add(milestone));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, scrollTracked]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);
      if (timeSpent > 3) trackTimeOnPage(currentPage, timeSpent);
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
            <ProblemsSection />
            <ServicesSection />
            <PortfolioSection />
            <PricingSection />
            <FAQSection />
            <ContactSection />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f6f4ef] text-slate-950">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer setCurrentPage={setCurrentPage} />
      </div>
      <Analytics />
    </div>
  );
};

export default App;
