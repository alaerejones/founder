
import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <QuoteIcon className="w-10 h-10 text-primary" />
          </div>
          
          {/* Main Quote */}
          <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-12 text-foreground">
            "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-6 py-3 bg-muted/30 rounded-2xl">
              <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
              <div>
                <p className="text-xl lg:text-2xl text-primary font-bold tracking-wider">
                  ONYEOLU ISRAEL CHIMA
                </p>
                <p className="text-muted-foreground text-lg">
                  CEO, Sinocle Nigeria Limited & Serial Entrepreneur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
