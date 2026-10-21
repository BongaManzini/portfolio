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
  Laptop,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Award,
  Download,
  Languages,
  Brain,
  Wrench,
  BarChart3
} from 'lucide-react';

export type CSField = 
  | 'Cybersecurity' 
  | 'Software Engineering' 
  | 'AI & Machine Learning' 
  | 'Data Science' 
  | 'IT Support & Automation';

interface Project {
  id: string;
  title: string;
  field: CSField;
  description: string;
  fullDetails: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  highlight?: string;
  deployment?: string;
  featured?: boolean;
}

const CS_FIELD_INFO: Record<CSField, {
  label: string;
  shortLabel: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  description: string;
}> = {
  'Cybersecurity': {
    label: 'Cybersecurity & Threat Defense',
    shortLabel: 'Cybersec',
    iconName: 'Shield',
    accentColor: 'rose',
    badgeBg: 'bg-rose-500/10',
    badgeBorder: 'border-rose-500/30',
    badgeText: 'text-rose-400',
    description: 'Deepfake biometric audio/video detection, autonomous zero-touch firewall auto-remediation, packet telemetry, and community awareness platforms.'
  },
  'Software Engineering': {
    label: 'Software Engineering & Web Apps',
    shortLabel: 'Software',
    iconName: 'Globe',
    accentColor: 'cyan',
    badgeBg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-400',
    description: 'Full-stack web applications, 3D WebGL spatial environments, progressive web apps (PWAs), high-concurrency Go microservices, and campus portals.'
  },
  'AI & Machine Learning': {
    label: 'Artificial Intelligence & Machine Learning',
    shortLabel: 'AI / ML',
    iconName: 'Cpu',
    accentColor: 'purple',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-400',
    description: 'Google Gemini multimodal AI integrations, cognitive training engines, computer vision OCR, predictive Random Forest models, and quantitative algorithmic systems.'
  },
  'Data Science': {
    label: 'Data Science & Geospatial Analytics',
    shortLabel: 'Data Science',
    iconName: 'BarChart3',
    accentColor: 'emerald',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    description: 'DIRISA 2026 Datathon finalist geospatial pipelines, municipal socio-economic deprivation friction indexing, and national examination pass-rate analytics.'
  },
  'IT Support & Automation': {
    label: 'IT Support & Workflow Automation',
    shortLabel: 'IT Support',
    iconName: 'Wrench',
    accentColor: 'amber',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-400',
    description: 'Manifest V3 Chrome extension suites, DOM macro click-recording, helpdesk ticket clearance, Telviva account unlockers, QueueMetrics scraping, and desktop cloud syncers.'
  }
};

