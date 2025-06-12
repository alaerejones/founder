
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

  const circumference = 2 * Math.PI * 10;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        <svg
          className="w-7 h-7 transform -rotate-90 pointer-events-none"
          viewBox="0 0 24 24"
        >
          <path
            className="text-muted-foreground/30"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M12 2 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20"
          />
          <path
            stroke="#03372b"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            d="M12 2 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20"
          />
        </svg>
        
        <div className="absolute inset-0 w-7 h-7 rounded-full bg-background border border-muted-foreground/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center group-hover:shadow-sm">
          <ArrowUp className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
