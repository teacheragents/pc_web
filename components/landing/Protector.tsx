import React from 'react';
import images from './images.json';
import { Heart, Infinity, Shield } from 'lucide-react';

const Protector = () => {
  const protectorImage = images.find(img => img.id === 'protector');

  return (
    <section className="py-12 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm font-medium text-white">The Protector</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">A Shield Against Big Tech. An Advocate for Your Child.</h2>
            <p className="max-w-xl text-slate-300 md:text-lg">
              Your child’s data is precious. In a digital world hungry for information, Guardian AIngel acts as a secure, privacy-preserving layer between your student and the internet.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white">Your Child’s Interests First</h3>
                  <p className="text-slate-400">We are a fiduciary for your child’s future. We never sell data. We use it solely to build a personalized path to success.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Infinity className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                 <div>
                  <h3 className="font-semibold text-white">A Continuous Bond</h3>
                  <p className="text-slate-400">School districts change. Cities change. Teachers change. Guardian AIngel is the constant. We provide an unbroken chain of support that transcends grade bands and geographic boundaries.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                 <div>
                  <h3 className="font-semibold text-white">The Privacy Shield</h3>
                  <p className="text-slate-400">We act as an intelligent agent, filtering noise and protecting privacy while ensuring your child gets the best of the digital world without the risks.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {protectorImage && <img src={protectorImage.imageUrl} alt={protectorImage.description} className="rounded-lg shadow-xl" />}          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protector;