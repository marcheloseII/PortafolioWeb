// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe'; // Asegúrate de que la ruta sea correcta
import Experience from '../components/Experience'; // Asegúrate de que la ruta sea correcta
import '../styles/HomePage.css'; // Añade un archivo CSS para la página principal

function HomePage() {
  const [showProfileImage, setShowProfileImage] = useState(true);

  // Toggle the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowProfileImage(prev => !prev);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="home-page">
      <div className="header-section">
        <h1>Asdrubal Marcelo Segura Esquivel</h1>
        <div className="image-container">
          <img
            src={require('../assets/images/profile.jpg')}
            alt="Perfil"
            className={`profile-image ${showProfileImage ? 'fade-in' : 'fade-out'}`}
          />
          <img
            src={require('../assets/images/Amse.jpg')}
            alt="Amse"
            className={`profile-image ${!showProfileImage ? 'fade-in' : 'fade-out'}`}
          />
        </div>
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
