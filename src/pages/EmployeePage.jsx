import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Employee from "../components/employee/Employee";
import Profile from "../components/employee/Profile";
import GenerateReport from "../components/employee/GenerateReport";
const EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState("Employee");
  return (
    <div>
      <SideBar />
      {activeComponent === "Employee" && (
        <Employee setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "GenerateReport" && (
        <GenerateReport setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Profile" && (
        <Profile setActiveComponent={setActiveComponent} />
      )}
      {/* <Employee /> */}
      {/* <Profile /> */}
    </div>
  );
};

export default EmployeePage;
