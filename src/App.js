import React, { useState } from 'react';
import './App.css';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  const toggleOwnProfile = () => {
    setIsOwnProfile(prev => !prev);
  };

  return (
    <div className="App">
      <h1>User Profile Card</h1>
      <div className="toggle-container">
        <button onClick={toggleOwnProfile} className="toggle-button">
          {isOwnProfile ? 'Show as Other User' : 'Show as Own Profile'}
        </button>
      </div>
      <ProfileProvider>
        <UserProfileCard 
          location="San Francisco, CA" 
          isOwnProfile={isOwnProfile} 
        />
      </ProfileProvider>
    </div>
  );
}

export default App;
