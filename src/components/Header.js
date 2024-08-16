import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="header-actions">
        <a href="/assets/pdf/CV.pdf" download="CV.pdf" className="download-btn">
          Download CV
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;

