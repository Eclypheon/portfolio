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
  ExternalLink,
  Bot
} from 'lucide-react';
import { homelabSpecs, fullStackServices, alienlabDashboard, quadletExplanation } from '../data/homelabData.ts';
import { sound } from '../components/AudioEngine.ts';

export const HomelabTab: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeDashboardTab, setActiveDashboardTab] = useState<'overview' | 'media'>('overview');
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
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

      {/* SNEAK PEEK: alienlab Live Dashboard Screenshots */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SNEAK PEEK // LIVE DASHBOARD TELEMETRY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              alienlab Dashboard (Ubuntu Server)
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                setActiveDashboardTab('overview');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeDashboardTab === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              Overview Telemetry
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveDashboardTab('media');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeDashboardTab === 'media'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              Media & Library
            </button>
          </div>
        </div>

        {/* Live Metrics Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {alienlabDashboard.liveHighlights.map((stat, i) => (
            <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-[11px] font-mono text-slate-400">{stat.label}</div>
              <div className="text-base font-bold text-white font-mono">{stat.value}</div>
              <div className="text-[10px] font-mono text-cyan-400/80 truncate">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Screenshot Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group">
          <img
            src={activeDashboardTab === 'overview' ? './alienlab-overview.png' : './alienlab-media.png'}
            alt="alienlab Dashboard Sneak Peek"
            className="w-full max-h-[520px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button
              onClick={() => {
                sound.playChirp();
                setSelectedScreenshot(activeDashboardTab === 'overview' ? './alienlab-overview.png' : './alienlab-media.png');
              }}
              className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-xs font-mono text-slate-200 hover:text-white border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen</span>
            </button>
          </div>
        </div>
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
                  const isStopped = item.state === 'Stopped intentionally';

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

      {/* Lightbox Screenshot Modal */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 border border-white/20 rounded-3xl p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-slate-300">
                alienlab Telemetry Inspector
              </span>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="py-4 flex items-center justify-center">
              <img
                src={selectedScreenshot}
                alt="Enlarged screenshot"
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
