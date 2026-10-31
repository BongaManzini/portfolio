import React from 'react';
import { Github, GitPullRequest, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function GithubCTA() {
  // Generate mock contribution grid data: 7 days by 24 weeks = 168 cells
  const contributionGrid = Array.from({ length: 168 }, (_, index) => {
    // Randomize activity weight (0: empty, 1: low, 2: medium, 3: high)
    const random = Math.random();
    if (random < 0.3) return 0;
    if (random < 0.6) return 1;
    if (random < 0.85) return 2;
    return 3;
  });

  return (
    <section id="github-tracker" className="py-2.5 bg-transparent">
      <div className="w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950/80 p-5 overflow-hidden shadow-xl group"
          id="github-cta-banner-container"
        >
          {/* Visual Accents */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="space-y-4">
            
            {/* Header / Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800 text-cyan-400">
                  <Github size={16} />
                </div>
                <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
                  GITHUB ENGINE
                </span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                Integrating Systems via Immutable Commits
              </h3>
            </div>

            {/* Contribution Calendar Grid */}
            <div className="p-4 border border-slate-800/80 bg-slate-950/40 rounded-lg space-y-2">
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                <span className="flex items-center gap-1 uppercase">
                  <GitPullRequest size={9} className="text-purple-400" />
                  SECURE_COMMITS_FEED
                </span>
                <span>584 Contributions</span>
              </div>

              {/* Grid Box Container */}
              <div className="grid grid-flow-col grid-rows-7 gap-1 h-20 overflow-x-auto p-1 border border-slate-900 bg-slate-950/40 rounded" id="github-grid-scroller">
                {contributionGrid.map((level, i) => {
                  let bgClass = 'bg-slate-900';
                  if (level === 1) bgClass = 'bg-cyan-950/60';
                  else if (level === 2) bgClass = 'bg-cyan-800/40';
                  else if (level === 3) bgClass = 'bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.3)]';
                  
                  return (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-[1px] ${bgClass} transition-colors duration-150 hover:bg-cyan-300 hover:scale-125 cursor-pointer`}
                      title={`Value Weight: ${level}`}
                    />
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-[8px] font-mono text-slate-600">
                <span>Mon</span>
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-slate-900" />
                  <div className="w-1.5 h-1.5 bg-cyan-950/60" />
                  <div className="w-1.5 h-1.5 bg-cyan-800/40" />
                  <div className="w-1.5 h-1.5 bg-cyan-400/80" />
                </div>
                <span>Sun</span>
              </div>
            </div>

            {/* CLI Status line */}
            <div className="font-mono text-[9px] text-slate-500 space-y-0.5">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="text-cyan-500 select-none">&gt;</span>
                <span>Success. Webhooks bound safely. SSL/TLS OK.</span>
              </div>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] pt-1">
              <div className="p-2 border border-slate-900 bg-slate-950/50 rounded">
                <span className="block text-slate-500 text-[8px] uppercase">Commits</span>
                <span className="font-bold text-white">584+</span>
              </div>
              <div className="p-2 border border-slate-900 bg-slate-950/50 rounded">
                <span className="block text-slate-500 text-[8px] uppercase">Repos</span>
                <span className="font-bold text-cyan-400">14</span>
              </div>
              <div className="p-2 border border-slate-900 bg-slate-950/50 rounded">
                <span className="block text-slate-500 text-[8px] uppercase">Integrity</span>
                <span className="font-bold text-emerald-400">99.8%</span>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/BongaManzini"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded border border-slate-800 bg-slate-950 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider hover:border-slate-600 hover:text-white transition-all duration-200"
                id="github-visit-profile-btn"
              >
                <span>Connect with GitHub</span>
                <ArrowUpRight size={12} className="text-cyan-400" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
