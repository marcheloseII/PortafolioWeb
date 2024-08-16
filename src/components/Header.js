import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLanguageChange, currentLanguage }) => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="language-switcher">
                <select value={currentLanguage} onChange={onLanguageChange}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
