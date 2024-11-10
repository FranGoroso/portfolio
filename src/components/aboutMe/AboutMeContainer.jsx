import React from "react";
import './AboutMe.css'; 

function AboutMeContainer() {
  return (
    <section className="aboutMe-container">
      <div className="aboutMe-card">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Eligendi optio doloremque molestiae consectetur commodi 
          odit autem veritatis perspiciatis quaerat hic voluptates, 
          sit consequuntur fugiat beatae harum porro quos debitis mollitia.
        </p>
        <button className="contact-me-btn">Contáctame</button>
      </div>
    </section>
  );
}

export default AboutMeContainer;
