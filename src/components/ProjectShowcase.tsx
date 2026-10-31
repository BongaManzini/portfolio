import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  Github, 
  ExternalLink, 
  Terminal, 
  Shield, 
  Check, 
  Play, 
  AlertTriangle, 
  ShieldCheck, 
  RefreshCw, 
  Layers, 
  Database, 
  Cpu, 
  Plus,
  Atom,
  Lock,
  Coffee,
  Binary,
  FileCode,
  Brain,
  BarChart3,
  Network,
  Star,
  GitCommit,
  Search,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const getTechIcon = (tag: string) => {
  const normalized = tag.toLowerCase();
  if (normalized.includes('python')) return <Binary size={12} className="text-slate-400 group-hover:text-[#E2B714] transition-colors" />;
  if (normalized.includes('sql') || normalized.includes('database')) return <Database size={12} className="text-slate-400 group-hover:text-[#41B883] transition-colors" />;
  if (normalized.includes('react') || normalized.includes('atom')) return <Atom size={12} className="text-slate-400 group-hover:text-sky-400 transition-colors animate-spin-slow" />;
  if (normalized.includes('security') || normalized.includes('auth') || normalized.includes('cryptography') || normalized.includes('pentest') || normalized.includes('lockout')) return <Lock size={12} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />;
  if (normalized.includes('java') && !normalized.includes('script')) return <Coffee size={12} className="text-slate-400 group-hover:text-orange-500 transition-colors" />;
  if (normalized.includes('php') || normalized.includes('javascript') || normalized.includes('script')) return <FileCode size={12} className="text-slate-400 group-hover:text-yellow-500 transition-colors" />;
  if (normalized.includes('ai') || normalized.includes('model') || normalized.includes('chatbot') || normalized.includes('prompt') || normalized.includes('summariz') || normalized.includes('learning')) return <Brain size={12} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />;
  if (normalized.includes('data') || normalized.includes('analysis') || normalized.includes('chart') || normalized.includes('recharts')) return <BarChart3 size={12} className="text-slate-400 group-hover:text-teal-400 transition-colors" />;
  if (normalized.includes('network') || normalized.includes('subnet') || normalized.includes('api')) return <Network size={12} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />;
  
  return <Terminal size={12} className="text-slate-400 group-hover:text-slate-300 transition-colors" />;
};

interface ProjectShowcaseProps {
  onOpenProjectModal?: (project: Project) => void;
}

