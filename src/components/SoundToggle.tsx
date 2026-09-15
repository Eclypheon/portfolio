import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from './AudioEngine.ts';

export const SoundToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleSound = () => {
    const nextState = !enabled;
    sound.enabled = nextState;
    setEnabled(nextState);
    if (nextState) {
      sound.playChirp();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={enabled ? 'Mute Interface Audio' : 'Enable Tactile Audio Feedback'}
      className={`p-2 rounded-lg border transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${
        enabled
          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
      }`}
    >
      {enabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">SFX ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">SFX OFF</span>
        </>
      )}
    </button>
  );
};