const PROJECTS: Project[] = [
  // 1. DATA SCIENCE
  {
    id: 'civicpulse',
    title: 'CivicPulse – Gauteng Electoral & Deprivation Friction Analytics',
    field: 'Data Science',
    description: 'DIRISA Student Datathon 2026 Finalist: Geospatial data science and machine learning pipeline analyzing political geography, deprivation friction indices, and voter turnout dynamics across Gauteng metropolises ahead of the 2026 LGE.',
    fullDetails: 'Engineered for the National Data Science Innovation and Research (DIRISA) Student Datathon 2026. Models the complex interplay between municipal socio-economic vulnerability indicators, spatial deprivation friction, and voter turnout trajectories across Johannesburg, Ekurhuleni, and Tshwane wards using spatial clustering and predictive regressions.',
    tags: ['DIRISA SDC 2026', 'Jupyter', 'Geospatial ML', 'Elections Analytics', 'Python', 'Leaflet', 'Data Science'],
    github: 'https://github.com/BongaManzini/CivicPulse',
    liveUrl: 'https://civicpulse-gauteng-2026.netlify.app/',
    highlight: 'DIRISA SDC 2026 Finalist',
    deployment: 'Netlify Live',
    featured: true
  },
  {
    id: 'matric-analytics',
    title: 'Matric Examination Pass-Rate Analytics Pipeline',
    field: 'Data Science',
    description: 'South African National Senior Certificate (Matric) educational analytics pipeline parsing multi-district examination records and modeling pass-rate performance trends across socio-economic quintiles.',
    fullDetails: 'Data cleaning, normalization, and statistical regression modeling on historical matriculation exam databases. Uncovers correlations between school infrastructure, teacher ratios, and university admission qualifiers.',
    tags: ['Python', 'Pandas', 'Data Science', 'Educational Analytics', 'Jupyter', 'Statistical Modeling'],
    github: 'https://github.com/BongaManzini/matric-results-analytics',
    highlight: 'National Examination Analytics',
    deployment: 'Python Data Pipeline'
  },

  // 2. CYBERSECURITY
  {
    id: 'deepsentry',
    title: 'DeepSentryAI – Call Center Deepfake Defense',
    field: 'Cybersecurity',
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
    field: 'Cybersecurity',
    description: 'Autonomous AI network threat detection and zero-touch auto-remediation architecture monitoring live packet streams, detecting malicious patterns, and enforcing instant firewall policy remediation.',
    fullDetails: 'Leverages heuristic anomaly detection and automated iptables/nftables firewall orchestration. Classifies MITM attempts, rogue DHCP, DNS spoofing, and SYN floods in flight, isolating compromised endpoints and neutralizing threats autonomously.',
    tags: ['Python', 'Flask', 'Network Security', 'Machine Learning', 'Firewall Automation', 'Scapy'],
    github: 'https://github.com/BongaManzini/self-healing-network',
    highlight: 'Autonomous Zero-Touch Defense',
    deployment: 'Python Security Engine',
    featured: true
  },
  {
    id: 'ubuntusec',
    title: 'UbuntuSec Awareness Platform',
    field: 'Cybersecurity',
    description: 'Gamified cybersecurity education platform anchored in the African Ubuntu philosophy ("I am because we are"), featuring interactive cyber threat defense simulations and collective security awareness challenges.',
    fullDetails: 'Empowers everyday users and community organizations with hands-on defense drills covering phishing identification, password entropy, social engineering counters, and digital hygiene.',
    tags: ['HTML5 Canvas', 'Cybersecurity Education', 'JavaScript', 'Community Defense', 'Interactive Simulation'],
    github: 'https://github.com/BongaManzini/ubuntu-sec',
    liveUrl: 'https://bongamanzini.github.io/ubuntu-sec/',
    highlight: 'Gamified Cyber Education',
    deployment: 'GitHub Pages'
  },
  {
    id: 'threat-dashboard',
    title: 'Cybersecurity Threat Intelligence Dashboard',
    field: 'Cybersecurity',
    description: 'Interactive threat intelligence dashboard parsing and visualizing attack vectors, DDoS distribution frequencies, and malware signatures across 40,000+ incident telemetry logs using Jupyter and Voilà.',
    fullDetails: 'Visualizes spatio-temporal cyberattack distributions, port exploitation frequencies, and threat actor IP reputations using Pandas, Plotly interactive charts, and Voilà notebook-as-an-app serving.',
    tags: ['Jupyter', 'Voilà', 'Pandas', 'Plotly', 'Threat Intelligence', 'Network Analytics'],
    github: 'https://github.com/BongaManzini/cybersecurity-threat-dashboard',
    highlight: 'Threat Intelligence Telemetry',
    deployment: 'Jupyter & Voilà'
  },
  {
    id: 'cpp-network-monitor',
    title: 'Network Threat Monitor (C++ / WinPcap)',
    field: 'Cybersecurity',
    description: 'High-speed Windows desktop packet sniffer and heuristic threat detection utility built in C++ with WinPcap and native Win32 controls.',
    fullDetails: 'Captures raw IPv4 network traffic directly from physical adapter interfaces in real time. Implements heuristic detection algorithms for port scans, MITM address resolution poisonings, and abnormal bandwidth consumption with a native Win32 GUI HUD.',
    tags: ['C++', 'WinPcap / Npcap', 'Network Security', 'Win32 API', 'Packet Sniffer', 'Heuristic Detection'],
    github: 'https://github.com/BongaManzini/network-threat-monitor-cpp',
    highlight: 'Low-Level Packet Analysis',
    deployment: 'Win32 Desktop Executable'
  },

  // 3. AI & MACHINE LEARNING
  {
    id: 'focusflux',
    title: 'FocusFlux – ADHD & Cognitive Wellness Ecosystem',
    field: 'AI & Machine Learning',
    description: 'Full-stack ADHD and cognitive accessibility web platform featuring 8 gamified sensory training games, grounding exercises, real-time metrics, and Google Gemini AI conversational emotional support.',
    fullDetails: 'Built with React 19, TypeScript, and Google Gemini AI. Delivers personalized cognitive workouts targeting working memory, pattern recognition, and attention regulation alongside clinical-grade grounding exercises and secure Firebase cloud synchronization.',
    tags: ['React 19', 'TypeScript', 'Google Gemini AI', 'Firebase', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/BongaManzini/focusflux',
    liveUrl: 'https://bongamanzini.github.io/focusflux/',
    highlight: 'Full-Stack Cognitive Wellness Platform',
    deployment: 'GitHub Pages & Vercel',
    featured: true
  },
  {
    id: 'bytecraft',
    title: 'ByteCraft – Student Dropout Risk Predictor',
    field: 'AI & Machine Learning',
    description: 'Higher-education predictive analytics platform utilizing Random Forest classification models to forecast student dropout vulnerabilities and empower faculty with actionable academic intervention insights.',
    fullDetails: 'Parses historical admission, attendance, and mid-semester assessment metrics to output per-student risk coefficients. Includes a Flask dashboard with interactive feature importance visualizations, enabling targeted educational interventions.',
    tags: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Predictive Modeling', 'Machine Learning'],
    github: 'https://github.com/BongaManzini/bytecraft-student-risk',
    highlight: 'Predictive ML & Decision Analytics',
    deployment: 'Flask & scikit-learn'
  },
  {
    id: 'imagesense',
    title: 'ImageSense – OCR to Excel Vision Pipeline',
    field: 'AI & Machine Learning',
    description: 'Computer vision OCR pipeline converting scanned document archives, receipts, and invoices into cleanly structured, styled Excel spreadsheets using optical character recognition.',
    fullDetails: 'Employs OpenCV image pre-processing (adaptive binarization, deskewing) and Tesseract OCR engine to parse tabular data from image or PDF scans directly into formatted openpyxl workbooks.',
    tags: ['Python', 'Flask', 'Tesseract OCR', 'OpenPyXL', 'Poppler', 'Computer Vision'],
    github: 'https://github.com/BongaManzini/imagesense-ocr',
    highlight: 'Document Vision & Data Automation',
    deployment: 'Flask & OCR Pipeline'
  },
  {
    id: 'algorithmic-trading',
    title: 'Algorithmic Trading & Momentum Indicators',
    field: 'AI & Machine Learning',
    description: 'Quantitative algorithmic models calculating Relative Strength Index (RSI) momentum and 50/200-day Simple Moving Average crossovers for algorithmic technical analysis and backtesting.',
    fullDetails: 'Simulates momentum trading strategies across equity and crypto price series. Calculates historical drawdown, Sharpe ratios, and signal execution timing.',
    tags: ['Python', 'Algorithmic Trading', 'Quantitative Finance', 'Matplotlib', 'Pandas', 'Backtesting'],
    github: 'https://github.com/BongaManzini/algorithmic-trading-models',
    highlight: 'Quantitative Technical Analysis',
    deployment: 'Python Quantitative Model'
  },
  {
    id: 'studyplan',
    title: 'StudyPlan Assistant – AI Curriculum Synthesis',
    field: 'AI & Machine Learning',
    description: 'Adaptive curriculum intelligence system designed to ingest course syllabus materials and lecture transcription data to generate synchronized, adaptive learning plans tailored to student needs.',
    fullDetails: 'Extracts module outcomes, aligns lecture transcripts with examination objectives, and generates dynamically adjusted revision timelines.',
    tags: ['TypeScript', 'Document Parsing', 'AI Study Assistant', 'Knowledge Retrieval', 'Node.js'],
    github: 'https://github.com/BongaManzini/StudyPlan',
    highlight: 'Adaptive Study Synthesis',
    deployment: 'TypeScript Application'
  },
  {
    id: 'mintek-flotation',
    title: 'Mintek Flotation AI Optimizer',
    field: 'AI & Machine Learning',
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
    field: 'AI & Machine Learning',
    description: 'Audience intelligence and commentary sentiment classification pipeline parsing user discourse and topical sentiment across video channels.',
    fullDetails: 'Processes unstructured viewer comment streams using VADER sentiment scoring and semantic classification. Automatically clusters feedback into actionable categories (feature requests, complaints, praise, bug reports) to inform creator content strategy.',
    tags: ['NLP', 'Python', 'Sentiment Analysis', 'VADER', 'YouTube Data API', 'Audience Analytics'],
    github: 'https://github.com/BongaManzini/youtube-commentary-intel',
    highlight: 'Audience Intelligence NLP',
    deployment: 'Python NLP Service'
  },

  // 4. SOFTWARE ENGINEERING & WEB APPS
  {
    id: 'skyapp',
    title: 'SkyApp – AR Celestial Planetarium & Star Map',
    field: 'Software Engineering',
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
    field: 'Software Engineering',
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
    id: 'unisa-nexus-hub',
    title: 'UNISA Nexus Hub',
    field: 'Software Engineering',
    description: 'Campus resource portal and academic utility suite engineered for University of South Africa scholars, featuring timetable synchronization, study hub navigators, and course tools.',
    fullDetails: 'Designed for high accessibility, mobile ergonomics, and low-bandwidth resilience. Integrates study group discovery, assessment countdowns, and quick access to essential academic portals with a modern Shadcn UI.',
    tags: ['React', 'TypeScript', 'Vite', 'Shadcn UI', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com/BongaManzini/unisa-nexus-hub',
    liveUrl: 'https://bongamanzini.github.io/unisa-nexus-hub/',
    highlight: 'Campus Resource & Student Utility',
    deployment: 'GitHub Pages'
  },
  {
    id: 'master-planner-pro',
    title: 'Master Planner Pro – Brutalist Dashboard',
    field: 'Software Engineering',
    description: 'High-contrast neo-brutalist daily productivity dashboard with multi-month calendar navigation, hourly time-blocking schedules, goal progression tracking, and local storage offline persistence.',
    fullDetails: 'Built with focused zero-friction design principles. Features keyboard-first shortcuts, draggable daily task queues, time-allocation breakdown analytics, and zero-dependency offline local storage.',
    tags: ['JavaScript', 'Tailwind CSS', 'Brutalist UI', 'LocalStorage', 'Productivity Engine'],
    github: 'https://github.com/BongaManzini/master-planner-pro',
    liveUrl: 'https://bongamanzini.github.io/master-planner-pro/',
    highlight: 'Neo-Brutalist Daily Planner',
    deployment: 'GitHub Pages'
  },
  {
    id: 'sociology-nexus',
    title: 'Sociology Nexus Platform',
    field: 'Software Engineering',
    description: 'Interactive sociological learning platform and concept visualizer built with Go, Chi router, and high-performance server-rendered Templ components for rapid and lightweight page transitions.',
    fullDetails: 'Leverages the speed and concurrency of Go with typed HTML rendering using Templ. Explores foundational sociological theories, institutional dynamics, and demographic patterns with minimal client overhead.',
    tags: ['Go', 'Chi Router', 'Templ', 'HTMX / Web UI', 'Full-Stack Go', 'Educational Tech'],
    github: 'https://github.com/BongaManzini/sociology-nexus',
    highlight: 'Modern Full-Stack Go Architecture',
    deployment: 'Go HTTP Microservice'
  },
  {
    id: 'unisupport-specs',
    title: 'UniSupport Student Platform Specifications',
    field: 'Software Engineering',
    description: 'Crowdsourced student assistance ecosystem blueprints, data schemas, verification models, and open-source tooling architecture.',
    fullDetails: 'Comprehensive system specification covering student peer support crowdsourcing, academic resource verification workflows, database schemas, and microservice integration blueprints tailored for African tertiary education institutions.',
    tags: ['System Architecture', 'EdTech Specs', 'Data Schemas', 'Crowdsourcing Blueprints', 'Technical Writing'],
    github: 'https://github.com/BongaManzini/unisupport-architecture-specs',
    highlight: 'Crowdsourced EdTech Blueprints',
    deployment: 'System Architecture Specs'
  },

  // 5. IT SUPPORT & AUTOMATION
  {
    id: 'devdesk-pro',
    title: 'DevDesk Pro – Service Desk Ticket & Telephony Automation',
    field: 'IT Support & Automation',
    description: 'High-velocity Manifest V3 Chrome extension suite automating service desk workflows: DOM macro click-recording, batch ticket clearance, Telviva account unlockers, and QueueMetrics call telemetry scraping.',
    fullDetails: 'Significantly reduces mean-time-to-resolution (MTTR) by automating repetitive click paths across enterprise helpdesk consoles. Includes configurable script macros and QueueMetrics telephony telemetry extraction.',
    tags: ['Chrome Extension MV3', 'Service Workers', 'DOM Automation', 'JavaScript', 'IT Support Ops'],
    github: 'https://github.com/BongaManzini/devdesk-pro',
    highlight: 'High-Velocity Support Automation',
    deployment: 'Chrome Web Store / MV3'
  },
  {
    id: 'it-support-tools-hub',
    title: 'IT Support Tools Hub – Configurable Macro Engine',
    field: 'IT Support & Automation',
    description: 'Configurable browser automation extension providing hotkey macros, support workflow presets, canned responses, and rapid resolution toolkits for IT helpdesk engineers.',
    fullDetails: 'Equips technical support agents with one-click canned responses, regex search highlighters, and DOM automation hooks to streamline helpdesk turnaround time.',
    tags: ['Chrome Extension MV3', 'JavaScript', 'DOM Automation', 'Helpdesk Tooling', 'Workflow Acceleration'],
    github: 'https://github.com/BongaManzini/it-support-tools-hub',
    highlight: 'Configurable Macro Automation',
    deployment: 'Chrome Web Store / MV3'
  },
  {
    id: 'media-cloud-syncer',
    title: 'Media Cloud Syncer – Desktop Downloader & Cloud Syncer',
    field: 'IT Support & Automation',
    description: 'Modern desktop media downloader and automated cloud synchronization utility built with Python, CustomTkinter dark-mode GUI, and yt-dlp asynchronous download pipelines for automated digital asset archiving.',
    fullDetails: 'Engineered with clean CustomTkinter aesthetics, multithreaded queueing, format transcoding presets, and automated file-system sorting for digital asset organization.',
    tags: ['Python', 'CustomTkinter', 'yt-dlp', 'Desktop GUI', 'Async Pipeline', 'Cloud Sync'],
    github: 'https://github.com/BongaManzini/media-cloud-syncer',
    highlight: 'Modern Desktop Sync Utility',
    deployment: 'Python Desktop GUI'
  },

  // 6. SOUTH AFRICAN INFORMATICS & SOCIO-ECONOMIC VERIFICATION
  {
    id: 'bee-simulator',
    title: 'B-BBEE Scorecard Simulator & Reality Check',
    field: 'Data Science',
    description: 'Interactive mathematical decision-support system modeling the DTI Codes of Good Practice scorecard. Proves empirically that 100% white-owned SMEs achieve Level 4 compliance (100% procurement recognition) without altering equity.',
    fullDetails: 'Models the 5 official scorecard pillars: Ownership (25 pts), Management Control (19 pts), Skills Development (25 pts), ESD (42 pts), and SED (5 pts). Implements the priority sub-minimum discounting principle and computes procurement multiplier recognition factors for corporate tendering panels.',
    tags: ['Data Science', 'DTI Codes', 'Economic Modeling', 'JavaScript', 'Tailwind CSS', 'Public Policy'],
    github: 'https://github.com/BongaManzini/bee-simulator-reality-check',
    liveUrl: 'https://bongamanzini.github.io/bee-simulator-reality-check/',
    highlight: 'DTI Codes Mathematical Model',
    deployment: 'GitHub Pages',
    featured: true
  },
  {
    id: 'racelaw-auditor',
    title: 'The Law Auditor – SA Legislative Verification Engine',
    field: 'Software Engineering',
    description: 'Independent civic verification tool auditing viral claims of "145 race laws". Cross-references each cited statute against the official Government Gazette and Section 9(2) Constitutional jurisprudence.',
    fullDetails: 'Classifies statutes into Constitutional Redress (Sec 9(2) affirmative action), Repealed Apartheid Statutes (abolished in 1991), Subordinate Sector Regulations, and Universal Commercial Acts (FATF anti-money laundering registries) to separate fact from disinformation.',
    tags: ['Civic Informatics', 'Legal Tech', 'Government Gazette', 'JavaScript', 'Constitutional Law'],
    github: 'https://github.com/BongaManzini/racelaw-auditor',
    liveUrl: 'https://bongamanzini.github.io/racelaw-auditor/',
    highlight: 'Statute Verification Engine',
    deployment: 'GitHub Pages'
  },
  {
    id: 'xenophobia-mythbuster',
    title: 'Xenophobia Myth-Buster – Census Demographic Reality',
    field: 'Data Science',
    description: 'Interactive perception vs reality demographic visualizer contrasting public estimates against official Stats SA Census 2022 and Department of Home Affairs empirical data.',
    fullDetails: 'Features an interactive guess slider contrasting viral assertions (20M–30M foreigners) against official Census enumeration: 2.42M foreign-born residents (3.9% of population). Synthesizes OECD and World Bank research showing immigrant micro-enterprises employ an average of 2.3 South African nationals.',
    tags: ['Stats SA Census 2022', 'Data Science', 'Demographic Viz', 'OECD Research', 'Civic Tech'],
    github: 'https://github.com/BongaManzini/xenophobia-myth-buster',
    liveUrl: 'https://bongamanzini.github.io/xenophobia-myth-buster/',
    highlight: 'Census 2022 Data Visualizer',
    deployment: 'GitHub Pages',
    featured: true
  },
  {
    id: 'clinic-smart-queue',
    title: 'Public Clinic Smart Queue & USSD Triage System',
    field: 'Software Engineering',
    description: 'Virtual ticketing and USSD appointment triage platform reducing 6+ hour physical clinic queues to scheduled arrival windows, eliminating pre-dawn crowds and transmission of airborne contagion.',
    fullDetails: 'Features fast-track queue routing separating repeat chronic medication pickups (CCMDD) from general consultations, automated SMS call-forward alerts, a zero-data USSD gateway simulator (*120*2546#), and nurse call-station triage controls.',
    tags: ['Healthcare Informatics', 'Virtual Queueing', 'USSD Simulator', 'JavaScript', 'Process Re-engineering'],
    github: 'https://github.com/BongaManzini/public-clinic-smart-queue',
    liveUrl: 'https://bongamanzini.github.io/public-clinic-smart-queue/',
    highlight: 'Healthcare Process Re-engineering',
    deployment: 'GitHub Pages'
  },
  {
    id: 'stokvel-ledger',
    title: 'Stokvel Digital Trust Ledger',
    field: 'Software Engineering',
    description: 'Transparent community savings club accounting ledger, audit trail, and rotational payout coordinator digitizing South Africa\'s R50-billion informal communal savings economy.',
    fullDetails: 'Replaces paper notebooks with an immutable digital transaction ledger. Tracks monthly contributions, bank reference reconciliation, rotational monthly payout disbursements, and annual grocery lump-sum distribution with full audit accountability.',
    tags: ['FinTech', 'Financial Inclusion', 'Stokvel Accounting', 'Digital Ledger', 'Informal Economy'],
    github: 'https://github.com/BongaManzini/stokvel-digital-ledger',
    liveUrl: 'https://bongamanzini.github.io/stokvel-digital-ledger/',
    highlight: 'R50B Informal Savings Digitization',
    deployment: 'GitHub Pages'
  },
  {
    id: 'gbv-support-directory',
    title: 'GBV Crisis Support & Safe Shelter Directory',
    field: 'Cybersecurity',
    description: 'Privacy-by-design crisis directory connecting survivors of Gender-Based Violence with accredited shelters, Thuthuzela Care Centres, and legal protection orders with zero digital trace.',
    fullDetails: 'Built with active safety mechanisms: 1-click Quick Exit (ESC key) that immediately flushes local session storage and replaces history stack with Google Weather, discreet tab disguise modes, and direct one-touch emergency hotline routing.',
    tags: ['Privacy-by-Design', 'Crisis Informatics', 'Security & Safety', 'Thuthuzela Centres', 'Confidential Tech'],
    github: 'https://github.com/BongaManzini/gbv-support-directory',
    liveUrl: 'https://bongamanzini.github.io/gbv-support-directory/',
    highlight: 'Privacy-by-Design Crisis Engine',
    deployment: 'GitHub Pages'
  },
  {
    id: 'apartheid-democracy-timeline',
    title: 'Apartheid vs Democracy Dual-Axis Legal Timeline',
    field: 'Software Engineering',
    description: 'Dual-axis comparative legal timeline contrasting Apartheid criminal segregation statutes (1948–1990) with Constitutional democratic redress legislation (1994–2026).',
    fullDetails: 'Side-by-side thematic comparisons across Labor (Job Reservation vs Employment Equity), Land (Group Areas vs Restitution Act), Education (Bantu Education vs Skills Development), and Capital (Physical Planning vs B-BBEE) demonstrating why the "BEE is reverse apartheid" false equivalence fails.',
    tags: ['Legal Informatics', 'Constitutional Law', 'Dual-Timeline', 'Interactive Viz', 'History & Jurisprudence'],
    github: 'https://github.com/BongaManzini/apartheid-vs-democracy-timeline',
    liveUrl: 'https://bongamanzini.github.io/apartheid-vs-democracy-timeline/',
    highlight: 'Comparative Jurisprudence Timeline',
    deployment: 'GitHub Pages'
  },
  {
    id: 'trade-truth-dashboard',
    title: 'Trade Truth – SA-US Bilateral Economic Reality',
    field: 'Data Science',
    description: 'Macroeconomic dashboard tracking the real commercial relationship between South Africa and the United States, dismantling recurring panic regarding sanctions and currency collapse.',
    fullDetails: 'Visualizes $14.2 Billion (R265B) in annual exports (automotive BMW/Mercedes, platinum group metals, citrus, wine), confirming South Africa\'s trade surplus with the US, active AGOA duty-free status, and specific non-governmental PEPFAR healthcare grant allocations.',
    tags: ['Trade Analytics', 'Macroeconomics', 'AGOA Data', 'Customs Telemetry', 'Bilateral Relations'],
    github: 'https://github.com/BongaManzini/trade-truth-dashboard',
    liveUrl: 'https://bongamanzini.github.io/trade-truth-dashboard/',
    highlight: 'Macroeconomic Trade Telemetry',
    deployment: 'GitHub Pages'
  },
  {
    id: 'spaza-smart-inventory',
    title: 'Spaza-Smart Inventory Predictor',
    field: 'AI & Machine Learning',
    description: 'Township Spaza shop decision-support forecasting engine predicting stockouts by correlating staple grocery turnover with monthly SASSA grant payment cycles.',
    fullDetails: 'Features a Python predictive module and interactive web dashboard simulating demand surges (300% to 450% velocity during SASSA grant payout weeks) across maize meal, cooking oil, bread, rice, and milk to eliminate lost monthly revenues.',
    tags: ['Python', 'Pandas', 'SASSA Grants', 'Informal Retail', 'Predictive Modeling', 'Decision Support'],
    github: 'https://github.com/BongaManzini/spaza-smart-inventory',
    liveUrl: 'https://bongamanzini.github.io/spaza-smart-inventory/',
    highlight: 'SASSA-Driven Demand Forecasting',
    deployment: 'GitHub Pages & Python CLI'
  },
  {
    id: 'telco-sentiment-sentinel',
    title: 'Telco Brand Sentiment Sentinel',
    field: 'AI & Machine Learning',
    description: 'Real-time NLP sentiment monitor and "Anger Index" detecting South African telecommunications outages across social media for Rain, Telkom, Vodacom, MTN, and Vumatel.',
    fullDetails: 'Scrapes and analyzes unstructured complaints using VADER sentiment scoring and South African telecommunications outage lexicons ("red light flashing", "no signal", "cut fibre") to detect network down events before official ISP notifications.',
    tags: ['NLP', 'Python', 'VADER', 'Sentiment Analysis', 'Outage Detection', 'Telecom Analytics'],
    github: 'https://github.com/BongaManzini/telco-sentiment-sentinel',
    liveUrl: 'https://bongamanzini.github.io/telco-sentiment-sentinel/',
    highlight: 'Real-Time ISP Anger Index',
    deployment: 'GitHub Pages & Python CLI'
  },
  {
    id: 'tech-proposals-research',
    title: 'Informatics Research & Innovation Challenge Proposals',
    field: 'Data Science',
    description: 'Curated repository of technical challenge submissions (GKSS, IBM), AI career guidance system architectures, and informatics research papers.',
    fullDetails: 'Contains competition papers, AI-driven career guidance algorithms, zero-trust perimeter routing slides (IronTunnel), and historical legislative data analysis.',
    tags: ['Research Proposals', 'IBM Innovation', 'GKSS Challenge', 'Informatics', 'Zero-Trust Architecture'],
    github: 'https://github.com/BongaManzini/tech-proposals-and-research',
    highlight: 'Innovation & Research Papers',
    deployment: 'Research & Publications'
  }
];

const CS_FIELDS: CSField[] = [
  'Cybersecurity',
  'Software Engineering',
  'AI & Machine Learning',
  'Data Science',
  'IT Support & Automation'
];

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 0C5.397 0 .016 5.379.016 12.013c0 2.119.553 4.186 1.606 6.009L0 24l6.167-1.619a11.97 11.97 0 005.864 1.523h.005c6.633 0 12.016-5.38 12.016-12.014C24.052 5.379 18.666 0 12.031 0zm.005 21.99a9.98 9.98 0 01-5.09-1.39l-.365-.217-3.784.993 1.01-3.69-.238-.378a9.96 9.96 0 01-1.531-5.301c0-5.518 4.49-10.007 10.012-10.007 2.673 0 5.185 1.042 7.075 2.932 1.89 1.89 2.93 4.403 2.93 7.076 0 5.518-4.49 10.007-10.019 10.007zm5.485-7.487c-.3-.15-1.776-.876-2.05-.977-.275-.1-.475-.15-.675.15s-.775.976-.95 1.176c-.176.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.488-.893-.797-1.495-1.782-1.67-2.082-.175-.3-.018-.462.132-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.626-.925-2.227c-.243-.585-.49-.506-.675-.515l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.026-1.05 2.502 1.075 2.903 1.225 3.103c.15.2 2.115 3.23 5.123 4.53.715.31 1.273.495 1.708.633.718.228 1.371.196 1.888.119.576-.086 1.775-.726 2.025-1.427.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
    </svg>
  );
}

