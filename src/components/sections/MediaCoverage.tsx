import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link for internal routing

const MediaCoverage = () => {
  const mediaArticles = [
    {
      title: "Entrepreneurial Drive in Nigeria - Vanguard",
      summary: "Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders, examining his strategic entrepreneurship and youth empowerment.",
      slug: "entrepreneurial-drive-nigeria-vanguard",  // ✅ Use slug for internal routes
      image: "/assets/vanguard.jpg",
    },
    {
      title: "The name Chima Israel Onyeolu is on the rise - The Nation",
      summary: "The Nation profiles his expanding ventures in real estate, agriculture, technology, and job creation as key pillars for Africa's next generation.",
      slug: "chima-israel-on-rise-nation",
      image: "/assets/attach5.jpg",
    },
    {
      title: "ECOWAS Ambassadorial Honour - The Sun",
      summary: "The Sun reports on his ECOWAS Youth Council Ambassadorial recognition, entrepreneurship advocacy, and regional development initiatives driving socio-economic change.",
      slug: "ecowas-ambassadorial-honour-sun",
      image: "/assets/ecowas.png",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    observer.observe(document.getElementById('media')!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: '-ehcCk1PP74',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
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

  return (
    <section id="media" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <div className="text-center space-y-3 mb-8">
          <h2 className="text-[24px] font-bold text-[#111111] leading-snug">
            Featured <span className="text-primary">Media & Insights</span>
          </h2>
          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
            Highlights from select press interviews, editorial features, and public recognitions across leading publications.
          </p>
        </div>

        <div className="relative mb-6">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
          </div>
          <button
            onClick={toggleMute}
            className={`absolute top-4 right-4 p-3 rounded-full shadow-md bg-white`}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
          </button>
          <p className="mt-2 text-sm text-[#777777] text-center">
            Featured at Nigerian SME Awards on leadership, real estate and national development.
          </p>
        </div>

        <div className="space-y-10">
          {mediaArticles.map((article, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } items-center gap-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
              </div>
              <div className="w-full lg:w-1/2 space-y-3 text-left">
                <h3 className="text-[18px] font-bold text-[#111111]">{article.title}</h3>
                <p className="text-[16px] text-[#333333] leading-relaxed">{article.summary}</p>
                <Link to={`/media/${article.slug}`} className="text-primary font-semibold inline-flex items-center gap-2">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaCoverage;
