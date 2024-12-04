import { React, useEffect, useState } from "react";
import Header from "../layout/Header";
import "./Leave.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import LeaveChart from "./LeaveChart";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function Leave({ setActiveComponent }) {
  const [leaves, setLeaves] = useState([]); // Stores all fetched leaves
  const [filteredLeaves, setFilteredLeaves] = useState([]); // Stores filtered leaves
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [leaveBalance, setLeaveBalance] = useState([]);

  const handlePending = () => {
    setActiveComponent("Pending");
  };
  const handleApproved = () => {
    setActiveComponent("Approved");
  };
  const handleRejected = () => {
    setActiveComponent("Rejected");
  };

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/hr/leave-get-all`
      );

      setLeaves(response.data);
      setFilteredLeaves(response.data);

      let approvedLeaves = 0;
      let rejectedLeaves = 0;
      let requestedLeaves = 0;

      response.data.forEach((leave) => {
        if (leave.status === "APPROVED") {
          approvedLeaves += leave.leaveDays;
        } else if (leave.status === "REJECTED") {
          rejectedLeaves += leave.leaveDays;
        } else if (leave.status === "PENDING") {
          requestedLeaves += leave.leaveDays;
        }
      });

      setLeaveBalance({
        approvedLeaves,
        rejectedLeaves,
        requestedLeaves,
      });
    } catch (error) {
      console.error("Failed to fetch leave details", error);
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
                <div className="leave-main-box-content">
                  {" "}
                  {leaveBalance.requestedLeaves}
                </div>
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
                <div className="leave-main-box-content">
                  {" "}
                  {leaveBalance.approvedLeaves}{" "}
                </div>
                <div className="leave-sub-box-content-2"> Approved Leaves</div>
              </div>
            </div>

            <div className="rectangle-u rectangle-4 me-2">
              <div className="leave-small-square">
                <MdPendingActions className="leave-icon" />
              </div>
              <div className="leave-box-content">
                <div className="leave-main-box-content">
                  {leaveBalance.rejectedLeaves}
                </div>
                <div className="leave-sub-box-content">Rejected Leaves</div>
              </div>
            </div>
          </div>
        </div>

        <div className="leave-additional-rectangle-3">
          <div className="leave-records-text">Leaves</div>

          <div className="dropdown-row">
            <select
              className="custom-dropdown"
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Last 6 Months
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
        <div
          className="leave-chart-box"
          style={{
            width: "100%",
            marginTop: "4vh",
            boxShadow: `
    0px 0px 0px 6px rgba(107, 107, 107, 0.1)  `,
            margin: "auto",
            borderRadius: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LeaveChart />
        </div>
      </div>
    </div>
  );
}

export default Leave;
