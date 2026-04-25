import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Domain Mapping',
    desc: 'Each member documents their core competencies and the skills they want to receive. The ecosystem map is updated continuously.',
  },
  {
    num: '02',
    title: 'Matched Exchange',
    desc: 'Sessions are paired or grouped based on skill complementarity. No hierarchy — every expert is also a learner.',
  },
  {
    num: '03',
    title: 'Deep Session',
    desc: 'Focused 90-minute sessions with structured delivery, real examples, and mandatory Q&A. No slides-only presentations.',
  },
  {
    num: '04',
    title: 'Synthesis & Reflection',
    desc: 'Post-session documentation is shared ecosystem-wide. Insights are linked across domains to build a living knowledge base.',
  },
];

const stats = [
  { val: '90 min', label: 'Session length' },
  { val: 'Bi-weekly', label: 'Frequency' },
  { val: '≤ 15', label: 'Members per cohort' },
  { val: 'Peer-led', label: 'Format' },
];

export default function Sessions() {
  return (
    <section id="sessions" className="py-32 px-6 border-t border-athen-border">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal flex items-center gap-4 mb-6">
          <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">03 — Sessions</span>
          <div className="h-px bg-athen-border flex-1 max-w-xs" />
        </div>

        <div className="scroll-reveal mb-20">
          <h2
            className="font-display font-light text-athen-cream"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
          >
            How the exchange
            <br />
            <em className="italic text-athen-gray">actually works.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-athen-border">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`scroll-reveal p-10 hover:bg-athen-card transition-colors duration-300 ${
                i < 2 ? 'border-b border-athen-border' : ''
              } ${i % 2 === 0 ? 'lg:border-r border-athen-border' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex gap-6">
                <span
                  className="font-display text-athen-muted font-light shrink-0"
                  style={{ fontSize: '3rem', lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-body font-medium text-athen-cream text-base tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-athen-gray text-sm leading-loose">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="scroll-reveal mt-12 p-8 border border-athen-border bg-athen-dark">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-light text-athen-cream mb-2"
                  style={{ fontSize: '1.6rem' }}
                >
                  {s.val}
                </div>
                <div className="font-body text-athen-gray text-xs tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
