import React, { useState, useEffect } from 'react';
import { Navigation, TabKey } from './components/Navigation.tsx';
import { CanvasBackground } from './components/CanvasBackground.tsx';
import { CommandPalette } from './components/CommandPalette.tsx';
import { OverviewTab } from './tabs/OverviewTab.tsx';
import { ProjectsTab } from './tabs/ProjectsTab.tsx';
import { HomelabTab } from './tabs/HomelabTab.tsx';
import { PhilosophyTab } from './tabs/PhilosophyTab.tsx';
import { KineticTab } from './tabs/KineticTab.tsx';
import { FictionTab } from './tabs/FictionTab.tsx';
import { ToolkitTab } from './tabs/ToolkitTab.tsx';
import { MusingsTab } from './tabs/MusingsTab.tsx';
import { Mail, ShieldAlert, Terminal, Compass, ArrowUp } from 'lucide-react';
import { GithubIcon } from './components/GithubIcon.tsx';
import { sound } from './components/AudioEngine.ts';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onNavigate={setActiveTab} />;
      case 'projects':
        return <ProjectsTab />;
      case 'homelab':
        return <HomelabTab />;
      case 'philosophy':
        return <PhilosophyTab />;
      case 'kinetic':
        return <KineticTab />;
      case 'writing':
        return <FictionTab />;
      case 'toolkit':
        return <ToolkitTab />;
      case 'musings':
        return <MusingsTab />;
      default:
        return <OverviewTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 relative flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Dynamic Canvas Constellation Background */}
      <CanvasBackground />

      {/* Futuristic Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Sticky Navigation */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Container Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div key={activeTab} className="animate-fadeIn">
          {renderActiveTab()}
        </div>
      </main>

      {/* Floating Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/10 hover:bg-emerald-500/20 border border-white/15 text-slate-300 hover:text-emerald-300 backdrop-blur-xl shadow-2xl transition-all group"
          title="Return to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Global Sleek Dark Footer */}
      <footer className="border-t border-white/10 bg-[#05060a] relative z-20 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Identity */}
            <div className="space-y-1 text-center md:text-left">
              <span className="font-bold text-lg text-white tracking-tight">Neo Kester</span>
              <p className="text-xs text-slate-400 font-mono">
                The Deep Generalist Matrix
              </p>
            </div>

            {/* Links & Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Eclypheon"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:kester.neo@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Eclypheon/portfolio"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Repo Source</span>
              </a>
            </div>
          </div>

          {/* Terra Incognita Footer Quote */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-400">
            <p className="italic text-slate-300">
              &ldquo;terra incognita, hic sunt dracones (Here be Dragons).&rdquo;
            </p>
            <p className="shrink-0 text-slate-500">
              © {new Date().getFullYear()} Neo Kester. Deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
