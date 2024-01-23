import React from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


const Home = () => {
 



  return (
    
    <div >
      
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
