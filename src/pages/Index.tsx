
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
            <Link to="/" className="text-xl font-bold text-primary">
              AMB. ONYEOLU CHIMA
            </Link>
            
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors">HOME</Link>
              <Link to="/about" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">ABOUT</Link>
              <Link to="/ventures" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">VENTURES</Link>
              <Link to="/philanthropy" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">PHILANTHROPY</Link>
              <Link to="/awards" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">AWARDS</Link>
              <Link to="/media" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">MEDIA</Link>
              <Link to="/contact" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">CONTACT</Link>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-1">
                <Link to="/" className="block px-3 py-2 text-sm font-semibold tracking-wider text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
                <Link to="/about" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
                <Link to="/ventures" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>VENTURES</Link>
                <Link to="/philanthropy" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>PHILANTHROPY</Link>
                <Link to="/awards" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>AWARDS</Link>
                <Link to="/media" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>MEDIA</Link>
                <Link to="/contact" className="block px-3 py-2 text-sm font-semibold tracking-wider text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
            
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-8">
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-sm font-bold tracking-[3px] text-primary uppercase">
                    ECOWAS AMBASSADOR
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                  Founder. Builder.<br />
                  Entrepreneur & Youth<br />
                  Advocate
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  As CEO of Sinocle Nigeria Limited and ECOWAS Youth Ambassador, I'm transforming Africa through strategic business ventures and youth empowerment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/ventures">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-10 py-6 text-lg font-semibold">
                    Explore Ventures
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg font-semibold">
                    Build with Sinocle
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/ceb10282-44f5-425d-8863-b8ec2966b09f.png" 
                    alt="Onyeolu Israel Chima - Professional Portrait" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">ECOWAS</div>
                      <div className="text-sm text-gray-600">Ambassador</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos Section */}
      <section className="py-20 bg-white border-b overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[3px] text-muted-foreground uppercase">
              AS FEATURED IN
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll-continuous space-x-20 items-center">
              <div className="flex items-center space-x-20 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-red-600">VANGUARD</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-orange-500">THE SUN</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-blue-700">THE NATION</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-20 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-red-600">VANGUARD</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-orange-500">THE SUN</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-blue-700">THE NATION</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-20 min-w-max">
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-red-600">VANGUARD</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-orange-500">THE SUN</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-3xl font-bold text-blue-700">THE NATION</div>
                  <div className="text-xs text-gray-500 mt-1">Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Vision for Leadership & National Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch Amb. Onyeolu Israel Chima share his vision for leadership, real estate development, and national impact.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&loop=1&playlist=-ehcCk1PP74"
                  title="Vision for Leadership & National Development"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-10 bg-white">
                <h3 className="text-2xl font-bold text-foreground mb-4">
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

      {/* Impact by Numbers */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Impact by Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building lasting change across multiple sectors in Africa through strategic leadership and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center p-8 rounded-3xl bg-white shadow-lg border hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-5xl font-bold text-foreground mb-4">150+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Projects Completed</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-white shadow-lg border hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-10 h-10" />
              </div>
              <h3 className="text-5xl font-bold text-foreground mb-4">4</h3>
              <p className="text-lg text-muted-foreground font-semibold">Major Sectors</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-white shadow-lg border hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-5xl font-bold text-foreground mb-4">10,000+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Lives Impacted</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-white shadow-lg border hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto bg-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-5xl font-bold text-foreground mb-4">15+</h3>
              <p className="text-lg text-muted-foreground font-semibold">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures & Leadership Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Ventures & Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entrepreneur. Strategic Business Leader. Driving growth across Africa through business excellence.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-16 flex flex-col justify-center">
                  <div className="flex items-center mb-10">
                    <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mr-8">
                      <Building className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">Sinocle Nigeria Limited</h3>
                      <p className="text-xl text-primary font-bold">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                    Leading real estate, infrastructure, and agricultural ventures transforming communities across Africa. Building sustainable solutions that create lasting impact.
                  </p>
                  <Link to="/ventures">
                    <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-10 py-6 text-lg font-semibold">
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

      {/* Awards & Recognition */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Honored for impactful leadership, humanitarian service, and youth empowerment across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-8 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Humanitarian Award</h3>
                  <p className="text-lg text-primary font-bold mb-4">Lions Club, 2023/2024</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In recognition of unwavering commitment to humanitarian service and youth empowerment.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-8 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Exemplary Leadership Award</h3>
                  <p className="text-lg text-primary font-bold mb-4">SYAN, Feb 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Immense contributions to Nigeria's economic growth and development as CEO of Sinocle Group.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-8 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Golden Role Model Award</h3>
                  <p className="text-lg text-primary font-bold mb-4">NYAGGI, 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bridging social gaps and promoting affordable housing for the underprivileged.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-8 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">ECOWAS Youth Ambassador Award</h3>
                  <p className="text-lg text-primary font-bold mb-4">WAYC, Nov 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Entrepreneurial excellence, leadership, and regional development across West Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="text-4xl lg:text-5xl font-bold leading-tight mb-10">
              "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
            </blockquote>
            <p className="text-2xl text-white/90 font-bold">
              — ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-lg text-white/80 mt-3">
              CEO, Sinocle Nigeria Limited & ECOWAS Youth Ambassador
            </p>
          </div>
        </div>
      </section>

      {/* Voices of Impact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Voices of Impact</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-16 rounded-3xl shadow-2xl">
              <div className="text-center">
                <blockquote className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed mb-10 italic">
                  "His unwavering commitment to youth empowerment has impacted thousands across West Africa. Ambassador Chima represents the kind of visionary leadership that Africa needs to unlock its full potential."
                </blockquote>
                <div className="border-t pt-10">
                  <p className="text-xl font-bold text-foreground">ECOWAS Youth Council</p>
                  <p className="text-muted-foreground text-lg">On Onyeolu's Youth Ambassador Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Building Africa's Future Through Strategic Leadership
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  From humble beginnings to leading Sinocle Nigeria Limited, my journey has been driven by passion for transforming Africa. My work spans real estate, agriculture, and youth empowerment — leaving a lasting impact across sectors and communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-10 py-6 text-lg font-semibold">
                    Learn More About My Journey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg font-semibold">
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

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let's Build Africa Together
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-16 max-w-3xl mx-auto">
              Partner with me on impactful ventures across Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                  Partner with Me
                </Button>
              </Link>
              <Link to="/philanthropy">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                  Collaborate on Youth Empowerment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                  Connect on Leadership Initiatives
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002010] py-20 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8 lg:col-span-2">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center">
                  <span className="text-primary font-bold text-2xl">OC</span>
                </div>
                <h5 className="text-3xl font-bold text-white">AMB. ONYEOLU CHIMA</h5>
              </div>
              <p className="text-white/90 leading-relaxed max-w-lg text-xl">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador dedicated to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <p className="text-white/90 flex items-center text-xl">
                <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </p>
            </div>
            
            <div className="space-y-8">
              <h6 className="text-2xl font-bold text-white">Quick Links</h6>
              <div className="space-y-4">
                <Link to="/about" className="block text-white/90 hover:text-white transition-colors text-xl">About</Link>
                <Link to="/ventures" className="block text-white/90 hover:text-white transition-colors text-xl">Ventures</Link>
                <Link to="/philanthropy" className="block text-white/90 hover:text-white transition-colors text-xl">Philanthropy</Link>
                <Link to="/awards" className="block text-white/90 hover:text-white transition-colors text-xl">Awards</Link>
                <Link to="/media" className="block text-white/90 hover:text-white transition-colors text-xl">Media</Link>
                <Link to="/contact" className="block text-white/90 hover:text-white transition-colors text-xl">Contact</Link>
              </div>
            </div>
            
            <div className="space-y-8">
              <h6 className="text-2xl font-bold text-white">Connect With Me</h6>
              <div className="flex space-x-6">
                <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Globe className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Twitter className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-16 border-white/20" />
          
          <div className="text-center">
            <p className="text-white/90 text-xl">
              &copy; 2024 Onyeolu Israel Chima. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
