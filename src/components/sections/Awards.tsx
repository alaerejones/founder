
import React from 'react';
import { Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Awards = () => {
  const awards = [
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center",
      title: "ECOWAS Youth Ambassador",
      organization: "West Africa Leadership Council",
      year: "2024",
      description: "Regional leadership excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center",
      title: "Humanitarian Award",
      organization: "Lions Club International",
      year: "2023",
      description: "Community development impact"
    },
    {
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop&crop=center",
      title: "Leadership Excellence",
      organization: "Southern Youth Assembly",
      year: "2023",
      description: "Outstanding youth advocacy"
    },
    {
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop&crop=center",
      title: "Golden Role Model",
      organization: "Youth Advocacy Initiative",
      year: "2022",
      description: "Inspirational leadership"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary rounded-full mb-8">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Recognition</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <ScrollReveal key={award.title} delay={100 + (index * 100)}>
              <div className="bg-gradient-to-br from-white to-muted/30 rounded-3xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white rounded-full px-3 py-1 shadow-md border">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-primary">{award.year}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2 leading-tight text-lg">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3">
                    {award.organization}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    {award.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
