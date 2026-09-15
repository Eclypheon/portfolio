import React from 'react';
import { 
  Volume2, 
  Terminal, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Server, 
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Feather,
  ChevronRight
} from 'lucide-react';
import { TabKey } from '../components/Navigation.tsx';
import { sound } from '../components/AudioEngine.ts';

interface OverviewTabProps {
  onNavigate: (tab: TabKey) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
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

      {/* Domain Navigation Portals (Directing Visitors to Dedicated Tabs) */}
      <section className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>EXPLORE BY DOMAIN</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-2">
            Dedicated Workspaces & Archives
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
            Projects and creative archives live in dedicated tabs above
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Portal 1: Projects Tab */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('projects');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Interactive Projects
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Play the WebGL Bubble Tea simulation game, explore the multi-asset Finance Tracker, and view the CheerPlan Pro choreography suite.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>3 Active Systems</span>
              <span className="flex items-center gap-1 group-hover:underline">Open Tab <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Portal 2: Story / Writing Tab */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('writing');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:border-amber-500/40 transition-colors">
                  <Feather className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Fiction & Dark Prose
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read the r/nosleep cosmic horror story <em>“I went to a Flat-Earthers’ convention and now I’m a believer”</em> along with dark prose and poetry fragments.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-400">
              <span>Featured Story</span>
              <span className="flex items-center gap-1 group-hover:underline">Read Story <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Portal 3: Homelab & Philosophy */}
          <div 
            onClick={() => {
              sound.playSwitch();
              onNavigate('homelab');
            }}
            className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Server className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Homelab & Philosophy
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Repurposed 2014 MacBook Pro running rootless Quadlet + Podman containers, local AI, alongside Camus, Sartre, and Foucault reflections.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>Systems & Canon</span>
              <span className="flex items-center gap-1 group-hover:underline">Inspect Stack <ChevronRight className="w-3.5 h-3.5" /></span>
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
