import React from 'react';

const team = [
  {
    initials: 'HG',
    name: 'Hemanth Gavara',
    role: 'Founder · Systems Architect',
    note: 'Builder of the ecosystem. Architecting scalable systems and driving technical vision.',
  },
  {
    initials: 'SG',
    name: 'Snehal GSS',
    role: 'Co-founder · Engineering Lead',
    note: 'Engineering mind behind the platform. Translating vision into robust, working code.',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 border-t border-athen-border">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal flex items-center gap-4 mb-6">
          <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">02 — Founders</span>
          <div className="h-px bg-athen-border flex-1 max-w-xs" />
        </div>

        <div className="scroll-reveal mb-20">
          <h2
            className="font-display font-light text-athen-cream"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
          >
            The people who
            <br />
            <em className="italic text-athen-gray">built the room.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-athen-border">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="scroll-reveal card-hover bg-athen-dark p-8 flex gap-6 border border-transparent"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="shrink-0 w-14 h-14 team-img-placeholder rounded flex items-center justify-center">
                <span className="font-display font-light text-athen-gray text-lg">{member.initials}</span>
              </div>
              <div>
                <h3 className="font-body font-medium text-athen-cream text-sm tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-athen-muted text-xs tracking-widest uppercase mb-4">
                  {member.role}
                </p>
                <p className="font-body font-light text-athen-gray text-sm leading-relaxed">
                  {member.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
