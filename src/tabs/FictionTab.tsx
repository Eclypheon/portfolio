import React, { useState } from 'react';
import { 
  Feather, 
  BookOpen, 
  Moon, 
  ChevronRight, 
  Quote, 
  Compass,
  FileText
} from 'lucide-react';
import { flatEarthStory, darkProseCollection } from '../data/fictionData.ts';
import { sound } from '../components/AudioEngine.ts';

export const FictionTab: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const currentChapter = flatEarthStory.chapters.find(c => c.number === activeChapter) || flatEarthStory.chapters[0];

  return (
    <div className="space-y-14 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
          <Feather className="w-3.5 h-3.5" />
          <span>LITERARY DOMAIN // COSMIC HORROR & DARK PROSE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Fiction, Cosmic Horrors & Poetry
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Explorations in speculative fiction, psychological dread, and raw verse. 
          Deconstructing absolute beliefs until only the terrifying geometry of the void remains.
        </p>
      </div>

      {/* Featured Story Reader: The Flat Earth Society NoSleep Story */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative overflow-hidden">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <Moon className="w-4 h-4" />
            <span>Featured NoSleep Horror Novelette</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {flatEarthStory.title}
          </h2>
          <p className="text-xs sm:text-sm text-amber-300/80 font-mono">
            {flatEarthStory.tagline}
          </p>
          <p className="text-xs text-slate-400 italic pt-1">
            {flatEarthStory.authorNote}
          </p>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="flex flex-wrap gap-2">
          {flatEarthStory.chapters.map((ch) => (
            <button
              key={ch.number}
              onClick={() => {
                sound.playClick(400, 0.04);
                setActiveChapter(ch.number);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                activeChapter === ch.number
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{ch.title}</span>
            </button>
          ))}
        </div>

        {/* Chapter Content Reader */}
        <div className="p-6 sm:p-8 rounded-2xl bg-black/50 border border-white/10 space-y-6">
          <div className="space-y-1 border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-amber-400">
              {currentChapter.subtitle}
            </span>
            <h3 className="text-xl font-bold text-white">
              {currentChapter.title}
            </h3>
          </div>

          <div className="prose-dark font-sans text-sm sm:text-base leading-relaxed space-y-4 text-slate-300">
            {currentChapter.content.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Chapter navigation footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              disabled={activeChapter === 1}
              onClick={() => {
                sound.playClick();
                setActiveChapter(prev => Math.max(1, prev - 1));
              }}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
            >
              ← Previous Chapter
            </button>
            <span className="text-xs font-mono text-slate-500">
              Chapter {activeChapter} of {flatEarthStory.chapters.length}
            </span>
            <button
              disabled={activeChapter === flatEarthStory.chapters.length}
              onClick={() => {
                sound.playClick();
                setActiveChapter(prev => Math.min(flatEarthStory.chapters.length, prev + 1));
              }}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-xs font-mono text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-500/25"
            >
              Next Chapter →
            </button>
          </div>
        </div>
      </div>

      {/* Poetry & Dark Prose Fragments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-400" />
          <span>Dark Prose Fragments & Kinetic Verse</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {darkProseCollection.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-400">
                    {item.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-300 font-mono space-y-1.5 leading-relaxed italic bg-black/40 p-4 rounded-xl border border-white/5">
                  {item.text.map((line, li) => (
                    <div key={li}>{line || <br />}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
