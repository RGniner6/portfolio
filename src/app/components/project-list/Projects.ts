export interface Project {
  id: number;
  name: string;
  description: string;
  tech?: string[];
  git?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Sorrowscopes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git',
    live: 'https://github.com/RGniner6/sorrowscopes-portal.git',
  },
  {
    id: 2,
    name: 'Kanban Board',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  },
  {
    id: 3,
    name: 'Run Stat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  },
  // {
  //   id: 4,
  //   name: 'This Portfolio!',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
  //     '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
  //     '      reprehenderit totam vel veniam.',
  //   tech: ['Angular', 'Node.js', 'Firebase'],
  //   git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  // },
];
