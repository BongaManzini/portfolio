import { Project, Certification, SkillCategory } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software & AI",
    spanClass: "md:col-span-2",
    tags: ["Python", "Java", "PHP", "JavaScript", "C++", "OOP", "APIs", "Machine Learning", "Automation"],
    iconName: "Cpu",
    accentColor: "from-sky-500 to-indigo-600",
    glowClass: "glow-cyan-hover"
  },
  {
    title: "Cybersecurity",
    spanClass: "md:col-span-1",
    tags: ["Simple Penetration-Testing", "Safe & Local Practice", "Authentication Systems", "User Access Control", "Networking Basics"],
    iconName: "ShieldAlert",
    accentColor: "from-slate-500 to-slate-700",
    glowClass: "glow-purple-hover"
  },
  {
    title: "Databases & Analytics",
    spanClass: "md:col-span-1",
    tags: ["SQL", "3rd Normal Form (3NF)", "Database Design", "Data Analysis Fundamentals", "Real Datasets Dashboard"],
    iconName: "Database",
    accentColor: "from-zinc-500 to-zinc-800",
    glowClass: "glow-cyan-hover"
  },
  {
    title: "Tools & DevOps Exploration",
    spanClass: "md:col-span-2 lg:col-span-3",
    tags: ["Git & GitHub", "Linux", "VS Code", "Postman", "Figma", "Cloud Basics (AWS/Azure)", "DevOps Culture"],
    iconName: "Terminal",
    accentColor: "from-stone-500 to-stone-700",
    glowClass: "glow-purple-hover"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-alteram-ext",
    title: "Alteram Workflow & Automation Chrome Extension",
    description: "A Manifest V3 enterprise browser extension built for workflow automation, DOM data extraction, and quick task shortcuts.",
    longDescription: "Developed as a Developer at Alteram Solutions to accelerate internal workflows. Built strictly to Chrome Extension Manifest V3 standards with background service workers, side panel integration, context menu shortcuts, and declarative network request rules that automate repetitive data processing tasks.",
    tags: ["Chrome Extension", "Manifest V3", "TypeScript", "JavaScript", "Service Workers", "Web APIs"],
    categories: ["Frontend", "Software", "DevOps"],
    projectType: "Work",
    githubUrl: "https://github.com/BongaManzini/alteram-workflow-extension",
    liveUrl: "https://github.com/BongaManzini/alteram-workflow-extension",
    simulationType: "zero-trust",
    specs: [
      { label: "Manifest Standard", value: "Chrome Extension Manifest V3" },
      { label: "Architecture", value: "Service Worker + Side Panel UI" },
      { label: "Data Pipeline", value: "DOM Parsing & Context Menus" },
      { label: "Security Boundary", value: "Host Permissions Guardrails" }
    ],
    stars: 38,
    commits: 164,
    architectureTitle: "Manifest V3 Extension Architecture",
    architectureHighlights: [
      "Background Service Worker handling asynchronous state persistence and message passing across browser tabs",
      "Custom Side Panel UI allowing side-by-side workflow management without leaving the active web page",
      "DeclarativeNetRequest rule sets filtering API payload headers securely"
    ],
    keyLearnings: [
      "Managing ephemeral state inside Manifest V3 non-persistent service workers",
      "Designing responsive extension popup and side panel interfaces"
    ],
    readme: `# Alteram Workflow & Automation Chrome Extension\n\nA Manifest V3 enterprise browser extension built for workflow automation, DOM data extraction, and quick task shortcuts.\n\n### 🚀 Key Capabilities\n* **Manifest V3 Compliant**: Built using background service workers and non-persistent event handlers.\n* **DOM Automation**: Content scripts extracting active telemetry and auto-populating form fields.\n* **Side Panel & Context Menus**: Seamless integration into Chrome UI for one-click action triggers.\n\n### 🛠️ Architecture Sample\n\`\`\`javascript\n// Background Service Worker Message Router\nchrome.runtime.onMessage.addListener((request, sender, sendResponse) => {\n  if (request.action === 'EXTRACT_DOM_METRICS') {\n    chrome.tabs.sendMessage(sender.tab.id, { command: 'RUN_EXTRACTOR' }, sendResponse);\n    return true; // Keep channel open for async response\n  }\n});\n\`\`\``
  },
  {
    id: "project-alteram-ops",
    title: "Alteram Enterprise Operations Dashboard",
    description: "A full-stack monitoring and service management system rendering live system metrics, SQL logs, and role access controls.",
    longDescription: "Engineered at Alteram Solutions to provide real-time visibility into internal service health and operational tickets. Combines a React + TypeScript frontend with a relational SQL database backend, featuring live telemetry charts, RBAC authentication, and audit logs.",
    tags: ["React", "TypeScript", "Node.js", "SQL", "REST APIs", "TailwindCSS"],
    categories: ["Frontend", "Backend", "Software", "Database"],
    projectType: "Work",
    githubUrl: "https://github.com/BongaManzini/alteram-ops-dashboard",
    liveUrl: "https://github.com/BongaManzini/alteram-ops-dashboard",
    simulationType: "asset-hub",
    specs: [
      { label: "Frontend Core", value: "React 19 + TypeScript" },
      { label: "Backend Core", value: "Node.js + REST API Router" },
      { label: "Database System", value: "Relational SQL (3NF Normalized)" },
      { label: "Security", value: "Role-Based Access Control (RBAC)" }
    ],
    stars: 29,
    commits: 210,
    architectureTitle: "Full-Stack Enterprise Dashboard",
    architectureHighlights: [
      "Stateless RESTful API layer connecting React frontend with normalized SQL database tables",
      "Real-time chart telemetry rendering server health, active tickets, and operational resolution speed",
      "Granular RBAC authorization checking user permissions on every route"
    ],
    keyLearnings: [
      "Optimizing complex SQL joins for high-density dashboard scorecards",
      "Enterprise security compliance and role delegation patterns"
    ],
    readme: `# Alteram Enterprise Operations Dashboard\n\nA full-stack monitoring and service management system rendering live system metrics, SQL logs, and role access controls.\n\n### 📊 System Highlights\n* **Real-time Telemetry**: Responsive React visualizers tracking system uptime and active tickets.\n* **3NF Database Engine**: Normalized SQL schema preventing data anomalies across service requests.\n* **Granular RBAC**: Role-based access maps restricting admin settings to authorized personnel.`
  },
  {
    id: "project-a",
    title: "AI-Powered Note Summarizer & Chatbot",
    description: "An intelligent query and text processing bot designed for rapid learning from YouTube videos and dense documentation.",
    longDescription: "This personal utility speeds up learning by processing YouTube transcripts and markdown notes. Built with modern LLM prompt templates and retrieval techniques, it acts as a private study companion that helps study Computer Science fundamentals and failing attempts securely.",
    tags: ["Python", "JavaScript", "AI Chatbot", "Note Summarization", "Prompt Engineering", "APIs"],
    categories: ["AI", "Software", "Backend"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/ai-note-summarizer",
    liveUrl: "https://github.com/BongaManzini/ai-note-summarizer",
    simulationType: "zero-trust",
    specs: [
      { label: "AI Engine", value: "Gemini 2.5 API" },
      { label: "Summarizer Hub", value: "Regex + Prompt Guardrails" },
      { label: "Input Channels", value: "YouTube API & Text Blobs" },
      { label: "Context Window", value: "High-density custom memory" }
    ],
    stars: 18,
    commits: 142,
    architectureTitle: "RAG & LLM Pipeline Architecture",
    architectureHighlights: [
      "Sliding-window regex tokenizer extracting clean context text chunks from YouTube API payloads",
      "Strict system prompt guardrails preventing hallucinated answers or out-of-scope model responses",
      "Stateless API integration using official Google Gemini SDK with response fallback caching"
    ],
    keyLearnings: [
      "Optimal chunk size calibration for dense technical study notes",
      "Handling YouTube API transcript edge-cases and auto-generated caption formatting"
    ],
    readme: `# AI-Powered Note Summarizer & Chatbot\n\nAn intelligent query and text processing bot designed for rapid learning from YouTube videos and dense documentation.\n\n### 🚀 Core Features\n* **Transcript Extraction**: Integrates with YouTube API to scrape text transcripts from instructional videos.\n* **Smart Summarization**: Custom prompt engineering templates utilizing Google Gemini API.\n* **Regex Filtering**: Strict guardrails that clean raw inputs, remove timestamp noise, and filter bad queries.\n\n### 🛠️ Tech Stack & Architecture\nThe retrieval uses a sliding window regex parser to extract text blobs:\n\`\`\`python\ndef extract_segments(text, window_size=500):\n    words = text.split()\n    return [" ".join(words[i:i+window_size]) for i in range(0, len(words), window_size)]\n\`\`\`\n\n### ⚡ Quick Start\n1. Clone this repository\n2. Configure your API credentials: \`export GEMINI_API_KEY="your-key"\`\n3. Run the development environment: \`python app.py\``
  },
  {
    id: "project-b",
    title: "Simple Penetration-Testing Practice Suite",
    description: "A safe, local security tool for analyzing basic AD networks, parsing logs, and blocking rogue subnet threats.",
    longDescription: "A safe and completely local security playground designed to practice cyber defense techniques. It features a custom automated log analyzer, port scanner, and a localized brute-force lockout simulator that tests Active Directory subnet defense principles in real time.",
    tags: ["Python", "Cybersecurity", "Log Parser", "Networking Basics", "Subnet Monitor", "Lockout System"],
    categories: ["Cybersecurity", "Software", "DevOps"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/local-pentest-practice",
    liveUrl: "https://github.com/BongaManzini/local-pentest-practice",
    simulationType: "network-monitor",
    specs: [
      { label: "Threat Scope", value: "Safe & Local Subnets Only" },
      { label: "Scan Engine", value: "Local Threaded Port Mapper" },
      { label: "Remediation", value: "Auto-IP Blacklisting Hook" },
      { label: "Diagnostics", value: "Regex Packet Pattern Identifier" }
    ],
    stars: 24,
    commits: 88,
    architectureTitle: "Defensive Network Scanner Topology",
    architectureHighlights: [
      "Multi-threaded socket port scanner bounded strictly to loopback/local laboratory interfaces",
      "Automated syslog parser matching brute-force SSH/LDAP authentication signatures",
      "Automated firewall rule injection via iptables / netsh scripting wrappers"
    ],
    keyLearnings: [
      "Avoiding subnet scan thread starvation during high-concurrency socket sweeps",
      "Designing safe sandboxes for educational active-directory threat modeling"
    ],
    readme: `# Simple Penetration-Testing Practice Suite\n\nA safe, local security tool for analyzing basic Active Directory networks, parsing logs, and blocking rogue subnet threats.\n\n### 🔒 Core Capabilities\n* **Log Parser**: Automates syslog analytics, identifying repetitive authentication failures.\n* **Network Simulator**: Safely queries local network bindings to detect unmapped open listener ports.\n* **Lockout Defense**: Simulated active lockout module that temporarily blacklists brute-force subnets.\n\n### 🛡️ Defensive Guardrails\nAll scanning activities are strictly bounded to standard localhost/loopback or specified subnet interfaces.\n\`\`\`bash\n# Example script to block unauthorized port probes\nsudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set\n\`\`\`\n\n### 📋 Execution\n\`\`\`bash\npython pentest_suite.py --scan 127.0.0.1 --audit-logs /var/log/syslog\n\`\`\``
  },
  {
    id: "project-c",
    title: "Personal Budgeting & Expense Manager",
    description: "A highly normalized database application adhering to strict 3rd Normal Form for secure financial ledger records.",
    longDescription: "A clean expense manager with an emphasis on strict data engineering. Built with a fully normalized 3rd Normal Form (3NF) relational database structure to eliminate redundancy, featuring responsive budgeting dashboards, category limits, and an interactive state synchronizer.",
    tags: ["React", "SQL", "3NF Normalization", "Database Design", "Data Analysis", "TailwindCSS"],
    categories: ["Database", "Software", "Frontend", "Backend"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/personal-budget-manager",
    liveUrl: "https://github.com/BongaManzini/personal-budget-manager",
    simulationType: "asset-hub",
    specs: [
      { label: "Normalization", value: "3rd Normal Form (3NF)" },
      { label: "Database System", value: "SQL Relational Schema" },
      { label: "Data Integrity", value: "Foreign Keys & Cascading Deletes" },
      { label: "Visualization", value: "Expense Category Distributions" }
    ],
    stars: 12,
    commits: 64,
    architectureTitle: "3NF Relational Schema Architecture",
    architectureHighlights: [
      "Rigid 3rd Normal Form decomposition ensuring zero functional dependencies on non-primary-key attributes",
      "Foreign key cascading integrity rules preventing dangling ledger records",
      "Optimistic React UI synchronization keeping local view state aligned with SQL transaction responses"
    ],
    keyLearnings: [
      "Tradeoffs between query JOIN complexity and mathematical 3NF database normalization",
      "Designing responsive budget dashboards for fast data analysis"
    ],
    readme: `# Personal Budgeting & Expense Manager\n\nA highly normalized database application adhering to strict 3rd Normal Form (3NF) for secure financial ledger records.\n\n### 📊 Key Highlights\n* **3NF Database Schema**: Designed with absolute zero redundant columns to maintain mathematical consistency.\n* **Cascading Operations**: Clean cascading delete bindings preventing orphaned transactions.\n* **Interactive Dashboard**: Responsive visualizations rendered via React & custom charts.\n\n### 🗄️ Database Normalization Model\n\`\`\`sql\n-- Third Normal Form (3NF) Expense Table Definition\nCREATE TABLE expenses (\n    id SERIAL PRIMARY KEY,\n    amount DECIMAL(10, 2) NOT NULL,\n    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,\n    location_id INTEGER REFERENCES locations(id) ON DELETE SET NULL\n);\n\`\`\``
  },
  {
    id: "project-d",
    title: "Secure Authentication & User Management Core",
    description: "A localized authentication engine implementing salted hashing, secure session tokens, and strict access levels.",
    longDescription: "A robust user security system simulating production-grade authentication workflows. It implements SHA-256 salted password hashing, stateless JSON Web Tokens (JWT) for secure session persistence, and rigorous role-based validation to defend against authorization bypass vulnerabilities.",
    tags: ["Java", "PHP", "Cryptography", "Session Tokens", "Secure Auth", "Databases"],
    categories: ["Cybersecurity", "Software", "Backend"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/secure-auth-core",
    liveUrl: "https://github.com/BongaManzini/secure-auth-core",
    simulationType: "zero-trust",
    specs: [
      { label: "Hashing Algorithm", value: "PBKDF2 with SHA-256" },
      { label: "Session Security", value: "Stateless JWT Auth Tokens" },
      { label: "Data Architecture", value: "Normalized User/Role Schemas" },
      { label: "Defensive Measures", value: "Anti Brute-Force Lockout Engine" }
    ],
    stars: 15,
    commits: 79,
    architectureTitle: "Cryptographic Authentication Pipeline",
    architectureHighlights: [
      "High-iteration PBKDF2/SHA-256 password salting to protect stored credentials against rainbow tables",
      "Stateless JWT token verification with cryptographic signature validation",
      "Role-Based Access Control (RBAC) middleware verifying endpoint authorization levels"
    ],
    keyLearnings: [
      "Preventing timing-attack vulnerabilities during password hash comparisons",
      "Managing token expiration and key rotation schemes"
    ],
    readme: `# Secure Authentication & User Management Core\n\nA localized authentication engine implementing salted hashing, secure session tokens, and strict access levels.\n\n### 🔑 Security Features\n* **Salted Hashing**: Implements standard high-security PBKDF2/SHA-256 for secure local credentials.\n* **Stateless Sessions**: Generates standard JSON Web Tokens (JWT) for robust authenticated sessions.\n* **Strict Validation**: Rigid role-based access maps preventing typical privilege-escalation bugs.\n\n### 🔒 Cryptographic Setup\n\`\`\`java\n// Password hashing implementation with Salt\npublic byte[] getHash(String password, byte[] salt) throws Exception {\n    KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 256);\n    SecretKeyFactory f = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");\n    return f.generateSecret(spec).getEncoded();\n}\n\`\`\``
  },
  {
    id: "project-e",
    title: "UNISA Informatics Hackathon Dashboard",
    description: "An interactive analytics system processing live datasets to map developer performance metrics and scoreboards.",
    longDescription: "A dynamic data visualization dashboard engineered to parse and display real hackathon datasets. Built with React and structured SQL queries, it renders clean correlation insights, team contribution scoreboards, and category limit trackers to give teams a real-time statistical edge.",
    tags: ["React", "SQL", "Data Analysis", "Figma", "TailwindCSS", "Recharts"],
    categories: ["Database", "Software", "Frontend"],
    projectType: "Hackathon",
    githubUrl: "https://github.com/BongaManzini/hackathon-analytics-dashboard",
    liveUrl: "https://github.com/BongaManzini/hackathon-analytics-dashboard",
    simulationType: "asset-hub",
    specs: [
      { label: "Data Visualizer", value: "Recharts and Custom D3 Layers" },
      { label: "Normalization", value: "Strict 3rd Normal Form (3NF)" },
      { label: "Dataset Focus", value: "Pretoria Hackathon Telemetry" },
      { label: "State Sync", value: "Optimistic React State Manager" }
    ],
    stars: 31,
    commits: 195,
    architectureTitle: "Analytics Dashboard Architecture",
    architectureHighlights: [
      "Dynamic data processing engine rendering Recharts telemetry without re-render bottlenecks",
      "Relational dataset schema allowing fast group-by calculations for team leaderboards",
      "Responsive UI built with modern CSS utility tokens and glassmorphism cards"
    ],
    keyLearnings: [
      "Optimizing React state updates when processing real-time telemetry streams",
      "Designing high-density data visualizations that stay readable on mobile devices"
    ],
    readme: `# UNISA Informatics Hackathon Dashboard\n\nAn interactive analytics system processing live datasets to map developer performance metrics and scoreboards.\n\n### 📈 Dashboard Features\n* **High-Density Scoring**: Computes and indexes contestant scores across categories.\n* **Live Synchronization**: Responsive React context loops aligning scores without database overhead.\n* **Interactive Visualizations**: Generates dynamic charts charting historical performance trends.\n\n### 💻 Integration Code\n\`\`\`javascript\nimport { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';\n\n// Custom chart component for hackathon score progression\nconst ScoreProgressionChart = ({ data }) => (\n  <ResponsiveContainer width="100%" height={200}>\n    <AreaChart data={data}>\n      <XAxis dataKey="time" />\n      <YAxis />\n      <Tooltip />\n      <Area type="monotone" dataKey="score" stroke="#22d3ee" fill="rgba(34, 211, 238, 0.1)" />\n    </AreaChart>\n  </ResponsiveContainer>\n);\n\`\`\``
  },
  {
    id: "project-f",
    title: "Log Cleaner & Active Security Watchdog",
    description: "An automated security daemon that cleans temp file dumps, audits syslog files, and maps network listeners.",
    longDescription: "A Python-based automation cron utility and daemon that performs real-time file system maintenance and network threat monitoring. It scans for dangling temporary file dumps, monitors syslog bindings, alerts on unauthorized open ports, and schedules automated email reminders for security reviews.",
    tags: ["Python", "Linux", "Automation", "Syslog-ng", "Security Scripts", "Reminders"],
    categories: ["Cybersecurity", "Software", "DevOps"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/log-cleaner-watchdog",
    liveUrl: "https://github.com/BongaManzini/log-cleaner-watchdog",
    simulationType: "network-monitor",
    specs: [
      { label: "Scheduler Engine", value: "Local Multi-threaded Daemon" },
      { label: "Log Parser", value: "Automated Regex Syslog Crawler" },
      { label: "Clean Sweep", value: "Disk Temp Dump Garbage Collector" },
      { label: "Alert Channel", value: "Subprocess Shell Event Notifiers" }
    ],
    stars: 19,
    commits: 112,
    architectureTitle: "Daemon Automation & Watchdog Architecture",
    architectureHighlights: [
      "Background worker process executing non-blocking scheduled system health checks",
      "Regular expression syslog parser isolating suspicious root elevation commands",
      "Automated disk garbage collector removing temporary debug dumps beyond size thresholds"
    ],
    keyLearnings: [
      "Safely managing daemon process signals and unhandled exit traps in Python",
      "Writing resilient log parsing rules that handle high log volume"
    ],
    readme: `# Log Cleaner & Active Security Watchdog\n\nAn automated security daemon that cleans temp file dumps, audits syslog files, and maps network listeners.\n\n### ⚙️ Core Functions\n* **Cron-like Cleaners**: Periodically flushes temporary file system junk to secure host partitions.\n* **Active Listener Audit**: Continually probes bindings on typical server ports (22, 80, 443) for anomalies.\n* **Admin Alert Triggers**: Emits automated system status updates to alert mail logs.\n\n### 🐍 Log Cleaning Routine\n\`\`\`python\nimport os, glob\ndef clean_temp_logs(directory="/tmp/dumps"):\n    for file in glob.glob(os.path.join(directory, "*.log")):\n        if os.path.getsize(file) > 1024 * 1024: # 1MB Limit\n            os.remove(file)\n            print(f"Watchdog: Purged bloated log file: {file}")\n\`\`\``
  },
  {
    id: "project-g",
    title: "UNISA DSG Active Directory Auditor",
    description: "An automated enterprise subnet audit and security toolkit designed specifically for UNISA Developer Society (UDS) labs.",
    longDescription: "A joint open-source tool developed under the Developer Student Group (DSG) at UNISA Developer Society (UDS). It maps connected endpoints, identifies dangling directory access points, scans for common listener port vulnerabilities, and logs warnings for campus lab administrators.",
    tags: ["Python", "Cybersecurity", "Active Directory", "Network Security", "Subnet Patrol"],
    categories: ["Cybersecurity", "Software", "DevOps"],
    projectType: "Work",
    githubUrl: "https://github.com/BongaManzini/unisa-dsg-ad-auditor",
    liveUrl: "https://github.com/BongaManzini/unisa-dsg-ad-auditor",
    simulationType: "network-monitor",
    specs: [
      { label: "Lab Workspace", value: "UNISA Dev Labs (UDS)" },
      { label: "Language", value: "Python + Linux Bash" },
      { label: "Target Host", value: "Local AD Subnet" },
      { label: "Threat Engine", value: "Socket Port Scrapes" }
    ],
    stars: 14,
    commits: 52,
    architectureTitle: "AD Subnet Inspection Architecture",
    architectureHighlights: [
      "Subnet scanner mapping active IP host bindings across simulated UDS lab switches",
      "LDAP directory query validator testing user access delegation permissions",
      "Automated summary report generator for UNISA IT lab administrators"
    ],
    keyLearnings: [
      "Structuring collaborative open-source tools for student developer communities",
      "Defensive Active Directory audit mechanics"
    ],
    readme: `# UNISA DSG Active Directory Auditor\n\nAn automated enterprise subnet audit and security toolkit designed specifically for UNISA Developer Society (UDS) labs.\n\n### 🛡️ Auditing Utilities\n* **Lab Subnet Discovery**: Discovers endpoints connected to simulated lab router switches.\n* **Active Security Auditing**: Identifies legacy unencrypted communication pathways or active SSH listeners.\n* **Campus Alerts**: Formats simple audit log checklists ready for campus computer network administrators.\n\n### 🔍 Port Scanning Module\n\`\`\`python\nimport socket\ndef scan_lab_port(host, port):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(0.5)\n    result = s.connect_ex((host, port))\n    s.close()\n    return result == 0 # Returns True if port is open\n\`\`\``
  },
  {
    id: "project-h",
    title: "Relational SQL Ledger for Pretoria Merchants",
    description: "A highly-optimized offline transaction ledger ensuring 3rd Normal Form integrity and local syncing for merchants.",
    longDescription: "Built to empower micro-merchants in Pretoria to track daily transactions without cellular data billing overhead. It utilizes an optimistic offline-first local SQL ledger that automatically synchronizes, aggregates, and validates transactions against a master relational backend.",
    tags: ["React", "SQL", "3NF Normalization", "Database Design", "Recharts"],
    categories: ["Database", "Software", "Frontend", "Backend"],
    projectType: "Personal",
    githubUrl: "https://github.com/BongaManzini/pretoria-sql-ledger",
    liveUrl: "https://github.com/BongaManzini/pretoria-sql-ledger",
    simulationType: "asset-hub",
    specs: [
      { label: "Database Core", value: "SQLite + PostgreSQL Client" },
      { label: "Normalization", value: "Strict 3rd Normal Form" },
      { label: "Integrity Checks", value: "Foreign Keys & Constraints" },
      { label: "Local Caching", value: "Optimistic React State Engine" }
    ],
    stars: 21,
    commits: 118,
    architectureTitle: "Offline-First Relational Ledger",
    architectureHighlights: [
      "Optimistic offline transaction queue caching encrypted payload blobs locally",
      "3rd Normal Form SQL database design ensuring 100% mathematical transaction consistency",
      "Conflict-resolution synchronizer reconciling offline merchant batch uploads with cloud backend"
    ],
    keyLearnings: [
      "Offline-first state synchronization strategies over low-bandwidth connections",
      "Maintaining ACID compliance in distributed transaction logs"
    ],
    readme: `# Relational SQL Ledger for Pretoria Merchants\n\nA highly-optimized offline transaction ledger ensuring 3rd Normal Form integrity and local syncing for Pretoria merchants.\n\n### 💰 Merchant ledger features\n* **Optimistic Syncing**: Keeps transactions saved in local client state, syncing with server backend when active.\n* **Data Consistency**: Strict 3rd Normal Form schemas preventing inventory or revenue tracking errors.\n* **Transaction Validation**: Guarantees zero duplicate transaction insertions using local UUID hashes.\n\n### 🗄️ Transaction Normalization Schema\n\`\`\`sql\nCREATE TABLE transactions (\n    id VARCHAR(36) PRIMARY KEY,\n    merchant_id VARCHAR(36) NOT NULL,\n    amount DECIMAL(10, 2) NOT NULL,\n    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE\n);\n\`\`\``
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA Deep Learning Institute (DLI)",
    date: "2025",
    badge: "NVIDIA-PE"
  },
  {
    title: "CompTIA Security+ Certification",
    issuer: "CompTIA",
    date: "2025",
    badge: "SEC+"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    badge: "AWS-CCP"
  },
  {
    title: "Certified Computer Technician",
    issuer: "NQF Level 5 accredited",
    date: "2024",
    badge: "NQF-5"
  },
  {
    title: "Linux Professional Institute (LPI) Linux Essentials",
    issuer: "Linux Professional Institute",
    date: "2024",
    badge: "LPI-LE"
  },
  {
    title: "Microsoft AZ-204: Developing Solutions for Microsoft Azure",
    issuer: "Microsoft Certified",
    status: "In Progress",
    badge: "AZ-204"
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    date: "2023",
    badge: "G-ITSP"
  }
];

export const EDUCATION = {
  degree: "BSc in Informatics",
  institution: "University of South Africa (UNISA)",
  focus: "Foundational theory in systems analysis, database management, software design patterns, and enterprise computing architecture.",
  keyCourses: [
    "Database Design & Development (3NF, SQL)",
    "Systems Analysis and Design",
    "Advanced Software Architecture",
    "Information Security Principles",
    "Project Management in IT"
  ]
};

export interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const JOB_EXPERIENCES: JobExperience[] = [
  {
    role: "Software Developer",
    company: "Alteram Solutions",
    location: "Gauteng, South Africa",
    period: "2024 - Present",
    description: "Developing enterprise web applications, custom Chrome extensions (Manifest V3), REST API integrations, and secure database workflows. Leading full-stack software development projects that automate internal workflows and elevate client digital operational efficiency.",
    highlights: [
      "Engineered custom Chrome extensions (Manifest V3) with background service workers and DOM automation hooks to streamline operations",
      "Designed and deployed responsive full-stack web applications using React, TypeScript, Node.js, and SQL relational databases",
      "Integrated secure authentication protocols, RESTful microservices, and proactive logging to guarantee enterprise reliability"
    ],
    tags: ["React", "TypeScript", "Chrome Extension", "Manifest V3", "REST APIs", "Node.js", "SQL"]
  },
  {
    role: "DSG Core Lead & Technical Educator",
    company: "UNISA Developer Society (UDS)",
    location: "Pretoria, South Africa",
    period: "2024 - Present",
    description: "Leading the Developer Student Group (DSG) within the UNISA Developer Society (UDS). Facilitating hands-on coding sessions, collaborative build sprints, and practical workshops on database normalization and safe networking basics for distance learning student cohorts.",
    highlights: [
      "Designed and configured local AD subnet sandboxes for safe, offline cybersecurity training exercises",
      "Mentored 150+ students in advanced Informatics topics, SQL relational design, and multi-threaded Python automation",
      "Pioneered the creation of active study portfolios that bridge academic theory with modern software projects"
    ],
    tags: ["Python", "SQL", "Active Directory", "Database Design", "Informatics"]
  },
  {
    role: "IT Administrator & Support Specialist",
    company: "Local Enterprise Systems",
    location: "Pretoria, South Africa",
    period: "2024 - Present",
    description: "Managing local area network architecture, diagnosing network endpoints, and querying relational database servers for structural auditing.",
    highlights: [
      "Designed and configured local AD subnet environments protecting over 50 workstations",
      "Automated system health checks and log rotation using multi-threaded Python cron jobs",
      "Wrote structured SQL audits to trace invoice inconsistencies and data anomalies"
    ],
    tags: ["Linux", "Syslog-ng", "Python", "Networking Basics", "Active Directory"]
  },
  {
    role: "Technical Peer Mentor & Lead Tutor",
    company: "UNISA Informatics Peer Tutoring",
    location: "Pretoria, South Africa",
    period: "2023 - 2024",
    description: "Provided structural academic tutoring and peer-led coaching to undergraduate distance learning cohorts tackling advanced Informatics modules.",
    highlights: [
      "Drafted specialized reference guides and visualization sheets detailing 1NF, 2NF, and 3NF normalization procedures",
      "Conducted weekly live coding laboratories resolving performance issues in complex PostgreSQL query definitions",
      "Recognized by department facilitators for raising course pass rates across participating tutoring study groups"
    ],
    tags: ["Informatics", "SQL", "3NF Normalization", "Database Design", "Mentoring"]
  },
  {
    role: "Voluntary Network Assistant & Coding Coach",
    company: "Pretoria Community Tech Hub",
    location: "Pretoria, South Africa",
    period: "2022 - 2023",
    description: "Assisted in maintaining open access computer laboratory systems while conducting introductory programming workshops for local youth.",
    highlights: [
      "Set up firewalls and secured physical routers to ensure stable connectivity across 25 public access terminals",
      "Created structured introductory lessons introducing Python, terminal operations, and git command workflows",
      "Diagnosed hardware faults, terminated ethernet runs, and audited active connections"
    ],
    tags: ["Networking Basics", "Python", "Linux Essentials", "Teaching", "Hardware"]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent Software Solutions",
    location: "Gauteng, South Africa",
    period: "2022 - 2024",
    description: "Built lightweight relational database integrations, customizable admin dashboards, and localized web apps for retail clients.",
    highlights: [
      "Engineered clean database ledgers in 3rd Normal Form (3NF) ensuring 100% data integrity",
      "Built responsive, performance-optimized client dashboards in React and TailwindCSS",
      "Interfaced PHP services with SQL databases to process transaction logs securely"
    ],
    tags: ["React", "PHP", "SQL", "TailwindCSS", "Figma"]
  }
];

export interface HackathonExperience {
  event: string;
  achievement: string;
  project: string;
  description: string;
  year: string;
  tags: string[];
}

export const HACKATHONS: HackathonExperience[] = [
  {
    event: "UNISA Annual DSG Buildathon",
    achievement: "1st Place (Tech-for-Good Track)",
    project: "Micro-payment Data Optimizer",
    description: "Developed an extremely compressed binary caching ledger system to reduce SQL synchronization payloads over slow cellular connections.",
    year: "2026",
    tags: ["SQL", "3NF Normalization", "Database Design", "Informatics"]
  },
  {
    event: "South Africa AI & Cloud Challenge",
    achievement: "Best Student Innovation",
    project: "Bandwidth-Optimized LLM Note Sync",
    description: "Created a lightweight study companion caching summary blobs locally to minimize cellular data billing overhead for distance learning.",
    year: "2026",
    tags: ["Python", "AI Chatbot", "Note Summarization", "Prompt Engineering"]
  },
  {
    event: "SA National Hackathon Championship 2026",
    achievement: "3rd Place Overall",
    project: "Secure Decentralized Student Ledger",
    description: "Engineered an audit trail tool mapping cryptographic hashes of records directly to offline ledger backups for school grading registers.",
    year: "2026",
    tags: ["SQL", "Cryptography", "Database Design", "Python"]
  },
  {
    event: "UNISA Informatics Hackathon",
    achievement: "1st Place (Cybersecurity Track)",
    project: "Active AD Subnet Patrol Engine",
    description: "Built a Python-based security scanner mapping dangerous listener ports and active network subnets to demonstrate automated remediation.",
    year: "2025",
    tags: ["Python", "Cybersecurity", "Subnet Monitor", "Lockout System"]
  },
  {
    event: "Pretoria Hackathon League",
    achievement: "Best System Architecture",
    project: "Subnet Sentinel Active Watchdog",
    description: "Engineered a low-overhead Python daemon monitoring physical network endpoints and automatically blacklisting rogue ports when listening signatures are identified.",
    year: "2025",
    tags: ["Python", "Cybersecurity", "Networking Basics", "Subnet Monitor"]
  },
  {
    event: "Gauteng EduTech Buildathon 2025",
    achievement: "Outstanding Technical Achievement",
    project: "Offline Informatics Study Buddy",
    description: "Built a localized sync tool caching rich instructional markdown files inside SQLite databases so students can study offline.",
    year: "2025",
    tags: ["React", "SQL", "SQLite", "Software"]
  },
  {
    event: "Pretoria Developer Summit",
    achievement: "Runner-Up (Tech Excellence)",
    project: "Lightweight Offline-First SQLite Ledger",
    description: "Designed a secure localized data store allowing retail merchants to process transactions offline and synchronize with Cloud tables.",
    year: "2025",
    tags: ["SQL", "3NF Normalization", "Database Design", "React"]
  }
];

