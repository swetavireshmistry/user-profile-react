import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ 
  name = "John Doe", 
  username = "johndoe", 
  bio = "Frontend developer passionate about creating beautiful and functional user interfaces.", 
  avatarUrl = "https://via.placeholder.com/150" 
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-container">
          <img 
            src={avatarUrl} 
            alt={`${name}'s avatar`} 
            className="avatar"
          />
        </div>
        <div className="user-info">
          <h2 className="full-name">{name}</h2>
          <p className="username">@{username}</p>
          <p className="bio">{bio}</p>
        </div>
      </div>
      <button className="follow-button">Follow</button>
    </div>
  );
};

export default UserProfileCard;
