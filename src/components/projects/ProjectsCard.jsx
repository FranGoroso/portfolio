import React from 'react';
import './projectsCard.css';

function ProjectsCard({ title, description, image, technologies, link }) {
  return (
    <div className="project-card" data-aos="fade-up">
      <h3 className="project-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
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
