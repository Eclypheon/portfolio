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
  const [transitionStyle, setTransitionStyle] = useState<string>('none');
  const [opacity, setOpacity] = useState<number>(1);
  const isAnimatingRef = useRef<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Keep latest references to prevent stale closures
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
      // Ignore if disabled, on desktop (>= 1280px), multi-touch, or animation in flight
      if (
        disabledRef.current || 
        window.innerWidth >= 1280 || 
        e.touches.length > 1 || 
        isAnimatingRef.current
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore touches on interactive controls, inputs, iframes, code blocks, or scrollable tables
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

      setTransitionStyle('none');
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (
        e.touches.length > 1 || 
        touchState.current.lock === 'vertical' || 
        isAnimatingRef.current
      ) {
        return;
      }

      const touch = e.touches[0];
      const diffX = touch.clientX - touchState.current.startX;
      const diffY = touch.clientY - touchState.current.startY;
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);

      if (touchState.current.lock === 'undecided') {
        if (absX < 8 && absY < 8) {
          return;
        }

        // Lock horizontal when horizontal movement dominates
        if (absX > absY * 1.15) {
          touchState.current.lock = 'horizontal';
          if (e.cancelable) e.preventDefault();
        } else {
          // Lock vertical so native vertical scrolling continues smoothly
          touchState.current.lock = 'vertical';
          return;
        }
      }

      if (touchState.current.lock === 'horizontal') {
        // STRICT LOCK: Completely suppress vertical scrolling while swiping horizontally
        if (e.cancelable) e.preventDefault();

        touchState.current.diffX = diffX;

        const currentIdx = tabsRef.current.indexOf(activeTabRef.current);
        let effectiveDrag = diffX;

        // Apply resistance when pulling past the first or last tab
        if ((currentIdx === 0 && diffX > 0) || (currentIdx === tabsRef.current.length - 1 && diffX < 0)) {
          effectiveDrag = diffX * 0.25;
        }

        setTransitionStyle('none');
        setDragOffset(effectiveDrag);

        // Subtle opacity fade as user drags far
        const progress = Math.min(Math.abs(effectiveDrag) / (window.innerWidth * 0.6), 1);
        setOpacity(1 - progress * 0.25);
      }
    };

    const handleTouchEnd = () => {
      if (touchState.current.lock === 'horizontal' && !isAnimatingRef.current) {
        const diffX = touchState.current.diffX;
        const elapsed = Date.now() - touchState.current.startTime;
        const velocity = Math.abs(diffX) / (elapsed || 1);

        const currentIdx = tabsRef.current.indexOf(activeTabRef.current);

        const isFarEnough = Math.abs(diffX) > 45;
        const isFlick = Math.abs(diffX) > 20 && velocity > 0.25;

        const canSwipeLeft = diffX < 0 && currentIdx < tabsRef.current.length - 1;
        const canSwipeRight = diffX > 0 && currentIdx > 0;

        if ((isFarEnough || isFlick) && (canSwipeLeft || canSwipeRight)) {
          isAnimatingRef.current = true;
          const viewportWidth = window.innerWidth;

          if (canSwipeLeft) {
            // SWIPE LEFT (to Next Page):
            // 1. Current page glides smoothly off to the LEFT
            setTransitionStyle('transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms ease');
            setDragOffset(-viewportWidth);
            setOpacity(0.3);

            setTimeout(() => {
              // 2. Switch to next tab
              onNavigateRef.current(tabsRef.current[currentIdx + 1]);

              // 3. Immediately position incoming tab at the RIGHT (off-screen) without transition
              setTransitionStyle('none');
              setDragOffset(viewportWidth * 0.75);
              setOpacity(0.4);

              // 4. Animate incoming tab from the right into center
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  setTransitionStyle('transform 240ms cubic-bezier(0.16, 1, 0.3, 1), opacity 240ms ease-out');
                  setDragOffset(0);
                  setOpacity(1);

                  setTimeout(() => {
                    isAnimatingRef.current = false;
                    setTransitionStyle('none');
                  }, 240);
                });
              });
            }, 150);

          } else if (canSwipeRight) {
            // SWIPE RIGHT (to Previous Page):
            // 1. Current page glides smoothly off to the RIGHT
            setTransitionStyle('transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms ease');
            setDragOffset(viewportWidth);
            setOpacity(0.3);

            setTimeout(() => {
              // 2. Switch to previous tab
              onNavigateRef.current(tabsRef.current[currentIdx - 1]);

              // 3. Immediately position incoming tab at the LEFT (off-screen) without transition
              setTransitionStyle('none');
              setDragOffset(-viewportWidth * 0.75);
              setOpacity(0.4);

              // 4. Animate incoming tab from the left into center
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  setTransitionStyle('transform 240ms cubic-bezier(0.16, 1, 0.3, 1), opacity 240ms ease-out');
                  setDragOffset(0);
                  setOpacity(1);

                  setTimeout(() => {
                    isAnimatingRef.current = false;
                    setTransitionStyle('none');
                  }, 240);
                });
              });
            }, 150);
          }
        } else {
          // CANCELLED SWIPE: Smoothly spring back to center
          setTransitionStyle('transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease');
          setDragOffset(0);
          setOpacity(1);
          setTimeout(() => {
            setTransitionStyle('none');
          }, 220);
        }
      }

      touchState.current.lock = 'undecided';
      touchState.current.diffX = 0;
    };

    const handleTouchCancel = () => {
      setTransitionStyle('transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease');
      setDragOffset(0);
      setOpacity(1);
      touchState.current.lock = 'undecided';
      touchState.current.diffX = 0;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
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
    transitionStyle,
    opacity,
  };
};
