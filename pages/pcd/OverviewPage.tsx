import React from 'react';
import MisconceptionDiagram from '../../components/MisconceptionDiagram';

const OverviewPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Project Overview</h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          The Advanced Tutoring Research Lab is investigating the efficacy of non-linear, 
          ontology-driven pedagogical agents in STEM education.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-800">Rethinking K-12 Architecture</h2>
          <div className="prose prose-slate text-slate-600">
            <p>
              Traditional computer-based tutoring systems rely heavily on rigid decision trees. 
              If a student answers X, go to Y. This "Standards vs. Paths" conflict creates 
              brittle learning experiences that fail to address the root cause of misunderstandings.
            </p>
            <p className="mt-4">
              Our research proposes a separation of concerns: isolating the domain knowledge 
              (the "what") from the pedagogical strategy (the "how"). By mapping concepts 
              into a high-dimensional vector space, we can identify "neighboring" misconceptions 
              and route students through corrective micro-pathways that are generated dynamically 
              at runtime.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
               <li>Dynamic Curriculum Generation</li>
               <li>Real-time Misconception Diagnosis</li>
               <li>Ontology-based Knowledge Tracing</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-[400px]">
          {/* Embedding the diagram component as requested */}
          <MisconceptionDiagram />
        </div>
      </section>

      <section className="pt-8 border-t border-slate-100">
         <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
               <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Current Status</span>
               <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase II: Clinical Trials</h3>
               <p className="text-sm text-slate-500">We are currently deploying the Beta v2.0 agent across 3 partner districts to collect interaction data.</p>
            </div>
            <div className="flex-1">
               <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">Key Metric</span>
               <h3 className="text-lg font-semibold text-slate-900 mb-2">34% Reduction in Error Loop</h3>
               <p className="text-sm text-slate-500">Preliminary data suggests a significant decrease in repeated errors on isomorphic problem sets.</p>
            </div>
            <div className="flex-1">
               <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">Funding</span>
               <h3 className="text-lg font-semibold text-slate-900 mb-2">NSF Grant #29384</h3>
               <p className="text-sm text-slate-500">Supported by the National Science Foundation Directorate for STEM Education.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default OverviewPage;