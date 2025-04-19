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
    id: 'pokecheck',
    title:'PokeCheck',
    image: 'pokecheck.png',
    description: "PokeCheck is a personal project I'm currently working on to sharpen my skills in TypeScript, Redux, and component-based development. It's a Pokémon matchup checker built with Next.js, Tailwind CSS, and Redux Toolkit. I'm using Jest and Storybook for testing and UI documentation, and the app is being improved with a focus on accessibility and performance. Dummy data is used for now, with plans to connect to the PokéAPI.",
    stack: ['Next.js', 'TypeScript', 'Jest', 'React', 'Redux', 'Tailwind', 'Storybook', 'Vercel', 'PokéAPI'],
    demo: 'https://pokecheck-two.vercel.app',
    git: 'https://github.com/kizuyoko/pokecheck',
  },
  {
    id: 'quickreddit',
    title: 'Quick Reddit',
    image: 'quickreddit.png',
    description: 'Quick Reddit is a fast and intuitive web application that allows users to explore trending Reddit posts effortlessly. Built with Next.js, the app is optimized for SEO and performance while maintaining a clean, responsive design. It integrates the Reddit API for real-time data, enabling users to browse posts by category, search for topics, and vote on posts.',
    stack: ['Next.js', 'React.js', 'TypeScript', 'Redux', 'Jest and RTL', 'Lighthouse' , 'Reddit API', 'Figma', 'Tailwind'],
    demo: 'https://quickreddit.vercel.app',
    git: 'https://github.com/kizuyoko/quickreddit',
  }, {
    id: 'inspiration-hub',
    title: 'Inspiration Hub',
    image: 'inspiration_hub.png',
    description: 'An app designed to inspire and motivate daily. It allows users to set daily goals with status tracking and automatic sorting for better organization. The app also displays local weather, a random inspirational quote, and a stunning background image to spark creativity and positivity.',
    stack: ['React.js', 'TypeScript', 'Vite', 'Redux', 'API (Open Weather, Unslplash, Quote by DummyJSON)', 'Figma', 'Tailwind' ],
    demo: 'https://inspiration-hub-three.vercel.app/',
    git: 'https://github.com/kizuyoko/inspiration-hub',
  },
  {
    id: 'react-typescript-music',
    title: 'React TypeScript Music',
    image: 'react_typescript_music.png',
    description: 'A dynamic music app that lets users search for their favorite songs, curate custom playlists, and save them directly to Spotify.',
    stack: ['React.js', 'TypeScript', 'Vite', 'Tailwind', 'Spotify API' ],
    demo: 'https://react-typescript-music.vercel.app/',
    git: 'https://github.com/kizuyoko/react-typescript-music',
  }, {
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
  },{
    id: 'reactNativeColor',
    title: 'React Native Color',
    image: 'react_native_color.png',
    description: "Colors List, today's color (random), form to add a new color.",
    stack: ['React Native', 'Expo', 'Android', 'iOS', 'EAS'],
    demo: 'https://expo.dev/accounts/kizuyoko/projects/react-native-start/builds/d1518ce4-4d92-47b2-9aa3-a207f5271b56',
    git: 'https://github.com/kizuyoko/react-native-color',
  },  
/*
  {
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
    id: 'reactNativeFood',
    title: 'React Native Food',
    image: 'react_native_food.png',
    description: 'Recipe and favorite list',
    stack: ['React Native', 'Redux', 'EAS', 'Expo', 'Android', 'iOS' ],
    demo: 'https://expo.dev/accounts/kizuyoko/projects/react-native-food/builds/db2c58cb-05dc-4409-aac2-4a7659182381',
    git: 'https://github.com/kizuyoko/react-native-food',
  },{
    id: 'typeScriptReduxClothing',
    title: 'TypeScript Redux Clothing',
    image: 'typescript_redux_cloth.png',
    description: 'Cloth Shopping. List of products, cart.',
    stack: ['React.js', 'TypeScript', 'Redux', 'Vite'],
    demo: 'https://typescript-redux-cloth.vercel.app',
    git: 'https://github.com/kizuyoko/typescript-redux-cloth',
  }, 
*/  
]

export default projects;
