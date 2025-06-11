
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Building Africa's <span className="text-primary">Tomorrow</span> Today
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                As <strong className="text-foreground">CEO of Sinocle Nigeria Limited</strong> and <strong className="text-foreground">co-founder of Ilunar Technologies</strong>, I lead businesses that deliver <strong className="text-foreground">infrastructure, technology, energy, and agricultural solutions across Nigeria and West Africa</strong>.
              </p>
              
              <p>
                At <strong className="text-foreground">Sinocle Nigeria Limited</strong>, I have overseen <strong className="text-foreground">major construction, real estate, and infrastructure projects</strong>, including <strong className="text-foreground">malls, hospitals, estates, institutional and infrastructural developments</strong> across <strong className="text-foreground">Delta State, Lagos, Abuja, and Lomé, Togo</strong>.
              </p>
              
              <p>
                Through <strong className="text-foreground">Ilunar Technologies</strong>, we drive <strong className="text-foreground">digital transformation</strong>, by developing software solutions that <strong className="text-foreground">bridge technology gaps and unlock growth</strong> across sectors.
              </p>
              
              <p>
                With the upcoming launch of <strong className="text-foreground">Sinocle Energy Solutions</strong>, my focus extends into <strong className="text-foreground">clean, sustainable energy</strong>, addressing <strong className="text-foreground">Africa's evolving energy needs</strong> and supporting long-term development.
              </p>
              
              <p>
                Beyond enterprise, my work in <strong className="text-foreground">youth empowerment and regional peace-building</strong> has been recognized by my appointment as <strong className="text-foreground">Youth Ambassador to the ECOWAS Youth Council</strong>.
              </p>
              
              <p className="text-foreground font-semibold">
                The goal has always been <strong className="text-primary">impact, building enduring institutions, enabling opportunities, and driving growth that outlives individuals</strong>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  Learn More About My Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Users className="w-4 h-4 mr-2" />
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img 
              src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
              alt="Ambassador Onyeolu Israel Chima" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
