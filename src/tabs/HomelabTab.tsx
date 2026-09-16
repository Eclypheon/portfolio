import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Network, 
  Terminal, 
  Zap, 
  Radio, 
  Copy, 
  Check, 
  BatteryCharging, 
  Fan, 
  Layers, 
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Bot,
  Gauge,
  Activity,
  Film
} from 'lucide-react';
import { 
  homelabSpecs, 
  fullStackServices, 
  alienlabDashboardCards, 
  thermalAndUpsDetails, 
  quadletExplanation 
} from '../data/homelabData.ts';
import { sound } from '../components/AudioEngine.ts';

export const HomelabTab: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // alienlab Dashboard Carousel & Lightbox State
  const [dashboardViewMode, setDashboardViewMode] = useState<'fan' | 'overview' | 'services' | 'media' | 'telebot'>('fan');
  const [activeDashboardIndex, setActiveDashboardIndex] = useState<number | null>(null);
  const [stackFilter, setStackFilter] = useState<string>('All');

  const sampleQuadletUnit = `[Unit]
Description=Jellyfin Media Streaming Server (Quadlet Rootless)
After=network-online.target
Wants=network-online.target

[Container]
Image=docker.io/jellyfin/jellyfin:latest
ContainerName=jellyfin
AutoUpdate=registry
PublishPort=8096:8096
Volume=%h/media/ext4:/media:ro
Volume=%h/.config/jellyfin:/config:Z
Network=host

[Service]
Restart=always
TimeoutStartSec=300
MemoryMax=3.5G

[Install]
WantedBy=default.target`;

  const copyToClipboard = (text: string, id: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = ['All', 'Media & Streaming', 'Photo Backup', 'Network & Security', 'AI & Automation', 'Monitoring'];

  const filteredStack = stackFilter === 'All'
    ? fullStackServices
    : fullStackServices.filter(s => s.category === stackFilter);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'overview': return Gauge;
      case 'services': return Layers;
      case 'media': return Film;
      case 'telebot': return Bot;
      default: return Activity;
    }
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Server className="w-3.5 h-3.5" />
          <span>INFRASTRUCTURE // UBUNTU SERVER & QUADLET STACK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The 13&quot; MacBook Pro 2014 Homelab
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Repurposing retired hardware into an austere, high-efficiency Ubuntu Server. 
          Powered by rootless Podman containers generated natively via systemd Quadlet units, 
          in-house audio transcription scripts with <code className="text-cyan-300">faster-whisper</code> tiny, 
          and federated local LLM inference on a main Apple Silicon M4 MacBook Air (24GB).
        </p>
      </div>

      {/* Hardware Spec Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
            <Server className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Server Node</div>
          <div className="text-sm font-semibold text-white">{homelabSpecs.hardware}</div>
          <p className="text-[11px] text-slate-400">{homelabSpecs.os}</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
            <Bot className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Companion AI Silicon</div>
          <div className="text-sm font-semibold text-white">MacBook Air 2025 (M4)</div>
          <p className="text-[11px] text-slate-400">24GB Unified RAM • LM Studio (Qwen3.5 9B)</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
            <HardDrive className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Storage Array</div>
          <div className="text-sm font-semibold text-white">3.6 TiB Used / 1.6 TiB Free</div>
          <p className="text-[11px] text-slate-400">+ 4.5 TiB extra media expansion volume</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 w-fit">
            <BatteryCharging className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Thermals & Hardware UPS</div>
          <div className="text-sm font-semibold text-white">55°C • 2,499 RPM Quiet</div>
          <p className="text-[11px] text-slate-400">80% internal battery acts as brownout UPS</p>
        </div>
      </div>

      {/* DEDICATED THERMALS & HARDWARE UPS DEEP DIVE */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono">
            <Fan className="w-3.5 h-3.5" />
            <span>THERMAL ENGINEERING & POWER RESILIENCE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            SMC Fan Profiling & Lithium-Ion Longevity Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fan & SMC Card */}
          <div className="p-6 rounded-2xl bg-black/50 border border-pink-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-pink-500/10 text-pink-300 border border-pink-500/30 font-bold flex items-center gap-1.5">
                  <Fan className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>{thermalAndUpsDetails.fanAndSmc.badge}</span>
                </span>
                <span className="text-xs font-mono text-pink-400 font-semibold">
                  {thermalAndUpsDetails.fanAndSmc.metrics}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {thermalAndUpsDetails.fanAndSmc.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {thermalAndUpsDetails.fanAndSmc.description}
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Right-Side Blower</span>
              <span className="text-emerald-400">● Clamshell Safe</span>
            </div>
          </div>

          {/* Battery UPS & Longevity Card */}
          <div className="p-6 rounded-2xl bg-black/50 border border-emerald-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{thermalAndUpsDetails.batteryUps.badge}</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  80% Charge Cap
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {thermalAndUpsDetails.batteryUps.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {thermalAndUpsDetails.batteryUps.description}
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Cell Swelling Prevention</span>
              <span className="text-emerald-400">● Zero-Cost Hardware UPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* SPLAYED CAROUSEL: alienlab Live Dashboard Views */}
      <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 space-y-6">
        {/* Header and Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DASHBOARD CAROUSEL // MULTI-PAGE SPLAYED VIEW</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              alienlab Operating Dashboard (Ubuntu Server)
            </h3>
          </div>

          {/* Mode switcher pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => {
                sound.playClick();
                setDashboardViewMode('fan');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                dashboardViewMode === 'fan'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              Fanned Cards Deck
            </button>
            {alienlabDashboardCards.map((card) => (
              <button
                key={card.id}
                onClick={() => {
                  sound.playClick();
                  setDashboardViewMode(card.id as any);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  dashboardViewMode === card.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                {card.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Fanned / Splayed Cards Presentation */}
        {dashboardViewMode === 'fan' ? (
          <div className="py-6 sm:py-10 px-2 flex justify-center items-center overflow-hidden">
            <div className="relative w-full max-w-4xl h-[440px] sm:h-[500px] flex justify-center items-center">
              {alienlabDashboardCards.map((item, index) => {
                const CardIcon = getCardIcon(item.id);
                // 4 cards fanned out
                const isFirst = index === 0;
                const isSecond = index === 1;
                const isThird = index === 2;
                const isFourth = index === 3;

                let transformClass = '';
                if (isFirst) {
                  // Overview: Front-most card commanding center foreground
                  transformClass = 'rotate-0 z-30 scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-cyan-500/40 hover:-translate-y-4 hover:scale-110 hover:z-40';
                } else if (isSecond) {
                  // Services: Fanned to the left
                  transformClass = '-rotate-6 -translate-x-24 sm:-translate-x-48 z-20 hover:rotate-0 hover:-translate-y-4 hover:z-40 hover:scale-105';
                } else if (isThird) {
                  // Media: Fanned to the right
                  transformClass = 'rotate-3 translate-x-16 sm:translate-x-32 z-20 hover:rotate-0 hover:-translate-y-4 hover:z-40 hover:scale-105';
                } else {
                  // Telebot: Fanned far right
                  transformClass = 'rotate-8 translate-x-32 sm:translate-x-64 z-10 hover:rotate-0 hover:-translate-y-4 hover:z-40 hover:scale-105';
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      sound.playChirp();
                      setActiveDashboardIndex(index);
                    }}
                    className={`absolute top-4 w-[220px] sm:w-[260px] rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl transition-all duration-300 cursor-pointer group select-none ${transformClass}`}
                  >
                    {/* Card top banner */}
                    <div className="p-2.5 bg-slate-900/95 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 flex items-center gap-1">
                        <CardIcon className="w-3 h-3" />
                        <span>{item.badge}</span>
                      </span>
                      <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                    </div>

                    {/* Image clipping */}
                    <div className="h-[360px] sm:h-[400px] overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom tag */}
                    <div className="p-2 bg-black/90 text-center text-[11px] font-mono text-slate-300 border-t border-white/5 truncate">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Focused Single Card View */
          <div className="space-y-4">
            {(() => {
              const current = alienlabDashboardCards.find(s => s.id === dashboardViewMode);
              if (!current) return null;
              const CardIcon = getCardIcon(current.id);
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <CardIcon className="w-4 h-4 text-cyan-400" />
                        <span>{current.title}</span>
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {current.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        sound.playChirp();
                        const idx = alienlabDashboardCards.findIndex(s => s.id === current.id);
                        setActiveDashboardIndex(idx);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Enlarge View</span>
                    </button>
                  </div>

                  <div className="max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full max-h-[560px] object-cover object-top"
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        )}
        <p className="text-center text-xs font-mono text-slate-500">
          Click any card to inspect full-resolution alienlab telemetry
        </p>
      </div>

      {/* FULL STACK RUNNING CATALOG */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <span>Full Operational Stack & Port Map</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Live service matrix running across the 13&quot; MacBook Pro Ubuntu Server
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick(600, 0.03);
                  setStackFilter(cat);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  stackFilter === cat
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stack Table */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Service</th>
                  <th className="py-3.5 px-4 font-semibold">Purpose</th>
                  <th className="py-3.5 px-4 font-semibold">Port / Access</th>
                  <th className="py-3.5 px-4 font-semibold">Category</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Current Known State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {filteredStack.map((item, idx) => {
                  const isRunning = item.state === 'Running';
                  const isInstalled = item.state === 'Installed';

                  return (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        <span>{item.name}</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 max-w-xs sm:max-w-md">
                        {item.purpose}
                      </td>
                      <td className="py-3.5 px-4 text-cyan-300">
                        <code>{item.port}</code>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] ${
                          isRunning
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : isInstalled
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          <span>{isRunning || isInstalled ? '🟢' : '⚫'}</span>
                          <span>{item.state}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Decoupling Architecture: Server Scripts vs. M4 MacBook Air */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <span>Decoupled Audio & AI Pipeline Topology</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Separation of audio transcription workloads and heavy neural model inference across physical nodes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Node 1: Ubuntu Server */}
          <div className="p-6 rounded-2xl bg-black/50 border border-cyan-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Server className="w-4 h-4" /> NODE 1: UBUNTU SERVER (13&quot; MACBOOK PRO 2014)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Continuous 24/7
              </span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">›</span>
                <span><strong>Telegram Transcriber:</strong> Telegram bot daemon ingests inbound voice memos instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">›</span>
                <span><strong>faster-whisper (tiny):</strong> Local lightweight STT scripts executing on Haswell CPU with low memory pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">›</span>
                <span><strong>No n8n overhead:</strong> Clean native Python scripts running directly under systemd, eliminating container orchestration latency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">›</span>
                <span><strong>State Router:</strong> Decides whether to dispatch context to LM Studio based on <code className="text-emerald-300">/mediate</code> or <code className="text-emerald-300">/opinion</code> triggers</span>
              </li>
            </ul>
          </div>

          {/* Node 2: MacBook Air M4 */}
          <div className="p-6 rounded-2xl bg-black/50 border border-indigo-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono text-indigo-400 font-bold flex items-center gap-1.5">
                <Bot className="w-4 h-4" /> NODE 2: COMPANION SILICON (MACBOOK AIR 2025 M4)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                24GB Unified RAM
              </span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">›</span>
                <span><strong>LM Studio Server:</strong> Hosts OpenAI-compatible endpoint bound locally on high-bandwidth unified memory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">›</span>
                <span><strong>Custom Qwen3.5 9B:</strong> Fine-tuned empathy, mediation, and psychiatric advisory personas running with zero token cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">›</span>
                <span><strong>Zero Cloud Leakage:</strong> Audio never touches external APIs; prompts evaluate 100% on personal hardware</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">›</span>
                <span><strong>Group Mediation Engine:</strong> Analyzes conflict threads and multi-speaker dialogues with comprehensive conversational history</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Quadlet + Podman? */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>The Technical Case: Quadlet + Podman vs. Docker</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadletExplanation.whyQuadlet.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-emerald-400 text-sm font-mono font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quadlet Manifest Code View */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>Example Declarative Quadlet Specification: Jellyfin (.container)</span>
          </div>
          <button
            onClick={() => copyToClipboard(sampleQuadletUnit, 'quadlet')}
            className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
          >
            {copiedCode === 'quadlet' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Unit File</span>
              </>
            )}
          </button>
        </div>

        <div className="p-4 rounded-xl bg-black/60 border border-white/10 overflow-x-auto">
          <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
            {sampleQuadletUnit}
          </pre>
        </div>
      </div>

      {/* Lightbox Modal for alienlab Screenshots */}
      {activeDashboardIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveDashboardIndex(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-slate-950 border border-white/20 rounded-3xl p-5 overflow-hidden space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  {alienlabDashboardCards[activeDashboardIndex].badge}
                </span>
                <span className="text-xs text-slate-400">
                  — {alienlabDashboardCards[activeDashboardIndex].title}
                </span>
              </div>
              <button
                onClick={() => setActiveDashboardIndex(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-black flex justify-center">
              <img
                src={alienlabDashboardCards[activeDashboardIndex].image}
                alt={alienlabDashboardCards[activeDashboardIndex].title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveDashboardIndex((activeDashboardIndex + alienlabDashboardCards.length - 1) % alienlabDashboardCards.length);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                {activeDashboardIndex + 1} of {alienlabDashboardCards.length}
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveDashboardIndex((activeDashboardIndex + 1) % alienlabDashboardCards.length);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
