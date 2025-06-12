
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
      behavior: 'auto' // Changed from 'smooth' to 'auto' for faster scroll
    });
  };

  if (!isVisible) {
    return null;
  }

  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        <svg
          className="w-12 h-12 transform -rotate-90 pointer-events-none"
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            stroke="#03372b"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        <div className="absolute inset-0 w-12 h-12 rounded-full bg-white text-foreground border border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105">
          <ArrowUp className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