export default function App() {
  const [activeField, setActiveField] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [liveOnly, setLiveOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grouped' | 'grid'>('grouped');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);
  const [copiedInfo, setCopiedInfo] = useState<string | null>(null);

  const liveCount = useMemo(() => PROJECTS.filter(p => !!p.liveUrl).length, []);

  // Filter projects based on field, live filter, and search
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      if (activeField !== 'All' && project.field !== activeField) {
        return false;
      }
      if (liveOnly && !project.liveUrl) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTags = project.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesHighlight = project.highlight?.toLowerCase().includes(query);
        const matchesField = project.field.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesHighlight && !matchesField) {
          return false;
        }
      }
      return true;
    });
  }, [activeField, liveOnly, searchQuery]);

  const handleCopyClone = (githubUrl: string, id: string) => {
    const command = `git clone ${githubUrl}.git`;
    navigator.clipboard.writeText(command);
    setCopiedCloneId(id);
    setTimeout(() => {
      setCopiedCloneId(null);
    }, 2000);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(label);
    setTimeout(() => {
      setCopiedInfo(null);
    }, 2000);
  };

  const renderFieldIcon = (field: CSField, className = 'w-4 h-4') => {
    switch (field) {
      case 'Cybersecurity':
        return <Shield className={className} />;
      case 'Software Engineering':
        return <Globe className={className} />;
      case 'AI & Machine Learning':
        return <Cpu className={className} />;
      case 'Data Science':
        return <BarChart3 className={className} />;
      case 'IT Support & Automation':
        return <Wrench className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };

  const getFieldBadgeStyle = (field: CSField) => {
    const info = CS_FIELD_INFO[field];
    return `${info.badgeBg} ${info.badgeBorder} ${info.badgeText}`;
  };

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-3px] hover:border-slate-700/80 group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider font-semibold ${getFieldBadgeStyle(project.field)}`}>
            {renderFieldIcon(project.field, 'w-3.5 h-3.5')}
            <span>{CS_FIELD_INFO[project.field]?.shortLabel || project.field}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Demo
              </span>
            )}
            {project.deployment && (
              <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/70 text-[10px] text-slate-300 font-mono">
                {project.deployment}
              </span>
            )}
          </div>
        </div>

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

        <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                setActiveField('All');
              }}
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
  );

  return (
    <div className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 no-print">
        <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-indigo-500/10 blur-[170px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-10">
        {/* Navigation / Header */}
        <header className="sticky top-4 z-40 mb-10 py-3.5 px-5 rounded-2xl glass-card backdrop-blur-xl border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 shadow-xl no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-base shadow-md shadow-cyan-500/20">
              BM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white block">Bonga Manzini</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Software Engineer • BSc Informatics Candidate</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-mono text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#cs-fields" className="hover:text-cyan-400 transition-colors">CS Fields</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects ({PROJECTS.length})</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCvModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>View CV</span>
            </button>

            <a
              href="https://wa.me/27837045382"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/BongaManzini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              BSc Informatics @ UNISA • Business Information Systems
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              DIRISA SDC 2026 Datathon Finalist
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
              <Brain className="w-3 h-3 text-indigo-400" />
              Top 20% Problem Solving (Fluid Intelligence)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Bridging{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
              Cybersecurity
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Software Engineering
            </span>
            , &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-emerald-400 bg-clip-text text-transparent">
              AI / Data Science
            </span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-3xl">
            Hi, I’m <strong className="text-white font-semibold">Bonga Manzini</strong> — a software engineer and Informatics student at the University of South Africa (UNISA). I engineer resilient architectures across <strong className="text-rose-300 font-medium">Cybersecurity</strong>, <strong className="text-cyan-300 font-medium">Full-Stack Web Systems</strong>, <strong className="text-purple-300 font-medium">AI & ML</strong>, <strong className="text-emerald-300 font-medium">Data Science</strong>, and <strong className="text-amber-300 font-medium">IT Support Automation</strong>.
          </p>

          {/* Quick Action Row */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Explore Projects by Field ({PROJECTS.length})</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setShowCvModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>View Full CV / Resume</span>
            </button>

            <a
              href="mailto:bongamanzini955@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>bongamanzini955@gmail.com</span>
            </a>

            <a
              href="https://wa.me/27837045382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-mono text-emerald-400 hover:bg-emerald-950/40 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>083 704 5382</span>
            </a>
          </div>

          {/* CS Fields Quick Count Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-10 pt-8 border-t border-slate-800/80">
            {CS_FIELDS.map((field) => {
              const count = PROJECTS.filter(p => p.field === field).length;
              const info = CS_FIELD_INFO[field];
              return (
                <button
                  key={field}
                  onClick={() => {
                    setActiveField(field);
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3 rounded-xl glass-card text-left hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={info.badgeText}>{renderFieldIcon(field, 'w-4 h-4')}</span>
                    <span className="text-xs font-mono font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded">
                      {count}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {info.shortLabel}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">Projects</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section: CS Fields Breakdown Hub */}
        <section id="cs-fields" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Layers className="w-4 h-4" />
            <span>Computer Science Domains</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Fields of Practice & Expertise</h2>
          <p className="text-sm text-slate-400 font-light mb-8 max-w-2xl">
            My work spans 5 dedicated disciplines within computing, each backed by production codebases, live deployments, and verified technical execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Cybersecurity */}
            <div className="glass-card p-6 rounded-2xl border-rose-500/20 hover:border-rose-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[10px] font-mono">
                    4 Projects
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cybersecurity (Cybersec)</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Real-time threat defense architectures: synthetic deepfake voice/video detection, autonomous zero-touch firewall auto-remediation, packet telemetry, and community cyber education.
                </p>
                <div className="text-[11px] font-mono text-rose-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• DeepSentryAI (Call Center Voice Defense)</p>
                  <p>• Self-Healing Network (Auto Firewall Remediation)</p>
                  <p>• UbuntuSec (Gamified Defense Platform - Live)</p>
                  <p>• Cyber Threat Telemetry Dashboard</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveField('Cybersecurity');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View Cybersec Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. Software Engineering */}
            <div className="glass-card p-6 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                    5 Projects
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Software Engineering</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Modern full-stack web platforms, 3D WebGL spatial environments, progressive web apps (PWAs), high-concurrency Go microservices, and campus portals.
                </p>
                <div className="text-[11px] font-mono text-cyan-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• SkyApp (Camera AR Celestial Map - Live)</p>
                  <p>• June 16 Memorial (3D WebGL Spatial - Live)</p>
                  <p>• UNISA Nexus Hub (Student Portal - Live)</p>
                  <p>• Master Planner Pro (Brutalist Planner - Live)</p>
                  <p>• Sociology Nexus (Go, Chi & Templ)</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveField('Software Engineering');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View Software Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. AI & Machine Learning */}
            <div className="glass-card p-6 rounded-2xl border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
                    5 Projects
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI & Machine Learning</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Google Gemini multimodal conversational models, assistive cognitive training engines, computer vision OCR pipelines, and predictive Random Forest models.
                </p>
                <div className="text-[11px] font-mono text-purple-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• FocusFlux (Gemini AI Cognitive Wellness - Live)</p>
                  <p>• ByteCraft (Student Dropout Random Forest)</p>
                  <p>• ImageSense (Computer Vision OCR Pipeline)</p>
                  <p>• Algorithmic Trading (Quantitative Momentum)</p>
                  <p>• StudyPlan (Adaptive Syllabus Synthesis)</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveField('AI & Machine Learning');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View AI & ML Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. Data Science */}
            <div className="glass-card p-6 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                    2 Projects • Datathon
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Data Science & Geospatial</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  High-dimensional spatial modeling, electoral geography analysis, deprivation friction indexing, and large-scale educational dataset analytics.
                </p>
                <div className="text-[11px] font-mono text-emerald-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• CivicPulse (DIRISA Datathon 2026 Finalist - Live)</p>
                  <p>• Matric Examination Results Data Pipeline</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveField('Data Science');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View Data Science Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 5. IT Support & Automation */}
            <div className="glass-card p-6 rounded-2xl border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono">
                    3 Projects • Extensions
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">IT Support & Automation</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Chrome Manifest V3 browser automation extensions, QueueMetrics call scraping, Telviva unlockers, DOM click-recording macros, and cloud syncing utilities.
                </p>
                <div className="text-[11px] font-mono text-amber-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• DevDesk Pro (Service Desk MV3 Extension)</p>
                  <p>• IT Support Tools Hub (Macro Automation MV3)</p>
                  <p>• Media Cloud Syncer (Desktop Cloud Syncer GUI)</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveField('IT Support & Automation');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View IT Support Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6. Robotics & Systems (Academic) */}
            <div className="glass-card p-6 rounded-2xl border-indigo-500/20 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] font-mono">
                    UNISA Certified
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Robotics & Systems Pedagogy</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Formal certification from the University of South Africa (UNISA) in robotic hardware components, sensory integration, algorithmic control, and educational pedagogy.
                </p>
                <div className="text-[11px] font-mono text-indigo-300/80 space-y-1 border-t border-slate-800 pt-3">
                  <p>• I-SET Robotics Components Certification (NQF 5)</p>
                  <p>• Sensor feedback loops & embedded logic</p>
                  <p>• Algorithmic systems pedagogy</p>
                </div>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('education');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 w-full py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 text-xs font-mono flex items-center justify-center gap-1 transition-all"
              >
                <span>View Credentials</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Section: About Me */}
        <section id="about" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">About Bonga Manzini</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-8 space-y-4 text-sm text-slate-300 font-light leading-relaxed">
              <p>
                I am a software engineer and BSc Informatics student at the <strong className="text-white font-medium">University of South Africa (UNISA)</strong>, majoring in <strong className="text-white font-medium">Business Information Systems</strong>. My approach unites structured enterprise systems modeling with modern, full-stack software development.
              </p>
              <p>
                Beyond coursework, I have engineered and published <strong className="text-white font-medium">19 functional software repositories</strong> across key CS fields: <strong className="text-rose-300 font-medium">Cybersecurity</strong>, <strong className="text-cyan-300 font-medium">Software Engineering</strong>, <strong className="text-purple-300 font-medium">AI & ML</strong>, <strong className="text-emerald-300 font-medium">Data Science</strong>, and <strong className="text-amber-300 font-medium">IT Support Automation</strong>. Notably, my work on <strong className="text-cyan-300 font-medium">CivicPulse</strong> was selected as a finalist in the national <strong className="text-white font-medium">DIRISA Student Datathon 2026</strong> for spatial machine learning analysis of political geography and socio-economic deprivation friction across Gauteng metropolises.
              </p>
              <p>
                In standardized evaluations, I achieved a score in the <strong className="text-emerald-300 font-medium">top 20% national benchmark for Problem-Solving Capability</strong> (fluid intelligence, independent deduction, rule finding) and scored highest on <strong className="text-indigo-300 font-medium">Behavioral Activation</strong> (grit, growth mindset, and disciplined project commitment, benchmarked by Oxford University / J-PAL methodology).
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Carlswald North, Midrand, Gauteng</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Willing to Relocate: Anywhere</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Code 08 (Car Learner's License)</span>
                </div>
              </div>
            </div>

            {/* Languages & Soft Skills Sidebar */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase text-cyan-400 font-semibold">
                  <Languages className="w-4 h-4" />
                  <span>Languages Spoken</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">English</span>
                      <span className="text-cyan-400 font-mono">Expert (Home Language)</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-cyan-400 h-1.5 rounded-full w-[98%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">IsiZulu</span>
                      <span className="text-slate-400 font-mono">Intermediate</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-indigo-400 h-1.5 rounded-full w-[70%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">IsiXhosa</span>
                      <span className="text-slate-400 font-mono">Intermediate</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-indigo-400 h-1.5 rounded-full w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">Afrikaans</span>
                      <span className="text-slate-400 font-mono">Intermediate</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-slate-600 h-1.5 rounded-full w-[60%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Verified Cognitive Traits</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Fluid Problem Solving (Top 20%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>High Behavioral Activation & Grit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Systems Architecture & Rule Deduction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setShowCvModal(true)}
                className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Full CV Document</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section: Work Experience */}
        <section id="experience" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Experience</h2>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">Freelance Software Engineer & Technical Consultant</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                      Current
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400 font-mono mt-0.5">Self-Employed • Remote / Gauteng, South Africa</p>
                </div>
                <div className="text-xs font-mono text-slate-400 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700">
                  Jan 2022 – Present
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white font-medium">Multidisciplinary CS Engineering:</strong> Architected, built, and shipped 19 production-grade applications spanning Cybersecurity, Full-Stack Web Systems, AI/ML models, Data Science pipelines, and IT Browser Automation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white font-medium">DIRISA Student Datathon 2026 Finalist:</strong> Developed <em className="text-cyan-300 font-normal">CivicPulse</em>, a predictive geospatial machine learning pipeline analyzing political geography, voter participation trends, and deprivation friction across Gauteng metropolises.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white font-medium">Assistive & Cognitive AI Software:</strong> Engineered <em className="text-cyan-300 font-normal">FocusFlux</em>, a comprehensive ADHD wellness platform integrating 8 cognitive training games, biometric grounding modules, and Google Gemini AI conversational support.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white font-medium">Enterprise IT Support Extensions:</strong> Created high-velocity Manifest V3 browser extension suites (<em className="text-cyan-300 font-normal">DevDesk Pro</em> and <em className="text-cyan-300 font-normal">IT Support Tools Hub</em>) automating ticket clearance, DOM macro workflows, and QueueMetrics call telemetry scraping.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white font-medium">Cybersecurity & Vision Defense:</strong> Implemented autonomous network defense systems (<em className="text-cyan-300 font-normal">Self-Healing Network</em>) with real-time threat mitigation, real-time deepfake defense consoles (<em className="text-cyan-300 font-normal">DeepSentryAI</em>), and computer vision pipelines (<em className="text-cyan-300 font-normal">ImageSense</em>).
                  </span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                {['TypeScript', 'React 19', 'Python', 'Flask', 'Go', 'scikit-learn', 'Three.js', 'Google Gemini AI', 'Chrome MV3', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Education & Qualifications */}
        <section id="education" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Education & Credentials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Degree */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                    Undergraduate Degree • NQF Level 7
                  </span>
                  <span className="text-xs font-mono text-slate-400">2023 – 2027 (Expected)</span>
                </div>
                <h3 className="text-lg font-bold text-white">BSc in Informatics</h3>
                <p className="text-sm text-cyan-400 font-medium">Business Information Systems</p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">University of South Africa (UNISA)</p>

                <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                  Focusing on business information systems, software design patterns, enterprise database architecture, systems analysis, and computational data processing.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                Status: In progress (Part-time)
              </div>
            </div>

            {/* Robotics Certificate */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] font-mono">
                    Short Course Certificate • NQF Level 5
                  </span>
                  <span className="text-xs font-mono text-slate-400">2022</span>
                </div>
                <h3 className="text-lg font-bold text-white">I-SET Robotics Components and Pedagogy</h3>
                <p className="text-sm text-indigo-400 font-medium">Robotics & Engineering Education</p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">University of South Africa (UNISA)</p>

                <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                  Comprehensive grounding in robotic hardware components, sensor integration, autonomous algorithmic control, and educational robotics methodologies.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                Completed: Jan 2022 – Dec 2022
              </div>
            </div>

            {/* High School */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-mono">
                    Grade 12 / Matric • NQF Level 4
                  </span>
                  <span className="text-xs font-mono text-slate-400">2016 – 2020</span>
                </div>
                <h3 className="text-lg font-bold text-white">National Senior Certificate (Matric)</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Hillview High School – Pretoria, Gauteng</p>

                <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                  Completed with foundational studies in English (Home Language), Mathematics, Physical Science, and Afrikaans.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                Completed: Nov 2020
              </div>
            </div>

            {/* SA Youth Screeners Card */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-cyan-500/20">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                    Standardized Cognitive Assessment
                  </span>
                  <span className="text-xs font-mono text-slate-400">SA Youth (2023 - 2024)</span>
                </div>
                <h3 className="text-lg font-bold text-white">Problem-Solving & Behavioral Screeners</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Benchmarked by Oxford University & J-PAL</p>

                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <p>
                    <strong className="text-emerald-400 font-semibold">Problem-Solving (Top 20%):</strong> Measures fluid intelligence — deduction of underlying rules, weighing multi-variable options, and applying prior knowledge to novel systemic problems.
                  </p>
                  <p>
                    <strong className="text-indigo-400 font-semibold">Behavioral Activation:</strong> High-grit resilience profile validated against hiring benchmarks, indicating persistent goal completion.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400">
                Verified Screener Result
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects Showcase by CS Fields */}
        <section id="projects" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Code2 className="w-4 h-4" />
            <span>Categorized Project Showcase</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Projects Sorted by CS Field</h2>
              <p className="text-sm text-slate-400 font-light mt-1">
                Explore 19 open-source repositories organized into Cybersecurity, Software Engineering, AI/ML, Data Science, and IT Support.
              </p>
            </div>

            {/* View Mode Toggle & Live Filter */}
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-xl glass-card flex items-center text-xs font-mono">
                <button
                  onClick={() => setViewMode('grouped')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'grouped'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  By Field
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grid View
                </button>
              </div>

              <button
                onClick={() => setLiveOnly(!liveOnly)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                  liveOnly
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${liveOnly ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                Live Demos ({liveCount})
              </button>
            </div>
          </div>

          {/* Search & Field Filter Pills */}
          <div className="space-y-3 mb-8">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by keyword, tech, or field (e.g. Cybersec, React, DIRISA, Python, Extension)..."
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

            {/* Field Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveField('All')}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeField === 'All'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>All Fields</span>
                <span className={`text-[10px] px-1.5 rounded-full ${
                  activeField === 'All' ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  {PROJECTS.length}
                </span>
              </button>

              {CS_FIELDS.map((field) => {
                const count = PROJECTS.filter(p => p.field === field).length;
                const info = CS_FIELD_INFO[field];
                return (
                  <button
                    key={field}
                    onClick={() => setActiveField(field)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      activeField === field
                        ? `${info.badgeBg} ${info.badgeBorder} ${info.badgeText} border font-bold shadow-sm`
                        : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {renderFieldIcon(field, 'w-3.5 h-3.5')}
                    <span>{info.shortLabel}</span>
                    <span className={`text-[10px] px-1.5 rounded-full ${
                      activeField === field ? 'bg-slate-900 text-white' : 'bg-slate-800 text-slate-400'
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
          </div>

          {/* Projects Display: Grouped or Grid */}
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center glass-card rounded-2xl">
              <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No projects found</h3>
              <p className="text-sm text-slate-400 mt-1">Try adjusting your search query or selecting "All Fields".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveField('All');
                  setLiveOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' || activeField !== 'All' || searchQuery.trim() !== '' ? (
            /* Flat Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProjects.map((project) => renderProjectCard(project))}
            </div>
          ) : (
            /* Grouped View by Field */
            <div className="space-y-12">
              {CS_FIELDS.map((field) => {
                const fieldProjects = filteredProjects.filter(p => p.field === field);
                if (fieldProjects.length === 0) return null;
                const info = CS_FIELD_INFO[field];

                return (
                  <div key={field} className="space-y-4">
                    {/* Field Section Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${info.badgeBg} ${info.badgeText}`}>
                          {renderFieldIcon(field, 'w-4 h-4')}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{info.label}</h3>
                          <p className="text-xs text-slate-400 font-light">{info.description}</p>
                        </div>
                      </div>

                      <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium ${info.badgeBg} ${info.badgeBorder} ${info.badgeText}`}>
                        {fieldProjects.length} {fieldProjects.length === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>

                    {/* Field Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {fieldProjects.map((project) => renderProjectCard(project))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Section: Technical Competencies by CS Field */}
        <section id="skills" className="py-12 border-t border-slate-800/80 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Layers className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Skills Mapped to CS Fields</h2>
          <p className="text-sm text-slate-400 font-light mb-8 max-w-2xl">
            A versatile, production-tested toolkit mapped directly to the core disciplines of computer science.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cybersecurity */}
            <div className="glass-card p-5 rounded-2xl border-rose-500/20">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-rose-400 font-semibold mb-2">Cybersecurity</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                Packet Inspection (Scapy), Autonomous Firewall Rules (iptables/nftables), Biometric Audio/Video DSP Defense, Threat Telemetry, Intrusion Detection.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Scapy', 'iptables', 'Audio DSP', 'Deepfake Detection', 'Threat Intel'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-rose-300">{s}</span>
                ))}
              </div>
            </div>

            {/* Software Engineering */}
            <div className="glass-card p-5 rounded-2xl border-cyan-500/20">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-2">Software Engineering</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                React 19, TypeScript, Vite, Go (Chi Router & Templ), Three.js (WebGL), Tailwind CSS, Shadcn UI, Alpine.js, Responsive Architecture.
              </p>
              <div className="flex flex-wrap gap-1">
                {['React 19', 'TypeScript', 'Go', 'Three.js', 'Vite', 'Tailwind'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-300">{s}</span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="glass-card p-5 rounded-2xl border-purple-500/20">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-purple-400 font-semibold mb-2">AI & Machine Learning</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                Google Gemini API, scikit-learn (Random Forest, Classification), OpenCV, Audio Signal Processing, Tesseract OCR, Prompt Engineering.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Gemini API', 'scikit-learn', 'OpenCV', 'Tesseract OCR', 'Python'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-purple-300">{s}</span>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="glass-card p-5 rounded-2xl border-emerald-500/20">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">Data Science & Geospatial</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                Pandas, NumPy, Jupyter, Leaflet Geospatial Mapping, Statistical Regressions, Deprivation Friction Indexing, Plotly Telemetry.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Pandas', 'NumPy', 'Jupyter', 'Leaflet', 'Plotly', 'DIRISA SDC'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-emerald-300">{s}</span>
                ))}
              </div>
            </div>

            {/* IT Support & Automation */}
            <div className="glass-card p-5 rounded-2xl border-amber-500/20">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-amber-400 font-semibold mb-2">IT Support & Automation</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                Chrome Extension Manifest V3, DOM Automation Macros, Service Desk Ticket Clearance, QueueMetrics Telephony Scraping, Linux Daemons, CustomTkinter GUIs.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Chrome MV3', 'Service Workers', 'DOM Macros', 'QueueMetrics', 'Linux'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-amber-300">{s}</span>
                ))}
              </div>
            </div>

            {/* Robotics & Systems */}
            <div className="glass-card p-5 rounded-2xl border-indigo-500/20">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono uppercase text-indigo-400 font-semibold mb-2">Robotics & Systems</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                I-SET Robotics Components & Pedagogy (UNISA NQF 5), Hardware Sensor Control, Low-Level Algorithmic Loops, Systems Integration.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Robotics NQF 5', 'Sensory Loops', 'Algorithms', 'UNISA I-SET'].map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-indigo-300">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contact & Hire */}
        <section id="contact" className="py-14 border-t border-slate-800/80 scroll-mt-20">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Let’s build something remarkable.
              </h2>
              <p className="text-sm text-slate-300 mt-3 font-light leading-relaxed">
                I am actively seeking software engineering, cybersecurity, AI developer, or full-stack opportunities. Whether you have an open role, a freelance project, or an innovative collaboration in mind, my inbox and WhatsApp are always open.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Direct Email</span>
                      <a href="mailto:bongamanzini955@gmail.com" className="text-xs font-semibold text-white hover:text-cyan-400 transition-colors">
                        bongamanzini955@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyText('bongamanzini955@gmail.com', 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Copy Email"
                  >
                    {copiedInfo === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp / Phone Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Phone & WhatsApp</span>
                      <a href="https://wa.me/27837045382" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white hover:text-emerald-400 transition-colors">
                        083 704 5382
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyText('0837045382', 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Copy Phone"
                  >
                    {copiedInfo === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 mt-6">
                <a
                  href="https://wa.me/27837045382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>

                <a
                  href="mailto:bongamanzini955@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  onClick={() => setShowCvModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View Printable CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono no-print">
          <div>
            <p>© {new Date().getFullYear()} Bonga Manzini • Midrand, Gauteng, South Africa</p>
            <p className="text-[11px] text-slate-600 mt-0.5">BSc Informatics Student @ UNISA • Computer Science Disciplines</p>
          </div>

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
              href="https://github.com/BongaManzini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://portfolio-khaki-alpha-29.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              Live Portfolio
            </a>
          </div>
        </footer>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in no-print">
          <div className="glass-card bg-slate-900/95 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-semibold uppercase ${getFieldBadgeStyle(selectedProject.field)}`}>
                {selectedProject.field}
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

      {/* Full Digital CV Modal (Recruiter-Ready & Printable) */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[92vh] text-slate-200">
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 no-print">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <GraduationCap className="w-4 h-4" />
                <span>Curriculum Vitae • Bonga Manzini</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-sm"
                  title="Print or Save as PDF"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-extrabold text-white">Bonga Manzini</h1>
                <p className="text-sm text-cyan-400 font-mono mt-0.5">Software Engineer • BSc Informatics Candidate (UNISA)</p>
                
                <div className="mt-3 flex flex-wrap gap-y-1.5 gap-x-4 text-xs font-mono text-slate-300">
                  <span>📍 Carlswald North, Midrand, Gauteng, 1684</span>
                  <span>📧 <a href="mailto:bongamanzini955@gmail.com" className="text-cyan-300 hover:underline">bongamanzini955@gmail.com</a></span>
                  <span>📱 083 704 5382 / 067 702 4266</span>
                  <span>🚗 Code 08 (Car Learner's)</span>
                  <span>🌍 Willing to relocate: Anywhere</span>
                </div>
              </div>

              {/* Verified Cognitive & Soft Skills Screeners */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                  Verified Assessments (SA Youth / Oxford University & J-PAL)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-white">Problem-Solving Capability:</span>
                    <span className="text-emerald-300 font-mono ml-1 font-bold">Top 20%</span>
                    <p className="text-slate-400 font-light mt-0.5 leading-relaxed">
                      Measures fluid intelligence: solves functional problems by deducing rules, ignoring unnecessary details, and applying past knowledge.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Behavioral Activation:</span>
                    <span className="text-indigo-300 font-mono ml-1 font-bold">Highest Score</span>
                    <p className="text-slate-400 font-light mt-0.5 leading-relaxed">
                      Assesses grit, intrinsic motivation, and positive growth mindset validated against workplace performance standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-slate-800 pb-1">
                  Education & Qualifications
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold text-white text-sm">
                      <span>BSc Informatics (Business Information Systems)</span>
                      <span className="font-mono text-slate-400 text-xs">Jan 2023 – Nov 2027 (Expected)</span>
                    </div>
                    <p className="text-cyan-300 font-mono">University of South Africa (UNISA) • NQF Level 7</p>
                    <p className="text-slate-400 font-light mt-1">
                      Business information systems, systems analysis, data engineering, software design patterns, and database architecture.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold text-white text-sm">
                      <span>I-SET Robotics Components and Pedagogy</span>
                      <span className="font-mono text-slate-400 text-xs">Jan 2022 – Dec 2022</span>
                    </div>
                    <p className="text-indigo-300 font-mono">University of South Africa (UNISA) • Short Course Certificate (NQF 5)</p>
                    <p className="text-slate-400 font-light mt-1">
                      Robotics hardware components, sensory control loops, algorithm design, and computational teaching pedagogy.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold text-white text-sm">
                      <span>National Senior Certificate (Grade 12 / Matric)</span>
                      <span className="font-mono text-slate-400 text-xs">Jan 2016 – Nov 2020</span>
                    </div>
                    <p className="text-slate-300 font-mono">Hillview High School – Pretoria, Gauteng • NQF Level 4</p>
                    <p className="text-slate-400 font-light mt-1">
                      English (Home Language), Mathematics, Physical Science, Afrikaans (First Additional).
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-slate-800 pb-1">
                  Work Experience
                </h3>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between font-semibold text-white text-sm">
                    <span>Freelance Software Engineer & Technical Consultant</span>
                    <span className="font-mono text-slate-400 text-xs">Jan 2022 – Present</span>
                  </div>
                  <p className="text-cyan-300 font-mono">Self-Employed • Remote / Midrand, Gauteng</p>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300 font-light mt-2 leading-relaxed">
                    <li>Engineered 19 open-source software repositories across Cybersecurity, Web Systems, AI/ML, Data Science, and IT Support.</li>
                    <li>Developed <strong className="text-white">CivicPulse</strong> (DIRISA Student Datathon 2026 Finalist), analyzing electoral geography and deprivation friction across Gauteng wards using geospatial machine learning.</li>
                    <li>Built <strong className="text-white">FocusFlux</strong>, a comprehensive ADHD wellness platform featuring 8 gamified cognitive exercises and Google Gemini AI emotional support.</li>
                    <li>Constructed Manifest V3 Chrome extensions (<strong className="text-white">DevDesk Pro</strong>, <strong className="text-white">IT Support Tools</strong>) automating helpdesk ticket clearance and QueueMetrics scraping.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills Organized by CS Field */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-slate-800 pb-1">
                  Core CS Competencies & Tooling
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-rose-300">Cybersecurity:</span>
                    <span className="text-slate-300 ml-1">Deepfake voice/video DSP defense, Scapy packet inspection, firewall automation (iptables/nftables), threat telemetry.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-300">Software Engineering:</span>
                    <span className="text-slate-300 ml-1">React 19, TypeScript, Go (Chi, Templ), Three.js WebGL, Tailwind CSS, Vite, PWA, REST APIs.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-300">AI & Machine Learning:</span>
                    <span className="text-slate-300 ml-1">Google Gemini API, scikit-learn (Random Forest), OpenCV, Audio DSP, Tesseract OCR, Prompt Engineering.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-300">Data Science:</span>
                    <span className="text-slate-300 ml-1">Pandas, NumPy, Jupyter, Leaflet Geospatial, Regression Analytics (DIRISA Datathon 2026).</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-amber-300">IT Support & Automation:</span>
                    <span className="text-slate-300 ml-1">Manifest V3 Chrome extensions, DOM click-recording macros, QueueMetrics & Telviva scraping, Linux daemons, desktop syncers.</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 border-b border-slate-800 pb-1">
                  Languages
                </h3>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">English:</strong> Expert (Home Language) • <strong className="text-white">IsiZulu:</strong> Intermediate • <strong className="text-white">IsiXhosa:</strong> Intermediate • <strong className="text-white">Afrikaans:</strong> Intermediate
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end gap-3 no-print">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={() => setShowCvModal(false)}
                className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
