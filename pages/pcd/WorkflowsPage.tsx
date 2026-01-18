import React, { useState } from 'react';
import { Bot, BrainCircuit, MessageSquareCode, Code, BookOpen, ExternalLink } from 'lucide-react';
import ChatPopup, { Agent } from '../../components/ChatPopup'; // Adjust path as needed

const agentData: Agent[] = [
  {
    id: 'agent_002',
    title: 'Misconceptions Explorer',
    description: 'Identify and address common misconceptions aligned to TEKS Mathematics standards for grades K–8.',
    icon: BrainCircuit,
  },
  {
    id: 'agent_003',
    title: 'Student Profile Generator',
    description: 'Analyze past test results and additional inputs to generate baseline misconception profiles and personalized instructional pathways.',
    icon: BookOpen,
  },
    {
    id: 'agent_004',
    title: 'Instruction Flow Generator',
    description: 'Design instructional sequences grounded in Cognitive Load Theory and targeted misconception remediation.',
    icon: Code,
  },
  {
    id: 'agent_001',
    title: 'Socratic Tutor',
    description: 'Guide students toward self-discovery through probing questions rather than direct answers.',
    icon: MessageSquareCode,
  },
];

const studentDocuments = [
  {
    student: 'Student 1',
    reports: [
      { year: 2025, grade: 7, url: 'https://storage.googleapis.com/ed_public_docs/student_1_grade_7_math_2025.pdf' },
      { year: 2024, grade: 6, url: 'https://storage.googleapis.com/ed_public_docs/student_1_grade_6_math_2024.pdf' },
      { year: 2023, grade: 5, url: 'https://storage.googleapis.com/ed_public_docs/student_1_grade_5_math_2023.pdf' },
    ],
  },
  {
    student: 'Student 2',
    reports: [
      { year: 2025, grade: 7, url: 'https://storage.googleapis.com/ed_public_docs/student_2_grade_7_math_2025.pdf' },
      { year: 2024, grade: 6, url: 'https://storage.googleapis.com/ed_public_docs/student_2_grade_6_math_2024.pdf' },
      { year: 2023, grade: 5, url: 'https://storage.googleapis.com/ed_public_docs/student_2_grade_5_math_2023.pdf' },
    ],
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

      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Anonymized Student STARR Reports</h2>
        <p className="text-slate-600 mb-4">
          Download the reports and use them for analysis by agents.
        </p>
        <div className="space-y-4">
          {studentDocuments.map((studentData) => (
            <div key={studentData.student}>
              <h3 className="text-xl font-semibold text-slate-800">{studentData.student} STARR Report:</h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {studentData.reports.map((report) => (
                  <li key={report.url} className="text-slate-600">
                    <a 
                      href={report.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      {report.year} - Grade {report.grade}
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ChatPopup agent={activeAgent} onClose={handleClosePopup} />
    </div>
  );
};

export default AgenticWorkflowsPage;
