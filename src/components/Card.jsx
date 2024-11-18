import React from "react";
import "../styles/card.css";
import image from "../assets/images/offersmodel.jpg"; 
import tasklogo from "../assets/icons/in-progress.svg"; 
import priorityIcons from "../utils/priorityIcons"; 
import statusIcons from "../utils/statusIcons"; 
import userImages from "../utils/userImage"; 
import tagIcon from "../assets/icons/circle.png"

const Card = ({ ticket, user, isGroupedByUser }) => {
  const priorityIcon = priorityIcons[ticket.priority]?.icon || tasklogo;
  const normalizedStatus = ticket.status?.trim().toLowerCase();
  const statusIcon = statusIcons[normalizedStatus] || tasklogo;

  const userImage = userImages[user.id] || image;

  return (
    <div className="card-container">
      <div className="card-username">
        <div className="card-details">
          <div className="card-id">{ticket.id}</div>
          <div className="card-user-toggle">
            {isGroupedByUser && (
              <img src={statusIcon} alt={`${ticket.status} icon`} className="status-icon" />
            )}
            <p className="card-title">{ticket.title}</p>
          </div>
        </div>
        {!isGroupedByUser && (
          <div className="avatar-container">
            <img
              src={userImage}
              alt={`${user.name}'s avatar`}
              className="card-user-avatar"
            />
            {user.available && <div className="availability-indicator-card"></div>}
          </div>
        )}
      </div>
      <div className="card-task">
        <img src={priorityIcon} alt="priority logo" className="card-priority" />
        <div className="card-tags">
          {ticket.tag.map((tag, index) => (
            <div key={index} className="tag-container">
              <img src={tagIcon} alt="tag icon" className="tag-icon" />
              <div className="card-tag">
                <p>{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
