import React, { useState } from 'react';
import { 
  Sparkles, 
  Tag, 
  Clock, 
  Calendar, 
  Terminal, 
  RefreshCw, 
  Check, 
  Layers,
  ChevronDown,
  Cpu
} from 'lucide-react';
import { initialMusings, DailyMusing } from '../data/musingsData.ts';
import { sound } from '../components/AudioEngine.ts';

export const MusingsTab: React.FC = () => {
  const [musings, setMusings] = useState<DailyMusing[]>(initialMusings);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showCronDetails, setShowCronDetails] = useState<boolean>(false);

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(initialMusings.flatMap(m => m.tags)))];

  const filteredMusings = selectedTag === 'All'
    ? musings
    : musings.filter(m => m.tags.includes(selectedTag));

  // Generative Oracle simulation (creates a procedural AI cross-pollination musing)
  const generateNewMusing = () => {
    sound.playChirp();
    setIsGenerating(true);

    setTimeout(() => {
      const generatedList: DailyMusing[] = [
        {
          id: `musing-${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
          title: 'The Socratic Method of the Disassembler: Interrogating Cold Silicon',
          tags: ['#reverse-engineering', '#philosophy', '#plato', '#epistemology'],
          readingTime: '3 min read',
          mood: 'Lucid',
          excerpt: 'Setting a hardware breakpoint in Ghidra is the digital equivalent of Socratic elenchus.',
          content: `In Plato’s early dialogues, Socrates never begins by proclaiming truths. Instead, he assumes the posture of absolute ignorance, interrogating his interlocutor with razor-sharp questions until their unfounded assumptions collapse under contradiction.

A software disassembler like Ghidra or OllyDbg operates on the exact same philosophical premise. The binary arrives as an inscrutable black box of stripped symbols and obfuscated jumps. You do not ask the program what it claims to do in its documentation; documentation is the social mask. 

Instead, you set a hardware execution breakpoint on an address. You halt the CPU mid-stride. You inspect the registers (EAX, EBX, ESP) and the flags register (ZF, CF). You force the binary to answer under oath.

Just as the Athenians grew hostile when Socrates demonstrated that their revered definitions of piety and justice were hollow, an application with anti-debug routines will panic and crash when it realizes you are watching its registers. The disassembler is not merely an engineering utility; it is the ultimate instrument of philosophical elenchus applied to compiled thought.`
        },
        {
          id: `musing-${Date.now() + 1}`,
          date: new Date().toISOString().split('T')[0],
          title: 'The Biomechanical Singularity: Counterbalance in Aerial Straps and Stunts',
          tags: ['#kinetic', '#cybernetics', '#aerials', '#acroyoga'],
          readingTime: '4 min read',
          mood: 'Kinetic',
          excerpt: 'How partner acrobatic flight models Norbert Wiener’s cybernetic feedback loops with zero latency margin.',
          content: `When you hold a flyer in an overhead stunt extension or counterbalance a partner on aerial straps, you quickly realize that equilibrium is not a stationary state. It is a rapid, oscillating frequency of micro-corrections.

Norbert Wiener defined cybernetics as the science of control and communication in the animal and the machine, founded upon the continuous ingestion of negative feedback to minimize entropy. 

In an extended liberty, the flyer's center of mass shifts by three millimeters due to a draft of air. If the base reacts with a rigid, brute-force heave, the system over-corrects and the tower collapses. Instead, the palms and wrists must act as high-frequency strain gauges, applying immediate damping force before the visual cortex even registers the tilt.

The human body is an analog computer of breathtaking sophistication. We spend our days typing into digital keyboards that discretize the universe into 0s and 1s, forgetting that our joints and nervous systems were engineered to solve differential equations of momentum and balance in real-time.`
        }
      ];

      const randomMusing = generatedList[Math.floor(Math.random() * generatedList.length)];
      setMusings([randomMusing, ...musings]);
      setIsGenerating(false);
      sound.playClick(800, 0.05);
    }, 1200);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHRONICLE // AUTONOMOUS AI DAILY MUSINGS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Nightly AI Oracle & Musings
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A stream of consciousness exploring the collision points between philosophy, 
            container systems, memory hacking, and kinetic recovery—updated on an autonomous nightly schedule.
          </p>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={generateNewMusing}
            disabled={isGenerating}
            className="px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Synthesizing...' : 'Consult Oracle (Generate Today)'}</span>
          </button>

          <button
            onClick={() => setShowCronDetails(!showCronDetails)}
            className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nightly Cron Specs</span>
          </button>
        </div>
      </div>

      {/* Expandable Cron / Automation Details */}
      {showCronDetails && (
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 font-mono text-xs text-slate-300 animate-fadeIn">
          <div className="flex items-center justify-between text-cyan-400">
            <span className="font-bold flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> AUTOMATED NIGHTLY WORKFLOW ARCHITECTURE
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
              Cron: 0 19 * * * (03:00 SGT)
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-xs sm:text-sm">
            This repository is connected to a GitHub Actions cron job (`.github/workflows/daily-musing.yml`) 
            and a Python script (`scripts/generate_musing.py`). Every night, the automation wakes up, selects a dynamic rotational topic pair 
            (e.g. <em>[Foucault’s Panopticon × Edge Server Telemetry]</em> or <em>[Sartre’s Bad Faith × Container Namespaces]</em>), 
            invokes a generative model, and commits the fresh markdown entry directly to the repository branch, automatically redeploying to GitHub Pages.
          </p>
          <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-[11px] text-emerald-300">
            git log: Automated daily musing generated and pushed by GitHub Action bot.
          </div>
        </div>
      )}

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              sound.playClick(400, 0.02);
              setSelectedTag(tag);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              selectedTag === tag
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Musings Cards */}
      <div className="space-y-8">
        {filteredMusings.map((musing) => (
          <article
            key={musing.id}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden transition-all hover:border-emerald-500/30"
          >
            {/* Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {musing.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {musing.readingTime}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                Mood: {musing.mood}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {musing.title}
              </h2>
              <p className="text-sm text-emerald-300/80 font-mono italic">
                {musing.excerpt}
              </p>
            </div>

            {/* Content Body */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 font-sans whitespace-pre-line">
              {musing.content}
            </div>

            {/* Tags footer */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {musing.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-xs font-mono hover:text-emerald-300 cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
