import React, { useState } from 'react';
import { ArrowRight, Bot, BrainCircuit, MessageSquareCode } from 'lucide-react';
import WorkflowModal, { Workflow } from '../../components/WorkflowModal';

// Mock Data for Workflows
const workflowsData: Workflow[] = [
  {
    id: 'wf_001',
    title: 'Misconception Detection',
    description: 'Real-time analysis of student input to identify specific cognitive biases or factual errors using fine-tuned classifiers.',
    tags: ['NLP', 'Classification', 'Real-time'],
    steps: [
      { title: 'Input Ingestion', description: 'Student natural language response is captured and tokenized.' },
      { title: 'Vector Embedding', description: 'Input is mapped to latent space using a specialized BERT model.' },
      { title: 'Neighbor Search', description: 'System queries the vector database for nearest "known misconception" centroids.' },
      { title: 'Confidence Scoring', description: 'If similarity > 0.85, the specific misconception flag is raised for the tutor agent.' }
    ]
  },
  {
    id: 'wf_002',
    title: 'Socratic Dialogue Gen',
    description: 'Generates probing questions rather than direct answers to guide students toward self-correction.',
    tags: ['GenAI', 'Pedagogy', 'RLHF'],
    steps: [
      { title: 'Context Retrieval', description: 'Current lesson goal and student history are loaded into context window.' },
      { title: 'Strategy Selection', description: 'Policy network selects "Hint", "Prompt", or "Counter-example" strategy.' },
      { title: 'Response Generation', description: 'LLM generates 3 candidate responses constrained by the strategy.' },
      { title: 'Pedagogical Filter', description: 'Secondary model ranks responses based on reading level and tone.' }
    ]
  },
  {
    id: 'wf_003',
    title: 'Curriculum Adaptation',
    description: 'Dynamically re-orders the learning graph based on performance velocity and knowledge gaps.',
    tags: ['Graph Theory', 'Adaptive', 'Long-term'],
    steps: [
      { title: 'State Assessment', description: 'Bayesian Knowledge Tracing updates probability of mastery for current node.' },
      { title: 'Prerequisite Check', description: 'Graph traversal checks all upstream dependencies.' },
      { title: 'Path Optimization', description: 'A* search algorithm finds the shortest path to goal state avoiding "blocked" (unlearned) nodes.' },
      { title: 'Content Delivery', description: 'Next best learning activity is served to the frontend.' }
    ]
  }
];

const WorkflowsPage: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  const getIcon = (id: string) => {
     switch(id) {
        case 'wf_001': return BrainCircuit;
        case 'wf_002': return MessageSquareCode;
        default: return Bot;
     }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">AI Workflows</h1>
        <p className="text-lg text-slate-600">
          Explore the specific algorithmic pipelines that power the intelligent tutoring system. 
          Click on a workflow to view the step-by-step logic.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowsData.map((workflow) => {
          const Icon = getIcon(workflow.id);
          return (
            <div 
              key={workflow.id}
              onClick={() => setSelectedWorkflow(workflow)}
              className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {workflow.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                {workflow.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                View Architecture <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Integration */}
      <WorkflowModal 
        workflow={selectedWorkflow} 
        onClose={() => setSelectedWorkflow(null)} 
      />
    </div>
  );
};

export default WorkflowsPage;