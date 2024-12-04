import React, { useState } from "react";
import "./employee.css";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import EmployeeTable from "./EmployeeTable";
import { EmployeeTableData } from "../constants/temporary";
import { useNavigate } from "react-router-dom";

const Employee = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  // Filter employee data based on the search query
  const filteredData = EmployeeTableData.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query on typing
  };

  const handlenewreport = () => {
    navigate("/Team members/TeamLeader/GenerateReport");
  };

  return (
    <div>
      <div className="employee-body">
        <div className="team-firstrow">
          <div className="apply-claim-team" onClick={handlenewreport}>
            <div className="add-icon-circle-team">
              <FaPlusCircle className="add-icon-team" />
            </div>
            <div className="new-button-content-team">
              <div className="new-content-team">Generate Team Report</div>
            </div>
          </div>

          <div className="search-bar-team">
            <FaSearch className="search-icon-team" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input-team"
              value={searchQuery}
              onChange={handleSearchChange} // Update the search query
            />
          </div>
        </div>
        <br />

        <div className="tablediv">
          <table className="table table-hover">
            <thead>
              <tr className="heading-row">
                <th scope="col">Team Member</th>
                <th scope="col">Status</th>
                <th scope="col">Email</th>
                <th scope="col">Teams</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((Card, index) => (
                  <EmployeeTable
                    key={index}
                    image={Card.image}
                    name={Card.name}
                    status={Card.status}
                    email={Card.email}
                    team={Card.team}
                    setActiveComponent={setActiveComponent}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No matching employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
