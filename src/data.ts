export type ProjectType = {
  id: string;
  title: string;
  image: string;
  description: string;
  stack: string[];
  demo: string;
  git: string;
  index?: string; 
}

const projects: ProjectType[] = [
   {
    id: 'portfolio',
    title: 'Portfolio',
    image: 'portfolio.png',
    description: 'This page. Simple list of projects, animation',
    stack: ['React.js', 'TypeScript', 'Vite', 'Tailwind'],
    demo: 'https://portfolio-cyan-alpha-89.vercel.app/',
    git: 'https://github.com/kizuyoko/portfolio',
  }, {
    id: 'tailwindShowcase',
    title: 'Tailwind Showcase',
    image: 'tailwind_showcase.png',
    description: 'Tailwind template with menue, 1/2/3 columns, grid, tabs, accordion, form. Works for React, Vue, and vanilla HTML.',
    stack: ['Tailwind', 'JavaScript', 'HTML', 'CSS'],
    demo: 'https://tailwind-showcase-2l1f.vercel.app',
    git: 'https://github.com/kizuyoko/tailwind-showcase',
  }, {
    id: 'typeScriptReduxClothing',
    title: 'TypeScript Redux Clothing',
    image: 'typescript_redux_cloth.png',
    description: 'Cloth Shopping. List of products, cart.',
    stack: ['React.js', 'TypeScript', 'Redux', 'Vite'],
    demo: 'https://typescript-redux-cloth.vercel.app',
    git: 'https://github.com/kizuyoko/typescript-redux-cloth',
  }, {
    id: 'nextJsFood',
    title: 'Next.js Food',
    image: 'nextjs_food.png',
    description: 'List of meals and their recipe, form to share.',
    stack: ['React.js', 'Next.js', 'AWS'],
    demo: 'https://next-js-food.vercel.app/meals',
    git: 'https://github.com/kizuyoko/Next.js-Food',
  },{
    id: 'reactPatternTravel',
    title: 'React Pattern Travel',
    image: 'react_travel.png',
    description: 'Pattern Practice with travel destinations. Search form and result.',
    stack: ['React.js', 'Vite', 'React Patterns', 'Vite'],
    demo: 'https://react-patterns-travel.vercel.app',
    git: 'https://github.com/kizuyoko/react-patterns-travel',
  }, {
    id: 'reactNativeColor',
    title: 'React Native Color',
    image: 'react_native_color.png',
    description: "Colors List, today's color (random), form to add a new color.",
    stack: ['React Native', 'Expo', 'Android', 'iOS', 'EAS'],
    demo: 'https://expo.dev/accounts/kizuyoko/projects/react-native-start/builds/d1518ce4-4d92-47b2-9aa3-a207f5271b56',
    git: 'https://github.com/kizuyoko/react-native-color',
  }, {
    id: 'reactNativeFood',
    title: 'React Native Food',
    image: 'react_native_food.png',
    description: 'Recipe and favorite list',
    stack: ['React Native', 'Redux', 'EAS', 'Expo', 'Android', 'iOS' ],
    demo: 'https://expo.dev/accounts/kizuyoko/projects/react-native-food/builds/db2c58cb-05dc-4409-aac2-4a7659182381',
    git: 'https://github.com/kizuyoko/react-native-food',
  },
]

export default projects;
