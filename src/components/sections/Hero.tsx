
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Building } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex items-center pt-16 pb-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" style={{ minHeight: 'calc(75vh - 4rem)' }}>
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Enhanced */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-xs lg:text-sm font-semibold tracking-[2px] lg:tracking-[3px] text-primary uppercase animate-fade-in">
                BELIEVER IN AFRICA'S BOUNDLESS POTENTIAL
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                Founder <span className="text-primary">Builder</span><br />
                Entrepreneur & Youth<br />
                Advocate
              </h1>
              <div className="space-y-3">
                <p className="text-lg lg:text-xl text-primary font-semibold animate-fade-in">
                  Driving Africa's growth through vision, entrepreneurship, leadership, and empowered youth.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in">
                  As CEO of Sinocle Nigeria Limited and serial entrepreneur, I'm transforming Africa through strategic business ventures across multiple sectors and youth empowerment initiatives.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Link to="/ventures">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6 lg:px-8 hover-scale">
                  Explore My Ventures
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6 lg:px-8 hover-scale">
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Image - Enhanced */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/assets/ceb10282-44f5-425d-8863-b8ec2966b09f.png" 
                  alt="Onyeolu Israel Chima - Professional Portrait" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                
                {/* Subtle Overlay Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">CEO</div>
                    <div className="text-xs text-gray-600">Sinocle Group/Ilunar Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
