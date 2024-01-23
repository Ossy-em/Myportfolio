import React from 'react';
import {useNavigate} from 'react-router-dom'

const About = () => {
  let navigatate = useNavigate();
  return (
    <section className="about">
      <div className='about-about'>
      {/* <h1>Hey, I'm Ossy! A Creative </h1> <div className='fd'>Frontend Developer</div> */}
      <h1>Hey, I'm Ossy! A Creative Frontend Developer</h1>
       </div>

      <p>
      I specialize in crafting visually appealing websites and engaging in discussions on current tech trends.</p>

      <div className='main-btn'>
      <button className='about-btn1' onClick={()=>{navigatate('/contact')}}>Contact Me</button> {/*Nagivation button*/}   <button className='about-btn' onClick={()=>{navigatate('/projects')}}>Project</button> {/*Nagivation button*/}

      </div>
      
      <div className='do'>
      <h2>What I do</h2>
     
      <p> I craft sleek, interactive web UIs in collaboration with designers for seamless user experiences. Whether solo or in a team, I excel at coding, integrating features, and transforming designs into high-quality code. My versatility extends to building and managing projects independently, 
        delivering exceptional web solutions.</p>
        <div className='do-do'>
      <h3>07+ <span>Freelance works</span></h3>
      <h3>10+ <span>Completed Projects</span></h3>
      <h3>02+ <span>Years Of Experience</span></h3>
      <h3>05+ <span>Client Reviews</span></h3>
        </div>
      </div>
      
    </section>
  );
};

export default About;


