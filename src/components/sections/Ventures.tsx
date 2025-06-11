import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Lightbulb, Leaf, Zap, ArrowUpRight, Building2, ExternalLink } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      icon: Building2,
      title: "Sinocle Nigeria Limited",
      description: "Premier real estate development and construction solutions transforming Nigeria's urban landscape with innovative residential and commercial projects",
      image: "/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png",
      tag: "Real Estate",
      tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      status: "active",
      projects: "150+ Projects"
    },
    {
      icon: Lightbulb,
      title: "iLunar Technologies",
      description: "Cutting-edge technology solutions driving digital transformation across industries with AI-powered platforms and custom software development",
      image: "/lovable-uploads/567f24d0-a065-43b2-96ba-7ceb22ee3239.png",
      tag: "IT",
      tagColor: "bg-blue-100 text-blue-700 border-blue-200",
      status: "active",
      projects: "2 Software Solutions"
    },
    {
      icon: Leaf,
      title: "Sinocle Agrosolutions",
      description: "Revolutionary agricultural technology and sustainable farming solutions empowering African farmers with modern techniques",
      image: "/lovable-uploads/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png",
      tag: "Agriculture",
      tagColor: "bg-green-100 text-green-700 border-green-200",
      status: "expanding",
      projects: "Research Phase"
    },
    {
      icon: Zap,
      title: "Sinocle Energy Solutions",
      description: "Comprehensive energy infrastructure for sustainable African development, spanning renewable energy, oil and gas, and clean energy projects",
      image: "/lovable-uploads/f218aff5-6866-45a9-b57a-89bda6dda12d.png",
      tag: "Oil and Gas",
      tagColor: "bg-amber-100 text-amber-700 border-amber-200",
      status: "launching",
      projects: "Q2 2026"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header - Matching About section left-aligned structure */}
        <div className="mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 lg:mb-8 border border-primary/20 bg-muted">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Portfolio Overview</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            Building Africa's Future,<br />
            <span className="text-primary">One Project at a Time</span>
          </h2>
          
          <p className="text-base lg:text-lg text-muted-foreground max-w-4xl leading-relaxed text-justify">
            Building Africa's future through strategic business ventures across multiple sectors, creating sustainable solutions that drive economic growth, empower communities, and foster innovation throughout West Africa.
          </p>
        </div>
        
        {/* Ventures Grid - Improved spacing and alignment */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {ventures.map((venture, index) => (
            <div key={venture.title} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-border/50 transition-all duration-500 hover:-translate-y-2">
                {/* Image or Icon Header */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  {venture.image ? (
                    <img 
                      src={venture.image} 
                      alt={venture.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <venture.icon className="w-20 h-20 lg:w-24 lg:h-24 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex gap-2">
                    <span className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold border backdrop-blur-sm ${venture.tagColor}`}>
                      {venture.tag}
                    </span>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6">
                    <div className={`w-3 h-3 rounded-full ${
                      venture.status === 'active' ? 'bg-green-400' :
                      venture.status === 'expanding' ? 'bg-amber-400' :
                      venture.status === 'launching' ? 'bg-orange-400' :
                      'bg-blue-400'
                    } shadow-lg`}></div>
                  </div>
                </div>
                
                {/* Content - Matching typography from About section */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {venture.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                    {venture.description}
                  </p>

                  {/* Project count - Improved alignment */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs lg:text-sm font-semibold text-primary bg-primary/10 px-2.5 lg:px-3 py-1 rounded-full">
                      {venture.projects}
                    </span>
                    <div className="flex items-center text-xs lg:text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        venture.status === 'active' ? 'bg-green-400' :
                        venture.status === 'expanding' ? 'bg-amber-400' :
                        venture.status === 'launching' ? 'bg-orange-400' :
                        'bg-blue-400'
                      }`}></div>
                      <span className="capitalize">
                        {venture.status === 'active' ? 'Active' :
                         venture.status === 'expanding' ? 'Expanding' :
                         venture.status === 'launching' ? 'Launching Soon' :
                         'Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar - Improved typography and spacing */}
        <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-6 lg:p-8 mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">4</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Active Ventures</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">150+</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">10K+</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Lives Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">3</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Countries</p>
            </div>
          </div>
        </div>
        
        {/* CTA - Matching button styles from About section */}
        <div className="text-center">
          <Link to="/ventures">
            <Button size="lg" className="group text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Explore All Ventures
              <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
