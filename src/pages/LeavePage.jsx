
import React from "react";
import Leave from "../components/LeaveComponent/Leave";
import SideBar from "../components/common/SideBar";
import ApplyLeave from "../components/LeaveComponent/ApplyLeaveForm";

function LeavePage() {
  return (
    <div>
      <SideBar />

      <Leave />
      {/* <ApplyLeave/> */}
    </div>
  );
}

export default LeavePage;

