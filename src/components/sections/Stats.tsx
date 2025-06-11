
import React from 'react';
import { Award, Building, Users, Home } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-8 lg:py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
              <Home className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">150+</div>
            <p className="text-sm text-muted-foreground">Real estate development Projects delivered through sinocle across west africa</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
              <Building className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">4</div>
            <p className="text-sm text-muted-foreground">Major Sectors of operation</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">10,000+</div>
            <p className="text-sm text-muted-foreground">Lives Impacted</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3" style={{ backgroundColor: 'rgba(3, 55, 43, 0.1)' }}>
              <Award className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">15+</div>
            <p className="text-sm text-muted-foreground">Awards Received</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
