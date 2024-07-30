import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import EX_Employee from "../components/employee/EX_Employees";

import Profile from "../components/employee/Profile";
import GenerateReport from "../components/employee/GenerateReport";
import Teams from "../components/employee/Teams";

const EX_EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState("HR_Employee");
  return (
    <div>
      <SideBar />

      {activeComponent === "EX_Employee" && (
        <EX_Employee setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "GenerateReport" && (
        <GenerateReport setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Profile" && (
        <Profile setActiveComponent={setActiveComponent} />
      )}

      {activeComponent === "Teams" && (
        <Teams setActiveComponent={setActiveComponent} />
      )}

      {/* <Employee /> */}
      {/* <Profile /> */}
    </div>
  );
};

export default EX_EmployeePage;
