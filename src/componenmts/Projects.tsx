import React from "react";
import Project from "./Project";
import projects from "../data";

const Projects: React.FC = () => {
  return (
    <section>
      {projects.map(project => ( 
        <Project key={project.id} {...project} />
      ))} 
    </section>
  );
}

export default Projects;