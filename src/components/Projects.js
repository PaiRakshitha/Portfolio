import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      
      

      

      {/* Predictive Modeling for Hairfall Detection Project */}
      <div className="project">
        <p>Predictive Modeling for Hairfall Detection </p>
        <Link to="/project-details/1">
          <button className="details-button">View Details</button>
        </Link>
      </div>

      {/* Dance Management Project */}
      <div className="project">
        <p>Dance Workshop Management System </p>
        <Link to="/project-details/2">
          <button className="details-button">View Details</button>
        </Link>
      </div>
      {/* FoodRecipe Project */}
      <div className="project">
        <p>Food Recipe Management</p>
        <Link to="/project-details/3">
          <button className="details-button">View Details</button>
        </Link>
      </div>
      {/* Student MAnagement Project */}
      <div className="project">
        <p>Student Management System.</p>
        <Link to="/project-details/4">
          <button className="details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
