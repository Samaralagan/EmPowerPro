import React from "react";
import Header from "../layout/Header";
import "./Leave.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import LeaveChart from "./LeaveChart";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

function Leave({ setActiveComponent }) {

  const handlePending = () => {
    setActiveComponent("Pending");
  };
  const handleApproved = () => {
    setActiveComponent("Approved");
  };
  const handleRejected = () => {
    setActiveComponent("Rejected");
  };

  return (
    <div className="leavemain-body">
      
  
      <br />
      <br />

      <div>
        <div className="leave-rectangles-container">
          <div className="d-flex ">
            <div className="rectangle-u rectangle-2 me-2">
              <div className="leave-small-square">
                <FaBookmark className="leave-icon" />
              </div>

              <div className="leave-box-content">
                <div className="leave-main-box-content"> 25</div>
                <div className="leave-sub-box-content-1">
                  {" "}
                  Requested Leaves{" "}
                </div>
              </div>
            </div>

            <div className="rectangle-u rectangle-3 me-2">
              <div className="leave-small-square">
                <FaRegCalendarCheck className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content"> 10 </div>
                <div className="leave-sub-box-content-2"> Approved Leaves</div>
              </div>
            </div>

            <div className="rectangle-u rectangle-4 me-2">
              <div className="leave-small-square">
                <MdPendingActions className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content"> 5 </div>
                <div className="leave-sub-box-content"> Pending Leaves </div>
              </div>
            </div>
          </div>
        
        </div>

        <div className="leave-additional-rectangle-3">
          <div className="leave-records-text">Leaves</div>

          <div className="dropdown-row">
            <select className="custom-dropdown" defaultValue="">
              <option value="" disabled>
                Last 6 Months
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select
              className="custom-dropdown"
              defaultValue=""
              style={{ marginLeft: "45vw" }}
            >
              <option value="" disabled>
                Status
              </option>
              <option value="option1">Approved</option>
              <option value="option2">Rejected</option>
              <option value="option3">Pending</option>
            </select>
          </div>

          <div className="leave-custom-table-container">
            <table className="leave-custom-table">
              <thead>
                <tr>
                  <th>Leave Number</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="leave-approved" onClick={handleApproved} > Approved</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="leave-pending" onClick={handlePending} > Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="leave-rejected" onClick={handleRejected}>Rejected</button>
                  </td>
                </tr>
                {/* <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="leave-approved"> Approved</button>
                  </td>
                </tr> */}
                {/* <td>01</td>
                <td>Casual</td>
                <td>20 JUNE 2024</td>
                <td>22 JUNE 2024</td>
                <td>Friend's Wedding Function</td>
                <td>
                  <button className="leave-rejected">Rejected</button>
                </td> */}
              </tbody>
            </table>
          </div>

        </div>
        <div 
  className="leave-chart-box" 
  style={{
    width: '100%',
    marginTop:'4vh',
    boxShadow: `
    0px 0px 0px 6px rgba(107, 107, 107, 0.1)  `,
    margin: 'auto',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
 
 <LeaveChart />
 
</div>

      </div>
    </div>
  );
}

export default Leave;
