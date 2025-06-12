import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Quote from '@/components/sections/Quote';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Mobile: About section comes immediately after Hero */}
      <div className="block lg:hidden">
        <section id="about">
          <About />
        </section>
        <Stats />
      </div>
      
      {/* Desktop: Stats section comes before About */}
      <div className="hidden lg:block">
        <Stats />
        <section id="about">
          <About />
        </section>
      </div>
      
      {/* Ventures & Leadership Section */}
      <section id="ventures" className="py-20 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
              Ventures & Leadership
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building Africa's future through strategic business ventures across multiple sectors, creating sustainable solutions that drive economic growth and foster innovation throughout West Africa.
            </p>
          </div>
          
          {/* Ventures Grid - Visual Cards with Real Images */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Sinocle Nigeria Limited - Real Estate */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png" 
                  alt="Sinocle Nigeria Limited - Real Estate Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle Nigeria Limited</h3>
                  <p className="text-sm opacity-90">Premier Real Estate Development</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Full-service real estate development and civil engineering projects across Nigeria, transforming urban landscapes with innovative residential and commercial developments.
                </p>
              </div>
            </div>

            {/* Sinocle Energy Solutions */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/f218aff5-6866-45a9-b57a-89bda6dda12d.png" 
                  alt="Sinocle Energy Solutions - Oil & Gas Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle Energy Solutions</h3>
                  <p className="text-sm opacity-90">Oil & Gas Infrastructure</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in energy infrastructure, pipeline works, and comprehensive oil & gas services, powering Nigeria's energy sector development.
                </p>
              </div>
            </div>

            {/* iLunar Technologies */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/567f24d0-a065-43b2-96ba-7ceb22ee3239.png" 
                  alt="iLunar Technologies - Digital Innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">iLunar Technologies</h3>
                  <p className="text-sm opacity-90">Digital Innovation Hub</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Digital innovation and software development arm, delivering cutting-edge technology solutions and AI-powered platforms for African businesses.
                </p>
              </div>
            </div>

            {/* Sinocle AgroSolutions */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png" 
                  alt="Sinocle AgroSolutions - Agricultural Innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle AgroSolutions</h3>
                  <p className="text-sm opacity-90">Food Security Initiative</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Large-scale poultry, egg, and crop production empowering food security across Nigeria with modern agricultural techniques and sustainable farming.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="bg-muted/30 rounded-xl p-6 lg:p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">4</div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Active Ventures</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">150+</div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Projects Delivered</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">10K+</div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Lives Impacted</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">3</div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Insights Section - Clean Single Video */}
      <section id="media" className="py-20 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
              Media & Insights
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Featured across leading African publications for entrepreneurial excellence and thought leadership on Africa's economic development.
            </p>
          </div>
          
          {/* Featured Video - Single Clean Embed */}
          <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
            <div className="text-center mb-8">
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                Featured Interview: Africa's Emerging Leaders
              </h3>
              <p className="text-base text-muted-foreground">
                Insights on Africa's entrepreneurial future and youth empowerment
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1" 
                title="Featured Interview - Building Africa's Future" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
                style={{ aspectRatio: '16/9' }}
              ></iframe>
            </div>
          </div>

          {/* Press Coverage - Clickable Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4">
                Press Coverage
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Vanguard Article 1 */}
              <a 
                href="https://www.vanguardngr.com/2023/11/onyeolu-israel-chima-bags-award/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="space-y-4">
                  <div className="text-primary font-bold text-sm">VANGUARD</div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Onyeolu Israel Chima Bags Award
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Nov 28, 2023</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Recognition for outstanding contributions to youth empowerment and business development across West Africa.
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:underline">
                    Read Full Article →
                  </div>
                </div>
              </a>
              
              {/* The Sun Article */}
              <a 
                href="https://sunnewsonline.com/godfatherism-cause-of-leadership-failure-onyeolu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="space-y-4">
                  <div className="text-primary font-bold text-sm">THE SUN</div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Godfatherism Cause of Leadership Failure
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Sept 3, 2024</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Advocating for merit-based leadership and youth inclusion in governance structures across Africa.
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:underline">
                    Read Full Article →
                  </div>
                </div>
              </a>
              
              {/* Vanguard Article 2 */}
              <a 
                href="https://www.vanguardngr.com/2025/03/entrepreneurial-trait-gaining-recognition/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="space-y-4">
                  <div className="text-primary font-bold text-sm">VANGUARD</div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Entrepreneurial Excellence Recognition
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Mar 16, 2025</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Highlighting innovative approaches to business and community development initiatives.
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:underline">
                    Read Full Article →
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Real Award Images */}
      <section id="awards" className="py-20 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
              Awards & Recognition
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Recognized by leading institutions for exceptional contributions to youth empowerment and economic development across Africa.
            </p>
          </div>
          
          {/* Awards Grid - Real Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ECOWAS Youth Ambassador */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                  alt="ECOWAS Youth Ambassador Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold">2024</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">ECOWAS Youth Ambassador</h3>
                <p className="text-primary font-semibold text-sm mb-3">ECOWAS Youth Council</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Outstanding leadership in youth empowerment and economic development across West Africa.
                </p>
              </div>
            </div>

            {/* Humanitarian Award */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/6f2a5535-255f-478e-8d2c-9d5c00cb3143.png" 
                  alt="Humanitarian Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Humanitarian Award</h3>
                <p className="text-primary font-semibold text-sm mb-3">Lions Club International</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Contributions to community development and social impact initiatives across Nigeria.
                </p>
              </div>
            </div>

            {/* Leadership Excellence */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/ba70c25b-3758-4ab6-be0a-a068feb953bf.png" 
                  alt="Leadership Excellence Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Leadership Excellence</h3>
                <p className="text-primary font-semibold text-sm mb-3">Southern Youth Assembly</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exceptional leadership in entrepreneurship and business development initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Africa Together CTA - Moved before Contact */}
      <section className="py-20 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Africa's Future Together
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to partner on transformative projects, explore investment opportunities, or collaborate on youth empowerment initiatives across Africa?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Partner With Me
            </a>
            <a 
              href="#ventures" 
              className="w-full sm:w-auto bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-center"
            >
              Explore My Ventures
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-foreground border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Book Me To Speak
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Final Section Before Footer */}
      <section id="contact" className="py-20 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
              Get In Touch
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For partnerships, media, or mentorship inquiries, please reach out below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-muted/30 rounded-xl p-6 lg:p-8 border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-foreground mb-2">Reason for Contact</label>
                    <select 
                      id="inquiry" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="partnership">Partnership</option>
                      <option value="youth-empowerment">Youth Empowerment</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="media">Media Request</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-muted/30 rounded-xl p-6 lg:p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">contact@onyeoluisraelchima.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275-.501-.715-.334 1.336-.795 1.861-1.378.525-.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Scroll to Top Button with Progress Ring */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            {/* Background circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
          </svg>
          {/* Arrow Icon */}
          <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Footer - Light Background, No Quick Links */}
      <footer className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <div className="mb-6">
              <h5 className="text-lg font-bold text-foreground mb-2">AMB. ONYEOLU CHIMA</h5>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275-.501-.715-.334 1.336-.795 1.861-1.378.525-.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                </svg>
              </a>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-muted-foreground text-sm">
                &copy; 2024 Onyeolu Israel Chima. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
