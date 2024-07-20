import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Complaints from "../components/ComplaintsComponent/Complaints";
import Complaintsmore from "../components/ComplaintsComponent/Complaintsmore";
import NewComplaint from "../components/ComplaintsComponent/NewComplaint";
const ComplaintsPage = () => {
  const [activeComponent, setActiveComponent] = useState("Complaints");
  return (
    <div className="d-flex">
      <SideBar />
      {activeComponent === "Complaints" && (
        <Complaints setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Complaintsmore" && (
        <Complaintsmore setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "NewComplaint" && (
        <NewComplaint setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default ComplaintsPage;
