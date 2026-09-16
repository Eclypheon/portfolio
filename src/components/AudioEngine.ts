// Native Web Audio API Synthesizer & BGM Manager for cybernetic tactile feedback & synthwave audio
class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private _enabled: boolean = false;
  private bgmAudio: HTMLAudioElement | null = null;
  private isGameActive: boolean = false;
  private isPageVisible: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        this.isPageVisible = !document.hidden;
        if (this.isPageVisible) {
          if (this._enabled && !this.isGameActive) {
            this.playBgm();
          }
        } else {
          this.pauseBgm();
        }
      });
    }
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(val: boolean) {
    this._enabled = val;
    if (val) {
      if (!this.isGameActive && this.isPageVisible) {
        this.playBgm();
      }
    } else {
      this.pauseBgm();
    }
  }

  public setGameActive(active: boolean) {
    this.isGameActive = active;
    if (active) {
      this.pauseBgm();
    } else {
      if (this._enabled && this.isPageVisible) {
        this.playBgm();
      }
    }
  }

  private initBgm(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;
    if (!this.bgmAudio) {
      try {
        const basePath = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || './';
        const cleanBase = basePath.endsWith('/') ? basePath : basePath + '/';
        const audio = new Audio(`${cleanBase}audio/synthwave.mp3`);
        audio.loop = true;
        audio.volume = 0.07;
        audio.preload = 'auto';
        this.bgmAudio = audio;
      } catch {
        // Fallback or ignore
      }
    } else {
      this.bgmAudio.volume = 0.07;
    }
    return this.bgmAudio;
  }

  public playBgm() {
    const audio = this.initBgm();
    if (!audio) return;
    if (!this._enabled || this.isGameActive || !this.isPageVisible) return;

    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback blocked or user hasn't interacted with DOM yet
        });
      }
    } catch {
      // Ignore
    }
  }

  public pauseBgm() {
    if (this.bgmAudio) {
      try {
        this.bgmAudio.pause();
      } catch {
        // Ignore
      }
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playClick(freq = 600, duration = 0.04) {
    if (!this._enabled) return;
    if (this.bgmAudio && this.bgmAudio.paused && !this.isGameActive && this.isPageVisible) {
      this.playBgm();
    }
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio playback fails gracefully
    }
  }

  public playSwitch() {
    if (!this._enabled) return;
    if (this.bgmAudio && this.bgmAudio.paused && !this.isGameActive && this.isPageVisible) {
      this.playBgm();
    }
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Ignore
    }
  }

  public playChirp() {
    if (!this._enabled) return;
    if (this.bgmAudio && this.bgmAudio.paused && !this.isGameActive && this.isPageVisible) {
      this.playBgm();
    }
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundSynthesizer();
