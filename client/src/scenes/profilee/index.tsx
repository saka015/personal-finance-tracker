import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import EditProfileForm from "./EditProfileForm";
import AccountSettings from "./AccountSettings";
import ProfileStats from "./ProfileStats";
import SocialLinks from "./SocialLinks";
import DeleteAccount from "./DeleteAccount";
import './ProfilePage.css'; // Adjust the path if needed

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-page">
      <ProfileHeader />
      {isEditing ? (
        <EditProfileForm toggleEdit={toggleEdit} />
      ) : (
        <>
          <ProfileStats />
          <SocialLinks />
          <AccountSettings />
        </>
      )}
      <button onClick={toggleEdit}>
        {isEditing ? "Cancel Editing" : "Edit Profile"}
      </button>
      <DeleteAccount />
    </div>
  );
};

export default ProfilePage;
