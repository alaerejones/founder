import React from 'react';
import { Trophy } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const Awards = () => {
  const awards = [
    { title: "ECOWAS Youth Ambassador", image: "/assets/ecowas.png" },
    { title: "Golden Role Model Award", image: "/assets/golden-role.png" },
    { title: "Lions Club Humanitarian Award", image: "/assets/lionsclub.png" },
    { title: "Leadership Award", image: "/assets/syan.png" },
  ];

  return (
    <section id="awards" className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <Trophy className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Awards & Recognition</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">My Recognitions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of awards received for business leadership, youth development, and economic impact across West Africa.
          </p>
        </div>

        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-12">
              <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden bg-muted flex items-center justify-center shadow-md">
                <img src={award.image} alt={award.title} className="object-contain w-full h-full" />
              </div>
              <p className="text-sm text-foreground font-semibold text-center">{award.title}</p>
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default Awards;
