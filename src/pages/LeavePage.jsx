import React from "react";
import SideBar from "../components/common/SideBar";
import LeaveExecutive from "../components/LeaveComponent/LeaveExecutive";
import Leave from "../components/LeaveComponent/Leave";
import ApplyLeave from "../components/LeaveComponent/ApplyLeave";
import OthersLeave from "../components/LeaveComponent/OthersLeave";
import LeaveHistory from "../components/LeaveComponent/LeaveHistory";
import LeavePending from "../components/LeaveComponent/LeavePending";
import ApproveLeave from "../components/LeaveComponent/ApproveLeave";
import RejectLeave from "../components/LeaveComponent/RejectLeave";


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
      {/* <ApproveLeave/> */}
      {/* <RejectLeave/> */}

    </div>
  );
}

export default LeavePage;
