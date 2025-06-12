import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Building2, ArrowUpRight, Quote } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      title: "Sinocle Nigeria Limited",
      description: "Sinocle Nigeria Limited is a full-service construction and real estate development company delivering high-end residential, commercial, and government infrastructure projects across Nigeria. From architectural design to project execution, Sinocle delivers turnkey development solutions—blending modern engineering, quality craftsmanship, and client-focused service.",
      image: "/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png"
    },
    {
      title: "Sinocle AgroSolutions",
      description: "Sinocle AgroSolutions is advancing Africa's food security through modern poultry farming, crop cultivation, and integrated agribusiness solutions. Its operations span from broiler production, frozen chicken packaging, table eggs, to staple crop farming—empowering youth, growing communities, and driving sustainable agriculture across Nigeria.",
      image: "/lovable-uploads/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png"
    },
    {
      title: "Sinocle Energy Solutions",
      description: "Sinocle Energy Solutions is positioned to deliver energy infrastructure, scalable power generation, and clean energy solutions across Nigeria's growing industries. Its upcoming projects will target industrial energy accessibility and regional power development.",
      image: "/lovable-uploads/f218aff5-6866-45a9-b57a-89bda6dda12d.png",
      status: "Launching Soon"
    },
    {
      title: "iLuna Technologies",
      description: "iLuna Technologies develops software-driven solutions across multiple sectors. Its upcoming technology platforms are designed to power business automation, digital transformation, and enterprise innovation for modern African businesses.",
      image: "/lovable-uploads/567f24d0-a065-43b2-96ba-7ceb22ee3239.png",
      status: "Launching Soon"
    }
  ];

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio Overview</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
            Ventures & <span className="text-primary">Leadership</span>
          </h2>
          
          <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Through Sinocle Group and its expanding subsidiaries, Amb. Onyeolu Israel Chima drives business ventures that contribute to Nigeria's infrastructure, agriculture, technology, and energy sectors—building solutions that empower people, grow communities, and shape Africa's economic future.
          </p>
        </div>
        
        {/* Ventures List */}
        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-20">
          {ventures.map((venture, index) => (
            <div key={venture.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={venture.image} 
                    alt={venture.title}
                    className="w-full h-full object-cover"
                  />
                  {venture.status && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-primary">{venture.status}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                  {venture.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {venture.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Leadership Quote Section */}
        <div className="relative bg-white rounded-2xl shadow-lg border border-border/30 overflow-hidden mb-12 lg:mb-16">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>
          
          {/* Content */}
          <div className="relative px-8 py-12 lg:px-16 lg:py-16">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Quote Text */}
            <div className="text-center max-w-4xl mx-auto">
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-foreground italic">
                "Success in business is not just about profit—it's about creating sustainable solutions that empower communities and build a prosperous future for Africa's next generation."
              </blockquote>
              
              {/* Attribution */}
              <div className="space-y-3">
                <div className="w-20 h-px bg-primary mx-auto mb-6"></div>
                <p className="text-primary font-bold text-lg tracking-wider">
                  AMB. ONYEOLU ISRAEL CHIMA
                </p>
                <p className="text-muted-foreground font-medium">
                  CEO, Sinocle Nigeria Limited & ECOWAS Youth Ambassador
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 lg:p-8 mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">4</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Active Ventures</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">150+</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">10K+</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Lives Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">3</div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">Countries</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link to="/ventures">
            <Button size="lg" className="group text-primary-foreground bg-primary hover:bg-primary/90 px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Explore All Ventures
              <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ventures;
