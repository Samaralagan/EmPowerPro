import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layout/Header";
import "./LeaveHR.css";
import {
  FaPlusCircle,
  FaBookmark,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
} from "react-icons/fa";
import LeaveChart from "./LeaveChart";

function Leave({ setActiveComponent }) {
  const handleApplyLeaveHR = () => {
    setActiveComponent("ApplyLeaveHR");
  };

  const handleOthersLeave = () => {
    setActiveComponent("OthersLeave");
  };

  const [leaves, setLeaves] = useState([]); // Stores all fetched leaves
  const [filteredLeaves, setFilteredLeaves] = useState([]); // Stores filtered leaves
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const fetchLeaves = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8080/api/v1/hr/leave/${userId}`
      );
      setLeaves(response.data);
      setFilteredLeaves(response.data); // Initially show all leaves
    } catch {
      console.error("Failed to fetch leave details");
    }
  };

  const filterLeaves = () => {
    let filtered = [...leaves];

    // Filter by time period
    if (filterPeriod) {
      const now = new Date();
      const dateThreshold = new Date();

      if (filterPeriod === "Last 3 Months") {
        dateThreshold.setMonth(now.getMonth() - 3);
      } else if (filterPeriod === "Last 6 Months") {
        dateThreshold.setMonth(now.getMonth() - 6);
      } else if (filterPeriod === "Last 12 Months") {
        dateThreshold.setMonth(now.getMonth() - 12);
      }

      filtered = filtered.filter(
        (leave) => new Date(leave.startDate) >= dateThreshold
      );
    }

    // Filter by status
    if (filterStatus) {
      filtered = filtered.filter((leave) => leave.status === filterStatus);
    }

    setFilteredLeaves(filtered);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  useEffect(() => {
    filterLeaves();
  }, [filterPeriod, filterStatus, leaves]);

  return (
    <div className="leave-main-body">
      <div className="leave-hr-tabs">
        <button className="tab-hr my-leaves active">My Leaves</button>
        <button className="tab-hr others-leaves" onClick={handleOthersLeave}>
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
                <div className="leave-main-box-content">25</div>
                <div className="leave-sub-box-content-1">Available Leaves</div>
              </div>
            </div>

            <div className="rectangle-u rectangle-3 me-2">
              <div className="leave-small-square">
                <FaRegCalendarCheck className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content">10</div>
                <div className="leave-sub-box-content-2">Approved Leaves</div>
              </div>
            </div>

            <div className="rectangle-u rectangle-4 me-2">
              <div className="leave-small-square">
                <FaRegCalendarTimes className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content">5</div>
                <div className="leave-sub-box-content">Rejected Leaves</div>
              </div>
            </div>
          </div>
          <button
            className="gradient-blue-btn"
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
              <option value="">Select Period</option>
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
              <option value="">Select Status</option>
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
                {filteredLeaves.map((leave, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{leave.leaveType}</td>
                    <td>{new Date(leave.startDate).toLocaleDateString()}</td>
                    <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <button className={`leave-${leave.status.toLowerCase()}`}>
                        {leave.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leave;
