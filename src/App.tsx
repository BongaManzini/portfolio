import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Sparkles,
  Shield,
  Cpu,
  Globe,
  Layers,
  Copy,
  Check,
  X,
  Code2,
  ChevronRight,
  Laptop
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Web Apps' | 'AI & ML' | 'Security & Systems' | 'Browser Extensions';
  description: string;
  fullDetails: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  highlight?: string;
  deployment?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'civicpulse',
    title: 'CivicPulse – Gauteng Electoral & Deprivation Analytics',
    category: 'AI & ML',
    description: 'DIRISA Student Datathon 2026: Geospatial machine learning pipeline analyzing political geography, deprivation friction indices, and voter turnout dynamics across Gauteng metropolises ahead of the 2026 LGE.',
    fullDetails: 'Engineered for the National Data Science Innovation and Research (DIRISA) Student Datathon 2026. Models the complex interplay between municipal socio-economic vulnerability indicators, spatial deprivation friction, and voter turnout trajectories across Johannesburg, Ekurhuleni, and Tshwane wards using spatial clustering and predictive regressions.',
    tags: ['DIRISA SDC 2026', 'Jupyter', 'Geospatial ML', 'Elections Analytics', 'Python', 'Leaflet', 'Data Science'],
    github: 'https://github.com/BongaManzini/CivicPulse',
    liveUrl: 'https://civicpulse-gauteng-2026.netlify.app/',
    highlight: 'DIRISA SDC 2026 Finalist',
    deployment: 'Netlify Live',
    featured: true
  },
  {
    id: 'focusflux',
    title: 'FocusFlux – ADHD & Cognitive Wellness Ecosystem',
    category: 'Web Apps',
    description: 'Full-stack ADHD and cognitive accessibility web platform featuring 8 gamified sensory training games, grounding exercises, real-time metrics, and Google Gemini AI conversational emotional support.',
    fullDetails: 'Built with React 19, TypeScript, and Google Gemini AI. Delivers personalized cognitive workouts targeting working memory, pattern recognition, and attention regulation alongside clinical-grade grounding exercises and secure Firebase cloud synchronization.',
    tags: ['React 19', 'TypeScript', 'Google Gemini AI', 'Firebase', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/BongaManzini/focusflux',
    liveUrl: 'https://bongamanzini.github.io/focusflux/',
    highlight: 'Full-Stack Wellness App',
    deployment: 'GitHub Pages & Vercel',
    featured: true
  },
  {
    id: 'skyapp',
    title: 'SkyApp – AR Celestial Planetarium & Star Map',
    category: 'Web Apps',
    description: 'Mobile-first 3D celestial star map with live camera augmented reality overlay, sidereal time astronomical engine, constellation outlines, and offline Progressive Web App (PWA) capability.',
    fullDetails: 'Implements spherical trigonometry algorithms to calculate exact right ascension and declination for celestial bodies in real time. Employs device gyroscope, accelerometer, and compass tracking to project constellation overlays directly onto the live camera viewfinder with zero network lag.',
    tags: ['HTML5 Canvas', 'Camera AR', 'Astronomy Algorithms', 'PWA', 'JavaScript', 'WebGL'],
    github: 'https://github.com/BongaManzini/sky-app',
    liveUrl: 'https://bongamanzini.github.io/sky-app/',
    highlight: 'Mobile AR & Astronomy Engine',
    deployment: 'GitHub Pages',
    featured: true
  },
  {
    id: 'june16',
    title: 'June 16 – Soweto Memorial Experience',
    category: 'Web Apps',
    description: 'Interactive 3D digital memorial honoring South Africa\'s 1976 Soweto Uprising and Youth Day, blending spatial WebGL scenes, archival timelines, and curated historical soundscapes.',
    fullDetails: 'Built with Three.js, React, and modern WebGL shaders. Invites visitors into an atmospheric 3D historical environment to explore key moments from the 1976 Soweto student march, listen to archival accounts, and celebrate South African youth heritage.',
    tags: ['Three.js', 'WebGL', 'JavaScript', 'Historical Archives', 'Spatial 3D', 'Tailwind CSS'],
    github: 'https://github.com/BongaManzini/june16-memorial-site',
    liveUrl: 'https://bongamanzini.github.io/june16-memorial-site/',
    highlight: '3D Spatial Cultural Memorial',
    deployment: 'GitHub Pages',
    featured: true
  },
  {
    id: 'deepsentry',
    title: 'DeepSentryAI – Call Center Deepfake Defense',
    category: 'Security & Systems',
    description: 'Real-time security defense console engineered for call center operations to detect synthetic voice clones, manipulated video feeds, and anomalous network telemetries with sub-second processing latency.',
    fullDetails: 'Combines audio digital signal processing (spectral flux, pitch jitter, harmonic distortion) and video face landmark jitter analysis to identify generative voice/video attacks against customer service desks before credential compromise occurs.',
    tags: ['Python', 'OpenCV', 'Audio DSP', 'Deepfake Detection', 'Biometric Security', 'AsyncIO'],
    github: 'https://github.com/BongaManzini/deep-sentry-ai',
    highlight: 'Real-Time Voice & Video Defense',
    deployment: 'Python Security Console',
    featured: true
  },
  {
    id: 'self-healing-network',
    title: 'Self-Healing Network System',
    category: 'Security & Systems',
    description: 'Autonomous AI network threat detection and zero-touch auto-remediation architecture monitoring live packet streams, detecting malicious patterns, and enforcing instant firewall policy remediation.',
    fullDetails: 'Leverages heuristic anomaly detection and automated iptables/nftables firewall orchestration. Classifies MITM attempts, rogue DHCP, DNS spoofing, and SYN floods in flight, isolating compromised endpoints and neutralizing threats autonomously.',
    tags: ['Python', 'Flask', 'Network Security', 'Machine Learning', 'Firewall Automation', 'Scapy'],
    github: 'https://github.com/BongaManzini/self-healing-network',
    highlight: 'Autonomous Zero-Touch Defense',
    deployment: 'Python Security Engine',
    featured: true
  },
  {
    id: 'bytecraft',
    title: 'ByteCraft – Higher-Ed Student Dropout Predictor',
    category: 'AI & ML',
    description: 'Higher-education predictive analytics platform utilizing Random Forest classification models to forecast student dropout vulnerabilities and empower faculty with actionable academic intervention insights.',
    fullDetails: 'Parses historical admission, attendance, and mid-semester assessment metrics to output per-student risk coefficients. Includes a Flask dashboard with interactive feature importance visualizations, enabling targeted educational interventions.',
    tags: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Predictive Modeling', 'Data Science'],
    github: 'https://github.com/BongaManzini/bytecraft-student-risk',
    highlight: 'Predictive ML & Decision Analytics',
    deployment: 'Flask & scikit-learn'
  },
  {
    id: 'unisa-nexus-hub',
    title: 'UNISA Nexus Hub',
    category: 'Web Apps',
    description: 'Campus resource portal and academic utility suite engineered for University of South Africa scholars, featuring timetable synchronization, study hub navigators, and course tools.',
    fullDetails: 'Designed for high accessibility, mobile ergonomics, and low-bandwidth resilience. Integrates study group discovery, assessment countdowns, and quick access to essential academic portals with a modern Shadcn UI.',
    tags: ['React', 'TypeScript', 'Vite', 'Shadcn UI', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com/BongaManzini/unisa-nexus-hub',
    liveUrl: 'https://bongamanzini.github.io/unisa-nexus-hub/',
    highlight: 'Campus Resource & Student Utility',
    deployment: 'GitHub Pages'
  },
  {
    id: 'ubuntusec',
    title: 'UbuntuSec Awareness Platform',
    category: 'Security & Systems',
    description: 'Gamified cybersecurity education platform anchored in the African Ubuntu philosophy ("I am because we are"), featuring interactive cyber threat defense simulations and collective security awareness challenges.',
    fullDetails: 'Empowers everyday users and community organizations with hands-on defense drills covering phishing identification, password entropy, social engineering counters, and digital hygiene.',
    tags: ['HTML5 Canvas', 'Cybersecurity Education', 'JavaScript', 'Community Defense', 'Interactive Simulation'],
    github: 'https://github.com/BongaManzini/ubuntu-sec',
    liveUrl: 'https://bongamanzini.github.io/ubuntu-sec/',
    highlight: 'Gamified Cyber Education',
    deployment: 'GitHub Pages'
  },
  {
    id: 'master-planner-pro',
    title: 'Master Planner Pro – Brutalist Dashboard',
    category: 'Web Apps',
    description: 'High-contrast neo-brutalist daily productivity dashboard with multi-month calendar navigation, hourly time-blocking schedules, goal progression tracking, and local storage offline persistence.',
    fullDetails: 'Built with focused zero-friction design principles. Features keyboard-first shortcuts, draggable daily task queues, time-allocation breakdown analytics, and zero-dependency offline local storage.',
    tags: ['JavaScript', 'Tailwind CSS', 'Brutalist UI', 'LocalStorage', 'Productivity Engine'],
    github: 'https://github.com/BongaManzini/master-planner-pro',
    liveUrl: 'https://bongamanzini.github.io/master-planner-pro/',
    highlight: 'Neo-Brutalist Daily Planner',
    deployment: 'GitHub Pages'
  },
  {
    id: 'devdesk-pro',
    title: 'DevDesk Pro & IT Support Hub',
    category: 'Browser Extensions',
    description: 'High-velocity Manifest V3 Chrome extension suite automating service desk workflows: DOM macro click-recording, batch ticket clearance, Telviva account unlockers, and QueueMetrics call telemetry scraping.',
    fullDetails: 'Significantly reduces mean-time-to-resolution (MTTR) by automating repetitive click paths across enterprise helpdesk consoles. Includes configurable script macros and QueueMetrics telephony telemetry extraction.',
    tags: ['Chrome Extension MV3', 'Service Workers', 'DOM Automation', 'JavaScript', 'Workflow Ops'],
    github: 'https://github.com/BongaManzini/devdesk-pro',
    highlight: 'High-Velocity Support Automation',
    deployment: 'Chrome Web Store / MV3'
  },
  {
    id: 'imagesense',
    title: 'ImageSense – OCR to Excel Pipeline',
    category: 'AI & ML',
    description: 'Computer vision OCR pipeline converting scanned document archives, receipts, and invoices into cleanly structured, styled Excel spreadsheets using optical character recognition.',
    fullDetails: 'Employs OpenCV image pre-processing (adaptive binarization, deskewing) and Tesseract OCR engine to parse tabular data from image or PDF scans directly into formatted openpyxl workbooks.',
    tags: ['Python', 'Flask', 'Tesseract OCR', 'OpenPyXL', 'Poppler', 'Computer Vision'],
    github: 'https://github.com/BongaManzini/imagesense-ocr',
    highlight: 'Document Vision & Data Automation',
    deployment: 'Flask & OCR Pipeline'
  },
  {
    id: 'sociology-nexus',
    title: 'Sociology Nexus Platform',
    category: 'Web Apps',
    description: 'Interactive sociological learning platform and concept visualizer built with Go, Chi router, and high-performance server-rendered Templ components for rapid and lightweight page transitions.',
    fullDetails: 'Leverages the speed and concurrency of Go with typed HTML rendering using Templ. Explores foundational sociological theories, institutional dynamics, and demographic patterns with minimal client overhead.',
    tags: ['Go', 'Chi Router', 'Templ', 'HTMX / Web UI', 'Full-Stack Go', 'Educational Tech'],
    github: 'https://github.com/BongaManzini/sociology-nexus',
    highlight: 'Modern Full-Stack Go Architecture',
    deployment: 'Go HTTP Microservice'
  },
  {
    id: 'threat-dashboard',
    title: 'Cybersecurity Threat Dashboard',
    category: 'Security & Systems',
    description: 'Interactive threat intelligence dashboard parsing and visualizing attack vectors, DDoS distribution frequencies, and malware signatures across 40,000+ incident telemetry logs using Jupyter and Voilà.',
    fullDetails: 'Visualizes spatio-temporal cyberattack distributions, port exploitation frequencies, and threat actor IP reputations using Pandas, Plotly interactive charts, and Voilà notebook-as-an-app serving.',
    tags: ['Jupyter', 'Voilà', 'Pandas', 'Plotly', 'Threat Intelligence', 'Network Analytics'],
    github: 'https://github.com/BongaManzini/cybersecurity-threat-dashboard',
    highlight: 'Threat Intelligence Telemetry',
    deployment: 'Jupyter & Voilà'
  },
  {
    id: 'media-cloud-syncer',
    title: 'Media Cloud Syncer',
    category: 'Security & Systems',
    description: 'Modern desktop media downloader and automated cloud synchronization utility built with Python, CustomTkinter dark-mode GUI, and yt-dlp asynchronous download pipelines.',
    fullDetails: 'Engineered with clean CustomTkinter aesthetics, multithreaded queueing, format transcoding presets, and automated file-system sorting for digital asset organization.',
    tags: ['Python', 'CustomTkinter', 'yt-dlp', 'Desktop GUI', 'Async Pipeline', 'Cloud Sync'],
    github: 'https://github.com/BongaManzini/media-cloud-syncer',
    highlight: 'Modern Desktop Sync Utility',
    deployment: 'Python Desktop GUI'
  },
  {
    id: 'matric-analytics',
    title: 'Matric Examination Pass-Rate Analytics',
    category: 'AI & ML',
    description: 'South African National Senior Certificate (Matric) educational analytics pipeline parsing multi-district examination records and modeling pass-rate performance trends across socio-economic quintiles.',
    fullDetails: 'Data cleaning, normalization, and statistical regression modeling on historical matriculation exam databases. Uncovers correlations between school infrastructure, teacher ratios, and university admission qualifiers.',
    tags: ['Python', 'Pandas', 'Data Science', 'Educational Analytics', 'Jupyter', 'Statistical Modeling'],
    github: 'https://github.com/BongaManzini/matric-results-analytics',
    highlight: 'National Examination Analytics',
    deployment: 'Python Data Pipeline'
  },
  {
    id: 'algorithmic-trading',
    title: 'Algorithmic Trading & Momentum Indicators',
    category: 'AI & ML',
    description: 'Quantitative algorithmic models calculating Relative Strength Index (RSI) momentum and 50/200-day Simple Moving Average crossovers for algorithmic technical analysis and backtesting.',
    fullDetails: 'Simulates momentum trading strategies across equity and crypto price series. Calculates historical drawdown, Sharpe ratios, and signal execution timing.',
    tags: ['Python', 'Algorithmic Trading', 'Quantitative Finance', 'Matplotlib', 'Pandas', 'Backtesting'],
    github: 'https://github.com/BongaManzini/algorithmic-trading-models',
    highlight: 'Quantitative Technical Analysis',
    deployment: 'Python Quantitative Model'
  },
  {
    id: 'studyplan',
    title: 'StudyPlan Assistant',
    category: 'AI & ML',
    description: 'Adaptive curriculum intelligence system designed to ingest course syllabus materials and lecture transcription data to generate synchronized, adaptive learning plans tailored to student needs.',
    fullDetails: 'Extracts module outcomes, aligns lecture transcripts with examination objectives, and generates dynamically adjusted revision timelines.',
    tags: ['TypeScript', 'Document Parsing', 'AI Study Assistant', 'Knowledge Retrieval', 'Node.js'],
    github: 'https://github.com/BongaManzini/StudyPlan',
    highlight: 'Adaptive Study Synthesis',
    deployment: 'TypeScript Application'
  },
  {
    id: 'it-support-tools-hub',
    title: 'IT Support Tools Hub',
    category: 'Browser Extensions',
    description: 'Configurable browser automation extension providing hotkey macros, support workflow presets, and rapid resolution toolkits for IT helpdesk engineers.',
    fullDetails: 'Equips technical support agents with one-click canned responses, regex search highlighters, and DOM automation hooks to streamline helpdesk turnaround time.',
    tags: ['Chrome Extension MV3', 'JavaScript', 'DOM Automation', 'Helpdesk Tooling'],
    github: 'https://github.com/BongaManzini/it-support-tools-hub',
    highlight: 'Configurable Macro Automation',
    deployment: 'Chrome Web Store / MV3'
  },
  {
    id: 'mintek-flotation',
    title: 'Mintek Flotation AI Optimizer',
    category: 'AI & ML',
    description: 'Industrial mineral processing AI model optimizing reagent dosing and predicting silica impurity in iron ore froth flotation.',
    fullDetails: 'Engineered for the Mintek Graduate Hackathon. Solves the complex multi-phase chemical problem of predicting silica impurity (% SiO2) in flotation concentrates based on reagent feed rates (starch, amine), pulp airflow, and slurry pH. Implements feature importance attribution and dynamic dosing recommendations to maximize metallurgical recovery while cutting reagent waste.',
    tags: ['Mintek Hackathon', 'Python', 'scikit-learn', 'Mineral Processing', 'Industrial AI', 'Data Science', 'Pandas'],
    github: 'https://github.com/BongaManzini/mintek-flotation-ai-optimizer',
    highlight: 'Industrial AI Mineral Optimizer',
    deployment: 'Python AI Pipeline',
    featured: true
  },
  {
    id: 'youtube-commentary-intel',
    title: 'YouTube Commentary NLP & Sentiment Engine',
    category: 'AI & ML',
    description: 'Audience intelligence and commentary sentiment classification pipeline parsing user discourse and topical sentiment across video channels.',
    fullDetails: 'Processes unstructured viewer comment streams using VADER sentiment scoring and semantic classification. Automatically clusters feedback into actionable categories (feature requests, complaints, praise, bug reports) to inform creator content strategy.',
    tags: ['NLP', 'Python', 'Sentiment Analysis', 'VADER', 'YouTube Data API', 'Audience Analytics'],
    github: 'https://github.com/BongaManzini/youtube-commentary-intel',
    highlight: 'Audience Intelligence NLP',
    deployment: 'Python NLP Service'
  },
  {
    id: 'cpp-network-monitor',
    title: 'Network Threat Monitor (C++ / WinPcap)',
    category: 'Security & Systems',
    description: 'High-speed Windows desktop packet sniffer and heuristic threat detection utility built in C++ with WinPcap and native Win32 controls.',
    fullDetails: 'Captures raw IPv4 network traffic directly from physical adapter interfaces in real time. Implements heuristic detection algorithms for port scans, MITM address resolution poisonings, and abnormal bandwidth consumption with a native Win32 GUI HUD.',
    tags: ['C++', 'WinPcap / Npcap', 'Network Security', 'Win32 API', 'Packet Sniffer', 'Heuristic Detection'],
    github: 'https://github.com/BongaManzini/network-threat-monitor-cpp',
    highlight: 'Low-Level Packet Analysis',
    deployment: 'Win32 Desktop Executable'
  },
  {
    id: 'unisupport-specs',
    title: 'UniSupport Student Platform Specifications',
    category: 'Web Apps',
    description: 'Crowdsourced student assistance ecosystem blueprints, data schemas, verification models, and open-source tooling architecture.',
    fullDetails: 'Comprehensive system specification covering student peer support crowdsourcing, academic resource verification workflows, database schemas, and microservice integration blueprints tailored for African tertiary education institutions.',
    tags: ['System Architecture', 'EdTech Specs', 'Data Schemas', 'Crowdsourcing Blueprints', 'Technical Writing'],
    github: 'https://github.com/BongaManzini/unisupport-architecture-specs',
    highlight: 'Crowdsourced EdTech Blueprints',
    deployment: 'System Architecture Specs'
  },
  {
    id: 'tech-proposals-research',
    title: 'Informatics Research & Innovation Challenge Proposals',
    category: 'AI & ML',
    description: 'Curated repository of technical challenge submissions (GKSS, IBM), AI career guidance system architectures, and informatics research papers.',
    fullDetails: 'Contains competition papers, AI-driven career guidance algorithms, zero-trust perimeter routing slides (IronTunnel), and historical legislative data analysis.',
    tags: ['Research Proposals', 'IBM Innovation', 'GKSS Challenge', 'Informatics', 'Zero-Trust Architecture'],
    github: 'https://github.com/BongaManzini/tech-proposals-and-research',
    highlight: 'Innovation & Research Papers',
    deployment: 'Research & Publications'
  }
];

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [liveOnly, setLiveOnly] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  const categories = ['All', 'Web Apps', 'AI & ML', 'Security & Systems', 'Browser Extensions'];

  // Calculate live count
  const liveCount = useMemo(() => PROJECTS.filter(p => !!p.liveUrl).length, []);

  // Filter projects based on category, live filter, and search
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      // Category match
      if (activeCategory !== 'All' && project.category !== activeCategory) {
        return false;
      }
      // Live only filter
      if (liveOnly && !project.liveUrl) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTags = project.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesHighlight = project.highlight?.toLowerCase().includes(query);
        const matchesCat = project.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesHighlight && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, liveOnly, searchQuery]);

  const handleCopyClone = (githubUrl: string, id: string) => {
    const command = `git clone ${githubUrl}.git`;
    navigator.clipboard.writeText(command);
    setCopiedCloneId(id);
    setTimeout(() => {
      setCopiedCloneId(null);
    }, 2000);
  };

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Web Apps':
        return <Globe className="w-3.5 h-3.5" />;
      case 'AI & ML':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'Security & Systems':
        return <Shield className="w-3.5 h-3.5" />;
      case 'Browser Extensions':
        return <Laptop className="w-3.5 h-3.5" />;
      default:
        return <Code2 className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-indigo-500/10 blur-[170px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* Navigation / Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-4 sm:py-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-cyan-500/25">
              BM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white block">Bonga Manzini</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Software Engineer & AI Systems Developer</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
            <a
              href="https://civicpulse-gauteng-2026.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all font-mono text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DIRISA Finalist</span>
            </a>

            <a
              href="https://github.com/BongaManzini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-slate-300 hover:text-white transition-all hover:bg-slate-800/80 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Building intelligent software, AI defense & web systems
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering robust systems from{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              AI models
            </span>{' '}
            to{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              interactive web apps
            </span>.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            I build full-stack web applications, real-time AI security platforms, machine learning analytics engines, and high-velocity workflow automation suites. Focused on high-performance code, resilient architecture, and real-world impact.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-2xl font-black text-cyan-400 font-mono">{PROJECTS.length}</span>
              <p className="text-xs text-slate-400 mt-0.5">Engineered Repositories</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-2xl font-black text-emerald-400 font-mono">{liveCount}</span>
              <p className="text-xs text-slate-400 mt-0.5">Live Web Deployments</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-2xl font-black text-indigo-400 font-mono">4</span>
              <p className="text-xs text-slate-400 mt-0.5">Core Technical Domains</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-2xl font-black text-purple-400 font-mono">100%</span>
              <p className="text-xs text-slate-400 mt-0.5">Open Source on GitHub</p>
            </div>
          </div>
        </section>

        {/* Filter Navigation & Search Bar */}
        <section className="pt-4 pb-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by name, keyword, or tech (e.g. React, Python, AR, DIRISA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all font-light"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Only Filter Toggle */}
            <button
              onClick={() => setLiveOnly(!liveOnly)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium border transition-all ${
                liveOnly
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${liveOnly ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
              Live Demos Only ({liveCount})
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? PROJECTS.length 
                : PROJECTS.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                      : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}

            <span className="ml-auto text-xs text-slate-400 font-mono">
              Showing {filteredProjects.length} of {PROJECTS.length}
            </span>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full py-16 text-center glass-card rounded-2xl">
              <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No projects found</h3>
              <p className="text-sm text-slate-400 mt-1">Try adjusting your search query or removing filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setLiveOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-3px] hover:border-slate-700/80 relative group"
              >
                <div>
                  {/* Top Metadata Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold text-cyan-400">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Live
                        </span>
                      )}
                      {project.deployment && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/70 text-[10px] text-slate-300 font-mono">
                          {project.deployment}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Highlight */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>{project.title}</span>
                  </h3>

                  {project.highlight && (
                    <div className="mt-1.5 inline-block">
                      <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-800/40 px-2 py-0.5 rounded-md">
                        ★ {project.highlight}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tags & Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                        title={`Filter by ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => handleCopyClone(project.github, project.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl glass-card text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors font-mono"
                      title="Copy git clone command"
                    >
                      {copiedCloneId === project.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="text-[10px]">Clone</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
            <div className="glass-card bg-slate-900/95 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  {selectedProject.category}
                </span>
                {selectedProject.deployment && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300 font-mono">
                    {selectedProject.deployment}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>

              {selectedProject.highlight && (
                <p className="text-xs text-indigo-400 font-mono mt-1">
                  ★ {selectedProject.highlight}
                </p>
              )}

              <div className="my-5 space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">Architecture & Implementation</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    {selectedProject.fullDetails}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-1.5">Quick Clone Repository</h4>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                    <span className="truncate">git clone {selectedProject.github}.git</span>
                    <button
                      onClick={() => handleCopyClone(selectedProject.github, selectedProject.id)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 transition-all"
                    >
                      {copiedCloneId === selectedProject.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                  >
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Technical Competencies Matrix */}
        <section className="py-14 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Technical Proficiencies</h2>
          </div>
          <p className="text-sm text-slate-400 font-light mb-8 max-w-2xl">
            A battle-tested stack spanning systems development, full-stack web applications, machine learning, and security infrastructure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card p-5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                <Code2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-2">Languages</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                TypeScript, JavaScript (ESNext), Python 3, Go (Golang), SQL, C++, HTML5 / Canvas / CSS3
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono uppercase text-indigo-400 font-semibold mb-2">Frameworks & Web</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                React 19, Vite, Three.js / WebGL, Flask, Chi Router, Templ, Tailwind CSS, Shadcn UI, Alpine.js
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono uppercase text-purple-400 font-semibold mb-2">AI & Data Science</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Google Gemini API, scikit-learn, OpenCV, Audio DSP, Pandas, NumPy, Jupyter, Tesseract OCR
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">Security & Cloud</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Chrome MV3, Linux Daemons, Network Sockets, GitHub Pages, Vercel, Netlify, Firebase
              </p>
            </div>
          </div>
        </section>

        {/* Connect & Contact Section */}
        <section className="py-12 border-t border-slate-800/80">
          <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                Let’s build high-impact software together.
              </h2>
              <p className="text-sm text-slate-300 mt-3 font-light leading-relaxed">
                Whether you’re interested in collaborating on full-stack web applications, discussing machine learning solutions, or recruiting for software engineering and AI developer positions, feel free to connect.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mt-6">
                <a
                  href="https://github.com/BongaManzini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore GitHub Profile</span>
                </a>

                <a
                  href="https://portfolio-khaki-alpha-29.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Bonga Manzini. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors"
            >
              Back to Top ↑
            </a>
            <span>•</span>
            <a
              href="https://github.com/BongaManzini/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              Portfolio Source
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
