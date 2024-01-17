import React from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

       {/* Link to scroll to the top of the page */}
      
     
    </div>
  );
};

export default Home;
