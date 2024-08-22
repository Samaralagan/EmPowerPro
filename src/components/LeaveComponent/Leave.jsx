import React, { useState } from "react";
import Header from "../layout/Header";
import "./Leave.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import LeaveChart from "./LeaveChart";
// import { Link } from "react-router-dom";

const Leave = ({ setActiveComponent }) => {
  const handleApplyLeave = () => {
    setActiveComponent("ApplyLeave");
  };

  return (
    <div className="leavemain-body">
      {/* <Header />
      <hr /> */}
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
                  Available Leaves{" "}
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
                <FaRegCalendarTimes className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content"> 5 </div>
                <div className="leave-sub-box-content"> Rejected Leaves </div>
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
            onClick={handleApplyLeave}
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
                Last 4 Months
              </option>
              <option value="option1">Last 4 Months</option>
              <option value="option2">Last 8 Months</option>
              <option value="option3">last 12 Months</option>
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
                  <td>Medical</td>
                  <td>20 JUNE 2024</td>
                  <td>22 JUNE 2024</td>
                  <td>Emergency hospital visit</td>
                  <td>
                    <button className="leave-approved"> Approved</button>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Vacation</td>
                  <td>10 JULY 2024</td>
                  <td>15 JULY 2024</td>
                  <td>Family vacation</td>
                  <td>
                    <button className="leave-pending"> Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Personal</td>
                  <td>05 AUGUST 2024</td>
                  <td>07 AUGUST 2024</td>
                  <td>Personal reasons</td>
                  <td>
                    <button className="leave-rejected">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Maternity</td>
                  <td>01 SEPTEMBER 2024</td>
                  <td>30 NOVEMBER 2024</td>
                  <td>Maternity leave</td>
                  <td>
                    <button className="leave-approved"> Approved</button>
                  </td>
                </tr>
                <td>05</td>
                <td>Study</td>
                <td>12 DECEMBER 2024</td>
                <td>19 DECEMBER 2024</td>
                <td>Exam preparation</td>
                
                <td>
                  <button className="leave-rejected">Rejected</button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
