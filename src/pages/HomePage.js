// src/pages/HomePage.js
import React from 'react';
import AboutMe from '../components/AboutMe'; // Asegúrate de que la ruta sea correcta
import Experience from '../components/Experience'; // Asegúrate de que la ruta sea correcta
import '../styles/HomePage.css'; // Añade un archivo CSS para la página principal

function HomePage() {
  return (
    <div className="home-page">
      <div className="header-section">
        <h1>Asdrubal Marcelo Segura Esquivel</h1>
        <img src={require('../assets/images/profile.jpg')} alt="Perfil" className="profile-image" />
      </div>
      <div className="main-content">
        <div className="left-column">
          <AboutMe />
        </div>
        <div className="right-column">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
