import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { domains } from '../data/domains';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const cardHover = {
  rest: { 
    y: 0, 
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)'
  },
  hover: { 
    y: -8, 
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const accentLine = {
  rest: { scaleX: 0 },
  hover: { 
    scaleX: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Domains() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-6">
            <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">02 — Domains</span>
            <div className="h-px bg-athen-border flex-1 max-w-xs" />
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="mb-16">
            <h1
              className="font-display font-light text-athen-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
            >
              Five tracks.
              <br />
              <em className="italic text-athen-gray">One ecosystem.</em>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.id}
              {...fadeUp(0.3 + i * 0.1)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
              className="group relative"
            >
              <Link
                to={`/domains/${domain.id}`}
                className="block h-full p-8 flex flex-col relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(145deg, #111111 0%, #0d0d0d 100%)',
                  border: '1px solid #1f1f1f'
                }}
              >
                {/* Accent line at top */}
                <motion.div 
                  variants={accentLine}
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

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {domain.topics.slice(0, 4).map((topic, idx) => (
                    <motion.span
                      key={topic}
                      className="font-body text-athen-muted text-xs px-3 py-1.5 rounded-sm"
                      style={{ 
                        background: 'rgba(42, 42, 42, 0.5)',
                        border: '1px solid #2a2a2a'
                      }}
                      whileHover={{ 
                        backgroundColor: 'rgba(232, 228, 220, 0.1)',
                        borderColor: 'rgba(232, 228, 220, 0.3)'
                      }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="relative overflow-hidden border px-6 py-3 text-center"
                  style={{ borderColor: '#E8E4DC' }}
                  whileHover="hover"
                  initial="rest"
                >
                  <span className="relative z-10 font-body text-xs tracking-widest text-athen-cream">
                    View Details →
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-athen-cream"
                    variants={{
                      rest: { x: '-100%' },
                      hover: { x: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
