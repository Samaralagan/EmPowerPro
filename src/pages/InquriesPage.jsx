import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/layout/Header";
import Inquries from "../components/InquriesComponents/Inquries";
import ReplyInquries from "../components/InquriesComponents/ReplyInquries";

const InquriesPage = () => {
  const [activeComponent, setActiveComponent] = useState("Inquries");

  return (
    <div className="d-flex">
      <SideBar />
      {activeComponent === "Inquries" && (
        <Inquries setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ReplyInquries" && (
        <ReplyInquries setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default InquriesPage;
