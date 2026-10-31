'use client';

import { useEffect } from 'react';

/**
 * Ensures that on any page refresh (F5 / reload), the browser
 * scrolls to the very top (x: 0, y: 0) rather than restoring
 * the previous scroll position down the page.
 */
export function ScrollToTopOnRefresh() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the top immediately on mount / reload
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}

