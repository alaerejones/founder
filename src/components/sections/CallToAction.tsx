
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary rounded-full mb-8">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Ready to Build Africa Together?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight">
              Let's Create <span className="text-primary">Africa's Future</span><br />
              <span className="text-primary">Together</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to partner on transformative projects, explore investment opportunities, or join the movement for youth empowerment across Africa.
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
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
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-10 py-4 text-xl font-bold rounded-2xl shadow-lg">
                Explore My Ventures
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-xl font-bold rounded-2xl shadow-lg">
                Partner with Me
                <Users className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
