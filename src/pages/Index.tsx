
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Building, Users, Trophy, Menu, X, Briefcase, Layers, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-lg lg:text-xl font-bold text-primary">
              AMB. ONYEOLU CHIMA
            </Link>
            
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link to="/" className="text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors">HOME</Link>
              <Link to="/about" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">ABOUT</Link>
              <Link to="/ventures" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">VENTURES</Link>
              <Link to="/philanthropy" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">PHILANTHROPY</Link>
              <Link to="/awards" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">AWARDS</Link>
              <Link to="/media" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">MEDIA</Link>
              <Link to="/contact" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-1">
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/about" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  to="/ventures" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VENTURES
                </Link>
                <Link 
                  to="/philanthropy" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PHILANTHROPY
                </Link>
                <Link 
                  to="/awards" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AWARDS
                </Link>
                <Link 
                  to="/media" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MEDIA
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-xs font-semibold tracking-[2px] text-primary uppercase">
                    ECOWAS AMBASSADOR
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                  Founder. Builder.<br />
                  Entrepreneur & Youth<br />
                  Advocate
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in">
                  As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm transforming Africa through strategic business ventures and youth empowerment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
                <Link to="/ventures">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6 lg:px-8">
                    Explore Ventures
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 lg:px-8">
                    Build with Sinocle
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/lovable-uploads/ceb10282-44f5-425d-8863-b8ec2966b09f.png" 
                    alt="Onyeolu Israel Chima - Professional Portrait" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                  
                  {/* Subtle Overlay Elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                </div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">ECOWAS</div>
                      <div className="text-xs text-gray-600">Ambassador</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media Logos */}
      <section className="py-12 bg-white border-b overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold tracking-[2px] text-muted-foreground uppercase mb-4">
              AS FEATURED IN
            </p>
          </div>
          
          {/* Continuous scrolling logos container */}
          <div className="relative">
            <div className="flex animate-scroll-continuous space-x-16 items-center">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-red-600 mb-1">VANGUARD</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-orange-500 mb-1">THE SUN</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-blue-700 mb-1">THE NATION</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
              </div>
              
              {/* Duplicate sets for seamless loop */}
              <div className="flex items-center space-x-16 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-red-600 mb-1">VANGUARD</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-orange-500 mb-1">THE SUN</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-blue-700 mb-1">THE NATION</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
              </div>
              
              {/* Third set for complete seamless loop */}
              <div className="flex items-center space-x-16 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-red-600 mb-1">VANGUARD</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-orange-500 mb-1">THE SUN</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-blue-700 mb-1">THE NATION</div>
                  <div className="text-xs text-gray-500">Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Vision for Leadership & National Development
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch Amb. Onyeolu Israel Chima share his vision for leadership, real estate development, and national impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&loop=1&playlist=-ehcCk1PP74"
                  title="Vision for Leadership & National Development"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Leadership Excellence & Vision for Africa
                </h3>
                <p className="text-muted-foreground text-sm">
                  Featuring insights on entrepreneurship, youth empowerment, and sustainable development across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Impact by Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building lasting change across multiple sectors in Africa through strategic leadership and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground animate-counter">150+</h3>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Projects Completed</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground animate-counter">4</h3>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Major Sectors</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground animate-counter">10,000+</h3>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Lives Impacted</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground animate-counter">15+</h3>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures & Leadership Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Ventures & Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Driving growth across Africa through business excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Sinocle Nigeria Limited</h3>
              <p className="text-muted-foreground mb-6">
                Leading real estate, infrastructure, and agricultural ventures transforming communities.
              </p>
              <Link to="/ventures">
                <Button size="lg" className="text-white bg-primary hover:bg-primary/90">
                  Explore My Ventures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Honored for impactful leadership, humanitarian service, and youth empowerment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Humanitarian Award</h3>
              <p className="text-sm text-muted-foreground">In recognition of unwavering commitment to humanitarian service and youth empowerment (Lions Club, 2023/2024).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Exemplary Leadership Award</h3>
              <p className="text-sm text-muted-foreground">Immense contributions to Nigeria's economic growth and development as CEO of Sinocle Group (SYAN, Feb 2024).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Golden Role Model Award</h3>
              <p className="text-sm text-muted-foreground">Bridging social gaps and promoting affordable housing for the underprivileged (NYAGGI, 2023).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ECOWAS Youth Ambassador Award</h3>
              <p className="text-sm text-muted-foreground">Entrepreneurial excellence, leadership, and regional development across West Africa (WAYC, Nov 2023).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-8">
              "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
            </blockquote>
            <p className="text-lg text-secondary font-semibold">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-white/80">
              CEO, Sinocle Nigeria Limited & ECOWAS Youth Ambassador
            </p>
          </div>
        </div>
      </section>

      {/* Voices of Impact Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Voices of Impact</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm">
              <div className="text-center">
                <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                  "His unwavering commitment to youth empowerment has impacted thousands across West Africa. Ambassador Chima represents the kind of visionary leadership that Africa needs to unlock its full potential."
                </blockquote>
                <div className="border-t pt-6">
                  <p className="font-semibold text-foreground">ECOWAS Youth Council</p>
                  <p className="text-sm text-muted-foreground">On Onyeolu's Youth Ambassador Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ambassador Chima Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                  Building Africa's Future Through Strategic Leadership
                </h2>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm committed to transforming Africa through strategic investments in real estate, agriculture, and youth empowerment initiatives. My journey represents the power of vision, determination, and strategic thinking in creating lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90">
                    Learn More About My Journey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                alt="Onyeolu Israel Chima in Professional Setting" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Africa Together CTA */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
              Let's Build Africa Together
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with me to drive sustainable ventures and youth empowerment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8">
                  Partner with Me
                </Button>
              </Link>
              <Link to="/ventures">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white bg-white hover:bg-gray-100 hover:text-gray-900 px-8">
                  Explore My Ventures
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white bg-white hover:bg-gray-100 hover:text-gray-900 px-8">
                  Connect with Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 lg:py-16 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">OC</span>
                </div>
                <h5 className="text-lg font-bold text-white">AMB. ONYEOLU CHIMA</h5>
              </div>
              <p className="text-white/90 leading-relaxed max-w-md">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <p className="text-white/90 flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </p>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-white">Quick Links</h6>
              <div className="space-y-2">
                <Link to="/about" className="block text-white/90 hover:text-white transition-colors">About</Link>
                <Link to="/ventures" className="block text-white/90 hover:text-white transition-colors">Ventures</Link>
                <Link to="/philanthropy" className="block text-white/90 hover:text-white transition-colors">Philanthropy</Link>
                <Link to="/awards" className="block text-white/90 hover:text-white transition-colors">Awards</Link>
                <Link to="/media" className="block text-white/90 hover:text-white transition-colors">Media</Link>
                <Link to="/contact" className="block text-white/90 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-white">Connect With Me</h6>
              <div className="flex space-x-4">
                <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-8 border-white/20" />
          
          <div className="text-center">
            <p className="text-white/90 text-sm">
              &copy; 2024 Onyeolu Israel Chima. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
