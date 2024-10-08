import React from "react";
import Project from "./Project";
import projects from "../data";

const ProjectList: React.FC = () => {
  return (
    <section>
      {projects.map((project, index) => ( 
        <Project 
          key={project.id} 
          index={index % 2 === 0 ? 'even' : 'odd'} 
          {...project} 
        />
      ))} 
    </section>
  );
}

export default ProjectList;