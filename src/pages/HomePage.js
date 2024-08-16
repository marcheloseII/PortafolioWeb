// src/pages/HomePage.js
import React from 'react';
import ProjectsPage from './ProjectsPage'; // Asegúrate de que la ruta es correcta

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <ProjectsPage /> {/* Asegúrate de que el componente está importado correctamente */}
    </div>
  );
}

export default HomePage;
