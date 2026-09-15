import React, { useState } from 'react';
import { 
  BookOpen, 
  Quote, 
  Search, 
  Tag, 
  Sparkles, 
  Compass, 
  Brain, 
  Eye, 
  Layers,
  Shield
} from 'lucide-react';
import { readingList, ReadingItem } from '../data/readingListData.ts';
import { sound } from '../components/AudioEngine.ts';

export const PhilosophyTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All', 
    'Philosophy', 
    'Sociology & Power', 
    'Language & Mind', 
    'Systems & Cybernetics'
  ];

  const filteredItems = readingList.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.coreConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-14 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>EPISTEMOLOGY & CANON // CONTINENTAL ONTOLOGY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Philosophy, Language & The Panopticon
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Rejecting dogmatic certainty. A synthesis of mindful Stoic emotional governance, 
          existential absurdism, Socratic skepticism, linguistic relativity, and sociological critiques of surveillance.
        </p>
      </div>

      {/* Featured Philosophical Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 0: Stoicism & Emotional Governance */}
        <div className="md:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-4 relative overflow-hidden group shadow-[0_0_30px_-10px_rgba(245,158,11,0.1)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Stoic Discipline // Marcus Aurelius & Epictetus</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 px-2 py-0.5 rounded bg-amber-500/5 border border-amber-500/20">
              Cardinal Doctrine
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
            Mindful Emotional Governance Over Apathetic Suppression
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Uncontrolled emotion is the ultimate cognitive surrender and systemic vulnerability—the worst cardinal sin against clarity, agency, and reason. 
            Yet authentic Stoicism is widely caricatured: it is emphatically <strong>not</strong> the discarding of all emotions to become numb, apathetic, or anhedonic. 
            Rather, it is cultivating relentless, lucid mindfulness of the visceral emotions that arise, withholding automated assent from reactive impulses, 
            and actively, deliberately choosing how to wield and channel them to your decisive tactical advantage in any situation.
          </p>
          <div className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs text-amber-200/95 italic font-mono flex items-start gap-2.5">
            <Quote className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <span>&ldquo;You have power over your mind—not outside events. Realize this, and you will find strength. Between stimulus and response there is a space; in that space lies our power to choose our response.&rdquo;</span>
          </div>
        </div>

        {/* Pillar 1: Camus & The Absurd */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              Absurdism // Camus
            </span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            Lucid Revolt Over Philosophical Suicide
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Absurd arises from the friction between the human hunger for ultimate order and the unreasonable silence of the universe. 
            Camus refuses the cowardice of ending one&apos;s life and the intellectual dishonesty of inventing comfortable theological or technological illusions. 
            Instead, we push the stone. Sisyphus smiling as his boulder rolls down is the highest form of human rebellion.
          </p>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-emerald-300/90 italic font-mono flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
            <span>&ldquo;The struggle itself toward the heights is enough to fill a man&apos;s heart. One must imagine Sisyphus happy.&rdquo;</span>
          </div>
        </div>

        {/* Pillar 2: Sartre & Bad Faith */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Existentialism // Sartre
            </span>
            <Compass className="w-4 h-4 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            Mauvaise Foi & Radical Authenticity
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Bad faith is the psychological trick whereby we pretend we have no agency—treating ourselves as static objects 
            constrained by social roles or corporate job descriptions. Existence precedes essence: we are condemned to be free. 
            To hide behind a curated persona and claim &ldquo;I had no other choice&rdquo; is a theatrical fraud against one&apos;s own consciousness.
          </p>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-cyan-300/90 italic font-mono flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-cyan-400" />
            <span>&ldquo;Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.&rdquo;</span>
          </div>
        </div>

        {/* Pillar 3: Plato's Cave */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              Epistemology // Plato
            </span>
            <Eye className="w-4 h-4 text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            The Cave & Socratic Elenchus
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Most individuals live shackled in the subterranean cave, accepting shadows cast by firelight as the totality of truth. 
            Breaking free and stepping into the blinding light of the Sun is painful, alienating, and invites the wrath of those still chained. 
            Socratic questioning is not an academic debate—it is an abrasive acid bath to dissolve unexamined social dogmas.
          </p>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-indigo-300/90 italic font-mono flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-indigo-400" />
            <span>&ldquo;How could they see anything but the shadows if they were never allowed to move their heads?&rdquo;</span>
          </div>
        </div>

        {/* Pillar 4: Wittgenstein & Language Games */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-pink-500/10 border border-pink-500/30 text-pink-400">
              Linguistics // Wittgenstein & Sapir-Whorf
            </span>
            <Brain className="w-4 h-4 text-pink-400" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
            Language-Games & Cognitive Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Words do not possess mystical intrinsic anchors in heaven; their meaning is their operational use in human games. 
            This segues directly into the Sapir-Whorf hypothesis: the syntax and vocabulary of your language fundamentally sculpt 
            the thoughts you are capable of thinking. Change your operational grammar, and the architecture of your reality shifts.
          </p>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-pink-300/90 italic font-mono flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-pink-400" />
            <span>&ldquo;The limits of my language mean the limits of my world.&rdquo;</span>
          </div>
        </div>
      </div>

      {/* Interactive Bookshelf / Reading Canon */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>The Curated Bookshelf & Critical Reading List</span>
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Foundational texts across Continental Philosophy, Sociology of Power, and Systems
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick(450, 0.03);
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400">
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-300 mt-0.5">
                    by {item.author}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Core Concept</span>
                  <span className="text-xs text-emerald-300 font-medium">{item.coreConcept}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.reflection}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
