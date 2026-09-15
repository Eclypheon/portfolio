import React from 'react';
import { 
  Activity, 
  Award, 
  Flame, 
  HeartPulse, 
  Compass, 
  Zap, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { kineticEndeavors } from '../data/kineticData.ts';

export const KineticTab: React.FC = () => {
  return (
    <div className="space-y-14 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono">
          <Activity className="w-3.5 h-3.5" />
          <span>BIOMECHANICS // HIGH-OUTPUT KINETIC ARCHITECTURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The Kinetic Discipline & Surgical Rebuilding
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          The intellect cannot be divorced from the flesh. From national representation at the ASEAN University Games 
          and competitive bodybuilding podiums, to enduring 5 major orthopedic surgeries and performing overhead cheerleading stunts.
        </p>
      </div>

      {/* Hero Stat Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
          <div className="text-pink-400 font-mono text-xs">National Level</div>
          <div className="text-xl sm:text-2xl font-black text-white">ASEAN Games</div>
          <p className="text-[11px] text-slate-400">Team Singapore (Canoeing)</p>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
          <div className="text-yellow-400 font-mono text-xs">Bodybuilding</div>
          <div className="text-xl sm:text-2xl font-black text-white">Physique Medal</div>
          <p className="text-[11px] text-slate-400">Competitive Stage Podium</p>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
          <div className="text-red-400 font-mono text-xs">Reconstruction</div>
          <div className="text-xl sm:text-2xl font-black text-white">5 Surgeries</div>
          <p className="text-[11px] text-slate-400">Major Orthopedic Rebuilds</p>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
          <div className="text-cyan-400 font-mono text-xs">Adventures</div>
          <div className="text-xl sm:text-2xl font-black text-white">Air & Sea</div>
          <p className="text-[11px] text-slate-400">PADI Advanced & Skydiving AFF</p>
        </div>
      </div>

      {/* Featured Highlight: The 5 Surgeries & Resilience */}
      <div className="p-8 sm:p-10 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/20 via-black to-black relative overflow-hidden space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
          <HeartPulse className="w-4 h-4 text-red-400 animate-pulse" />
          <span>The Crucible // Empirical Re-Education of the Nervous System</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          5 Major Orthopedic Surgeries: Defying Sedentary Atrophy
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          Five separate operations, countless months of zero-weightbearing immobility, titanium anchors, and sliced soft tissue. 
          When joint mechanics fail catastrophically, standard medical prognosis pushes you into sedentary caution. 
          I treated rehabilitation as an aggressive engineering problem: reconstructing motor recruitment patterns, 
          optimizing eccentric tendon loading, and adapting around permanent structural compromises to return not just to walking, 
          but to overhead acrobatic basing, dynamic partner tumbling, and high-altitude flight.
        </p>
      </div>

      {/* Kinetic Endeavors Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Flame className="w-5 h-5 text-pink-400" />
          <span>Athletic Disciplines & Movement Disciplines</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kineticEndeavors.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-pink-400 mt-0.5">
                    {item.roleOrLevel}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Biomechanical demands */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Biomechanical Demands & Technical Mastery:
                  </span>
                  <ul className="space-y-1.5">
                    {item.skillsAndDemands.map((dem, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                        <span>{dem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                {item.metrics.map((m, mi) => (
                  <div key={mi} className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                    <span className="text-white font-semibold text-[11px] block truncate">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
