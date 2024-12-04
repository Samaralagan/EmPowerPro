import { React, useEffect, useState } from "react";
import Header from "../layout/Header";
import "./LeaveHistory.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function LeaveRequestForm({ setActiveComponent }) {
  const navigate = useNavigate();
  const [leave, setLeave] = useState("");
  const { leaveId } = useParams();

  const handleBackClick = () => {
    navigate("/Leaves/HR/OthersLeave");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/hr/leave-request-getOne/${leaveId}`)
      .then((response) => {
        setLeave(response.data);
        console.log(leave);
      })
      .catch((error) => {
        console.error("Error fetching leave details", error);
      });
  }, [leaveId]);

  return (
    <div className="leave-request-form-container">
      <hr />

      <div className="back-arrow">
        <FaArrowLeft className="back-icon mt-4" onClick={handleBackClick} />
      </div>
      <div className="leave-request-card">
        <div className="approved-button">Approved</div>
        <br />

        {/* <div className="status-badge approved">Approved</div> */}
        <div className="leave-history-personal-info">
          <div className="leave-history-profile-pic">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" />{" "}
          </div>
          <div className="employee-details">
            <h5>
              {leave.employeeName}({leave.role})
            </h5>
            <br />
            <div className="others-leave-type">{leave.leaveType}</div>
          </div>
        </div>

        <div className="leave-details">
          <div className="date-detail-row">
            <div>
              <div style={{ width: "12.5%" }}>
                <span className="detail-label">From:</span>
              </div>
              <span className="detail-value">{leave.startDate}</span>
            </div>
            <div>
              <div style={{ width: "12.5%" }}>
                <span className="detail-label">To:</span>
              </div>
              <span className="detail-value">{leave.endDate}</span>
            </div>
          </div>
          <br />
          <div className="detail-row">
            <div style={{ width: "12.5%" }}>
              <span className="detail-label">Total duration:</span>
            </div>
            <span className="detail-value">{leave.leaveDays}</span>
          </div>
          <br />

          <div className="detail-row">
            <div style={{ width: "12.5%" }}>
              {" "}
              <span className="detail-label">Reason</span>
            </div>

            <div className="detail-value" style={{ width: "87.5%" }}>
              {leave.reason}
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default LeaveRequestForm;
