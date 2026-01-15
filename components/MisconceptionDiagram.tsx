import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, ArrowDown, Layers, Target, Brain } from 'lucide-react';

export default function LearningModelDiagram() {
  const [activeView, setActiveView] = useState('comparison');

  const concepts = [
    { name: 'Concept A', misconceptions: ['Misconception A1', 'Misconception A2'] },
    { name: 'Concept B', misconceptions: ['Misconception B1'] },
    { name: 'Concept C', misconceptions: ['Misconception C1', 'Misconception C2', 'Misconception C3'] },
    { name: 'Concept D', misconceptions: ['Misconception D1'] },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">From Standards to Understanding</h1>
      <p className="text-center text-gray-600 mb-6">Why misconception-guided instruction outperforms standards-driven teaching</p>
      
      {/* Toggle */}
      <div className="flex justify-center gap-2 mb-8">
        {['comparison', 'hierarchy', 'pathway'].map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeView === view
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {view === 'comparison' ? 'Two Approaches' : view === 'hierarchy' ? 'Granularity Levels' : 'Learning Pathway'}
          </button>
        ))}
      </div>

      {/* Comparison View */}
      {activeView === 'comparison' && (
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Standards-Driven */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-400">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-orange-500" size={24} />
              <h2 className="text-xl font-bold text-orange-700">Standards-Driven Instruction</h2>
            </div>
            
            <div className="bg-orange-100 rounded-lg p-4 mb-4">
              <p className="font-semibold text-orange-800">State Standard (e.g., TEKS)</p>
              <p className="text-sm text-orange-700">"Students will understand fractions and operations"</p>
            </div>
            
            <ArrowDown className="mx-auto text-orange-400 my-2" />
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">Teaching targets the standard directly</p>
              <div className="flex flex-wrap gap-2">
                {['Concept A', 'Concept B', 'Concept C', 'Concept D'].map((c) => (
                  <span key={c} className="bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs">{c} (glossed over)</span>
                ))}
              </div>
            </div>
            
            <ArrowDown className="mx-auto text-orange-400 my-2" />
            
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-red-500" size={18} />
                <p className="font-semibold text-red-700">Misconceptions Ignored</p>
              </div>
              <p className="text-sm text-red-600">Students pass tests but retain deep misunderstandings that compound over time</p>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-orange-600">
              <XCircle size={20} />
              <span className="text-sm font-medium">Surface-level mastery, persistent gaps</span>
            </div>
          </div>

          {/* Misconception-Guided */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-green-700">Misconception-Guided Instruction</h2>
            </div>
            
            <div className="bg-green-100 rounded-lg p-3 mb-3">
              <p className="font-semibold text-green-800 text-sm">State Standard (e.g., TEKS)</p>
              <p className="text-xs text-green-700">"Students will understand fractions and operations"</p>
            </div>
            
            <ArrowDown className="mx-auto text-green-500 my-2" size={18} />
            
            <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-200">
              <p className="text-xs text-blue-700 mb-2 font-medium">Standard decomposed into concepts:</p>
              <div className="space-y-2">
                {/* Concept A with example */}
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">Concept A</span>
                  <ArrowRight size={12} className="text-gray-400" />
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs border border-amber-300">Misconception A1</span>
                </div>
                <p className="text-xs text-blue-600 ml-1 italic">e.g., "Fraction as equal parts" → "Bigger denominator = bigger fraction"</p>
                
                {/* Concept B with example */}
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">Concept B</span>
                  <ArrowRight size={12} className="text-gray-400" />
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs border border-amber-300">Misconception B1</span>
                </div>
                <p className="text-xs text-blue-600 ml-1 italic">e.g., "Adding fractions" → "Add numerators and denominators separately"</p>
              </div>
            </div>
            
            <ArrowDown className="mx-auto text-green-500 my-2" size={18} />
            
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-600" size={16} />
                <p className="font-semibold text-green-700 text-sm">Misconceptions Diagnosed & Resolved</p>
              </div>
              <p className="text-xs text-green-600">Each concept taught with attention to common misconceptions; cognitive conflicts addressed</p>
            </div>
            
            <div className="mt-3 flex items-center gap-2 text-green-600">
              <CheckCircle size={18} />
              <span className="text-xs font-medium">Deep understanding, transferable knowledge</span>
            </div>
          </div>
        </div>
      )}

      {/* Hierarchy View */}
      {activeView === 'hierarchy' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Layers className="text-blue-600" size={28} />
              <h2 className="text-xl font-bold text-gray-800">The Granularity Gap</h2>
            </div>
            
            {/* Pyramid */}
            <div className="flex flex-col items-center space-y-3">
              {/* Standards Level */}
              <div className="w-48 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-4 text-center shadow-md">
                <p className="font-bold">STATE STANDARD</p>
                <p className="text-xs opacity-90">Broad, Assessable</p>
              </div>
              
              <div className="text-gray-400 text-sm">contains 4-8</div>
              
              {/* Concepts Level */}
              <div className="flex gap-2 flex-wrap justify-center">
                {['Concept A', 'Concept B', 'Concept C', 'Concept D'].map((c, i) => (
                  <div key={i} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-4 py-3 text-center shadow-md">
                    <p className="font-semibold text-sm">{c}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-gray-400 text-sm">each has 1-4</div>
              
              {/* Misconceptions Level */}
              <div className="flex gap-2 flex-wrap justify-center max-w-2xl">
                {concepts.flatMap((c, i) => 
                  c.misconceptions.map((m, j) => (
                    <div key={`${i}-${j}`} className="bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-lg px-3 py-2 text-center shadow-md">
                      <p className="font-medium text-xs">{m}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-bold text-purple-700">Standards</p>
                <p className="text-xs text-purple-600">What tests measure</p>
                <p className="text-lg font-bold text-purple-800 mt-1">1</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-700">Concepts</p>
                <p className="text-xs text-blue-600">What students must learn</p>
                <p className="text-lg font-bold text-blue-800 mt-1">4-8</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg">
                <p className="font-bold text-amber-700">Misconceptions</p>
                <p className="text-xs text-amber-600">What blocks learning</p>
                <p className="text-lg font-bold text-amber-800 mt-1">8-20+</p>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm italic">
              Standards-driven instruction operates at the top level, missing the fine-grained work required below.
            </p>
          </div>
        </div>
      )}

      {/* Pathway View */}
      {activeView === 'pathway' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">The Learning Pathway</h2>
            
            <div className="space-y-4">
              {concepts.slice(0, 3).map((concept, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    {/* Concept Node */}
                    <div className="flex-shrink-0 w-32">
                      <div className="bg-blue-500 text-white rounded-lg p-3 text-center shadow-md">
                        <p className="font-bold text-sm">{concept.name}</p>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center pt-3">
                      <ArrowRight className="text-gray-400" size={20} />
                    </div>
                    
                    {/* Misconceptions */}
                    <div className="flex-1">
                      <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                        <p className="text-xs text-amber-700 font-medium mb-2">Misconceptions to address:</p>
                        <div className="flex flex-wrap gap-2">
                          {concept.misconceptions.map((m, j) => (
                            <div key={j} className="flex items-center gap-1 bg-white rounded px-2 py-1 border border-amber-300">
                              <AlertTriangle size={12} className="text-amber-500" />
                              <span className="text-xs text-amber-800">{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center pt-3">
                      <ArrowRight className="text-gray-400" size={20} />
                    </div>
                    
                    {/* Mastery */}
                    <div className="flex-shrink-0 w-24 pt-1">
                      <div className="bg-green-100 border border-green-300 rounded-lg p-2 text-center">
                        <CheckCircle className="mx-auto text-green-600 mb-1" size={18} />
                        <p className="text-xs text-green-700 font-medium">Mastery</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector line */}
                  {idx < 2 && (
                    <div className="ml-16 pl-0.5 h-4 border-l-2 border-dashed border-blue-300"></div>
                  )}
                </div>
              ))}
              
              {/* Cognitive Load, Bloom Level, and Diagnostic boxes */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
                <div className="bg-indigo-100 border-2 border-indigo-400 rounded-lg px-4 py-3 text-center shadow-md">
                  <Brain className="mx-auto text-indigo-600 mb-1" size={20} />
                  <p className="text-sm font-bold text-indigo-700">Cognitive Load</p>
                  <p className="text-xs text-indigo-600">Optimized for learning</p>
                </div>
                <div className="bg-violet-100 border-2 border-violet-400 rounded-lg px-4 py-3 text-center shadow-md">
                  <Layers className="mx-auto text-violet-600 mb-1" size={20} />
                  <p className="text-sm font-bold text-violet-700">Bloom Level</p>
                  <p className="text-xs text-violet-600">Targeted complexity</p>
                </div>
                <div className="bg-rose-100 border-2 border-rose-400 rounded-lg px-4 py-3 text-center shadow-md">
                  <Target className="mx-auto text-rose-600 mb-1" size={20} />
                  <p className="text-sm font-bold text-rose-700">Diagnostic & Remediation</p>
                  <p className="text-xs text-rose-600">Targeted strategies</p>
                </div>
              </div>
            </div>
            
            {/* Final Standard */}
            <div className="mt-6 flex justify-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg px-8 py-4 text-center shadow-lg">
                <CheckCircle className="mx-auto mb-2" size={24} />
                <p className="font-bold">Standard Achieved</p>
                <p className="text-xs opacity-90">With deep, transferable understanding</p>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              <strong>Key insight:</strong> True mastery of a standard requires sequential mastery of each underlying concept, 
              which in turn requires identifying and resolving each associated misconception.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
