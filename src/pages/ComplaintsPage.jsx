import React from "react";
import SideBar from "../components/common/SideBar";
import Complaints from "../components/ComplaintsComponent/Complaints";
import Complaintsmore from "../components/ComplaintsComponent/Complaintsmore";
import NewComplaint from "../components/ComplaintsComponent/NewComplaint";
const ComplaintsPage = () => {
  return (
    <div className="d-flex">
      <SideBar />
      {/* <Complaints /> */}
      {/* <Complaintsmore /> */}
      <NewComplaint />
    </div>
  );
};

export default ComplaintsPage;
