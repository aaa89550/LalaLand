import React, { useState } from 'react';
import AvatarUpload from './AvatarUpload';

const ProfileSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    // Save the updated profile settings (username and email)
    console.log('Profile settings saved:', { username, email });
  };

  return (
    <div className="profile-settings">
      <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
      
      <AvatarUpload />

      <div className="mt-4">
        <label className="block mb-1" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="border rounded-md p-2 w-full"
          placeholder="Enter your username"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="border rounded-md p-2 w-full"
          placeholder="Enter your email"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProfileSettings;