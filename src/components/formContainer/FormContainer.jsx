import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'; 
import './FormContainer.css';

function FormContainer() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu mensaje!',
      text: 'Tu mensaje se ha enviado correctamente.',
      confirmButtonText: 'Cerrar'
    });
  };

  if (state.succeeded) {
    showSuccessAlert(); 
  }

  return (
    <section className="contact-form-container">
      <div className="contact-form-card" data-aos="fade-up">
        <h2>Contáctame</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" data-aos="fade-left">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group" data-aos="fade-left">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              required
            />
            <ValidationError
              prefix="Correo"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group" data-aos="fade-left">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
            <ValidationError
              prefix="Mensaje"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="cta-button" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormContainer;
