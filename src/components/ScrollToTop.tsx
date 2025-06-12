
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  const circumference = 2 * Math.PI * 16; // radius of 16
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-10 h-10 transform -rotate-90"
          viewBox="0 0 36 36"
        >
          {/* Background circle */}
          <path
            className="text-primary/20"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress circle */}
          <path
            className="text-primary"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        {/* Button */}
        <Button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ScrollToTop;
