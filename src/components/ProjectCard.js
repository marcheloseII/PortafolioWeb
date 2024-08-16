import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <img src={project.image} alt={project.title} className="project-card-image" />
                <h3 className="project-card-title">{project.title}</h3>
            </div>
            <p className="project-card-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">View Project</a>
        </div>
    );
};

export default ProjectCard;
