import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Terminal, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickMessage) return;
    setSent(true);
    setTimeout(() => {
      setQuickEmail('');
      setQuickMessage('');
      setSent(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="py-2.5 bg-transparent">
      <div className="w-full space-y-4">
        
        {/* Connection Widget */}
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4 shadow-lg">
          <div className="flex items-center gap-2 font-mono">
            <Terminal size={16} className="text-cyan-400" />
            <span className="text-xs font-extrabold text-white">
              &lt; <span className="text-cyan-400">Bonga Manzini</span> /&gt;
            </span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed font-sans">
            Systems & Solutions Developer bridging software engineering, database normalization, artificial intelligence, and proactive cybersecurity. Let's optimize together.
          </p>

          <div className="space-y-2.5 font-mono text-xs border-t border-slate-900/60 pt-3">
            <div className="flex items-center gap-2 text-slate-300">
              <Mail size={13} className="text-cyan-400" />
              <a href="mailto:bongamanzini955@gmail.com" className="hover:text-cyan-400 transition-colors text-[11px]">
                bongamanzini955@gmail.com
              </a>
            </div>
          </div>

          {/* Transmitter Form */}
          <div className="space-y-3 pt-1">
            <span className="block font-mono text-[9px] text-cyan-400 uppercase tracking-widest">
              QUICK_SIGNAL_TRANSMITTER
            </span>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 border border-emerald-950 bg-emerald-950/20 text-emerald-400 rounded-lg space-y-1 font-mono text-[11px]"
              >
                <div className="flex items-center gap-1 font-bold">
                  <CheckCircle size={12} />
                  <span>DISPATCHED</span>
                </div>
                <p className="text-slate-400 text-[10px]">
                  Signal package successfully pushed to queue.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-2" id="footer-quick-form">
                <div>
                  <input
                    type="email"
                    required
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-1.5 text-xs rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    id="footer-quick-email"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="Transmit quick query..."
                    className="flex-1 px-3 py-1.5 text-xs rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    id="footer-quick-message"
                  />
                  <button
                    type="submit"
                    className="px-3 bg-cyan-400 text-slate-950 rounded hover:bg-cyan-300 transition-colors font-mono text-xs font-bold"
                    id="footer-quick-submit"
                  >
                    <Send size={11} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-between border-t border-slate-900/60 pt-3">
            <div className="flex gap-2">
              <a
                href="https://github.com/BongaManzini"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-600 rounded transition-all"
                title="GitHub Link"
                id="footer-github-link"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/bonga-manzini/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-600 rounded transition-all"
                title="LinkedIn Link"
                id="footer-linkedin-link"
              >
                <Linkedin size={14} />
              </a>
            </div>

            <button 
              onClick={onOpenContact} 
              className="text-xs font-mono text-cyan-500 hover:underline"
            >
              ENCRYPTED_GATEWAY
            </button>
          </div>
        </div>

        {/* Copyright info */}
        <div className="text-center font-mono text-[10px] text-slate-600 space-y-1">
          <div>
            &copy; {new Date().getFullYear()} Bonga Manzini. All rights reserved.
          </div>
          <div>
            SYSTEM_HOST: LOCAL_STATIC &bull; TLS Key Rotate Active
          </div>
        </div>

      </div>
    </footer>
  );
}
