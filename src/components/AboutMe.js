// src/components/AboutMe.js
import React from 'react';
import '../styles/AboutMe.css';          // Asegúrate de que la ruta es correcta
import profileImage from '../assets/images/profile.jpg'; // Asegúrate de que la ruta es correcta

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profileImage} alt="Profile" />
      <h1>About Me</h1>
      {/* Contenido de la sección */}
    </div>
  );
}

export default AboutMe;
