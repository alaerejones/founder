
import React from 'react';

const Quote = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-8">
            "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
          </blockquote>
          <div className="space-y-2">
            <p className="text-lg lg:text-xl text-secondary font-semibold">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-white/80">
              CEO, Sinocle Nigeria Limited & Serial Entrepreneur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
