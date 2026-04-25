import React, { Suspense, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import { easing, duration } from '../lib/animations';

// Simple delay promise helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wrapper for lazy imports with minimum visible time
export function lazyWithDelay(importFn, minDelay = 400) {
  return React.lazy(() =>
    Promise.all([importFn(), delay(minDelay)]).then(([moduleExports]) => moduleExports)
  );
}

// Smart fallback that only shows after delay
function SmartFallback() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <Loader />;
}

// Cinematic page transition variants
const pageTransition = {
  initial: { 
    opacity: 0, 
    scale: 0.98,
    y: 8
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.02,
    y: -8,
    transition: {
      duration: duration.normal,
      ease: easing.smooth
    }
  }
};

export function SmartSuspense({ children }) {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);

  // Update key on route change to trigger new suspense
  useEffect(() => {
    setKey(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<SmartFallback />}>
          {children}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
