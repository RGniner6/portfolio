export interface Project {
  name: string;
  description: string;
  tech?: string[];
  git?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: 'This is my impressive project. Behold!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git',
    live: 'https://github.com/RGniner6/sorrowscopes-portal.git',
  },
  {
    name: 'This is my impressive project. Behold!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  },
  {
    name: 'This is my impressive project. Behold!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
      '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
      '      reprehenderit totam vel veniam.',
    tech: ['Angular', 'Node.js', 'Firebase'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  },
  // {
  //   name: 'This is my impressive project. Behold!',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, atque beatae commodi\n' +
  //     '      distinctio dolore dolores doloribus dolorum explicabo magnam maiores minus, natus neque, quam recusandae\n' +
  //     '      reprehenderit totam vel veniam.',
  //   tech: ['Angular', 'Node.js', 'Firebase'],
  //   git: 'https://github.com/RGniner6/sorrowscopes-portal.git'
  // },
];
