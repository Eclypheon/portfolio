import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Server, 
  BookOpen, 
  Activity, 
  Feather, 
  Wrench, 
  Sparkles,
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

  const tabs: { key: TabKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    { key: 'overview', label: 'Matrix', icon: <Layers className="w-4 h-4" /> },
    { key: 'projects', label: 'Projects', icon: <Terminal className="w-4 h-4" />, badge: '5' },
    { key: 'homelab', label: 'Homelab', icon: <Server className="w-4 h-4" /> },
    { key: 'philosophy', label: 'Philosophy & Canon', icon: <BookOpen className="w-4 h-4" /> },
    { key: 'kinetic', label: 'Kinetic Realm', icon: <Activity className="w-4 h-4" /> },
    { key: 'writing', label: 'Fiction & Lore', icon: <Feather className="w-4 h-4" /> },
    { key: 'toolkit', label: 'Toolchain', icon: <Wrench className="w-4 h-4" /> },
    { key: 'musings', label: 'Daily Musings', icon: <Sparkles className="w-4 h-4" />, badge: 'AI' },
  ];

  const handleTabClick = (key: TabKey) => {
    sound.playSwitch();
    onSelectTab(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07090e]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => handleTabClick('overview')}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:border-emerald-400 transition-all">
              K
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  KESTER NEO
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  eclypheon
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Deep Generalist • Systems Cartographer
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden xl:flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`relative px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-white/10 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-white/5 text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Controls */}
          <div className="flex items-center gap-2">
            {/* Quick search button (Command Palette) */}
            <button
              onClick={() => {
                sound.playChirp();
                onOpenCommandPalette();
              }}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
              title="Search Index (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-emerald-400 transition-colors" />
              <span className="hidden md:inline">Quick Jump</span>
              <kbd className="hidden md:inline text-[10px] px-1 py-0.2 rounded bg-black/40 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            <SoundToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#090c14]/95 backdrop-blur-2xl px-4 py-4 space-y-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`w-full px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-all ${
                  isActive
                    ? 'text-white bg-emerald-500/15 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
