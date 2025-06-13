import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "ECOWAS Youth Ambassador Recognition",
      organization: "ECOWAS Youth Council",
      year: "2024",
      icon: <Award className="w-5 h-5 text-primary" />
    },
    {
      title: "Golden Role Model Award",
      organization: "NYAGGI",
      year: "2023",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Lions Club Humanitarian Award",
      organization: "Lions Club International",
      year: "2023",
      icon: <Trophy className="w-5 h-5 text-primary" />
    },
    {
      title: "Leadership Award",
      organization: "Southern Youth Assembly of Nigeria (SYAN)",
      year: "2022",
      icon: <Award className="w-5 h-5 text-primary" />
    },
  ];

  return (
    <section id="awards" className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Trophy className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Awards & Recognition</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">Key Recognitions</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Honoring awards received for leadership, entrepreneurship, youth empowerment and national contribution.
          </p>
        </div>

        {/* Awards List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                {award.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-foreground">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
              <div className="text-primary font-bold text-xs border border-primary rounded-full px-4 py-1 mt-2">{award.year}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
