import React, { useState } from "react";

const AccountSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="account-settings">
      <h3>Account Settings</h3>
      <label>
        Enable Notifications
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={handleNotificationToggle}
        />
      </label>
    </div>
  );
};

export default AccountSettings;
