
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="relative order-1 lg:order-1 h-full min-h-[500px] lg:min-h-[600px]">
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
                Building across real estate, agriculture, and technology
              </h2>
            </div>
            
            <div className="space-y-5">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As the CEO of Sinocle Nigeria Limited and co-founder of Ilunar Technologies, my journey has been defined by a passion for building businesses that not only succeed but also serve, creating real solutions, generating employment, and contributing to sustainable development across Nigeria and West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                For years, I have led Sinocle Nigeria Limited to become one of the fastest-growing construction and real estate companies in Nigeria, delivering high-impact projects that now serve communities in Delta State, Lagos, Abuja, and extending into Lomé, Togo. From commercial malls and residential estates to hospitals, institutional and infrastructure development projects, each development represents not just brick and mortar, but an opportunity to transform lives, empower local economies, and leave a lasting legacy.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Recognizing the importance of diversification and innovation, I co-founded Ilunar Technologies, where we focus on delivering technology-driven solutions that support businesses, institutions, and individuals in an increasingly digital world. Our goal is to bridge technology gaps, unlock growth potential, and drive digital transformation across industries.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As part of my ongoing mission to address critical development needs, I am also preparing to launch Sinocle Energy Solutions, which will focus on clean and sustainable energy solutions to support Africa's growing energy demands. This new venture represents the next phase of my long-term vision: combining infrastructure, technology, agriculture, and energy to support economic growth and improve quality of life across the continent.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                In addition to my business pursuits, I remain deeply committed to youth development and regional peace-building. This commitment earned me the honor of being appointed a Youth Ambassador by the West African Youth Council (ECOWAS Youth Council), a recognition of my work in promoting youth empowerment, economic growth, and social stability across West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                I believe real success is measured not simply by financial gain, but by impact: how many lives you touch, how many jobs you create, and how much positive change you help to drive. Whether through construction, technology, agriculture, or energy, my mission remains simple: to build, empower, and lead with purpose across Nigeria and West Africa.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Though often called one of Nigeria's silent young millionaires, I prefer to let my work speak. My focus remains on creating businesses that serve real needs, building institutions that outlive individuals, and raising the next generation of African entrepreneurs and leaders.
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
