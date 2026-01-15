import React, { useState } from 'react';
import { Brain, Clock, BookOpen, RefreshCw, Users, Target, ArrowRight, ArrowDown, Layers } from 'lucide-react';

export default function TaxonomyDiagram() {
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const domains = [
    { id: 'L', letter: 'L', name: 'Learning Strategies', icon: BookOpen, color: 'bg-green-500', lightColor: 'bg-green-100', textColor: 'text-green-700', question: 'How do I study effectively?', blooms: ['Apply', 'Analyze', 'Create'], skills: ['Retrieval practice', 'Spaced repetition', 'Active reading', 'Transfer'] },
    { id: 'E', letter: 'E', name: 'Executive Function', subtitle: '(Self-Regulation)', icon: Brain, color: 'bg-rose-500', lightColor: 'bg-rose-100', textColor: 'text-rose-700', question: 'How do I manage myself?', blooms: ['Remember', 'Apply', 'Evaluate'], skills: ['Attention control', 'Impulse management', 'Emotional regulation', 'Persistence'] },
    { id: 'A', letter: 'A', name: 'Adaptive Mindset', icon: Target, color: 'bg-indigo-500', lightColor: 'bg-indigo-100', textColor: 'text-indigo-700', question: 'How do I respond to challenges?', blooms: ['Understand', 'Apply', 'Create'], skills: ['Growth mindset', 'Resilience', 'Self-efficacy', 'Grit'] },
    { id: 'R', letter: 'R', name: 'Reflection', subtitle: '(Metacognition)', icon: RefreshCw, color: 'bg-purple-500', lightColor: 'bg-purple-100', textColor: 'text-purple-700', question: 'How do I think about my thinking?', blooms: ['Analyze', 'Evaluate', 'Create'], skills: ['Self-assessment', 'Strategy selection', 'Comprehension monitoring', 'Error analysis'] },
    { id: 'N', letter: 'N', name: 'Navigation', subtitle: '(Organization + Collaboration)', icon: Users, color: 'bg-amber-500', lightColor: 'bg-amber-100', textColor: 'text-amber-700', question: 'How do I manage resources & relationships?', blooms: ['Apply', 'Analyze', 'Evaluate'], skills: ['Time management', 'Note-taking', 'Teamwork', 'Communication'] },
  ];

  const bloomsLevels = [
    { name: 'Create', color: 'bg-violet-600' },
    { name: 'Evaluate', color: 'bg-indigo-500' },
    { name: 'Analyze', color: 'bg-blue-500' },
    { name: 'Apply', color: 'bg-cyan-500' },
    { name: 'Understand', color: 'bg-teal-500' },
    { name: 'Remember', color: 'bg-emerald-500' },
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Life Skills Taxonomy</h1>
          <p className="text-sm text-gray-600">A Parallel Framework to Bloom's Cognitive Levels</p>
        </div>

        {/* Main Diagram */}
        <div className="grid md:grid-cols-12 gap-4">
          
          {/* Left Side - Bloom's Taxonomy */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-violet-600" size={20} />
                <h2 className="font-bold text-gray-800 text-sm">Bloom's Taxonomy</h2>
              </div>
              <p className="text-xs text-gray-500 mb-3 italic">"What to think"</p>
              
              <div className="space-y-1">
                {bloomsLevels.map((level, idx) => (
                  <div 
                    key={level.name}
                    className={`${level.color} text-white text-xs font-medium py-2 px-3 rounded text-center`}
                    style={{ marginLeft: `${idx * 4}px`, marginRight: `${idx * 4}px` }}
                  >
                    {level.name}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">Cognitive complexity increases ↑</p>
              </div>
            </div>
          </div>

          {/* Center - Connection Arrow */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="hidden md:flex flex-col items-center">
              <ArrowRight className="text-gray-400" size={32} />
              <span className="text-xs text-gray-500 mt-1 writing-mode-vertical" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>enables</span>
            </div>
            <div className="md:hidden">
              <ArrowDown className="text-gray-400" size={32} />
            </div>
          </div>

          {/* Right Side - LEARN Framework */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="font-bold text-gray-800">LEARN Framework</h2>
                  <p className="text-xs text-gray-500 italic">"How to learn"</p>
                </div>
                <div className="flex gap-1">
                  {domains.map(d => (
                    <span key={d.letter} className={`${d.color} text-white font-bold w-7 h-7 rounded flex items-center justify-center text-sm`}>
                      {d.letter}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain Cards */}
              <div className="space-y-2">
                {domains.map((domain) => {
                  const Icon = domain.icon;
                  const isHovered = hoveredDomain === domain.id;
                  
                  return (
                    <div
                      key={domain.id}
                      className={`${domain.lightColor} rounded-lg p-3 cursor-pointer transition-all duration-200 ${isHovered ? 'shadow-md scale-101' : ''}`}
                      onMouseEnter={() => setHoveredDomain(domain.id)}
                      onMouseLeave={() => setHoveredDomain(null)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Letter Badge */}
                        <div className={`${domain.color} text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {domain.letter}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Icon className={domain.textColor} size={16} />
                            <h3 className={`font-bold ${domain.textColor} text-sm`}>
                              {domain.name}
                              {domain.subtitle && <span className="font-normal text-xs ml-1">{domain.subtitle}</span>}
                            </h3>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 italic">"{domain.question}"</p>
                          
                          {/* Expanded content on hover */}
                          {isHovered && (
                            <div className="mt-2 pt-2 border-t border-gray-200">
                              <div className="flex flex-wrap gap-1 mb-2">
                                {domain.skills.map((skill, idx) => (
                                  <span key={idx} className="bg-white text-gray-700 text-xs px-2 py-0.5 rounded border border-gray-300">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500">Supports Bloom's:</span>
                                {domain.blooms.map((bloom, idx) => (
                                  <span key={idx} className="text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                                    {bloom}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - The Integration */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-4">
          <h2 className="font-bold text-gray-800 text-center mb-4">The Integration: Two Taxonomies Working Together</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Bloom's Purpose */}
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="text-violet-600" size={18} />
                <h3 className="font-bold text-violet-700 text-sm">Bloom's Taxonomy</h3>
              </div>
              <p className="text-xs text-gray-700 mb-2">Defines <strong>cognitive destinations</strong>—what students should be able to do with knowledge.</p>
              <div className="text-xs text-violet-600 italic">"Can you analyze this text?"</div>
            </div>

            {/* LEARN Purpose */}
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="text-emerald-600" size={18} />
                <h3 className="font-bold text-emerald-700 text-sm">LEARN Framework</h3>
              </div>
              <p className="text-xs text-gray-700 mb-2">Defines <strong>enabling capacities</strong>—the skills that make cognitive work possible.</p>
              <div className="text-xs text-emerald-600 italic">"Can you sit down and do it?"</div>
            </div>

            {/* Together */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="text-amber-600" size={18} />
                <h3 className="font-bold text-amber-700 text-sm">Together</h3>
              </div>
              <p className="text-xs text-gray-700 mb-2">Students who master both don't just know content—they <strong>know how to learn anything</strong>.</p>
              <div className="text-xs text-amber-600 italic">"Ready for school, career, and life"</div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-4 text-center">
          <div className="inline-block bg-gradient-to-r from-violet-500 to-emerald-500 text-white rounded-lg px-6 py-3 shadow-lg">
            <p className="text-sm font-medium">Bloom's tells us <strong>WHAT</strong> to think. LEARN tells us <strong>HOW</strong> to learn.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Hover over each domain to see key skills and Bloom's alignment</p>
        </div>
      </div>
    </div>
  );
}
