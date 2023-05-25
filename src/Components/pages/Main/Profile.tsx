import React from "react";

const Profile = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="main-heading1">Settings</div>
        <div className="main-heading2">
          <div className="header">Settings</div>
          <div className="heading-button-wrap">
            <button className="export">Export CSV</button>
            <button className="add-event">+ Add Event</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
