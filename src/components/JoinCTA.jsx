import React from 'react';

export default function JoinCTA() {
  return (
    <section id="join" className="py-32 px-6 border-t border-athen-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="scroll-reveal mb-8 flex items-center justify-center gap-0 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderTop: '1px solid #E8E4DC',
                borderRight: i % 2 === 0 ? '1px solid #E8E4DC' : 'none',
                borderLeft: i % 2 !== 0 ? '1px solid #E8E4DC' : 'none',
              }}
            />
          ))}
        </div>

        <h2
          className="scroll-reveal font-display font-light text-athen-cream mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', letterSpacing: '-0.01em' }}
        >
          The ecosystem
          <br />
          <em className="italic text-athen-gray">has a seat for you.</em>
        </h2>

        <p className="scroll-reveal font-body font-light text-athen-gray leading-loose mb-12 text-base max-w-lg mx-auto">
          We admit members by application. Each cohort is small, deliberate, and built for people
          who take their craft seriously.
        </p>

        <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:join@athenaeum.club"
            className="cta-btn inline-block border border-athen-cream px-12 py-4 text-athen-cream text-xs font-body"
          >
            <span>Apply for Membership</span>
          </a>
          <a
            href="#about"
            className="font-body text-athen-gray text-xs tracking-widest uppercase hover:text-athen-cream transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
