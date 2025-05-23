import React, { createContext, useState, useContext } from 'react';

// Create the context
const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Toggle follow state
  const toggleFollow = () => {
    setIsFollowing(prevState => !prevState);
  };

  // Context value
  const value = {
    isFollowing,
    toggleFollow
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
