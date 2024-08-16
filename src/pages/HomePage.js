// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import ProjectsPage from './ProjectsPage';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default HomePage;
