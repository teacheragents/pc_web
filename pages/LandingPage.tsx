import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <header className="fixed top-0 w-full z-10 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">ATRL</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Publications</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Team</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Research Cohort 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Advanced Tutoring <br />
            <span className="text-slate-400">Research Lab.</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl">
            We are re-engineering the fundamental architecture of intelligent tutoring systems. 
            Moving beyond simple heuristics to ontology-driven, adaptive learning paths that 
            understand the student, not just the subject.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/pcd" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:translate-x-1"
            >
              Enter Research Portal
              <ArrowRight size={18} />
            </Link>
            
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              <BookOpen size={18} />
              Read the Whitepaper
            </button>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Cognitive Modeling</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Developing new frameworks for mapping student knowledge states in real-time using probabilistic graphical models.
            </p>
          </div>
          <div className="space-y-3">
             <h3 className="font-semibold text-slate-900">Semantic Pathways</h3>
             <p className="text-sm text-slate-500 leading-relaxed">
               Constructing dynamic learning graphs that adapt to misconception detection rather than predefined linear curricula.
             </p>
          </div>
          <div className="space-y-3">
             <h3 className="font-semibold text-slate-900">Generative Guidance</h3>
             <p className="text-sm text-slate-500 leading-relaxed">
               Leveraging LLMs to provide Socratic dialogue generation that feels natural, context-aware, and pedagogically sound.
             </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;