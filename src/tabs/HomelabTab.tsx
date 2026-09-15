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
  Lock,
  Boxes
} from 'lucide-react';
import { homelabSpecs, homelabServices, quadletExplanation } from '../data/homelabData.ts';
import { sound } from '../components/AudioEngine.ts';

export const HomelabTab: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sampleQuadletUnit = `[Unit]
Description=n8n Automation Node (Quadlet Rootless)
After=network-online.target
Wants=network-online.target

[Container]
Image=docker.io/n8nio/n8n:latest
ContainerName=n8n-automation
AutoUpdate=registry
PublishPort=5678:5678
Environment=GENERIC_TIMEZONE=Asia/Singapore
Environment=N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
Volume=%h/.n8n:/home/node/.n8n:Z
Network=quadlet-internal.network

[Service]
Restart=always
TimeoutStartSec=300
MemoryMax=1.5G

[Install]
WantedBy=default.target`;

  const copyToClipboard = (text: string, id: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Server className="w-3.5 h-3.5" />
          <span>INFRASTRUCTURE // EDGE SILICON & DAEMONS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The Repurposed MacBook Pro 2014 & Quadlet Stack
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Rejecting the bloat of standard cloud subscriptions and heavy virtualization. 
          A retired 15-inch Retina MacBook Pro re-engineered into an austere, high-efficiency home server 
          powered by rootless Podman containers, native systemd Quadlet unit generation, and private Tailscale mesh networking.
        </p>
      </div>

      {/* Hardware Spec Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Processor & Silicon</div>
          <div className="text-sm font-semibold text-white">{homelabSpecs.processor}</div>
          <p className="text-[11px] text-slate-400">AVX2 enabled for quantized LLM inference</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
            <HardDrive className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Memory & Storage</div>
          <div className="text-sm font-semibold text-white">{homelabSpecs.memory}</div>
          <p className="text-[11px] text-slate-400">cgroups v2 strictly limits container RAM bloat</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
            <Boxes className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Orchestrator</div>
          <div className="text-sm font-semibold text-white">Podman + Quadlet</div>
          <p className="text-[11px] text-slate-400">Native systemd generators replacing dockerd</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 w-fit">
            <Network className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-slate-400">Networking Topology</div>
          <div className="text-sm font-semibold text-white">Tailscale Mesh VPN</div>
          <p className="text-[11px] text-slate-400">Zero exposed router ports; end-to-end WireGuard</p>
        </div>
      </div>

      {/* Visual Architecture Topology Diagram */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            <span>Server Topology & Data Ingress</span>
          </h2>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400">
            Mesh Active
          </span>
        </div>

        {/* Conceptual Diagram */}
        <div className="p-6 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-[650px]">
            {/* Layer 1: Hardware & OS */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> [LAYER 0: HARDWARE]
              </div>
              <p className="text-slate-400 text-[11px]">
                MacBook Pro 15&quot; Retina (2014)<br />
                Haswell Core i7 • 16GB RAM<br />
                Custom SMC Fan Curve Mod<br />
                Clamshell Operation Mode
              </p>
            </div>

            {/* Layer 2: Podman & Systemd */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Boxes className="w-4 h-4" /> [LAYER 1: SYSTEMD QUADLET]
              </div>
              <p className="text-slate-400 text-[11px]">
                Rootless User Namespaces<br />
                ~/.config/containers/systemd/<br />
                cgroups v2 Slices & Quotas<br />
                Automatic Journald Logging
              </p>
            </div>

            {/* Layer 3: Tailscale Mesh */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-indigo-400 font-bold flex items-center gap-1.5">
                <Network className="w-4 h-4" /> [LAYER 2: TAILSCALE MESH]
              </div>
              <p className="text-slate-400 text-[11px]">
                WireGuard P2P Encrypted Bus<br />
                Peer Access Control Lists (ACL)<br />
                Friends Media Gateway<br />
                No Open Inbound NAT Ports
              </p>
            </div>
          </div>

          {/* Running Services Matrix */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 min-w-[650px]">
            <div className="text-slate-200 font-bold">ACTIVE PODMAN & STANDALONE DAEMON PROCESSES:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
              <div className="p-2.5 rounded bg-black/40 border border-emerald-500/20">
                <span className="text-emerald-300 font-semibold block">LM Studio / Qwen</span>
                <span className="text-slate-500">Port :1234 • Local AI</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-cyan-500/20">
                <span className="text-cyan-300 font-semibold block">n8n Automation</span>
                <span className="text-slate-500">Port :5678 • Workflows</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-indigo-500/20">
                <span className="text-indigo-300 font-semibold block">Whisper & Kokoro</span>
                <span className="text-slate-500">audiowatch.py • Audio STT/TTS</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-pink-500/20">
                <span className="text-pink-300 font-semibold block">Stremio & Debrid</span>
                <span className="text-slate-500">Tailscale Node • Streaming</span>
              </div>
            </div>
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
            <span>Example Declarative Quadlet Specification (.container)</span>
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

      {/* Active Services Catalog */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Radio className="w-5 h-5 text-indigo-400" />
          <span>Deployed Services & Pipelines</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homelabServices.map((svc, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    {svc.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {svc.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">
                  {svc.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1.5">
                {svc.details.map((d, di) => (
                  <div key={di} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold shrink-0">›</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
