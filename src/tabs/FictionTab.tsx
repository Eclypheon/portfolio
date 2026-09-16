import React, { useState } from 'react';
import { 
  Feather, 
  Moon, 
  Compass, 
  FileText,
  User,
  Sparkles
} from 'lucide-react';
import { flatEarthStory, darkProseCollection, DarkProseItem } from '../data/fictionData.ts';
import { sound } from '../components/AudioEngine.ts';

export const FictionTab: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [poetryFilter, setPoetryFilter] = useState<'All' | 'Authored' | 'AI'>('All');

  const currentChapter = flatEarthStory.chapters.find(c => c.number === activeChapter) || flatEarthStory.chapters[0];

  const filteredPoems = darkProseCollection.filter(item => {
    if (poetryFilter === 'Authored') return item.attribution === 'Authored by Neo Kester';
    if (poetryFilter === 'AI') return item.attribution.includes('AI-Generated');
    return true;
  });

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
          <Feather className="w-3.5 h-3.5" />
          <span>LITERARY DOMAIN // COSMIC HORROR & VERSE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Fiction, Poetry & Dark Prose
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Explorations in psychological dread, existential friction, and raw poetic verse. 
          Deconstructing dogmatic certainty until only the terrifying geometry of the void remains.
        </p>
      </div>

      {/* Featured Story Reader: The Flat Earth Society NoSleep Story */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 relative overflow-hidden">
        <div className="space-y-4 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <Moon className="w-4 h-4" />
              <span>Published NoSleep Story // r/nosleep</span>
            </div>
            <a
              href="https://www.reddit.com/r/nosleep/s/u6muBVtCon"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playChirp()}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(245,158,11,0.15)]"
            >
              <span>Read Original on Reddit</span>
              <Compass className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              &ldquo;I went to a Flat-Earthers’ convention and now I’m a believer&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-amber-300/80 font-mono mt-1">
              A psychological cosmic horror story set in southern Russia
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Set in a small rural town in southern Russia, Alex is invited by his rational, science-club friend and crush Anastasia to a local flat-earther convention. Expecting an absurd superstition to poke holes in, he instead stumbles into an unsettling, cult-like gathering with inexplicable proofs that steadily warp modern scientific reality.
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

      {/* Poetry & Dark Verse Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Poetry & Dark Verse Collection</span>
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Authored works by Neo Kester alongside AI-generated conceptual verse
            </p>
          </div>

          {/* Attribution Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                sound.playClick();
                setPoetryFilter('All');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                poetryFilter === 'All'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              All ({darkProseCollection.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setPoetryFilter('Authored');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                poetryFilter === 'Authored'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              <User className="w-3 h-3" />
              <span>Authored by Neo Kester (6)</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setPoetryFilter('AI');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                poetryFilter === 'AI'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>AI-Generated // Approved (3)</span>
            </button>
          </div>
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoems.map((item) => {
            const isAuthored = item.attribution === 'Authored by Neo Kester';
            return (
              <div
                key={item.id}
                className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group overflow-hidden ${
                  isAuthored
                    ? 'border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_20px_-5px_rgba(16,185,129,0.08)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  {/* Photo Banner with Dark Overlay */}
                  {item.image && (
                    <div className="relative h-44 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-3 overflow-hidden rounded-t-3xl bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={item.imagePosition ? {
                          objectPosition: item.imagePosition
                        } : item.imageOffsetY ? {
                          height: `calc(100% + ${item.imageOffsetY.replace('-', '')})`,
                          marginTop: item.imageOffsetY
                        } : undefined}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/40 to-black/20" />
                    </div>
                  )}

                  {/* Top metadata badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 ${
                      isAuthored
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                        : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {isAuthored ? <User className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                      <span>{item.attribution}</span>
                    </span>
                    {item.date && (
                      <span className="text-[10px] font-mono text-slate-500">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  {/* Poem Stanzas Body */}
                  <div className="text-xs text-slate-300 font-mono leading-relaxed bg-black/50 p-4 rounded-xl border border-white/5 space-y-3 whitespace-pre-line max-h-96 overflow-y-auto">
                    {item.text.map((line, li) => {
                      if (line === '') {
                        return <div key={li} className="h-2" />;
                      }
                      return (
                        <div key={li} className="leading-relaxed">
                          {line}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
