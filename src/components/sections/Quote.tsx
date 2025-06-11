
import React from 'react';
import { Quote as QuoteIcon, Sparkles } from 'lucide-react';

const Quote = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-darken"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-15.5-7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 border border-white/20">
            <QuoteIcon className="w-10 h-10 text-secondary" />
          </div>
          
          {/* Main Quote */}
          <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-12 text-white relative">
            <span className="relative z-10">
              "Entrepreneurship is not just a career path — it's a{' '}
              <span className="relative inline-block">
                <span className="text-secondary">responsibility</span>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-secondary animate-pulse" />
              </span>
              {' '}to build solutions for generations."
            </span>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-secondary/50 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-secondary/50 rounded-br-lg"></div>
          </blockquote>
          
          {/* Attribution */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-3 h-3 bg-secondary rounded-full mr-4 animate-pulse"></div>
              <div>
                <p className="text-xl lg:text-2xl text-secondary font-bold tracking-wider">
                  ONYEOLU ISRAEL CHIMA
                </p>
                <p className="text-white/80 text-lg">
                  CEO, Sinocle Nigeria Limited & Serial Entrepreneur
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Decorative Line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
