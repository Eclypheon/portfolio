import React, { useState, useEffect } from 'react';
import { Film, X, ShieldAlert, Mail, Copy, Check, Lock, Radio } from 'lucide-react';
import { sound } from './AudioEngine.ts';

interface JellyfinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JellyfinModal: React.FC<JellyfinModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          sound.playClick();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const email = 'kester.neo@gmail.com';
  const mailtoSubject = encodeURIComponent('Jellyfin Access Request (Tailscale Mesh)');
  const mailtoBody = encodeURIComponent(
    'Hi Neo,\n\nI would like to request access to your Jellyfin media server.\n\nMy Name/Handle: \nMy Tailscale Email: \nReason / Note: \n'
  );
  const mailtoUrl = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopyEmail = async () => {
    sound.playClick();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={() => {
        sound.playClick();
        onClose();
      }}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#0d0f17] border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scaleUp text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#080a10] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Jellyfin Server Access
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                  Public Node Shut Down
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                alienlab homelab // access policy update
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group cursor-pointer"
            title="Close modal (Esc)"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5 text-xs font-mono">
          {/* Status Alert Banner */}
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-rose-200">
                Public Endpoints Decommissioned
              </h4>
              <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                The public WAN gateway and automated web request manager for Jellyfin have been shut down due to lack of active external usage. All public Tailscale Funnel ingress ports have been closed.
              </p>
            </div>
          </div>

          {/* Access Policy Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4 text-purple-400" />
              <span>Tailscale-Exclusive Access Policy</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Jellyfin media streaming is now strictly private. Access will only be granted through a personal request and provisioned directly via <strong>Tailscale</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-[10px] text-purple-400 font-bold uppercase">1. Personal Request</div>
                <p className="text-[11px] text-slate-400">Reach out to me directly via email or personal channels.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">2. Tailscale Share</div>
                <p className="text-[11px] text-slate-400">Provide your Tailscale account for private node mesh sharing.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase">3. Direct Stream</div>
                <p className="text-[11px] text-slate-400">Stream 4K/1080p directly over WireGuard-encrypted tailnet.</p>
              </div>
            </div>
          </div>

          {/* Contact Neo Directly */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Radio className="w-3.5 h-3.5 text-slate-500" />
              <span>Contact me personally to request provisioning:</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={mailtoUrl}
                className="flex-1 px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)] group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
                <span>Send Access Request Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-[#080a10] flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-mono">
            alienlab.tailbed832.ts.net // port 8096 (tailnet only)
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
