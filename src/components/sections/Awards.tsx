import React, { useEffect, useState } from 'react';

const Awards = () => {
  const awards = [
    "ECOWAS Youth Ambassador",
    "Golden Role Model Award",
    "Lions Club Humanitarian Award",
    "Leadership Award",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    observer.observe(document.getElementById('awards')!);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" className="bg-[#F9F9F9] py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">

        {/* Framing Statement */}
        <div className="mb-10 space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            Recognized for <span className="text-primary">Leadership & Impact</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed">
            Across national, regional and international platforms, my work has been acknowledged for driving economic development, institutional leadership and youth empowerment.
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-8">
          {awards.map((title, index) => (
            <div 
              key={index}
              className={`text-[18px] font-semibold text-[#111111] transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {title}
            </div>
          ))}
        </div>

        {/* Closing Caption */}
        <div className="mt-12 text-[14px] text-[#777777]">
          Additional honors include multiple institutional, business and humanitarian awards across West Africa.
        </div>

      </div>
    </section>
  );
};

export default Awards;
