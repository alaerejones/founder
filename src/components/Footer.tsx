
import React from 'react';
import { Globe, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-darken py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="mb-4">
              <h5 className="text-lg font-bold text-white">AMB. ONYEOLU CHIMA</h5>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
            </p>
            <p className="text-gray-300 flex items-center text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              contact@onyeoluisraelchima.com
            </p>
          </div>
          
          <div className="space-y-4">
            <h6 className="font-semibold text-white">Quick Links</h6>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('ventures')} 
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Ventures
              </button>
              <button 
                onClick={() => scrollToSection('awards')} 
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Awards
              </button>
              <button 
                onClick={() => scrollToSection('media')} 
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Media
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h6 className="font-semibold text-white">Connect With Me</h6>
            <div className="flex space-x-4">
              <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-white/20" />
        
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 Onyeolu Israel Chima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
