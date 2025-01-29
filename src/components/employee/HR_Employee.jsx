import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import "./employee.css";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import EmployeeTable from "./EmployeeTable";
import { EmployeeTableData } from "../constants/temporary";
import SideBar from "../common/SideBar";

import { useNavigate } from "react-router-dom";

const HR_Employee = ({ setActiveComponent }) => {
  // const handlenewreport = () => {
  //     setActiveComponent("GenerateReport");
  // };

  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate("/Employees/HR/GenerateReport");
  };

  const handleTeams = () => {
    navigate("/Employees/HR/Teams");
  };

  const [role, setRole] = useState("Employee");
  const [data, setData] = useState([]);
  const fetchProjectEmployee = async () => {
    const url = "http://localhost:8080/api/v1/employees/role/" + role;

    try {
      const response = await fetch(url);

      console.log("Response Status:", response.status);

      if (response.ok) {
        const data = await response.json();

        setData(data);

        // Ensure 'data' exists and has expected structure
        if (!data || typeof data !== "object") {
          console.error("Unexpected response format:", data);
          return;
        }

        // Process the fetched data (for example, display it)
        console.log("Processed Data:", data);
      } else {
        console.error(
          `Failed to fetch: HTTP ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);

      // Specific guidance for common fetch issues
      if (error.name === "TypeError") {
        console.error(
          "Possible reasons: Network issue, incorrect URL, or CORS restriction."
        );
      }
    }
  };

  useEffect(() => {
    fetchProjectEmployee();
  }, [role]);
  return (
    <div>
      <SideBar />
      <Header />

      <div className="employee-body">
        <div className="team-firstrow">
          <select
            name=""
            id=""
            style={{ padding: "7px 25px", borderRadius: "6px" }}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Employee">Employee</option>
            <option value="TeamLead">TeamLeader</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
            <option value="Finance">Finance</option>
            <option value="Executive">Executive</option>
          </select>
        </div>
        <br />

        <div className="tablediv">
          <table className="table table-hover">
            <thead>
              <tr className="heading-row">
                <th scope="col">FullName</th>
                <th scope="col">workTitle</th>
                <th scope="col">Email</th>
                <th scope="col">address</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {data.map((Card, index) => (
                <EmployeeTable
                  key={index}
                  image={Card?.image}
                  name={`${Card?.firstName} ${Card?.lastName}`}
                  status={Card.workTitle}
                  email={Card.email}
                  team={Card.address}
                  setActiveComponent={setActiveComponent}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="apply-claim-teamreport" onClick={handleGenerateReport}>
          <div className="add-icon-circle-teamreport">
            <FaPlusCircle className="add-icon-teamreport" />
          </div>
          <div className="new-button-content-teamreport">
            <div className="new-content-teamreport">Generate Team Report</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HR_Employee;
