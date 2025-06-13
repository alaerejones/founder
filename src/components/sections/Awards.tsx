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
    <section id="awards" className="pt-4 pb-12 lg:pt-6 lg:pb-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Trophy className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Awards & Recognition</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">My Recognitions</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Highlighting key awards and honors received for business leadership, youth development, and economic impact across West Africa.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-44 h-44 mb-6 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                <img src={award.image} alt={award.title} className="object-contain w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
              <div className="mt-3 px-5 py-1 text-sm font-bold text-primary border border-primary rounded-full">{award.year}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
