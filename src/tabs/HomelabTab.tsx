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
  Film,
  ExternalLink
} from 'lucide-react';
import { 
  homelabSpecs, 
  fullStackServices, 
  alienlabDashboardCards, 
  thermalAndUpsDetails, 
  quadletExplanation 
} from '../data/homelabData.ts';
import { sound } from '../components/AudioEngine.ts';
import { openJellyfinAccessPortal } from '../utils/portalAccess.ts';

export const HomelabTab: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // alienlab Dashboard Gallery & Lightbox State
  const [activeDashboardIndex, setActiveDashboardIndex] = useState<number>(0);
  const [modalDashboardIndex, setModalDashboardIndex] = useState<number | null>(null);
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

      {/* GALLERY SHOWCASE: alienlab Operating Dashboard */}
      <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 space-y-6">
        {/* Section Header */}
        <div className="space-y-1 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>alienlab // UBUNTU SERVER OPERATING DASHBOARD</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            alienlab Operating Dashboard (Ubuntu Server)
          </h3>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-3">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                {React.createElement(getCardIcon(alienlabDashboardCards[activeDashboardIndex].id), { className: "w-4 h-4 text-cyan-400" })}
                <span>{alienlabDashboardCards[activeDashboardIndex].title}</span>
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {alienlabDashboardCards[activeDashboardIndex].subtitle}
              </p>
            </div>

            {/* Screenshot Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveDashboardIndex((activeDashboardIndex + alienlabDashboardCards.length - 1) % alienlabDashboardCards.length);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="Previous Screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-1">
                {activeDashboardIndex + 1} / {alienlabDashboardCards.length}
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveDashboardIndex((activeDashboardIndex + 1) % alienlabDashboardCards.length);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="Next Screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  sound.playChirp();
                  setModalDashboardIndex(activeDashboardIndex);
                }}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5 transition-all ml-1"
                title="Enlarge Current Screenshot"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>
          </div>

          {/* Active Screenshot Display (Aspect-Ratio Fitted Container) */}
          <div className="flex justify-center">
            <div
              onClick={() => {
                sound.playClick();
                setModalDashboardIndex(activeDashboardIndex);
              }}
              className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 bg-black cursor-pointer group shadow-2xl"
            >
              <img
                src={alienlabDashboardCards[activeDashboardIndex].image}
                alt={alienlabDashboardCards[activeDashboardIndex].title}
                className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono text-cyan-300 bg-black/70 px-2.5 py-1 rounded border border-cyan-500/30">
                    {alienlabDashboardCards[activeDashboardIndex].title}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 bg-black/70 px-2 py-1 rounded border border-white/10">
                    <Maximize2 className="w-3 h-3 text-cyan-400" />
                    Click to inspect full resolution
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Row (4 cards, aspect-ratio fitted) */}
          <div className="w-full max-w-[460px] sm:max-w-[520px] mx-auto grid grid-cols-4 gap-2 pt-1">
            {alienlabDashboardCards.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setActiveDashboardIndex(idx);
                }}
                className={`rounded-xl overflow-hidden border transition-all text-left group relative aspect-[4/5] ${
                  activeDashboardIndex === idx
                    ? 'border-cyan-500 ring-2 ring-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold text-white bg-black/80 px-1 py-0.5 rounded truncate max-w-[92%]">
                  {idx + 1}. {item.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

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
                      <td className="py-3.5 px-4 font-bold text-white">
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

      {/* PRIVATE STREAMING NODE & JELLYFIN ACCESS REQUEST */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-b from-purple-950/10 to-transparent space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono">
              <Film className="w-3.5 h-3.5" />
              <span>PRIVATE STREAMING NODE // JELLYFIN 4K HUB</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Jellyfin Streaming Server & Guest Access
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Decentralized, hardware-accelerated media streaming running rootless under systemd Quadlet. 
              Indexes a personal library of 193 movies, 20 shows, and 47 anime series with Shoko metadata synthesis.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={openJellyfinAccessPortal}
              className="px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)] group cursor-pointer"
              title="Request to Join Jellyfin Server"
            >
              <Film className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Request to Join Jellyfin Server</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-300/70 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono relative z-10">
          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
            <div className="text-slate-500 text-[10px] tracking-wider uppercase font-semibold">Indexed Movies</div>
            <div className="text-white font-bold text-sm">193 Titles</div>
            <p className="text-[10px] text-slate-400">1080p / 4K Direct Stream</p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
            <div className="text-slate-500 text-[10px] tracking-wider uppercase font-semibold">Series & Anime</div>
            <div className="text-white font-bold text-sm">67 Series (47 Anime)</div>
            <p className="text-[10px] text-purple-400">Shoko Metadata Plugin</p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
            <div className="text-slate-500 text-[10px] tracking-wider uppercase font-semibold">Container Engine</div>
            <div className="text-cyan-300 font-bold text-sm">Quadlet Rootless :8096</div>
            <p className="text-[10px] text-slate-400">cgroup v2 Resource Capped</p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
            <div className="text-slate-500 text-[10px] tracking-wider uppercase font-semibold">Network Security</div>
            <div className="text-emerald-400 font-bold text-sm">Tailscale Encrypted</div>
            <p className="text-[10px] text-slate-400">No Open WAN Ports</p>
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

      {/* Universal Screenshot Modal for alienlab Dashboard */}
      {modalDashboardIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setModalDashboardIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 border border-white/20 rounded-3xl p-6 overflow-hidden space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  {alienlabDashboardCards[modalDashboardIndex].badge}
                </span>
                <span className="text-xs text-slate-400">
                  — {alienlabDashboardCards[modalDashboardIndex].title}
                </span>
              </div>
              <button
                onClick={() => setModalDashboardIndex(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all ml-4 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[72vh] overflow-y-auto rounded-xl border border-white/10 bg-black flex justify-center">
              <img
                src={alienlabDashboardCards[modalDashboardIndex].image}
                alt={alienlabDashboardCards[modalDashboardIndex].title}
                className="max-h-[72vh] w-auto h-auto object-contain rounded-lg mx-auto"
              />
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setModalDashboardIndex((modalDashboardIndex + alienlabDashboardCards.length - 1) % alienlabDashboardCards.length);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                {modalDashboardIndex + 1} of {alienlabDashboardCards.length}
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setModalDashboardIndex((modalDashboardIndex + 1) % alienlabDashboardCards.length);
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
