import { sound } from '../components/AudioEngine.ts';

/**
 * Obfuscated portal access helper for Jellyfin automated guest access request.
 * Decodes the Tailnet endpoint in-memory upon explicit user interaction to ensure:
 * 1. Zero plaintext tailnet URL disclosure in static bundle analysis.
 * 2. Embedded in-app iframe rendering to prevent browser address bar exposure.
 * 3. Status-bar URL suppression across desktop and mobile browsers.
 */
const CIPHER_KEY = 0x42;
const ENCRYPTED_ENDPOINT = [
  42, 54, 54, 50, 49, 120, 109, 109, 35, 46, 43, 39, 44, 46, 35, 32, 108, 54, 
  35, 43, 46, 32, 39, 38, 122, 113, 112, 108, 54, 49, 108, 44, 39, 54, 120, 
  115, 114, 114, 114, 114, 109
];

/**
 * Resolves the decrypted form endpoint dynamically in memory.
 */
export const getJellyfinPortalUrl = (): string => {
  return String.fromCharCode(...ENCRYPTED_ENDPOINT.map((c) => c ^ CIPHER_KEY));
};

/**
 * Triggers opening of the in-app Jellyfin access iframe modal.
 */
export const openJellyfinAccessPortal = () => {
  sound.playClick(650, 0.05);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-jellyfin-modal'));
  }
};
