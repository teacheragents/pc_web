import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Introductory Video</h1>
        <div className="aspect-[8/9]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/7BLfuIxp7ng" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </header>

      <section className="pt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Student Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Vertical Video 1 */}
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/OLZZdC0JlzI" 
              title="Testimonial 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

          {/* Vertical Video 2 */}
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/zbMaEFkjxNA"
              title="Testimonial 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

          {/* Vertical Video 3 */}
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/YPmAs66Flzg"
              title="Testimonial 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ResourcesPage;
