import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">About Us</h1>

        <p className="my-6 text-slate-600 leading-relaxed">
          Mythili Sridhar is a passionate and caring educator with over 25 years of experience in the ed-tech space.
          <br/><br/>
          As part of her graduate thesis, she developed a collaborative education framework connecting students in Chicago Public Schools with mentors at the University of Illinois — research she later scaled into a 400-person online tutoring company serving students across four of the five largest school districts in the United States.
          <br/><br/>
          A true pioneer in educational technology, Mythili was among the first to incorporate video on the World Wide Web, and she led the national SuperQuest program at the National Center for Supercomputing Applications (NCSA).
          <br/><br/>
          Today, she is dedicated to building a safe learning environment where every child can grow and thrive — free from exploitation as a data source.
        </p>

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
