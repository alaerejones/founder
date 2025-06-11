
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Star } from 'lucide-react';

const Awards = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[2px] text-primary uppercase mb-4">
            RECOGNIZED FOR IMPACT
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Recognition & Awards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">ECOWAS Youth Ambassador</h3>
            <p className="text-sm text-muted-foreground">West Africa Leadership</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Humanitarian Award</h3>
            <p className="text-sm text-muted-foreground">Lions Club International</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Leadership Excellence</h3>
            <p className="text-sm text-muted-foreground">Southern Youth Assembly</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Golden Role Model</h3>
            <p className="text-sm text-muted-foreground">Youth Advocacy Initiative</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/awards">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Awards
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Awards;
