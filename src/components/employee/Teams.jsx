import React from "react";
import Header from "../layout/Header";
import "./employee.css";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import TeamTable from "./TeamTable";
import { TeamTableData } from "../constants/temporary";
import SideBar from "../common/SideBar";
import { FaArrowLeft } from "react-icons/fa6";

import { useLocation, useNavigate } from "react-router-dom";

const Teams = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };
  const activePageName = getActivePageName();

  const handleBack = () => {
    // setActiveComponent("EX_Employees");
    if (role === "HR") {
      navigate("/Employees/HR");
    }
    if (role === "Executive") {
      navigate("/Team members/Executive");
    }
  };
  const handleNewTeam = () => {
    // setActiveComponent("EX_Employees");
    if (role === "HR") {
      navigate("/Employees/HR/CreateNewTeam");
    }
    if (role === "Executive") {
      navigate("/Employee/Executive/CreateNewTeam");
    }
  };

  return (
    <div>
      <SideBar />
      <Header />

      <div className="employee-body">
        <div className="team-firstrow">
          <div className="form-arrow-team">
            <FaArrowLeft className="arrow_icon-team" onClick={handleBack} />
          </div>

          <div className="search-bar-team">
            <FaSearch className="search-icon-team" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input-team"
            />
            <button className="search-button-team">Search</button>
          </div>
        </div>
        <br />

        <div className="tablediv">
          <table className="table table-hover">
            <thead>
              <tr className="heading-row">
                <th scope="col">Team Name</th>
                <th scope="col">Status</th>
                <th scope="col">Team Lead</th>
                <th scope="col">Project</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {TeamTableData.map((Card, index) => (
                <TeamTable
                  key={index}
                  name={Card.name}
                  status={Card.status}
                  teamlead={Card.teamlead}
                  project={Card.project}
                  setActiveComponent={setActiveComponent}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="apply-claim-teamcreate" onClick={handleNewTeam}>
          <div className="add-icon-circle-teamcreate">
            <FaPlusCircle className="add-icon-teamcreate" />
          </div>
          <div className="new-button-content-teamcreate">
            <div className="new-content-teamcreate">Create New Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
