import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Infinity, Lock, GraduationCap, Brain, FolderOpen, Lightbulb, Search, Users, Sprout, MapPin, Route, Crosshair, LineChart, Rocket, Baby, Book, Building2, Briefcase } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block bg-white/20 p-4 rounded-full backdrop-blur-lg border border-white/30">
            <Shield size={64} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Guardian AIngel</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-100 mb-6">
            Privacy-First AI for Whole-Child Learning
          </p>
          <p className="text-md md:text-lg text-indigo-200 max-w-2xl mx-auto">
            A research-driven approach that goes beyond teaching subjects to nurturing success—from misconception diagnosis to life-skill development, Kindergarten through Career.
          </p>
          <div className="mt-8">
            <Link to="/pcd/overview" className="inline-block">
              <button className="bg-white/20 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-colors duration-300 ease-in-out transform hover:scale-105">
                More Info
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Protector Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Shield size={32} className="text-indigo-600" /> The Protector
          </h2>
          <p className="text-lg text-slate-600 mb-12">A Shield Against Big Tech. An Advocate for Your Child.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="mb-4 inline-block bg-gradient-to-br from-red-400 to-pink-500 p-3 rounded-xl text-white">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Child's Interests First</h3>
              <p className="text-slate-600">We operate as a fiduciary for your child's future. Data is never sold—it's used solely to build a personalized path to success.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="mb-4 inline-block bg-gradient-to-br from-purple-400 to-indigo-500 p-3 rounded-xl text-white">
                <Infinity size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">A Continuous Bond</h3>
              <p className="text-slate-600">Schools, districts, and teachers change. Guardian AIngel provides an unbroken chain of support that transcends grade bands and geographic boundaries.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="mb-4 inline-block bg-gradient-to-br from-sky-400 to-cyan-500 p-3 rounded-xl text-white">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Privacy Shield</h3>
              <p className="text-slate-600">We act as an intelligent agent, filtering noise and protecting privacy while ensuring access to the best of the digital world without the risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 px-6 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <GraduationCap size={32} className="text-emerald-600" /> The Holistic Mentor
          </h2>
          <p className="text-lg text-slate-600 mb-8">Teaching the "How," Not Just the "What"</p>
          <p className="max-w-3xl mx-auto text-slate-700 bg-white p-6 rounded-xl border border-emerald-200 shadow-sm mb-12">
            Most AI tutors focus only on content. Guardian AIngel recognizes that academic success depends equally on <strong>life skills</strong>—the teachable competencies that enable students to engage effectively with learning itself.
          </p>
          
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-8 rounded-2xl border-t-4 border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">The LEARN Framework</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <DomainCard icon={<Brain />} name="Self-Regulation" />
              <DomainCard icon={<FolderOpen />} name="Organization" />
              <DomainCard icon={<Lightbulb />} name="Learning Strategies" />
              <DomainCard icon={<Search />} name="Metacognition" />
              <DomainCard icon={<Users />} name="Collaboration" />
              <DomainCard icon={<Sprout />} name="Adaptive Mindset" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Engine Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <MapPin size={32} className="text-pink-400" /> The Academic Engine
          </h2>
          <p className="text-lg text-slate-300 mb-8">The Misconception Map: A GPS for Learning</p>
          <p className="max-w-3xl mx-auto text-slate-300 bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-12">
            Students struggle not from a lack of intelligence, but from hidden misconceptions. Our engine explicitly surfaces and addresses these cognitive barriers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <StepCard icon={<LineChart />} title="Deep History Analysis" description="We ingest results from prior years—including STAR, MAP, and state exams—to build a comprehensive profile of strengths and gaps." />
            <StepCard icon={<Crosshair />} title="Pinpointing the 'Why'" description="Standard tutors tell you that you got a problem wrong. Guardian AIngel tells you why—identifying the precise conceptual misunderstanding at its root." />
            <StepCard icon={<Route />} title="The Learning GPS" description="Like a navigation system that reroutes when you miss a turn, we adjust the path to bridge the gap—creating a custom route to mastery." />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-full text-white">
            <Rocket size={48} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">One Account. One Journey.</h2>
          <p className="text-lg text-slate-600 mb-10">Whether you move across the street or across the country, Guardian AIngel carries the history, learning profile, and trust your child has built—ensuring there's never a "Day One" reset.</p>
          
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            <JourneyPoint icon={<Baby />} label="K" />
            <JourneyArrow />
            <JourneyPoint icon={<Book />} label="Elementary" />
            <JourneyArrow />
            <JourneyPoint icon={<Building2 />} label="Middle" />
            <JourneyArrow />
            <JourneyPoint icon={<GraduationCap />} label="High School" />
            <JourneyArrow />
            <JourneyPoint icon={<Briefcase />} label="Career" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center">
        <Shield size={32} className="mx-auto mb-4 text-indigo-500"/>
        <p className="font-semibold text-lg text-white">Guardian AIngel</p>
        <p className="text-sm">A Research Initiative in Whole-Child Education</p>
      </footer>
    </div>
  );
};

// Helper Components

const DomainCard: React.FC<{ icon: React.ReactNode, name: string }> = ({ icon, name }) => (
  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg text-center border border-emerald-200 shadow-sm">
    <div className="text-emerald-700 mb-2 inline-block">{icon}</div>
    <h4 className="font-semibold text-sm text-slate-800">{name}</h4>
  </div>
);

const StepCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
    <div className="text-pink-400 mb-3">{icon}</div>
    <h3 className="font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

const JourneyPoint: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="text-center">
    <div className="bg-white shadow-md w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mb-2">{icon}</div>
    <p className="text-xs font-bold text-slate-700">{label}</p>
  </div>
);

const JourneyArrow = () => (
  <div className="text-slate-300 font-sans text-2xl">→</div>
);

export default LandingPage;
