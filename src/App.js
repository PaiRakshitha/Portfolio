import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails'; // Import the ProjectDetails component
import CertificateDetail from './components/CertificateDetail'; // Import CertificateDetail component
import Footer from './components/Footer'; // Import Footer component
import './App.css';

const App = () => {
  return (
    // Add basename to ensure the app works properly when hosted on GitHub Pages
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar /> {/* Navigation bar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />

            {/* Route for Project Details */}
            <Route path="/project-details/:projectId" element={<ProjectDetails />} />
            
            {/* Route for Certificate Detail */}
            <Route path="/certificate-detail" element={<CertificateDetail />} />
          </Routes>
        </div>
        <Footer /> {/* Footer component at the bottom */}
      </div>
    </Router>
  );
};

export default App;
