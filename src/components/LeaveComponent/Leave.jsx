import React from "react";
import Header from "../layout/Header";
import "./Leave.css";
import { FaHourglassStart } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";

function Leave() {
  return (
    <div className="leave-body">
      <Header />
      <hr />
      <br />
      <br />

      <div >
        <div className="leave-rectangles-container">
          <div className="d-flex ">

          <div className="rectangle-u rectangle-2 me-2">
            <div className="leave-small-square">
              <FaHourglassStart className="leave-icon" />
            </div>

            <div className="leave-box-content">
              <div className="leave-main-box-content"> 08 : 00 </div>
              <div className="leave-sub-box-content-1"> Working Hours </div>
            </div>
          </div>

          <div className="rectangle-u rectangle-3 me-2">
            <div className="leave-small-square">
              <FaHourglassHalf className="leave-icon" />
            </div>
            <div className="leave-box-content">
              <div className="leave-main-box-content"> 03 : 30 </div>
              <div className="leave-sub-box-content-2"> Worked Hours </div>
            </div>
          </div>

          <div className="rectangle-u rectangle-4 me-2">
            <div className="leave-small-square">
              <FaClock className="leave-icon" />
            </div>
            <div className="leave-box-content">
              <div className="leave-main-box-content"> 02 : 00 </div>
              <div className="leave-sub-box-content"> Over Time </div>
            </div>
          </div>
          
          </div>
          <button
            className="gradient-blue-btn "
            style={{
              color: "white",
              width: "167px",
              height: "45px",
              padding: "10px",
            }}
          >
            <FaPlusCircle className="me-2" />
            Apply Leave
          </button>
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
            <select className="custom-dropdown" defaultValue="" style={{marginLeft:"35vw"}}>
              <option value="" disabled>
                Status
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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
                    <button className="approved"> Approved</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="pending"> Pending</button>
                  </td>
                </tr>
                <tr>
                <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="rejected">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="approved"> Approved</button>
                  </td>
                </tr>
                <td>01</td>
                  <td>Casual</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Friend's Wedding Function</td>
                  <td>
                    <button className="rejected">Rejected</button>
                  </td>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leave;
