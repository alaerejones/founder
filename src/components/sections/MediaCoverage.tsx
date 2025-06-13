import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const MediaCoverage = () => {
  const mediaArticles = [
    {
      title: "Entrepreneurial Drive in Nigeria - Vanguard",
      summary: "Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders, examining his strategic entrepreneurship and youth empowerment.",
      link: "https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/",
      image: "/assets/vanguard.jpg",
    },
    {
      title: "The name Chima Israel Onyeolu is on the rise - The Nation",
      summary: "The Nation profiles his expanding ventures in real estate, agriculture, technology, and job creation as key pillars for Africa's next generation.",
      link: "https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/",
      image: "/assets/side.JPG",
    },
    {
      title: "ECOWAS Ambassadorial Honour - The Sun",
      summary: "The Sun reports on his ECOWAS Youth Council Ambassadorial recognition, entrepreneurship advocacy, and regional development initiatives driving socio-economic change.",
      link: "https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/",
      image: "/assets/attach5.jpg",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    observer.observe(document.getElementById('media')!);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="media" className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Section Heading */}
        <div className="mb-6 text-center space-y-5">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            Featured <span className="text-primary">Media & Insights</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
            Highlights from select press interviews, editorial features, and public recognitions across leading publications.
          </p>
        </div>

        {/* Video */}
        <div className="relative mb-6">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-sm text-[#777777] text-center">
            Featured at Nigerian SME Awards on leadership, real estate and national development.
          </p>
        </div>

        {/* Media Articles */}
        <div className="space-y-10">
          {mediaArticles.map((article, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } items-center gap-12 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
              </div>
              <div className="w-full lg:w-1/2 space-y-5 text-left">
                <h3 className="text-[18px] font-bold text-[#111111]">{article.title}</h3>
                <p className="text-[16px] text-[#333333] leading-relaxed">{article.summary}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center gap-2">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaCoverage;
