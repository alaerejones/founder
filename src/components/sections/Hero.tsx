
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Building } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="flex items-center pt-8 pb-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden bg-cover bg-top bg-no-repeat min-h-screen" 
      style={{ 
        backgroundImage: 'url(/lovable-uploads/653cb4d3-4796-4345-a4f4-d55788d237ce.png)'
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center h-full min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-4rem)] pt-4 lg:pt-0">
          
          {/* Left Content - Enhanced */}
          <div className="space-y-4 lg:space-y-8 order-2 lg:order-1 lg:pt-20 flex flex-col justify-center h-full">
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
                <p className="text-lg lg:text-xl text-white font-semibold animate-fade-in">
                  Driving Africa's growth through vision, entrepreneurship, leadership, and empowered youth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Link to="/ventures">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8 hover-scale">
                  Explore My Ventures
                </Button>
              </Link>
              <Link to="/contact" className="invisible sm:visible">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 lg:px-8 hover-scale">
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Professional headshot */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Main profile image container */}
            <div className="relative group">
              {/* Profile image - now hidden since it's the background */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative opacity-0">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-2xl rotate-2 group-hover:-rotate-1 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Achievement Badge - Bottom right with no padding on mobile */}
      <div className="absolute bottom-0 right-4 lg:bottom-6 bg-background border border-border rounded-lg shadow-lg p-3 z-20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Building className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-foreground">CEO</div>
            <div className="text-xs text-muted-foreground">Sinocle Group/Ilunar Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
