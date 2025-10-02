import React, { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (isEnabled && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, [isEnabled]);

  const sendNotification = (title, body) => {
    if (isEnabled && Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  };

  const toggleNotifications = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div>
      <button onClick={toggleNotifications}>
        {isEnabled ? 'Disable Notifications' : 'Enable Notifications'}
      </button>
      <button onClick={() => sendNotification('New Message', 'You have a new private message!')}>
        Test Notification
      </button>
    </div>
  );
};

export default NotificationSystem;
