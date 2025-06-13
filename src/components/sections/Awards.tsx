import React from 'react';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "ECOWAS Youth Ambassador Recognition",
      organization: "ECOWAS Youth Council",
      year: "2024",
      image: "/assets/ecowas.png",
    },
    {
      title: "Golden Role Model Award",
      organization: "NYAGGI",
      year: "2023",
      image: "/assets/golden-role.png",
    },
    {
      title: "Lions Club Humanitarian Award",
      organization: "Lions Club International",
      year: "2023",
      image: "/assets/lionsclub.png",
    },
    {
      title: "Leadership Award",
      organization: "Southern Youth Assembly of Nigeria (SYAN)",
      year: "2022",
      image: "/assets/syan.png",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-primary/20 mb-6">
            <Trophy className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Awards & Recognition</span>
          </div>

          <h2 className="text-[24px] md:text-[24px] font-bold text-[#111111] mb-4">
            Awards & <span className="text-primary">Recognition</span>
          </h2>

          <p className="text-[16px] text-[#333333] max-w-3xl mx-auto leading-relaxed">
            These are a few among multiple awards and recognitions received for my business leadership and youth empowerment work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 relative">
              <div className="w-full h-32 mb-6">
                <img src={award.image} alt={award.title} className="w-full h-full object-contain rounded-xl" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-1">{award.title}</h3>
              <p className="text-[14px] text-[#333333] mb-2">{award.organization}</p>
              <div className="absolute top-4 right-4 bg-white border border-primary px-3 py-1 rounded-full shadow text-xs font-bold text-primary">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
