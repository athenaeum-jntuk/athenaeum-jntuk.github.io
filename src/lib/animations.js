// Premium Animation System - Athenaeum
// Consistent, smooth, high-end motion design

// Easing curves
export const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94],     // Standard smooth
  smoothOut: [0.0, 0.0, 0.2, 1],         // Smooth deceleration
  smoothIn: [0.4, 0.0, 1, 1],            // Smooth acceleration
  bounce: [0.68, -0.55, 0.265, 1.55],    // Subtle bounce
};

// Durations (in seconds)
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    }
  },
  exit: { 
    opacity: 0, 
    y: -8,
    transition: {
      duration: duration.fast,
      ease: easing.smoothIn,
    }
  }
};

// Stagger container for children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

// Individual item for stagger
export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  }
};

// Card hover variants
export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: '0 16px 32px rgba(0,0,0,0.25)',
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  }
};

// Button hover variants
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: duration.fast,
      ease: easing.smooth,
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1,
    }
  }
};

// Fade in from bottom (subtle)
export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    }
  }
};

// Navbar scroll animation
export const navbarScroll = {
  top: {
    backgroundColor: 'rgba(10, 10, 10, 0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(42, 42, 42, 0)',
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  },
  scrolled: {
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottomColor: 'rgba(42, 42, 42, 1)',
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  }
};

// Loader animation
export const loaderAnimation = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: duration.fast,
      ease: easing.smoothIn,
    }
  }
};

// Tag/chip hover
export const tagHover = {
  rest: {
    scale: 1,
    transition: { duration: duration.fast, ease: easing.smooth }
  },
  hover: {
    scale: 1.05,
    transition: { duration: duration.fast, ease: easing.smooth }
  }
};
