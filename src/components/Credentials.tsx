import React, { useState } from 'react';
import { CERTIFICATIONS, EDUCATION, JOB_EXPERIENCES, HACKATHONS } from '../data';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  Clock, 
  CheckCircle2,
  Briefcase,
  Trophy,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'work' | 'hackathons' | 'academics' | 'certs';

export default function Credentials() {
  const [activeTab, setActiveTab] = useState<TabType>('work');

  const tabs = [
    { id: 'work' as TabType, label: 'Experience', icon: Briefcase },
    { id: 'hackathons' as TabType, label: 'Hackathons', icon: Trophy },
    { id: 'academics' as TabType, label: 'Academics', icon: GraduationCap },
    { id: 'certs' as TabType, label: 'Certs', icon: Award },
  ];

  return (
    <section id="credentials" className="py-2.5 bg-transparent">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h2 className="font-mono text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
              Qualifications Check
            </h2>
          </div>
          <p className="text-xl font-extrabold text-white tracking-tight">
            Credentials & Experience
          </p>
        </div>

        {/* High-Fidelity Tab Selector */}
        <div className="flex p-1 rounded-lg bg-slate-950/60 border border-slate-900/60 mb-5" id="credentials-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                  isActive 
                    ? 'text-cyan-400' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                id={`tab-btn-${tab.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-cyan-400/5 border border-cyan-400/20 rounded-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={12} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[280px] max-h-[480px] overflow-y-auto pr-1.5 space-y-1" id="credentials-tab-content" style={{ scrollbarWidth: 'thin' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'work' && (
              <motion.div
                key="work-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {JOB_EXPERIENCES.map((job, idx) => (
                  <div
                    key={job.role}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 relative overflow-hidden group hover:border-cyan-400/20 transition-all duration-300"
                    id={`job-card-${idx}`}
                  >
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-slate-800 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[9px]">
                        <Calendar size={10} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 font-mono text-[9px]">
                        <MapPin size={10} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight font-sans">
                      {job.role}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {job.company}
                    </p>

                    <p className="mt-2.5 text-slate-400 text-xs leading-relaxed font-sans">
                      {job.description}
                    </p>

                    {/* Highlights list */}
                    <div className="mt-3.5 space-y-1.5 border-t border-slate-900/60 pt-3">
                      {job.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 font-sans text-xs text-slate-300">
                          <CheckCircle2 size={11} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    {job.tags && (
                      <div className="flex flex-wrap gap-1 mt-3.5 pt-3 border-t border-slate-900/40">
                        {job.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-1.5 py-0.5 rounded bg-slate-900/50 border border-slate-800 text-slate-400 font-mono text-[8px] tracking-wide uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'hackathons' && (
              <motion.div
                key="hackathons-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-1 p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/20">
                  <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                  <p className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    "Always at a Hackathon" Streak Active
                  </p>
                </div>

                {HACKATHONS.map((hack, idx) => (
                  <div
                    key={hack.event}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 relative overflow-hidden group hover:border-cyan-400/20 transition-all duration-300"
                    id={`hackathon-card-${idx}`}
                  >
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-slate-800 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
                    
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-900/30 font-mono text-[8px] font-bold uppercase tracking-wider text-cyan-400">
                        <Trophy size={10} className="text-amber-400 shrink-0" />
                        {hack.achievement}
                      </span>
                      <span className="font-mono text-[9px] text-slate-500">
                        {hack.year}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight font-sans">
                      {hack.event}
                    </h4>
                    
                    <div className="flex items-center gap-1.5 mt-1 text-slate-300 font-mono text-[10px]">
                      <ArrowRight size={10} className="text-cyan-400" />
                      <span>Project: <strong className="text-white font-medium">{hack.project}</strong></span>
                    </div>

                    <p className="mt-2.5 text-slate-400 text-xs leading-relaxed font-sans">
                      {hack.description}
                    </p>

                    {/* Hackathon Tech stack tags */}
                    {hack.tags && (
                      <div className="flex flex-wrap gap-1 mt-3.5 pt-3 border-t border-slate-900/40">
                        {hack.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-1.5 py-0.5 rounded bg-slate-900/50 border border-slate-800 text-slate-400 font-mono text-[8px] tracking-wide uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'academics' && (
              <motion.div
                key="academics-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 relative overflow-hidden group hover:border-cyan-400/20 transition-all duration-300"
                  id="education-unisacard"
                >
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-slate-800 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
                  
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] mb-2">
                    <Calendar size={11} />
                    <span>UNISA • ACTIVE ALUMNUS</span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight font-sans">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    {EDUCATION.institution}
                  </p>

                  <p className="mt-3 text-slate-400 text-xs leading-relaxed font-sans">
                    {EDUCATION.focus}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-900/60 space-y-2">
                    <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">
                      Core Theoretical Modules:
                    </span>
                    <div className="grid grid-cols-1 gap-1.5 font-mono text-[11px] text-slate-300 mb-4">
                      {EDUCATION.keyCourses.map((course) => (
                        <div key={course} className="flex items-start gap-1.5">
                          <BookOpen size={11} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DSG at UDS highlight inside academics */}
                  <div className="mt-4 pt-4 border-t border-slate-900/60">
                    <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1.5">
                      Co-curricular Leadership:
                    </span>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/40 font-sans text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-cyan-400 font-bold mb-1">
                        <Sparkles size={10} className="text-cyan-400 shrink-0" />
                        <span>DEVELOPER STUDENT GROUP (DSG) AT UDS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Spearheading peer-to-peer technical mentoring, SQL normalizing schemas, and facilitating cybersecurity labs for fellow Informatics student cohorts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'certs' && (
              <motion.div
                key="certs-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 gap-3"
              >
                {CERTIFICATIONS.map((cert, idx) => {
                  const isInProgress = cert.status === 'In Progress';
                  return (
                    <div
                      key={cert.title}
                      className={`p-4 rounded-xl border bg-slate-950/40 relative overflow-hidden group transition-all duration-300 ${
                        isInProgress 
                          ? 'border-slate-800 hover:border-amber-500/20' 
                          : 'border-slate-800 hover:border-cyan-400/20'
                      }`}
                      id={`cert-card-${idx}`}
                    >
                      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-slate-800 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                          {isInProgress ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-900/30 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">
                              <Clock size={9} />
                              In Progress
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/30 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                              <CheckCircle2 size={9} />
                              Certified
                            </span>
                          )}
                          <span className="font-mono text-[9px] text-slate-600">
                            {cert.badge}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-sans pt-1">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          Issued by: <span className="font-mono text-[10px] text-slate-300">{cert.issuer}</span>
                        </p>

                        {!isInProgress && cert.date && (
                          <div className="font-mono text-[9px] text-slate-500 mt-1">
                            ISSUED: YEAR {cert.date}
                          </div>
                        )}

                        {isInProgress && (
                          <div className="space-y-1.5 font-mono mt-2 pt-2 border-t border-slate-900/60">
                            <div className="flex justify-between text-[9px]">
                              <span className="text-slate-500">MAPPED COMPONENT:</span>
                              <span className="text-amber-400 font-bold">85%</span>
                            </div>
                            <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 w-[85%] animate-pulse" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

