import React from 'react';
import { 
  Wrench, 
  Box, 
  Film, 
  Cpu, 
  Award, 
  MapPin, 
  Globe, 
  Check, 
  Terminal,
  Zap,
  Sparkles,
  Bot
} from 'lucide-react';
import { skillCategories } from '../data/skillsData.ts';

export const ToolkitTab: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box': return <Box className="w-5 h-5 text-emerald-400" />;
      case 'Film': return <Film className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Award': return <Award className="w-5 h-5 text-yellow-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-pink-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-amber-400" />;
      default: return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-14 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <Wrench className="w-3.5 h-3.5" />
          <span>ARSENAL // THE MULTI-DISCIPLINARY TOOLCHAIN</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools, Reverse Engineering & Craft
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          An unvarnished catalog of technical toolchains across divergent domains: 
          from 3D hard-surface geometry and memory disassemblers to GIS spatial engines, local AI inference, and certified agile governance.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  {cat.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills breakdown */}
              <div className="space-y-3 pt-2">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reverse Engineering Deep Dive Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 via-black to-black space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>Low-Level Memory Dissection & Epistemology</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Why Low-Level Memory Forensics Matters to Generalist Thinking
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          High-level languages like Python and JavaScript present an illusion of tidy objects, automatic garbage collection, and harmless scopes. 
          Dropping into Cheat Engine, OllyDbg, or Ghidra rips away the curtain: underneath is an unforgiving expanse of heap chunks, stack pointers, 
          and x86/x64 opcodes. Chasing multi-level static pointer offsets through dynamic memory trains the mind to trace causality through 
          complex, obfuscated systems without needing an instruction manual.
        </p>
      </div>
    </div>
  );
};
