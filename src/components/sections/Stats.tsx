import React, { useState, useEffect, useRef } from 'react';
import { Award, Building, Users, Home } from 'lucide-react';

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    sectors: 0,
    lives: 0,
    awards: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = {
    projects: 150,
    sectors: 4,
    lives: 10000,
    awards: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    const counters = Object.keys(finalCounts).map(key => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;

        if (currentCount >= finalValue) {
          currentCount = finalValue;
          clearInterval(counters.find(c => c === counters[Object.keys(finalCounts).indexOf(key)]));
        }

        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }));
      }, stepTime);
    });

    return () => {
      counters.forEach(counter => clearInterval(counter));
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3"
              style={{
                backgroundColor: 'rgba(3, 55, 43, 0.1)'
              }}
            >
              <Home className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">
              {counts.projects}+
            </div>
            <p className="text-sm text-muted-foreground">Real estate development Projects delivered through sinocle across west africa</p>
          </div>

          <div className="space-y-2">
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3"
              style={{
                backgroundColor: 'rgba(3, 55, 43, 0.1)'
              }}
            >
              <Building className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">{counts.sectors}</div>
            <p className="text-sm text-muted-foreground">Major Sectors of operation</p>
          </div>

          <div className="space-y-2">
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3"
              style={{
                backgroundColor: 'rgba(3, 55, 43, 0.1)'
              }}
            >
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">
              {counts.lives.toLocaleString()}+
            </div>
            <p className="text-sm text-muted-foreground">Lives Impacted</p>
          </div>

          <div className="space-y-2">
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-3"
              style={{
                backgroundColor: 'rgba(3, 55, 43, 0.1)'
              }}
            >
              <Award className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-foreground">{counts.awards}+</div>
            <p className="text-sm text-muted-foreground">Awards Received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
