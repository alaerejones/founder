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
      className="flex items-center justify-center py-12 lg:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: 'url(/assets/653cb4d3-4796-4345-a4f4-d55788d237ce.png)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-8">
            <p className="text-xs lg:text-sm font-semibold tracking-[2px] lg:tracking-[3px] text-primary uppercase">
              BELIEVER IN AFRICA'S BOUNDLESS POTENTIAL
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Founder <span style={{ color: '#33cc99' }}>Builder</span><br />
              Entrepreneur & Youth<br />
              Advocate
            </h1>
            <p className="text-base lg:text-lg text-white font-semibold">
              Driving Africa's growth through vision, entrepreneurship, leadership, and empowered youth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8"
                onClick={() => scrollToSection('ventures')}
              >
                Explore My Ventures
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-6 lg:px-8 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Partner with Me
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <img 
                src="/assets/653cb4d3-4796-4345-a4f4-d55788d237ce.png" 
                alt="Profile" 
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Achievement Badge */}
      <div className="absolute bottom-4 right-4 rounded-lg shadow-lg p-3 z-20 bg-white/50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Building className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-black">CEO</div>
            <div className="text-xs text-primary">Sinocle Group/Ilunar Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
