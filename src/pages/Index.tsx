
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import { Quote, Building2, Users, Trophy, ExternalLink, ArrowRight, Mail, Phone } from 'lucide-react';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 600);
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
      
      {/* SECTION 2: ABOUT */}
      <section id="about" className="py-20 lg:py-24 bg-white">
        <About />
      </section>
      
      {/* SECTION 3: IMPACT BY NUMBERS */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <Stats />
      </section>

      {/* SECTION 4: PERSONAL LEGACY BLOCK */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  A Vision Beyond <span className="text-primary">Ventures</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium" style={{ fontSize: '22px', lineHeight: '1.6' }}>
                    My mission goes beyond building companies — it's about building solutions that empower people, strengthen communities, and unlock Africa's full economic potential for generations to come.
                  </p>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <div className="w-12 h-1 bg-primary"></div>
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                      Founder & Visionary
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambassador Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/lovable-uploads/653cb4d3-4796-4345-a4f4-d55788d237ce.png" 
                  alt="Amb. Onyeolu Israel Chima in Ambassador regalia"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VENTURES & LEADERSHIP */}
      <section id="ventures" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full mb-8 shadow-lg border">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Ventures & Leadership</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Building Africa's Future Through <span className="text-primary">Strategic Ventures</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A diversified portfolio of businesses across key sectors, creating sustainable solutions that drive economic growth and empower communities throughout West Africa.
            </p>
          </div>
          
          {/* Ventures Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sinocle Nigeria Limited */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png" 
                  alt="Sinocle Nigeria Limited - Real Estate Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle Nigeria Limited</h3>
                  <p className="text-sm opacity-90">Premier Real Estate & Construction</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leading real estate development and construction company transforming Nigeria's urban landscape with innovative residential and commercial projects across West Africa.
                </p>
                <a 
                  href="https://buildwithsinocle.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>

            {/* Sinocle AgroSolutions */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png" 
                  alt="Sinocle AgroSolutions - Agricultural Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle AgroSolutions</h3>
                  <p className="text-sm opacity-90">Food Security & Agricultural Innovation</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Revolutionary agricultural technology and sustainable farming solutions empowering African farmers with modern techniques for large-scale food production.
                </p>
                <a 
                  href="https://sinocleagro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>

            {/* Sinocle Energy Solutions */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/f218aff5-6866-45a9-b57a-89bda6dda12d.png" 
                  alt="Sinocle Energy Solutions - Oil & Gas Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">Sinocle Energy Solutions</h3>
                  <p className="text-sm opacity-90">Oil & Gas Infrastructure Development</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive energy infrastructure solutions spanning renewable energy, oil and gas development, and clean energy projects for sustainable African development.
                </p>
                <a 
                  href="https://sinoclegroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>

            {/* iLunar Technologies */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/567f24d0-a065-43b2-96ba-7ceb22ee3239.png" 
                  alt="iLunar Technologies - Digital Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">iLunar Technologies</h3>
                  <p className="text-sm opacity-90">Digital Innovation & Technology Solutions</p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cutting-edge technology solutions driving digital transformation across industries with AI-powered platforms and custom software development.
                </p>
                <a 
                  href="https://ilunartech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MEDIA & INSIGHTS */}
      <section id="media" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-muted rounded-full mb-8 shadow-lg border">
              <Quote className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Media & Insights</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Thought Leadership & <span className="text-primary">Global Recognition</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Featured across leading African publications and international platforms for entrepreneurial excellence and visionary leadership in Africa's economic development.
            </p>
          </div>
          
          {/* Featured Video */}
          <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
            <div className="text-center mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                Featured Leadership Interview
              </h3>
              <p className="text-lg text-muted-foreground">
                Insights on Africa's entrepreneurial future and youth empowerment
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&rel=0" 
                title="Featured Leadership Interview - Building Africa's Future" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
                style={{ aspectRatio: '16/9' }}
              ></iframe>
            </div>
          </div>

          {/* Featured Press Articles */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                Featured Press Coverage
              </h3>
              <p className="text-lg text-muted-foreground">
                Recognition from leading African media outlets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="https://www.vanguardngr.com/2023/11/onyeolu-israel-chima-bags-award/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-muted/30 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="space-y-4">
                  <div className="text-primary font-bold text-sm uppercase tracking-wider">VANGUARD</div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Nigerian Onyeolu Israel Chima Bags Award
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">November 28, 2023</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Recognition for outstanding contributions to youth empowerment and business development across West Africa, highlighting innovative approaches to entrepreneurship.
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:underline flex items-center">
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
              
              <a 
                href="https://sunnewsonline.com/godfatherism-cause-of-leadership-failure-onyeolu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-muted/30 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="space-y-4">
                  <div className="text-primary font-bold text-sm uppercase tracking-wider">THE SUN</div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Godfatherism, Favoritism Cause of Leadership Failure
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">September 3, 2024</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Advocating for merit-based leadership and youth inclusion in governance structures across Africa, calling for systemic change in political processes.
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:underline flex items-center">
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: AWARDS & RECOGNITION */}
      <section id="awards" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full mb-8 shadow-lg border">
              <Trophy className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Honors & Recognition</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Selected Honors & <span className="text-primary">Recognitions</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              These represent a few of the many honors and recognitions received for entrepreneurial leadership, youth empowerment, and community impact across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* ECOWAS Youth Ambassador */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/653cb4d3-4796-4345-a4f4-d55788d237ce.png" 
                  alt="ECOWAS Youth Ambassador Recognition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full px-4 py-2">
                  <span className="text-sm font-bold">2024</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">ECOWAS Youth Ambassador Recognition</h3>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">ECOWAS Youth Council</p>
                <p className="text-muted-foreground leading-relaxed">
                  Outstanding leadership in youth empowerment and economic development across West Africa, representing the voice of African youth on regional platforms.
                </p>
              </div>
            </div>

            {/* Golden Role Model Award */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/ba70c25b-3758-4ab6-be0a-a068feb953bf.png" 
                  alt="Golden Role Model Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full px-4 py-2">
                  <span className="text-sm font-bold">2022</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Golden Role Model Award</h3>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Nigeria Youth Advocacy Initiative</p>
                <p className="text-muted-foreground leading-relaxed">
                  Exemplary leadership and mentorship in empowering young entrepreneurs and fostering innovation in African business development.
                </p>
              </div>
            </div>

            {/* Humanitarian Award */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/d13faf9a-2263-483a-a703-a13cb588d81c.png" 
                  alt="Humanitarian Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full px-4 py-2">
                  <span className="text-sm font-bold">2023</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Humanitarian Award</h3>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Lions Club, Asaba Jextoban</p>
                <p className="text-muted-foreground leading-relaxed">
                  Recognized for significant contributions to community development and social impact initiatives across Nigeria and West Africa.
                </p>
              </div>
            </div>

            {/* Exemplary Leadership Award */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/assets/ba70c25b-3758-4ab6-be0a-a068feb953bf.png" 
                  alt="Exemplary Leadership Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full px-4 py-2">
                  <span className="text-sm font-bold">2023</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Exemplary Leadership Award</h3>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Southern Youth Assembly of Nigeria</p>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence in entrepreneurship and business development initiatives, demonstrating exceptional leadership in economic empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PERSONAL QUOTE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-primary/10 text-8xl font-serif">"</div>
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed text-foreground italic mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations.
              </blockquote>
              <div className="space-y-2">
                <p className="text-primary font-bold text-lg tracking-wider uppercase">
                  AMB. ONYEOLU ISRAEL CHIMA
                </p>
                <p className="text-muted-foreground">
                  Founder & CEO, Sinocle Group | ECOWAS Youth Ambassador
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT MY MANAGEMENT */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full mb-8 shadow-lg border">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Executive Contact</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Contact My <span className="text-primary">Management</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For collaborations, partnerships, speaking engagements, or media inquiries, kindly contact my management team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="media">Media Request</option>
                      <option value="mentorship">Mentorship Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-foreground mb-6">Management Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Executive Email</p>
                        <p className="text-muted-foreground">contactonyeolu@outlook.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-foreground mb-4">Connect Professionally</h4>
                    <div className="flex space-x-4">
                      <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275.501-.715.334-1.336.795-1.861 1.378-.525.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
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

      {/* SECTION 10: CALL TO ACTION BLOCK */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Let's Build Africa's Future <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Partner with me on projects that create real value for communities, businesses, and the next generation of African leaders.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <a 
              href="#ventures" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center text-lg shadow-lg flex items-center justify-center"
            >
              Explore My Ventures
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-primary border-2 border-primary px-10 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-center text-lg shadow-lg"
            >
              Partner With Me
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-foreground border-2 border-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center text-lg shadow-lg"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 16}`}
              strokeDashoffset={`${2 * Math.PI * 16 * (1 - scrollProgress / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
          </svg>
          <svg className="w-3 h-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Index;
