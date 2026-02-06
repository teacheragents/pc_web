import React from 'react';
import images from './images.json';

const HolisticMentor = () => {
  const mentorImage = images.find(img => img.id === 'mentor');

  return (
    <section className="py-12 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex justify-center md:order-last">
            {mentorImage && <img src={mentorImage.imageUrl} alt={mentorImage.description} className="rounded-lg shadow-xl" />}          
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm font-medium text-white">The Holistic Mentor</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">Part Mom. Part Teacher. Part Tutor.</h2>
            <p className="max-w-xl text-slate-300 md:text-lg">
              Success requires more than just getting the right answer. Most AI tutors only care about the "what." Guardian AIngel cares about the "how." We model the support system of a loving parent and a dedicated coach to teach the <strong className='text-purple-400'>Life Skills</strong> that actually determine future success.
            </p>
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-white">Beyond the Classroom</h3>
                <p className="text-slate-400">We integrate "AVID-style" success strategies directly into the learning process:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                    <li><strong>Time Management:</strong> Teaching students how to balance cognitive load and schedules.</li>
                    <li><strong>Study Skills:</strong> Interactive coaching on note-taking, organization, and focus.</li>
                    <li><strong>Career & College Prep:</strong> A long-term vision that aligns today’s homework with tomorrow’s dreams.</li>
                </ul>
            </div>
            <blockquote className="mt-6 border-l-2 border-purple-400 pl-6 italic text-slate-300">
              "We are the voice in their ear rooting for their success, reminding them to take a break, and cheering them on when they breakthrough."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticMentor;