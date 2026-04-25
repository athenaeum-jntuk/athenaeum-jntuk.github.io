import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getPostMetaBySlug } from '../data/postsIndex';
import { loadPost } from '../utils/markdownLoader';
import Footer from '../components/Footer';
import { easing, duration } from '../lib/animations';

// Page transition variants
const pageVariants = {
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

// Content animation
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
      delay: 0.2
    }
  }
};

export default function PostDetail() {
  const { slug } = useParams();
  const postMeta = getPostMetaBySlug(slug);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Load post content on mount
  useEffect(() => {
    const loadPostContent = async () => {
      if (!postMeta) {
        setLoading(false);
        return;
      }
      
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      const postData = await loadPost(postMeta.file);
      setPost(postData);
      setLoading(false);
    };
    
    loadPostContent();
  }, [slug, postMeta]);

  // Fallback if post not found
  if (!postMeta) {
    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="min-h-screen bg-athen-black flex items-center justify-center px-6"
      >
        <div className="text-center max-w-md">
          <h1 className="font-display font-light text-athen-cream text-4xl mb-6">
            Article Not Found
          </h1>
          <p className="font-body font-light text-athen-gray mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/posts"
            className="inline-flex items-center gap-2 font-body text-athen-cream text-sm tracking-wider hover:text-athen-light transition-colors"
            style={{ textTransform: 'uppercase' }}
          >
            <span>←</span>
            <span>All Publications</span>
          </Link>
        </div>
      </motion.div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-athen-black flex items-center justify-center px-6">
        <div className="text-athen-muted text-sm tracking-wider" style={{ textTransform: 'uppercase' }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="min-h-screen">
        {/* Header Section */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easing.smooth }}
          className="pt-32 pb-16 px-6"
        >
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easing.smooth, delay: 0.1 }}
              className="mb-12"
            >
              <Link 
                to="/posts"
                className="inline-flex items-center gap-2 font-body text-athen-muted text-xs tracking-wider hover:text-athen-cream transition-colors duration-300"
                style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}
              >
                <span>←</span>
                <span>All Publications</span>
              </Link>
            </motion.div>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easing.smooth, delay: 0.15 }}
              className="mb-6"
            >
              <span 
                className="font-body text-athen-muted text-xs"
                style={{ 
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em'
                }}
              >
                {postMeta.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing.smooth, delay: 0.2 }}
              className="font-display font-light text-athen-cream"
              style={{ 
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', 
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              {post?.title || postMeta.slug}
            </motion.h1>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: easing.smooth, delay: 0.3 }}
              className="flex items-center gap-4 mt-10 pt-8 border-t border-athen-border/50"
            >
              <span 
                className="font-body text-athen-muted text-xs"
                style={{ letterSpacing: '0.05em' }}
              >
                {postMeta.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-athen-muted/40" />
              <span 
                className="font-body text-athen-muted text-xs"
                style={{ letterSpacing: '0.05em' }}
              >
                {postMeta.readingTime} read
              </span>
            </motion.div>
          </div>
        </motion.header>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing.smooth, delay: 0.4 }}
          className="pb-32 px-6"
        >
          <div className="max-w-3xl mx-auto">
            {/* Article Content - Markdown */}
            {post && (
              <div
                className="article-content prose prose-invert max-w-none"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  letterSpacing: '0.01em'
                }}
              >
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            )}

            {/* Article Footer */}
            <div className="mt-20 pt-10 border-t border-athen-border/50">
              <Link 
                to="/posts"
                className="inline-flex items-center gap-2 font-body text-athen-muted text-sm tracking-wider hover:text-athen-cream transition-colors duration-300"
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                <span>←</span>
                <span>More Articles</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
      <Footer />
    </>
  );
}
