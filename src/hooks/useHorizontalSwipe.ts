import { useEffect, useRef, useState } from 'react';
import { TabKey } from '../components/Navigation.tsx';

interface UseHorizontalSwipeOptions {
  activeTab: TabKey;
  tabs: TabKey[];
  onNavigate: (tab: TabKey) => void;
  disabled?: boolean;
}

export const useHorizontalSwipe = ({
  activeTab,
  tabs,
  onNavigate,
  disabled = false,
}: UseHorizontalSwipeOptions) => {
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Keep latest references to avoid stale closures in event listeners
  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  const tabsRef = useRef(tabs);
  tabsRef.current = tabs;

  const onNavigateRef = useRef(onNavigate);
  onNavigateRef.current = onNavigate;

  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;

  // Gesture tracking state
  const touchState = useRef<{
    startX: number;
    startY: number;
    startTime: number;
    lock: 'undecided' | 'horizontal' | 'vertical';
    diffX: number;
  }>({
    startX: 0,
    startY: 0,
    startTime: 0,
    lock: 'undecided',
    diffX: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Only active on mobile/tablet (below 1280px breakpoint where desktop tabs collapse)
      if (disabledRef.current || window.innerWidth >= 1280 || e.touches.length > 1) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore touches on interactive controls, inputs, iframes, code blocks, or horizontally scrollable containers
      if (
        target.closest(
          'header, nav, button, a, input, textarea, select, iframe, pre, code, table, [data-no-swipe], .overflow-x-auto, [role="dialog"]'
        )
      ) {
        return;
      }

      const touch = e.touches[0];
      touchState.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: Date.now(),
        lock: 'undecided',
        diffX: 0,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      // If multi-touch or gesture already determined as vertical scroll, let browser scroll naturally
      if (e.touches.length > 1 || touchState.current.lock === 'vertical') {
        return;
      }

      const touch = e.touches[0];
      const diffX = touch.clientX - touchState.current.startX;
      const diffY = touch.clientY - touchState.current.startY;
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);

      if (touchState.current.lock === 'undecided') {
        // Need minimal displacement (8px) to accurately classify intention
        if (absX < 8 && absY < 8) {
          return;
        }

        // Determine if movement is clearly horizontal
        if (absX > absY * 1.15) {
          touchState.current.lock = 'horizontal';
          setIsSwiping(true);
          // CRITICAL: Immediately lock browser vertical scrolling to eliminate diagonal wobble
          e.preventDefault();
        } else {
          // Primarily vertical gesture: lock to vertical scroll so page scrolls smoothly
          touchState.current.lock = 'vertical';
          return;
        }
      }

      if (touchState.current.lock === 'horizontal') {
        // STRICT LOCK: Continuously prevent vertical browser scrolling during horizontal swipe
        e.preventDefault();

        touchState.current.diffX = diffX;

        const currentIdx = tabsRef.current.indexOf(activeTabRef.current);
        let effectiveDrag = diffX;

        // Apply rubber-band resistance when pulling past the first or last tab
        if ((currentIdx === 0 && diffX > 0) || (currentIdx === tabsRef.current.length - 1 && diffX < 0)) {
          effectiveDrag = diffX * 0.25;
        }

        setDragOffset(effectiveDrag);
      }
    };

    const handleTouchEnd = () => {
      if (touchState.current.lock === 'horizontal') {
        const diffX = touchState.current.diffX;
        const elapsed = Date.now() - touchState.current.startTime;
        const velocity = Math.abs(diffX) / (elapsed || 1);

        const currentIdx = tabsRef.current.indexOf(activeTabRef.current);

        // Commit threshold: dragged > 50px OR quick velocity flick (> 25px with velocity > 0.3px/ms)
        const isFarEnough = Math.abs(diffX) > 50;
        const isFlick = Math.abs(diffX) > 25 && velocity > 0.3;

        if (isFarEnough || isFlick) {
          if (diffX < 0 && currentIdx < tabsRef.current.length - 1) {
            // Swiped left -> navigate to next tab
            onNavigateRef.current(tabsRef.current[currentIdx + 1]);
          } else if (diffX > 0 && currentIdx > 0) {
            // Swiped right -> navigate to previous tab
            onNavigateRef.current(tabsRef.current[currentIdx - 1]);
          }
        }
      }

      // Reset gesture tracking
      touchState.current.lock = 'undecided';
      touchState.current.diffX = 0;
      setIsSwiping(false);
      setDragOffset(0);
    };

    const handleTouchCancel = () => {
      touchState.current.lock = 'undecided';
      touchState.current.diffX = 0;
      setIsSwiping(false);
      setDragOffset(0);
    };

    // Attach touchstart to the main container
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    // Attach touchmove with { passive: false } so e.preventDefault() can lock vertical scrolling
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchCancel);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, []);

  return {
    containerRef,
    dragOffset,
    isSwiping,
  };
};
