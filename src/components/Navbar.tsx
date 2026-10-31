import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: () => void;
  theme: 'ivory' | 'cyber';
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenContact, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'projects', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 py-2'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-slate-900/30 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group font-mono"
            id="brand-logo"
          >
            <Terminal size={18} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-extrabold tracking-tight text-white">
              &lt; <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Bonga Manzini</span> /&gt;
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 relative py-1.5 ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                    id={`nav-link-${targetId}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle Slider */}
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 p-1 px-1.5 rounded-lg border border-slate-800 bg-slate-950/40 hover:bg-slate-900 transition-all duration-300 shrink-0"
              title={theme === 'ivory' ? 'Switch to Cyber Dark' : 'Switch to Ivory Light'}
              id="theme-toggle-desktop"
            >
              <div className="relative flex items-center bg-slate-900/85 rounded-full p-0.5 w-11 h-5.5 border border-slate-800">
                <motion.div 
                  layout
                  className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-sm"
                  animate={{ x: theme === 'ivory' ? 1 : 18 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                <Sun size={9} className="text-slate-400 z-10 ml-0.5" />
                <Moon size={9} className="text-slate-400 z-10 ml-auto mr-0.5" />
              </div>
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-400/20 rounded-md bg-cyan-400/5 hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 shadow-sm shadow-cyan-400/5"
              id="desktop-contact-cta"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-900 bg-slate-950"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block font-mono text-xs font-semibold uppercase tracking-widest px-3 py-2.5 rounded-md ${
                      isActive ? 'text-cyan-400 bg-slate-900/50' : 'text-slate-400 hover:text-white hover:bg-slate-900/30'
                    }`}
                    id={`mobile-nav-link-${targetId}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 px-3 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200"
                  id="mobile-contact-cta"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center justify-between border-t border-slate-900/60 pt-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Theme</span>
                  <button
                    onClick={onToggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
                    id="theme-toggle-mobile"
                  >
                    <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase">
                      {theme === 'ivory' ? 'Ivory Light' : 'Cyber Dark'}
                    </span>
                    <div className="relative flex items-center bg-slate-950 rounded-full p-0.5 w-10 h-5 border border-slate-800/40">
                      <div 
                        className={`absolute w-3.5 h-3.5 rounded-full bg-cyan-400 transition-all duration-200 ${
                          theme === 'ivory' ? 'left-[2px]' : 'left-[22px]'
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
