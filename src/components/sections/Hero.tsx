import React from 'react';
import { Button } from "@/components/ui/button";
import { Building } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="flex items-center h-[100svh] bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden bg-cover bg-top bg-no-repeat" 
      style={{ 
        backgroundImage: 'url(/assets/hero-bg.jpg)'
      }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center h-full">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-xs lg:text-sm font-semibold tracking-[2px] lg:tracking-[3px] text-primary uppercase animate-fade-in">
                BELIEVER IN AFRICA'S BOUNDLESS POTENTIAL
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                Founder <span style={{ color: '#03372b' }}>Builder</span><br />
                Entrepreneur & Youth<br />
                Advocate
              </h1>
              <div className="space-y-3">
                <p className="text-base lg:text-lg text-white font-semibold animate-fade-in">
                  Driving Africa's growth through vision, entrepreneurship, leadership, and empowered youth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8 hover-scale"
                onClick={() => scrollToSection('ventures')}
              >
                Explore My Ventures
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-6 lg:px-8 hover-scale invisible sm:visible"
                onClick={() => scrollToSection('contact')}
              >
                Partner with Me
              </Button>
            </div>
          </div>
          
          {/* Right side */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative opacity-0">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-2xl rotate-2 group-hover:-rotate-1 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-0 right-0 lg:bottom-6 lg:right-4 rounded-none lg:rounded-lg shadow-lg p-3 z-20" style={{ backgroundColor: '#F8F9FA4D' }}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Building className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-black">CEO</div>
            <div className="text-xs" style={{ color: '#03372b' }}>Sinocle Group/Ilunar Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
