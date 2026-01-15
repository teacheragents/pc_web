import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: "Ontology-Driven Tutoring Systems: A Review",
      type: "PDF Whitepaper",
      size: "2.4 MB",
      date: "Oct 2023"
    },
    {
      title: "Comparative Analysis of LLM Pedagogical Agents",
      type: "Journal Pre-print",
      size: "1.1 MB",
      date: "Dec 2023"
    },
    {
      title: "Dataset: K-12 Algebra Misconceptions v2",
      type: "CSV Dataset",
      size: "45 MB",
      date: "Jan 2024"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Resources</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Publicly available datasets, whitepapers, and technical documentation generated 
          during our research phases.
        </p>
      </header>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-slate-100">
          {resources.map((res, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{res.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span>{res.type}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{res.size}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{res.date}</span>
                  </div>
                </div>
              </div>
              
              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Download size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-slate-900 rounded-xl text-white">
          <h3 className="font-bold text-lg mb-2">GitHub Repository</h3>
          <p className="text-slate-400 text-sm mb-6">
            Access the open-source implementation of the core reasoning engine and ontology definitions.
          </p>
          <a href="#" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
            View on GitHub <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
        <div className="p-6 bg-blue-600 rounded-xl text-white">
          <h3 className="font-bold text-lg mb-2">Partner Access</h3>
          <p className="text-blue-100 text-sm mb-6">
            Login portal for partner school districts and clinical trial administrators.
          </p>
          <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:opacity-90 underline decoration-blue-400 underline-offset-4">
            Partner Login <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;