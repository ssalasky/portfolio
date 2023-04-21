export type HobbyType = {
  name: string;
  goal: string;
  tools?: string[];
};

export const HOBBIES: HobbyType[] = [
  {
    name: 'Digital Animation',
    goal: 'To create an ongoing animated series entirely self-produced.',
    tools: ['Blender', 'DaVinci Resolve'],
  },
  {
    name: 'Dog Training',
    goal: 'To earn a field championship with at least one of my dogs.',
  },
  {
    name: 'Writing',
    goal: 'To produce a novel.',
  },
];
