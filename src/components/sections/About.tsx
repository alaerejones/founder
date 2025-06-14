import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
    <div className="bg-white section-spacing">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Desktop Image */}
          <div className="hidden lg:block">
            <img src="/assets/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="w-full h-full object-cover object-center rounded-2xl shadow-2xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">My Story & Mission</span>
            </div>

            <h2 className="text-[24px] font-bold text-[#111111] leading-tight">
              Building Africa's Future,<br />
              <span className="text-primary">One Project at a Time</span>
            </h2>

            <div className="space-y-5 text-[#333333] text-[16px] text-justify leading-relaxed">
              <p>
                Every journey has a starting point. For me, it started with a clear belief: that Nigeria and Africa as a whole have the potential to build businesses that solve real problems, create jobs, and deliver long-term value.
              </p>
              <p>
                Through Sinocle Nigeria Limited, I have spent years leading projects in construction and real estate development, building homes, commercial properties, and infrastructure that support communities and businesses across Nigeria and neighboring countries.
My work continues to grow into agriculture, helping improve food production and farming systems; into energy, with new ventures contributing to Nigeria’s growing oil, gas, and power sector; and into technology, using innovation to support business growth and drive economic development.
              </p>
              <p>
                The ECOWAS Youth Council appointment as Youth Ambassador reflects this mission: to build companies that create jobs, support young entrepreneurs, strengthen the economy, and help secure the future of the next generation across Africa.
              </p>

              <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
                <p className="italic text-[#111111] font-medium">
                  At every stage, my focus remains clear: to build companies that outlive individuals, building strong businesses that last, support communities, and create opportunities for growth across Nigeria and West Africa.


                </p>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-8">
              <img src="/assets/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="w-full h-[300px] object-cover object-center rounded-2xl shadow-2xl" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300" onClick={() => scrollToSection('contact')}>
                Let's Build Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
