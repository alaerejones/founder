
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/d0e52c8f-8905-44f5-9968-ee23342d552d.png" 
                alt="Onyeolu Israel Chima" 
                className="w-full h-[450px] lg:h-[400px] object-cover object-center rounded-2xl shadow-2xl"
              />
              {/* Floating inspiration badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-muted">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted border border-primary/20">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">My Story & Mission</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                From <span className="text-primary">Dreams</span> to Reality:<br />
                Building Africa's <span className="text-primary">Brightest Future</span>
              </h2>
              
              <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-5">
                <p className="text-base lg:text-lg font-medium text-foreground">
                  Every great journey begins with a single step. Mine started with an unshakeable belief that <em>Africa's potential is limitless</em>.
                </p>
                
                <p>
                  As <strong className="text-primary">CEO of Sinocle Nigeria Limited</strong> and <strong className="text-primary">co-founder of Ilunar Technologies</strong>, I don't just run businesses – I nurture dreams into reality. From infrastructure that connects communities to technology that transforms lives, every project carries a piece of my heart.
                </p>
                
                <p>
                  When the <strong className="text-primary">ECOWAS Youth Council</strong> appointed me as Youth Ambassador, it wasn't just recognition – it was a calling. A reminder that true success isn't measured by what we achieve, but by how many others we lift along the way.
                </p>
                
                <div className="bg-muted rounded-xl p-4 border-l-4 border-primary">
                  <p className="italic text-foreground font-medium">
                    "I don't just build companies. I build hope. I build futures. I build the Africa our children deserve."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Desktop Buttons - Aligned with text content */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-6">
              <Link to="/about">
                <Button size="lg" className="group w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Discover My Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300">
                  Let's Build Together
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Buttons */}
        <div className="flex lg:hidden flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/about">
            <Button size="lg" className="group w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl shadow-lg">
              Discover My Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300">
              Let's Build Together
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
