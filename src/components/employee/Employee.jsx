import React from "react";
import Header from "../layout/Header";
import "./employee.css";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import EmployeeTable from "./EmployeeTable";
import { EmployeeTableData } from "../constants/temporary";

const Employee = ({ setActiveComponent }) => {
  const handlenewreport = () => {
    setActiveComponent("GenerateReport");
  };
  return (
    <div className="employee-body">
      <Header />
      <hr />
      <div style={{ display: "flex" }}>
        <button
          className="gradient-blue-btn "
          style={{
            color: "white",

            height: "45px",
            padding: "10px",
          }}
          onClick={handlenewreport}
        >
          <FaPlusCircle className="me-2" />
          Generate Report
        </button>
        <div
          style={{
            display: "flex",
            marginLeft: "39.5rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FaSearch className="search-icon" />
          <input
            className="border-inbox"
            type="text"
            placeholder="Search..."
            style={{
              paddingLeft: "29px",
              paddingRight: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "9.8px",
              fontSize: "16px",
              background: "var(--Main-color)",
              color: "white",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <br />

      <div className="tablediv">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Team Member</th>
              <th scope="col">Status</th>
              <th scope="col">Email</th>
              <th scope="col">Teams</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {EmployeeTableData.map((Card, index) => (
              <EmployeeTable
                key={index}
                image={Card.image}
                name={Card.name}
                status={Card.status}
                email={Card.email}
                team={Card.team}
                setActiveComponent={setActiveComponent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
