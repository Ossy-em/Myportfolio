import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Projects from './Component/Projects';
import Resume from './Component/Resume';
import Home from './Component/Home';
// import ProjectDisplay from './Component/ProjectDisplay';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Route for the scrolling sections */}
          <Route path="/" element={<Home />} />
          {/* Routes for different pages */}
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:id" element={<ProjectDisplay />} />  */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
