import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { postsIndex } from '../data/postsIndex';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import { easing, duration } from '../lib/animations';

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
    y: 24,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    }
  }
};

export default function Posts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <section className="py-24 md:py-32 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="mb-4"
          >
            <span 
              className="font-body text-athen-muted text-xs"
              style={{ 
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}
            >
              Publications
            </span>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: easing.smooth, delay: 0.1 }
              }
            }}
            className="mb-16 md:mb-24"
          >
            <h1
              className="font-display font-light text-athen-cream"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Insights & Writing
            </h1>
            <p 
              className="font-body font-light text-athen-gray mt-6 max-w-xl"
              style={{ 
                fontSize: '1.125rem',
                lineHeight: 1.6,
                letterSpacing: '0.01em'
              }}
            >
              Thoughts on learning, building systems, and the exchange of deep skills within our ecosystem.
            </p>
          </motion.div>

          {/* Posts Grid - Editorial layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardContainerVariants}
          >
            {postsIndex.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={cardRevealVariants}
                className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom spacing */}
          <div className="h-24" />
        </div>
      </section>
      <Footer />
    </>
  );
}
