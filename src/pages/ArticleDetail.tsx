import React from 'react';
import { useParams } from 'react-router-dom';

const articles = {
  "entrepreneurial-drive-nigeria-vanguard": {
    title: "Entrepreneurial Drive in Nigeria - Vanguard",
    content: `
      Vanguard spotlights Onyeolu Israel Chima's growing reputation as one of Nigeria's emerging business leaders, examining his strategic approach to entrepreneurship, leadership, and youth empowerment across industries.
      (You can insert full content here, or summarized excerpt.)
    `,
    source: "https://www.vanguardngr.com/2025/03/why-chima-israel-onyeolus-entrepreneurial-trait-is-gaining-recognition/amp/"
  },
  "chima-israel-on-rise-nation": {
    title: "The name Chima Israel Onyeolu is on the rise - The Nation",
    content: `
      The Nation profiles his expanding ventures in real estate, agriculture, technology, and consistent focus on job creation, youth leadership, and long-term institutional building.
    `,
    source: "https://thenationonlineng.net/chima-onyeolu-on-the-rise/amp/"
  },
  "ecowas-ambassadorial-honour-sun": {
    title: "ECOWAS Ambassadorial Honour - The Sun",
    content: `
      The Sun reports on his ECOWAS Youth Council Ambassadorial appointment, highlighting his commitment to youth leadership, entrepreneurship advocacy, and regional development impact.
    `,
    source: "https://thesun.ng/onyeolu-israel-chima-ceo-of-sinocle-nigeria-limited-gets-wayc-ambassadorial-honour/"
  }
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <p>This article does not exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <h1 className="text-[24px] font-bold text-[#111111] leading-snug mb-4">{article.title}</h1>
        <p className="text-[16px] text-[#333333] leading-relaxed whitespace-pre-line">{article.content}</p>

        <div className="mt-6 text-sm text-primary">
          <a href={article.source} target="_blank" rel="noopener noreferrer">
            View Original Source ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
