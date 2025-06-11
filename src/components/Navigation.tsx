
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg lg:text-xl font-bold text-primary">
            AMB. ONYEOLU CHIMA
          </Link>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/" className="text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors">HOME</Link>
            <Link to="/about" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">ABOUT</Link>
            <Link to="/ventures" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">VENTURES</Link>
            <Link to="/media" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">MEDIA & INSIGHTS</Link>
            <Link to="/awards" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">AWARDS</Link>
            <Link to="/contact" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">CONTACT</Link>
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
              <Link 
                to="/" 
                className="block text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/ventures" 
                className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VENTURES
              </Link>
              <Link 
                to="/media" 
                className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MEDIA & INSIGHTS
              </Link>
              <Link 
                to="/awards" 
                className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AWARDS
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
