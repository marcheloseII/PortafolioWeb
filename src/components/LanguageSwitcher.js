import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ onLanguageChange, currentLanguage }) => {
    return (
        <div className="language-switcher">
            <select value={currentLanguage} onChange={onLanguageChange}>
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
