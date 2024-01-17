import React from 'react';
import ProjectImage from '../images/countriesAPI.PNG';
 // Replace 'your_image.jpg' with your actual image filename
  // project name

const Projects = () => {
  // Define project details
  const projectName = 'CountryAPI'
  const projectUrl = 'https://your_project_url_here';

  

  // Function to open project URL in a new tab 
  const viewProject = () => {
    window.open(projectUrl, '_blank');
  };

  return (

    <div className='project' >

  <h1 className='projecth1'>Completed Projects</h1> 


    <div className="project-card">

{/* Display project name */}
<h2 className="project-name">{projectName}</h2>

{/* Display project image */}
<img src={ProjectImage} alt="Project Screenshot" className="project-image" />



{/* Button to view the project */}
<button onClick={viewProject}>View Project</button>
</div>
    </div>
    
  );
};

export default Projects;
