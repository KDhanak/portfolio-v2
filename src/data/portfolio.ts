// Hard-coded placeholder content. Swap these values for your real details —
// none of this is wired to the database, so editing it here is safe.

export const profile = {
  name: 'Your Name',
  role: 'Full-Stack Developer',
  tagline:
    'I build clean, responsive web experiences from front-end to back-end.',
  email: 'you@example.com',
  location: 'Remote',
};

export const socials: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:you@example.com' },
];

export const about = [
  "I'm a developer who cares about the details — accessible markup, responsive layouts, and interfaces that feel good on every screen size.",
  'This section is placeholder copy. Replace it with a short bio about who you are, what you work on, and what you enjoy building.',
];

export const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Firebase',
  'Tailwind CSS',
  'Vite',
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves. Replace with your own work.',
    tags: ['React', 'TypeScript', 'Firebase'],
    href: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another placeholder project. Describe the stack, your role, and the outcome in a sentence or two.',
    tags: ['Node.js', 'API'],
    href: '#',
  },
  {
    title: 'Project Three',
    description:
      'Highlight something you are proud of — a launch, a performance win, or a fun side project.',
    tags: ['Vite', 'Tailwind'],
    href: '#',
  },
];

export const navLinks: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
