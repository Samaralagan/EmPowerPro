import React from "react";
import SideBar from "../components/common/SideBar";
import Attendance from "../components/AttendanceComponent/Attendance";

function AttendancePage() {
  return (
    <div className="d-flex">
      <SideBar />
      <Attendance />
    </div>
  );
}

export default AttendancePage;
