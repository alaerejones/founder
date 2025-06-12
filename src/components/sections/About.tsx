
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="bg-white py-0">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Content Section - Always first on mobile, second on desktop */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
              <ScrollReveal delay={100}>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted border border-primary/20">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">My Story & Mission</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  Building Africa's Future,<br />
                  <span className="text-primary">One Project at a Time</span>
                </h2>
              </ScrollReveal>
              
              {/* Mobile Image - Between heading and text content */}
              <ScrollReveal direction="left" delay={250}>
                <div className="relative lg:hidden mb-8">
                  <img src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="w-full h-[300px] object-cover object-center rounded-2xl shadow-2xl" />
                </div>
              </ScrollReveal>
              
              <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-5 text-left">
                <ScrollReveal delay={300}>
                  <p className="text-base lg:text-lg text-muted-foreground text-justify">
                    Every journey starts somewhere. Mine started with a clear belief: Africa has what it takes to build its own future with businesses that solve problems, create opportunities, and deliver lasting value.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <p className="text-base lg:text-lg text-muted-foreground text-justify">
                    As CEO of Sinocle Nigeria Limited and co-founder of Ilunar Technologies, my work is focused on developing infrastructure, driving technology adoption, and expanding into energy solutions that serve real needs across Nigeria and West Africa.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={500}>
                  <p className="text-base lg:text-lg text-muted-foreground text-justify">
                    The appointment as Youth Ambassador by the ECOWAS Youth Council is a reflection of that commitment not to titles, but to building platforms that create jobs, empower youth, and strengthen the economies that will sustain Africa's next generation.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={600}>
                  <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
                    <p className="italic text-foreground font-medium">
                      At every stage, my focus remains clear: to build companies that outlive individuals, drive growth that lasts, and create spaces where people and communities thrive.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            {/* Buttons for all devices */}
            <ScrollReveal delay={700}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="group w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => scrollToSection('ventures')}>
                  Discover My Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300" onClick={() => scrollToSection('contact')}>
                  Let's Build Together
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop Image Section - Hidden on mobile */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative order-2 lg:order-1 lg:flex lg:flex-col hidden lg:block">
              <div className="relative lg:flex-1">
                <img src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="w-full h-[450px] lg:h-full object-cover object-center rounded-2xl shadow-2xl" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
export default About;
