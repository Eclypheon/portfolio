import React, { useState } from 'react';
import { 
  Terminal, 
  ExternalLink, 
  Play, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon.tsx';
import { projects, Project } from '../data/projectsData.ts';
import { sound } from '../components/AudioEngine.ts';

export const ProjectsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  const categories = ['All', 'Game Dev', 'Full Stack', 'Quantitative', 'Systems'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
                    : project.status === 'In Production'
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
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
                    <span>Launch Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
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
                    <span>In-Browser WebGL Simulation Launcher</span>
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
                      Runs 60FPS in-browser with dynamic customer queues & recipe audio
                    </p>
                  </div>
                )}
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
    </div>
  );
};
