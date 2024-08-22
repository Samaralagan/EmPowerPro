import React, { useState } from "react";
import "./employeetable.css";

import { GoDotFill } from "react-icons/go";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { useLocation,useNavigate } from "react-router-dom";

const EmployeeTable = ({
  image,
  name,
  status,
  email,
  team,
  setActiveComponent,
}) => {
  
  const navigate = useNavigate();
  const location = useLocation(); 
  var role = ''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     role = pathname.split('/')[2];
    return role;
  };

  const activePageName = getActivePageName();

  const  handleviewprofile = () => {
    // setActiveComponent("EX_Employees");
    if(role === 'HR'){
      navigate('/Employees/HR/Profile');
    }
    if(role === 'Executive'){
      navigate('/Team members/Executive/Profile');
    }
    if(role === 'TeamLeader'){
      navigate('/Team members/TeamLeader/Profile');
    }
    
  };
  const [hover, setHover] = useState(false);

  return (
    <tr className="employee-row">
      <td scope="row">
        <div className="employee-cell">
          <img src={image} alt="" className="img1" />
          {name}
        </div>
      </td>
      <td>
        <div className={status === "Active" ? "active_e" : "offline_e"}>
          <GoDotFill />
          {status}
        </div>
      </td>
      <td>{email}</td>
      <td>
        <div className="offline_ee">{team}</div>
      </td>
      <td>
        <div
          className="button1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleviewprofile}
        >
          {hover ? <FaArrowAltCircleRight /> : "View Profile"}
        </div>
      </td>
    </tr>
  );
};

export default EmployeeTable;
