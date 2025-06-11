
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section className="py-8 lg:py-8 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl p-2 shadow-lg border">
                <img 
                  src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                  alt="Onyeolu Israel Chima" 
                  className="w-full h-[480px] object-cover object-center rounded-xl"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground">Years in Business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Amb. Onyeolu Israel Chima</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Building Africa's <span className="text-primary">Tomorrow</span> Today
              </h2>
              
              <div className="text-base text-muted-foreground leading-relaxed space-y-4 text-justify">
                <p>
                  At <strong>Sinocle Nigeria Limited</strong>, I've led a diverse portfolio of <strong>real estate, construction, and infrastructure projects</strong>, delivering <strong>malls, hospitals, estates, and institutional developments</strong> across <strong>Delta State, Lagos, Abuja, and Lomé, Togo</strong>. Each project reflects my belief that <strong>development is not just about structures, but about transforming lives and empowering communities</strong>.
                </p>
                
                <p>
                  Through <strong>Ilunar Technologies</strong>, I help businesses and institutions embrace <strong>digital transformation</strong>, <strong>bridge technology gaps</strong>, and <strong>unlock new growth opportunities</strong> in an evolving digital economy.
                </p>
                
                <p>
                  Expanding this vision further, I am launching <strong>Sinocle Energy Solutions</strong>, focused on providing <strong>clean, sustainable energy solutions</strong> to meet <strong>Africa's growing energy demands</strong> — combining <strong>infrastructure, technology, agriculture, and energy</strong> into one unified mission for the continent's future.
                </p>
                
                <p>
                  Beyond business, I am deeply committed to <strong>youth empowerment and regional peace-building</strong>, a dedication recognized through my appointment as a <strong>Youth Ambassador by the West African Youth Council (ECOWAS Youth Council)</strong>.
                </p>
                
                <p>
                  For me, <strong>true success is measured by impact</strong> — the lives touched, the opportunities created, and the futures shaped. My focus remains on <strong>building businesses that serve real needs, creating institutions that outlast individuals, and raising the next generation of African leaders</strong>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
