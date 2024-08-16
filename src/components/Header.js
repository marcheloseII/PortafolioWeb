import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const handleLanguageChange = (event) => {
    // Handle language change logic here
  };

  return (
    <header>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="header-actions">
        <button className="download-btn" onClick={() => window.open('/assests/pdf/CV Asdrubal Marcelo Segura Esquivel.docx.pdf', '_blank')}>
          Download CV
        </button>
        <div className="language-switcher">
          <select onChange={handleLanguageChange} defaultValue="en">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
