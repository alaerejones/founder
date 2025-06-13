import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="section-spacing bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-6 max-w-3xl">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-4">Strategic Engagements & Partnerships</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Direct management contact is available for vetted partnership discussions, executive collaborations, or regional development initiatives aligned with my ongoing work across infrastructure, enterprise growth, and youth empowerment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-10 text-center">

          <div className="flex flex-col items-center gap-2">
            <Mail className="w-6 h-6 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Email</h4>
            <a href="mailto:contactonyeolu@outlook.com" className="text-primary text-base font-medium">
              contactonyeolu@outlook.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Linkedin className="w-6 h-6 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">LinkedIn</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary text-base font-medium">
              Onyeolu Israel Chima
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;
