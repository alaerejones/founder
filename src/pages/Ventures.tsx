
import React from 'react';
import { Button } from "@/components/ui/button";

const Ventures = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-primary">
              AMB. ONYEOLU CHIMA
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">HOME</a>
              <a href="/about" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">ABOUT</a>
              <a href="/ventures" className="text-sm font-semibold tracking-wider text-primary">VENTURES</a>
              <a href="/philanthropy" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">PHILANTHROPY</a>
              <a href="/media" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">MEDIA & INSIGHTS</a>
              <a href="/awards" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">AWARDS & RECOGNITION</a>
              <a href="/contact" className="text-sm font-semibold tracking-wider hover:text-primary transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[3px] text-primary uppercase mb-4">
              SINOCLE NIGERIA LIMITED
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Founder <span className="text-primary">Builder</span><br />
              Entrepreneur & Youth<br />
              Advocate
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through Sinocle Nigeria Limited, we are transforming Africa's landscape across multiple sectors with strategic investments in real estate, agriculture, and youth empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real Estate Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Leading Nigeria's construction and real estate sector with innovative projects that set new standards for quality and sustainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/assets/6f2a5535-255f-478e-8d2c-9d5c00cb3143.png" 
                alt="Construction Project 1" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Residential Development</h3>
                  <p className="text-sm">Modern housing solutions</p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/assets/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                alt="Construction Project 2" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Commercial Spaces</h3>
                  <p className="text-sm">Business infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/assets/6f2a5535-255f-478e-8d2c-9d5c00cb3143.png" 
                alt="Construction Project 3" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Infrastructure Projects</h3>
                  <p className="text-sm">Community development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Agricultural Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                Revolutionizing Nigeria's agricultural sector through modern farming techniques, technology integration, and sustainable practices that increase productivity and food security.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Modern farming equipment and technology
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Sustainable agricultural practices
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  Farmer training and empowerment programs
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/assets/d69f1a2b-e9c2-41f7-aa1e-009a85cd5a24.png" 
                alt="Agricultural Development" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Youth Empowerment Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Creating opportunities for young Africans through mentorship, training, and employment programs that build the leaders of tomorrow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Skills Training</h3>
              <p className="text-muted-foreground">Comprehensive training programs in construction, agriculture, and business development</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Job Creation</h3>
              <p className="text-muted-foreground">Direct employment opportunities across our real estate and agricultural ventures</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Mentorship</h3>
              <p className="text-muted-foreground">One-on-one guidance and leadership development for emerging entrepreneurs</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-white mr-4">
              Partner with Me
            </Button>
            <Button variant="outline" size="lg">
              Explore My Ventures
            </Button>
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
                <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="/ventures" className="block text-muted-foreground hover:text-primary transition-colors">Ventures</a>
                <a href="/philanthropy" className="block text-muted-foreground hover:text-primary transition-colors">Philanthropy</a>
                <a href="/awards" className="block text-muted-foreground hover:text-primary transition-colors">Awards</a>
                <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
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

export default Ventures;
