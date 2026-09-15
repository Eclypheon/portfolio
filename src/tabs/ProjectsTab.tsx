import React, { useState } from 'react';
import { 
  Terminal, 
  ExternalLink, 
  Play, 
  Layers, 
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Sparkles,
  X,
  TrendingUp,
  Landmark,
  CalendarSync,
  Quote
} from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon.tsx';
import { projects } from '../data/projectsData.ts';
import { sound } from '../components/AudioEngine.ts';

export const ProjectsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);
  
  // Finance Tracker Showcase State
  const [financeActiveCard, setFinanceActiveCard] = useState<number | null>(null);
  const [financeViewMode, setFinanceViewMode] = useState<'fan' | 'assets' | 'dividends' | 'expenses'>('fan');

  const categories = ['All', 'Game Dev', 'Full Stack', 'Systems'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const financeScreenshots = [
    {
      id: 'assets',
      title: 'Net Assets & Liquid Runway',
      subtitle: 'Liquid vs. non-liquid asset balance aggregation, CPF, banks, and runway modeling',
      image: './finance-assets.png',
      badge: 'Net Assets',
      icon: Landmark
    },
    {
      id: 'dividends',
      title: 'Dividends & SGX Scraping',
      subtitle: 'Tired of manually tracking monthly dividends so just key in your tickers and quantity and it would pull the payouts from SGX corporate actions',
      image: './finance-dividends.png',
      badge: 'Dividends (SGX)',
      icon: TrendingUp
    },
    {
      id: 'expenses',
      title: 'Recurring Expenses & Run-rate',
      subtitle: 'Monthly run-rate tracking, annual insurance renewals, and spending breakdowns',
      image: './finance-expenses.png',
      badge: 'Expenses',
      icon: CalendarSync
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>CODE ARTIFACTS // SYSTEMS & SIMULATIONS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Crafted Architectures & Game Engines
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          From playable WebGL simulations with custom sound design in FL Studio, to high-density financial asset dashboards and real-time spatial choreography engines.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              sound.playClick(500, 0.03);
              setSelectedCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8 relative overflow-hidden"
          >
            {/* Subtle corner badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-emerald-400">
                  {project.category}
                </span>
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                  project.status === 'Live'
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    : project.status.includes('Beta')
                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'
                }`}>
                  ● {project.status}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playChirp()}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  >
                    <span>{project.id === 'telegram-bot' ? 'Open in Telegram' : 'Launch Live'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-emerald-300/90 font-mono">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Interactive Embedded Launcher for Bubble Tea */}
            {project.id === 'bubbletea' && (
              <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Play className="w-4 h-4 text-emerald-400" />
                    <span>In-Browser WebGL Simulation Sandbox</span>
                  </div>
                  <button
                    onClick={() => setActiveEmbed(activeEmbed === 'bubbletea' ? null : 'bubbletea')}
                    className="text-xs font-mono px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-all"
                  >
                    {activeEmbed === 'bubbletea' ? 'Minimize Player' : 'Play Inside Page'}
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

                {activeEmbed === 'bubbletea' ? (
                  <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-emerald-500/30 bg-black">
                    <iframe
                      src="https://eclypheon.github.io/bubbletea/"
                      title="Bubble Tea Simulation Game"
                      className="w-full h-full border-0"
                      allow="autoplay; fullscreen"
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setActiveEmbed('bubbletea')}
                    className="w-full py-12 rounded-xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center justify-center cursor-pointer transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white group-hover:text-emerald-300">
                      Click to initialize Unity WebGL sandbox
                    </p>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Runs 60FPS in-browser with iterative customer queues & FL Studio audio
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* SPLAYED CARDS SHOWCASE: Finance Tracker */}
            {project.id === 'financetracker' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 space-y-6">
                {/* Header & SGX Quote */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>INTERFACE SHOWCASE // MULTI-PAGE SPLAYED VIEW</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Operational Dashboard Views
                    </h3>
                  </div>

                  {/* Mode switcher pills */}
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setFinanceViewMode('fan');
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                        financeViewMode === 'fan'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                          : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                      }`}
                    >
                      Fanned Cards Deck
                    </button>
                    {financeScreenshots.map((card, idx) => (
                      <button
                        key={card.id}
                        onClick={() => {
                          sound.playClick();
                          setFinanceViewMode(card.id as any);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                          financeViewMode === card.id
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                            : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                        }`}
                      >
                        {card.badge}
                      </button>
                    ))}
                  </div>
                </div>

                {/* The SGX Quote Banner */}
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-mono text-cyan-200 leading-relaxed italic">
                    &ldquo;Tired of manually tracking monthly dividends, so just key in your tickers and quantity and it would pull the payouts from SGX corporate actions.&rdquo;
                  </p>
                </div>

                {/* Fanned / Splayed Cards Presentation */}
                {financeViewMode === 'fan' ? (
                  <div className="py-6 sm:py-10 px-2 flex justify-center items-center overflow-hidden">
                    <div className="relative w-full max-w-2xl h-[420px] sm:h-[480px] flex justify-center items-center">
                      {financeScreenshots.map((item, index) => {
                        const isLeft = index === 0;
                        const isCenter = index === 1;
                        const isRight = index === 2;

                        const transformClass = isLeft
                          ? '-rotate-6 -translate-x-16 sm:-translate-x-32 hover:rotate-0 hover:-translate-y-4 hover:z-30'
                          : isCenter
                          ? 'rotate-0 z-20 hover:-translate-y-4 hover:scale-105'
                          : 'rotate-6 translate-x-16 sm:translate-x-32 hover:rotate-0 hover:-translate-y-4 hover:z-30';

                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              sound.playChirp();
                              setFinanceActiveCard(index);
                            }}
                            className={`absolute top-4 w-[240px] sm:w-[280px] rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl transition-all duration-300 cursor-pointer group select-none ${transformClass}`}
                          >
                            {/* Card top banner */}
                            <div className="p-2.5 bg-slate-900/95 border-b border-white/10 flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                                <item.icon className="w-3 h-3" />
                                <span>{item.badge}</span>
                              </span>
                              <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                            </div>

                            {/* Image clipping */}
                            <div className="h-[360px] sm:h-[400px] overflow-hidden bg-black">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>

                            {/* Bottom tag */}
                            <div className="p-2 bg-black/90 text-center text-[11px] font-mono text-slate-300 border-t border-white/5 truncate">
                              {item.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Focused Single Card View */
                  <div className="space-y-4">
                    {(() => {
                      const current = financeScreenshots.find(s => s.id === financeViewMode);
                      if (!current) return null;
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                <current.icon className="w-4 h-4 text-emerald-400" />
                                <span>{current.title}</span>
                              </h4>
                              <p className="text-xs text-slate-400 font-mono mt-0.5">
                                {current.subtitle}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                sound.playChirp();
                                const idx = financeScreenshots.findIndex(s => s.id === current.id);
                                setFinanceActiveCard(idx);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Enlarge View</span>
                            </button>
                          </div>

                          <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                            <img
                              src={current.image}
                              alt={current.title}
                              className="w-full max-h-[550px] object-cover object-top"
                            />
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
                <p className="text-center text-xs font-mono text-slate-500">
                  Click any card to inspect high-resolution UI and dividend allocations
                </p>
              </div>
            )}

            {/* Architecture Highlights & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Architecture breakdown */}
              <div className="lg:col-span-2 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Architectural Implementations</span>
                </h4>
                <ul className="space-y-2">
                  {project.architecture.map((arch, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics sidebar */}
              {project.metrics && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Telemetry & Dimensions
                  </h4>
                  <div className="space-y-2">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-1.5">
                        <span className="text-slate-400">{m.label}</span>
                        <span className="text-white font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Finance Cards */}
      {financeActiveCard !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFinanceActiveCard(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-slate-950 border border-white/20 rounded-3xl p-5 overflow-hidden space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  {financeScreenshots[financeActiveCard].badge}
                </span>
                <span className="text-xs text-slate-400">
                  — {financeScreenshots[financeActiveCard].title}
                </span>
              </div>
              <button
                onClick={() => setFinanceActiveCard(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-black flex justify-center">
              <img
                src={financeScreenshots[financeActiveCard].image}
                alt={financeScreenshots[financeActiveCard].title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setFinanceActiveCard((financeActiveCard + 2) % 3);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                {financeActiveCard + 1} of 3
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setFinanceActiveCard((financeActiveCard + 1) % 3);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
