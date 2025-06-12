
import React from 'react';

const Quote = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Quote */}
          <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight mb-8 text-foreground italic">
            "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-2">
            <p className="text-lg lg:text-xl text-primary font-bold tracking-wider">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-muted-foreground">
              CEO, Sinocle Nigeria Limited & Serial Entrepreneur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
