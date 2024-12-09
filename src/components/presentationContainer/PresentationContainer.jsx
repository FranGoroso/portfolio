import '../presentationContainer/presentationContainer.css'
import React from 'react';
import profileImage from '../../assets/img/foto_perfil_fran.jpg';

function PresentationContainer() {
  return (
    <section className="header-container">
      <div className="presentation-card">
        <h1>¡Hola, soy Francisco! Soy un desarrollador frontend</h1>
        <p>
        Me especializo en tecnologías como React, JavaScript, CSS y frameworks modernos, con un enfoque constante en mejorar la experiencia del usuario a través de 
        soluciones eficientes y dinámicas. <br/><br/>
        Cada proyecto es una oportunidad para combinar creatividad y funcionalidad, manteniendo siempre el diseño centrado en las 
        necesidades del usuario.
        </p>
        <button className="cta-button">Descargar CV</button>
      </div>

      <div className="profile-section">
        <div className="profile-card">
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="profile-picture"
          />
        </div>

        <div className="small-card">
          <h3>Información adicional</h3>
          <p>-Actualmente estudiante en ciberseguridad en UCASAL. <br/>
          -Viviendo en Andorra pero dispuesto a regresar a Argentina <br/>
          por oportunidades laborales desafiantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PresentationContainer;
