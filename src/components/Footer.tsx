import React from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#031d17] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Section: Brand Summary */}
        <div>
          <h5 className="text-2xl font-bold mb-4">AMB. ONYEOLU CHIMA</h5>
          <p className="text-sm text-white/80 leading-relaxed">
            Entrepreneur • Youth Advocate • CEO<br />
            Building Africa’s Future through leadership, infrastructure & technology.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-secondary transition">About</a></li>
            <li><a href="#ventures" className="hover:text-secondary transition">Ventures</a></li>
            <li><a href="#media" className="hover:text-secondary transition">Media & Insights</a></li>
            <li><a href="#awards" className="hover:text-secondary transition">Awards</a></li>
            <li><a href="#contact" className="hover:text-secondary transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Contact & Social */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Contact</h6>
          <p className="text-sm text-white/80 mb-4 leading-relaxed">
            Email: <a href="mailto:contactonyeolu@outlook.com" className="underline hover:text-secondary">contactonyeolu@outlook.com</a><br />
            Management: <a href="mailto:onyeolusmgt@outlook.com" className="underline hover:text-secondary">onyeolusmgt@outlook.com</a>
          </p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-secondary transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-secondary transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-secondary transition" />
            </a>
            <a href="mailto:contactonyeolu@outlook.com" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-secondary transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} Onyeolu Israel Chima. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;