import React from "react";
import profile from "../../assets/zinitsu.jpg";

const ProfilePhoto = () => {
  return (
    // make profile component
    <div className="profile">
      <img src={profile} />
    </div>
  );
};

export default ProfilePhoto;
