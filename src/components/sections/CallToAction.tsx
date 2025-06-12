import React, { useState } from 'react';
import { Linkedin, Instagram, Twitter, Globe } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, phone, project } = formData;
    const message = `New Building Project Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Description: ${project}`;
    const whatsappLink = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[24px] font-bold text-[#111111] mb-4">
            Partnership & Inquiries
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-2xl mx-auto">
            For project submissions, collaborations or partnerships, kindly provide your details below. Our office will review and respond accordingly.
          </p>
        </div>

        {/* Form */}
        <div className="grid gap-5 mb-20">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border border-[#E0E0E0] bg-[#FAFAFA] p-4 rounded-lg w-full text-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="border border-[#E0E0E0] bg-[#FAFAFA] p-4 rounded-lg w-full text-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border border-[#E0E0E0] bg-[#FAFAFA] p-4 rounded-lg w-full text-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <textarea
            name="project"
            placeholder="Project Description"
            onChange={handleChange}
            className="border border-[#E0E0E0] bg-[#FAFAFA] p-4 rounded-lg w-full h-36 text-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            className="bg-[#03372B] text-white py-3 rounded-lg font-medium text-[16px] hover:bg-[#022B22] transition"
            onClick={handleSubmit}
          >
            Submit via WhatsApp
          </button>
        </div>

        {/* Management Contact */}
        <div className="text-center mb-14">
          <h3 className="text-[18px] font-semibold text-[#111111] mb-2">Contact My Management</h3>
          <p className="text-[16px] text-[#333333] leading-relaxed">
            contactonyeolu@outlook.com <br /> onyeolusmgt@outlook.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-[#111111] hover:text-primary transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-[#111111] hover:text-primary transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-[#111111] hover:text-primary transition" />
          </a>
          <a href="https://website.com" target="_blank" rel="noopener noreferrer">
            <Globe className="w-6 h-6 text-[#111111] hover:text-primary transition" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;
