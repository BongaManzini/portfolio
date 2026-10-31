import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProjectShowcase from './components/ProjectShowcase';
import Credentials from './components/Credentials';
import GithubCTA from './components/GithubCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CVModal from './components/CVModal';
import ProjectModal from './components/ProjectModal';
import AIAssistantWidget from './components/AIAssistantWidget';
import { Project } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);
  const [theme, setTheme] = useState<'ivory' | 'cyber'>('ivory');

  useEffect(() => {
    document.documentElement.className = theme === 'ivory' ? 'theme-ivory' : 'theme-cyber';
  }, [theme]);

  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleLaunchSandbox = (project: Project) => {
    scrollSection('projects');
    const el = document.getElementById(`project-card-${project.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-sky-500/20 antialiased overflow-x-hidden ${theme === 'ivory' ? 'theme-ivory bg-brand-bg text-brand-text-main' : 'theme-cyber bg-[#0b0f19] text-slate-100'}`}>
      {/* Dynamic Navigation */}
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)} 
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'ivory' ? 'cyber' : 'ivory')}
      />

      {/* Main Single Page Layout Sections in High Density Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area (8 cols on large screen) */}
          <div className="lg:col-span-8 space-y-8 flex flex-col">
            {/* 1. Hero / Splash Section */}
            <Hero 
              onOpenCV={() => setIsCVOpen(true)} 
              onExploreProjects={() => scrollSection('projects')} 
            />

            {/* 2. Technical Pillars / Bento Grid Layout */}
            <BentoGrid />

            {/* 3. Engineering Showcase / Interactive Projects and Sandboxes */}
            <ProjectShowcase onOpenProjectModal={(p) => setSelectedProjectForModal(p)} />
          </div>

          {/* Sidebar Area (4 cols on large screen) */}
          <aside className="lg:col-span-4 space-y-8 flex flex-col lg:sticky lg:top-24">
            {/* 4. Credentials & Education Background */}
            <Credentials />

            {/* 5. GitHub Contribution Banner */}
            <GithubCTA />

            {/* 6. Footer section (with email/inbox transmission fields) */}
            <Footer onOpenContact={() => setIsContactOpen(true)} />
          </aside>
        </div>
      </main>

      {/* Interactive Floating AI Assistant Widget */}
      <AIAssistantWidget />

      {/* Absolute overlay portals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <ProjectModal 
        project={selectedProjectForModal} 
        onClose={() => setSelectedProjectForModal(null)} 
        onLaunchSandbox={handleLaunchSandbox} 
      />
    </div>
  );
}
