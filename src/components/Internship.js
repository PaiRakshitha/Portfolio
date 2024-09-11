import React from 'react';
import '../styles/Internship.css';

// Import images directly
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';

const Internship = () => {
  return (
    <div className="internship">
      <h3>Web-based Grievance Portal</h3>
      <div className="internship-details">
        <p><strong>Company:</strong> Niveus Solutions</p>
        <p><strong>Duration:</strong> 9-Oct-2023 – 4-Nov-2023</p>
        <p><strong>Location:</strong> Mangaluru, India</p>
        <p className="justified"><strong>Description:</strong> Developed a platform providing Indian citizens a streamlined platform to raise complaints about various government departments using AI technology and user-friendly interfaces.</p>
      </div>

      <div className="internship-images">
        <div className="internship-image">
          <img src={img1} alt="Grievance Portal Screenshot 1" />
        </div>
        <div className="internship-image">
          <img src={img2} alt="Grievance Portal Screenshot 2" />
        </div>
      </div>

      <div className="internship-responsibilities">
        <h4>Responsibilities:</h4>
        <ul className="justified">
          <li>Created wireframes for a mobile journaling app and the grievance portal using Balsamiq.</li>
          <li>Developed key pages like login and signup using ReactJS, ensuring intuitive navigation.</li>
          <li>Tested functionalities using Postman for complaint submission and retrieval.</li>
          <li>Implemented an AI model to automatically classify complaints.</li>
          <li>Built admin features for managing complaints.</li>
        </ul>
      </div>

      <div className="internship-technologies">
        <h4>Technologies:</h4>
        <ul className="justified">
          <li>ReactJS</li>
          <li>AI</li>
          <li>Balsamiq</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default Internship;