export default function ProjectShowcase({ onOpenProjectModal }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Frontend' | 'Backend' | 'DevOps' | 'AI' | 'Cybersecurity' | 'Database' | 'Software'>('All');
  const [activeScope, setActiveScope] = useState<'All' | 'Work' | 'Personal' | 'Hackathon'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectForSim, setSelectedProjectForSim] = useState<Project | null>(null);
  const [activeReadmeProjectIds, setActiveReadmeProjectIds] = useState<Record<string, boolean>>({});

  // Filter project cards by category, scope & search query
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeFilter === 'All' || p.categories.includes(activeFilter as any);
    const matchesScope = activeScope === 'All' || p.projectType === activeScope;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) || 
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesScope && matchesSearch;
  });

  // Simulator States
  // 1. Zero-Trust State
  const [ztRole, setZtRole] = useState<'Intern' | 'Staff' | 'Compliance' | 'Admin'>('Intern');
  const [ztQuery, setZtQuery] = useState('onboarding.md');
  const [ztLogs, setZtLogs] = useState<string[]>([]);
  const [ztResult, setZtResult] = useState<{ status: 'granted' | 'denied' | 'idle'; content: string }>({ status: 'idle', content: '' });

  // 2. Network Monitor State
  const [netLogs, setNetLogs] = useState<string[]>([
    "INFO [03:14:10] Subnet scan complete: 14 nodes active.",
    "INFO [03:14:22] Active Directory LDAP bind successful for local_admin.",
    "INFO [03:14:35] Port sweep analysis finished: No rogue listeners detected."
  ]);
  const [netThreatIndex, setNetThreatIndex] = useState<number>(2.4);
  const [netStatus, setNetStatus] = useState<'clean' | 'alert' | 'remediating'>('clean');

  // 3. Asset Hub (3NF Database Playground) State
  const [dbCategories, setDbCategories] = useState([
    { id: 'CAT1', name: 'Server Hardware' },
    { id: 'CAT2', name: 'Workstations' },
    { id: 'CAT3', name: 'Network Infrastructure' }
  ]);
  const [dbLocations, setDbLocations] = useState([
    { id: 'LOC1', building: 'Alpha Annex', floor: 'Basement Room B102' },
    { id: 'LOC2', building: 'HQ Highrise', floor: 'Floor 12 Suite 120' }
  ]);
  const [dbAssets, setDbAssets] = useState([
    { id: 'AST1', name: 'Primary AD Server Node', serial: 'SN-998822', categoryId: 'CAT1', locationId: 'LOC1' },
    { id: 'AST2', name: 'Developer workstation XP-1', serial: 'SN-102938', categoryId: 'CAT2', locationId: 'LOC2' }
  ]);
  const [newAssetName, setNewAssetName] = useState('');
  const [newAssetSerial, setNewAssetSerial] = useState('');
  const [newAssetCat, setNewAssetCat] = useState('CAT1');
  const [newAssetLoc, setNewAssetLoc] = useState('LOC1');
  const [dbTerminalOutput, setDbTerminalOutput] = useState<string>("SYSTEM: Database initialized. 3NF Integrity verified.");

  // Run Zero-Trust AI Simulation
  const runZtSimulation = () => {
    setZtLogs(['Evaluating query request tokens...', 'Authenticating credential signature...']);
    setZtResult({ status: 'idle', content: '' });

    setTimeout(() => {
      setZtLogs(prev => [...prev, `Detected Identity Role: [${ztRole.toUpperCase()}]`, 'Checking Row-Level Security policy map...']);
    }, 800);

    setTimeout(() => {
      let authorized = false;
      let content = '';

      if (ztQuery.includes('onboarding') || ztQuery === 'onboarding.md') {
        authorized = true;
        content = "## Corporate IT Onboarding Manual\nWelcome to Bonga Manzini's enterprise systems. Ensure secure credentials are bound to your terminal. AD subnet maps reside on the primary directory controller node AST1.";
      } else if (ztQuery.includes('api_key') || ztQuery === 'api_keys.json' || ztQuery.includes('secret')) {
        if (ztRole === 'Admin') {
          authorized = true;
          content = "{\n  \"GEMINI_API_KEY\": \"AI_SECURE_HASH_0a91f...\",\n  \"DB_CONN_STR\": \"postgresql://db_user:secure_pwd@alpha-cluster.internal:5432/hub\"\n}";
        } else {
          authorized = false;
          content = `SECURITY EXCEPTION: Unauthorized role [${ztRole}] access mapping for payload [${ztQuery}]. Log entry dispatched to Security Officer.`;
        }
      } else if (ztQuery.includes('weights') || ztQuery === 'weights.bin' || ztQuery.includes('neural')) {
        if (ztRole === 'Compliance' || ztRole === 'Admin') {
          authorized = true;
          content = `RETRIEVAL GRANTED: Secure vector weights stream started for [${ztQuery}]. Matrix coefficients: [0.1982, -0.4491, 0.8122, ..., 0.0051]. Guardrail check active.`;
        } else {
          authorized = false;
          content = `SECURITY EXCEPTION: Role [${ztRole}] lacks Security Compliance clearance for vector payload.`;
        }
      } else {
        if (ztRole === 'Admin' || ztRole === 'Staff') {
          authorized = true;
          content = `RETRIEVAL GRANTED for custom payload: [${ztQuery}]\nPrompt guardrail scan result: PASSED (0 injection vectors detected). RAG memory context window updated.`;
        } else {
          authorized = false;
          content = `SECURITY EXCEPTION: Access denied for custom payload [${ztQuery}]. Role [${ztRole}] restricted by zero-trust ACL rules.`;
        }
      }

      setZtLogs(prev => [...prev, authorized ? 'ACCESS GRANTED: Security clearance matched.' : 'ACCESS DENIED: Insufficient security clearance level!']);
      setZtResult({
        status: authorized ? 'granted' : 'denied',
        content
      });
    }, 1800);
  };

  // Run Network Threat Event Simulation
  const triggerNetworkAttack = (type: 'lateral' | 'brute' | 'ping') => {
    setNetStatus('alert');
    const timestamp = new Date().toLocaleTimeString();
    
    if (type === 'lateral') {
      setNetThreatIndex(8.9);
      setNetLogs(prev => [
        `ALERT [${timestamp}] Unsanctioned RPC attempt detected from subnet 10.0.12.55 trying to access AST1.`,
        `WARNING [${timestamp}] Anomalous lateral shift pattern registered. Entering quarantine lock...`,
        ...prev
      ]);

      setTimeout(() => {
        setNetLogs(prev => [
          `REMEDIATION [${timestamp}] Quarantined IP 10.0.12.55 inside AD GPO security group.`,
          `REMEDIATION [${timestamp}] Closed RPC ports 135/445 on isolated nodes.`,
          ...prev
        ]);
        setNetThreatIndex(1.8);
        setNetStatus('remediating');
      }, 2000);
    } else if (type === 'brute') {
      setNetThreatIndex(6.7);
      setNetLogs(prev => [
        `ALERT [${timestamp}] 42 failed LDAP credential attempts detected inside 4 seconds on active directory node LOC1.`,
        `WARNING [${timestamp}] Possible credential brute-force attack from host 192.168.1.109.`,
        ...prev
      ]);

      setTimeout(() => {
        setNetLogs(prev => [
          `REMEDIATION [${timestamp}] Blocked IP address 192.168.1.109 indefinitely.`,
          `REMEDIATION [${timestamp}] Triggered password renewal protocol for target service account.`,
          ...prev
        ]);
        setNetThreatIndex(1.2);
        setNetStatus('remediating');
      }, 2000);
    } else {
      setNetThreatIndex(2.0);
      setNetLogs(prev => [
        `INFO [${timestamp}] Dispatched echo requests to active directory controller AST1. Latency: 0.82ms.`,
        `INFO [${timestamp}] Subnet telemetry is normal.`,
        ...prev
      ]);
      setTimeout(() => {
        setNetStatus('clean');
      }, 1000);
    }
  };

  // Run 3NF SQL Database Insert Simulation
  const handleInsertAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAssetName || !newAssetSerial) return;

    const newId = `AST${dbAssets.length + 1}`;
    const newAsset = {
      id: newId,
      name: newAssetName,
      serial: newAssetSerial,
      categoryId: newAssetCat,
      locationId: newAssetLoc
    };

    setDbAssets(prev => [...prev, newAsset]);
    
    const catName = dbCategories.find(c => c.id === newAssetCat)?.name || 'Unknown';
    const locName = dbLocations.find(l => l.id === newAssetLoc)?.building || 'Unknown';

    setDbTerminalOutput(
      `SQL STATEMENT EXECUTED:\nINSERT INTO tbl_assets (id, name, serial, category_id, location_id)\nVALUES ('${newId}', '${newAssetName}', '${newAssetSerial}', '${newAssetCat}', '${newAssetLoc}');\n\nINTEGRITY VALIDATION:\n- Relational links OK (Category: ${catName}, Location: ${locName}).\n- 3NF constraints maintained. No redundant building/room strings duplicated in Asset records.`
    );

    setNewAssetName('');
    setNewAssetSerial('');
  };

  return (
    <section id="projects" className="py-8 px-2 bg-[#0b0f19]/30 border-t border-slate-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-5 bg-cyan-400 rounded-full" />
              <h2 className="font-mono text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
                Engineering Showcase
              </h2>
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Interactive Systems & Sandbox
            </p>
          </div>

          {/* Search, Scope and Category Filter Controls */}
          <div className="flex flex-col gap-3 mb-2" id="project-filters-and-search">
            {/* Scope Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-lg shrink-0">
              {(['All', 'Work', 'Personal', 'Hackathon'] as const).map((scope) => (
                <button
                  key={scope}
                  onClick={() => setActiveScope(scope)}
                  className={`px-3 py-1 font-mono text-xs rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    activeScope === scope
                      ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                  id={`scope-btn-${scope.toLowerCase()}`}
                >
                  <span>
                    {scope === 'All' ? '🌐 All Projects' : scope === 'Work' ? '🏢 Work (Alteram & UDS)' : scope === 'Personal' ? '🚀 Personal Projects' : '🏆 Hackathons'}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Instant Search Bar */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects (Chrome Ext, Python, AD...)..."
                  className="w-full sm:w-64 pl-8 pr-3 py-1.5 font-mono text-xs rounded-md border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500"
                  id="project-search-input"
                />
              </div>

              {/* Dynamic Category Filter buttons */}
              <div className="flex flex-wrap gap-1.5" id="project-filters">
                {(['All', 'Frontend', 'Backend', 'DevOps', 'AI', 'Cybersecurity', 'Database', 'Software'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-2.5 py-1.5 font-mono text-xs rounded-md border transition-all duration-200 cursor-pointer ${
                      activeFilter === filter
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 font-bold'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                    id={`filter-btn-${filter.toLowerCase().replace(' ', '-')}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10" id="projects-grid-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 70,
                  damping: 18,
                  mass: 1,
                  delay: index * 0.05,
                  layout: { type: 'spring', stiffness: 90, damping: 20 }
                }}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-all duration-300 group cursor-pointer select-none"
                id={`project-card-${project.id}`}
                onClick={() => {
                  setActiveReadmeProjectIds(prev => ({
                    ...prev,
                    [project.id]: !prev[project.id]
                  }));
                }}
              >
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Categories, Scope Badge, and Tech Icons */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {project.projectType && (
                          <span className={`px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded border font-bold ${
                            project.projectType === 'Work'
                              ? 'bg-amber-400/10 border-amber-400/40 text-amber-400'
                              : project.projectType === 'Hackathon'
                              ? 'bg-purple-400/10 border-purple-400/40 text-purple-400'
                              : 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400'
                          }`}>
                            {project.company ? `🏢 ${project.company}` : project.projectType === 'Work' ? '🏢 Work' : project.projectType === 'Hackathon' ? '🏆 Hackathon' : '🚀 Personal'}
                          </span>
                        )}
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded bg-slate-950 border border-slate-800 text-cyan-400"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {project.stars !== undefined && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-text-muted bg-[#FCFAF6] border border-slate-200 px-1.5 py-0.5 rounded-md hover:bg-slate-50 transition-colors">
                            <Star size={10} className="text-amber-500 fill-amber-500/10" />
                            <span>{project.stars} stars</span>
                          </span>
                        )}
                        {project.commits !== undefined && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-text-muted bg-[#FCFAF6] border border-slate-200 px-1.5 py-0.5 rounded-md hover:bg-slate-50 transition-colors">
                            <GitCommit size={10} className="text-brand-accent animate-pulse" style={{ animationDuration: '3s' }} />
                            <span>{project.commits} commits</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title and Tab Controls */}
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-3 mb-4 gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-sans truncate max-w-[55%]">
                        {project.title}
                      </h3>
                      <div className="flex gap-1 bg-slate-950/60 p-0.5 rounded border border-slate-800/60 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveReadmeProjectIds(prev => ({ ...prev, [project.id]: false }));
                          }}
                          className={`px-2 py-0.5 font-mono text-[9px] rounded uppercase tracking-wider transition-all cursor-pointer ${
                            !activeReadmeProjectIds[project.id]
                              ? 'bg-cyan-400/20 text-cyan-400 font-bold border border-cyan-400/30'
                              : 'text-slate-400 hover:text-white border border-transparent'
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveReadmeProjectIds(prev => ({ ...prev, [project.id]: true }));
                          }}
                          className={`px-2 py-0.5 font-mono text-[9px] rounded uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                            activeReadmeProjectIds[project.id]
                              ? 'bg-cyan-400/20 text-cyan-400 font-bold border border-cyan-400/30'
                              : 'text-slate-400 hover:text-white border border-transparent'
                          }`}
                        >
                          <FileCode size={10} />
                          README.md
                        </button>
                      </div>
                    </div>

                    {activeReadmeProjectIds[project.id] ? (
                      <div 
                        className="markdown-body h-[240px] overflow-y-auto pr-1.5 scrollbar-thin mb-4 select-text cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Markdown>{project.readme || ''}</Markdown>
                      </div>
                    ) : (
                      <>
                        <p className="text-slate-400 text-xs leading-relaxed mb-6 font-sans min-h-[50px]">
                          {project.description}
                        </p>

                        {/* Tech Stack Row with Monochrome Icons */}
                        <div className="flex flex-wrap gap-1.5 mb-2" id={`project-${project.id}-tech-stack`}>
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#FCFAF6] border border-slate-200 text-[#566170] text-[9px] font-mono transition-all group-hover:border-[#0C70A6]/30"
                            >
                              {getTechIcon(tag)}
                              <span className="opacity-95 transition-colors">{tag}</span>
                            </span>
                          ))}
                        </div>

                        {/* Metadata Specs */}
                        <div className="border-t border-slate-800/80 py-4 my-4 space-y-2">
                          {project.specs.map((spec) => (
                            <div key={spec.label} className="flex justify-between items-center text-[11px] font-mono">
                              <span className="text-slate-500">{spec.label}</span>
                              <span className="text-slate-300 font-medium">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Links and Helper Clues */}
                  <div className="flex flex-wrap items-center justify-between mt-2 pt-2 border-t border-slate-900/60 font-mono text-xs gap-2">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        id={`project-${project.id}-github`}
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>

                      {onOpenProjectModal && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenProjectModal(project);
                          }}
                          className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                          id={`project-${project.id}-arch-specs`}
                        >
                          <Info size={13} />
                          <span>Specs</span>
                        </button>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProjectForSim(project);
                          if (project.simulationType === 'zero-trust') {
                            setZtLogs([]);
                            setZtResult({ status: 'idle', content: '' });
                          }
                        }}
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold cursor-pointer"
                        id={`project-${project.id}-live-preview`}
                      >
                        <Play size={12} className="fill-current" />
                        <span>Sandbox</span>
                      </button>
                    </div>

                    <span className="text-[9px] text-slate-500 font-mono opacity-60 group-hover:opacity-100 transition-opacity select-none hidden sm:inline shrink-0">
                      {activeReadmeProjectIds[project.id] ? "Click for Overview ↗" : "Click for README 📝"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Simulation Dashboard Console Section */}
        <AnimatePresence>
          {selectedProjectForSim && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="border border-slate-800 bg-slate-950 rounded-xl overflow-hidden shadow-2xl glow-cyan"
              id="live-simulation-console"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    SYSTEM_SANDBOX // {selectedProjectForSim.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProjectForSim(null)}
                  className="px-2.5 py-1 text-xs font-mono border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-600 rounded transition-colors"
                  id="close-sandbox-btn"
                >
                  Terminate [Esc]
                </button>
              </div>

              {/* Simulator Main Body */}
              <div className="p-6 md:p-8">
                
                {/* 1. ZERO-TRUST AI KNOWLEDGE BASE SIMULATOR */}
                {selectedProjectForSim.simulationType === 'zero-trust' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="zero-trust-simulator-body">
                    {/* Control Panel */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">
                          STEP 01: Assumed Identity Role
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {([
                            { key: 'Intern', label: 'Intern' },
                            { key: 'Staff', label: 'Staff Dev' },
                            { key: 'Compliance', label: 'Security' },
                            { key: 'Admin', label: 'Root Admin' }
                          ] as const).map((role) => (
                            <button
                              key={role.key}
                              onClick={() => setZtRole(role.key)}
                              className={`py-2 px-3 text-xs font-mono border rounded-lg text-left transition-all ${
                                ztRole === role.key
                                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 font-semibold'
                                  : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:border-slate-700'
                              }`}
                              id={`role-select-${role.key.toLowerCase()}`}
                            >
                              &bull; {role.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">
                          STEP 02: Select or Type Query Payload
                        </span>
                        <div className="space-y-2 mb-2">
                          {[
                            { key: 'onboarding.md', label: 'GET /it_manual/onboarding.md (Public)' },
                            { key: 'weights.bin', label: 'GET /neural_weights.bin (Security Restricted)' },
                            { key: 'api_keys.json', label: 'GET /admin/api_keys.json (Root Restricted)' }
                          ].map((q) => (
                            <button
                              key={q.key}
                              onClick={() => setZtQuery(q.key)}
                              className={`w-full py-2 px-3 text-xs font-mono border rounded-lg text-left transition-all ${
                                ztQuery === q.key
                                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 font-semibold'
                                  : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:border-slate-700'
                              }`}
                              id={`query-select-${q.key.replace('.', '-')}`}
                            >
                              {q.label}
                            </button>
                          ))}
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 uppercase mb-1" htmlFor="zt-custom-input">
                            Or Type Custom Query Path:
                          </label>
                          <input
                            id="zt-custom-input"
                            type="text"
                            value={ztQuery}
                            onChange={(e) => setZtQuery(e.target.value)}
                            placeholder="e.g. /confidential/exam_grades.md"
                            className="w-full px-3 py-1.5 font-mono text-xs rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      <button
                        onClick={runZtSimulation}
                        className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-400/20"
                        id="run-zt-query-btn"
                      >
                        <RefreshCw size={14} className="animate-spin-slow" />
                        Execute Pre-Filter RAG Query
                      </button>
                    </div>

                    {/* Console Output */}
                    <div className="lg:col-span-7 flex flex-col h-[340px] border border-slate-800 bg-slate-950 rounded-lg overflow-hidden font-mono text-xs">
                      {/* Log Screen Header */}
                      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-900 text-slate-500">
                        <Terminal size={12} />
                        <span>ZERO-TRUST DECISION CORE & LLM OUT</span>
                      </div>

                      {/* Log Console Content */}
                      <div className="p-4 flex-1 overflow-y-auto space-y-2.5">
                        <div className="text-slate-500">System Ready. Please submit a query payload.</div>
                        
                        {ztLogs.map((log, i) => (
                          <div key={i} className="text-slate-300 flex gap-2">
                            <span className="text-cyan-500">&gt;</span>
                            <span>{log}</span>
                          </div>
                        ))}

                        {ztResult.status !== 'idle' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`mt-4 p-3 border rounded-lg ${
                              ztResult.status === 'granted'
                                ? 'border-emerald-950 bg-emerald-950/20 text-emerald-400'
                                : 'border-red-950 bg-red-950/20 text-red-400'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-bold mb-1.5 text-xs">
                              {ztResult.status === 'granted' ? (
                                <>
                                  <ShieldCheck size={14} />
                                  <span>ACL RETRIEVAL GRANTED // PROMPT ENCODED</span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle size={14} />
                                  <span>ACL RETRIEVAL EXCEPTION // BLOCK RESOLVED</span>
                                </>
                              )}
                            </div>
                            <pre className="text-[11px] whitespace-pre-wrap leading-relaxed opacity-90 font-mono">
                              {ztResult.content}
                            </pre>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. AUTOMATED IT NETWORK MONITOR SIMULATOR */}
                {selectedProjectForSim.simulationType === 'network-monitor' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="network-monitor-simulator-body">
                    {/* Left Column Stats & Mitigations */}
                    <div className="lg:col-span-4 space-y-6">
                      <div className="p-5 border border-slate-800 bg-slate-900/30 rounded-lg">
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-4">
                          SUBNET METRICS
                        </span>
                        
                        {/* Threat Indicator Dial */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                              <span className="text-slate-400">Threat Index Severity:</span>
                              <span className={`font-bold ${netThreatIndex > 5 ? 'text-red-400' : 'text-emerald-400'}`}>
                                {netThreatIndex} / 10.0
                              </span>
                            </div>
                            <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-500 ${
                                  netThreatIndex > 5 ? 'bg-red-500' : 'bg-emerald-500'
                                }`}
                                style={{ width: `${netThreatIndex * 10}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs font-mono py-2 border-t border-b border-slate-900/80">
                            <span className="text-slate-400">Threat Status:</span>
                            <span className={`font-bold uppercase ${
                              netStatus === 'clean' ? 'text-emerald-400' : netStatus === 'alert' ? 'text-red-500 animate-pulse' : 'text-amber-400'
                            }`}>
                              {netStatus === 'clean' ? '● SAFE' : netStatus === 'alert' ? '● DETECTED' : '⚙ MITIGATING'}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono text-slate-400 pt-1">
                            <div className="p-2 border border-slate-900 bg-slate-950 rounded">
                              <span className="block text-slate-600">SUBNET_NODES</span>
                              <span className="text-sm font-semibold text-white">14 Active</span>
                            </div>
                            <div className="p-2 border border-slate-900 bg-slate-950 rounded">
                              <span className="block text-slate-600">IP_ISOLATIONS</span>
                              <span className="text-sm font-semibold text-white">
                                {netThreatIndex === 1.8 || netThreatIndex === 1.2 ? '1 Locked' : '0 Locked'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Trigger Event buttons */}
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">
                          SIMULATE THREAT EVENTS
                        </span>
                        <button
                          onClick={() => triggerNetworkAttack('lateral')}
                          className="w-full flex items-center justify-between py-2.5 px-4 font-mono text-xs border border-red-950 bg-red-950/10 hover:bg-red-950/20 text-red-400 rounded-lg transition-colors"
                          id="trigger-lateral-attack-btn"
                        >
                          <span>Simulate Lateral Move Attack</span>
                          <AlertTriangle size={14} />
                        </button>

                        <button
                          onClick={() => triggerNetworkAttack('brute')}
                          className="w-full flex items-center justify-between py-2.5 px-4 font-mono text-xs border border-purple-950 bg-purple-950/10 hover:bg-purple-950/20 text-purple-400 rounded-lg transition-colors"
                          id="trigger-brute-attack-btn"
                        >
                          <span>Simulate LDAP Brute Force</span>
                          <AlertTriangle size={14} />
                        </button>

                        <button
                          onClick={() => triggerNetworkAttack('ping')}
                          className="w-full flex items-center justify-between py-2.5 px-4 font-mono text-xs border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 text-slate-300 rounded-lg transition-colors"
                          id="trigger-subnet-ping-btn"
                        >
                          <span>Run Health Ping Checklist</span>
                          <Check size={14} className="text-emerald-400" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column Network Active Monitor Log terminal */}
                    <div className="lg:col-span-8 flex flex-col h-[380px] border border-slate-800 bg-slate-950 rounded-lg overflow-hidden font-mono text-xs">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-900 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Terminal size={12} />
                          <span>SUBNET SECURITY TELEMETRY</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 uppercase tracking-wide">● STREAMING LOGS</span>
                      </div>

                      <div className="p-4 flex-1 overflow-y-auto space-y-2 select-text text-[11px] leading-relaxed">
                        {netLogs.map((log, index) => {
                          let colorClass = "text-slate-300";
                          if (log.includes("ALERT")) colorClass = "text-red-400 font-bold";
                          else if (log.includes("WARNING")) colorClass = "text-amber-400";
                          else if (log.includes("REMEDIATION")) colorClass = "text-emerald-400 font-semibold";
                          
                          return (
                            <div key={index} className={`border-b border-slate-900/40 pb-1.5 ${colorClass}`}>
                              &gt;&gt; {log}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DISTRIBUTED ASSET HUB (3NF DATABASE PLAYGROUND) */}
                {selectedProjectForSim.simulationType === 'asset-hub' && (
                  <div className="space-y-8" id="asset-hub-simulator-body">
                    {/* Theoretical banner of 3NF Database Design */}
                    <div className="p-4 border border-emerald-950 bg-emerald-950/15 rounded-lg text-xs leading-relaxed text-slate-300 flex gap-3">
                      <Layers size={20} className="text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">3rd Normal Form (3NF) Normalization Principle:</span>
                        Adhering to 3NF ensures that (1) every table contains only transitive dependencies directly on the primary key, and (2) redundancy is completely eliminated. For example, rather than repeating locations ("Alpha Annex", "Basement Room B102") inside the assets rows, those reside in their own tables with a foreign key reference (`location_id`). Changing a building name updates in one single row without anomalies!
                      </div>
                    </div>

                    {/* Interactive Database visual representation */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs">
                      
                      {/* Left: Input Form to Insert Asset */}
                      <form onSubmit={handleInsertAsset} className="xl:col-span-4 p-5 border border-slate-800 bg-slate-900/20 rounded-lg space-y-4" id="db-playground-form">
                        <div className="text-[11px] font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1.5">
                          INSERT NEW ASSET RECORD
                        </div>
                        
                        <div>
                          <label className="block text-[10px] text-slate-500 uppercase mb-1" htmlFor="sim-asset-name">Asset Name</label>
                          <input
                            id="sim-asset-name"
                            type="text"
                            required
                            placeholder="e.g. Cisco Firewall core"
                            value={newAssetName}
                            onChange={(e) => setNewAssetName(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-500 uppercase mb-1" htmlFor="sim-asset-serial">Serial ID Code</label>
                          <input
                            id="sim-asset-serial"
                            type="text"
                            required
                            placeholder="e.g. SN-445588"
                            value={newAssetSerial}
                            onChange={(e) => setNewAssetSerial(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] text-slate-500 uppercase mb-1" htmlFor="sim-asset-cat">Category Key</label>
                            <select
                              id="sim-asset-cat"
                              value={newAssetCat}
                              onChange={(e) => setNewAssetCat(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                            >
                              {dbCategories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-500 uppercase mb-1" htmlFor="sim-asset-loc">Location Key</label>
                            <select
                              id="sim-asset-loc"
                              value={newAssetLoc}
                              onChange={(e) => setNewAssetLoc(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded border border-slate-800 bg-slate-950 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                            >
                              {dbLocations.map(loc => (
                                <option key={loc.id} value={loc.id}>{loc.building}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submit-sim-asset"
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider rounded font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Plus size={14} />
                          Execute SQL Write
                        </button>
                      </form>

                      {/* Right: Actual Normalized Table Grid */}
                      <div className="xl:col-span-8 space-y-6">
                        
                        {/* Parent Tables */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Categories Table */}
                          <div className="p-3 border border-slate-800 bg-slate-950 rounded">
                            <div className="font-bold text-slate-400 mb-2 border-b border-slate-900 pb-1 text-[11px]">
                              tbl_categories (Lookup Table)
                            </div>
                            <table className="w-full text-left">
                              <thead>
                                <tr className="text-slate-600">
                                  <th className="py-1">id (PK)</th>
                                  <th className="py-1">category_name</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dbCategories.map(cat => (
                                  <tr key={cat.id} className="text-slate-300">
                                    <td className="py-0.5 text-cyan-400">{cat.id}</td>
                                    <td className="py-0.5">{cat.name}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Locations Table */}
                          <div className="p-3 border border-slate-800 bg-slate-950 rounded">
                            <div className="font-bold text-slate-400 mb-2 border-b border-slate-900 pb-1 text-[11px]">
                              tbl_locations (Lookup Table)
                            </div>
                            <table className="w-full text-left">
                              <thead>
                                <tr className="text-slate-600">
                                  <th className="py-1">id (PK)</th>
                                  <th className="py-1">building</th>
                                  <th className="py-1">room_floor</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dbLocations.map(loc => (
                                  <tr key={loc.id} className="text-slate-300">
                                    <td className="py-0.5 text-cyan-400">{loc.id}</td>
                                    <td className="py-0.5">{loc.building}</td>
                                    <td className="py-0.5">{loc.floor}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Assets Normalized Table */}
                        <div className="p-4 border border-slate-800 bg-slate-950 rounded">
                          <div className="font-bold text-slate-400 mb-2.5 border-b border-slate-900 pb-1.5 text-[11px] flex justify-between items-center">
                            <span>tbl_assets (Normalized core entity)</span>
                            <span className="text-[9px] text-slate-600">FK references constraint links active</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[500px]">
                              <thead>
                                <tr className="text-slate-600">
                                  <th className="py-1">id (PK)</th>
                                  <th className="py-1">asset_name</th>
                                  <th className="py-1">serial_no</th>
                                  <th className="py-1">category_id (FK)</th>
                                  <th className="py-1">location_id (FK)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dbAssets.map(ast => (
                                  <tr key={ast.id} className="text-slate-300 border-b border-slate-900/40">
                                    <td className="py-1 text-cyan-400">{ast.id}</td>
                                    <td className="py-1 text-white font-medium">{ast.name}</td>
                                    <td className="py-1 text-slate-400">{ast.serial}</td>
                                    <td className="py-1 text-cyan-400">{ast.categoryId}</td>
                                    <td className="py-1 text-cyan-400">{ast.locationId}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* SQL Terminal Compiler logs */}
                        <div className="p-3 border border-slate-800 bg-slate-900/30 rounded text-[11px]">
                          <div className="text-slate-500 font-bold mb-1 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                            <Database size={11} />
                            <span>RELATIONAL SQL COMPILER OUTPUT</span>
                          </div>
                          <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                            {dbTerminalOutput}
                          </pre>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
