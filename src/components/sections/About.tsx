
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Section - Enhanced structure and typography */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Header section with better visual hierarchy */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Ambassador Onyeolu Israel Chima</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                  Building Africa's <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tomorrow</span> Today
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced content with better readability */}
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
                As <strong className="text-primary">CEO of Sinocle Nigeria Limited</strong> and <strong className="text-primary">co-founder of Ilunar Technologies</strong>, I lead businesses that deliver <strong className="text-primary">infrastructure, technology, energy, and agricultural solutions across Nigeria and West Africa</strong>.
              </p>
              
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
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
                
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                  <p className="text-foreground font-semibold text-lg italic">
                    The goal has always been <strong className="text-primary">"impact, building enduring institutions, enabling opportunities, and driving growth that outlives individuals"</strong>.
                  </p>
                </blockquote>
              </div>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More About My Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 transition-all duration-300">
                  <Users className="w-4 h-4 mr-2" />
                  Partner with Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section - Enhanced with better visual design */}
          <div className="relative order-1 lg:order-2">
            {/* Enhanced decorative background elements */}
            <div className="absolute -top-6 -left-6 w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl rotate-3 shadow-xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full">
              <div className="w-full h-full border-2 border-primary/20 rounded-2xl -rotate-2"></div>
            </div>
            
            {/* Main image container with enhanced styling */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-muted to-background p-1">
                <img 
                  src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                  alt="Ambassador Onyeolu Israel Chima - CEO and Entrepreneur" 
                  className="w-full h-[450px] lg:h-[550px] object-cover object-center rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Professional badge overlay with enhanced design */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground">CEO & Founder</div>
                    <div className="text-sm text-primary font-semibold">Building Africa's Future</div>
                    <div className="text-xs text-muted-foreground">Sinocle Group • Ilunar Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
