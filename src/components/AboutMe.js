import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/images/profile.jpg';

const AboutMe = () => {
    return (
        <section className="about-me">
            <img src={profileImage} alt="Profile" />
            <h1>Hello, I'm Your Name</h1>
            <p>Brief introduction about yourself and your professional background.</p>
        </section>
    );
};

export default AboutMe;
