
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Award, Star, Trophy, Medal, ArrowRight } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "ECOWAS Youth Ambassador",
      organization: "West Africa Leadership",
      year: "2024",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Medal,
      title: "Humanitarian Award",
      organization: "Lions Club International",
      year: "2023",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "Leadership Excellence",
      organization: "Southern Youth Assembly",
      year: "2023",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Star,
      title: "Golden Role Model",
      organization: "Youth Advocacy Initiative",
      year: "2022",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2303372b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg mb-6 border">
            <Trophy className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Honored for leadership excellence and meaningful contributions to youth empowerment and community development across Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <div key={award.title} className="group relative">
              <div className={`${award.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <award.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-md border">
                    <span className="text-xs font-bold text-primary">{award.year}</span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {award.organization}
                    </p>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${award.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/awards">
            <Button variant="outline" size="lg" className="group border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Awards
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Awards;
