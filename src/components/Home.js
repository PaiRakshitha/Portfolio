import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Corrected CSS import path

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/education'); // Navigate to the Education page
  };

  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      
      {/* Corrected Profile Image Path */}
      <img src={require('../assets/images/pfp.png')} alt="Profile" className="profile-image" />
      
      {/* Introduction */}
      <p>
        Hello! I'm Rakshitha Pai M, I'm currently studying Bachelor's degree in Information Science and Engineering.
      </p>
      <p>
        I love creating new web solutions that combine the latest technology with great user experiences. I'm interested in front-end development. As I continue learning and growing in this field, I'm excited to take on new challenges and work on projects that make a difference. I'm always looking for ways to improve my skills and to work with others who share my passion for technology and design. 
      </p>
      <div className="explore-container">
        <button className="explore-button" onClick={handleExploreClick}>
          EXPLORE NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
