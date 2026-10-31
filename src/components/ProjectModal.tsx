import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  Play, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  FileCode, 
  Cpu, 
  Database, 
  Shield, 
  Star, 
  GitCommit,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchSandbox: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onLaunchSandbox }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'readme'>('architecture');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl border border-slate-800 rounded-2xl bg-slate-900 shadow-2xl overflow-hidden my-8 glow-cyan"
          id="project-detail-modal"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                PROJECT_SPEC // {project.id.toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 transition-colors rounded-lg hover:text-white hover:bg-slate-800 cursor-pointer"
              id="close-project-modal-btn"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Header Banner */}
          <div className="p-6 md:p-8 border-b border-slate-800/80 bg-slate-950/40">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 font-bold"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                {project.stars !== undefined && (
                  <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                    <Star size={11} className="text-amber-400 fill-amber-400/20" />
                    <span>{project.stars} stars</span>
                  </span>
                )}
                {project.commits !== undefined && (
                  <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                    <GitCommit size={11} className="text-cyan-400" />
                    <span>{project.commits} commits</span>
                  </span>
                )}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-sans">
              {project.longDescription || project.description}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-slate-800/60 font-mono text-xs">
              <button
                onClick={() => {
                  onClose();
                  onLaunchSandbox(project);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                id="modal-launch-sandbox-btn"
              >
                <Play size={14} className="fill-current" />
                <span>Launch Interactive Sandbox</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-600 rounded-lg transition-all"
                id="modal-github-repo-btn"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-2">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-2 font-mono text-xs uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
              id="project-modal-tab-arch"
            >
              <Layers size={13} />
              <span>System Architecture & Specs</span>
            </button>
            <button
              onClick={() => setActiveTab('readme')}
              className={`flex-1 py-2 font-mono text-xs uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'readme'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
              id="project-modal-tab-readme"
            >
              <FileCode size={13} />
              <span>README.md Documentation</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] scrollbar-thin">
            {activeTab === 'architecture' ? (
              <div className="space-y-6">
                {/* Tech Specs Grid */}
                <div>
                  <h3 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal size={14} />
                    <span>Technical Specifications</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.specs.map((spec) => (
                      <div key={spec.label} className="p-3 border border-slate-800 bg-slate-950/60 rounded-lg flex justify-between items-center font-mono text-xs">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="text-white font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Architecture Highlights */}
                {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                  <div>
                    <h3 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles size={14} />
                      <span>{project.architectureTitle || 'Architecture Highlights'}</span>
                    </h3>
                    <div className="space-y-2">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <div key={idx} className="p-3 border border-slate-800/80 bg-slate-950/40 rounded-lg flex items-start gap-2.5 font-sans text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Learnings */}
                {project.keyLearnings && project.keyLearnings.length > 0 && (
                  <div>
                    <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Engineering Takeaways & Lessons
                    </h3>
                    <div className="p-4 border border-slate-800/60 bg-slate-950/30 rounded-lg space-y-2 font-sans text-xs text-slate-400">
                      {project.keyLearnings.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-mono font-bold">&bull;</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div>
                  <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="markdown-body select-text cursor-auto">
                <Markdown>{project.readme || ''}</Markdown>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
