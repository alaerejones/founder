import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-10">
      <div className="container mx-auto px-4 max-w-6xl text-center space-y-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Amb. Onyeolu Israel Chima. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-primary"><Facebook /></a>
          <a href="#" className="hover:text-primary"><Instagram /></a>
          <a href="#" className="hover:text-primary"><Linkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
