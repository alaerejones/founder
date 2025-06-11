
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image Section - Better positioned and styled */}
          <div className="relative order-1 lg:order-1">
            {/* Decorative background elements for better visual connection */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-xl -rotate-1 hidden lg:block"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-xl rotate-1 hidden lg:block"></div>
            
            {/* Main image with better styling */}
            <div className="relative">
              <img 
                src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                alt="Onyeolu Israel Chima - CEO and Entrepreneur" 
                className="w-full h-[400px] lg:h-[500px] object-cover object-center rounded-xl shadow-lg relative z-10"
              />
              
              {/* Professional badge overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-20">
                <div className="text-sm font-semibold text-primary">CEO & Founder</div>
                <div className="text-xs text-muted-foreground">Building Africa's Future</div>
              </div>
            </div>
          </div>

          {/* Content Section - Better structured */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
            <div className="space-y-4 lg:space-y-6">
              {/* Enhanced header section */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Onyeolu Israel Chima</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                  Building Africa's <span className="text-primary">Tomorrow</span> Today
                </h2>
              </div>
              
              {/* Content with better typography and spacing */}
              <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4">
                <p className="text-lg lg:text-xl text-foreground font-medium mb-6">
                  As <strong className="text-primary">CEO of Sinocle Nigeria Limited</strong> and <strong className="text-primary">co-founder of Ilunar Technologies</strong>, I lead businesses that deliver <strong>infrastructure, technology, energy, and agricultural solutions across Nigeria and West Africa</strong>.
                </p>
                
                <div className="space-y-4 text-muted-foreground">
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
                  
                  <p className="text-foreground font-medium">
                    The goal has always been <strong className="text-primary">impact, building enduring institutions, enabling opportunities, and driving growth that outlives individuals</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced call-to-action section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 transition-all duration-300">
                  Partner with Me
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
