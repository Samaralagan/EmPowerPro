import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import EX_Employee from "../components/employee/EX_Employees";
import EX_Employees from "../components/employee/EX_Employees";

import Profile from "../components/employee/Profile";
import GenerateReport from "../components/employee/GenerateReport";
import Teams from "../components/employee/Teams";
import NewApproval from "../components/employee/NewApproval";
import Team_Profile from "../components/employee/Team_Profile";
import CreateTeam from "../components/employee/CreateTeam";

const EX_EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState("EX_Employees");
  return (
    <div>
      <SideBar />

      {activeComponent === "EX_Employees" && (
        <EX_Employees setActiveComponent={setActiveComponent} />
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
      {activeComponent === "NewApproval" && (
        <NewApproval setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Team_Profile" && (
        <Team_Profile setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "CreateTeam" && (
        <CreateTeam setActiveComponent={setActiveComponent} />
      )}

      {/* <Employee /> */}
      {/* <Profile /> */}
    </div>
  );
};

export default EX_EmployeePage;
