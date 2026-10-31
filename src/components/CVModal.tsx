import React, { useState } from 'react';
import { X, Download, Printer, User, Briefcase, Award, GraduationCap, MapPin, Mail, Phone, Globe, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [activeTab, setActiveTab] = useState<'software' | 'cybersecurity'>('software');

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    let cvText = '';
    if (activeTab === 'software') {
      cvText = `
=========================================
BONGA MANZINI - SYSTEMS & SOFTWARE ENGINEER
=========================================
Email: bongamanzini955@gmail.com
Location: South Africa
LinkedIn: https://www.linkedin.com/in/bonga-manzini/
GitHub: https://github.com/BongaManzini
Portfolio: ${window.location.origin}

-----------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------
Software Developer at Alteram Solutions and Systems & Software Engineer specializing in full-stack web applications, custom Chrome Extension (Manifest V3) development, enterprise operations dashboards, database normalization (3rd Normal Form), and artificial intelligence architectures. High competency in React, TypeScript, C++/C#, Python, Node.js, and secure SDLC practices.

-----------------------------------------
EDUCATION
-----------------------------------------
BSc in Informatics
University of South Africa (UNISA)
- Comprehensive foundational theory in systems analysis and software architecture.
- Extensive focus on database design, relational optimization, and security constraints.

-----------------------------------------
CORE EXPERTISE & TECHNICAL PILLARS
-----------------------------------------
- Software Development: C++, C#, Python, React, TypeScript, Node.js
- Databases: SQL, 3rd Normal Form (3NF) Database Design, Schema Optimization
- Artificial Intelligence: Prompt Engineering, RAG Architectures, Gemini LLM Integration
- Development Practices: Secure SDLC, OOP, REST APIs, Microservices

-----------------------------------------
KEY CERTIFICATIONS
-----------------------------------------
- Building LLM Applications With Prompt Engineering (NVIDIA Deep Learning Institute)
- Certified Computer Technician (NQF Level 5 accredited)
- Microsoft AZ-204: Developing Solutions for Microsoft Azure (In Progress)

=========================================
Document secure transmission completed.
=========================================
      `.trim();
    } else {
      cvText = `
=========================================
BONGA MANZINI - CYBERSECURITY & IT SPECIALIST
=========================================
Email: bongamanzini955@gmail.com
Location: South Africa
LinkedIn: https://www.linkedin.com/in/bonga-manzini/
GitHub: https://github.com/BongaManzini
Portfolio: ${window.location.origin}

-----------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------
Cybersecurity and IT Systems Administrator focused on proactive defensive posture, secure access controls, and infrastructure automation. Experienced in managing Windows and Linux Server environments, configuring Active Directory subnets, performing intrusion log audits, scripting custom support automations, and ensuring secure SDLC alignment.

-----------------------------------------
EDUCATION
-----------------------------------------
BSc in Informatics
University of South Africa (UNISA)
- Comprehensive foundational theory in systems analysis and software architecture.
- Extensive focus on database design, relational optimization, and security constraints.

-----------------------------------------
CORE EXPERTISE & TECHNICAL PILLARS
-----------------------------------------
- Cybersecurity: Secure SDLC, RBAC Access Controls, Network Threat Assessment, Log Audit
- IT Infrastructure: Active Directory administration, Windows/Linux Server configurations, Subnets
- Support & Automation: Support Desk Administration, PowerShell/Python Scripting
- Troubleshooting: Hardware diagnoses, Operating System repairs, Network configuration

-----------------------------------------
KEY CERTIFICATIONS
-----------------------------------------
- Certified Computer Technician (NQF Level 5 accredited)
- Building LLM Applications With Prompt Engineering (NVIDIA Deep Learning Institute)
- Microsoft AZ-204: Developing Solutions for Microsoft Azure (In Progress)

=========================================
Document secure transmission completed.
=========================================
      `.trim();
    }

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', activeTab === 'software' ? 'Bonga_Manzini_Software_CV.txt' : 'Bonga_Manzini_Cybersecurity_CV.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl border border-slate-800 rounded-2xl bg-slate-900 shadow-2xl overflow-hidden my-8"
          id="cv-modal-container"
        >
          {/* Controls Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Curriculum Vitae SECURE_ARCHIVE_01
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-cyan-400 border border-cyan-400/20 rounded-md hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200"
                title="Download text resume"
                id="download-cv-text-btn"
              >
                <Download size={14} />
                <span>Download TXT</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-400 border border-slate-800 rounded-md hover:border-slate-600 hover:text-white transition-all duration-200"
                title="Print CV"
                id="print-cv-btn"
              >
                <Printer size={14} />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 transition-colors rounded-lg hover:text-white hover:bg-slate-800"
                id="close-cv-modal-btn"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PROFILE ARCHIVE SELECTION TABS */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-2" id="cv-profile-switcher-tabs">
            <button
              onClick={() => setActiveTab('software')}
              className={`flex-1 py-2 font-mono text-xs uppercase tracking-wider rounded transition-all duration-150 ${
                activeTab === 'software'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
              id="cv-tab-software"
            >
              💻 Systems & Software Profile
            </button>
            <button
              onClick={() => setActiveTab('cybersecurity')}
              className={`flex-1 py-2 font-mono text-xs uppercase tracking-wider rounded transition-all duration-150 ${
                activeTab === 'cybersecurity'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
              id="cv-tab-cybersecurity"
            >
              🛡️ Cybersecurity & IT Admin Profile
            </button>
          </div>

          {/* CV Body */}
          <div className="p-8 md:p-12 overflow-y-auto max-h-[75vh] print:p-0 print:max-h-none print:bg-white print:text-black">
            <div className="space-y-8" id="cv-printable-content">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-800 pb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-white print:text-black">
                    Bonga Manzini
                  </h1>
                  <p className="mt-2 font-mono text-cyan-400 font-medium tracking-wide uppercase text-sm print:text-blue-600">
                    {activeTab === 'software' ? 'Systems & Software Engineer' : 'Cybersecurity & IT Specialist'}
                  </p>
                  <p className="mt-3 text-slate-400 text-sm max-w-xl leading-relaxed print:text-slate-700">
                    {activeTab === 'software' 
                      ? 'Sleek, secure, and intelligent development spanning the bridge from proactive cybersecurity defensive patterns to strict, highly normalized database optimization schemas and reactive frontend dashboards.'
                      : 'Proactive defensive posture and detailed network systems administration. Fluent in active directory subnets, group policy security, system script automations, and threat vulnerability modeling.'}
                  </p>
                </div>

                <div className="space-y-2.5 font-mono text-xs text-slate-300 print:text-slate-800 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Mail size={13} className="text-cyan-400" />
                    <a href="mailto:bongamanzini955@gmail.com" className="hover:underline">bongamanzini955@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>Johannesburg, South Africa</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <Globe size={13} className="text-cyan-400" />
                    <a href="https://github.com/BongaManzini" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/BongaManzini</a>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <Linkedin size={13} className="text-cyan-400" />
                    <a href="https://www.linkedin.com/in/bonga-manzini/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-400">linkedin.com/in/bonga-manzini/</a>
                  </div>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left col - Info cards */}
                <div className="space-y-6 md:col-span-1">
                  <div>
                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-4 print:text-slate-900">
                      <GraduationCap size={14} className="text-cyan-400" />
                      Education
                    </h3>
                    <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                      <h4 className="font-semibold text-white print:text-black text-sm">BSc in Informatics</h4>
                      <p className="text-xs text-cyan-400 font-mono mt-1">Univ. of South Africa (UNISA)</p>
                      <p className="text-xs text-slate-400 mt-2.5 leading-relaxed print:text-slate-600">
                        Rigorous focus on advanced software architecture, systems analysis and design, database creation (3NF modeling, triggers, ACID compliance), and enterprise computing structures.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-4 print:text-slate-900">
                      <Award size={14} className="text-cyan-400" />
                      Certifications
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                        <div className="text-xs font-semibold text-white print:text-black">Building LLM Applications with Prompt Engineering</div>
                        <div className="text-[10px] text-cyan-400 font-mono mt-0.5">NVIDIA DLI (2025)</div>
                      </div>
                      <div className="p-3 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                        <div className="text-xs font-semibold text-white print:text-black">Certified Computer Technician</div>
                        <div className="text-[10px] text-cyan-400 font-mono mt-0.5">NQF Level 5 (2024)</div>
                      </div>
                      <div className="p-3 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                        <div className="text-xs font-semibold text-white print:text-black">Microsoft AZ-204: Azure Developer</div>
                        <div className="text-[10px] text-amber-400 font-mono mt-0.5">In Progress</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right col - Tech Pillars & Core Competencies */}
                <div className="space-y-6 md:col-span-2">
                  <div>
                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-4 print:text-slate-900">
                      <Briefcase size={14} className="text-cyan-400" />
                      Work Experience & Roles
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-white print:text-black text-sm">Software Developer</h4>
                            <p className="text-xs text-amber-400 font-mono mt-0.5">Alteram Solutions</p>
                          </div>
                          <span className="text-[10px] font-mono bg-amber-400/10 border border-amber-400/30 text-amber-300 px-2 py-0.5 rounded">2024 - Present</span>
                        </div>
                        <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc list-inside leading-relaxed print:text-slate-700">
                          <li>Engineered Manifest V3 Chrome Extensions, service worker automation, side panel workflow interfaces, and internal client portal tools.</li>
                          <li>Architected high-throughput operational dashboards and real-time enterprise monitoring tools.</li>
                        </ul>
                      </div>

                      <div className="p-4 border border-slate-800 rounded-lg bg-slate-950/40 print:border-slate-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-white print:text-black text-sm">DSG Core Lead & Technical Mentor</h4>
                            <p className="text-xs text-cyan-400 font-mono mt-0.5">UNISA Developer Society (UDS)</p>
                          </div>
                          <span className="text-[10px] font-mono bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-2 py-0.5 rounded">2023 - Present</span>
                        </div>
                        <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc list-inside leading-relaxed print:text-slate-700">
                          <li>Lead technical workshops, hackathons, and cohort mentorship across distance-learning Informatics streams.</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-4 print:text-slate-900">
                      <Briefcase size={14} className="text-cyan-400" />
                      Technical Pillars & Specializations
                    </h3>
                    
                    <div className="space-y-4">
                      {activeTab === 'software' ? (
                        <>
                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">01. Software & Artificial Intelligence</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              Expertise in building scalable systems using C++, C#, Python, and dynamic React templates. Adept at prompt engineering (RAG models, system parameters, guardrails) and LLM API integrations to optimize pipeline speed and responses.
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">02. Relational Database Architecture</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              A strong advocate for strict database normalization principles. High fluency in SQL database schema optimization, indexing strategies, transaction handling, and designing records with zero redundancy using Third Normal Form (3NF).
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">03. Secure Systems Engineering</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              Designing applications with Secure SDLC practices from the start. Integration of secure access controls, RBAC schemes, encrypted token transmission protocols, and validated input boundary mitigation to prevent SQL injection or model prompt leaks.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">01. Cybersecurity & Vulnerability Analysis</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              Proactive corporate cyber defense. Experienced in threat assessment modeling, secure subnetting rules, auditing active system intrusion logs, enforcing zero-trust access control schemes, and analyzing security vector loopholes.
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">02. Active Directory & Network Control</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              Configuring and managing Active Directory domains, handling user access authorization, setting group policies, securing LAN interfaces, and administering Windows/Linux operating servers with rigid security boundaries.
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">03. Automated Support Scripting</h4>
                            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                              Reducing support desk overhead with scripting automation. Writing robust Python, Bash, and shell scripts to automate system health checks, automate remote server log collection, and execute responsive recovery action sequences.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/60">
                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-3 print:text-slate-900">
                      <User size={14} className="text-cyan-400" />
                      Key Core Competencies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTab === 'software' ? (
                        ["C++ / C#", "Python", "React & Node.js", "SQL & 3NF Normalization", "RAG & LLMs", "Secure Access Controls", "REST APIs", "TypeScript", "OOP Design"].map((comp, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono print:border-slate-300 print:text-black">
                            {comp}
                          </span>
                        ))
                      ) : (
                        ["Active Directory", "Group Policy (GPO)", "Network Telemetry", "PowerShell Scripting", "Secure SDLC", "Intrusion Log Audit", "Vulnerability Analysis", "AZ-204 Microsoft", "OS Support & Repairs"].map((comp, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono print:border-slate-300 print:text-black">
                            {comp}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Footer note */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-center font-mono text-[10px] text-slate-500 print:hidden">
                <p>ORIGIN IP: {window.location.hostname} • KEY EXCHANGE TYPE: AES-256 • SECURITY STATUS: INTEGRAL</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
