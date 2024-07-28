import React from "react";
import SideBar from "../components/common/SideBar";
import LeaveExecutive from "../components/LeaveComponent/LeaveExecutive";
import Leave from "../components/LeaveComponent/Leave";
import ApplyLeave from "../components/LeaveComponent/ApplyLeave";
import OthersLeave from "../components/LeaveComponent/OthersLeave";
import LeaveHistory from "../components/LeaveComponent/LeaveHistory";
import LeavePending from "../components/LeaveComponent/LeavePending";


function LeavePage() {
  return (
    <div>
      <SideBar />
      
      {/* <Leave/> */}
      {/* <LeaveExecutive /> */}
      {/* <ApplyLeave/> */}
      {/* <OthersLeave/> */}
      {/* <LeaveHistory/> */}
      <LeavePending/>

    </div>
  );
}

export default LeavePage;
