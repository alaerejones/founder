import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import { Trophy } from 'lucide-react';

const Awards = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 639px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
  });

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
    <section id="awards" className="py-8 lg:py-12 bg-muted/20">
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
            Recognitions Along The Journey
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A few notable recognitions received across the course of work in business leadership, youth empowerment, and economic growth.
          </p>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {awards.map((award, index) => (
            <div key={index} className="keen-slider__slide bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center">
              <div className="w-28 h-28 mb-6 mx-auto bg-muted rounded-xl flex items-center justify-center">
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
