
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Globe, Users } from 'lucide-react';

const CallToAction = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Continental reach"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaborative growth"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2303372b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full mb-8">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Ready to Build Africa Together?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight">
              Let's Create <span className="text-primary">Africa's Future</span><br />
              <span className="text-secondary">Together</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to partner on transformative projects, explore investment opportunities, or join the movement for youth empowerment across Africa.
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/ventures">
              <Button size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore My Ventures
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Partner with Me
                <Users className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          
          {/* Bottom Accent */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
