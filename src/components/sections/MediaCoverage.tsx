import React, { useEffect, useRef, useState } from 'react';
import { Star, Volume2, VolumeX } from 'lucide-react';
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
      summary: "Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders...",
      link: "https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/",
      image: "/assets/vanguard.jpg",
    },
    {
      title: "The name Chima Israel Onyeolu is on the rise - The Nation",
      summary: "The Nation profiles Chima Onyeolu’s entrepreneurial trajectory, his expanding ventures...",
      link: "https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/",
      image: "/assets/side.JPG",
    },
    {
      title: "ECOWAS Ambassadorial Honour - The Sun",
      summary: "The Sun reports on Chima Onyeolu’s ECOWAS Youth Council Ambassadorial recognition...",
      link: "https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/",
      image: "/assets/attach5.jpg",
    },
  ];

  return (
    <section id="media" className="py-8 lg:py-12 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Media & Insights
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Featured Media Coverage
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Selected features highlighting entrepreneurial recognitions, leadership engagements, and public impact.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="relative mb-16">
          <div className="w-full rounded-xl overflow-hidden shadow-lg relative aspect-video">
            <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
          </div>
          <button
            onClick={toggleMute}
            className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition ${isMuted ? 'bg-white' : 'bg-[#EDEDED]'}`}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
          </button>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            Interview feature at the Nigerian SME Awards highlighting leadership, real estate development and national impact.
          </p>
        </div>

        {/* Articles - Improved mobile + desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <img src={article.image} alt={article.title} className="w-full h-full object-contain" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-justify">{article.summary}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold mt-auto inline-flex items-center gap-2">
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
