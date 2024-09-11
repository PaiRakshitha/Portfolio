import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Certificates.css';

// Import images from the 'src/assets/images' folder
import certi1 from '../assets/images/certi1.png';
import certi2 from '../assets/images/certi2.png';
import certi3 from '../assets/images/certi3.png';
import certi4 from '../assets/images/certi4.png';
import certi5 from '../assets/images/certi5.png';
import certi6 from '../assets/images/certi6.png';
import certi7 from '../assets/images/certi7.png';
import certi8 from '../assets/images/certi8.png';
import certi9 from '../assets/images/certi9.png';
// Add more image imports as necessary

const certificates = [
  {
    id: 1,
    title: 'Technical Career Education Private Limited',
    description: 'MERN Stack With Bootstrap Framework',
    imgUrl: [certi1], // Single image wrapped in an array
  },
  {
    id: 2,
    title: 'Microsoft Azure',
    description: 'Azure AI Document Intelligence and AI Language',
    imgUrl: [certi2, certi3], // Multiple images in an array
  },
  {
    id: 3,
    title: 'Infosys',
    description: 'Introduction to AI, Basics of Python, Enterprise Automation with Python',
    imgUrl: [certi7, certi8, certi9], // Ensure imgUrl is always an array
  },
  {
    id: 4,
    title: 'NVIDIA',
    description: 'Getting started with AI on Jetson Nano',
    imgUrl: [certi5], // Ensure imgUrl is always an array
  },
  {
    id: 5,
    title: 'Google',
    description: 'Game Development with PyGame',
    imgUrl: [certi4], // Single image wrapped in an array
  },
  {
    id: 6,
    title: 'Wadhwani',
    description: 'JobReady Employability Skills',
    imgUrl: [certi6], // Single image wrapped in an array
  },
];

const Certificate = () => {
  const navigate = useNavigate();

  const handleViewClick = (pdfUrl, imgUrl) => {
    navigate('/certificate-detail', { state: { pdfUrl, imgUrl } });
  };

  return (
    <div className="certificate-container">
      {certificates.map((certificate) => (
        <div key={certificate.id} className="certificate-item">
          <h2>{certificate.title}</h2>
          <p>{certificate.description}</p>
          <button
            className="view-button"
            onClick={() => handleViewClick(certificate.pdfUrl, certificate.imgUrl)}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
