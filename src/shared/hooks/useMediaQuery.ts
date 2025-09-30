import { useEffect, useState } from 'react';

export function useMediaQuery(maxWidth: number): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [maxWidth]);

  return matches;
}
