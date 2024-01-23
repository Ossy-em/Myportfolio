// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faGithub, faYahoo,  faTwitter } from '@fortawesome/free-brands-svg-icons'; // Use 'free-brands-svg-icons' for brand icons

// const Contact = () => {
//   const githubLink = 'https://github.com/YourGitHubUsername'; // Replace 'YourGitHubUsername' with your GitHub username
//   const email = 'emosinachi@gmail.com'; // Replace with your email address
//   const xLink = 'https://twitter.com/OSsyFCB'; // Replace with your 'X' social media link

//   return (
//     <>
//     <div className='contact-container'>
      
//       <a className='contact-link' href={githubLink} target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={faGithub} size='2x'/> 
//       </a>

      
//       <a className='contact-link' href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={faYahoo} size='2x' />       
//       </a>

      
//       <a className='contact-link' href={xLink} target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={ faTwitter} size="2x"/>
//       </a>
//       </div>
//       <div className="app-container">
//       {/* <h1>Welcome to My React App</h1> */}
//       <hr className="horizontal" />
//     </div>
    
//     </>
//   );
// };


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYahoo, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align the top of the element with the top of the visible area
      });
    }
  };

  return (
    <>
      <div className='contact-container'>
        <button className='contact-link' onClick={scrollToContact}>
          <FontAwesomeIcon icon={faGithub} size='2x'/>
        </button>

        <button className='contact-link' onClick={scrollToContact}>
          <FontAwesomeIcon icon={faYahoo} size='2x' />
        </button>

        <button className='contact-link' onClick={scrollToContact}>
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </button>
      </div>
      <div className="app-container">
        <hr className="horizontal" />
        <div id="contact-section">
          {/* Your contact content goes here */}
        </div>
      </div>
    </>
  );
};

export default Contact;
