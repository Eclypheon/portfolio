import React from 'react';
import { 
  Compass, 
  Terminal, 
  Server, 
  BookOpen, 
  Activity, 
  ArrowUpRight, 
  Award, 
  ShieldAlert, 
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TabKey } from '../components/Navigation.tsx';
import { sound } from '../components/AudioEngine.ts';

interface OverviewTabProps {
  onNavigate: (tab: TabKey) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent p-6 sm:p-10 lg:p-12">
        {/* Glow ambient background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>OPERATIONAL // THE DEEP GENERALIST MATRIX</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I refuse the fiction of the <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              single-vector specialist.
            </span>
          </h1>

          {/* Subtitle / Definition */}
          <div className="p-6 rounded-2xl bg-[#0b0e17]/80 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Taxonomy: The Deep Generalist</span>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A <strong className="text-white font-semibold">Deep Generalist</strong> does not skim surfaces or accumulate party trivia. 
              Instead, they possess the rare, obsessive cognitive appetite to descend to <span className="text-emerald-300">forensic architectural depths</span> across 
              radically orthogonal disciplines—reconciling assembly opcodes with existential ontology, 
              sprint canoe biomechanics with rootless container lifecycles, and quantitative options surfaces with corporate agile governance.
            </p>
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
              This site is the unmasking—a deliberate dumping ground of lived obsession, where all masks coexist without pretense. 
              Browse at your leisure and fancy, but tread carefully for grave peril may awaiteth thee on the path forward 
              <span className="text-emerald-400 not-italic font-mono text-xs ml-1">(don&apos;t worry about any basilisks though).</span>&rdquo;
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

      {/* The 6 Matrix Domains */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>The Interconnected Nodes</span>
            </h2>
            <p className="text-sm text-slate-400 font-mono mt-1">
              Select a domain to inspect its technical architecture and artifacts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Projects */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('projects');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Interactive Projects & Code
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  Playable WebGL Bubble Tea simulation game, precision multi-asset dividend tracker, 3D Reality Cut Metroidvania engine, and CheerPlan Pro choreography suite.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>5 Active Systems</span>
              <span className="flex items-center gap-1 group-hover:underline">Explore <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 2: Homelab */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('homelab');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Server className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Homelab & Quadlet Topology
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  Repurposed 2014 MacBook Pro running headless Linux with Podman + Quadlet systemd units, local LLMs (Qwen/Llama), Whisper STT, n8n, and Tailscale mesh streaming.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>Rootless Architecture</span>
              <span className="flex items-center gap-1 group-hover:underline">Inspect <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 3: Philosophy */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('philosophy');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:border-indigo-500/40 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Philosophy & The Canon
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  Camus’ Absurdism, Sartre’s Bad Faith, Socratic Cave Epistemology, Wittgenstein’s Language-Games, Foucault’s Panopticon, and Weber’s Iron Cage.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-indigo-400">
              <span>Curated Bookshelf</span>
              <span className="flex items-center gap-1 group-hover:underline">Read <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 4: Kinetic */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('kinetic');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 group-hover:border-pink-500/40 transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                  The Kinetic Discipline
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  Singapore National ASEAN athlete (Canoeing), International Dragonboat, medalled physique competitor, surviving 5 major surgeries, cheer stunting & aerial arts.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-pink-400">
              <span>Biomechanical Feats</span>
              <span className="flex items-center gap-1 group-hover:underline">Witness <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 5: Toolchain */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('toolkit');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:border-amber-500/40 transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  The Complete Toolchain
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  3D (3ds Max, Blender, C4D), Video/Audio (DaVinci, FL Studio), Low-level reversing (Cheat Engine, OllyDbg, Ghidra), CCNA & GIS spatial analysis.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-400">
              <span>Multi-Disciplinary Stack</span>
              <span className="flex items-center gap-1 group-hover:underline">Review <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 6: AI Daily Musings */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('musings');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between border-emerald-500/20"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Autonomous Daily Musings
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  Algorithmic cross-pollinations written nightly on rotation—connecting container runtimes with Sartre, joint rehabilitation with Sisyphus, and memory scans with language-games.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Nightly AI Cron Pipeline</span>
              <span className="flex items-center gap-1 group-hover:underline">Consult Oracle <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Manifesto / Neurodivergent Authenticity */}
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
            When I encounter a domain—whether it is the exact memory offset of an encrypted health variable in Cheat Engine, 
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
