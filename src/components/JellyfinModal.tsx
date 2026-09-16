import React, { useState, useEffect } from 'react';
import { Film, X, Loader2, ShieldCheck } from 'lucide-react';
import { sound } from './AudioEngine.ts';
import { getJellyfinPortalUrl } from '../utils/portalAccess.ts';

interface JellyfinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JellyfinModal: React.FC<JellyfinModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [portalUrl, setPortalUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setPortalUrl(getJellyfinPortalUrl());

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          sound.playClick();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      setPortalUrl('');
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={() => {
        sound.playClick();
        onClose();
      }}
    >
      <div 
        className="relative max-w-4xl w-full h-[90vh] sm:h-[85vh] max-h-[820px] bg-[#111318] border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#0c0e14] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Request Jellyfin Access
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  <ShieldCheck className="w-3 h-3 text-purple-400" />
                  alienlab guest portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Secure rootless guest provisioning on Ubuntu Server
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group cursor-pointer"
              title="Close form (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        {/* Modal Body / Iframe Container */}
        <div className="relative flex-1 w-full h-full bg-[#111318] overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111318] z-10 space-y-3">
              <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
              <p className="text-xs font-mono text-slate-400">
                Loading alienlab guest access portal...
              </p>
            </div>
          )}

          {portalUrl && (
            <iframe
              src={portalUrl}
              title="Request Jellyfin Access Form"
              className="w-full h-full border-0 bg-[#111318]"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
