
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
            
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold tracking-[2px] text-primary uppercase">
                    ECOWAS AMBASSADOR
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                  Founder. Builder.<br />
                  Entrepreneur & Youth<br />
                  Advocate
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm transforming Africa through strategic business ventures and youth empowerment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link to="/ventures">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                    Explore Ventures
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
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
      <section className="py-16 bg-white border-b overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
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
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Vision for Leadership & National Development
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch Amb. Onyeolu Israel Chima share his vision for leadership, real estate development, and national impact.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
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
              <div className="p-8 bg-white">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  Leadership Excellence & Vision for Africa
                </h3>
                <p className="text-muted-foreground text-lg">
                  Featuring insights on entrepreneurship, youth empowerment, and sustainable development across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">Impact by Numbers</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building lasting change across multiple sectors in Africa through strategic leadership and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">150+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Projects Completed</p>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">4</h3>
              <p className="text-lg text-muted-foreground font-semibold">Major Sectors</p>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">10,000+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Lives Impacted</p>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground">15+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures & Leadership Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">Ventures & Leadership</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entrepreneur. Strategic Business Leader. Driving growth across Africa through business excellence.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mr-6">
                      <Building className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Sinocle Nigeria Limited</h3>
                      <p className="text-primary font-semibold">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Leading real estate, infrastructure, and agricultural ventures transforming communities across Africa. Building sustainable solutions that create lasting impact.
                  </p>
                  <Link to="/ventures">
                    <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                      Explore My Ventures
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                    alt="Sinocle Ventures" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">Awards & Recognition</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Honored for impactful leadership, humanitarian service, and youth empowerment across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Humanitarian Award</h3>
                  <p className="text-sm text-primary font-semibold mb-3">Lions Club, 2023/2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                In recognition of unwavering commitment to humanitarian service and youth empowerment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Exemplary Leadership Award</h3>
                  <p className="text-sm text-primary font-semibold mb-3">SYAN, Feb 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Immense contributions to Nigeria's economic growth and development as CEO of Sinocle Group.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Golden Role Model Award</h3>
                  <p className="text-sm text-primary font-semibold mb-3">NYAGGI, 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bridging social gaps and promoting affordable housing for the underprivileged.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ECOWAS Youth Ambassador Award</h3>
                  <p className="text-sm text-primary font-semibold mb-3">WAYC, Nov 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Entrepreneurial excellence, leadership, and regional development across West Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote Section */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8">
              "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
            </blockquote>
            <p className="text-xl lg:text-2xl text-white/90 font-semibold">
              — ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-lg text-white/80 mt-2">
              CEO, Sinocle Nigeria Limited & ECOWAS Youth Ambassador
            </p>
          </div>
        </div>
      </section>

      {/* Voices of Impact Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Voices of Impact</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl">
              <div className="text-center">
                <blockquote className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 italic">
                  "His unwavering commitment to youth empowerment has impacted thousands across West Africa. Ambassador Chima represents the kind of visionary leadership that Africa needs to unlock its full potential."
                </blockquote>
                <div className="border-t pt-8">
                  <p className="text-lg font-bold text-foreground">ECOWAS Youth Council</p>
                  <p className="text-muted-foreground">On Onyeolu's Youth Ambassador Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ambassador Chima Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                  Building Africa's Future Through Strategic Leadership
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  From humble beginnings to leading Sinocle Nigeria Limited, my journey has been driven by passion for transforming Africa. My work spans real estate, agriculture, and youth empowerment — leaving a lasting impact across sectors and communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                    Learn More About My Journey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                alt="Onyeolu Israel Chima in Professional Setting" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Africa Together CTA */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
              Let's Build Africa Together
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with me on impactful ventures across Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Partner with Me
                </Button>
              </Link>
              <Link to="/philanthropy">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Collaborate on Youth Empowerment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Connect on Leadership Initiatives
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002010] py-16 lg:py-20 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">OC</span>
                </div>
                <h5 className="text-2xl font-bold text-white">AMB. ONYEOLU CHIMA</h5>
              </div>
              <p className="text-white/90 leading-relaxed max-w-lg text-lg">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador dedicated to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <p className="text-white/90 flex items-center text-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </p>
            </div>
            
            <div className="space-y-6">
              <h6 className="text-xl font-bold text-white">Quick Links</h6>
              <div className="space-y-3">
                <Link to="/about" className="block text-white/90 hover:text-white transition-colors text-lg">About</Link>
                <Link to="/ventures" className="block text-white/90 hover:text-white transition-colors text-lg">Ventures</Link>
                <Link to="/philanthropy" className="block text-white/90 hover:text-white transition-colors text-lg">Philanthropy</Link>
                <Link to="/awards" className="block text-white/90 hover:text-white transition-colors text-lg">Awards</Link>
                <Link to="/media" className="block text-white/90 hover:text-white transition-colors text-lg">Media</Link>
                <Link to="/contact" className="block text-white/90 hover:text-white transition-colors text-lg">Contact</Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <h6 className="text-xl font-bold text-white">Connect With Me</h6>
              <div className="flex space-x-4">
                <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-12 border-white/20" />
          
          <div className="text-center">
            <p className="text-white/90 text-lg">
              &copy; 2024 Onyeolu Israel Chima. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
