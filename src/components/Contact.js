import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>CONTACT ME</h2>
      <div className="contact-buttons">
        <a href="https://github.com/Rakshitha-Pai" target="_blank" rel="noopener noreferrer" className="contact-btn github-btn">GitHub</a>
        <a href="https://www.linkedin.com/in/rakshitha-pai-m-00079b21b" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin-btn">LinkedIn</a>
        <a href="mailto:rakshithapaim107@gmail.com" className="contact-btn email-btn">Email Me</a>
      </div>
    </section>
  );
}

export default Contact;
