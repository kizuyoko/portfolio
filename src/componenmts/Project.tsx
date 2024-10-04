import { SocialIcon } from 'react-social-icons';
import { ProjectType } from '../data';

const Project = ({ title, description, image, stack, demo, git }: ProjectType) => {
  return (
    <article className="w-full flex flex-col items-center justify-center p-4 pt-10 pb-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center">
          <img src={image} alt="Description" className="w-2/3 md:w-full h-auto rounded shadow" />
        </div>
        <div className="product-image md:w-3/4 md:pl-10">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Stack: {stack.join(', ')}</p>
          <button onClick={() => window.open(demo, '_blank')}>Demo</button> 
          <SocialIcon url={git} network='github' target="_blank" className="ml-4" />
        </div>
      </div>
    </article>
  );
}; // {{ edit_7 }}

export default Project;