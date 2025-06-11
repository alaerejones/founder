
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Let's Build Africa Together
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner on transformative projects, explore investment opportunities, or join the movement for youth empowerment across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ventures">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8">
                Explore My Ventures
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-8">
                Partner with Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
