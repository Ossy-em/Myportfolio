
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome } from 'react-icons/fa';

// const Header = () => {
//   const location = useLocation();

//   return (
//     <header>
//       <nav>
//         <h1>OE</h1>
//         <ul className="nav-links">
//           {location.pathname === '/' ? (
//            <div>
//             <li>
//               <Link to="/"><FaHome /> Home</Link>
//             </li>
//              <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//             <Link>Resume</Link>  
//           </li>
//            </div>
//           ) :
          
//           (
//             <div>
//                <li>
              
//               <Link to="/"><FaHome /> Home</Link> </li>
             
//              <li><Link >
//                Projects
//               </Link></li> 
//             </div>
           
            
//           )}
          
//           {/* Add other navigation links as needed */}
//         </ul>
//       </nav>
//       {/* Add the Back to Top link here if needed */}
//     </header>
//   );
// };

// export default Header;
// import React, { useRef } from 'react';
// import { FaBars, FaTimes} from 'react-icons/fa';

// function Navbar() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   }

//   return (
//    <header>
//     <h3>OE</h3>
      
//         <nav ref={navRef}>
//       <a  href ="/">Home</a> 
//       <a  href="/">Blog</a>
//       <a  href="/">About me</a>
   
//       <button className='nav-btn nav-close-btn' onClick={showNavbar} >
//         <FaTimes/>
//       </button>
//       </nav>
//       <button className='nav-btn 'onClick={showNavbar}>
//         <FaBars/>
//       </button>
//    </header>
//   );
// }

// export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>OE</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Projects</a>
				<a href="/#">Resume</a>
				<a href="/#">Contact</a>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
