import React from 'react';
import './UserProfileCard.css';
import { useProfile } from '../../context/ProfileContext';

const UserProfileCard = ({ 
  name = "John Doe", 
  username = "johndoe", 
  bio = "Frontend developer passionate about creating beautiful and functional user interfaces.", 
  avatarUrl = "https://via.placeholder.com/150",
  location = "San Francisco, CA",
  isOwnProfile = false
}) => {
  const { isFollowing, toggleFollow } = useProfile();

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
          
          {location && (
            <div className="location-container">
              <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="location-text">{location}</p>
            </div>
          )}
        </div>
      </div>
      
      <button 
        className={`follow-button ${isOwnProfile ? 'own-profile' : ''} ${isFollowing ? 'following' : ''}`}
        onClick={toggleFollow}
        disabled={isOwnProfile}
      >
        {isOwnProfile ? 'Own Profile' : (isFollowing ? 'Following' : 'Follow')}
      </button>
    </div>
  );
};

export default UserProfileCard;
