import React, { useState } from 'react';
import { 
  Menu,
  X,
  Search
} from 'lucide-react';
import { sound } from './AudioEngine.ts';
import { SoundToggle } from './SoundToggle.tsx';

export type TabKey = 
  | 'overview' 
  | 'projects' 
  | 'homelab' 
  | 'philosophy' 
  | 'kinetic' 
  | 'writing' 
  | 'toolkit' 
  | 'musings';

interface NavigationProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  onOpenCommandPalette: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  onOpenCommandPalette,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'projects', label: 'Projects' },
    { key: 'writing', label: 'Story' },
    { key: 'homelab', label: 'Homelab' },
    { key: 'philosophy', label: 'Philosophy' },
    { key: 'kinetic', label: 'Kinetic' },
    { key: 'toolkit', label: 'Toolchain' },
    { key: 'musings', label: 'Musings' },
  ];

  const handleTabClick = (key: TabKey) => {
    sound.playSwitch();
    onSelectTab(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07090e]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity - Ultra Clean & Minimal */}
          <div 
            className="flex items-center cursor-pointer group select-none"
            onClick={() => handleTabClick('overview')}
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Neo Kester
            </span>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.slice(0, 3).map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-[19px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Controls */}
          <div className="flex items-center gap-2">
            {/* Quick search button */}
            <button
              onClick={() => {
                sound.playChirp();
                onOpenCommandPalette();
              }}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
              title="Search Index (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-emerald-400 transition-colors" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[10px] px-1 py-0.2 rounded bg-black/40 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            <SoundToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#090c14]/95 backdrop-blur-2xl px-4 py-4 space-y-1">
          {tabs.slice(0, 3).map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between transition-all ${
                  isActive
                    ? 'text-white bg-emerald-500/15 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
