import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const parallax = useParallax(0.015, !isMobile);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Ambient gradient orbs - background depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: parallax.x * 0.5,
          y: parallax.y * 0.5
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(232,228,220,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(232,228,220,0.02) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Grid with subtle parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-grid"
        style={{ backgroundSize: '80px 80px' }}
        animate={{
          x: parallax.x * 0.3,
          y: parallax.y * 0.3
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />

      {/* Content with parallax depth */}
      <motion.div 
        className="relative z-10 max-w-4xl w-full"
        animate={{
          x: parallax.x,
          y: parallax.y
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        <motion.p
          {...fadeUp(0.1)}
          className="font-body text-athen-gray text-xs tracking-widest3 uppercase mb-8"
        >
          Skill Exchange Ecosystem
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-display font-light text-athen-cream leading-none mb-8"
          style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', letterSpacing: '-0.01em' }}
        >
          Analyze
          <br />
          <em className="italic" style={{ color: '#888888' }}>
            Adapt
          </em>
          <br />
          Augment
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="font-body font-light text-athen-gray text-base md:text-lg max-w-xl mx-auto leading-loose mb-12"
          style={{ letterSpacing: '0.02em' }}
        >
          A high-performance intellectual collective built on peer learning,
          systems thinking, and the relentless exchange of deep skills.
        </motion.p>

        <motion.div {...fadeUp(0.65)}>
          <Link to="/domains" className="cta-btn inline-block border border-athen-cream px-10 py-4 text-athen-cream text-xs font-body">
            <span>Explore Ecosystem</span>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
