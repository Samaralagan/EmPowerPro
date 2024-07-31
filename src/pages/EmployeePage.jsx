import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Employee from "../components/employee/Employee";
import Profile from "../components/employee/Profile";
import GenerateReport from "../components/employee/GenerateReport";
import { useLocation} from 'react-router-dom';
import HR_Employee from "../components/employee/HR_Employee";
import EX_Employees from "../components/employee/EX_Employees";


const EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState("Employee");
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
      {activeComponent === "Employee" && role === "Executive" &&(
        <EX_Employees setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Employee" && role === "HR" &&(
        <HR_Employee setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Employee" && role !== "HR" && role !== "Executive" &&(
        <Employee setActiveComponent={setActiveComponent} />
      )}

      {activeComponent === "GenerateReport" && (
        <GenerateReport setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Profile" && (
        <Profile setActiveComponent={setActiveComponent} />
      )}
     
    </div>
  );
};

export default EmployeePage;
