import React from "react";
import './AboutMe.css'; 

function AboutMeContainer() {
  return (
    <section className="aboutMe-container">
      <div className="aboutMe-card">
        <h2>About Me</h2>
        <p>
        Soy un apasionado desarrollador frontend con experiencia en la creación de aplicaciones web modernas y funcionales. 
        Me encanta combinar diseño y funcionalidad para construir interfaces que no solo sean estéticamente agradables, sino 
        también intuitivas y accesibles para los usuarios. <br/><br/>
        A lo largo de mi trayectoria, he trabajado con tecnologías como React, JavaScript, CSS, y frameworks modernos. 
        Estoy constantemente aprendiendo y mejorando mis habilidades, buscando desafíos que me permitan crecer profesional y personalmente. 
        Mi objetivo es aportar soluciones creativas y eficientes que marquen la diferencia en cada proyecto.
        </p>
        <button className="contact-me-btn">Contáctame</button>
      </div>
    </section>
  );
}

export default AboutMeContainer;
