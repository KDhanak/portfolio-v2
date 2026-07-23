import React from 'react';
import { about, skills } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        About
      </h2>
      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {about.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Skills
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
