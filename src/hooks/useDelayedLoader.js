import { useState, useEffect } from 'react';

const DELAY_MS = 300;

export function useDelayedLoader(isLoading) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isLoading) {
      // Only show loader after delay
      timeoutId = setTimeout(() => {
        setShowLoader(true);
      }, DELAY_MS);
    } else {
      // Hide immediately when done
      setShowLoader(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return showLoader;
}
