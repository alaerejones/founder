import React from 'react';
import { Building2 } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      title: "Sinocle Nigeria Limited",
      image: "/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png"
    },
    {
      title: "Sinocle AgroSolutions",
      image: "/assets/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png"
    },
    {
      title: "Sinocle Energy Solutions",
      image: "/assets/f218aff5-6866-45a9-b57a-89bda6dda12d.png"
    },
    {
      title: "iLunar Technologies",
      image: "/assets/567f24d0-a065-43b2-96ba-7ceb22ee3239.png"
    }
  ];

  return (
    <div className="bg-white py-7">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio Overview</span>
          </div>

          <h2 className="text-[24px] font-bold text-[#111111] leading-tight mb-4">
            Ventures & <span className="text-primary">Leadership</span>
          </h2>

          <p className="text-[16px] text-[#333333] max-w-4xl mx-auto leading-relaxed">
            Through Sinocle Group and its subsidiaries, Amb. Onyeolu Israel Chima drives ventures that contribute to infrastructure, agriculture, technology, and energy sectors — building solutions that empower people, grow communities, and shape Africa's future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventures.map((venture, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
              <img src={venture.image} alt={venture.title} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-[16px] font-semibold text-[#111111]">{venture.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;
import React from 'react';
import { Building2 } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      title: "Sinocle Nigeria Limited",
      image: "/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png"
    },
    {
      title: "Sinocle AgroSolutions",
      image: "/assets/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png"
    },
    {
      title: "Sinocle Energy Solutions",
      image: "/assets/f218aff5-6866-45a9-b57a-89bda6dda12d.png"
    },
    {
      title: "iLuna Technologies",
      image: "/assets/567f24d0-a065-43b2-96ba-7ceb22ee3239.png"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio Overview</span>
          </div>

          <h2 className="text-[24px] md:text-[24px] font-bold text-[#111111] leading-tight mb-4">
            Ventures & <span className="text-primary">Leadership</span>
          </h2>

          <p className="text-[16px] md:text-[16px] text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Through Sinocle Group and its subsidiaries, Amb. Onyeolu Israel Chima drives ventures that contribute to infrastructure, agriculture, technology, and energy sectors — building solutions that empower people, grow communities, and shape Africa's future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {ventures.map((venture, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-full h-40 mb-6">
                <img src={venture.image} alt={venture.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] text-center">{venture.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;
