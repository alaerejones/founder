import React from 'react';
import { Star } from 'lucide-react';

const MediaCoverage = () => {
  const mediaArticles = [
    {
      source: "Vanguard",
      title: "Entrepreneurial Drive in Nigeria",
      summary: "Exploring Onyeolu Chima’s innovative approach to entrepreneurship and youth empowerment.",
      link: "https://example.com/vanguard-article",
      image: "/assets/vanguard.jpg",
    },
    {
      source: "The Sun",
      title: "Leadership Impact",
      summary: "Recognizing the growing influence and leadership of Onyeolu Israel Chima across Africa.",
      link: "https://example.com/sun-article",
      image: "/assets/thesun.jpg",
    },
    {
      source: "The Nation",
      title: "Building Future Solutions",
      summary: "Highlights of transformative ventures led by Onyeolu Chima driving sustainable growth.",
      link: "https://example.com/nation-article",
      image: "/assets/thenation.jpg",
    },
    {
      source: "Latest News",
      title: "Youth Empowerment Leadership",
      summary: "Honoring exceptional youth development efforts and capacity-building projects.",
      link: "https://example.com/latestnews-article",
      image: "/assets/latestnews.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Media & Insights</span>
          </div>

          <h2 className="text-[24px] md:text-[24px] font-bold text-[#111111] mb-4">
            Featured Media Highlights
          </h2>

          <p className="text-[16px] text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Below are a few featured media highlights showcasing my entrepreneurial work, leadership insights, and public engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {mediaArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-[16px] font-semibold text-[#111111] mb-2">{article.source}</h3>
                <p className="text-[14px] text-[#333333] mb-4">{article.summary}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-[#03372B] font-semibold">
                  Read Full Article
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
