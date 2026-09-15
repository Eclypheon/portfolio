import React, { useState } from 'react';
import { 
  Volume2, 
  ExternalLink, 
  Play, 
  Terminal, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Server, 
  Sparkles,
  Maximize2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { TabKey } from '../components/Navigation.tsx';
import { sound } from '../components/AudioEngine.ts';
import { GithubIcon } from '../components/GithubIcon.tsx';

interface OverviewTabProps {
  onNavigate: (tab: TabKey) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  const playPronunciation = () => {
    sound.playClick(520, 0.08);
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent p-6 sm:p-10 lg:p-12">
        {/* Glow ambient background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>NEO KESTER // THE DEEP GENERALIST MATRIX</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I refuse the fiction of the <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              single-vector specialist.
            </span>
          </h1>

          {/* Dictionary Definition Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e17]/90 border border-white/15 shadow-2xl space-y-5 font-sans relative">
            {/* Top lexical bar */}
            <div className="flex flex-wrap items-baseline gap-3 border-b border-white/10 pb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                deep gen·er·al·ist
              </span>
              <span className="text-sm sm:text-base font-mono text-emerald-400">
                /diːp ˈdʒɛn.ər.ə.lɪst/
              </span>
              <button
                onClick={playPronunciation}
                title="Pronounce"
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-emerald-300 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <span className="text-xs font-serif italic text-slate-400">
                noun
              </span>
              <span className="text-xs font-mono text-slate-500 ml-auto">
                plural: <strong>deep generalists</strong>
              </span>
            </div>

            {/* Definitions */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="space-y-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs font-bold text-emerald-400">1.</span>
                  <p>
                    An individual who cultivates <strong className="text-white font-semibold">forensic, architectural depth</strong> across multiple orthogonal disciplines—reconciling assembly opcodes with existential ontology, sprint canoe biomechanics with rootless container lifecycles, and quantitative finance with corporate agile governance.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs font-bold text-emerald-400">2.</span>
                  <p>
                    <span className="text-slate-400 italic text-xs uppercase tracking-wider block sm:inline mr-1">Cognitive:</span>
                    One driven by intense, hyper-focused pattern-seeking who refuses the artificial division of reality into isolated corporate or academic silos; contrasted with <em>specialist</em> (siloed depth) and <em>dilettante</em> (superficial breadth).
                  </p>
                </div>
              </div>

              {/* Usage Example */}
              <div className="pt-2 border-t border-white/5 text-xs text-slate-400 italic font-serif">
                &ldquo;Rather than choosing between the silo and the surface, the deep generalist operates as an obsessive cartographer of intersecting realities.&rdquo;
              </div>
            </div>
          </div>

          {/* Goffman's Dramaturgical Statement */}
          <div className="relative p-6 rounded-2xl border-l-4 border-emerald-500 bg-white/[0.02] border-y border-r border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>The Dramaturgical Confession // Erving Goffman</span>
            </div>
            <blockquote className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
              &ldquo;Dramaturgically speaking, society demands that we wear a single tailored mask for a single stage. 
              In boardroom meetings, the executive suit; in engineering labs, the pragmatic terminal; in athletic arenas, the stoic competitor. 
              This site is the unmasking—a deliberate dumping ground of lived obsession, where all masks coexist without pretense.&rdquo;
            </blockquote>
          </div>

          {/* Credentials Pills */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span>NUS First Class Honours (BBA)</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>PMP® & Certified Scrum Master (CSM)</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ex-ASEAN University Games Athlete (Canoeing)</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-pink-400" />
              <span>5 Orthopedic Surgeries Rebuilt</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-indigo-400" />
              <span>Quadlet + Podman Homelab</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exposed Creations (Only Bubble Tea, Finance Tracker & NoSleep Story) */}
      <section className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>SELECTED ARTIFACTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            Featured Creations & Writing
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            An interactive culinary simulation, a high-density asset dashboard, and a cosmic horror story.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Bubble Tea Simulation Game */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-6 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Game Development // Unity WebGL
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ● Playable In-Browser
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://eclypheon.github.io/bubbletea/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playChirp()}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                >
                  <span>Launch Game</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Eclypheon/bubbletea"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Bubble Tea Sim & Economy Engine
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300/90 font-mono">
                Interactive culinary physics and customer queuing simulation built in Unity WebGL
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                A rich simulation game created from scratch featuring customer behavioral state machines, custom fluid pouring shaders, dynamic beverage validation pipelines, and Foley audio synthesized with FL Studio and Audacity.
              </p>
            </div>

            {/* Embedded WebGL Player */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Play className="w-4 h-4 text-emerald-400" />
                  <span>Interactive In-Browser Player</span>
                </div>
                <button
                  onClick={() => setActiveEmbed(activeEmbed === 'bubbletea' ? null : 'bubbletea')}
                  className="text-xs font-mono px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-all"
                >
                  {activeEmbed === 'bubbletea' ? 'Close Sandbox' : 'Play Inside Page'}
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
                  className="w-full py-10 rounded-xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center justify-center cursor-pointer transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                    Click to run Unity WebGL game
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Runs 60FPS in-browser with dynamic customer queues & recipe audio
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Unity 2D/3D', 'C#', 'WebGL', 'FL Studio', 'Audacity', 'Adobe Illustrator'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Finance Tracker */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-6 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  Full Stack // Financial Dashboard
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ● Live App
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://eclypheon.github.io/financetracker/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playChirp()}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                >
                  <span>Launch Tracker</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Eclypheon/financetracker"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Precision Asset & Dividend Engine
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300/90 font-mono">
                High-density multi-asset financial tracker with automated dividend scraping and net worth modeling
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                A modern financial operating dashboard built to model liquid vs. non-liquid asset trajectories, historical equity positions, and dividend projections. Integrates Supabase with Row-Level Security and a local Python daemon for corporate action extraction.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Python 3', 'Vite PWA'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 3. The NoSleep Story */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-6 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  Fiction // r/nosleep Horror
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ● Published Reddit Story
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.reddit.com/r/nosleep/s/u6muBVtCon"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playChirp()}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                >
                  <span>Read on Reddit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('writing');
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Story Reader</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                &ldquo;I went to a Flat-Earthers’ convention and now I’m a believer&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-amber-300/90 font-mono">
                A psychological cosmic horror recounting published on Reddit r/nosleep
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Set in a small rural town in southern Russia, Alex is invited by his rational, science-club friend and crush Anastasia to a local flat-earther convention. Expecting an absurd superstition to mock, he instead stumbles into an unsettling, cult-like gathering with inexplicable proofs that steadily warp modern scientific reality.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Fiction', 'Cosmic Horror', 'r/nosleep', 'Reddit', 'Narrative Prose'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Wiring & Neurodivergent Authenticity */}
      <section className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0a0d16] relative overflow-hidden space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Cognitive Wiring & Hyper-Focused Depth</h3>
            <p className="text-xs font-mono text-slate-400">On neurodivergent pattern matching and radical authenticity</p>
          </div>
        </div>

        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            I consider myself an unabashed, self-diagnosed autistic deep generalist. In conventional corporate environments, 
            neurodivergence is often either medicalized as a liability or sanitised into an HR buzzword. 
            For me, it is the raw architecture of how I process reality: an unyielding sensory appetite for 
            underlying systems, high-density pattern recognition, and an inability to be satisfied with superficial answers.
          </p>
          <p>
            When I encounter a domain—whether it is reverse engineering an encrypted variable address, 
            the fluid dynamics of a sprint canoe blade slicing through river chop, or the sociological implications of Foucault’s Panopticon—I 
            cannot simply &ldquo;take someone&apos;s word for it.&rdquo; I have to dismantle the clockwork, inspect every cog, and understand 
            why it moves the way it does.
          </p>
          <p className="text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
            Survived early internet culture (from vintage 4chan lore to avoiding RuneScape and MapleStory trade scams in primary school), 
            cultivating an early immunity to bad faith and social engineering.
          </p>
        </div>
      </section>
    </div>
  );
};
