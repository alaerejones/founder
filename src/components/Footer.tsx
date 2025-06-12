
import React from 'react';
import { Globe, Instagram, Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Footer = () => {
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

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <h5 className="text-2xl font-bold text-foreground mb-4">AMB. ONYEOLU ISRAEL CHIMA</h5>
                <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <div className="flex items-center text-muted-foreground text-base">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </div>
            </div>
            
            <div className="space-y-6">
              <h6 className="font-bold text-foreground text-lg">Connect With Me</h6>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 group"
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
          <div className="border-t border-primary/20 pt-8">
            <div className="text-center">
              <p className="text-muted-foreground text-base">
                &copy; 2024 Onyeolu Israel Chima. All rights reserved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
