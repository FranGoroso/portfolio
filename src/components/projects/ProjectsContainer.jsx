import React from 'react';
import ProjectsCard from './projectsCard';

function ProjectsContainer() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Node.js', 'CSS'],
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2',
      image: 'https://via.placeholder.com/300',
      technologies: ['Vue', 'JavaScript', 'Sass'],
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3',
      image: 'https://via.placeholder.com/300',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Proyecto 4',
      description: 'Descripción breve del proyecto 4',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <section className="projects-container">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
        />
      ))}
    </section>
  );
}

export default ProjectsContainer;
