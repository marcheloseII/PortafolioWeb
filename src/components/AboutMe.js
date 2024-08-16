import React from 'react';
import '../styles/AboutMe.css'; // Asegúrate de que la ruta sea correcta
import profileImage from '../assets/images/profile.jpg'; // Importa la imagen

function AboutMe() {
  return (
    <div className="about-me">
      <section className="info-section">
        <div className="mission-vision-values">
          <h2>Misión</h2>
          <p>
            Contribuir de manera significativa al avance de la tecnología mediante la creación de soluciones innovadoras y eficaces, estar actualizado con las últimas tendencias y tecnologías del campo, buscar mejorar y adaptarse a los cambios que puedan tener en la empresa.
          </p>
          <h2>Visión</h2>
          <p>
            Aspirar a ser un desarrollador reconocido por abordar desafíos técnicos con creatividad y eficacia. Crecer profesionalmente, adquiriendo nuevas competencias y asumiendo roles de liderazgo que me permitan guiar a otros en su desarrollo profesional. Ser parte de proyectos de vanguardia que beneficien a la empresa y la sociedad.
          </p>
          <h2>Valores Personales</h2>
          <ul>
            <li>Integridad</li>
            <li>Pasión por el aprendizaje</li>
            <li>Innovación</li>
            <li>Colaboración</li>
            <li>Adaptabilidad</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
