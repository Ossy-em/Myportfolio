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
       <span className='bottom'
        onClick={scrollToTop}
        style={{
          // textDecoration: 'none',
          // color: 'white',
          // cursor: 'pointer',
          // display: 'inline',
          // padding: '0',
          // margin: '0',
          // fontSize: '25px',
          // fontFamily: 'Pacifico-Regular',
          // marginBottom: '120p0x',
          // marginLeft: '120px',
          // background: 'transparent',
          
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'inline',
        padding: '10px', // Adjust padding as needed
        fontSize: '25px',
        fontFamily: 'Pacifico-Regular',
        position: 'absolute ', // Set the position to fixed
        bottom: '-110%', // Adjust the distance from the bottom
        left: '210px', // Adjust the distance from the right
        background: 'transparent',
        }}
      >
        Home
      </span>

      {/* Link to scroll to the Projects section */}
      <Link className='bottom'
        to="/projects"
        onClick={scrollToProjects}
        style={{
            
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'inline',
        padding: '10px', // Adjust padding as needed
        fontSize: '25px',
        fontFamily: 'Pacifico-Regular',
        position: 'absolute ', // Set the position to fixed
        bottom: '-110%', // Adjust the distance from the bottom
        left: '320px', // Adjust the distance from the right
        background: 'transparent',
        }}
      >
        Projects
      </Link>

     
    </div>
  );
};

export default Home;
