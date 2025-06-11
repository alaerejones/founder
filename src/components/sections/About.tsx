
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
              
              <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4 lg:space-y-6">
                <p>
                  As <strong>CEO of Sinocle Nigeria Limited</strong> and <strong>co-founder of Ilunar Technologies</strong>, I lead businesses that deliver <strong>infrastructure, technology, energy, and agricultural solutions across Nigeria and West Africa</strong>.
                </p>
                
                <p>
                  At <strong>Sinocle Nigeria Limited</strong>, I have overseen <strong>major construction, real estate, and infrastructure projects</strong>, including <strong>malls, hospitals, estates, institutional and infrastructural developments</strong> across <strong>Delta State, Lagos, Abuja, and Lomé, Togo</strong>.
                </p>
                
                <p>
                  Through <strong>Ilunar Technologies</strong>, we drive <strong>digital transformation</strong>, by developing software solutions that <strong>bridge technology gaps and unlock growth</strong> across sectors.
                </p>
                
                <p>
                  With the upcoming launch of <strong>Sinocle Energy Solutions</strong>, my focus extends into <strong>clean, sustainable energy</strong>, addressing <strong>Africa's evolving energy needs</strong> and supporting long-term development.
                </p>
                
                <p>
                  Beyond enterprise, my work in <strong>youth empowerment and regional peace-building</strong> has been recognized by my appointment as <strong>Youth Ambassador to the ECOWAS Youth Council</strong>.
                </p>
                
                <p>
                  The goal has always been <strong>impact, building enduring institutions, enabling opportunities, and driving growth that outlives individuals</strong>.
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
