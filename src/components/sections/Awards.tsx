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
    <section id="awards" className="pt-8 pb-8 lg:pt-10 lg:pb-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Trophy className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Awards & Recognition
            </span>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
            Awards & <span className="text-primary">Recognition</span>
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Selected recognitions acknowledging business leadership, advocacy and impact.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative">

              <div className="w-24 h-24 mb-6 rounded-full bg-muted/20 flex items-center justify-center overflow-hidden">
                <img src={award.image} alt={award.title} className="object-contain w-20 h-20" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{award.organization}</p>

              <div className="absolute top-4 right-4 bg-white border border-primary px-3 py-1 rounded-full text-xs font-bold text-primary shadow">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
