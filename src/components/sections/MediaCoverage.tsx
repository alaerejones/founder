
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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(3, 55, 43, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(160, 246, 105, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border">
            <Star className="w-4 h-4 text-secondary mr-2" />
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
            <div key={media.name} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${media.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {media.name}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="text-center pt-6">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground italic mb-6 leading-relaxed">
              "A visionary leader who embodies the spirit of African entrepreneurship and youth empowerment"
            </blockquote>
            <div className="text-primary font-semibold">— African Business Magazine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
