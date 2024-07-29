import React from "react";
import SideBar from "../components/common/SideBar";
import LeaveExecutive from "../components/LeaveComponent/LeaveExecutive";
import Leave from "../components/LeaveComponent/Leave";
import ApplyLeave from "../components/LeaveComponent/ApplyLeave";
import LeaveHR from "../components/LeaveComponent/LeaveHR";
import ApplyLeaveHR from "../components/LeaveComponent/ApplyLeaveHR";
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
       {/* <ApplyLeave/> */}

      {/* <LeaveExecutive /> */}
       {/* <LeavePending/> */}
      <ApproveLeave/>
      {/* <RejectLeave/> */}

{/* <LeaveHR/> */}
{/* <ApplyLeaveHR/> */}
      {/* <OthersLeave/> */}
      {/* <LeaveHistory/> */}
     

    </div>
  );
}

export default LeavePage;
