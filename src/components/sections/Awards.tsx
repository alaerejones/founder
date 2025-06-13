import React from 'react';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    "ECOWAS Youth Ambassador",
    "Golden Role Model Award",
    "Lions Club Humanitarian Award",
    "Leadership Award",
  ];

  return (
    <section id="awards" className="bg-[#F9F9F9] py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <div className="mb-12 text-center space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            Selected <span className="text-primary">Recognitions</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
            Selected highlights from numerous leadership honors, business recognitions, and international awards received across various industries and regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {awards.map((title, index) => (
            <div key={index} className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[16px] font-medium text-[#111111] text-left">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
