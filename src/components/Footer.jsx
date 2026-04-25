import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Domains', path: '/domains' },
  { name: 'Team', path: '/team' },
];
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/athenaeum-club' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/athenaeum-club' },
  { label: 'Email', href: 'mailto:join@athenaeum.club' },
];

export default function Footer() {
  return (
    <footer className="border-t border-athen-border py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-display font-light text-athen-cream tracking-widest text-sm uppercase block mb-2">
              Athenaeum
            </span>
            <p className="font-body font-light text-athen-muted text-xs tracking-wide">
              Skill Exchange Ecosystem — Est. 2024
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
            <div>
              <p className="font-body text-athen-muted text-xs tracking-widest uppercase mb-4">Navigate</p>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-body font-light text-athen-gray text-xs hover:text-athen-cream transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-athen-muted text-xs tracking-widest uppercase mb-4">Connect</p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body font-light text-athen-gray text-xs hover:text-athen-cream transition-colors tracking-wide"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-athen-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body font-light text-athen-muted text-xs">
            © 2024 Athenaeum. All rights reserved.
          </p>
          <p className="font-body font-light text-athen-muted text-xs italic">
            "The unexamined skill is not worth teaching."
          </p>
        </div>
      </div>
    </footer>
  );
}
