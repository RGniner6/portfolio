export interface Project {
  id: number;
  name: string;
  description: string;
  tech?: string[];
  git?: string;
  live?: string;
  imageName?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Sorrowscopes',
    description: 'A joke horoscope app that automatically scraped tweets from twitter for its content using puppeteer.' +
      'It uses the twitter API to update the database with new content',
    tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'Heroku'],
    git: 'https://github.com/RGniner6/sorrowscopes-portal.git',
    live: 'https://sorrowscopes.herokuapp.com/',
    imageName: 'sorrowscopes'
  },
  {
    id: 2,
    name: 'Kanban Board',
    description: 'A task management app that can be used to split up large goals into simpler tasks and divide them up into categories.' +
      'Uses Angular material for drag and drop features, firebase for authentication and firestore to persist the data from the boards',
    tech: ['Angular', 'Angular-Material', 'Firebase', 'Firestore'],
    git: 'https://github.com/RGniner6/kanban',
    live: 'https://kanban-d68ed.web.app/',
    imageName: 'kanban'
  },
  {
    id: 3,
    name: 'Run Stat',
    description: 'Processes gpx data captured by fitness trackers or running apps to analyse and visualise runs.' +
      '\n This project is still under construction. The repository will be frequently updated',
    tech: ['Angular', 'Node.js', 'Mapbox', 'Express', 'MongoDB' ],
    git: 'https://github.com/RGniner6/run-stats',
    imageName: 'runstat'
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
