import React from 'react';
import images from './images.json';

const Hero = () => {
  const heroImage = images.find(img => img.id === 'hero');

  return (
    <section className="bg-slate-900 text-white flex items-center justify-center p-8 md:p-16">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">The Lifelong Protector of Your Child’s Potential.</h1>
          <p className="text-lg lg:text-xl mb-8"><strong>Meet Guardian AIngel.</strong> The privacy-first AI agent that acts as part mom, part teacher, and full-time advocate. We don’t just teach subjects; we nurture success from Kindergarten to Career.</p>
          <div className="flex justify-center md:justify-start">
            <a href="https://guardian-aingel.com/#/pcd/overview" className="bg-transparent hover:bg-slate-800 text-white font-semibold py-3 px-6 border border-white rounded">
              See How It Works
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {heroImage && <img src={heroImage.imageUrl} alt={heroImage.description} className="w-full h-auto rounded-lg shadow-2xl" />}        
        </div>
      </div>
    </section>
  );
};

export default Hero;