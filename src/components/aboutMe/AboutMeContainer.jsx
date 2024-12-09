import React, { useEffect } from "react";
import './AboutMe.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

function AboutMeContainer() {
  useEffect(() => {
    AOS.init({
      duration: 2500, 
      once: true, 
    });
  }, []);

  return (
    <section className="aboutMe-container">
      <div className="aboutMe-card" data-aos="fade-up">
        <h2>About me</h2>
        <p>
          Soy un apasionado desarrollador frontend con experiencia en la creación de aplicaciones web modernas y funcionales. 
          Me encanta combinar diseño y funcionalidad para construir interfaces que no solo sean estéticamente agradables, sino 
          también intuitivas y accesibles para los usuarios. <br /><br />
          A lo largo de mi trayectoria, he trabajado con tecnologías como React, JavaScript, CSS, y frameworks modernos. 
          Estoy constantemente aprendiendo y mejorando mis habilidades, buscando desafíos que me permitan crecer profesional y personalmente. 
          Mi objetivo es aportar soluciones creativas y eficientes que marquen la diferencia en cada proyecto.
        </p>
        <div className="contact-section">
          <a href="https://www.linkedin.com/in/francisco-goroso-609796266/" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="zoom-in" data-aos-delay="300">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/FranGoroso" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="zoom-in" data-aos-delay="500">
            <FaGithub className="social-icon" />
          </a>
          <a href="contacto@frangoroso.com">
            <button className="contact-me-btn" data-aos="fade-up" data-aos-delay="700">Contáctame</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMeContainer;


