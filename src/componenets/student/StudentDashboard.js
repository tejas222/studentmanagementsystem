import React from "react";
import SideNav from "../sitewide/SideNav";
import Header from "../sitewide/Header";

const StudentDashboard = () => {
  let NavMenus = ["Profile", "Reports", "Attendance", "Skills"];

  return (
    <div>
      <Header />
      <div className="d-flex bg-light">
        <div className="col-2 bg-dark">
          <SideNav menuItems={NavMenus} />
        </div>
      </div>
    </div>

  );
};

export default StudentDashboard;
