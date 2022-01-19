import React from 'react';
import project1 from '../../src/components/images/project1-after.jpeg';

function Projects() {
  return (
    <div className="projects py-5">
      <h1>Our Projects</h1>
      <div className="container py-5">
        <img src={project1} alt="projects" className="proj-img" />
      </div>
    </div>
  );
}

export default Projects;
