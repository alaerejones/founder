
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                alt="Onyeolu Israel Chima in Professional Setting" 
                className="w-full rounded-lg shadow-xl"
              />
              
              {/* Professional Achievement Overlay */}
              <div className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-xs uppercase tracking-wider">Years</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>
              
              {/* Background accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="space-y-6 order-2 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[2px] text-primary uppercase">
                ABOUT AMB. ONYEOLU ISRAEL CHIMA
              </p>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                Transforming Africa Through <span className="text-primary">Strategic Leadership</span> & Vision
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As CEO of Sinocle Nigeria Limited and a recognized ECOWAS Youth Ambassador, I've dedicated my career to building sustainable solutions that empower communities and drive economic growth across West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                My entrepreneurial journey spans real estate development, agricultural innovation, renewable energy, and technology — with each venture designed to create lasting positive impact for generations to come.
              </p>
            </div>
            
            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">ECOWAS Youth Ambassador</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">West Africa Leadership</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">CEO & Founder</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">Multiple Ventures</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">Youth Advocate</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">Community Empowerment</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">Award Winner</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">15+ Recognitions</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6">
                  Discover My Story
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
