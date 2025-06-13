import React from 'react';
import { Linkedin, Instagram, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9F9F9] py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-y-8">

        {/* Left: Name + Tagline */}
        <div className="space-y-2">
          <h5 className="text-[24px] font-bold text-[#111111]">
            Onyeolu Israel Chima
          </h5>
          <p className="text-[16px] text-[#333333]">
            Entrepreneur | Youth Advocate | ECOWAS Ambassador
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-[#999999] text-[14px]">
          © 2024 Onyeolu Israel Chima. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-[#111111] hover:text-[#03372B] transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-[#111111] hover:text-[#03372B] transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-[#111111] hover:text-[#03372B] transition" />
          </a>
          <a href="https://website.com" target="_blank" rel="noopener noreferrer">
            <Globe className="w-6 h-6 text-[#111111] hover:text-[#03372B] transition" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
