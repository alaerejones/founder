
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Lightbulb, Leaf, Zap } from 'lucide-react';

const Ventures = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[2px] text-primary uppercase mb-4">
            BUILDING AFRICA'S FUTURE
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Entrepreneurial Ventures</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Through strategic business ventures across multiple sectors, I'm creating sustainable solutions that drive economic growth and empower communities across Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="w-full h-48 mx-auto mb-4 rounded-lg overflow-hidden">
              <img 
                src="/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png" 
                alt="Sinocle Nigeria Limited Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Nigeria Limited</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Premier real estate development and construction solutions across Nigeria</p>
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Real Estate</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="w-full h-48 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Leaf className="w-20 h-20" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Agrosolutions</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Innovative agricultural technology and sustainable farming solutions</p>
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Agriculture</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="w-full h-48 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Zap className="w-20 h-20" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-center">Sinocle Energy Solutions</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Renewable energy infrastructure for sustainable development</p>
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Coming Soon</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="w-full h-48 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Lightbulb className="w-20 h-20" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-center">iLunar Technologies</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Cutting-edge technology solutions and digital innovation</p>
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Co-founder</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/ventures">
            <Button size="lg" className="text-white bg-primary hover:bg-primary/90">
              Explore All Ventures
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
