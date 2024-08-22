import React from "react";
import Header from "../layout/Header";
import "./employee.css";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import EmployeeTable from "./EmployeeTable";
import { EmployeeTableData } from "../constants/temporary";
import SideBar from '../common/SideBar';

import { useNavigate } from 'react-router-dom'

const HR_Employee = ({ setActiveComponent }) => {

    // const handlenewreport = () => {
    //     setActiveComponent("GenerateReport");
    // };

    const navigate = useNavigate();

    const handleGenerateReport = () => {
      navigate('/Employees/HR/GenerateReport');
    }

    const handleTeams = () => {
        navigate('/Employees/HR/Teams');
      }

     
    return (
        <div>
            <SideBar />
            <Header />

            <div className="employee-body">

                <div className="team-firstrow">
                    <div className='apply-claim-team-names' onClick={handleTeams} >

                        <div className='new-button-content-team-names'  >
                            <div className='new-content-team-names'>Teams</div>
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
                <div className='apply-claim-teamreport' onClick={handleGenerateReport} >

                    <div className='add-icon-circle-teamreport'>
                        <FaPlusCircle className='add-icon-teamreport' />
                    </div>
                    <div className='new-button-content-teamreport'  >
                        <div className='new-content-teamreport'>Generate Team Report</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HR_Employee;
