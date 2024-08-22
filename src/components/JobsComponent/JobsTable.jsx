import React, { useState } from "react";
// import "./employeetable.css";
import { GoDotFill } from "react-icons/go";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

const JobsTable = ({
  name,
  email,
  job,
  type,
  setActiveComponent,
  isChecked,
  onCheckboxChange,
}) => {
  const [hover, setHover] = useState(false);

  const handleviewprofile = () => {
    setActiveComponent("Profile");
  };

  return (
    <tr className="employee-row">
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </td>
      <td scope="row">
        <div className="employee-cell">{name}</div>
      </td>
      <td>{email}</td>
      <td>{job}</td>
      <td>{type}</td>
      <td>
        <div
          className="button1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          // onClick={handleviewprofile}
        >
          {hover ? <FaArrowAltCircleRight /> : "View Resume"}
        </div>
      </td>
    </tr>
  );
};

export default JobsTable;
