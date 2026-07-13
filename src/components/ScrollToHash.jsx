import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to hash targets after client-side route changes.
 * Retries briefly so the destination page can mount first.
 */
const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return undefined;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''));
    let cancelled = false;
    let attempts = 0;
    let timer;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Re-run once after layout settles (fonts/images/mocks).
        timer = window.setTimeout(() => {
          if (!cancelled) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
        return;
      }
      attempts += 1;
      if (attempts < 60) {
        timer = window.setTimeout(tryScroll, 40);
      }
    };

    timer = window.setTimeout(tryScroll, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToHash;
