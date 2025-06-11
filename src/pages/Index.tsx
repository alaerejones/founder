
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

      {/* Media & Insights Section */}
      <section id="media" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 lg:mb-8 border border-primary/20 bg-muted">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Media & Insights</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-8 leading-tight text-center">
              Thought <span className="text-primary">Leadership</span><br />
              & Media<br />
              Features
            </h2>
          </div>
          
          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                Featured Interview
              </h3>
            </div>
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/-ehcCk1PP74?si=AdBcyebFZPEQqfsM&autoplay=1&mute=1&controls=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>

          {/* Press Features */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                Press Coverage
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-2">Onyeolu Israel Chima Bags Award</h4>
                <p className="text-muted-foreground mb-4">Vanguard • Nov 28, 2023</p>
                <p className="text-sm text-muted-foreground">Recognition for outstanding contributions to youth empowerment and business development.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-2">Godfatherism Cause of Leadership Failure</h4>
                <p className="text-muted-foreground mb-4">The Sun • Sept 3, 2024</p>
                <p className="text-sm text-muted-foreground">Advocating for merit-based leadership and youth inclusion in governance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-2">Entrepreneurial Trait Gaining Recognition</h4>
                <p className="text-muted-foreground mb-4">Vanguard • Mar 16, 2025</p>
                <p className="text-sm text-muted-foreground">Highlighting innovative approaches to business and community development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border relative">
              <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border">
                <span className="text-xs font-bold text-primary">2024</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2 leading-tight">ECOWAS Youth Ambassador</h3>
                <p className="text-sm text-muted-foreground font-medium">West Africa Leadership</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border relative">
              <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border">
                <span className="text-xs font-bold text-primary">2023</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2 leading-tight">Humanitarian Award</h3>
                <p className="text-sm text-muted-foreground font-medium">Lions Club International</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border relative">
              <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border">
                <span className="text-xs font-bold text-primary">2023</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2 leading-tight">Leadership Excellence</h3>
                <p className="text-sm text-muted-foreground font-medium">Southern Youth Assembly</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border relative">
              <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border">
                <span className="text-xs font-bold text-primary">2022</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2 leading-tight">Golden Role Model</h3>
                <p className="text-sm text-muted-foreground font-medium">Youth Advocacy Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 lg:mb-8 border border-primary/20 bg-muted">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Get In Touch</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-8 leading-tight text-center">
              Let's Build <span className="text-primary">Africa's Future</span><br />
              Together
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to partner on transformative projects or explore investment opportunities? Let's connect and create meaningful impact across Africa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">contact@onyeoluisraelchima.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275.501-.715.334-1.336.795-1.861 1.378-.525.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Partnership Areas */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Partnership Opportunities</h3>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Real Estate Development</h4>
                      <p className="text-sm text-muted-foreground">Joint ventures in residential and commercial projects across West Africa</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Technology Innovation</h4>
                      <p className="text-sm text-muted-foreground">Strategic partnerships in fintech and digital transformation</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Youth Empowerment</h4>
                      <p className="text-sm text-muted-foreground">Collaborative initiatives for skills development and job creation</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Energy Solutions</h4>
                      <p className="text-sm text-muted-foreground">Investment opportunities in renewable energy and infrastructure</p>
                    </div>
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
