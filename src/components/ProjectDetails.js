import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';

// Import images
import Image3 from '../assets/images/3.png';
import Image4 from '../assets/images/4.png';
import Image5 from '../assets/images/5.png';
import Image6 from '../assets/images/6.png';
import Image7 from '../assets/images/7.png';
import Image8 from '../assets/images/8.png';
import Image9 from '../assets/images/9.png';
import Image10 from '../assets/images/10.png';
import Image11 from '../assets/images/11.png';
import Image12 from '../assets/images/12.png'; // Added for Project 4
import Image13 from '../assets/images/13.png'; // Added for Project 4
import Image14 from '../assets/images/14.png'; // Added for Project 4

const ProjectDetails = () => {
  const { projectId } = useParams();

  if (projectId === "1") {
    return (
      <div className="project-details">
        <h2>Predictive Modeling for Hairfall Detection</h2>
        <p>
          Developed a machine learning model to predict the likelihood of hair loss based on individual factors,
          enabling early intervention. Systematically gathers data through web surveys using Google Forms.
        </p>
        <p>
          Analyzes various factors contributing to hair loss and provides a high or low-risk prediction.
        </p>
        
        <h3>Demo Screenshots</h3>
        <div className="project-images">
          <div className="image-section">
            <img src={Image3} alt="Gender Selection" />
            <p>Input Screen</p>
          </div>

          <div className="image-section">
            <img src={Image4} alt="Hairfall Risk" />
            <p>Avg number of Hairfall per day.</p>
          </div>
        </div>

        <div className="project-images">
          <div className="image-section">
            <img src={Image5} alt="Low Hairfall Risk" />
            <p>Low Risk Prediction</p>
          </div>
        </div>

        <h3>Technologies Used:</h3>
        <ul>
          <li>Python</li>
          <li>ReactJS</li>
          <li>Numpy</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    );
  } else if (projectId === "2") {
    return (
      <div className="project-details">
        <h2>Dance Workshop Management System</h2>
        <p>
          A comprehensive solution designed to streamline administrative processes involved in organizing and managing dance workshops. 
          It simplifies tasks such as registration, scheduling, instructor management, inquiry, and reporting, thereby enhancing efficiency and effectiveness.
        </p>

        <h3>Demo Screenshots</h3>
        <div className="project-images">
          <div className="image-section">
            <img src={Image6} alt="Workshop Registration" />
            <p>Registration Page</p>
          </div>
          <div className="image-section">
            <img src={Image7} alt="Schedule Management" />
            <p>Schedule Management Interface</p>
          </div>
          <div className="image-section">
            <img src={Image8} alt="Instructor Management" />
            <p>Instructor Management Dashboard</p>
          </div>
        </div>

        <h3>Technologies Used:</h3>
        <ul>
          <li>ReactJS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
      </div>
    );
  } else if (projectId === "3") {
    return (
      <div className="project-details">
        <h2>Food Recipe Management</h2>
        <p>
          A comprehensive solution designed for managing and discovering food recipes, including user reviews and ratings.
        </p>

        <h3>Demo Screenshots</h3>
        <div className="project-images">
          <div className="image-section">
            <img src={Image9} alt="Recipe Registration" />
            <p>Recipe Registration Page</p>
          </div>
          <div className="image-section">
            <img src={Image10} alt="Recipe Search" />
            <p>Recipe Search Interface</p>
          </div>
          <div className="image-section">
            <img src={Image11} alt="Recipe Reviews" />
            <p>Recipe Reviews Dashboard</p>
          </div>
        </div>

        <h3>Technologies Used:</h3>
        <ul>
          <li>ReactJS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul>
      </div>
    );
  } else if (projectId === "4") {
    return (
      <div className="project-details">
        <h2>Student Management System</h2>
        <p>
          A comprehensive solution involved in developing a scalable Student Management System using MongoDB.
        </p>

        <h3>Demo Screenshots</h3>
        <div className="project-images">
          <div className="image-section">
            <img src={Image12} alt="Student Registration" />
            <p>Student Registration Page</p>
          </div>
          <div className="image-section">
            <img src={Image13} alt="Student Search" />
            <p>Student Search Interface</p>
          </div>
          <div className="image-section">
            <img src={Image14} alt="Student Reviews" />
            <p>Student Reviews Dashboard</p>
          </div>
        </div>

        <h3>Technologies Used:</h3>
        <ul>
          <li>ReactJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul>
      </div>
    );
  } else {
    return <div>No Project Found!</div>;
  }
};

export default ProjectDetails;
