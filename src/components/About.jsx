import React from 'react';

const pillars = [
  { num: '01', title: 'Depth over breadth', desc: "Every session pushes past the surface. We go deep or we don't go at all." },
  { num: '02', title: 'Structured exchange', desc: 'Skills are not hoarded — they\'re mapped, taught, and traded across domains.' },
  { num: '03', title: 'Systems lens', desc: 'Every idea is interrogated as a system: inputs, feedback loops, emergent behavior.' },
  { num: '04', title: 'Deliberate community', desc: 'Small by design. Every member holds a unique edge that the ecosystem needs.' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal flex items-center gap-4 mb-20">
          <span className="font-body text-athen-gray text-xs tracking-widest3 uppercase">01 — About</span>
          <div className="h-px bg-athen-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal">
            <h2
              className="font-display font-light text-athen-cream leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
            >
              Not a club.
              <br />
              <em className="italic text-athen-gray">An ecosystem.</em>
            </h2>
            <div className="divider-line mb-8" />
            <p className="font-body font-light text-athen-gray leading-loose mb-6">
              Athenaeum is a curated peer network where individuals with distinct competencies
              converge to exchange, pressure-test, and deepen their skills — across disciplines,
              without the noise.
            </p>
            <p className="font-body font-light text-athen-gray leading-loose">
              We operate on the belief that mastery is accelerated through structured dialogue,
              deliberate friction, and the kind of cross-domain thinking that doesn't happen in
              siloed classrooms.
            </p>
          </div>

          <div className="scroll-reveal grid grid-cols-1 gap-px bg-athen-border rounded overflow-hidden">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="bg-athen-dark p-7 hover:bg-athen-card transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="font-body text-athen-muted text-xs tracking-widest mt-1 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-body font-medium text-athen-cream text-sm tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body font-light text-athen-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
