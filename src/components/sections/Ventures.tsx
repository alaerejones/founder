
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
      tagColor: "bg-blue-100 text-blue-700",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Sinocle Agrosolutions",
      description: "Revolutionary agricultural technology and sustainable farming solutions for Africa",
      image: null,
      tag: "Agriculture",
      tagColor: "bg-green-100 text-green-700",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Sinocle Energy Solutions",
      description: "Next-generation renewable energy infrastructure for sustainable African development",
      image: null,
      tag: "Coming Soon",
      tagColor: "bg-yellow-100 text-yellow-700",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Lightbulb,
      title: "iLunar Technologies",
      description: "Cutting-edge technology solutions driving digital transformation across industries",
      image: null,
      tag: "Co-founder",
      tagColor: "bg-purple-100 text-purple-700",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
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
            <div key={venture.title} className="group relative">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Image or Icon Header */}
                <div className="relative h-64 overflow-hidden">
                  {venture.image ? (
                    <img 
                      src={venture.image} 
                      alt={venture.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${venture.gradient} flex items-center justify-center relative`}>
                      <venture.icon className="w-20 h-20 text-white/90" />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  )}
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${venture.tagColor} backdrop-blur-sm`}>
                      {venture.tag}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {venture.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/ventures">
            <Button size="lg" className="group text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Ventures
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
