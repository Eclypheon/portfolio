import React, { useState, useEffect } from 'react';
import { Navigation, TabKey, TAB_KEYS } from './components/Navigation.tsx';
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
import { Mail, ShieldAlert, Terminal, Compass, ArrowUp, Heart, X } from 'lucide-react';
import { GithubIcon } from './components/GithubIcon.tsx';
import { sound } from './components/AudioEngine.ts';
import { JellyfinModal } from './components/JellyfinModal.tsx';
import { useHorizontalSwipe } from './hooks/useHorizontalSwipe.ts';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [jellyfinModalOpen, setJellyfinModalOpen] = useState(false);

  // Hook up horizontal swipe navigation across all 8 tabs on mobile/tablet
  const { containerRef, dragOffset, transitionStyle, opacity } = useHorizontalSwipe({
    activeTab,
    tabs: TAB_KEYS,
    onNavigate: (newTab) => {
      sound.playSwitch();
      setActiveTab(newTab);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    disabled: commandPaletteOpen || jellyfinModalOpen || donateModalOpen,
  });

  // Monitor custom event to open Jellyfin Access Request iframe modal
  useEffect(() => {
    const handleOpenJellyfin = () => setJellyfinModalOpen(true);
    window.addEventListener('open-jellyfin-modal', handleOpenJellyfin);
    return () => window.removeEventListener('open-jellyfin-modal', handleOpenJellyfin);
  }, []);

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

      {/* Embedded Jellyfin Access Request Modal (Iframe without address bar exposure) */}
      <JellyfinModal
        isOpen={jellyfinModalOpen}
        onClose={() => setJellyfinModalOpen(false)}
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

      {/* Main Container Viewport with Directional Swipe Support */}
      <main 
        ref={containerRef}
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden touch-pan-y"
        style={{
          transform: dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined,
          transition: transitionStyle !== 'none' ? transitionStyle : undefined,
          opacity: opacity !== 1 ? opacity : undefined,
          willChange: dragOffset !== 0 ? 'transform, opacity' : 'auto',
        }}
      >
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
              <button
                onClick={() => {
                  sound.playClick();
                  setDonateModalOpen(true);
                }}
                className="px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/25 text-xs font-mono text-pink-300 hover:text-pink-200 flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(236,72,153,0.1)] group"
                title="Donate / Support (Currently non-functional)"
              >
                <Heart className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>Donate</span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300/80 border border-pink-500/30">
                  Offline
                </span>
              </button>
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

      {/* Donate Non-Functional Notice Modal */}
      {donateModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setDonateModalOpen(false)}
        >
          <div 
            className="relative max-w-md w-full glass-panel bg-[#0b0e14] border border-pink-500/30 rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Support & Sponsorship</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    Gateway Status: Offline
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setDonateModalOpen(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-slate-300 leading-relaxed pt-2 border-t border-white/10">
              <p className="text-pink-300 font-semibold flex items-center gap-1.5">
                <span>⚠️</span>
                <span>Notice: The link to donate is currently non-functional.</span>
              </p>
              <p className="text-slate-400">
                I will work on these backends later. Payment integrations (Stripe, GitHub Sponsors, crypto rails) will be hooked up in a future iteration.
              </p>
              <p className="text-slate-500 italic pt-1 border-t border-white/5">
                Thank you for the intention to support independent open-source engineering, homelab telemetry, and speculative fiction.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  sound.playClick();
                  setDonateModalOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-xs font-mono text-pink-200 transition-all shadow-[0_0_10px_rgba(236,72,153,0.2)]"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
