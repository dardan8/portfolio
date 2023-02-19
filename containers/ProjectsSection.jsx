import React from "react";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/data";

console.log(projects);

const ProjectsSection = () => {
  return (
    <div className={`container`} id='projects'>
      <div className='projects_container'>
        <h3>Projects</h3>
        <div className='projects_list'>
          {projects.map((project) => (
            <ProjectCard
              key={project.project_id}
              title={project.project_title}
              image={project.project_image}
              description={project.project_description}
              technologies={project.project_technologies.join(" | ")}
              url={project.project_url}
              source={project.project_source_code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
