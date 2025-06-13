import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const MediaCoverage = () => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Media & Insights</span>
          </div>

          <h2 className="text-xl lg:text-3xl font-bold text-foreground mb-6">
            Featured Media & Appearances
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A glimpse into my leadership journey, entrepreneurial impact and public engagements captured across major media outlets.
          </p>
        </div>

        {/* Full-width autoplay video */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&loop=1&playlist=-ehcCk1PP74"
              title="Leadership Nomination Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed mb-14">
          This nomination feature captures my leadership in youth empowerment, real estate development, and national capacity-building efforts through various ventures across Africa.
        </p>

        {/* Media Articles */}
        <div className="space-y-10">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Vanguard</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Exploring Onyeolu Chima’s innovative approach to entrepreneurship and youth empowerment.
              </p>
              <a href="https://example.com/vanguard-article" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">The Sun</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Recognizing the growing influence and leadership of Onyeolu Israel Chima across Africa.
              </p>
              <a href="https://example.com/sun-article" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">The Nation</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Highlights of transformative ventures led by Onyeolu Chima driving sustainable growth.
              </p>
              <a href="https://example.com/nation-article" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Latest News</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Honoring exceptional youth development efforts and capacity-building projects.
              </p>
              <a href="https://example.com/latestnews-article" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
