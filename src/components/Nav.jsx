import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/ATHENAEUM.png';
import { easing, duration } from '../lib/animations';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Domains', path: '/domains' },
  { name: 'Posts', path: '/posts' },
  { name: 'Team', path: '/team' },
];

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    }
  }
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: duration.fast,
      ease: easing.smoothIn,
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    }
  }
};

const linkHover = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: {
      duration: duration.fast,
      ease: easing.smooth,
    }
  }
};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Fade in on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-athen-black/90"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo with hover effect */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: duration.fast, ease: easing.smooth }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-athen-border overflow-hidden bg-athen-dark flex items-center justify-center">
              <img src={logo} alt="Athenaeum" className="w-7 h-7 object-cover rounded-full" />
            </div>
            <span className="font-brand text-athen-cream tracking-wide text-lg normal-case">
              Athenaeum
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation with hover effects */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <motion.div
              key={link.path}
              variants={linkHover}
              initial="rest"
              whileHover="hover"
            >
              <Link
                to={link.path}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-athen-cream' : 'text-athen-gray hover:text-athen-cream'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger with smooth animation */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden flex flex-col gap-1.5 w-6 z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: easing.smooth }}
            className="block h-px bg-athen-cream origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2, ease: easing.smooth }}
            className="block h-px bg-athen-cream"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: easing.smooth }}
            className="block h-px bg-athen-cream origin-center"
          />
        </motion.button>
      </div>

      {/* Mobile Menu with smooth AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-athen-black/95 border-t border-athen-border z-50"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  }
                }
              }}
              className="px-6 py-8 flex flex-col gap-6"
            >
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, ease: easing.smooth }
                    }
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-athen-cream' : 'text-athen-gray hover:text-athen-cream'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
