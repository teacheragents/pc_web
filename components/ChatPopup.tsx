
import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

export interface Agent {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Message {
  sender: 'user' | 'agent';
  text: string;
}

interface ChatPopupProps {
  agent: Agent | null;
  onClose: () => void;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ agent, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (agent) {
      setMessages([
        { sender: 'agent', text: `Hello! I am the ${agent.title}. How can I help you today?` }
      ]);
    }
  }, [agent]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !agent) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    if (agent.title === 'Misconceptions Explorer') {
      const backendUrl = 'https://www.lifelongcoach.org/genai/api/v1/pcd_mis';
      const sessionId = 'ag1_' + Date.now();

      try {
        const response = await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 'pcd_agent_1',
            session_id: sessionId,
            text_input: currentInput
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const agentResponse: Message = { sender: 'agent', text: data.response_text };
        setMessages(prev => [...prev, agentResponse]);

      } catch (error) {
        console.error("Error communicating with the backend:", error);
        const errorResponse: Message = { sender: 'agent', text: 'Sorry, I am having trouble connecting to my brain right now.' };
        setMessages(prev => [...prev, errorResponse]);
      }
    } else {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const agentResponse: Message = { sender: 'agent', text: `This is a mocked response for the ${agent.title} regarding "${currentInput}". The real backend is not yet implemented.` };
        setMessages(prev => [...prev, agentResponse]);

      } catch (error) {
        console.error("Error communicating with the backend:", error);
        const errorResponse: Message = { sender: 'agent', text: 'Sorry, I am having trouble connecting to my brain right now.' };
        setMessages(prev => [...prev, errorResponse]);
      }
    }
  };

  if (!agent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-3/4 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <agent.icon size={20} />
              </div>
            <h2 className="text-lg font-bold">{agent.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100">
            <X size={20} />
          </button>
        </header>

        <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <footer className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSend} className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300" disabled={!input.trim()}>
              <Send size={20} />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">Only one agent can be active at a time. This is a demo environment.</p>
        </footer>
      </div>
    </div>
  );
};

export default ChatPopup;
