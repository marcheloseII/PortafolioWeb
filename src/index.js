// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css'; // Importa el archivo de estilos globales

// Renderiza el componente App dentro del elemento con id 'root' en el HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
