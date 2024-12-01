import React from "react";

const DeleteAccount = () => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      // Call the API or perform logic to delete the account
      alert("Account deleted.");
    }
  };

  return (
    <div className="delete-account">
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteAccount;
