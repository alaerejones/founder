
import React from 'react';

const MediaCoverage = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[2px] text-primary uppercase mb-4">
            FEATURED IN
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Recognized Media Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover-scale">
              <div className="text-lg font-bold text-foreground mb-2">VANGUARD</div>
              <div className="text-sm text-muted-foreground">Nigeria</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover-scale">
              <div className="text-lg font-bold text-foreground mb-2">THE SUN</div>
              <div className="text-sm text-muted-foreground">Nigeria</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover-scale">
              <div className="text-lg font-bold text-foreground mb-2">THE NATION</div>
              <div className="text-sm text-muted-foreground">Nigeria</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover-scale">
              <div className="text-lg font-bold text-foreground mb-2">LATEST NEWS</div>
              <div className="text-sm text-muted-foreground">Nigeria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
