import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import '../styles/Header.css'; // Ensure the path is correct

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <button className="download-btn" onClick={() => window.open('/assets/pdf/cv.pdf', '_blank')}>
        Download CV
      </button>
    </header>
  );
};

export default Header;
