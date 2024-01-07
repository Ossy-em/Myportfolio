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
    <h4>Unleashing the potential of JavaScript, HTML5, and CSS, I sculpt unique websites. 
      Infusing creativity and functionality, these languages craft visually stunning,
       responsive interfaces for an immersive user journey across devices. Your digital presence, redefined.</h4>
    </div>

    
    
    <div class="category">
    <FontAwesomeIcon className='icon' icon={faPhoenixFramework} />
    <h1>Framework</h1>
    <h4>Combining React.js and jQuery, I sculpt websites with finesse.
       React.js revolutionizes UI with modular components, while jQuery simplifies DOM manipulation,
       resulting in immersive, responsive web solutions that seamlessly engage and delight users.</h4>
    </div>

    <div class="category">
    <FontAwesomeIcon className='icon' icon={faFigma} /> 
    <h1>Tools</h1>
    <h4>Leveraging Figma and Git, I sculpt captivating designs and streamline collaborative coding.
       Figma's design versatility coupled with Git's robust version control ensures seamless teamwork,
       fostering innovative designs and efficient code management for exceptional project outcomes.</h4>
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