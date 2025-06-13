import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="section-spacing bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-6 max-w-3xl">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Strategic Engagements & Partnerships</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For vetted partnership inquiries, strategic collaborations, or regional growth initiatives, direct contact details are provided below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 text-center sm:text-left">

          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <h4 className="text-base font-semibold text-foreground">Email</h4>
            </div>
            <a 
              href="mailto:contactonyeolu@outlook.com" 
              className="text-primary text-sm font-medium hover:text-primary/80 transition"
            >
              contactonyeolu@outlook.com
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-primary" />
              <h4 className="text-base font-semibold text-foreground">LinkedIn</h4>
            </div>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary text-sm font-medium hover:text-primary/80 transition"
            >
              Onyeolu Israel Chima
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;
