import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDomainById } from '../data/domains';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function DomainDetail() {
  const { domainName } = useParams();
  const domain = getDomainById(domainName);

  if (!domain) {
    return <Navigate to="/domains" replace />;
  }

  return (
    <>
      <section className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-6">
            <Link to="/domains" className="font-body text-athen-gray text-xs tracking-widest3 uppercase hover:text-athen-cream transition-colors">
              ← Back to Domains
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4 mb-8">
            <span className="font-body text-athen-muted text-xs tracking-widest">{domain.num}</span>
            <div className="h-px bg-athen-border flex-1 max-w-xs" />
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mb-12">
            <h1
              className="font-display font-light text-athen-cream mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.01em' }}
            >
              {domain.title}
            </h1>
            <p className="font-body text-athen-muted text-sm tracking-widest uppercase">
              {domain.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-athen-border mb-12">
            <motion.div {...fadeUp(0.4)} className="lg:col-span-2 bg-athen-dark p-8 lg:p-12">
              <h2 className="font-body font-medium text-athen-cream text-sm tracking-wide mb-6">
                About this track
              </h2>
              <p className="font-body font-light text-athen-gray text-base leading-loose mb-6">
                {domain.fullDesc}
              </p>
              <p className="font-body font-light text-athen-gray text-base leading-loose">
                {domain.desc}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="bg-athen-dark p-8 lg:p-12">
              <h2 className="font-body font-medium text-athen-cream text-sm tracking-wide mb-6">
                Key Skills
              </h2>
              <ul className="space-y-3">
                {domain.skills.map((skill) => (
                  <li key={skill} className="font-body font-light text-athen-gray text-sm flex items-center gap-3">
                    <span className="w-1 h-1 bg-athen-muted rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.6)}>
            <h2 className="font-body font-medium text-athen-cream text-sm tracking-wide mb-6">
              Topics Covered
            </h2>
            <div className="flex flex-wrap gap-3">
              {domain.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-body text-athen-muted text-sm px-4 py-2 border border-athen-border hover:border-athen-gray hover:text-athen-light transition-colors duration-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
