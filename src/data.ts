export type ProjectType = {
  id: string;
  title: string;
  image: string;
  description: string;
  stack: string[];
  demo: string;
  git: string;
}

const projects: ProjectType[] = [
  {
    id: 'p1',
    title: 'title 1',
    image: 'http://dummy-images.com/animals/dummy-600x600-Gull.jpg',
    description: 'Description here',
    stack: ['React.js', 'TypeScript'],
    demo: 'https://google.com',
    git: 'https://git.com',
  }, {
    id: 'p2',
    title: 'title 2',
    image: 'http://dummy-images.com/animals/dummy-600x600-Gull.jpg',
    description: 'Description here',
    stack: ['React.js', 'TypeScript'],
    demo: 'https://google.com',
    git: 'https://git.com',
  }, {
    id: 'p3',
    title: 'title 3',
    image: 'http://dummy-images.com/animals/dummy-600x600-Gull.jpg',
    description: 'Description here',
    stack: ['React.js', 'TypeScript'],
    demo: 'https://google.com',
    git: 'https://git.com',
  }
]

export default projects;
