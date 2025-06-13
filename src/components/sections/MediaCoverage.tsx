import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

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
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Media & Insights</span>
          </div>

          <h2 className="text-xl lg:text-3xl font-bold text-foreground mb-6">
            Featured Media Highlights
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Below are a few featured media highlights showcasing my entrepreneurial work, leadership insights, and public engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaArticles.map((article, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{article.source}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.summary}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                    Read Full Article
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* YouTube Embed */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Watch My Award Nomination</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src="https://youtu.be/-ehcCk1PP74?si=AdBcyebFZPEQqfsM" 
              title="Award Nomination"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaCoverage;
