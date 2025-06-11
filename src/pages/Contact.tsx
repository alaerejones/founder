import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary">
              AMB. ONYEOLU CHIMA
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">HOME</Link>
              <Link to="/about" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">ABOUT</Link>
              <Link to="/ventures" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">VENTURES</Link>
              <Link to="/philanthropy" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">PHILANTHROPY</Link>
              <Link to="/media" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">MEDIA & INSIGHTS</Link>
              <Link to="/awards" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">AWARDS & RECOGNITION</Link>
              <Link to="/contact" className="text-sm font-semibold tracking-wider text-primary">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[3px] text-primary uppercase mb-4">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Let's Build <span className="text-primary">Africa's</span><br />
              Future<br />
              Together
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">Reason for Contact</label>
                <select 
                  id="reason" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a reason</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="flex gap-4">
                <Button type="submit" size="lg" className="text-white">
                  Send Message
                </Button>
                <Button variant="outline" size="lg">
                  Let's Work Together
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Connect With Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Email: contact@onyeoluisraelchima.com
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="text-primary hover:text-primary/80 transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="text-primary hover:text-primary/80 transition-colors">
                LinkedIn
              </a>
              <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="text-primary hover:text-primary/80 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-foreground">AMB. ONYEOLU CHIMA</h5>
              <p className="text-muted-foreground">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-foreground">Quick Links</h6>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link to="/ventures" className="block text-muted-foreground hover:text-primary transition-colors">Ventures</Link>
                <Link to="/philanthropy" className="block text-muted-foreground hover:text-primary transition-colors">Philanthropy</Link>
                <Link to="/awards" className="block text-muted-foreground hover:text-primary transition-colors">Awards</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-foreground">Connect With Me</h6>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275.501-.715.334-1.336.795-1.861 1.378-.525.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </p>
            </div>
          </div>
          
          <hr className="my-8 border-border" />
          
          <div className="text-center">
            <p className="text-muted-foreground">
              &copy; 2024 Onyeolu Israel Chima. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
