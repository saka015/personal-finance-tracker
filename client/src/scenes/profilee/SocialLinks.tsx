import React, { useState } from "react";

const SocialLinks = () => {
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleLinkedInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedIn(e.target.value);
  };

  const handleTwitterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
  };

  return (
    <div className="social-links">
      <h3>Social Media</h3>
      <label>LinkedIn</label>
      <input
        type="url"
        value={linkedIn}
        onChange={handleLinkedInChange}
        placeholder="LinkedIn URL"
      />

      <label>Twitter</label>
      <input
        type="url"
        value={twitter}
        onChange={handleTwitterChange}
        placeholder="Twitter URL"
      />
    </div>
  );
};

export default SocialLinks;
