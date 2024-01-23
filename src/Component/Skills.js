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
    <p className='category-name'>Language</p>
    <p>Leveraging JavaScript, HTML5, and CSS, I design distinctive websites that blend creativity and functionality.
       These languages create visually striking, responsive interfaces for an immersive user journey on all devices. 
       Redefining your digital presence.</p>
    </div>

    
    
    <div class="category">
    <FontAwesomeIcon className='icon' icon={faPhoenixFramework} />
    <p className='category-name'> Framework/Libaries</p>
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

