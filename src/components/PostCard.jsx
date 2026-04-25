import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { easing, duration } from '../lib/animations';

const cardHover = {
  rest: { 
    y: 0,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth,
    }
  },
  hover: { 
    y: -8,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth,
    }
  }
};

const contentReveal = {
  rest: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.smooth }
  }
};

export default function PostCard({ post }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="group relative h-full"
    >
      <Link
        to={`/posts/${post.slug}`}
        className="block h-full p-10 flex flex-col relative overflow-hidden bg-athen-dark"
        style={{ 
          border: '1px solid rgba(42, 42, 42, 0.6)',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(58, 58, 58, 0.8)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(42, 42, 42, 0.6)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: 'linear-gradient(90deg, transparent 0%, rgba(232, 228, 220, 0.3) 50%, transparent 100%)'
          }}
        />

        {/* Category Badge */}
        <div className="relative z-10 mb-8">
          <span
            className="font-body text-athen-muted text-xs tracking-wider"
            style={{ 
              textTransform: 'uppercase',
              letterSpacing: '0.2em'
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 
          className="font-display font-light text-athen-cream mb-5 relative z-10 group-hover:text-athen-white transition-colors duration-400"
          style={{ 
            fontSize: 'clamp(1.35rem, 2.5vw, 1.65rem)', 
            letterSpacing: '-0.02em',
            lineHeight: 1.25
          }}
        >
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p 
          className="font-body font-light text-athen-gray relative z-10 flex-1 mb-10"
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.7,
            letterSpacing: '0.01em'
          }}
        >
          {post.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-6 pt-6 border-t border-athen-border/60 relative z-10">
          <span 
            className="font-body text-athen-muted text-xs"
            style={{ letterSpacing: '0.05em' }}
          >
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-athen-muted/40" />
          <span 
            className="font-body text-athen-muted text-xs"
            style={{ letterSpacing: '0.05em' }}
          >
            {post.readingTime}
          </span>
        </div>

        {/* Read indicator */}
        <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span 
            className="font-body text-athen-muted text-xs tracking-wider"
            style={{ textTransform: 'uppercase' }}
          >
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
