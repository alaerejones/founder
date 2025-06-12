
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const VenturesOverview = () => {
  return (
    <section id="ventures" className="pt-8 pb-12 lg:pt-1 lg:pb-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border border-primary/20 bg-white">
            <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio Overview</span>
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
            Ventures & <span className="text-primary">Leadership</span>
          </h2>
          
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
            Each venture reflects my commitment to solving real challenges, building enduring institutions, and contributing to Africa's economic future across multiple industries.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Sinocle Nigeria Limited */}
          <ScrollReveal delay={200}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/assets/0d300790-e67a-4840-ac00-b642f49cfa66.png" 
                  alt="Sinocle Nigeria Limited"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4 leading-tight">
                  Sinocle Nigeria Limited
                </h3>
                <div className="max-w-md">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 text-justify hyphens-auto" style={{ textJustify: 'inter-word' }}>
                    Through Sinocle Nigeria Limited, I've established a construction and real estate development company that delivers full-scale building solutions across residential, commercial, and government sectors. From architectural design to complete property development, we provide turnkey solutions for individuals, organizations, real estate companies and public sector clients seeking durable, high-quality, and future-ready structures. Our work contributes directly to infrastructure expansion, urban growth, and modern real estate transformation across West Africa.
                  </p>
                </div>
                <a href="https://sinocle.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                  Visit Website
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Sinocle AgroSolutions */}
          <ScrollReveal delay={300}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/assets/896dd14b-eb18-4b8e-aabb-744b3c67fd22.png" 
                  alt="Sinocle AgroSolutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4 leading-tight">
                  Sinocle AgroSolutions
                </h3>
                <div className="max-w-md">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 text-justify hyphens-auto" style={{ textJustify: 'inter-word' }}>
                    With Sinocle AgroSolutions, I'm building an integrated agricultural system that addresses food security, job creation, and rural development. Our operations span poultry farming, frozen chicken processing, egg production, and staple crop cultivation. We serve both bulk buyers and retail outlets, supplying quality agricultural products that feed thousands of households, institutions, and businesses. More importantly, we are developing scalable farming models that empower young farmers, create employment, and strengthen Africa's food supply chain.
                  </p>
                </div>
                <a href="https://agrosolutions.sinocle.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                  Learn More
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Sinocle Energy Solutions */}
          <ScrollReveal delay={400}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src="/assets/f218aff5-6866-45a9-b57a-89bda6dda12d.png" 
                  alt="Sinocle Energy Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">Launching Soon</span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4 leading-tight">
                  Sinocle Energy Solutions
                </h3>
                <div className="max-w-md">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify hyphens-auto" style={{ textJustify: 'inter-word' }}>
                    Energy is at the center of Africa's industrial future. Sinocle Energy Solutions is positioned to develop power infrastructure that supports commercial, industrial, and urban expansion across Nigeria. Our upcoming projects are focused on scalable, efficient, and sustainable energy solutions that meet growing power demands while unlocking opportunities for manufacturing, commerce, and regional growth.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* iLunar Technologies */}
          <ScrollReveal delay={500}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src="/assets/567f24d0-a065-43b2-96ba-7ceb22ee3239.png" 
                  alt="iLunar Technologies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">Launching Soon</span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4 leading-tight">
                  iLunar Technologies
                </h3>
                <div className="max-w-md">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 text-justify hyphens-auto" style={{ textJustify: 'inter-word' }}>
                    Technology holds the key to accelerating growth across sectors. Through iLunar Technologies, I am building digital solutions that simplify complex business processes and enable operational excellence. Our focus is on enterprise software, business automation, and digital platforms that serve organizations across multiple industries. As our initial product lines launch, iLunar will deliver the tools businesses need to optimize workflows, improve efficiency, and scale confidently in the modern economy.
                  </p>
                </div>
                <a href="https://ilunartech.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                  Visit Website
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VenturesOverview;
