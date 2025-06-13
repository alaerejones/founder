import React, { useEffect, useRef, useState } from 'react';
import { Star, Volume2, VolumeX, ArrowRight } from 'lucide-react';

const MediaCoverage = () => {
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '-ehcCk1PP74',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
      });
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const mediaArticles = [
    {
      title: "Entrepreneurial Drive in Nigeria - Vanguard",
      summary: "Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders, examining how his strategic approach to entrepreneurship and youth empowerment is creating significant value across industries while addressing national developmental gaps in Africa.",
      link: "https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/",
      image: "/assets/vanguard.jpg",
    },
    {
      title: "The name Chima Israel Onyeolu is on the rise - The Nation",
      summary: "The Nation profiles Chima Onyeolu’s entrepreneurial trajectory, his expanding ventures in real estate, agriculture, technology, and his sustained focus on job creation, youth engagement, and long-term institution building as key pillars for Africa's next generation.",
      link: "https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/",
      image: "/assets/side.JPG",
    },
    {
      title: "ECOWAS Ambassadorial Honour - The Sun",
      summary: "The Sun reports on Chima Onyeolu’s ECOWAS Youth Council Ambassadorial recognition, underscoring his commitment to youth leadership, entrepreneurship advocacy, and regional development initiatives driving positive socio-economic change in Nigeria and across West Africa.",
      link: "https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/",
      image: "/assets/attach5.jpg",
    },
  ];

  return (
    <section id="media" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Media & Insights
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Featured Media Coverage</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Selected features highlighting entrepreneurial recognitions, leadership engagements, and public impact across the continent.
          </p>
        </div>

        {/* YouTube */}
        <div className="relative mb-24">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
          </div>
          <button
            onClick={toggleMute}
            className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition ${isMuted ? 'bg-white' : 'bg-[#EDEDED]'}`}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground max-w-xl mx-auto">
            Interview feature at the Nigerian SME Awards highlighting leadership, real estate development and national impact.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-32">
          {mediaArticles.map((article, index) => (
            <div key={index} className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-12 items-center`}>
              <div className="flex-1">
                <img src={article.image} alt={article.title} className="w-full rounded-xl object-cover shadow" />
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{article.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">{article.summary}</p>
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
