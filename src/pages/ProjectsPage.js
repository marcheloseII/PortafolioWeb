// src/pages/ProjectsPage.js

import React from 'react';
import './ProjectsPage.css';
import APpsImage from '../assets/images/APps.jpg';  // Import the image

const ProjectsPage = () => {
  // Example projects
  const projects = [
    { id: 1, title: 'My Daily Task App', description: 'Aplicacion de tareas diarias', image: APpsImage },
    // Add more projects here
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
