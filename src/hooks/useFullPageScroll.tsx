
import { useEffect, useState, useCallback } from 'react';

interface UseFullPageScrollOptions {
  sections: string[];
  threshold?: number;
}

export const useFullPageScroll = ({ sections, threshold = 0.5 }: UseFullPageScrollOptions) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling || index < 0 || index >= sections.length) return;
    
    setIsScrolling(true);
    const element = document.getElementById(sections[index]);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      setCurrentSection(index);
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  }, [sections, isScrolling]);

  const scrollToNext = useCallback(() => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }, [currentSection, sections.length, scrollToSection]);

  const scrollToPrev = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      
      if (e.deltaY > 0) {
        scrollToNext();
      } else {
        scrollToPrev();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToPrev();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    // Intersection Observer to track current section
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            const sectionIndex = sections.indexOf(entry.target.id);
            if (sectionIndex !== -1) {
              setCurrentSection(sectionIndex);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, [sections, threshold, isScrolling, scrollToNext, scrollToPrev, scrollToSection]);

  return {
    currentSection,
    isScrolling,
    scrollToSection,
    scrollToNext,
    scrollToPrev,
    totalSections: sections.length
  };
};
