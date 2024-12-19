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
  const [leaveBalance, setLeaveBalance] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [error, setError] = useState(null);

  const fetchLeaves = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      const response = await axios.get(
        `http://localhost:8080/api/v1/hr/leave/${userId}`
      );

      setLeaves(response.data);
      setFilteredLeaves(response.data);

      let approvedLeaves = 0;
      let rejectedLeaves = 0;
      let totalLeaveDays = 40;

      response.data.forEach((leave) => {
        if (leave.status === "APPROVED") {
          approvedLeaves += leave.leaveDays;
        } else if (leave.status === "REJECTED") {
          rejectedLeaves += leave.leaveDays;
        }
      });

      let availableLeaves = totalLeaveDays - approvedLeaves;

      setLeaveBalance({
        approvedLeaves,
        rejectedLeaves,
        availableLeaves,
      });
    } catch (error) {
      console.error("Failed to fetch leave details", error);
    }
  };

  const filterLeave = () => {
    let filtered = [...leaves];

    if (filterPeriod) {
      const now = new Date();
      const dateThreshold = new Date();

      if (filterPeriod == "Last 3 Months") {
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

    if (filterStatus) {
      filtered = filtered.filter((leave) => leave.status === filterStatus);
    }

    setFilteredLeaves(filtered);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  useEffect(() => {
    filterLeave();
  }, [filterPeriod, filterStatus, leaves]);

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
                <div className="leave-main-box-content">
                  {" "}
                  {leaveBalance.availableLeaves > 0
                    ? leaveBalance.availableLeaves
                    : 0}
                </div>
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
                <div className="leave-main-box-content">
                  {leaveBalance.approvedLeaves}
                </div>
                <div className="leave-sub-box-content-2"> Approved Leaves</div>
              </div>
            </div>

            <div className="rectangle-u rectangle-4 me-2">
              <div className="leave-small-square">
                <FaRegCalendarTimes className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content">
                  {leaveBalance.rejectedLeaves}
                </div>
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
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="custom-dropdown"
              defaultValue=""
            >
              <option value="" disabled>
                Period
              </option>
              <option value="Last 3 Months">Last 3 Months</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Last 12 Months">last 12 Months</option>
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
                {filteredLeaves.map((leave, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{leave.leaveType}</td>
                    <td>{new Date(leave.startDate).toLocaleDateString()} </td>
                    <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                    <td>{leave.reason}</td>
                    <button
                      className={
                        leave.status === "APPROVED"
                          ? "leave-approved"
                          : leave.status === "REJECTED"
                          ? "leave-rejected"
                          : "leave-pending"
                      }
                    >
                      {leave.status}
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
