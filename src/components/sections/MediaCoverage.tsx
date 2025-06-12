
import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const MediaCoverage = () => {
  const mediaLogos = [
    { name: "VANGUARD", subtitle: "Business Excellence" },
    { name: "THE SUN", subtitle: "Youth Leadership" },
    { name: "THE NATION", subtitle: "Entrepreneurship" },
    { name: "LATEST NEWS", subtitle: "Innovation Award" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary rounded-full mb-8">
              <Star className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Media Recognition</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Across Leading <span className="text-primary">African Media</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recognized by major publications for entrepreneurial excellence and youth advocacy across West Africa
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mediaLogos.map((media, index) => (
            <ScrollReveal key={media.name} delay={100 + (index * 100)}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {media.name}
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-3"></div>
                  <p className="text-sm text-muted-foreground font-medium">{media.subtitle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="bg-gradient-to-br from-white to-muted/30 rounded-3xl p-8 lg:p-12 shadow-lg border">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-medium italic leading-relaxed mb-8 text-foreground">
                "Success in business is not just about profit—it's about creating sustainable solutions that empower communities and build a prosperous future for Africa's next generation."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-px bg-primary"></div>
                <div className="text-primary font-bold text-lg">African Business Magazine</div>
                <div className="w-12 h-px bg-primary"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MediaCoverage;
