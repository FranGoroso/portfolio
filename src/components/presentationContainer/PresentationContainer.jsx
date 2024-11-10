import '../presentationContainer/presentationContainer.css'
import React from 'react';

function PresentationContainer() {
  return (
    <section className="header-container">
      <div className="presentation-card">
        <h1>¡Hola, soy Francisco!</h1>
        <p>
          Soy un desarrollador frontend con experiencia en React, CSS, y
          frameworks modernos. Me apasiona crear interfaces atractivas y
          funcionales.
        </p>
        <button className="cta-button">Descargar CV</button>
      </div>

      <div className="profile-section">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/200"
            alt="Foto de perfil"
            className="profile-picture"
          />
        </div>

        <div className="small-card">
          <h3>Información adicional</h3>
          <p>Detalles sobre mi experiencia o alguna pequeña descripción.</p>
        </div>
      </div>
    </section>
  );
}

export default PresentationContainer;
