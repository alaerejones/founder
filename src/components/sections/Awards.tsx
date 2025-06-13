import React from 'react';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    { title: "ECOWAS Youth Ambassador", image: "/assets/ecowas.png" },
    { title: "Golden Role Model Award", image: "/assets/golden-role.png" },
    { title: "Lions Club Humanitarian Award", image: "/assets/lionsclub.png" },
    { title: "Leadership Award", image: "/assets/syan.png" },
  ];

  return (
    <section id="awards" className="bg-[#F9F9F9] py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <div className="mb-12 text-center space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            My <span className="text-primary">Recognitions</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
            A selection of leadership honors and awards received for business leadership, youth empowerment, and economic development across West Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                <img src={award.image} alt={award.title} className="object-contain w-20 h-20" />
              </div>
              <p className="text-[14px] font-medium text-[#111111]">{award.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
