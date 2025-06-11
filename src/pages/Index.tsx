import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Building, Users, Star, Lightbulb, Leaf, Zap, Home, Menu, X } from 'lucide-react';

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
              <Link to="/media" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">MEDIA & INSIGHTS</Link>
              <Link to="/awards" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">AWARDS</Link>
              <Link to="/contact" className="text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors">CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
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
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
              <div className="px-4 py-4 space-y-3">
                <Link 
                  to="/" 
                  className="block text-sm font-semibold tracking-wider text-primary hover:text-primary/80 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/about" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  to="/ventures" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VENTURES
                </Link>
                <Link 
                  to="/philanthropy" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PHILANTHROPY
                </Link>
                <Link 
                  to="/media" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MEDIA & INSIGHTS
                </Link>
                <Link 
                  to="/awards" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AWARDS
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
            
            {/* Left Content - Enhanced */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-xs lg:text-sm font-semibold tracking-[2px] lg:tracking-[3px] text-primary uppercase animate-fade-in">
                  BELIEVER IN AFRICA'S BOUNDLESS POTENTIAL
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                  Founder <span className="text-primary">Builder</span><br />
                  Entrepreneur & Youth<br />
                  Advocate
                </h1>
                <div className="space-y-3">
                  <p className="text-lg lg:text-xl text-primary font-semibold animate-fade-in">
                    Driving Africa's growth through vision, leadership, and empowered youth.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in">
                    As CEO of Sinocle Nigeria Limited and serial entrepreneur, I'm transforming Africa through strategic business ventures across multiple sectors and youth empowerment initiatives.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
                <Link to="/ventures">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90 px-6 lg:px-8 hover-scale">
                    Explore My Ventures
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6 lg:px-8 hover-scale">
                    Partner with Me
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Image - Enhanced */}
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
                      <Building className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">CEO</div>
                      <div className="text-xs text-gray-600">Sinocle Group/Ilunar Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage Strip - Improved */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-[2px] text-muted-foreground uppercase mb-4">
              FEATURED IN
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70 hover:opacity-90 transition-opacity">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-base font-bold text-foreground">VANGUARD</div>
                <div className="text-xs text-muted-foreground mt-1">Nigeria</div>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-base font-bold text-foreground">THE SUN</div>
                <div className="text-xs text-muted-foreground mt-1">Nigeria</div>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-base font-bold text-foreground">THE NATION</div>
                <div className="text-xs text-muted-foreground mt-1">Nigeria</div>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-base font-bold text-foreground">LATEST NEWS</div>
                <div className="text-xs text-muted-foreground mt-1">Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1 lg:order-1">
              <img 
                src="/lovable-uploads/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                alt="Onyeolu Israel Chima in Professional Setting" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6 order-2 lg:order-2">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-[2px] text-primary uppercase">
                  ABOUT AMBASSADOR CHIMA
                </p>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                  Building Africa's Future Through Strategic Leadership
                </h2>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                From humble beginnings to leading Sinocle Nigeria Limited, my journey has been driven by passion for transforming Africa. My work spans real estate, agriculture, energy, and technology — leaving a lasting impact across sectors and communities through strategic business ventures and youth empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-primary hover:bg-primary/90">
                    Learn More About My Journey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers - Updated */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <Home className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">150+</div>
              <p className="text-sm text-muted-foreground">Real estate development Projects delivered through sinocle across west africa</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <Building className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">4</div>
              <p className="text-sm text-muted-foreground">Major Sectors of operation</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">10,000+</div>
              <p className="text-sm text-muted-foreground">Lives Impacted</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
                <Award className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">15+</div>
              <p className="text-sm text-muted-foreground">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Ventures Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[2px] text-primary uppercase mb-4">
              BUILDING AFRICA'S FUTURE
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Entrepreneurial Ventures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through strategic business ventures across multiple sectors, I'm creating sustainable solutions that drive economic growth and empower communities across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0d300790-e67a-4840-ac00-b642f49cfa66.png" 
                  alt="Sinocle Nigeria Limited Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Nigeria Limited</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Premier real estate development and construction solutions across Nigeria</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Real Estate</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Agrosolutions</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Innovative agricultural technology and sustainable farming solutions</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Agriculture</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Energy Solutions</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Renewable energy infrastructure for sustainable development</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">iLunar Technologies</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Cutting-edge technology solutions and digital innovation</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Co-founder</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/ventures">
              <Button size="lg" className="text-white bg-primary hover:bg-primary/90">
                Explore All Ventures
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Preview Section - Simplified */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[2px] text-primary uppercase mb-4">
              RECOGNIZED FOR IMPACT
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Recognition & Awards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ECOWAS Youth Ambassador</h3>
              <p className="text-sm text-muted-foreground">West Africa Leadership</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Humanitarian Award</h3>
              <p className="text-sm text-muted-foreground">Lions Club International</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Leadership Excellence</h3>
              <p className="text-sm text-muted-foreground">Southern Youth Assembly</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Golden Role Model</h3>
              <p className="text-sm text-muted-foreground">Youth Advocacy Initiative</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/awards">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Awards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-8">
              "Entrepreneurship is not just a career path — it's a responsibility to build solutions for generations."
            </blockquote>
            <p className="text-lg text-secondary font-semibold">
              ONYEOLU ISRAEL CHIMA
            </p>
            <p className="text-white/80">
              CEO, Sinocle Nigeria Limited & Serial Entrepreneur
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
              Let's Build Africa Together
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner on transformative projects, explore investment opportunities, or join the movement for youth empowerment across Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ventures">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8">
                  Explore My Ventures
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-8">
                  Partner with Me
                </Button>
              </Link>
              <Link to="/philanthropy">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-8">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darken py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">OC</span>
                </div>
                <h5 className="text-lg font-bold text-white">AMB. ONYEOLU CHIMA</h5>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Entrepreneur, Youth Advocate, and ECOWAS Ambassador committed to building Africa's future through strategic business ventures and youth empowerment.
              </p>
              <p className="text-gray-300 flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                contact@onyeoluisraelchima.com
              </p>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-white">Quick Links</h6>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link to="/ventures" className="text-gray-300 hover:text-white transition-colors">Ventures</Link>
                <Link to="/philanthropy" className="text-gray-300 hover:text-white transition-colors">Philanthropy</Link>
                <Link to="/awards" className="text-gray-300 hover:text-white transition-colors">Awards</Link>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors">Media</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold text-white">Connect With Me</h6>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/ionyeolu?igsh=MXJtaTFyaXVhdnVpaw==" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.736 13.718 3.736 12.4c0-1.297.462-2.449 1.39-3.324.928-.875 2.026-1.312 3.323-1.312 1.297 0 2.449.437 3.324 1.312.875.875 1.312 2.027 1.312 3.324 0 1.318-.437 2.495-1.312 3.291-.875.807-2.027 1.297-3.324 1.297zm11.25-6.151c-.273-.783-.68-1.473-1.205-2.055-.525-.583-1.146-1.044-1.861-1.378-.715-.334-1.473-.501-2.275-.501-.802 0-1.56.167-2.275-.501-.715-.334 1.336-.795 1.861-1.378.525-.582-.932 1.272-1.205 2.055-.273.783-.409 1.616-.409 2.496 0 .88.136 1.713.409 2.496.273.783.68 1.473 1.205 2.055.525.582 1.146 1.044 1.861 1.378.715.334 1.473.501 2.275.501.802 0 1.56-.167 2.275-.501.715-.334 1.336-.795 1.861-1.378.525-.582.932-1.272 1.205-2.055.273-.783.409-1.616.409-2.496 0-.88-.136-1.713-.409-2.496z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/israel-chima-onyeolu-025aab1a0?" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://x.com/israelonyeolu?s=11" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linktr.ee/sinocle_nigeria_limited" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-5.872 5.873a.998.998 0 01-1.414 0L4.432 8.16a.999.999 0 111.414-1.414L10 10.899V3.6a1 1 0 112 0v7.299l4.154-4.153a.999.999 0 111.414 1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-8 border-white/20" />
          
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 Onyeolu Israel Chima. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
