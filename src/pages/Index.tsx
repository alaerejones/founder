
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import VenturesOverview from '@/components/sections/VenturesOverview';
import QuoteSection from '@/components/sections/QuoteSection';
import MediaCoverage from '@/components/sections/MediaCoverage';
import Awards from '@/components/sections/Awards';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollToTop from '@/components/ScrollToTop';
import Stats from '@/components/sections/Stats';
import SectionNavigator from '@/components/SectionNavigator';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';

const Index = () => {
  const sections = ['hero', 'about', 'stats', 'ventures', 'quote', 'media', 'awards', 'contact'];
  const { currentSection, scrollToSection } = useFullPageScroll({ sections });

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <SectionNavigator 
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
      />
      
      <main>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <ScrollReveal delay={100}>
          <section id="about" className="min-h-screen pt-12 pb-8 lg:pt-16 lg:pb-12 flex items-center">
            <About />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={50}>
          <section id="stats" className="min-h-screen flex items-center py-12">
            <Stats />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <section id="ventures" className="min-h-screen">
            <VenturesOverview />
          </section>
        </ScrollReveal>

        <section id="quote" className="min-h-screen">
          <QuoteSection />
        </section>
        
        <ScrollReveal delay={100}>
          <section id="media" className="min-h-screen pt-8 pb-12 lg:pt-12 lg:pb-16 flex items-center">
            <MediaCoverage />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <section id="awards" className="min-h-screen pt-8 pb-12 lg:pt-12 lg:pb-16 flex items-center">
            <Awards />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <section id="contact" className="min-h-screen pt-8 pb-12 lg:pt-12 lg:pb-16 flex items-center">
            <CallToAction />
          </section>
        </ScrollReveal>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
