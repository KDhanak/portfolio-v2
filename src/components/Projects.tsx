import React from 'react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
