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
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 50;
    const stepTime = duration / steps;

    const counters = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalValue) {
          currentCount = finalValue;
          clearInterval(counters.find(c => c === counters[Object.keys(finalCounts).indexOf(key)]));
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(currentCount) }));
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section className="bg-[#F9F9F9] py-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <div className="mb-10 text-center space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            My Impact in <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
           Reflecting my work in building businesses, infrastructure, and industries that create jobs and drive economic growth across Nigeria and Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat icon={<Home className="w-6 h-6 text-primary" />} count={counts.projects} label="Projects Delivered through Sinocle" />
          <Stat icon={<Building className="w-6 h-6 text-primary" />} count={counts.sectors} label="Major Sectors" />
          <Stat icon={<Users className="w-6 h-6 text-primary" />} count={counts.lives.toLocaleString()} label="Lives Impacted" />
          <Stat icon={<Award className="w-6 h-6 text-primary" />} count={counts.awards} label="Awards Received" />
        </div>

      </div>
    </section>
  );
};

const Stat = ({ icon, count, label }: any) => (
  <div className="space-y-3">
    <div className="w-12 h-12 mx-auto bg-primary/10 flex items-center justify-center rounded-full">{icon}</div>
    <div className="text-[24px] font-bold text-[#111111]">{count}+</div>
    <p className="text-sm text-[#777777]">{label}</p>
  </div>
);

export default Stats;
