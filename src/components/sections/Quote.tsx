
import React from 'react';

const Quote = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Quote */}
          <blockquote className="text-xl lg:text-2xl font-normal leading-relaxed mb-6 text-muted-foreground italic">
            "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-1">
            <p className="text-sm lg:text-base text-primary font-medium">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-xs lg:text-sm text-muted-foreground">
              CEO, Sinocle Nigeria Limited & Serial Entrepreneur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
