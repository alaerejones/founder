
import React from 'react';

const Quote = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Quote */}
          <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-foreground">
            "We've created over 500 jobs across Nigeria through our ventures and empowered 2,000+ young entrepreneurs with practical business skills."
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-2">
            <p className="text-base lg:text-lg text-primary font-semibold">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-sm lg:text-base text-muted-foreground">
              CEO, Sinocle Nigeria Limited & Serial Entrepreneur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
