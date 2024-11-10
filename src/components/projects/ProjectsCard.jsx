import React from 'react';
import './projectsCard.css';

function ProjectsCard({ title, description, image, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <img src={image} alt={title} className="project-image" />
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;
