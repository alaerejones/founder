
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import VenturesOverview from '@/components/sections/VenturesOverview';
import QuoteSection from '@/components/sections/QuoteSection';
import MediaCoverage from '@/components/sections/MediaCoverage';
import Awards from '@/components/sections/Awards';
import Stats from '@/components/sections/Stats';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <ScrollReveal>
          <section id="stats" className="hidden lg:block pt-8 pb-12">
            <Stats />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <section id="about" className="pt-12 pb-8 lg:pt-16 lg:pb-12">
            <About />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <VenturesOverview />
        </ScrollReveal>

        <QuoteSection />
        
        <ScrollReveal delay={100}>
          <section id="media" className="pt-8 pb-12 lg:pt-12 lg:pb-16">
            <MediaCoverage />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <section id="awards" className="pt-8 pb-12 lg:pt-12 lg:pb-16">
            <Awards />
          </section>
        </ScrollReveal>
        
        <ScrollReveal>
          <section id="stats" className="block lg:hidden pt-8 pb-12">
            <Stats />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <section id="contact" className="pt-8 pb-12 lg:pt-12 lg:pb-16">
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
