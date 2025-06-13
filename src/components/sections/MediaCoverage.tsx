import React from 'react';
import { Star } from 'lucide-react';

const MediaCoverage = () => {
  return (
    <section id="media" className="pt-8 pb-8 lg:pt-10 lg:pb-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Media & Insights
            </span>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
            Featured Media Coverage
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Selected features highlighting some of the recent entrepreneurial recognitions, leadership engagements, and public impact work. These represent just a few of multiple published features and coverage.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/-ehcCk1PP74?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
              title="Amb. Israel Chima Onyeolu | Leadership, Real Estate & National Impact"
              frameBorder="0"
              allow="autoplay; muted; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            Interview feature at the Nigerian SME Awards highlighting leadership, real estate development, and the national impact journey.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-16">
          {/* Vanguard */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
              <img src="/assets/vanguard.jpg" alt="Vanguard" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-foreground">
                Entrepreneurial Drive in Nigeria - Vanguard
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders, examining how his strategic approach to entrepreneurship and youth empowerment is creating significant value across industries, while addressing national developmental gaps.
              </p>
              <a href="https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </div>

          {/* The Nation */}
         <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
              <img src="/assets/side.JPG" alt="The Nation" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-foreground">
                The name Chima Israel Onyeolu is on the rise - The Nation
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                The Nation profiles Chima Onyeolu’s entrepreneurial trajectory, his expanding ventures in real estate, agriculture, technology, and his sustained focus on job creation, youth engagement, and long-term institution building as key pillars for Africa's next generation.
              </p>
              <a href="https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </div>

          {/* The Sun */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
              <img src="/assets/attach5.jpg" alt="The Sun" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-foreground">
                ECOWAS Ambassadorial Honour - The Sun
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                The Sun reports on Chima Onyeolu’s ECOWAS Youth Council Ambassadorial recognition, underscoring his commitment to youth leadership, entrepreneurship advocacy, and regional development initiatives driving positive socio-economic change in Nigeria and acroos West Africa.
              </p>
              <a href="https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
                Read Full Article
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;