import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        
        <div className="hidden lg:block">
          <img src="/assets/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="rounded-2xl shadow-lg" />
        </div>

        <div className="space-y-8">
          <div className="inline-flex px-4 py-2 bg-muted border border-primary/20 rounded-full text-sm font-bold text-primary uppercase tracking-wider">
            My Story & Mission
          </div>

          <h2 className="text-3xl font-bold leading-tight text-foreground">
            Building Africa's Future <br/><span className="text-primary">One Project at a Time</span>
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>Every journey starts somewhere. Mine started with a clear belief: Africa has what it takes to build its own future with businesses that solve problems, create opportunities, and deliver lasting value.</p>
            <p>As CEO of Sinocle Nigeria Limited and co-founder of Ilunar Technologies, my work is focused on developing infrastructure, driving technology adoption, and expanding into energy solutions that serve real needs across Nigeria and West Africa.</p>
            <p>The appointment as Youth Ambassador by the ECOWAS Youth Council is a reflection of that commitment not to titles, but to building platforms that create jobs, empower youth, and strengthen the economies that will sustain Africa's next generation.</p>
          </div>

          <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
            <p className="italic text-foreground font-medium">
              My focus remains clear: to build companies that outlive individuals, drive growth that lasts, and create spaces where people and communities thrive.
            </p>
          </div>

          <div className="lg:hidden">
            <img src="/assets/d0e52c8f-8905-44f5-9968-ee23342d552d.png" alt="Onyeolu Israel Chima" className="rounded-2xl shadow-lg" />
          </div>

          <div>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300" onClick={() => scrollToSection('contact')}>
              Let's Build Together
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
