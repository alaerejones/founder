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
    <section id="media" className="py-8 lg:py-10" style={{ backgroundColor: '#F8F9F833' }}>
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

        {/* Articles - Alternating on Desktop */}
        <div className="space-y-20">
          {mediaArticles.map((article, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
                <img src={article.image} alt={article.title} className="w-full h-full object-contain bg-white p-4" />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-foreground">{article.title}</h3>
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
