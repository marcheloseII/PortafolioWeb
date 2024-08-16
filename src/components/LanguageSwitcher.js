import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css'; // Assuming you have styles for this

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} defaultValue={i18n.language} className="language-switcher">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
