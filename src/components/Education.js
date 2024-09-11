import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      
      {/* Education Details */}
      <div className="education-card">
        <h3>Bachelor of Engineering in Information Science and Engineering</h3>
        <p><strong>Institution:</strong> Sahyadri College of Engineering and Management</p>
        <p><strong>Location:</strong> Mangaluru, India</p>
        <p><strong>Marks:</strong> 7.5 CGPA</p>
        <p><strong>Year of Passing:</strong> 2025</p>
      </div>

      <div className="education-card">
        <h3>12th Grade - Department of Pre University Education</h3>
        <p><strong>Institution:</strong> K.V.G Amarajyothi Pre-University College</p>
        <p><strong>Location:</strong> Sullia, India</p>
        <p><strong>Marks:</strong> 79%</p>
        <p><strong>Year of Passing:</strong> 2021</p>
      </div>

      <div className="education-card">
        <h3>10th Grade - Central Board of Secondary Education</h3>
        <p><strong>Institution:</strong> K.V.G International Public School</p>
        <p><strong>Location:</strong> Sullia, India</p>
        <p><strong>Marks:</strong> 64%</p>
        <p><strong>Year of Passing:</strong> 2019</p>
      </div>
    </div>
  );
};

export default Education;
