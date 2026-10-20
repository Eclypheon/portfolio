import { sound } from '../components/AudioEngine.ts';

/**
 * Triggers opening of the in-app Jellyfin access notice modal.
 */
export const openJellyfinAccessPortal = () => {
  sound.playClick(650, 0.05);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-jellyfin-modal'));
  }
};
