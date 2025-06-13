import React from 'react';

const Awards = () => {
  const awards = [
    "ECOWAS Youth Ambassador",
    "Golden Role Model Award",
    "Lions Club Humanitarian Award",
    "Leadership Award",
  ];

  return (
    <section id="awards" className="bg-[#F9F9F9] py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">

        <div className="mb-12 space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            Selected <span className="text-primary">Recognitions</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed">
            Highlights from various national, regional, and international honors awarded for leadership, business impact, and youth empowerment.
          </p>
        </div>

        <div className="space-y-6">
          {awards.map((title, index) => (
            <div key={index} className="text-[16px] font-medium text-[#111111]">
              {title}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
