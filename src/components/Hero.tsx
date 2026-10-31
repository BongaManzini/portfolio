import React, { useState } from 'react';
import { ChevronRight, Binary, Linkedin, Terminal, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenCV: () => void;
  onExploreProjects: () => void;
}

export default function Hero({ onOpenCV, onExploreProjects }: HeroProps) {
  const [imgSrc, setImgSrc] = useState('https://github.com/BongaManzini.png');
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  const handleImageError = () => {
    if (fallbackAttempt === 0) {
      setImgSrc('https://avatars.githubusercontent.com/u/104273516?v=4'); // direct Github CDN avatar link as fallback
      setFallbackAttempt(1);
    } else if (fallbackAttempt === 1) {
      setImgSrc('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop'); // standard fallback
      setFallbackAttempt(2);
    }
  };

  return (
    <section
      id="home"
      className="relative rounded-xl border border-slate-800/80 bg-slate-900/10 overflow-hidden py-10 px-6 sm:px-8"
    >
      {/* Absolute Ambient Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      
      {/* Decorative cyber elements */}
      <div className="absolute top-3 left-4 text-slate-700 font-mono text-[9px] select-none tracking-widest hidden sm:block">
        SYS_STATUS: OPERATIONAL &bull; LATENCY: &lt;1ms
      </div>
      <div className="absolute top-3 right-4 text-slate-700 font-mono text-[9px] select-none tracking-widest text-right hidden sm:block">
        PORTFOLIO_V2.6.7 &bull; AD_BOUND
      </div>

      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headline and Actions */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-cyan-500/20 bg-slate-950/80 rounded-full mb-6 font-mono text-[10px] text-slate-300 shadow-md glow-cyan"
            id="hero-status-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-cyan-300">Software Developer @ Alteram Solutions</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">UNISA Informatics Student</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 mb-3 font-mono text-xs"
            id="hero-intro-credentials"
          >
            <span className="font-extrabold text-white tracking-wide uppercase text-sm">Bonga Manzini</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider bg-cyan-400/10 px-2.5 py-0.5 rounded border border-cyan-400/20">Developer @ Alteram Solutions</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400 font-medium text-[11px]">DSG Core Lead @ UDS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-xl leading-tight"
            id="hero-headline"
          >
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
              Modern Enterprise Web Apps, Chrome Extensions
            </span>{' '}
            & Scalable Systems.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-sans"
            id="hero-subheadline"
          >
            Software Developer at <strong>Alteram Solutions</strong> and BSc Informatics Student at <strong>UNISA</strong>. DSG Core Lead at UNISA Developer Society (UDS). Building enterprise full-stack web applications, Manifest V3 Chrome Extensions, 3NF database ledgers, AI prompt pipelines, and proactive cybersecurity suites.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start w-full sm:w-auto"
            id="hero-ctas"
          >
            <button
              onClick={onExploreProjects}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-cyan-500/25 glow-cyan"
              id="hero-explore-projects-btn"
            >
              Explore Projects
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCV}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:border-slate-700 hover:text-white transition-all duration-300"
              id="hero-download-cv-btn"
            >
              Download CV
              <Binary size={13} className="text-cyan-400" />
            </button>

            <a
              href="https://github.com/BongaManzini"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:border-slate-700 hover:text-white transition-all duration-300"
              id="hero-github-btn"
            >
              GitHub
              <Terminal size={13} className="text-cyan-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/bonga-manzini/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:border-slate-700 hover:text-white transition-all duration-300"
              id="hero-linkedin-btn"
            >
              LinkedIn
              <Linkedin size={13} className="text-cyan-400" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Styled Profile Image Card (Aahana Bobade Inspired) */}
        <div className="md:col-span-5 flex justify-center items-center w-full mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative group w-full max-w-[280px] sm:max-w-[310px] aspect-[3/4]"
          >
            {/* Ambient pulsing card shadow glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Cybernetic Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 z-10" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 z-10" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 z-10" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 z-10" />

            {/* Core Card Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/80 transition-all duration-300 group-hover:border-cyan-500/40 flex flex-col justify-between">
              
              {/* Technical overhead header banner */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-900 bg-slate-950/80 font-mono text-[8px] text-slate-500">
                <span className="flex items-center gap-1.5 uppercase">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                  Bonga_Informatics.sys
                </span>
                <span>SECURE_SRC</span>
              </div>

              {/* Styled portrait frame */}
              <div className="flex-1 overflow-hidden relative bg-slate-900/10 flex items-center justify-center">
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  alt="Bonga Manzini Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-750 ease-out"
                />
                
                {/* Cybersecurity laser scanline filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/8 to-transparent h-1/2 w-full -translate-y-full animate-scan pointer-events-none" />
                
                {/* Modern studio gradient shadow vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom status metadata banner */}
              <div className="px-3 py-1.5 border-t border-slate-900 bg-slate-950/80 font-mono text-[8px] text-slate-400 flex justify-between items-center">
                <span>COORD: S_26.2044 E_28.0479</span>
                <span className="text-cyan-400 font-bold uppercase">UNISA.INFS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

