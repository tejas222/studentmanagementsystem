import React from 'react'
import Header from '../sitewide/Header'
import SideNav from '../sitewide/SideNav';

const TeacherDashboard = () => {
    let NavMenus = ["Profile", "Reports", "Attendance", "Add Students", "View Students", "Mark Attendance", "Create Exam"];
    return (
        <div>
            <Header />
            <div className="d-flex bg-light">
                <div className="col-2 bg-dark">
                    <SideNav menuItems={NavMenus} />
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard