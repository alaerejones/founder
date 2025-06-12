
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from '@/components/ScrollReveal';

const CallToAction = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@onyeoluisraelchima.com",
      href: "mailto:contact@onyeoluisraelchima.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (0) 123 456 7890",
      href: "tel:+2341234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Work <span className="text-primary">Together</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to explore partnerships, investments, or collaborative opportunities? Let's connect and build Africa's future together.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex flex-col items-center p-6 bg-muted/20 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground text-center text-sm">{contact.value}</p>
                </a>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start a Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View My Ventures
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
