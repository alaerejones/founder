
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img 
                  src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                  alt="Onyeolu Israel Chima" 
                  className="w-full h-[500px] object-cover object-center rounded-xl"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">150+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Ambassador</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Building Africa's <span className="text-primary">Tomorrow</span> Today
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm transforming Africa through strategic business ventures across real estate, agriculture, and technology.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">Leading one of Nigeria's fastest-growing construction companies with projects across West Africa</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">Co-founder of Ilunar Technologies, driving digital transformation across industries</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">Launching Sinocle Energy Solutions to address Africa's energy demands sustainably</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/about">
                <Button size="lg" className="group w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
