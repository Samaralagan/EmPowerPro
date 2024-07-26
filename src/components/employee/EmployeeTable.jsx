import React, { useState } from "react";
import "./employeetable.css";

import { GoDotFill } from "react-icons/go";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const EmployeeTable = ({
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