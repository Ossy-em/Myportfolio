import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYahoo,  faTwitter } from '@fortawesome/free-brands-svg-icons'; // Use 'free-brands-svg-icons' for brand icons

const Contact = () => {
  const githubLink = 'https://github.com/YourGitHubUsername'; // Replace 'YourGitHubUsername' with your GitHub username
  const email = 'emosinachi@gmail.com'; // Replace with your email address
  const xLink = 'https://twitter.com/OSsyFCB'; // Replace with your 'X' social media link

  return (
    <div className='contact-container'>
      

      
      <a className='contact-link' href={githubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size='2x'/>
       
      </a>

      
      <a className='contact-link' href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYahoo} size='2x' />
        
      </a>

      
      <a className='contact-link' href={xLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={ faTwitter} size="2x"/>
        
      </a>
      <div className="app-container">
      {/* Your main content */}
      <h1>Welcome to My React App</h1>
      {/* Other content */}

      {/* Line at the bottom */}
      <hr className="horizontal" />
    </div>
    </div>
  );
};



export default Contact;
