import React from 'react';
import LearnIntro from '../../components/LearnIntro';

const ArchitecturePage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6 animate-in fade-in zoom-in duration-300">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Beyond Content: The LEARN Framework for Foundational Learning Skills</h1>
        <p className="text-slate-500 mt-2">
          The LEARN Framework provides a comprehensive, developmentally sequenced approach to building the foundational skills that enable academic success. It encompasses six essential domains: Self-Regulation (managing attention, emotions, and impulses), Organization (time management, material management, and planning), Learning Strategies (techniques like retrieval practice and spaced repetition that transform exposure into retention), Metacognition (monitoring one's own comprehension and accurately assessing understanding), Collaboration (productive teamwork and intellectual exchange), and Adaptive Mindset (growth mindset, resilience, and persistence). These skills are scaffolded across grade bands in alignment with Bloom's taxonomy—from basic identification and recall in early grades to evaluation and synthesis by high school. The framework recognizes that these competencies aren't innate talents but teachable skills that, once internalized, free cognitive resources for the demanding work of content learning.
        </p>
      </header>

      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-1 overflow-hidden relative">
        <div className="absolute top-4 right-4 z-10 flex gap-2 bg-white/90 backdrop-blur p-2 rounded-lg border border-slate-100 shadow-sm">
           <div className="flex items-center gap-2 px-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-xs font-medium text-slate-600">Core</span>
           </div>
           <div className="flex items-center gap-2 px-2">
              <span className="w-3 h-3 rounded-full bg-blue-300"></span>
              <span className="text-xs font-medium text-slate-600">Derivative</span>
           </div>
           <div className="flex items-center gap-2 px-2">
              <span className="w-3 h-3 rounded-full bg-blue-100"></span>
              <span className="text-xs font-medium text-slate-600">Leaf</span>
           </div>
        </div>
        
        {/* The D3 Concept Map Component was here */}
      </div>

      <LearnIntro />
    </div>
  );
};

export default ArchitecturePage;