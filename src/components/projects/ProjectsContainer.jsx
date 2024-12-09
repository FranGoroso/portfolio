import React from 'react';
import ProjectsCard from './projectsCard';
import projectOne from '../../assets/img/captura-inicio-react-ecommerce.png'
import projectTwo from '../../assets/img/cuestionario_js.png'
import projectThree from '../../assets/img/tuintencionpositiva.png'
import projectFour from '../../assets/img/llauretum.png'

function ProjectsContainer() {
  const projects = [
    {
      title: 'Eccomerce-React',
      description: 'Desarrollado en React, este proyecto es una tienda en línea de prueba con funciones como navegación, filtros y flujo de compra. Aunque no está disponible en el mercado, me ayudó a mejorar mis habilidades en React y frontend.',
      image: projectOne,
      technologies: ['React', 'Firebase', 'HTML, CSS', 'Bootstrap'],
      link: 'https://proyect-react-cm-65120-4uvlluliv-franciscos-projects-da629694.vercel.app/',
    },
    {
      title: 'Cuestionario interactivo JS',
      description: 'Un desafío práctico donde aprendí y apliqué JavaScript, manejando eventos y estructuras de programación. Fue clave para consolidar mis habilidades y entender cómo funcionan las aplicaciones dinámicas.',
      image:  projectTwo,
      technologies: ['HTML,CSS', 'JavaScript'],
      link: 'https://frangoroso.github.io/curso-js-coderhouse-CM-64775/',
    },
    {
      title: 'Tu intencion positiva',
      description: 'Desarrollado en WordPress, creé un sitio web funcional y visualmente atractivo con diseño responsivo y personalización de plantillas. Este proyecto me permitió profundizar en el manejo de CMS y mejorar la accesibilidad.',
      image: projectThree,
      technologies: ['HTML,CSS', 'Wordpress', 'JavaScript'],
      link: 'https://tuintencionpositiva.com/',
    },
    {
      title: 'Llauretum',
      description: 'es un sitio web que gestiono y mantengo actualmente, asegurando su correcto funcionamiento y actualizaciones periódicas. Aunque no fue completamente desarrollado por mí, me encargo de su administración, optimización y personalización, garantizando que siga alineado con las necesidades del cliente.',
      image: projectFour,
      technologies: ['HTML,CSS', 'Wordpress', 'JavaScript'],
      link: 'https://llauretum.es/',
    },
  ];

  return (
    <div>
      <section className="projects-container">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </section>
    </div>
  );
}

export default ProjectsContainer;
