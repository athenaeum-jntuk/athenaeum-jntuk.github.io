import React from 'react';
import { motion } from 'framer-motion';
import SessionsComponent from '../components/Sessions';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Sessions() {
  return (
    <>
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-6">
            <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">03 — Sessions</span>
            <div className="h-px bg-athen-border flex-1 max-w-xs" />
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="mb-16">
            <h1
              className="font-display font-light text-athen-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
            >
              Upcoming sessions.
              <br />
              <em className="italic text-athen-gray">Mark your calendar.</em>
            </h1>
          </motion.div>
        </div>
      </section>
      <SessionsComponent />
      <Footer />
    </>
  );
}
