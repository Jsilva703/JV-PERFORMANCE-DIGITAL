
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <AnimatedSection>
            <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
            <PortfolioSection />
        </AnimatedSection>
        <AnimatedSection>
            <PricingSection />
        </AnimatedSection>
        <AnimatedSection>
            <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
