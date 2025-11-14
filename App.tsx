
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import LandingPages from './pages/LandingPages';
import SitesInstitucionais from './pages/SitesInstitucionais';
import DesignResponsivo from './pages/DesignResponsivo';
import PlanosPage from './pages/PlanosPage';

export type Page = 'home' | 'landing-pages' | 'sites-institucionais' | 'design-responsivo' | 'planos';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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
      case 'home':
      default:
        return (
          <main>
            <HeroSection setCurrentPage={setCurrentPage} />
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
    <div className="bg-white text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
      <Analytics />
    </div>
  );
};

export default App;
