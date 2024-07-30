import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Complaints from "../components/ComplaintsComponent/Complaints";
import Complaintsmore from "../components/ComplaintsComponent/Complaintsmore";
import NewComplaint from "../components/ComplaintsComponent/NewComplaint";
import ComplaintsReply from "../components/ComplaintsComponent/ComplaintsReply";
import ReplyComplaint from "../components/ComplaintsComponent/ReplyComplaint";
const ComplaintsPage = () => {
  const [activeComponent, setActiveComponent] = useState("Complaints");
  return (
    <div className="d-flex">
      <SideBar />
      {/* {activeComponent === "Complaints" && (
        <Complaints setActiveComponent={setActiveComponent} />
      )} */}
      {/* {activeComponent === "Complaintsmore" && (
        <Complaintsmore setActiveComponent={setActiveComponent} />
      )} */}
      {/* {activeComponent === "NewComplaint" && (
        <NewComplaint setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ReplyComplaint" && (
        <ReplyComplaint setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default ComplaintsPage;
