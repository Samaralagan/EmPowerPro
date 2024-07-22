import React from "react";
import Leave from "../components/LeaveComponent/Leave";
import SideBar from "../components/common/SideBar";
import ApplyLeave from "../components/LeaveComponent/ApplyLeave";
import OthersLeave from "../components/LeaveComponent/OthersLeave";
import LeaveHistory from "../components/LeaveComponent/LeaveHistory";

function LeavePage() {
  return (
    <div>
      <SideBar />
      
      {/* <Leave /> */}
      {/* <ApplyLeave/> */}
      <OthersLeave/>
      {/* <LeaveHistory/> */}
    </div>
  );
}

export default LeavePage;
