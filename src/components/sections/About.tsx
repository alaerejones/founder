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
    <div className="bg-white py-7">
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
                Every journey starts somewhere. Mine started with a clear belief: Africa has what it takes to build its own future with businesses that solve problems, create opportunities, and deliver lasting value.
              </p>
              <p>
                As CEO of Sinocle Nigeria Limited and co-founder of Ilunar Technologies, my work is focused on developing infrastructure, driving technology adoption, and expanding into energy solutions that serve real needs across Nigeria and West Africa.
              </p>
              <p>
                The appointment as Youth Ambassador by the ECOWAS Youth Council is a reflection of that commitment not to titles, but to building platforms that create jobs, empower youth, and strengthen the economies that will sustain Africa's next generation.
              </p>

              <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
                <p className="italic text-[#111111] font-medium">
                  At every stage, my focus remains clear: to build companies that outlive individuals, drive growth that lasts, and create spaces where people and communities thrive.
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
