
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import MediaCoverage from '@/components/sections/MediaCoverage';
import Ventures from '@/components/sections/Ventures';
import Awards from '@/components/sections/Awards';
import Quote from '@/components/sections/Quote';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <MediaCoverage />
      <Ventures />
      <Awards />
      <Quote />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
