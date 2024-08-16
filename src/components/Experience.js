// src/components/Experience.js
import React from 'react';
import '../styles/Experience.css'; // Asegúrate de que la ruta sea correcta

function Experience() {
  return (
    <div className="experience">
      <h2>Experiencia Laboral</h2>
      <div className="job">
        <h3>P&G</h3>
        <h3>Scrum Master //It Engeneer</h3>
        <p><strong>Julio 2024 - Presente</strong></p>
        <ul>
          <li>
            Lidero todos los procesos de Scrum para equipos multifuncionales, asegurando la entrega eficiente y efectiva de proyectos mediante la aplicación de metodologías ágiles y la gestión de prioridades.
          </li>
          <li>
            Coordino la comunicación entre las partes interesadas y el equipo de desarrollo, facilitando reuniones diarias, revisiones de sprint y retrospectivas para optimizar el flujo de trabajo y resolver impedimentos.
          </li>
          <li>
            Implemento estrategias de gestión del cambio para asegurar la adaptación a nuevas tecnologías y procesos, proporcionando formación y apoyo continuo a los miembros del equipo para mejorar la productividad y la colaboración.
          </li>
        </ul>
      </div>
      <div className="job">
        <h3>Amazon</h3>
        <h3>Team manager Amazon game studios</h3>
        <p><strong>Sep. 2017 a Ago. 2023</strong></p>
        <ul>
          <li>
            Brindé apoyo administrativo al equipo de más de 18 asociados y los gestioné para lograr constantemente y mejorar los niveles de servicio basados en pronósticos y capacidad, minimizando las áreas de mejora.
          </li>
          <li>
            Lideré varios proyectos, eventos Gemba y Kaizens, enfatizando la gestión de datos, habilidades blandas, cumplimiento de políticas de Amazon y trabajo en equipo. Este esfuerzo colectivo mejoró sustancialmente nuestros informes y automatizó más de 100 archivos de Excel, guiando a los compañeros hacia nuestro objetivo organizacional.
          </li>
          <li>
            Me encargué de desarrollar un conocimiento detallado sobre indicadores clave de rendimiento (KPIs) específicos, enviando informes y ofreciendo coaching y consejos para mejorarlos y hacerlos visibles para los CSAs.
          </li>
        </ul>
      </div>
      <div className="skills">
        <h3>Lenguajes de Programación</h3>
        <ul>
          <li>C# (Intermedio)</li>
          <li>C++ (Intermedio)</li>
          <li>Python (Intermedio)</li>
          <li>Java (Programación Orientada a Objetos) (Intermedio)</li>
          <li>JavaScript (Intermedio)</li>
          <li>CSS/Bootstrap (Intermedio)</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
