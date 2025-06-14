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
            <img src="/assets/about.jpg" alt="Onyeolu Israel Chima" className="w-full h-full object-cover object-center rounded-2xl shadow-2xl" />
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
                Through Sinocle Nigeria Limited, I’ve led the delivery of residential, commercial, and public infrastructure projects that serve communities, businesses, and governments across Nigeria, with growing footprints across West Africa.

As my work expands into agriculture, energy, and technology, the mission remains the same: to develop businesses that address real needs; from improving food production and building energy capacity, to developing homegrown software that solves global challenges.
              </p>
              <p>
                My appointment as Youth Ambassador by the ECOWAS Youth Council reflects this larger commitment: not to titles, but to building companies that empower young people, strengthen economies, and create platforms that will serve Africa’s next generation.
              </p>

              <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
                <p className="italic text-[#111111] font-medium">
                  At every stage, my focus remains clear: to build companies that outlive individuals, enterprises that create real impact, strengthen communities, and drive Africa’s long-term growth.


                </p>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-8">
              <img src="/assets/about.jpg" alt="Onyeolu Israel Chima" className="w-full h-[300px] object-cover object-center rounded-2xl shadow-2xl" />
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
