import React from 'react';
import { profile, socials } from '../data/portfolio';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Let&rsquo;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#191f22] transition-transform hover:scale-[1.02] active:scale-95"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
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
      </div>

      <footer className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-white/30">
        &copy; {new Date().getFullYear()} {profile.name}. Built with React,
        Vite &amp; Tailwind.
      </footer>
    </section>
  );
};

export default Contact;
