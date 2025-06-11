
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-lg lg:text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            AMB. ONYEOLU CHIMA
          </button>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('ventures')} 
              className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors"
            >
              VENTURES
            </button>
            <button 
              onClick={() => scrollToSection('media')} 
              className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors"
            >
              MEDIA & INSIGHTS
            </button>
            <button 
              onClick={() => scrollToSection('awards')} 
              className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors"
            >
              AWARDS
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors py-2"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('ventures')} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
              >
                VENTURES
              </button>
              <button 
                onClick={() => scrollToSection('media')} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
              >
                MEDIA & INSIGHTS
              </button>
              <button 
                onClick={() => scrollToSection('awards')} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
              >
                AWARDS
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
