
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <img 
              src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
              alt="Onyeolu Israel Chima" 
              className="w-full h-[400px] lg:h-screen object-cover object-center rounded-none lg:rounded-xl"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Onyeolu Israel Chima</span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                Building Africa's <span className="text-primary">Tomorrow</span> Today
              </h2>
              
              <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  As <strong>CEO of Sinocle Nigeria Limited</strong> and <strong>co-founder of Ilunar Technologies</strong>, I lead businesses that deliver infrastructure, technology, energy, and agricultural solutions across Nigeria and West Africa.
                </p>
                
                <p>
                  From overseeing major construction and real estate projects to driving digital transformation through innovative software solutions, my work focuses on creating lasting impact across Delta State, Lagos, Abuja, and Lomé.
                </p>
                
                <p>
                  My appointment as <strong>Youth Ambassador to the ECOWAS Youth Council</strong> reflects my commitment to empowering the next generation and building enduring institutions that outlive individuals.
                </p>
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
        </div>
      </div>
    </section>
  );
};

export default About;
