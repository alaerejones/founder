

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Building, Users, Star, Lightbulb, Leaf, Zap, Home } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

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
              <div className="w-full h-32 mx-auto mb-4 rounded-lg overflow-hidden">
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
              <div className="w-full h-32 mx-auto bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <Leaf className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Agrosolutions</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Innovative agricultural technology and sustainable farming solutions</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Agriculture</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-32 mx-auto bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Energy Solutions</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Renewable energy infrastructure for sustainable development</p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-32 mx-auto bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <Lightbulb className="w-12 h-12" />
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

      <Footer />
    </div>
  );
};

export default Index;
