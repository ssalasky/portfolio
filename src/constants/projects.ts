export type ProjectType = {
  name: string;
  link: { href: string; label: string };
  description: string;
  languages: string[];
};

export const PROJECTS: ProjectType[] = [
  {
    name: 'Art Website',
    link: { href: 'https://google.com', label: 'placeholder' },
    description: 'My attempt at re-thinking an art website.',
    languages: ['ReactJS', 'NodeJS', 'Prisma', 'GraphQL', 'Apollo'],
  },
];
