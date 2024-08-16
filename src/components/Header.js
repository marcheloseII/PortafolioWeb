// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import '../styles/Header.css'; // Asegúrate de que la ruta es correcta

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
