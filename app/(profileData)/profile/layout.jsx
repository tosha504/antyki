"use client";

import "./Profile.scss";
import SidebarProfile from "./_components/SidebarProfile";

const ProfilePageLayout = async ({ children }) => {
  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="profile">
        <div className="profile__sidebar">
          <SidebarProfile />
        </div>
        <div className="profile__content">{children}</div>
      </div>
    </div>
  );
};

export default ProfilePageLayout;
