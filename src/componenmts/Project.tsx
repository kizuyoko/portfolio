import { useEffect, useRef, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ProjectType } from '../data';

const Project = ({ title, description, image, stack, demo, git, index }: ProjectType) => {
  const [isVisible, setIsVisible] = useState(false); 
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current); 
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article ref={ref} className="flex flex-col items-center justify-center w-full p-4 pt-10 pb-10">
      <div className={`flex flex-col md:flex-row w-full max-w-4xl 
        ${isVisible && index === 'odd' ? 'animate-fade-up md:animate-fade-left animate-duration-[2000ms]  animate-ease-out' : ''}
        ${isVisible && index === 'even' ? 'animate-fade-up md:animate-fade-right animate-duration-[2000ms]  animate-ease-out' : ''}
      `} >
        <div className="flex justify-center w-full mb-6 md:w-1/4 md:mb-0">
          <img src={image} alt={title} className="object-contain w-2/3 h-auto rounded md:w-full drop-shadow" />
        </div>
        <div className={`product-image md:w-3/4 md:pl-10 ${isVisible ? 'animate-fade-up animate-duration-1000 animate-delay-200' : ''}`}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className='mb-4 text-base italic text-gray-500'>{stack.join(', ')}</p>
          <button onClick={() => window.open(demo, '_blank')}>Demo</button> 
          <SocialIcon url={git} network='github' target="_blank" className="ml-4" />
        </div>
      </div>
    </article>
  );
};

export default Project;