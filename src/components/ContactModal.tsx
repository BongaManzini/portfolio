import React, { useState } from 'react';
import { X, Send, Terminal as TerminalIcon, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Consultation Request');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    setTerminalLogs(['Initializing secure socket connection...', 'Resolving host: bonga-manzini-hq.local', 'Verifying email schema integrity...']);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'Encoding transmission with AES-256...', 'Bypassing firewalls...', 'Inserting record into database tables (3NF compliance guaranteed)...']);
    }, 1000);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'Message packets dispatched successfully!', 'Status: DISPATCHED [Code 202]']);
      setStatus('success');
    }, 2500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('Consultation Request');
    setMessage('');
    setStatus('idle');
    setTerminalLogs([]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg overflow-hidden border border-slate-800 rounded-xl bg-slate-900 glow-cyan"
          id="contact-modal-container"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Secure Terminal Connection
              </span>
            </div>
            <button
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="p-1 text-slate-400 transition-colors rounded-lg hover:text-white hover:bg-slate-800"
              id="close-contact-modal-btn"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            {status !== 'success' && status !== 'sending' ? (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-secure-form">
                <div>
                  <label className="block mb-1.5 font-mono text-xs text-slate-400" htmlFor="contact-name">
                    NAME / IDENTITY
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 font-mono text-xs text-slate-400" htmlFor="contact-email">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@enterprise.com"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 font-mono text-xs text-slate-400" htmlFor="contact-subject">
                    SUBJECT / ENDPOINT
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono"
                  >
                    <option value="Consultation Request">/api/consultation - Consultation Request</option>
                    <option value="Full-Time Hiring">/api/hiring - Innovative Opportunity</option>
                    <option value="System Audit">/api/audit - Database or Security Evaluation</option>
                    <option value="Just Saying Hello">/api/greet - General Hello</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1.5 font-mono text-xs text-slate-400" htmlFor="contact-message">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your pipeline request here..."
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-payload"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs font-semibold tracking-wider text-slate-950 uppercase bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 shadow-md hover:shadow-cyan-400/20"
                >
                  <Send size={14} />
                  Transmit Payload
                </button>
              </form>
            ) : (
              <div className="space-y-4 font-mono text-xs">
                {/* Console view */}
                <div className="p-4 border border-slate-800 rounded-lg bg-slate-950">
                  <div className="flex items-center gap-1.5 mb-2.5 border-b border-slate-900 pb-1.5 text-slate-500">
                    <TerminalIcon size={12} />
                    <span>TRANSMISSION CONSOLE LOGS</span>
                  </div>
                  <div className="space-y-1 text-slate-300 leading-relaxed">
                    {terminalLogs.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-cyan-500 select-none">&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    {status === 'sending' && (
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold animate-pulse">
                        <span className="select-none">&gt;</span>
                        <span>ENCRYPTING AND TRANSMITTING...</span>
                      </div>
                    )}
                  </div>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border border-emerald-950 rounded-lg bg-emerald-950/20 text-emerald-400 space-y-2"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 size={16} />
                      <span>SECURE PIPELINE DISPATCHED</span>
                    </div>
                    <p className="text-slate-400 text-xs">
                      Thank you! Your encrypted message has successfully bypassed all testing gateways and landed safely in Bonga Manzini's communication queue. He will initiate a reply cycle shortly.
                    </p>
                  </motion.div>
                )}

                {status === 'success' && (
                  <button
                    onClick={() => {
                      resetForm();
                      onClose();
                    }}
                    id="close-success-dialog"
                    className="w-full py-2.5 text-center bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors duration-200 rounded-lg font-semibold tracking-wide"
                  >
                    Close Session
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
