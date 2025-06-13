import React from 'react';
import { Trophy } from 'lucide-react';
import Marquee from "react-fast-marquee";

const Awards = () => {
  const awards = [
    { title: "ECOWAS Youth Ambassador", image: "/assets/ecowas.png" },
    { title: "Golden Role Model Award", image: "/assets/golden-role.png" },
    { title: "Lions Club Humanitarian", image: "/assets/lionsclub.png" },
    { title: "Leadership Award", image: "/assets/syan.png" }
  ];

  return (
    <section id="awards" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
          <Trophy className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Awards & Recognition
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Honors & Distinctions</h2>
        <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Select honors received in recognition of leadership, youth empowerment, humanitarian contributions, and business impact across Africa.
        </p>
      </div>

      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {awards.map((award, index) => (
          <div key={index} className="mx-12 flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <img src={award.image} alt={award.title} className="object-contain w-full h-full" />
            </div>
            <p className="text-sm text-foreground font-semibold">{award.title}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Awards;
