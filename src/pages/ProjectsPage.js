// src/pages/ProjectsPage.js

import React from 'react';
import './ProjectsPage.css';  // Asegúrate de tener este archivo si estás usando estilos específicos para esta página
import './ProjectsPage.css';


const ProjectsPage = () => {
  // Ejemplo de proyectos
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1', image: './assets/images/APps.jpg' },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="projects-page">
      <h1>Proyectos</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
