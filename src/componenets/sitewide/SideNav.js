import React from "react";
import ProfileDP from "../../assets/profile.png";
const SideNav = (menus) => {
  let menuItems = menus.menuItems;
  return (
    <div className="sidenav">
      <div className="profile-section">
        <div className="profile-picture">
          <img src={ProfileDP} width="150" />
        </div>
        <div className="profile-name">
          <p>Hello,</p>
          <h2>John Doe</h2>
        </div>
        <hr />
      </div>
      <hr />
      <div>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
