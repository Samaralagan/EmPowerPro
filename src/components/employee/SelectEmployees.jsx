import React, { useState } from "react";
import "./CreateTeam.css";

import { GoDotFill } from "react-icons/go";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SelectEmployees = ({
  image,
  name,
  status,
  email,
  team,
  setActiveComponent,
}) => {
  const location = useLocation();
  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();
  
  const handleviewprofile = () => {
    setActiveComponent("Profile");
  };
  const [hover, setHover] = useState(false);

  return (

    <div className="select-employees">

    <tr className="select-employee-row">
       <td>
          <input type="checkbox" className="select-employee-checkbox" />
        </td>

      <td>
        <div className="select-employee-cell">
          <img src={image} alt="" className="img1" />
          <div className="emp-name">  {name}</div>
        </div>
      </td>

      <td>
        <div className="select-team">{team}</div>
      </td>

     
    </tr>

    </div>



   
  );
};

export default SelectEmployees;
