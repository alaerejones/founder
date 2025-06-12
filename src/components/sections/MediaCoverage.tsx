
import React from 'react';
import { Star, Quote } from 'lucide-react';

const MediaCoverage = () => {
  const mediaLogos = [
    { name: "VANGUARD", color: "text-primary" },
    { name: "THE SUN", color: "text-primary" },
    { name: "THE NATION", color: "text-primary" },
    { name: "LATEST NEWS", color: "text-primary" },
  ];

  return (
    <section className="py-0 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Media Recognition</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Featured Across Leading <span className="text-primary">African Media</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Recognized by major publications for entrepreneurial excellence and youth advocacy across West Africa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mediaLogos.map((media, index) => (
            <div key={media.name}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${media.color} mb-2`}>
                    {media.name}
                  </div>
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6 text-white" />
            </div>
            
            <blockquote className="text-lg lg:text-xl font-normal italic leading-relaxed mb-6 text-foreground">
              "Success in business is not just about profit—it's about creating sustainable solutions that empower communities and build a prosperous future for Africa's next generation."
            </blockquote>
            <div className="text-primary font-semibold">— African Business Magazine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
