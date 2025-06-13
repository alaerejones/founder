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
    <section id="contact" className="section-spacing bg-muted/10">
      <div className="container mx-auto px-4 lg:px-6 max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Let's Build Together</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Partnership & Inquiries
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For projects, partnerships or collaborations — kindly share your details below. Our office will review and respond.
          </p>
        </div>

        {/* Form */}
        <div className="grid gap-6 mb-20">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border border-border bg-white p-4 rounded-lg w-full text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="border border-border bg-white p-4 rounded-lg w-full text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border border-border bg-white p-4 rounded-lg w-full text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
          <textarea
            name="project"
            placeholder="Project Description"
            onChange={handleChange}
            className="border border-border bg-white p-4 rounded-lg w-full h-40 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
          <button
            onClick={handleSubmit}
            className="bg-primary text-white font-semibold py-4 rounded-lg text-lg hover:bg-primary/90 transition"
          >
            Submit via WhatsApp
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Contact My Management</h3>
          <p className="text-base text-muted-foreground">
            contactonyeolu@outlook.com <br />
            onyeolusmgt@outlook.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
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
