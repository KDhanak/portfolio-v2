import React from 'react';
import { profile, socials } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/40">
        {profile.location}
      </p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl font-medium text-white/80 sm:text-2xl">
        {profile.role}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#191f22] transition-transform hover:scale-[1.02] active:scale-95"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          Get in touch
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
