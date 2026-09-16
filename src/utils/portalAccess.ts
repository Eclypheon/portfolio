import { sound } from '../components/AudioEngine.ts';

/**
 * Obfuscated portal access helper for Jellyfin automated guest access request.
 * Decodes the Tailnet endpoint in-memory upon explicit user interaction to ensure:
 * 1. Zero plaintext tailnet URL disclosure in static bundle analysis.
 * 2. Status-bar URL suppression across desktop and mobile browsers (via button event dispatch).
 */
export const openJellyfinAccessPortal = () => {
  sound.playClick(650, 0.05);

  // XOR-encoded ciphertext (Key: 0x42) of 'https://alienlab.tailbed832.ts.net:10000/'
  const enc = [
    42, 54, 54, 50, 49, 120, 109, 109, 35, 46, 43, 39, 44, 46, 35, 32, 108, 54, 
    35, 43, 46, 32, 39, 38, 122, 113, 112, 108, 54, 49, 108, 44, 39, 54, 120, 
    115, 114, 114, 114, 114, 109
  ];
  
  const target = String.fromCharCode(...enc.map((c) => c ^ 0x42));

  // Direct user-gesture navigation (status-bar agnostic)
  const portalWindow = window.open(target, '_blank', 'noopener,noreferrer');
  if (!portalWindow) {
    window.location.href = target;
  }
};
