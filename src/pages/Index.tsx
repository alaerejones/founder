
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Ventures from '@/components/sections/Ventures';
import Quote from '@/components/sections/Quote';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
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
      
      <section id="ventures">
        <Ventures />
      </section>

      {/* Media & Insights Section - Redesigned */}
      <section id="media" className="py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-8">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Media & <span className="text-primary">Insights</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Thought leadership and media coverage showcasing our impact across Africa's entrepreneurial landscape
            </p>
          </div>
          
          {/* Featured Video Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Featured Interview
                </h3>
                <p className="text-lg text-muted-foreground">
                  Insights on Africa's entrepreneurial future and youth empowerment
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <iframe 
                  width="100%" 
                  height="500" 
                  src="https://www.youtube.com/embed/-ehcCk1PP74?si=AdBcyebFZPEQqfsM&autoplay=1&mute=1&controls=1" 
                  title="Featured Interview - Building Africa's Future" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Press Coverage Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Press Coverage
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Featured across leading African publications for entrepreneurial excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Onyeolu Israel Chima Bags Award
                    </h4>
                    <p className="text-primary font-semibold mb-3">Vanguard • Nov 28, 2023</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recognition for outstanding contributions to youth empowerment and business development across West Africa.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Godfatherism Cause of Leadership Failure
                    </h4>
                    <p className="text-primary font-semibold mb-3">The Sun • Sept 3, 2024</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Advocating for merit-based leadership and youth inclusion in governance structures.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Entrepreneurial Trait Gaining Recognition
                    </h4>
                    <p className="text-primary font-semibold mb-3">Vanguard • Mar 16, 2025</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Highlighting innovative approaches to business and community development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Redesigned */}
      <section id="awards" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-8">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa
            </p>
          </div>
          
          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-white to-muted/30 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-sm font-bold">2024</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">ECOWAS Youth Ambassador</h3>
                  <p className="text-muted-foreground font-medium">West Africa Leadership</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-muted/30 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-sm font-bold">2023</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Humanitarian Award</h3>
                  <p className="text-muted-foreground font-medium">Lions Club International</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-muted/30 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-sm font-bold">2023</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Leadership Excellence</h3>
                  <p className="text-muted-foreground font-medium">Southern Youth Assembly</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-muted/30 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1">
                  <span className="text-sm font-bold">2022</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Golden Role Model</h3>
                  <p className="text-muted-foreground font-medium">Youth Advocacy Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-8">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build <span className="text-primary">Africa's Future</span><br />
              Together
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to partner on transformative projects or explore investment opportunities? Let's connect and create meaningful impact across Africa.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-12">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">contact@onyeoluisraelchima.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275.501-.715.334-1.336.795-1.861 1.378-.525.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Partnership Areas */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-foreground mb-8">Partnership Opportunities</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Real Estate Development</h4>
                    <p className="text-muted-foreground leading-relaxed">Joint ventures in residential and commercial projects across West Africa</p>
                  </div>
                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technology Innovation</h4>
                    <p className="text-muted-foreground leading-relaxed">Strategic partnerships in fintech and digital transformation</p>
                  </div>
                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Youth Empowerment</h4>
                    <p className="text-muted-foreground leading-relaxed">Collaborative initiatives for skills development and job creation</p>
                  </div>
                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Energy Solutions</h4>
                    <p className="text-muted-foreground leading-relaxed">Investment opportunities in renewable energy and infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
