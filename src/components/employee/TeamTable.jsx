import React, { useState } from "react";
import "./employeetable.css";

import { GoDotFill } from "react-icons/go";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const TeamTable = ({ name, status, teamlead, project, setActiveComponent }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let role = "";

  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };

  const activePageName = getActivePageName();

  const handleTeamDetails = () => {
    // setActiveComponent("EX_Employees");
    if (role === "HR") {
      navigate("/Employees/HR/Team_Profile");
    }
    if (role === "Executive") {
      navigate("/Employee/Executive/Team_Profile");
    }
  };

  return (
    <tr className="employee-row">
      <td scope="row">
        <div className="employee-cell">{name}</div>
      </td>
      <td>
        <div className={status === "Completed" ? "active_e" : "offline_e"}>
          <GoDotFill />
          {status}
        </div>
      </td>
      <td>{teamlead}</td>
      <td>
        <div>{project}</div>
      </td>
      <td>
        <div
          className="button1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleTeamDetails}
        >
          {hover ? <FaArrowAltCircleRight /> : "View Profile"}
        </div>
      </td>
    </tr>
  );
};

export default TeamTable;
