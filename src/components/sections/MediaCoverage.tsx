
import React from 'react';

const MediaCoverage = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase mb-6">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-sm font-semibold text-muted-foreground">VANGUARD</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-muted-foreground">THE SUN</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-muted-foreground">THE NATION</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-muted-foreground">LATEST NEWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
