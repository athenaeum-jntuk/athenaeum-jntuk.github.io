import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { domains } from '../data/domains';
import { useTiltWithShadow } from '../hooks/useTilt';
import { 
  easing, 
  duration, 
  tagHover 
} from '../lib/animations';

// Accent line animation
const accentLineVariants = {
  rest: { scaleX: 0 },
  hover: { 
    scaleX: 1,
    transition: { duration: duration.normal, ease: easing.smooth }
  }
};

// Staggered card container
const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    }
  }
};

// Individual card reveal animation
const cardRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    }
  }
};

// Section header animation
const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    }
  }
};

export default function Domains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="domains" className="py-32 px-6 border-t border-athen-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header with staggered animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">02 — Domains</span>
          <div className="h-px bg-athen-border flex-1 max-w-xs" />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: duration.slow, ease: easing.smooth, delay: 0.1 }
            }
          }}
          className="mb-20"
        >
          <h2
            className="font-display font-light text-athen-cream"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
          >
            Five tracks.
            <br />
            <em className="italic text-athen-gray">One ecosystem.</em>
          </h2>
        </motion.div>

        {/* Cards grid with staggered reveal */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardContainerVariants}
        >
          {domains.map((domain, i) => {
            const tilt = useTiltWithShadow(4, !isMobile);
            return (
              <motion.div
                key={domain.id}
                variants={cardRevealVariants}
                className="group relative"
              >
                <Link
                  to={`/domains/${domain.id}`}
                  className="block h-full p-8 flex flex-col relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(145deg, #111111 0%, #0d0d0d 100%)',
                    border: '1px solid #1f1f1f',
                    transformStyle: 'preserve-3d'
                  }}
                  {...tilt}
                >
                {/* Accent line at top */}
                <motion.div 
                  variants={accentLineVariants}
                  className="absolute top-0 left-0 right-0 h-px origin-left"
                  style={{ background: 'linear-gradient(90deg, transparent, #E8E4DC, transparent)' }}
                />

                {/* Subtle background pattern */}
                <div 
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #E8E4DC 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="font-body text-athen-muted text-xs tracking-widest">{domain.num}</span>
                  <motion.div 
                    className="w-5 h-5 border rounded-full flex items-center justify-center"
                    style={{ borderColor: '#3a3a3a' }}
                    whileHover={{ borderColor: '#E8E4DC', scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-1.5 h-1.5 bg-athen-cream rounded-full" />
                  </motion.div>
                </div>

                <h3 
                  className="font-display font-light text-athen-cream mb-3 relative z-10"
                  style={{ 
                    fontSize: '1.75rem', 
                    letterSpacing: '-0.01em'
                  }}
                >
                  {domain.title}
                </h3>
                
                <p className="font-body text-athen-muted text-xs tracking-widest uppercase mb-6 relative z-10">
                  {domain.subtitle}
                </p>

                <div className="h-px w-full mb-6 relative z-10" style={{ background: 'linear-gradient(90deg, #2a2a2a, transparent)' }} />

                <p className="font-body font-light text-athen-gray text-sm leading-relaxed mb-8 flex-1 relative z-10">
                  {domain.desc}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-2 relative z-10"
                  variants={{
                    rest: {},
                    hover: {
                      transition: {
                        staggerChildren: 0.03,
                        delayChildren: 0.05,
                      }
                    }
                  }}
                >
                  {domain.topics.slice(0, 3).map((topic) => (
                    <motion.span
                      key={topic}
                      className="font-body text-athen-muted text-xs px-3 py-1.5 rounded-sm"
                      style={{ 
                        background: 'rgba(42, 42, 42, 0.5)',
                        border: '1px solid #2a2a2a'
                      }}
                      variants={tagHover}
                      initial="rest"
                      whileHover="hover"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
