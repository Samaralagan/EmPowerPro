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
    <div>
         <Header />
   
    <div className="employee-body">
   
      <div className="team-firstrow">
        <div className='apply-claim-team' onClick={handlenewreport} >

              <div className='add-icon-circle-team'>
                <FaPlusCircle className='add-icon-team' />
              </div>
              <div className='new-button-content-team'  >
                <div className='new-content-team'>Generate Team Report</div>
              </div>
        </div>
        
        <div className="search-bar-team">
              <FaSearch className="search-icon-team" />
              <input type="text" placeholder="Search..." className="search-input-team" />
              <button className="search-button-team">Search</button>
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
    </div>
  );
};

export default Employee;
