
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
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [sessionId] = useState(() => `ag1_${Date.now()}`);

  useEffect(() => {
    if (agent) {
      setMessages([
        { sender: 'agent', text: `Hello! I am the ${agent.title}. How can I help you today?` }
      ]);
      setInput('');
      setFiles([]);
    }
  }, [agent]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if ((!input.trim() && files.length === 0) || !agent) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    const currentFiles = files;
    setInput('');
    setFiles([]);
    setIsLoading(true);

    const agentBackendUrls: { [key: string]: string } = {
      'agent_001': 'https://www.lifelongcoach.org/genai/api/v1/pcd_tutor',
      'agent_002': 'https://www.lifelongcoach.org/genai/api/v1/pcd_mis',
      'agent_003': 'https://www.lifelongcoach.org/genai/api/v1/pcd_spro',
      'agent_004': 'https://www.lifelongcoach.org/genai/api/v1/pcd_iflow',
    };

    const backendUrl = agentBackendUrls[agent.id];

    if (backendUrl) {
      try {
        let response;
        if (agent.id === 'agent_002') {
          response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'X-User-Id': 'pcd_agent_1',
              'X-Session-Id': sessionId
            },
            body: JSON.stringify({
              text_input: currentInput
            })
          });
        } else {
          const formData = new FormData();
          formData.append('text_input', currentInput);
          currentFiles.forEach(file => {
            formData.append('files', file);
          });

          response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
              'X-User-Id': 'pcd_agent_1',
              'X-Session-Id': sessionId
            },
            body: formData,
          });
        }

        if (!response.ok) {
            if (response.status === 422) {
                const error = await response.json();
                console.error('Validation error:', error.detail);
                const errorResponse: Message = { sender: 'agent', text: 'There was a validation error. Please check your input.' };
                setMessages(prev => [...prev, errorResponse]);
            } else {
                 throw new Error('Network response was not ok');
            }
        } else {
            const data = await response.json();
            const agentResponse: Message = { sender: 'agent', text: data.response_text };
            setMessages(prev => [...prev, agentResponse]);
        }

      } catch (error) {
        console.error("Error communicating with the backend:", error);
        const errorResponse: Message = { sender: 'agent', text: 'Sorry, I am having trouble connecting to my brain right now.' };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Mocked response for agents without a backend
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        let responseText = `This is a mocked response for the ${agent.title} regarding "${currentInput}".`;
        if (currentFiles.length > 0) {
            responseText += ` And the files: ${currentFiles.map(f => f.name).join(', ')}.`;
        }
        responseText += " The real backend is not yet implemented.";
        const agentResponse: Message = { sender: 'agent', text: responseText };
        setMessages(prev => [...prev, agentResponse]);
      } catch (error) {
        console.error("Error with mocked response:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files as FileList)]);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!agent) return null;
  
  const supportsFiles = agent.id !== 'agent_002';

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.png,.jpg,.jpeg,.gif,.webp"
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
            {files.length > 0 && (
                <div className="mb-2 text-sm space-y-1">
                    <p className="font-medium text-slate-700">Attached files:</p>
                    <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                        <li key={index} className="text-slate-600 flex items-center justify-between">
                            <span>{file.name}</span>
                            <button onClick={() => removeFile(file.name)} className="text-red-500 hover:text-red-700 font-semibold">
                                Remove
                            </button>
                        </li>
                    ))}
                    </ul>
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
              {supportsFiles && (
                <button onClick={triggerFileInput} className="p-3 rounded-full hover:bg-slate-200 transition-colors">
                  <Paperclip size={22} className="text-slate-500" />
                </button>
              )}
            </div>
             <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors" disabled={(files.length === 0 && !input.trim()) || isLoading}>
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
