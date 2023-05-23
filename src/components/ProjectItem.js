import React from "react";

function ProjectItem({ name, about, technologies }) {
  let technologiesList = technologies.map((tech) => (
<span key={tech}>{tech}</span>
  ));  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesList}</div>
    </div>
  );
}

export default ProjectItem;
