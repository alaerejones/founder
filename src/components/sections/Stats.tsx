import React, { useState, useEffect, useRef } from 'react';
import { Award, Building, Users, Home } from 'lucide-react';

const Stats = () => {
  const [counts, setCounts] = useState({ projects: 0, sectors: 0, lives: 0, awards: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = { projects: 150, sectors: 4, lives: 10000, awards: 15 };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
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
        setCounts(prev => ({ ...prev, [key]: Math.floor(currentCount) }));
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <Stat icon={<Home />} count={counts.projects} label="Projects Delivered"/>
        <Stat icon={<Building />} count={counts.sectors} label="Major Sectors"/>
        <Stat icon={<Users />} count={counts.lives.toLocaleString()} label="Lives Impacted"/>
        <Stat icon={<Award />} count={counts.awards} label="Awards Received"/>
      </div>
    </div>
  );
};

const Stat = ({ icon, count, label }: any) => (
  <div className="space-y-3">
    <div className="w-14 h-14 mx-auto bg-primary/10 flex items-center justify-center rounded-full">{icon}</div>
    <div className="text-3xl font-bold text-foreground">{count}+</div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default Stats;
