
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  if (!isVisible) {
    return null;
  }

  const circumference = 2 * Math.PI * 14;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        <svg
          className="w-10 h-10 transform -rotate-90 pointer-events-none"
          viewBox="0 0 32 32"
        >
          <path
            className="text-border"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M16 2 a 14 14 0 0 1 0 28 a 14 14 0 0 1 0 -28"
          />
          <path
            stroke="#03372b"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            d="M16 2 a 14 14 0 0 1 0 28 a 14 14 0 0 1 0 -28"
          />
        </svg>
        
        <div className="absolute inset-0 w-10 h-10 rounded-full bg-background border border-border hover:border-primary/30 transition-all duration-300 flex items-center justify-center group-hover:shadow-md">
          <ArrowUp className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
