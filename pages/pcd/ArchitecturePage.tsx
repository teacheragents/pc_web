import React from 'react';
import ConceptMap from '../../components/ConceptMap';
import MisconceptionDiagram from '../../components/MisconceptionDiagram';

const ArchitecturePage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6 animate-in fade-in zoom-in duration-300">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Rethinking K-12: Misconception-Guided, Meta-Skills-Enabled Instruction</h1>
        <p className="text-slate-500 mt-2">
          Standards define destinations, not paths. While academic standards establish what students should ultimately know, they operate at the wrong level of granularity for actual instruction. Learning happens at the concept level—and concepts come bundled with misconceptions that actively block new understanding. A student who believes multiplication always makes numbers larger won't simply overwrite this error when presented with correct information; cognitive science shows misconceptions must be explicitly surfaced and addressed. But even accurate conceptual understanding isn't enough. Students also need foundational skills to engage with learning itself: regulating attention, employing effective study strategies, monitoring comprehension, and persisting through difficulty. These aren't innate talents—they're teachable competencies that schools rarely teach explicitly. An integrated model that diagnoses specific misconceptions and systematically builds life skills doesn't abandon standards—it simply recognizes that reaching those endpoints requires navigating the actual terrain of how learning works.
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
        
        {/* The D3 Concept Map Component */}
        <ConceptMap />
      </div>

      <div className="grid grid-cols-3 gap-6 text-sm text-slate-600">
         <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <strong>Graph Database:</strong> Neo4j implementation storing 15,000+ distinct knowledge nodes.
         </div>
         <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <strong>Inference Engine:</strong> Bayesian Truth Serum algorithm for conflicting evidence resolution.
         </div>
         <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <strong>Latency:</strong> Sub-200ms node traversal for real-time dialogue generation.
         </div>
      </div>
      <MisconceptionDiagram />
    </div>
  );
};

export default ArchitecturePage;