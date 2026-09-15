import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Terminal, Server, Activity, Feather, Sparkles } from 'lucide-react';
import { TabKey } from './Navigation.tsx';
import { projects } from '../data/projectsData.ts';
import { readingList } from '../data/readingListData.ts';
import { kineticEndeavors } from '../data/kineticData.ts';
import { initialMusings } from '../data/musingsData.ts';
import { sound } from './AudioEngine.ts';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabKey) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  tab: TabKey;
  icon: React.ReactNode;
  subtitle: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          sound.playChirp();
          // open command palette
          onClose(); // triggers toggle in parent
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build searchable index
  const items: SearchItem[] = [
    // Projects
    ...projects.map((p) => ({
      id: p.id,
      title: p.title,
      category: 'Projects',
      tab: 'projects' as TabKey,
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      subtitle: p.tagline,
    })),
    // Homelab
    {
      id: 'macbook-quadlet',
      title: 'Repurposed 2014 MacBook Pro & Quadlet',
      category: 'Homelab',
      tab: 'homelab' as TabKey,
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      subtitle: 'Rootless Podman containers, systemd units, Tailscale mesh',
    },
    {
      id: 'local-llm',
      title: 'Local LLM & Whisper Pipeline',
      category: 'Homelab',
      tab: 'homelab' as TabKey,
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      subtitle: 'LM Studio (M4 24GB), Qwen3.5 9B, faster-whisper tiny, Telegram bot',
    },
    // Philosophy
    ...readingList.map((r) => ({
      id: r.id,
      title: `${r.title} — ${r.author}`,
      category: 'Philosophy & Canon',
      tab: 'philosophy' as TabKey,
      icon: <BookOpen className="w-4 h-4 text-indigo-400" />,
      subtitle: r.coreConcept,
    })),
    // Kinetic
    ...kineticEndeavors.map((k) => ({
      id: k.id,
      title: k.title,
      category: 'Kinetic Realm',
      tab: 'kinetic' as TabKey,
      icon: <Activity className="w-4 h-4 text-pink-400" />,
      subtitle: k.roleOrLevel,
    })),
    // Fiction
    {
      id: 'flat-earth-nosleep',
      title: 'I was a priest of the Flat Earth Society (NoSleep)',
      category: 'Fiction',
      tab: 'writing' as TabKey,
      icon: <Feather className="w-4 h-4 text-amber-400" />,
      subtitle: 'Cosmic horror novelette by Igor / Alexei',
    },
    // Musings
    ...initialMusings.map((m) => ({
      id: m.id,
      title: m.title,
      category: 'Daily Musings',
      tab: 'musings' as TabKey,
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      subtitle: m.excerpt,
    })),
  ];

  const filtered = query.trim()
    ? items.filter(
        (it) =>
          it.title.toLowerCase().includes(query.toLowerCase()) ||
          it.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          it.category.toLowerCase().includes(query.toLowerCase())
      )
    : items.slice(0, 8);

  const handleSelect = (item: SearchItem) => {
    sound.playClick(750, 0.05);
    onNavigate(item.tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#0c1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, homelab specs, philosophy, athletic records..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 bg-transparent outline-none text-sm placeholder-slate-500 font-sans text-white"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm font-mono">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-slate-200 group-hover:text-emerald-300 transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Tab</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Enter</kbd>
          </div>
          <div>
            <span>Esc to dismiss</span>
          </div>
        </div>
      </div>
    </div>
  );
};
