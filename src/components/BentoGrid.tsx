import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Cpu, ShieldAlert, Database, Terminal, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function BentoGrid() {
  // Map string icon name to Lucide components safely
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu size={22} className="text-cyan-400" />;
      case 'ShieldAlert':
        return <ShieldAlert size={22} className="text-red-400" />;
      case 'Database':
        return <Database size={22} className="text-emerald-400" />;
      case 'Terminal':
        return <Terminal size={22} className="text-amber-400" />;
      default:
        return <Terminal size={22} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-8 px-2 bg-[#0b0f19] border-t border-slate-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-5 bg-cyan-400 rounded-full" />
            <h2 className="font-mono text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
              System Capabilities
            </h2>
          </div>
          <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Technical Pillars & Architecture
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="bento-grid-container">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ 
                type: 'spring', 
                stiffness: 70, 
                damping: 18, 
                mass: 1,
                delay: index * 0.08 
              }}
              className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40 p-4 sm:p-5 transition-all duration-300 ${category.spanClass} ${category.glowClass} group`}
              id={`bento-card-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {/* Card Corner Tech Decors */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-800/80 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-800/80 group-hover:border-cyan-400/30 transition-colors pointer-events-none" />

              {/* Background Accent Gradients */}
              <div className="absolute -inset-px bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none -z-10 rounded-xl" />

              {/* Icon and Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-400/40 transition-colors">
                  {getIcon(category.iconName)}
                </div>
                <span className="font-mono text-[9px] text-slate-600 group-hover:text-cyan-500/60 transition-colors tracking-widest select-none">
                  [ MODULE_0{index + 1} ]
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-sans mb-4">
                {category.title}
              </h3>

              {/* Tags Container */}
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-900 bg-slate-950 font-mono text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                  >
                    <CheckCircle size={10} className="text-cyan-400/40" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Decorative Bar */}
              <div className="mt-5 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-600">
                <span>COMPILER_V4.9</span>
                <span className="w-1/3 h-1 bg-slate-900 rounded-full overflow-hidden">
                  <span className="block h-full bg-cyan-400 w-2/3 group-hover:w-full transition-all duration-500" />
                </span>
                <span>SEC_VAL_TRUE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
