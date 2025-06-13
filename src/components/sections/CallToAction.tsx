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
    const message = `New Project Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}`;
    const whatsappLink = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="section-spacing bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let’s Work Together</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Submit your request or project inquiry below and my management team will respond shortly.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border border-border bg-white p-4 text-base text-foreground focus:ring-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="border border-border bg-white p-4 text-base text-foreground focus:ring-primary focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border border-border bg-white p-4 text-base text-foreground focus:ring-primary focus:outline-none"
          />
          <textarea
            name="project"
            placeholder="Project Description"
            onChange={handleChange}
            rows={5}
            className="border border-border bg-white p-4 text-base text-foreground focus:ring-primary focus:outline-none md:col-span-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white font-semibold text-lg py-4 hover:bg-primary/90 transition"
        >
          Submit Inquiry via WhatsApp
        </button>

        {/* Contact */}
        <div className="text-center mt-14">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Management Contact</h3>
          <p className="text-base text-muted-foreground">
            contactonyeolu@outlook.com <br /> onyeolusmgt@outlook.com
          </p>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-8 mt-10">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-foreground hover:text-primary transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-foreground hover:text-primary transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-foreground hover:text-primary transition" />
          </a>
          <a href="https://website.com" target="_blank" rel="noopener noreferrer">
            <Globe className="w-6 h-6 text-foreground hover:text-primary transition" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
