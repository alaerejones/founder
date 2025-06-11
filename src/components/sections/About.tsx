
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="relative order-1 lg:order-1 h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative h-full">
              <img 
                src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                alt="Onyeolu Israel Chima" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-2 lg:order-2 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Building sustainable solutions across Africa
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As CEO of Sinocle Nigeria Limited, I focus on developing projects that create lasting economic value and opportunities across West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                My work spans real estate development, agriculture, and technology — sectors where thoughtful investment can drive meaningful growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6">
                  Get in Touch
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
