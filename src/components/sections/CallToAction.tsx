
import React from 'react';
import { ArrowRight, Rocket, Globe, Users, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from '@/components/ScrollReveal';

const CallToAction = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions for Africa's growth"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Continental reach and sustainable development"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaborative growth and youth empowerment"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@onyeoluisraelchima.com",
      href: "mailto:contact@onyeoluisraelchima.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 (0) 123 456 7890",
      href: "tel:+2341234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      href: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-muted/20 via-white to-primary/5">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-primary rounded-full mb-8">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Ready to Build Africa Together?</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight">
                Let's Create <span className="text-primary">Africa's Future</span><br />
                <span className="text-primary">Together</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Whether you're looking to partner on transformative projects, explore investment opportunities, or join the movement for youth empowerment across Africa.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={100 + (index * 100)}>
                <div className="text-center bg-white rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={400}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="flex items-center space-x-4 p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Explore My Ventures
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Partner with Me
                <Users className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
