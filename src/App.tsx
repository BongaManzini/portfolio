import { useState } from 'react';

interface Project {
  title: string;
  category: 'AI & ML' | 'Web Apps' | 'Security & Systems' | 'Browser Extensions';
  description: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  highlight?: string;
  deployment?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'SkyApp – AR Celestial Planetarium',
    category: 'Web Apps',
    description: 'Mobile-first 3D celestial star map with live camera augmented reality overlay, sidereal time astronomical engine, constellation outlines, and offline PWA capability.',
    tags: ['HTML5 Canvas', 'Astronomy Algorithms', 'Camera AR', 'PWA', 'JavaScript'],
    github: 'https://github.com/BongaManzini/sky-app',
    liveUrl: 'https://bongamanzini.github.io/sky-app/',
    highlight: 'Live on GitHub Pages',
    deployment: 'GitHub Pages & Netlify'
  },
  {
    title: 'FocusFlux – ADHD & Mental Wellness',
    category: 'Web Apps',
    description: 'Comprehensive ADHD and mental wellness ecosystem featuring 8 cognitive training games, sensory grounding exercises, AI-powered emotional support, and clinical reporting.',
    tags: ['React 19', 'TypeScript', 'Google Gemini AI', 'Firebase', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/BongaManzini/focusflux',
    liveUrl: 'https://bongamanzini.github.io/focusflux/',
    highlight: 'Full-Stack Wellness App',
    deployment: 'GitHub Pages & Vercel'
  },
  {
    title: 'June 16 – Soweto Memorial Experience',
    category: 'Web Apps',
    description: 'Interactive 3D digital memorial honoring the 1976 Soweto Uprising and South African Youth Day, blending spatial WebGL scenes, historical timelines, and curated archival galleries.',
    tags: ['React', 'Three.js', '@react-three/fiber', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/BongaManzini/june16-memorial-site',
    liveUrl: 'https://bongamanzini.github.io/june16-memorial-site/',
    highlight: '3D Spatial Web Experience',
    deployment: 'GitHub Pages & Vercel'
  },
  {
    title: 'Master Planner Pro – Brutalist Dashboard',
    category: 'Web Apps',
    description: 'Neo-brutalist daily productivity dashboard with interactive multi-month calendar, hourly time-blocking schedule, goal modal workflows, and persistent local storage.',
    tags: ['Alpine.js', 'Tailwind CSS', 'Brutalist UI', 'LocalStorage'],
    github: 'https://github.com/BongaManzini/master-planner-pro',
    liveUrl: 'https://bongamanzini.github.io/master-planner-pro/',
    highlight: 'Live on GitHub Pages',
    deployment: 'GitHub Pages & Netlify'
  },
  {
    title: 'UNISA Nexus Hub',
    category: 'Web Apps',
    description: 'Modern, accessible campus resource portal engineered for University of South Africa students, featuring timetable synchronizers, study hubs, and course utilities.',
    tags: ['React', 'TypeScript', 'Vite', 'Shadcn UI', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com/BongaManzini/unisa-nexus-hub',
    liveUrl: 'https://bongamanzini.github.io/unisa-nexus-hub/',
    highlight: 'Student Utility Platform',
    deployment: 'GitHub Pages & Vercel'
  },
  {
    title: 'UbuntuSec Awareness Platform',
    category: 'Security & Systems',
    description: 'Gamified African cybersecurity education platform anchored in the Ubuntu philosophy ("I am because we are"), featuring interactive cyber threat defense mini-games.',
    tags: ['HTML5', 'Interactive Canvas', 'Lucide Icons', 'Community Cybersec'],
    github: 'https://github.com/BongaManzini/ubuntu-sec',
    liveUrl: 'https://bongamanzini.github.io/ubuntu-sec/',
    highlight: 'Gamified Security Education',
    deployment: 'GitHub Pages & Netlify'
  },
  {
    title: 'DeepSentryAI',
    category: 'Security & Systems',
    description: 'Real-time call center defense platform detecting deepfake audio, manipulated video feeds, and anomalous network activity with sub-second latency.',
    tags: ['Python', 'OpenCV', 'AsyncIO', 'Audio DSP', 'Tailwind CSS'],
    github: 'https://github.com/BongaManzini/deep-sentry-ai',
    highlight: 'Deepfake Voice & Video Defense',
    deployment: 'Python Backend'
  },
  {
    title: 'ByteCraft – Student Risk Predictor',
    category: 'AI & ML',
    description: 'Higher-education analytics platform leveraging Random Forest classification to forecast student dropout vulnerabilities and empower faculty with actionable academic intervention insights.',
    tags: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Data Science'],
    github: 'https://github.com/BongaManzini/bytecraft-student-risk',
    highlight: 'Predictive ML & Decision Analytics',
    deployment: 'Vercel Serverless / Flask'
  },
  {
    title: 'Self-Healing Network System',
    category: 'Security & Systems',
    description: 'Autonomous AI-powered network defense infrastructure that monitors traffic in real-time, classifies threats (MITM, DNS attacks, port scans), and executes instant policy remediation.',
    tags: ['Python', 'Flask', 'Machine Learning', 'Network Security', 'Firewall Automation'],
    github: 'https://github.com/BongaManzini/self-healing-network',
    highlight: 'Autonomous Zero-Touch Defense',
    deployment: 'Python Daemon & Web'
  },
  {
    title: 'ImageSense – OCR to Excel Pipeline',
    category: 'AI & ML',
    description: 'Automated data extraction pipeline transforming document scans and invoices into clean, structured Excel spreadsheets via computer vision and optical character recognition.',
    tags: ['Python', 'Flask', 'Tesseract OCR', 'OpenPyXL', 'Poppler'],
    github: 'https://github.com/BongaManzini/imagesense-ocr',
    highlight: 'Document Vision & Data Automation',
    deployment: 'Vercel Serverless / Flask'
  },
  {
    title: 'DevDesk Pro & IT Support Hub',
    category: 'Browser Extensions',
    description: 'High-speed Manifest V3 browser extension suite automating service desk workflows: DOM macro click-recording, batch ticket clearance, Telviva unlockers, and QueueMetrics scraping.',
    tags: ['Chrome Extension MV3', 'Service Workers', 'DOM Automation', 'JavaScript'],
    github: 'https://github.com/BongaManzini/devdesk-pro',
    highlight: 'High-Velocity Support Automation',
    deployment: 'Chrome Web Store / MV3'
  },
  {
    title: 'Cybersecurity Threat Dashboard',
    category: 'Security & Systems',
    description: 'Interactive threat intelligence dashboard analyzing network attack vectors, DDoS patterns, and malware telemetry across 40,000+ incident logs using Jupyter and Voilà.',
    tags: ['Jupyter', 'Voilà', 'Pandas', 'Seaborn', 'Plotly'],
    github: 'https://github.com/BongaManzini/cybersecurity-threat-dashboard',
    highlight: 'Threat Intelligence Analytics',
    deployment: 'Jupyter & Voilà'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web Apps', 'AI & ML', 'Security & Systems', 'Browser Extensions'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-15%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Navigation / Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-cyan-500/20">
              BM
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white block">Bonga Manzini</span>
              <span className="text-xs text-slate-400 font-mono">Software Engineer • AI & Security</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium">
            <a 
              href="https://github.com/BongaManzini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-300 hover:text-white transition-all hover:bg-slate-800/80"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Profile</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Building intelligent software & resilient architectures
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering robust systems from <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">AI models</span> to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">interactive web apps</span>.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            I craft full-stack web applications, real-time AI security platforms, machine learning analytics engines, and high-velocity workflow automation suites.
          </p>
        </section>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-400 font-mono">
            Showing {filteredProjects.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-cyan-400">
                    {project.category}
                  </span>
                  {project.deployment && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">
                      {project.deployment}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                      Live Demo
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Technical Competencies */}
        <section className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8">Technical Proficiencies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3">Languages</h4>
              <p className="text-sm text-slate-300 leading-relaxed">TypeScript, JavaScript, Python, Go, C++, HTML5/CSS3</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-xs font-mono uppercase text-indigo-400 font-semibold mb-3">Frameworks</h4>
              <p className="text-sm text-slate-300 leading-relaxed">React 19, Vite, Flask, Chi, Three.js, Tailwind CSS</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-xs font-mono uppercase text-purple-400 font-semibold mb-3">AI & Security</h4>
              <p className="text-sm text-slate-300 leading-relaxed">Gemini API, scikit-learn, OpenCV, Audio DSP, Network IDS</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-3">Cloud & DevOps</h4>
              <p className="text-sm text-slate-300 leading-relaxed">GitHub Pages, Vercel, Netlify, Chrome MV3, Linux</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Bonga Manzini. All rights reserved.</p>
          <p>Hosted on GitHub Pages & Vercel</p>
        </footer>
      </div>
    </div>
  );
}
