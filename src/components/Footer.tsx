
import React from 'react';
import { Globe, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Globe,
      href: "https://linktr.ee/sinocle_nigeria_limited",
      label: "Website"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/israelonyeolu?s=11",
      label: "Twitter"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Ventures", id: "ventures" },
    { name: "Awards", id: "awards" },
    { name: "Media", id: "media" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-darken py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h5 className="text-2xl font-bold text-white mb-4">AMB. ONYEOLU ISRAEL CHIMA</h5>
                <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <div className="flex items-center text-gray-300 text-base">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </div>
            </div>
            
            <div className="space-y-6">
              <h6 className="font-bold text-white text-lg">Quick Links</h6>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-primary transition-colors text-left text-base hover:translate-x-2 transition-transform duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h6 className="font-bold text-white text-lg">Connect With Me</h6>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-base">
                &copy; 2024 Onyeolu Israel Chima. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-gray-300">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
