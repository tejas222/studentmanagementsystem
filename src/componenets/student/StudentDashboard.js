import React from "react";
import SideNav from "../sitewide/SideNav";

const StudentDashboard = () => {
  let NavMenus = ["Profile", "Reports", "Attendance", "Skills"];

  return (
    <div className="d-flex">
      <div className="col-3 bg-dark">
        <SideNav menuItems={NavMenus} />
      </div>
    </div>
  );
};

export default StudentDashboard;
