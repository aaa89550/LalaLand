import React from 'react';
import ProfileSettings from './ProfileSettings';
import AvatarUpload from './AvatarUpload';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1 className="text-2xl font-bold mb-4">設定</h1>
      <ProfileSettings />
      <AvatarUpload />
    </div>
  );
};

export default Settings;