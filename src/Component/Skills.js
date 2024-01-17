import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div class="skills">
      <h2 className="skil">My Skills</h2> 
      <div className='sc'>
      <div class="category">

      <FontAwesomeIcon className='icon' icon={faLanguage}></FontAwesomeIcon>
    <h1>Language</h1>
    <p>Leveraging JavaScript, HTML5, and CSS, I design distinctive websites that blend creativity and functionality.
       These languages create visually striking, responsive interfaces for an immersive user journey on all devices. 
       Redefining your digital presence.</p>
    </div>

    
    
    <div class="category">
    <FontAwesomeIcon className='icon' icon={faPhoenixFramework} />
    <h1>Framework/Libaries</h1>
    <p>Combining React.js and Next.js, I sculpt websites with finesse.
       React.js revolutionizes UI with modular components,while Next.js simplifies server-side rendering, 
      resulting in immersive, responsive web solutions that seamlessly engage and delight users.</p>
    </div>

    <div class="category">
    <FontAwesomeIcon className='icon' icon={faFigma} /> 
    <p className='category-name'>Tools</p>
    <p>Utilizing Figma and Git, I design and code collaboratively. Figma's versatility, 
      paired with Git's version control, ensures seamless teamwork, fostering innovative 
      designs and efficient code management for exceptional outcomes.</p>
    </div>

       </div>
</div>    
  );
};

export default Skills;


// <h2 className="skil">My Skills</h2> 
//       <div className='sc'>
//       <div class="category">
//     <h1>Language</h1>
//     <div class="skills-item">JavaScript</div>
//     <div class="skills-item">HTML5</div>
//     <div class="skills-item">CSS</div>
//     <div class="skills-item">Python</div>
//   </div>

//   <div class="category">
//     <h1>Framework</h1>
//     <div class="skills-item">React.js</div>
//     <div class="skills-item">jQuery</div>
//   </div>

//   <div class="category-3">
//     <h1>Tools</h1>
//     <div class="skills-item">Figma</div>
//     <div class="skills-item">Git</div>
//   </div>
//       </div>