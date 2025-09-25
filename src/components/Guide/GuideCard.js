import React from 'react';
import '../../styles/GuideCard.css';

const GuideCard = ({ guide }) => {
  return (
    <div className="guide-card">
      <img src={guide.image} alt={guide.title} className="guide-card-image" />
      <div className="guide-card-content">
        <h3 className="guide-card-title">{guide.title}</h3>
        <p className="guide-card-description">{guide.description}</p>
        <div className="guide-card-tags">
          {guide.tags.map((tag, index) => (
            <span key={index} className="guide-card-tag">{tag}</span>
          ))}
        </div>
        <div className="guide-card-actions">
          <button>Open</button>
          <button>Favorite</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;