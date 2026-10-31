import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  Terminal, 
  Minimize2, 
  RefreshCw,
  User,
  Shield,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  "What is Bonga's role at Alteram Solutions?",
  "Tell me about the Alteram Chrome Extension Bonga built.",
  "What is Bonga's background at UNISA?",
  "Tell me about Bonga's 3NF SQL database experience.",
  "How can I contact or hire Bonga?"
];

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: "Hello! I am **Bonga's Virtual AI Assistant**. Ask me about Bonga Manzini's role as a **Developer at Alteram Solutions**, his Manifest V3 Chrome Extension, BSc Informatics degree at UNISA, cybersecurity projects, or 3NF database designs!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // System context for Gemini or fallback engine
  const portfolioKnowledgeContext = `
You are the official AI assistant representing Bonga Manzini on his personal portfolio website.
Bonga Manzini details:
- Current Role: Software Developer at Alteram Solutions (2024 - Present), building enterprise full-stack web applications, Manifest V3 Chrome Extensions, and operations dashboards.
- Academic background: BSc in Informatics student at University of South Africa (UNISA), focus on systems analysis, database design (3NF), software architecture.
- Leadership role: DSG Core Lead at UNISA Developer Society (UDS), technical mentor for distance-learning student cohorts.
- Technical Pillars: Software & AI (TypeScript, React, Python, C++, C#, Gemini API, Prompt Engineering), Chrome Extensions (Manifest V3, Service Workers, Side Panel UI), Cybersecurity & IT Admin (Active Directory, syslog auditing, subnet threat monitoring, safe pentesting), Databases & Analytics (SQL, 3rd Normal Form (3NF) Database Design, data dashboards).
- Projects built:
  1. Alteram Workflow & Automation Chrome Extension (Work project @ Alteram Solutions, Manifest V3, Side Panel, TypeScript)
  2. Alteram Enterprise Operations Dashboard (Work project @ Alteram Solutions, React, Node.js, REST APIs)
  3. AI-Powered Note Summarizer & Chatbot (Python, Gemini 2.5 API, YouTube transcripts)
  4. Simple Penetration-Testing Practice Suite (Python, AD subnet monitor, brute-force lockout)
  5. Personal Budgeting & Expense Manager (React, SQL 3NF database)
  6. Secure Authentication & User Management Core (Java, PHP, PBKDF2 SHA-256 salted hashes, JWT)
  7. UNISA Informatics Hackathon Dashboard (React, SQL, Recharts)
  8. Log Cleaner & Security Watchdog (Python daemon, Linux cron)
  9. UNISA DSG Active Directory Auditor (Python subnet scanner)
  10. Relational SQL Ledger for Pretoria Merchants (Offline SQLite + PostgreSQL)
- Certifications: NVIDIA DLI (LLM Prompt Engineering), CompTIA Security+, AWS CCP, NQF Level 5 Technician, LPI Linux Essentials, Microsoft AZ-204 (In Progress), Google IT Support.
- Contact: bongamanzini955@gmail.com, Johannesburg/Pretoria South Africa, https://github.com/BongaManzini, https://www.linkedin.com/in/bonga-manzini/
Be polite, professional, concise, encouraging, and highlight Bonga's strong technical skills!
`;

  const getAIResponse = async (userQuery: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${portfolioKnowledgeContext}\n\nUser Question: ${userQuery}` }] }
          ]
        });
        if (response && response.text) {
          return response.text;
        }
      } catch (err) {
        console.warn('Gemini API call fallback to knowledge engine:', err);
      }
    }

    // Local Intelligent Response Engine Fallback
    const q = userQuery.toLowerCase();

    if (q.includes('alteram') || q.includes('work') || q.includes('extension') || q.includes('manifest')) {
      return "Bonga is currently a **Software Developer at Alteram Solutions**! At Alteram, he has engineered production **Manifest V3 Chrome Extensions** featuring side panel UI workflows, service worker automations, and client portal tools, as well as real-time **Enterprise Operations Dashboards** built with React, TypeScript, and REST APIs.";
    }

    if (q.includes('unisa') || q.includes('degree') || q.includes('academic') || q.includes('education') || q.includes('informatics')) {
      return "Bonga is completing his **BSc in Informatics** at the **University of South Africa (UNISA)**. His studies cover advanced systems design, enterprise architecture, database optimization, and software design patterns. He also serves as the **DSG Core Lead** at the UNISA Developer Society (UDS), mentoring 150+ fellow Informatics students!";
    }

    if (q.includes('3nf') || q.includes('database') || q.includes('sql') || q.includes('schema') || q.includes('ledger')) {
      return "Bonga is a strong advocate for **3rd Normal Form (3NF) Database Normalization**. He has engineered multiple production-ready SQL schemas (such as the *Relational SQL Ledger for Pretoria Merchants* and *Personal Budgeting Manager*) that eliminate redundant columns, enforce foreign key integrity, and guarantee zero data anomalies.";
    }

    if (q.includes('cyber') || q.includes('security') || q.includes('pentest') || q.includes('active directory') || q.includes('ad')) {
      return "In Cybersecurity, Bonga focuses on proactive defense and systems administration. He built the *Simple Penetration-Testing Practice Suite* and *UNISA DSG Active Directory Auditor*, featuring automated syslog parsers, multi-threaded port mapping, and brute-force IP lockout hooks for Active Directory subnets.";
    }

    if (q.includes('ai') || q.includes('llm') || q.includes('prompt') || q.includes('summariz')) {
      return "Bonga is certified by the **NVIDIA Deep Learning Institute** in *Building LLM Applications with Prompt Engineering*. He built the *AI-Powered Note Summarizer & Chatbot* using Google Gemini API to extract and summarize YouTube video transcripts and CS study notes using strict prompt guardrails.";
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('linkedin')) {
      return "You can reach Bonga directly via email at **bongamanzini955@gmail.com** or connect with him on LinkedIn at [linkedin.com/in/bonga-manzini](https://www.linkedin.com/in/bonga-manzini/). You can also click the **Get In Touch** button in the header or footer to send an encrypted message!";
    }

    if (q.includes('project') || q.includes('built') || q.includes('github') || q.includes('repo')) {
      return "Bonga has built 8 featured open-source repositories spanning AI Chatbots, Security Watchdogs, 3NF SQL Ledgers, and Hackathon Analytics Dashboards. You can explore all of them in the **Engineering Showcase** section or visit his GitHub at [github.com/BongaManzini](https://github.com/BongaManzini)!";
    }

    return "Bonga Manzini is a Systems & Solutions Developer, UNISA Informatics student, and DSG Core Lead at UDS. He specializes in **Software & AI**, **Cybersecurity**, and **3NF Database Normalization**. Is there a specific project, skill, or credential you would like to know more about?";
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    const aiReplyText = await getAIResponse(messageText);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 rounded-full shadow-2xl glow-cyan border border-cyan-400/40 font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
          id="ai-assistant-toggle-btn"
        >
          <div className="relative">
            <Bot size={18} className="text-slate-950" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
          </div>
          <span className="hidden sm:inline">Ask Bonga's AI ⚡</span>
        </motion.button>
      </div>

      {/* Slide-Out Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] h-[80vh] border border-slate-800 rounded-2xl bg-slate-950 shadow-2xl overflow-hidden flex flex-col glow-cyan"
            id="ai-assistant-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                    Bonga's AI Assistant
                    <Sparkles size={11} className="text-cyan-400 animate-pulse" />
                  </h3>
                  <p className="font-mono text-[9px] text-slate-400">Powered by Gemini & Portfolio KB</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                id="close-ai-drawer-btn"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message History Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={12} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-xl font-sans text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <span
                      className={`block font-mono text-[8px] mt-1 text-right ${
                        msg.sender === 'user' ? 'text-slate-900/70' : 'text-slate-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-slate-400 font-mono text-[10px]">
                  <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-slate-950 border-t border-slate-900 overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-[9.5px] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2 shrink-0"
              id="ai-assistant-input-form"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Bonga's work, degree, or SQL..."
                className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-cyan-500"
                id="ai-assistant-text-input"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                id="ai-assistant-send-btn"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
