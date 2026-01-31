
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Paperclip, FileUp } from 'lucide-react';

export interface Agent {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
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
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (agent) {
      setMessages([
        { sender: 'agent', text: `Hello! I am the ${agent.title}. How can I help you today?` }
      ]);
      setInput('');
      setFile(null);
    }
  }, [agent]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if ((!input.trim() && !file) || !agent) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    const currentFile = file;
    setInput('');
    setFile(null);
    setIsLoading(true);

    const agentBackendUrls: { [key: string]: string } = {
      'agent_001': 'https://www.lifelongcoach.org/genai/api/v1/pcd_tutor',
      'agent_002': 'https://www.lifelongcoach.org/genai/api/v1/pcd_mis',
      'agent_003': 'https://www.lifelongcoach.org/genai/api/v1/pcd_spro',
      'agent_004': 'https://www.lifelongcoach.org/genai/api/v1/pcd_iflow',
    };

    const backendUrl = agentBackendUrls[agent.id];

    if (backendUrl) {
      const sessionId = `ag1_${Date.now()}`;
      try {
        let response;
        if (agent.id === 'agent_002') {
          response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: 'pcd_agent_1',
              session_id: sessionId,
              text_input: currentInput
            })
          });
        } else {
          const formData = new FormData();
          formData.append('text_input', currentInput);
          if (currentFile) {
            formData.append('files', currentFile);
          }

          response = await fetch(backendUrl, {
            method: 'POST',
            body: formData,
          });
        }

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
      } finally {
        setIsLoading(false);
      }
    } else {
      // This block will now only be reached if an agent without a defined backend URL is used.
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        let responseText = `This is a mocked response for the ${agent.title} regarding "${currentInput}".`;
        if (currentFile) {
          responseText += ` And the file "${currentFile.name}".`;
        }
        responseText += " The real backend is not yet implemented.";
        const agentResponse: Message = { sender: 'agent', text: responseText };
        setMessages(prev => [...prev, agentResponse]);
      } catch (error) {
        console.error("Error with mocked response:", error);
        const errorResponse: Message = { sender: 'agent', text: 'Sorry, there was an error with the mocked response.' };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!agent) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={agent.capabilities.includes('image') && agent.capabilities.includes('pdf') ? "image/*,application/pdf" : agent.capabilities.includes('image') ? "image/*" : agent.capabilities.includes('pdf') ? "application/pdf" : ""}
      />
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col">
        <header className="flex items-center justify-between p-5 border-b bg-slate-50 rounded-t-2xl">
          <div className="flex items-center space-x-4">
             <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <agent.icon size={24} />
              </div>
            <h2 className="text-xl font-bold text-slate-800">{agent.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200">
            <X size={24} className="text-slate-600"/>
          </button>
        </header>

        <div ref={chatContainerRef} className="flex-1 p-8 space-y-6 overflow-y-auto bg-slate-100/50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`rounded-xl px-5 py-3 max-w-xl shadow-sm text-base ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-xl px-5 py-3 max-w-xl shadow-sm text-base bg-white text-slate-800">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t bg-white rounded-b-2xl">
          {file && (
            <div className="flex items-center justify-between mb-2 text-sm">
              <p className="text-slate-600">Attached file: {file.name}</p>
              <button onClick={() => setFile(null)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          )}
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 p-4 pr-32 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <div className="absolute right-16 flex items-center space-x-1">
              {agent.capabilities.includes('image') && (
                <button onClick={triggerFileInput} className="p-3 rounded-full hover:bg-slate-200 transition-colors">
                  <Paperclip size={22} className="text-slate-500" />
                </button>
              )}
              {agent.capabilities.includes('pdf') && (
                <button onClick={triggerFileInput} className="p-3 rounded-full hover:bg-slate-200 transition-colors">
                  <FileUp size={22} className="text-slate-500" />
                </button>
              )}
            </div>
             <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors" disabled={(!input.trim() && !file) || isLoading}>
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
