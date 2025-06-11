
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 lg:order-1 h-[400px] lg:h-[500px]">
            <div className="relative h-full">
              <img 
                src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                alt="Onyeolu Israel Chima" 
                className="w-full h-full object-cover object-center rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-2 lg:order-2 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Building across real estate, agriculture, and technology
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As CEO of Sinocle Nigeria Limited and co-founder of Ilunar Technologies, I build businesses that create real solutions and employment across Nigeria and West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Sinocle has become one of Nigeria's fastest-growing construction companies, delivering projects in Delta State, Lagos, Abuja, and Lomé, Togo. From commercial malls to hospitals, each development transforms communities and empowers local economies.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Through Ilunar Technologies, we bridge technology gaps and drive digital transformation across industries. I'm also launching Sinocle Energy Solutions to address Africa's growing energy demands with sustainable solutions.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                The West African Youth Council appointed me as Youth Ambassador, recognizing my work in youth empowerment and economic development across the region.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Success isn't just financial—it's about impact: lives touched, jobs created, and positive change driven. My mission is to build, empower, and lead with purpose across Nigeria and West Africa.
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
