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

  // Collect all unique tags from active musings
  const allTags = ['All', ...Array.from(new Set(musings.flatMap(m => m.tags)))];

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
          excerpt: 'Setting a hardware breakpoint in Ghidra or OllyDbg is the digital equivalent of Socratic elenchus.',
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
        },
        {
          id: `musing-${Date.now() + 2}`,
          date: new Date().toISOString().split('T')[0],
          title: 'The Heuristics of Asymmetric Trust: From Primary School Trade Scams to Zero-Trust Networks',
          tags: ['#security', '#heuristics', '#networking', '#culture'],
          readingTime: '3 min read',
          mood: 'Lucid',
          excerpt: 'Why getting lured into the wild in 2006 RuneScape provided better threat modeling instincts than a modern cybersecurity seminar.',
          content: `Long before enterprise CISOs were delivering keynote addresses on Zero Trust Architecture, primary school kids in 2006 were getting thoroughly educated in threat modeling on the edges of Lumbridge and Varrock.

The anatomy of a social engineering exploit has not changed in twenty years. The attacker presents an asymmetric payoff: 'Trim your armor for free,' or 'Follow me into the Wild for a drop party.' The victim wants to believe that efficiency can be acquired without expenditure of energy. The moment you cross the ditch into the Wilderness, the transaction cost becomes total.

When I configure a Tailscale WireGuard mesh node or define ACL permissions in our Quadlet stack, I operate with the exact same defensive instinct. Trust is not a default setting that degrades upon failure; trust is an earned cryptographic token verified at every step. Society often confuses cynicism with paranoia. But in digital systems—as in the deep wilderness—epistemic vigilance is simply the price of survival.`
        },
        {
          id: `musing-${Date.now() + 3}`,
          date: new Date().toISOString().split('T')[0],
          title: 'The Kinetic Proof of Free Will: Sartrean Authenticity on the Aerial Strap',
          tags: ['#kinetic', '#philosophy', '#sartre', '#aerials'],
          readingTime: '4 min read',
          mood: 'Kinetic',
          excerpt: 'Sartre argued that we are condemned to be free. Suspended six feet above the ground by a single nylon strap, bad faith becomes physically impossible.',
          content: `Jean-Paul Sartre famously stated that human beings frequently retreat into 'bad faith' (mauvaise foi) because absolute freedom induces vertigo. When you are on solid ground, you can blame your lethargy on genetics, your career on economic headwinds, and your posture on your desk chair.

Suspend yourself six feet above a concrete floor by an aerial strap wrapping your wrist, however, and bad faith evaporates instantly.

In that single-arm lock-off, there is no corporate hierarchy to absorb your failure, no bureaucratic committee to request an extension from, and no narrative you can spin to convince gravity that you are trying your best. Either your latissimus dorsi, lower trapezius, and forearm flexors engage to stabilize the humeral head in the glenoid fossa, or you plummet.

Physical disciplines like partner stunting, sprint canoeing, and aerials are not merely athletic hobbies. They are existential laboratories. They strip away the conversational fog of modern life and force you into radical contact with the physical facticity of your choices.`
        },
        {
          id: `musing-${Date.now() + 4}`,
          date: new Date().toISOString().split('T')[0],
          title: 'Wittgenstein’s Ruler and the Metrics of Enterprise Agile',
          tags: ['#scrum', '#wittgenstein', '#pmp', '#systems'],
          readingTime: '3 min read',
          mood: 'Systemic',
          excerpt: 'When velocity points become a currency rather than a calibration, the language-game collapses into self-parody.',
          content: `In Philosophical Investigations, Ludwig Wittgenstein remarked that if you use a ruler to measure a table, you are also using the table to measure the ruler. 

In enterprise project management (PMP) and agile coaching (CSM), teams routinely fall into Goodhart's trap: the moment a metric like story point velocity becomes an executive target, it ceases to be a reliable measure of software output. The developers simply re-calibrate their language-game. A task that previously took 2 points becomes a 5; the sprint burndown chart glows with green ticks, while the deployed artifact delivers zero tangible value to the user.

A certified Scrum Master should not function as a ticket clerk. True agile leadership is an exercise in linguistic clarity: stripping away the ceremonial jargon that disguises stalled engineering, aligning operational verbs with functional delivery, and ensuring that the team's language-game reflects empirical reality rather than administrative theater.`
        },
        {
          id: `musing-${Date.now() + 5}`,
          date: new Date().toISOString().split('T')[0],
          title: 'Baudrillard’s Simulacra and Synthetic Benchmarks: When the LLM Evaluates Itself',
          tags: ['#ai', '#philosophy', '#baudrillard', '#homelab'],
          readingTime: '4 min read',
          mood: 'Contemplative',
          excerpt: 'When synthetic test sets evaluate models trained on synthetic data, we enter Baudrillard’s hyperreal—where reference to ground truth has severed entirely.',
          content: `Jean Baudrillard argued that simulation is no longer that of a territory, a referential being, or a substance. It is the generation by models of a real without origin or reality: a hyperreal.

In modern machine learning evaluation pipelines, we observe this exact ontological collapse. Benchmark suites like MMLU and GSM8K are increasingly saturated, so teams generate synthetic test sets using frontier models to evaluate slightly smaller distilled models. The student answers questions hallucinated by the teacher; the teacher scores the student based on its own latent priors.

When I run local inference on a quantized Qwen or Llama checkpoint in my homelab, I am constantly reminded of this severance. The benchmark numbers on the Hugging Face leaderboard look immaculate, yet the moment you test the model against messy, empirical human ambiguity—like decoding an undocumented binary format or diagnosing a failed tendon graft—the synthetic veneer cracks.

The remedy is grounding. Just as Baudrillard warned against mistaking the map for the territory, an engineer must never mistake synthetic loss curves for empirical utility. Real intelligence is tested against friction with the physical and operational world.`
        },
        {
          id: `musing-${Date.now() + 6}`,
          date: new Date().toISOString().split('T')[0],
          title: 'Taleb’s Antifragility in Post-Traumatic Biomechanics: Scars as Structural Reinforcement',
          tags: ['#kinetic', '#antifragile', '#biomechanics', '#rehab'],
          readingTime: '4 min read',
          mood: 'Kinetic',
          excerpt: 'Nassim Taleb defined the antifragile as that which gains from disorder. In post-surgical rehabilitation, tissue remodeling requires calculated mechanical stress.',
          content: `Nassim Nicholas Taleb defined antifragility as a property beyond resilience: the resilient resists shocks and stays the same; the antifragile gets better.

Nowhere is this principle more brutally physical than in orthopedic tissue remodeling. Following a joint reconstruction, conventional wisdom tempts you to protect the operative limb indefinitely—to shield it from all load, impact, and shear. But biological tissue adheres strictly to Wolff's Law and Davis's Law: bone and collagen only densify along the lines of mechanical stress placed upon them.

If you treat the repaired ligament as fragile glass, it remains atrophied and vulnerable. You must introduce controlled micro-stressors—isometric holds, eccentric tempos, multi-planar balance challenges—to force the fibroblast matrix to realign.

The psychological parallel is inescapable. We often design software architectures, personal habits, and career paths for total insulation against disruption. But true durability is not the absence of stress; it is the deliberate cultivation of systems that metabolize volatility into strength.`
        },
        {
          id: `musing-${Date.now() + 7}`,
          date: new Date().toISOString().split('T')[0],
          title: 'Marcus Aurelius at the Kernel Panic: Stoic Resilience in Headless Server Administration',
          tags: ['#systems', '#stoicism', '#quadlet', '#resilience'],
          readingTime: '3 min read',
          mood: 'Systemic',
          excerpt: 'When a remote server drops off the Tailscale mesh at 2 AM, Epictetus and Marcus Aurelius offer better troubleshooting hygiene than panic.',
          content: `Marcus Aurelius wrote in Meditations: 'You have power over your mind—not outside events. Realize this, and you will find strength.'

There is a distinct flavor of modern helplessness that strikes when a headless server, located miles away behind a NAT router, stops responding to ping packets. The SSH connection times out; the Tailscale node goes grey; the status dashboard turns crimson.

Your immediate mammalian instinct is adrenaline and panic. You wonder if the power supply failed, if the kernel panicked on a dirty reboot, or if a rogue Quadlet unit exhausted all available file descriptors.

Yet the headless machine is indifferent to your anxiety. Panicking changes zero bits on the NAND flash. Stoicism in systems engineering is the discipline of distinguishing between what you can observe and what you can control. You systematically inspect the last syslog entries, check the remote console logs, test fallback ports, and diagnose with cold, methodical detachment. The machine only obeys logic; to bring it back to life, your mind must do the same.`
        }
      ];

      // Pick a candidate not already currently active
      const currentTitles = new Set(musings.map(m => m.title));
      const available = generatedList.filter(m => !currentTitles.has(m.title));
      const candidates = available.length > 0 ? available : generatedList;
      const randomMusing = candidates[Math.floor(Math.random() * candidates.length)];

      // Automated housekeeping: retain maximum 5 posts, removing the oldest post
      setMusings(prev => [randomMusing, ...prev].slice(0, 5));
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
              Cron: 30 19 * * * (03:30 SGT)
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-xs sm:text-sm">
            This repository is connected to an autonomous GitHub Actions cron workflow (`.github/workflows/daily-musing.yml`) 
            and a synthesis engine (`scripts/generate_musing.py`). Every night, the automation wakes up, selects a dynamic rotational topic pair 
            (e.g. <em>[Foucault’s Panopticon × Edge Server Telemetry]</em> or <em>[Sartre’s Bad Faith × Container Namespaces]</em>), 
            synthesizes the fresh entry, executes automated housekeeping (pruning the oldest entry to maintain an active 5-post window), 
            and automatically commits, builds, and redeploys production assets to GitHub Pages.
          </p>
          <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-[11px] text-emerald-300 flex flex-col sm:flex-row justify-between gap-2">
            <span>git commit: chore(musings): autonomous nightly musing synthesis & housekeeping</span>
            <span className="text-cyan-400 font-semibold">Housekeeping: Max 5 posts active</span>
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
