
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <h1>OE</h1>
        <ul className="nav-links">
          {location.pathname === '/' ? (
           <div>
            <li>
              <Link to="/"><FaHome /> Home</Link>
            </li>
             <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link>Resume</Link>  
          </li>
           </div>
          ) :
          
          (
            <div>
               <li>
              
              <Link to="/"><FaHome /> Home</Link> </li>
             
             <li><Link >
               Projects
              </Link></li> 
            </div>
           
            
          )}
          
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      {/* Add the Back to Top link here if needed */}
    </header>
  );
};

export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';


// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav">
//         <div className="logo">
//           <Link to="/">Your Logo</Link>
//         </div>
//         <ul className="menu">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           {/* Link for Resume component */}
//           <li><Link to="/resume">Resume</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
