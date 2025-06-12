
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Star, Trophy, Medal, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "ECOWAS Youth Ambassador",
      organization: "West Africa Leadership",
      year: "2024"
    },
    {
      icon: Medal,
      title: "Humanitarian Award",
      organization: "Lions Club International",
      year: "2023"
    },
    {
      icon: Award,
      title: "Leadership Excellence",
      organization: "Southern Youth Assembly",
      year: "2023"
    },
    {
      icon: Star,
      title: "Golden Role Model",
      organization: "Youth Advocacy Initiative",
      year: "2022"
    }
  ];

  return (
    <div className="bg-muted/30 py-0">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border">
              <Trophy className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <ScrollReveal key={award.title} delay={100 + (index * 100)}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border relative">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                  <award.icon className="w-8 h-8" />
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border">
                  <span className="text-xs font-bold text-primary">{award.year}</span>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-foreground mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {award.organization}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={500}>
          <div className="text-center">
            <Link to="/awards">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                View All Awards
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Awards;
