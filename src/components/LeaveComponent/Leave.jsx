import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import "./Leave.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import axios from "axios";
import LeaveChart from "./LeaveChart";
// import { Link } from "react-router-dom";

const Leave = ({ setActiveComponent }) => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:8080/api/v1/hr/leave/${userId}`
        );
        setLeaves(response.data);
      } catch {
        setError("failed to fetch leave details");
      }
    };
    fetchLeaves();
  }, []);

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
                {leaves.map((leave, index) => {
                  <tr>
                    <td>{index + 1}</td>
                    <td>{leave.leaveType}</td>
                    <td>{leave.startDate} </td>
                    <td>{leave.endDate}</td>
                    <td>{leave.reason}</td>
                    <button
                      className={
                        leave.status === "Approved"
                          ? "leave-approved"
                          : leave.status === "Rejected"
                          ? "leave-rejected"
                          : "leave-pending"
                      }
                    >
                      {leave.status}
                    </button>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
