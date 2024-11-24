import React from "react";
import Header from "../layout/Header";
import "./LeaveHR.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import LeaveChart from "./LeaveChart";

function Leave({ setActiveComponent }) {
  const handleApplyLeaveHR = () => {
    setActiveComponent("ApplyLeaveHR");
  };
  const handleOthersLeave = () => {
    setActiveComponent("OthersLeave");
  };

  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:8080/api/v1/hr/leave/${userId}`
        );
        console.log(response.data);
        setLeaves(response.data);
      } catch {
        setError("failed to fetch leave details");
      }
    };
    fetchLeaves();
  }, []);

  useEffect(() => {
    const fetchFilteredLeaves = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/hr/leave-get-filtered",
          {
            params: {
              timePeriod: filterPeriod,
              status: filterStatus,
            },
          }
        );
        setFilteredLeaves(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching filtered leave data:", error);
      }
    };
    if (filterPeriod || filterStatus) {
      fetchFilteredLeaves();
    } else {
      setFilteredLeaves(leaves); // Show all leaves if no filter is selected
    }
  }, [filterPeriod, filterStatus, leaves]);

  return (
    <div className="leave-main-body">
      <div className="leave-hr-tabs">
        <button className="tab-hr my-leaves active">My Leaves</button>
        <button className="tab-hr others-leaves " onClick={handleOthersLeave}>
          Others Leaves
        </button>
      </div>

      <div>
        <div className="leave-rectangles-container mt-3">
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
            onClick={handleApplyLeaveHR}
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
            <select
              className="custom-dropdown"
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
            >
              <option value="" disabled>
                Last 30 Days
              </option>
              <option value="Last 3 Months">Last 3 Months</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Last 12 Months">Last 12 Months</option>
            </select>
            <select
              className="custom-dropdown"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{ marginLeft: "45vw" }}
            >
              <option value="" disabled>
                Status
              </option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
              <option value="PENDING">Pending</option>
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
                {(filterPeriod || filterStatus ? filteredLeaves : leaves).map(
                  (leave, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{leave.leaveType}</td>
                      <td>{new Date(leave.startDate).toLocaleDateString()}</td>
                      <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <button
                          className={`leave-${leave.status.toLowerCase()}`}
                        >
                          {leave.status}
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leave;
