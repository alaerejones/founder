
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const QuoteSection = () => {
  return (
    <ScrollReveal delay={200}>
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-8 pb-12 lg:pt-12 lg:pb-16">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 lg:px-6 text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
          </div>
          
          {/* Quote Text */}
          <blockquote className="text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-8 text-foreground italic">
            "Success in business is not just about profit — it's about creating sustainable solutions that empower communities and build a prosperous future for Africa's next generation."
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-3">
            <div className="w-16 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-primary font-bold text-base lg:text-lg tracking-wider">
              AMB. ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-muted-foreground font-medium text-sm">
              CEO, Sinocle Nigeria Limited & ECOWAS Youth Ambassador
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default QuoteSection;
