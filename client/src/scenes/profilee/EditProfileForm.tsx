import React, { useState } from "react";

interface EditProfileFormProps {
  toggleEdit: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ toggleEdit }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1234567890");
  const [bio, setBio] = useState("A passionate developer.");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the updated data logic here
    toggleEdit();
  };

  return (
    <form onSubmit={handleSave}>
      <h3>Edit Profile</h3>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>Bio</label>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
