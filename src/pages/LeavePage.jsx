import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import LeaveExecutive from "../components/LeaveComponent/LeaveExecutive";
import Leave from "../components/LeaveComponent/Leave";
import ApplyLeave from "../components/LeaveComponent/ApplyLeave";
import LeaveHR from "../components/LeaveComponent/LeaveHR";
import ApplyLeaveHR from "../components/LeaveComponent/ApplyLeaveHR";
import OthersLeave from "../components/LeaveComponent/OthersLeave";
import LeaveHistory from "../components/LeaveComponent/LeaveHistory";
import LeaveRequest from "../components/LeaveComponent/LeaveRequest_HR";
import LeavePending from "../components/LeaveComponent/LeavePending";
import ApproveLeave from "../components/LeaveComponent/ApproveLeave";
import RejectLeave from "../components/LeaveComponent/RejectLeave";
import ApplyLeaveForm from "../components/LeaveComponent/ApplyLeaveForm";
import { useLocation } from "react-router-dom";



const LeavePage = () =>  {
  const [activeComponent, setActiveComponent] = useState("Leave");

  const location = useLocation(); 
  var role = ''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     role = pathname.split('/')[2];
    return role;
  };
  
  const activePageName = getActivePageName();

  return (
    <div>
      <SideBar />
      {activeComponent === "Leave" &&  role  !== "HR" && role  !== "Executive" && (
        <Leave setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Leave" &&  role  === "HR" &&  (
        <LeaveHR setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Leave" &&  role  === "Executive" && (
        <LeaveExecutive setActiveComponent={setActiveComponent} />
      )}


      {activeComponent === "ApplyLeave" && (
        <ApplyLeave setActiveComponent={setActiveComponent} />
      )}

      {activeComponent === "Pending" && (
        <LeavePending setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Approved" && (
        <ApproveLeave setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Rejected" && (
        <RejectLeave setActiveComponent={setActiveComponent} />
      )}
      
      {activeComponent === "ApplyLeaveHR" && (
        <ApplyLeaveHR setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "OthersLeave" && (
        <OthersLeave setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "LeaveHistory" && (
        <LeaveHistory setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "LeaveRequest" && (
        <LeaveRequest setActiveComponent={setActiveComponent} />
      )}

      
      {/* <Leave/> */}
       {/* <ApplyLeave/> */}

      {/* <LeaveExecutive /> */}
       {/* <LeavePending/> */}
      {/* <ApproveLeave/> */}
      {/* <RejectLeave/> */}

{/* <LeaveHR/> */}
{/* <ApplyLeaveHR/> */}
      {/* <OthersLeave/> */}
      {/* <LeaveHistory/> */}
     
     

    </div>
  );
}

export default LeavePage;
