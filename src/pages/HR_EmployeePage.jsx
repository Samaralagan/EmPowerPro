import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import HR_Employee from "../components/employee/HR_Employee";

import Profile from "../components/employee/Profile";
import GenerateReport from "../components/employee/GenerateReport";
import Teams from '../components/employee/Teams'
import { useLocation} from 'react-router-dom';


const HR_EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState("HR_Employee");
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

      {activeComponent === "HR_Employee" && (
        <HR_Employee setActiveComponent={setActiveComponent} />
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

export default HR_EmployeePage;
