// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsPage from './ProjectsPage';


const ProjectsPage = () => {
  // Ejemplo de proyectos
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1', image: '.\PortafolioWeb\src\assests\images\APps.jpg' },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="projects-page">
      <h2>Mis Proyectos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
