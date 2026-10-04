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
          title: 'SLA OneMap 3D and the National Cadastre: The Foundation for Singapore’s Digital Twin',
          tags: ['#singapore', '#sla', '#onemap', '#digitaltwin', '#geospatial'],
          readingTime: '3 min read',
          mood: 'Systemic',
          excerpt: 'How Singapore Land Authority’s open 3D cadastre provides an authoritative single source of truth for autonomous systems and urban microclimate modeling.',
          content: `Singapore Land Authority (SLA) has spearheaded one of the world's most sophisticated public geospatial infrastructures through OneMap 3D and the National Digital Twin. By establishing an authoritative, open semantic 3D mesh covering building envelopes, subterranean utilities, and terrain, SLA has moved the national spatial data infrastructure (NSDI) beyond traditional boundary surveying.

For GIS engineers, this means spatial joins are no longer constrained to flat 2D polygons. Automated geoprocessing routines can now calculate solar irradiance on vertical facades, model wind tunnel effects through high-density HDB corridors, and support camera-based Visual Positioning Systems (VPS) for autonomous mobile robots. The operational lesson is unambiguous: high-integrity spatial data governance is the true prerequisite for any scalable smart nation deployment.`
        },
        {
          id: `musing-${Date.now() + 6}`,
          date: new Date().toISOString().split('T')[0],
          title: 'ArcGIS Enterprise and GeoAI: Operationalizing Deep Learning on Vector and Imagery Layers',
          tags: ['#arcgis', '#esri', '#geoai', '#spatialanalytics'],
          readingTime: '4 min read',
          mood: 'Systemic',
          excerpt: 'Integrating foundation models into ArcGIS Pro and Enterprise pipelines transforms static cartography into continuous automated feature extraction.',
          content: `In modern spatial engineering, the barrier between remote sensing and enterprise GIS has collapsed. Esri’s aggressive expansion of GeoAI tools within ArcGIS Pro and ArcGIS Enterprise enables practitioners to deploy deep learning models directly against multiterabyte satellite rasters and high-density point clouds.

Where teams once spent weeks manually digitizing building footprints or road centerlines across Southeast Asian agricultural and coastal corridors, pretrained Segment Anything and YOLO-based spatial detectors execute inference in minutes. 

The strategic challenge for GIS architects is pipeline orchestration: managing GPU inference clusters, ensuring spatial reference alignment across WGS84 and local projections (SVY21), and versioning geodatabases with enterprise branch versioning so automated AI extractions can be audited by human surveyors.`
        },
        {
          id: `musing-${Date.now() + 7}`,
          date: new Date().toISOString().split('T')[0],
          title: 'InSAR Satellite Telemetry and Land Subsidence Monitoring Across ASEAN Megacities',
          tags: ['#remotesensing', '#insar', '#earthobservation', '#asean'],
          readingTime: '4 min read',
          mood: 'Lucid',
          excerpt: 'How Synthetic Aperture Radar (SAR) constellations provide millimeter-scale deformation tracking across sinking river deltas and coastal infrastructure.',
          content: `Southeast Asian river deltas—from Jakarta and Bangkok to the Mekong—face compound threats from groundwater extraction, rapid coastal development, and sea-level rise. Traditional leveling surveys are too sporadic and resource-intensive to capture localized deformation dynamics across hundreds of square kilometers.

Interferometric Synthetic Aperture Radar (InSAR), leveraging Sentinel-1 and commercial constellations, changes the equation. By measuring phase shifts between repeat radar passes, spatial analysts can quantify millimeter-scale surface subsidence over time regardless of cloud cover.

When layered into cloud geodatabases alongside geotechnical borehole data, InSAR transforms environmental monitoring from retrospective crisis management into predictive infrastructure defense. The modern spatial analyst must master phase unwrapping, atmospheric correction, and temporal baseline filtering to turn raw microwave pulses into actionable urban policy.`
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
            <span>GEOINT // AUTONOMOUS NIGHTLY GEOSPATIAL BRIEFING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Nightly Geospatial Briefing & Dispatch
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            An autonomous daily intelligence synthesis scouting the latest breakthroughs in 
            Earth Observation, ESRI ArcGIS solutions, and Singapore & Southeast Asian spatial 
            infrastructure—synthesized with a local Qwen reasoning engine.
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
              <Cpu className="w-4 h-4" /> GEOSPATIAL INTELLIGENCE SYNTHESIS ENGINE
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
              Cron: 30 19 * * * (03:30 SGT)
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-xs sm:text-sm">
            This repository is connected to an autonomous intelligence pipeline (`scripts/generate_musing.py`).
            Every night, the automation harvests live RSS feeds across Google News Geospatial channels, 
            Geoawesomeness, Spatial Source, and GIM International. Stories are weighted and prioritized for 
            <strong>Singapore & Southeast Asia</strong> (SLA OneMap, GeoWorks, ASEAN SDI) and the <strong>ESRI ArcGIS ecosystem</strong> (ArcGIS Pro, Enterprise, GeoAI).
            A local <strong>Qwen 3.5</strong> model running in LM Studio synthesizes the raw intelligence into a rigorous analytical briefing,
            prunes older posts to maintain an active 5-entry window, and deploys directly to GitHub Pages.
          </p>
          <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-[11px] text-emerald-300 flex flex-col sm:flex-row justify-between gap-2">
            <span>LLM: Local Qwen 3.5 MLX (LM Studio) / Fallback GEOINT Synthesizer</span>
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
