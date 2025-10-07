
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import IronmanSection from './components/IronmanSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200">
      <Header />
      <main>
        <HeroSection />
        <AnimatedSection>
            <JourneySection />
        </AnimatedSection>
        <AnimatedSection>
            <PortfolioSection />
        </AnimatedSection>
        <AnimatedSection>
            <PricingSection />
        </AnimatedSection>
        <AnimatedSection>
            <IronmanSection />
        </AnimatedSection>
        <AnimatedSection>
            <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;
