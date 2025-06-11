
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Building } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center pt-16 pb-8 overflow-hidden" style={{ minHeight: 'calc(75vh - 4rem)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/ceb10282-44f5-425d-8863-b8ec2966b09f.png" 
          alt="Onyeolu Israel Chima - Professional Portrait" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Enhanced for overlay */}
          <div className="space-y-6 lg:space-y-8 max-w-2xl">
            <div className="space-y-4">
              <p className="text-xs lg:text-sm font-semibold tracking-[2px] lg:tracking-[3px] text-secondary uppercase animate-fade-in">
                BELIEVER IN AFRICA'S BOUNDLESS POTENTIAL
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white animate-fade-in">
                Founder <span className="text-secondary">Builder</span><br />
                Entrepreneur & Youth<br />
                Advocate
              </h1>
              <div className="space-y-3">
                <p className="text-lg lg:text-xl text-secondary font-semibold animate-fade-in">
                  Driving Africa's growth through vision, entrepreneurship, leadership, and empowered youth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Link to="/ventures">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6 lg:px-8 hover-scale shadow-lg">
                  Explore My Ventures
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-black px-6 lg:px-8 hover-scale shadow-lg backdrop-blur-sm bg-white/10">
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Floating Achievement Badge */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <div className="lg:absolute lg:bottom-8 lg:right-8">
              {/* Floating Achievement Badge */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-white/20 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">CEO & Founder</div>
                    <div className="text-xs text-muted-foreground">Sinocle Group</div>
                    <div className="text-xs text-muted-foreground">Ilunar Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
