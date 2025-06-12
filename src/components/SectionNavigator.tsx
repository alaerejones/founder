
import React from 'react';

interface SectionNavigatorProps {
  sections: string[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SectionNavigator = ({ sections, currentSection, onSectionClick }: SectionNavigatorProps) => {
  const sectionNames = [
    'Home',
    'About', 
    'Stats',
    'Ventures',
    'Quote',
    'Media',
    'Awards',
    'Contact'
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className="group flex items-center"
          aria-label={`Go to ${sectionNames[index]} section`}
        >
          <span className="hidden group-hover:block text-sm font-medium text-muted-foreground bg-background px-2 py-1 rounded-md shadow-sm mr-3 transition-all duration-200">
            {sectionNames[index]}
          </span>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? 'bg-primary border-primary scale-125'
                : 'border-muted-foreground/40 hover:border-primary/60 hover:scale-110'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default SectionNavigator;
