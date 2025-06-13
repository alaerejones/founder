import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Let's Build The Future Together</h2>
        <p className="text-lg mb-10">
          Ready to explore new possibilities, partnerships, or collaborations? Get in touch and let's create value for Africa's next generation.
        </p>
        <a href="#contact" className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
