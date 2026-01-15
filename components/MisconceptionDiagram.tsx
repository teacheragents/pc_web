import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// This component acts as a placeholder for the actual "misconception_diagram.tsx"
// which the user would upload. I am simulating a visualization here.

const data = [
  { name: 'Initial', score: 45, type: 'Pre-Test' },
  { name: 'Traditional', score: 62, type: 'Post-Test' },
  { name: 'AI-Guided', score: 88, type: 'Post-Test' },
];

const MisconceptionDiagram: React.FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Concept Mastery Velocity</h3>
        <p className="text-sm text-slate-500">Comparison of misconception correction rates across cohorts.</p>
      </div>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              width={80}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 text-center">
        Figure 1.2: Efficacy of Ontology-Driven Tutoring
      </div>
    </div>
  );
};

export default MisconceptionDiagram;