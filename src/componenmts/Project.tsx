import { SocialIcon } from 'react-social-icons';
import { ProjectType } from '../data';

const Project = ({ title, description, stack, demo, git }: ProjectType) => {
  return (
    <article className="w-full flex flex-col items-center justify-center p-4 pt-10 pb-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/6 mb-4 md:mb-0 flex justify-center">
          <img src="http://dummy-images.com/animals/dummy-600x600-Gull.jpg" alt="Description" className="w-1/2 md:w-full h-auto rounded-full" />
        </div>
        <div className="md:w-5/6 md:pl-10">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Stack: {stack.join(', ')}</p>
          <button onClick={() => window.open(demo, '_blank')}>Demo</button> 
          <SocialIcon url={git} network='github' target="_blank" className="ml-4 w-4 h-4" />
        </div>
      </div>
    </article>
  );
}; // {{ edit_7 }}

export default Project;