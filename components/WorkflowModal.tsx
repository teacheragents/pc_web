import React, { useEffect } from 'react';
import { X, Play, FileText, CheckCircle2 } from 'lucide-react';

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  demoUrl?: string;
  tags: string[];
}

interface WorkflowModalProps {
  workflow: Workflow | null;
  onClose: () => void;
}

const WorkflowModal: React.FC<WorkflowModalProps> = ({ workflow, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (workflow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [workflow]);

  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {workflow.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{workflow.title}</h2>
            <p className="text-slate-500 mt-1">{workflow.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Demo Placeholder */}
          <div className="bg-slate-900 rounded-xl aspect-video flex items-center justify-center relative group overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
             <div className="relative z-10 text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all cursor-pointer">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
                <p className="text-slate-300 text-sm font-medium">Interactive Demo Unavailable in Preview</p>
             </div>
          </div>

          {/* Process Flow */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText size={16} /> Process Breakdown
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200"></div>
              <div className="space-y-6">
                {workflow.steps.map((step, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                      <span className="text-blue-600 text-xs font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors">
                      <h4 className="font-semibold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="relative pl-12">
                   <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center z-10">
                      <CheckCircle2 size={14} className="text-green-600" />
                   </div>
                   <div className="py-2">
                     <p className="text-sm font-medium text-green-700">Completion</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;