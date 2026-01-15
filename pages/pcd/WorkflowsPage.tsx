import React, { useState } from 'react';
import { Bot, BrainCircuit, MessageSquareCode, Code, BookOpen } from 'lucide-react';
import ChatPopup, { Agent } from '../../components/ChatPopup'; // Adjust path as needed

const agentData: Agent[] = [
  {
    id: 'agent_001',
    title: 'Socratic Tutor',
    description: 'Guides students toward self-discovery by asking probing questions instead of giving direct answers.',
    icon: MessageSquareCode,
  },
  {
    id: 'agent_002',
    title: 'Misconception Detector',
    description: 'Analyzes student input in real-time to spot and flag common misunderstandings or cognitive biases.',
    icon: BrainCircuit,
  },
  {
    id: 'agent_003',
    title: 'Curriculum Designer',
    description: 'Dynamically adjusts the learning path and content sequence based on a student\'s performance and progress.',
    icon: BookOpen,
  },
  {
    id: 'agent_004',
    title: 'Code Debugger',
    description: 'Helps students identify and understand errors in their code by providing hints and explanations.',
    icon: Code,
  },
];

const AgenticWorkflowsPage: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<Agent | null>(null);

  const handleAgentClick = (agent: Agent) => {
    setActiveAgent(agent);
  };

  const handleClosePopup = () => {
    setActiveAgent(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Multi-Agent Interaction Showcase</h1>
        <p className="text-lg text-slate-600">
          This page demonstrates interactions with multiple specialized AI agents. Each agent possesses a different context and expertise. Click on an agent to start a conversation. Note: Only one agent can be active at a time.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agentData.map((agent) => (
          <div 
            key={agent.id}
            onClick={() => handleAgentClick(agent)}
            className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer flex flex-col h-full text-center items-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <agent.icon size={32} />
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600">
              {agent.title}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed flex-1">
              {agent.description}
            </p>
          </div>
        ))}
      </div>

      <ChatPopup agent={activeAgent} onClose={handleClosePopup} />
    </div>
  );
};

export default AgenticWorkflowsPage;
