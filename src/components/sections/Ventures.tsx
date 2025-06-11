
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Lightbulb, Leaf, Zap, ArrowUpRight, Building2 } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      icon: Building2,
      title: "Sinocle Nigeria Limited",
      description: "Premier real estate development and construction solutions transforming Nigeria's landscape",
      image: "/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png",
      tag: "Real Estate",
      tagColor: "bg-primary/10 text-primary"
    },
    {
      icon: Leaf,
      title: "Sinocle Agrosolutions",
      description: "Revolutionary agricultural technology and sustainable farming solutions for Africa",
      image: null,
      tag: "Agriculture",
      tagColor: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "Sinocle Energy Solutions",
      description: "Next-generation renewable energy infrastructure for sustainable African development",
      image: null,
      tag: "Coming Soon",
      tagColor: "bg-primary/10 text-primary"
    },
    {
      icon: Lightbulb,
      title: "iLunar Technologies",
      description: "Cutting-edge technology solutions driving digital transformation across industries",
      image: null,
      tag: "Co-founder",
      tagColor: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entrepreneurial <span className="text-primary">Ventures</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building Africa's future through strategic business ventures across multiple sectors, creating sustainable solutions that drive economic growth and empower communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ventures.map((venture, index) => (
            <div key={venture.title}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border">
                {/* Image or Icon Header */}
                <div className="relative h-64 overflow-hidden">
                  {venture.image ? (
                    <img 
                      src={venture.image} 
                      alt={venture.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary flex items-center justify-center">
                      <venture.icon className="w-20 h-20 text-white" />
                    </div>
                  )}
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${venture.tagColor}`}>
                      {venture.tag}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {venture.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/ventures">
            <Button size="lg" className="text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-2xl">
              Explore All Ventures
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
