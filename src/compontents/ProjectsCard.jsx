import React, { useState } from 'react';
import '../styles/projects-cards.css';

const ProjectCard = ({ title, description, demoLink, sourceLink, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false); // Stato per tracciare se la card è aperta

  const toggleCard = () => {
    setIsOpen(prevState => !prevState); // Cambia stato ogni volta che la card viene cliccata
  };

  return (
    <div className={`project-card ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
      <img
        src={imageUrl}  
        alt={title}      
        style={{
          width: '100%',          
          height: 'auto',         
          objectFit: 'cover',
        }}
      />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="card_buttons">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="card__button">More info</button>
          </a>
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <button className="card__button secondary">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
