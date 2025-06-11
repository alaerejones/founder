
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Onyeolu Israel Chima</span>
              </div>
              
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground leading-tight">
                Building Africa's <span className="text-primary">Tomorrow</span> Today
              </h2>
              
              <div className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4 lg:space-y-6">
                <p>
                  At <strong>Sinocle Nigeria Limited</strong>, I lead diverse real estate, construction, and infrastructure projects across Delta State, Lagos, Abuja, and Lomé, Togo. Each project reflects my belief that development transforms lives and empowers communities.
                </p>
                
                <p>
                  Through <strong>Ilunar Technologies</strong> and the upcoming <strong>Sinocle Energy Solutions</strong>, I help businesses embrace digital transformation while providing clean, sustainable energy solutions for Africa's future.
                </p>
                
                <p>
                  As a <strong>Youth Ambassador for the West African Youth Council (ECOWAS)</strong>, I remain committed to youth empowerment and regional peace-building, focusing on creating institutions that outlast individuals and raising the next generation of African leaders.
                </p>
              </div>
              
              {/* Image Section - moved after paragraph on mobile */}
              <div className="relative lg:hidden">
                <img 
                  src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                  alt="Onyeolu Israel Chima" 
                  className="w-full h-[480px] object-cover object-center rounded-xl"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8">
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section - only visible on desktop, no border/shadow */}
          <div className="relative order-2 lg:order-1 hidden lg:block">
            <img 
              src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
              alt="Onyeolu Israel Chima" 
              className="w-full h-[480px] object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
