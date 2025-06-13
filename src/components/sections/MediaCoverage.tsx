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
        playerVars: { autoplay: 1, mute: 1, controls: 1, modestbranding: 1, rel: 0 }
      });
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current) return;
    isMuted ? playerRef.current.unMute() : playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const mediaArticles = [
    {
      title: "Entrepreneurial Drive in Nigeria - Vanguard",
      summary: "Vanguard spotlights Onyeolu Israel Chima's business leadership and national impact journey.",
      link: "https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/",
      image: "/assets/vanguard.jpg"
    },
    {
      title: "The name Chima Israel Onyeolu is on the rise - The Nation",
      summary: "The Nation profiles his entrepreneurial ventures across real estate, agriculture, technology and youth empowerment.",
      link: "https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/",
      image: "/assets/side.JPG"
    },
    {
      title: "ECOWAS Ambassadorial Honour - The Sun",
      summary: "The Sun reports on ECOWAS Youth Ambassadorial recognition for regional development and impact.",
      link: "https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/",
      image: "/assets/attach5.jpg"
    }
  ];

  return (
    <section id="media" className="py-16" style={{ backgroundColor: '#F8F9F833' }}>
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl text-center">

        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-white mb-6">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Media & Insights</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Media Coverage</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Selected highlights showcasing recent entrepreneurial recognitions, leadership engagements, and public impact.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="w-full rounded-xl overflow-hidden shadow-lg relative aspect-video">
            <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
          </div>
          <button onClick={toggleMute} className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition ${isMuted ? 'bg-white' : 'bg-[#EDEDED]'}`}>
            {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
          </button>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            Interview feature at Nigerian SME Awards highlighting leadership, real estate, and national impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mediaArticles.map((article, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 flex flex-col">
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img src={article.image} alt={article.title} className="object-contain w-full h-full bg-white p-4" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 text-justify">{article.summary}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold mt-auto inline-flex items-center gap-2">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaCoverage;
